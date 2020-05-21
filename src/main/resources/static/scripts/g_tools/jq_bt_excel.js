'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<div class="excel-wrap">\n      <div class="excel-header">\n      <div class="excel-top-title">\n      ', '\n      ', '\n      ', '\n      </div>\n      <div class="excel-top-info">\n      <div><span >', '</span><span  class="info-tl-val">', '</span></div>\n      <div><span >', '</span><span >', '</span></div>\n      <div><span >', '</span><span  class="info-bl-val">', '</span></div>\n      <div><span >', '</span><span >', '</span></div>\n      ', '\n        </div>\n        </div>\n        <div class="excel-table-wrap">\n        <div class="excel-table-swiper-wrap">\n        ', '\n        </div>\n        </div>\n        </div>\n        <div class="excel-page-control">\n        <div class="btn-group ', '" role="group">\n        <button class="btn btn-primary">\u65B0\u589E\u7801\u5355</button>\n        <button class="btn btn-danger" disabled>\u79FB\u9664\u5F53\u524D</button>\n        </div>\n        <div class="excel-page">\n        ', '\n        </div>\n        </div>'], ['<div class="excel-wrap">\n      <div class="excel-header">\n      <div class="excel-top-title">\n      ', '\n      ', '\n      ', '\n      </div>\n      <div class="excel-top-info">\n      <div><span >', '</span><span  class="info-tl-val">', '</span></div>\n      <div><span >', '</span><span >', '</span></div>\n      <div><span >', '</span><span  class="info-bl-val">', '</span></div>\n      <div><span >', '</span><span >', '</span></div>\n      ', '\n        </div>\n        </div>\n        <div class="excel-table-wrap">\n        <div class="excel-table-swiper-wrap">\n        ', '\n        </div>\n        </div>\n        </div>\n        <div class="excel-page-control">\n        <div class="btn-group ', '" role="group">\n        <button class="btn btn-primary">\u65B0\u589E\u7801\u5355</button>\n        <button class="btn btn-danger" disabled>\u79FB\u9664\u5F53\u524D</button>\n        </div>\n        <div class="excel-page">\n        ', '\n        </div>\n        </div>']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _company = Number($.cookie('company_id')); //公司id

var ratio = sessionStorage.getItem('ratio' + _company); //空差  针对公司的空差


var _g_get_html_doc_name = getHtmlDocName(); //当前页面网址名称


var warehousing_type_key_print = ['distribution_add', 'cutting_add', 'distribution_edit', 'inventory_entry_info', 'inventory_entry_add', 'inventory_entry_edit'].includes(_g_get_html_doc_name) ? 0 : 1;

var _excelModel = ' \n<div class="modal fade modal2" id="excel_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">\n<div class="modal-dialog" style="' + (Number(warehousing_type_key_print) ? 'width: 1200px;' : 'width: 800px;') + '">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" style="font-size: 21px !important;">&times;</span><span class="sr-only">Close</span></button>\n</div>\n<div class="modal-body row" style="height: auto; ' + (Number(warehousing_type_key_print) ? 'width: 1200px;' : 'width: 800px;') + ' max-height: 65vh;overflow: auto;">\n<div class="modal-code-body" style="padding: 5px 30px; height: auto; width: 800px; max-height: 65vh;overflow: auto;display: inline-block;float: left;" >\n  \n</div> \n<div class="modal-print-body" style="padding: 5px 0; height: auto; width: 380px;min-height: 530px; max-height: 90vh;overflow: auto;' + (Number(warehousing_type_key_print) ? 'display: inline-block;' : 'display: none;') + 'float: left;" >\n<div>\n<span style="font-size:12px;display: inline-block;margin-bottom: 10px;">\n      <div class="btn-group">                \n      <button type="button" class="btn btn-default" disabled="true" style="opacity:1;padding:3px 12px;">\u9009\u62E9\u6807\u7B7E\u6837\u5F0F</button>\n      <div class="btn-group">\n          <button type="button" class="btn btn-default dropdown-toggle" style="padding:3px 12px;" data-toggle="dropdown" id="defaultLabel"><span class="caret"></span></button>\n          <ul class="dropdown-menu" role="menu" id="labelSelects">\n         \n\n          </ul>\n      </div>\n      </div>\n      </span>  \n </div>    \n<div style="height:530px;background-color: #525659;" id="div_print_iframe" >\n   \n </div>\n      <div>\n      \n      </div>\n</div>\n</div>\n<div class="modal-footer">\n\n' + (ratio == 1 ? '<div class="public-selection-ck" style="float: left;height:33px;font-size:13px;color:#4a4a4a;"><span style="vertical-align: sub;">\u7EC6\u7801\u5355\u7C73\u7801\u8F6C\u6362</span>\n<input type="checkbox" id="CodeListClick"><label for="CodeListClick" style="padding-top: 0;float: right;"><i class="i-icon i-checkbox-icon"></i></label>\n</div>' : '') + '\n<div class="btn-group" role="group" style="display: inline-block;' + (Number(warehousing_type_key_print) ? 'left: -37%;' : 'left: -28%;') + 'transform: translateX(-50%);height: 34px;margin-top: 30px;">\n<button class="btn btn-primary" style="width: 90px;float: none;border-bottom-right-radius: 4px;border-top-right-radius: 4px;margin-right: 10px;">\u786E\u5B9A</button>\n<button class="btn btn-default" data-dismiss="modal" style="width: 80px;float: none;border-bottom-left-radius: 4px;border-top-left-radius: 4px;">\u53D6\u6D88</button>\n\n</div> \n<div class="btn-group" role="group" style="' + (Number(warehousing_type_key_print) ? 'display: inline-block;' : 'display: none;') + 'right: 1%;transform: translateX(-50%);height: 34px;margin-top: 30px;">\n  <button class="btn " id="print_ii" style="width: 170px;float: none;border-bottom-right-radius: 4px;border-top-right-radius: 4px;margin-right: 10px;background-color: #20a0ff;border-color: #20a0ff;color:#ffffff;">\u6253\u5370\uFF08\u6309P\u952E\u53EF\u6253\u5370\uFF09</button>\n</div>\n</div> \n</div>  \n</div>\n</div>';
var _printLabelModel = '\n<div class="modal fade modal2 not-last-model" id="print_label_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">\n<div class="modal-dialog" style="width: 500px;">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n</div>\n<div class="modal-body print-label-modal-body print-label-modal-body-single" style="padding: 5px 30px; height: auto; max-height: 90vh;overflow: auto;">\n<img class="right_item_img" id="labelPrint_modal" style="width: 100%;"  src="" value="" data-id="">\n</div>\n<div class="modal-footer">\n<span style="font-size:12px;float: left;">\n<div class="btn-group">                \n<button type="button" class="btn btn-default" disabled="true" style="opacity:1;padding:6px 12px;">\u9009\u62E9\u6807\u7B7E\u6837\u5F0F</button>\n<div class="btn-group">\n    <button type="button" class="btn btn-default dropdown-toggle" style="padding:6px 12px;" data-toggle="dropdown" id="defaultLabel_model"><span class="caret"></span></button>\n    <ul class="dropdown-menu" role="menu" id="labelSelects_model">\n\n    </ul>\n</div>\n</div>\n</span>\n<div class="btn-group" role="group">\n<button class="btn btn-primary" style="width: 100px;">\u6253\u5370</button>\n<button class="btn" data-dismiss="modal">\u5173\u95ED</button>\n</div>\n</div>\n</div>\n</div>\n</div>';

var createPrintDiv = function createPrintDiv() {
  var div = document.createElement('div');
  div.innerHTML = '<div class="bt-excel-print" style="display:none;"></div>';
  document.body.appendChild(div);
  return div;
};

var _g_template_id = 0,
    _g_template_id_model = 0,
    _g_is_label_all = 0,
    _g_is_label_val = {},
    _g_is_label_val_temporary = {};

var g_print_timeout = ''; //打印延迟

var g_selection_timeout = ''; //chrome默认的selection操作将会覆盖focus中的js操作代码

var g_reserved_focus = ''; //保留焦点

var g_all_print_types = ''; //全部打印类型

var _ctrl_key_key_code = ''; //快捷组合选中

var _g_template_id_list = [];

var _sellInventoryReduce = 0;

//毛毯定制
var _blanket_customization = [34655, 34493, 8284].includes(Number(_company));

['warehousing_info'].includes(_g_get_html_doc_name) && getCodeTemplates();

isEnableAccountingUnitPublic(function (_obj) {

  _sellInventoryReduce = _obj.sellInventoryReduce;
});

function isNumber(val) {

  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
}

var createSinglePrint = getSingle(createPrintDiv);

var _excelConfig = {
  isEditable: true,
  isForstock: false,
  isprintLabel: false,
  iscutLabel: false,
  isPartEditable: true, //部分可变编辑 出库只可编辑数量
  isTitleEditable: false, //头部不可编辑
  isSellInventoryReduce: false, //是否扣减库存  _excelConfig.isSellInventoryReduce
  title: $.cookie('company_name'),
  subTitle: $.cookie('company_nameEn'),
  typeTitle: '细码单',
  infoTL: {
    label: '编号：',
    value: ''
  },
  infoTR: {
    label: '负责人：',
    value: ''
  },
  infoBL: {
    label: '颜色：',
    value: ''
  },
  infoBR: {
    label: '日期：',
    value: ''
  },
  colTh: [{
    label: '匹号',
    key: 'line',
    value: [],
    isDefault: true,
    editable: true
  }, {
    label: '米',
    key: 'count',
    value: [],
    isDefault: true,
    editable: true
  }],
  rowTr: [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
};

var ExcelMaker = function () {
  function ExcelMaker() {
    _classCallCheck(this, ExcelMaker);

    this.callback = function () {};
    this.init();
  }

  _createClass(ExcelMaker, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      var _body = $('body');
      _body.append(_excelModel);
      _body.append(_printLabelModel);
      this.model = $('#excel_model');

      // this.body = this.model.find('.modal-body');

      this.body = this.model.find('.modal-code-body');

      //细码单model  关闭时触发
      $('#excel_model').on('hidden.bs.modal', function (e) {
        // do something...
        _g_is_label_val = {};
      });

      // 确定
      this.model.find('.modal-footer .btn-primary').on('click', function () {

        //编辑状态下 只关闭    开剪除外

        if (!_excelConfig.isEditable) {

          if (_g_get_html_doc_name != 'cutting_add') {

            _this2.model.modal('hide');

            return;
          }
        }

        //毛毯定制
        if (_blanket_customization) {

          _this2.callback(_this2.returnData());

          _this2.model.modal('hide');

          return;
        }

        var repairArr = [];
        var isBadAdd = false;
        var isLackGang = false;

        var _lin_val = [],
            _gang_val = [],
            _length_val = [],
            _lin_gang_obj = [];

        _this2.body.find('tbody [line-input]').each(function () {
          //卷数

          var val = $(this).val().trim();

          _lin_val.push(val);

          if (!val) {
            return;
          }

          repairArr.push(val);
        });

        _this2.body.find('tbody [gang-input]').each(function () {
          //缸号

          var val = $(this).val().trim();

          _gang_val.push(val);
        });

        _this2.body.find('tbody [count-input]').each(function () {
          //长度

          var val = $(this).val().trim();

          _length_val.push(val);
        });

        _gang_val = _gang_val.slice(0, _lin_val.length);

        _lin_val.forEach(function (item, index) {
          // statements
          var _obj = {};

          if (item) {

            if (_length_val[index]) {
              //如果卷号，长度已填。缸号必填

              !_gang_val[index] && (isLackGang = true);
            }

            _obj = {
              line: item,
              gang: _gang_val[index]
            };
          }

          _lin_gang_obj.push(_obj);
        });

        isBadAdd = ArrayObjLike(_lin_gang_obj);
        //缸号必填


        if (isBadAdd) {
          //后端会合并
          var line = _this2.body.find('thead th[line-th]').text().trim();
          g_autoCloseTip('\u8BF7\u786E\u4FDD\u7F38\u53F7\u76F8\u540C\u7684\u60C5\u51B5\u4E0B,' + line.slice(0, 1) + '\u7684\u552F\u4E00\u6027\uFF01');
          return;
        }

        if (isLackGang && _g_get_html_doc_name != 'cutting_add' && _g_get_html_doc_name != 'stock_list' && _g_get_html_doc_name != 'warehousing_info' && _g_get_html_doc_name != 'outbound_info') {
          //不做处理
          g_autoCloseTip('缸号必填!');
          return;
        }

        if (repairArr.length == 0 && _g_get_html_doc_name != 'cutting_add' && _g_get_html_doc_name != 'stock_list' && _g_get_html_doc_name != 'warehousing_info' && _g_get_html_doc_name != 'outbound_info' && _g_get_html_doc_name != 'purchase_stock_detail' && _g_get_html_doc_name != 'purchase_return_detail') {
          //不做处理

          g_autoCloseTip('\u8BF7\u8F93\u5165' + (_excelConfig.colTh.length === 4 ? _excelConfig.colTh[0].label : _excelConfig.colTh[1].label) + '\uFF01');
          return;
        }

        _this2.callback(_this2.returnData());

        _this2.model.modal('hide');
      });

      this.initControlTable();
      //new ++ 打印存图
      // 生成打印
      this.model.on('click', '.print-btn', function () {

        //载入打印页面的位置
        createSinglePrint();

        var _excelerReturnHtml = exceler.returnHtml(_excelConfig, 1);

        //载入打印页面的内容
        $('body .bt-excel-print').html(_excelerReturnHtml);

        //计算每个页面的数量
        $('body .bt-excel-print').find('.excel-table').each(function (index, el) {

          conutInput($(this));
        });

        //打印每个页面
        $('body .bt-excel-print').printArea({
          popX: 0,
          popY: 0,
          mode: 'popup',
          extraCss: '../styles/laydate/print_style.css',
          popWd: screen.width,
          popHt: screen.height
        });
      });
      //标签打印
      // 全部标签打印


      _body.on('click', '#print_label_model .btn-primary', function () {

        var _template_label_obj = {
          companyId: _company,
          templateId: _g_template_id_model,
          userId: Number($.cookie('user_id')),
          warehouseId: _excelConfig.basicfield.warehouseId ? _excelConfig.basicfield.warehouseId : '',
          sampleId: _excelConfig.basicfield.sampleId,
          colorId: _excelConfig.basicfield.colorId,
          colorName: _excelConfig.basicfield.colorName ? _excelConfig.basicfield.colorName : '',
          colorMark: _excelConfig.basicfield.mark ? _excelConfig.basicfield.mark : '',
          type: _excelConfig.basicfield.type,
          orderNo: _excelConfig.basicfield.orderNo ? _excelConfig.basicfield.orderNo : '',
          orderId: _excelConfig.basicfield.orderId ? _excelConfig.basicfield.orderId : '',
          isAll: Number(_g_is_label_all)

          //毛毯
        };if (_blanket_customization) {
          //_g_is_label_all

          if (Number(_g_is_label_all) === 2) {

            _template_label_obj.colorId = '';

            if (_excelConfig.basicfield.sample) {

              _template_label_obj.isAll = 1;

              _template_label_obj.sample = _excelConfig.basicfield.sample;
            }
          } else {

            _template_label_obj.breadth = Number(_g_is_label_all) ? '' : _g_is_label_val.breadth;

            _template_label_obj.length = Number(_g_is_label_all) ? '' : _g_is_label_val.length;

            _template_label_obj.sampleType = Number(_g_is_label_all) ? '' : _g_is_label_val.sampleType;
          }
        }

        if (Number(_excelConfig.basicfield.dataType) || Number(g_all_print_types) === 2) {
          //不是定制  用json

          console.log(77777);

          _template_label_obj.isAll = 3;

          _template_label_obj.colorId = '';

          _template_label_obj.sampleId = '';

          _template_label_obj.sample = getJsonPrint();
        }

        sessionStorage.setItem('template_label_obj', JSON.stringify(_template_label_obj));

        window.open('../warehouse/code_label_print.html');
      });

      $('#print_label_model').on('hidden.bs.modal', function () {

        _body.addClass('modal-open');
      });

      //选择标签样式并显示模板
      _body.on('click', '#labelSelects li', function (e) {

        var _this = $(this);

        var _id = _this.attr('id');

        $('#defaultLabel').html(_this.html() + ' <span class="caret"></span>');

        $('#labelPrint').attr('data-id', _id);

        _g_template_id = _id;

        getCodeTemplatesInfo(1);
      });

      //选择标签样式并显示模板

      _body.on('click', '#labelSelects_model li', function (e) {

        var _this = $(this);

        var _id = _this.attr('id');

        var _value = _this.attr('value');

        var _labelPrint_modal = $('#labelPrint_modal');

        $('#defaultLabel_model').html(_this.html() + ' <span class="caret"></span>');

        _labelPrint_modal.attr('data-id', _id);

        _labelPrint_modal.attr('src', _value);

        _g_template_id_model = _id;
      });

      //iframe 打印布匹标签
      _body.on('click', '#print_ii', function () {

        var _printLabelModelF = document.getElementById('printIframe');

        // _printLabelModelF.focus();

        // _printLabelModelF.contentWindow.focus();

        _printLabelModelF.contentWindow.print();
      });

      document.onkeyup = function (event) {

        var e = event || window.event || arguments.callee.caller.arguments[0];

        var ctrlKey = e.ctrlKey || e.metaKey;

        if (!ctrlKey) {

          _ctrl_key_key_code = 0;
        }

        if (e && e.keyCode === 80) {
          // 按 p

          Number(warehousing_type_key_print) && !$('#excel_model').is(':hidden') && _body.find('#print_ii').trigger('click');
        }
      };

      //鼠标+键盘
      document.onkeydown = function (e) {

        var keyCode = e.keyCode || e.which || e.charCode;

        var ctrlKey = e.ctrlKey || e.metaKey;

        if (ctrlKey && keyCode == 17) {

          _ctrl_key_key_code = 1;
        }
      };

      //定制的  米码转换 空差 
      //tbody radio 事件
      _body.on('change', '#CodeListClick', function () {

        var _is_check = $(this).is(':checked');

        var _count_nuit = _excelConfig.colTh.length === 4 ? _excelConfig.colTh[3].label : _excelConfig.colTh[4].label;

        if (_count_nuit == '米') {
          //码

          _body.find('[count-th]').eq(0).find('input').val('码');

          _body.find('[count-th]').eq(1).html('码');

          _excelConfig.colTh.length === 4 ? _excelConfig.colTh[3].label = '码' : _excelConfig.colTh[4].label = '码';
        }

        if (_count_nuit == '码') {
          //米 

          _body.find('[count-th]').eq(0).find('input').val('米');

          _body.find('[count-th]').eq(1).html('米');

          _excelConfig.colTh.length === 4 ? _excelConfig.colTh[3].label = '米' : _excelConfig.colTh[4].label = '米';
        }
      });
    }
  }, {
    key: 'initControlTable',
    value: function initControlTable() {

      var that = this;

      // 绑定表头输入
      that.body.on('input', 'thead input', function () {

        that.body.find('th[' + $(this).attr('data-key') + '-th]').text(this.value);
      });
      // 绑定回撤
      that.body.on('keypress', 'tbody input', function (e) {

        if (e.keyCode === 13) {

          var td = $(this).parents('td');
          var table = td.parents('table');
          var thLengthTemp = td.parents('table').find('thead th').length / 2;
          var trIndex = td.parents('tr').index() + 2;
          var tdIndex = td.index() + 1;
          var obj = e.target.attributes[0].name;
          var _count_input_val_first_last = '';

          // 如果在最后一行
          if (trIndex === 51) {

            if (tdIndex > thLengthTemp) {

              return;
            } else {

              trIndex = 1;

              tdIndex = tdIndex + thLengthTemp;

              var _line_input_val_first = table.find('tbody tr:nth-child(' + 50 + ') input[line-input]:first')[0].value;

              var _gang_input_val_first = table.find('tbody tr:nth-child(' + 50 + ') input[gang-input]:first')[0].value;

              var _bao_input_val_first = table.find('tbody tr:nth-child(' + 50 + ') input[bao-input]:first')[0].value;

              _count_input_val_first_last = table.find('tbody tr:nth-child(' + 50 + ') input[count-input]:first')[0].value;

              if (!_line_input_val_first || !_gang_input_val_first) {

                g_autoCloseTip((_excelConfig.colTh.length === 4 ? _excelConfig.colTh[0].label : _excelConfig.colTh[1].label) + '\u548C' + (_excelConfig.colTh.length === 4 ? _excelConfig.colTh[1].label : _excelConfig.colTh[2].label) + '\u4E3A\u5FC5\u586B\u9879\uFF01');

                return;
              }

              if (_count_input_val_first_last) {

                table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:last')[0].value = Number(_line_input_val_first) + 1;

                table.find('tbody tr:nth-child(' + trIndex + ') input[gang-input]:last')[0].value = _gang_input_val_first;

                table.find('tbody tr:nth-child(' + trIndex + ') input[bao-input]:last')[0].value = _bao_input_val_first;

                if (_blanket_customization) {

                  table.find('tbody tr:nth-child(' + trIndex + ') input[count-input]:last')[0].value = _count_input_val_first_last;
                }
              }

              if (!_count_input_val_first_last) {

                g_autoCloseTip((_excelConfig.colTh.length === 4 ? _excelConfig.colTh[3].label : _excelConfig.colTh[4].label) + '\u4E3A\u5FC5\u586B\u9879\uFF01');

                return;
              } else {

                table.find('tbody tr:nth-child(' + trIndex + ') td:nth-child(' + tdIndex + ') input').focus().select();
              }
            }

            return;
          }

          if (e.target.attributes[0].name != 'count-input') {

            table.find('tbody tr:nth-child(' + (trIndex - 1) + ') td:nth-child(' + (tdIndex + 1) + ') input').focus().select();
          } else {

            if (tdIndex < thLengthTemp + 1) {

              var _line_input_val_first2 = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[line-input]:first')[0].value;

              var _gang_input_val_first2 = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[gang-input]:first')[0].value;

              var _bao_input_val_first2 = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[bao-input]:first')[0].value;

              _count_input_val_first_last = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[count-input]:first')[0].value;

              if (!_line_input_val_first2 || !_gang_input_val_first2) {

                g_autoCloseTip((_excelConfig.colTh.length === 4 ? _excelConfig.colTh[0].label : _excelConfig.colTh[1].label) + '\u548C' + (_excelConfig.colTh.length === 4 ? _excelConfig.colTh[1].label : _excelConfig.colTh[2].label) + '\u4E3A\u5FC5\u586B\u9879\uFF01');

                return;
              }

              if (_count_input_val_first_last) {

                var inputNumber = _line_input_val_first2;
                if (isNumber(inputNumber) == true) {

                  if (!table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:first')[0].value) {

                    table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:first')[0].value = Number(_line_input_val_first2) + 1;
                  }
                } else {
                  //避免用户输入数字外的东西

                  if (!table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:first')[0].value) {

                    table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:first')[0].value = '';
                  }
                }

                table.find('tbody tr:nth-child(' + trIndex + ') input[gang-input]:first')[0].value = _gang_input_val_first2;

                table.find('tbody tr:nth-child(' + trIndex + ') input[bao-input]:first')[0].value = _bao_input_val_first2;

                if (_blanket_customization) {

                  table.find('tbody tr:nth-child(' + trIndex + ') input[count-input]:first')[0].value = _count_input_val_first_last;
                }
              }
            } else {

              var _line_input_val_last = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[line-input]:last')[0].value;

              var _gang_input_val_last = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[gang-input]:last')[0].value;

              var _bao_input_val_last = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[bao-input]:last')[0].value;

              _count_input_val_first_last = table.find('tbody tr:nth-child(' + (trIndex - 1) + ') input[count-input]:last')[0].value;

              if (!_line_input_val_last || !_gang_input_val_last) {

                g_autoCloseTip((_excelConfig.colTh.length === 4 ? _excelConfig.colTh[0].label : _excelConfig.colTh[1].label) + '\u548C' + (_excelConfig.colTh.length === 4 ? _excelConfig.colTh[1].label : _excelConfig.colTh[2].label) + '\u4E3A\u5FC5\u586B\u9879\uFF01');

                return;
              }

              if (_count_input_val_first_last) {

                var inputNumber2 = _line_input_val_last;

                if (isNumber(inputNumber2) == true) {
                  if (!table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:last')[0].value) {

                    table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:last')[0].value = Number(_line_input_val_last) + 1;
                  }
                } else {
                  //避免用户输入数字外的东西

                  if (!table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:last')[0].value) {

                    table.find('tbody tr:nth-child(' + trIndex + ') input[line-input]:last')[0].value = '';
                  }
                }
                table.find('tbody tr:nth-child(' + trIndex + ') input[gang-input]:last')[0].value = _gang_input_val_last;

                table.find('tbody tr:nth-child(' + trIndex + ') input[bao-input]:last')[0].value = _bao_input_val_last;

                if (_blanket_customization) {

                  table.find('tbody tr:nth-child(' + trIndex + ') input[count-input]:last')[0].value = _count_input_val_first_last;
                }
              }
            }

            if (!_count_input_val_first_last) {

              g_autoCloseTip((_excelConfig.colTh.length === 4 ? _excelConfig.colTh[3].label : _excelConfig.colTh[4].label) + '\u4E3A\u5FC5\u586B\u9879\uFF01');

              return;
            } else {

              table.find('tbody tr:nth-child(' + trIndex + ') td:nth-child(' + tdIndex + ') input').focus().select();

              //触发选中

              table.find('tbody tr:nth-child(' + trIndex + ') td:nth-child(' + tdIndex + ') input').parents('td').trigger('click', 1);
            }
          }
        }
      });

      // 绑定输入
      that.body.on('input', 'tbody input:not([count-input])', function (a, b) {

        var _this = $(this);

        _this.parents('td').trigger('click', 1);
      });
      // 绑定输入
      that.body.on('input', 'tbody input[count-input]', function (a, b) {
        var _this3 = this;

        var _this = $(this);

        this.value = correctNumberInputAccurate(b || this.value);

        if (_this.attr('data-count')) {

          var count = correctNumberInputAccurate(_this.attr('data-count')); //只在剪样时有效

          if (Number(this.value) > Number(count)) {

            //入库 初始入库 的编辑时 可以大于入库数

            //进货单 新增修改 的编辑时 可以大于进货数 

            //还要考虑是否扣减

            isEnableAccountingUnitPublic(function (_obj) {

              if (Number(_obj.sellInventoryReduce)) {

                (_g_get_html_doc_name == 'sale_slip_edit' || _g_get_html_doc_name == 'sale_slip_add') && (_this3.value = count);
              }

              conutInput($(_this3).parents('table'));
            });
          } else {
            conutInput($(this).parents('table'));
          }
        } else {
          conutInput($(this).parents('table'));
        }

        _this.parents('td').trigger('click', 1);
      });

      if (_blanket_customization) {

        that.body.on('input', 'tbody input[gang-input],tbody input[bao-input]', function (a, b) {
          var _this4 = this;

          var _this = $(this);

          var _parents = _this.parents('tr');

          var _this_attr_list = [{ //宽幅*长度=面积
            key: 'gang',
            inputType: 1
          }, {
            key: 'bao',
            inputType: 1
          }];

          var _excel_key_list = [];

          var _input_index = 0; //0前半部份 1后半部分

          _excelConfig.colTh.forEach(function (item) {
            _excel_key_list.push(item.key);
          });

          _this_attr_list.forEach(function (item, index) {

            if (_excel_key_list.includes('' + item.key)) {

              switch (Number(item.inputType)) {
                case 1:
                  _this4.value = correctNumberInputAccurate(b || _this4.value);
                  break;

                default:
                  break;
              }

              var thLengthTemp = _this.parents('table').find('thead th').length / 2;

              var tdIndex = _this.parents('td').index() + 1;

              Number(thLengthTemp) > Number(tdIndex) ? _input_index = 0 : _input_index = 1;
            }
          });

          // console.log(Number(_final_val) ? _final_val : this.value); 

          _excelConfig.colTh.forEach(function (item, index) {

            if (item.key === 'count') {

              var _this_val = correctNumberInput(Number(_parents.find('input[gang-input]:' + (Number(_input_index) ? 'last' : 'first'))[0].value) * Number(_parents.find('input[bao-input]:' + (Number(_input_index) ? 'last' : 'first'))[0].value));

              _this_val && (_parents.find('input[' + item.key + '-input]:' + (Number(_input_index) ? 'last' : 'first'))[0].value = _this_val);

              //触发count-input input事件；
              _this_val && _parents.find('input[' + item.key + '-input]:' + (Number(_input_index) ? 'last' : 'first')).trigger('input');
            }
          });

          _this.parents('td').trigger('click', 1);
        });
      }

      //取消绑定事件 

      that.body.on('mouseleave', '.excel-table', function () {

        $(this).off('mouseup mousemove');
      });

      //细码单加入class code-list-bg-E8F5FF   

      that.body.on('click', 'tbody td', function (a, b) {

        var _this = $(this);

        if (Number(b) === 2 && _this.hasClass('code-list-bg-E8F5FF')) {

          return;
        }
        console.log(88888);

        var tr = _this.parents('tr');

        var _isEmpty = 0;

        var _input_index = 0; //0前半部份 1后半部分

        var thLengthTemp = Number(_excelConfig.colTh.length);

        var tdIndex = _this.index();

        var lineArr = [];

        _g_is_label_val_temporary = JSON.parse(JSON.stringify(_g_is_label_val));

        Number(thLengthTemp) > Number(tdIndex) ? _input_index = 0 : _input_index = 1;

        //拖动选取不取消颜色  和  ctrl + 鼠标左键

        if (Number(b) != 2 && !Number(_ctrl_key_key_code)) {

          _this.parents('table').find('tbody td').removeClass('code-list-bg-E8F5FF');
        }

        tr.find('td').each(function (item) {

          var _td_this = $(this);

          _input_index === 0 && item < thLengthTemp && _td_this.addClass('code-list-bg-E8F5FF');

          _input_index === 1 && item > thLengthTemp - 1 && _td_this.addClass('code-list-bg-E8F5FF');
        });

        // 没有打印界面的  return
        if (Number(warehousing_type_key_print) != 1) {

          return;
        }

        _g_is_label_all = 0;

        tr.find('td').each(function (item) {

          var _td_this = $(this);

          if (_input_index === 0 && item < thLengthTemp) {
            //前

            var _colTh = _excelConfig.colTh[item % _excelConfig.colTh.length];

            var _nth_child_input = _td_this.find('input').val();

            var _nth_child_text = _td_this.find('span').text();

            var _data = {
              label: _colTh.label,
              value: (_nth_child_input ? _nth_child_input.trim() : '') || (_nth_child_text ? _nth_child_text.trim() : '')
            };

            _data.label && lineArr.push(_data);
          }

          if (_input_index === 1 && item > thLengthTemp - 1) {
            //后

            var _colTh2 = _excelConfig.colTh[item % _excelConfig.colTh.length];

            var _nth_child_input = _td_this.find('input').val();

            var _nth_child_text = _td_this.find('span').text();

            var _data2 = {
              label: _colTh2.label,
              value: (_nth_child_input ? _nth_child_input.trim() : '') || (_nth_child_text ? _nth_child_text.trim() : '')
            };

            _data2.label && lineArr.push(_data2);
          }
        });

        if (lineArr.length) {

          lineArr.forEach(function (item) {

            if (_blanket_customization) {

              '卷号'.includes(item.label) && (_g_is_label_val.boltNo = item.value);
              '幅宽'.includes(item.label) && (_g_is_label_val.breadth = item.value);
              '长度'.includes(item.label) && (_g_is_label_val.length = item.value);
              '面积'.includes(item.label) && (_g_is_label_val.quantity = item.value);
              '类型'.includes(item.label) && (_g_is_label_val.sampleType = item.value);
            } else {

              '匹号'.includes(item.label) && (_g_is_label_val.boltNo = item.value);
              '缸号'.includes(item.label) && (_g_is_label_val.dyelot = item.value);
              '包号库位'.includes(item.label) && (_g_is_label_val.packageNo = item.value);

              var generalUnit = JSON.parse(sessionStorage.getItem('generalUnit'));

              if (generalUnit) {

                var unitString = '';

                generalUnit.forEach(function (itemz) {

                  unitString += itemz.unitName;
                });

                unitString.includes(item.label) && (_g_is_label_val.quantity = item.value);
              } else {

                '米数码公斤卷匹件条'.includes(item.label) && (_g_is_label_val.quantity = item.value);
              }

              //quantity 无值处理
              !_g_is_label_val.quantity && '米数码公斤卷匹件条'.includes(item.label) && (_g_is_label_val.quantity = item.value);

              //盘点
              item.label.indexOf('实存') != -1 && (_g_is_label_val.quantity = item.value);
            }
          });
        }

        //两次点击是否一样
        if (JSON.stringify(_g_is_label_val_temporary) === JSON.stringify(_g_is_label_val)) {

          return;
        }

        for (var key in _g_is_label_val) {

          if (_g_is_label_val.hasOwnProperty(key)) {

            var element = _g_is_label_val[key];

            if (key == 'quantity' && !element) {

              _isEmpty = 1;
            }
          }
        }

        if (Number(_excelConfig.basicfield.dataType)) {
          //json 处理

          var _temporary_data = {
            sampleId: _excelConfig.basicfield.sampleId,
            colorId: _excelConfig.basicfield.colorId
          },
              _data_arr = [],
              _data_obj_arr = {};

          _temporary_data = $.extend({}, _temporary_data, _g_is_label_val);

          _temporary_data = JSON.parse(JSON.stringify(_temporary_data).replace(/quantity/g, 'num'));

          _data_arr.push(_temporary_data);

          _data_obj_arr.samples = _data_arr;

          _excelConfig.basicfield.sample = JSON.stringify(_data_obj_arr);
        }

        clearTimeout(g_print_timeout);

        g_print_timeout = setTimeout(function () {

          !_isEmpty && getCodeTemplatesInfo();

          g_print_timeout = null;
        }, Number(b) ? 500 : 0);
      });

      // 统计
      that.body.on('blur', 'tbody input[count-input]', function () {

        this.value = parseFloat(this.value) || '';
      });

      var _print_label_item_no = '';
      var _print_label_sample_color = '';

      //打印所以样品布匹标签？  m毛毯项目

      $('#warehousing_info_print_all,#warehousing_info_print_part').on('click', function () {

        var _labelPrint = $('#labelPrint_modal');
        var _labelSelects = $('#labelSelects_model');
        var _defaultLabel = $('#defaultLabel_model');
        var _print_label_model = $('#print_label_model');
        var _json_all_data = JSON.parse(sessionStorage.getItem('warehousing_info_print_all_data'));

        var _this = $(this);

        var _type = _this.attr('data-type');

        _g_is_label_all = 2;

        var _part_all = Number(sessionStorage.getItem('warehousing_info_print_part_all'));

        _part_all && (_type = 1);

        if (Number(_type)) {

          _excelConfig.basicfield = {
            type: 3,
            orderNo: _json_all_data.orderNo,
            orderId: _json_all_data.orderId
          };
        } else {

          var _table = _this.attr('data-table');

          var _data_arr = [];

          var _data_obj_arr = {};

          $('#' + _table).find('tbody tr').each(function (index, el) {

            var _that = $(this);

            var _data_obj = {};

            var _is_checked = _that.find('input[type=\'checkbox\']').is(':checked');

            if (_is_checked) {

              _data_obj.sampleId = _that.attr('data-sid');
              _data_obj.colorId = _that.attr('data-color');
              _data_obj.breadth = _that.attr('data-breadth');
              _data_obj.length = _that.attr('data-length');
              _data_obj.num = Number(_that.attr('data-num'));

              _data_arr.push(_data_obj);
            }
          });

          if (_data_arr.length) {

            var _copy_data_arr = [];

            _data_arr.forEach(function (item) {

              delete item.num;

              _copy_data_arr.push(item);
            });

            _data_arr = _copy_data_arr;
          } else {

            g_msgAlert('请选择你要打印的样品！');

            return;
          }
          //打印部分

          _data_obj_arr.samples = _data_arr;

          _excelConfig.basicfield = {
            type: 3,
            orderNo: _json_all_data.orderNo,
            orderId: _json_all_data.orderId,
            sample: JSON.stringify(_data_obj_arr)
          };
        }

        if (_g_template_id_list.length) {

          var _html = '';

          _g_template_id_list.forEach(function (item, index) {

            if (Number(item.isDefault) === 1) {

              _labelPrint.attr('src', item.templatePicKey).attr('data-id', item.templateId);

              _defaultLabel.html(item.templateName + ' ' + '<span class="caret"></span>');

              _g_template_id_model = item.templateId;
            }

            _html += '<li id="' + item.templateId + '" value="' + item.templatePicKey + '"><a>' + item.templateName + '</a></li>';
          });

          _labelSelects.html(_html);
        }

        _print_label_model.modal('show');
      });

      //打印标签
      _body.on('click', '.print-cloth-label', function () {
        //详情需要

        var _print_label_model = $('#print_label_model');

        var _labelPrint = $('#labelPrint_modal');
        var _labelSelects = $('#labelSelects_model');
        var _defaultLabel = $('#defaultLabel_model');
        var _html = '';

        g_all_print_types = $('#print_pda_all').is(':checked') ? 1 : 2;

        _g_is_label_all = 1;

        _g_template_id_list.forEach(function (item, index) {

          if (Number(item.isDefault) === 1) {

            _labelPrint.attr('src', item.templatePicKey).attr('data-id', item.templateId);

            _defaultLabel.html(item.templateName + ' ' + '<span class="caret"></span>');

            _g_template_id_model = item.templateId;
          }

          _html += '<li id="' + item.templateId + '" value="' + item.templatePicKey + '"><a>' + item.templateName + '</a></li>';
        });

        _labelSelects.html(_html);

        _print_label_model.modal('show');
      });

      //开剪该卷号

      that.body.on('click', '.cut-cloth-label', function () {

        // 因为数量统计 按照现有逻辑必须一致维持在 第一
        var _this = $(this);
        var _this_td = _this.parent('td');
        var tr = _this_td.parent('tr');
        var tdLength = tr.find('td').length / 2;
        var tdIndex = _this_td.index();
        var thead = that.body.find('thead');
        var lineArr = [];
        var objectLineArr = {};

        if (tdLength == 5) {
          for (var i = 0; i < tdLength; i++) {

            var _nth_child_input = tr.find('td:nth-child(' + (tdIndex + i) + ') input').val();
            var _nth_child_text = tr.find('td:nth-child(' + (tdIndex + i + 1) + ') span').text();
            // console.log(_nth_child_input)
            // console.log(_nth_child_text)
            var _data = {
              label: thead.find('th:nth-child(' + (i + tdLength + 1) + ')').text().trim(),
              value: (_nth_child_input ? _nth_child_input.trim() : '') || (_nth_child_text ? _nth_child_text.trim() : '')
              // console.log(_data)
            };_data.label && lineArr.push(_data);
          }
        } else {
          for (var i = 0; i < tdLength; i++) {

            var _nth_child_input = tr.find('td:nth-child(' + (tdIndex + i + 1) + ') input').val();
            var _nth_child_text = tr.find('td:nth-child(' + (tdIndex + i + 1) + ') span').text();

            var _data3 = {
              label: thead.find('th:nth-child(' + (i + tdLength + 1) + ')').text().trim(),
              value: (_nth_child_input ? _nth_child_input.trim() : '') || (_nth_child_text ? _nth_child_text.trim() : '')
            };

            _data3.label && lineArr.push(_data3);
          }
        }

        // console.log(lineArr)


        objectLineArr = {
          'boltNo': lineArr[0].value,
          'dyelot': lineArr[1].value,
          'packageNo': lineArr[2].value

          // console.log(objectLineArr)
          // return false
        };if (!objectLineArr['boltNo'] || !objectLineArr['dyelot']) {

          g_autoCloseTip('数据错误，不符合开剪按规则！');
        } else {

          //写入 boltNo  dyelot 为开剪 做准备

          $.cookie('cut_object', JSON.stringify(objectLineArr), {
            path: '/'
          });

          if (getHtmlDocName() == 'outbound_add' || getHtmlDocName() == 'outbound_edit') {
            window.open('cutting_add.html');
          } else {
            location.href = 'cutting_add.html';
          }
        }
      });

      // 新增一个细码单
      that.body.on('click', '.excel-page-control .btn-primary', function () {
        var tables = that.body.find('table');
        var tempTable = tables.eq(0);
        var length = tables.length;
        $(this).prop('disabled', true);
        that.body.find('.excel-table-swiper-wrap').append(tempTable.prop('outerHTML'));
        var newTable = that.body.find('table:last');
        newTable.css('left', length * 680 + 'px');

        newTable.find('thead input[type=\'checkbox\']').each(function () {

          var td_input = $(this);

          var td_id = td_input.attr('id');

          td_input.attr('id', td_id + '_' + (length + 1));
        });

        newTable.find('thead label').each(function () {

          var td_input = $(this);

          var td_for = td_input.attr('for');

          td_input.attr('for', td_for + '_' + (length + 1));
        });

        newTable.find('tbody input[type=\'checkbox\']').each(function () {

          var td_input = $(this);

          var td_id = td_input.attr('id');

          td_input.attr('id', td_id + '_' + (length + 1));
        });

        newTable.find('tbody label').each(function () {

          var td_input = $(this);

          var td_for = td_input.attr('for');

          td_input.attr('for', td_for + '_' + (length + 1));
        });

        newTable.find('tbody input').val('');

        newTable.find('tfoot td').html('');

        that.body.find('.excel-page').append('<span>' + (length + 1) + '</span>');
        that.body.find('.excel-page span:last').trigger('click');
        $(this).prop('disabled', false);
      });

      // 删除一个细码单
      that.body.on('click', '.excel-page-control .btn-danger', function () {

        var page = parseInt(that.body.find('.excel-page .active').text());

        var hasDate = 0;

        that.body.find('table:nth-child(' + page + ') tbody tr').each(function () {

          var _this = $(this);

          if (Number(_this.find('[count-input]').eq(0).val()) || Number(_this.find('[count-input]').eq(1).val())) {

            hasDate = 1;

            return false;
          };
        });

        if (Number(hasDate)) {

          g_confirmAlert('该细码单还有数据，确定要删除当前页面吗？', function () {

            removeCode();
          });
        } else {

          removeCode();
        }

        function removeCode() {

          that.body.find('.excel-page span:nth-child(' + (page - 1) + ')').trigger('click');

          that.body.find('table:nth-child(' + page + ')').remove();

          that.body.find('.excel-page span:last').remove();

          that.body.find('table').each(function (i) {
            $(this).css('left', i * 680 + 'px');
          });
        }
      });

      // 翻页
      that.body.on('click', '.excel-page span', function () {

        var page = parseInt(this.innerText);

        $(this).addClass('active').siblings('span').removeClass('active');

        that.body.find('.excel-table-swiper-wrap').css('left', '-' + (page - 1) * 680 + 'px');

        that.body.find('.excel-page-control .btn-danger').prop('disabled', page === 1);

        //也需要计算
        conutInput($(this).parents('table'));
      });

      //单独一列的全选
      that.body.on('click', 'thead input[type=\'checkbox\']', function () {

        var _this = $(this);

        var _checked_type = Number(_this.attr('data-type'));

        var _is_checked = _this.is(':checked');

        var _active = Number(that.body.find('.excel-page .active').text());

        var thisTable = that.body.find('table:nth-child(' + _active + ')');

        if (_is_checked) {
          thisTable.find('tbody tr').each(function (index, el) {
            var _this = $(this);
            var key = 0;
            var _this_checkeds = _this.find('input[type=\'checkbox\']');
            var _this_checked = _this.find('input[type=\'checkbox\']:' + (_checked_type ? 'last' : 'first'));
            if (_this_checkeds.length && _this_checkeds.length === 1) {
              _this.find('input[type=\'checkbox\']:' + (_checked_type ? 'last' : 'first')).parents('td').index() > 0 ? key = 1 : key = 0;
              if (key == _checked_type) {
                _this.find('input[type=\'checkbox\']').prop('checked', true);
                conutInput($(this).parents('table'));
              }
            } else {
              _this_checked.length && (_this_checked.prop('checked', true), conutInput($(this).parents('table')));
            }
          });
        } else {
          thisTable.find('tbody tr').each(function (index, el) {
            var _this = $(this);
            var key = 0;
            var _this_checkeds = _this.find('input[type=\'checkbox\']');
            var _this_checked = _this.find('input[type=\'checkbox\']:' + (_checked_type ? 'last' : 'first'));
            if (_this_checkeds.length && _this_checkeds.length === 1) {
              _this.find('input[type=\'checkbox\']:' + (_checked_type ? 'last' : 'first')).parents('td').index() > 0 ? key = 1 : key = 0;
              if (key == _checked_type) {
                _this.find('input[type=\'checkbox\']').prop('checked', false);
                conutInput($(this).parents('table'));
              }
            } else {
              _this_checked.length && (_this_checked.prop('checked', false), conutInput($(this).parents('table')));
            }
          });
        }
      });

      //tbody checkbox 事件
      that.body.on('click', 'tbody input[type=\'checkbox\']', function () {

        var _this = $(this);

        var _is_checked = _this.is(':checked');

        var td = _this.parents('td');

        var tdIndex = Number(td.index());

        var _active = Number(that.body.find('.excel-page .active').text());

        var thisTable = that.body.find('table:nth-child(' + _active + ')');
        var _this_index = _this.index('tbody tr input[type=\'checkbox\']') % 2 == 0 ? 0 : 1;
        var input = _this.parents('tr').find('input[count-input]:' + (Number(_this_index) ? 'last' : 'first'));

        var isAllChecked = true;

        if (_is_checked) {

          thisTable.find('tbody tr').each(function (index, el) {

            var _this = $(this);

            var _this_checked = _this.find('input[type=\'checkbox\']:' + (tdIndex ? 'last' : 'first'));

            if (_this_checked.length && !_this_checked.is(':checked')) {

              isAllChecked = false;
            }
          });

          isAllChecked && thisTable.find('thead tr input[type=\'checkbox\']:' + (tdIndex ? 'last' : 'first')).prop('checked', true);
          input.trigger('input', input.attr('data-count'));
        } else {

          thisTable.find('thead tr input[type=\'checkbox\']:' + (tdIndex ? 'last' : 'first')).prop('checked', false);

          input.val();
          input.trigger('input', '');
        }
      });

      //tbody radio 事件
      that.body.on('click', 'tbody input[type=\'radio\']', function () {

        conutInput($(this).parents('table'));
      });
    }
  }, {
    key: 'replaceHtmlText',
    value: function replaceHtmlText(text) {
      return text ? text.replace(/>/g, '&gt;').replace(/</g, '&lt;') : '';
    }
  }, {
    key: 'returnData',
    value: function returnData() {

      var that = this;
      var data = {};
      // 出库 配货计算
      var hasCheckbox = _g_get_html_doc_name === 'cutting_add' || _g_get_html_doc_name === 'distribution_add' || _g_get_html_doc_name === 'distribution_edit' || _g_get_html_doc_name === 'allocation_edit' || _g_get_html_doc_name === 'outbound_add' || _g_get_html_doc_name === 'allocation_add' || _g_get_html_doc_name === 'purchase_return_add' || _g_get_html_doc_name === 'outbound_edit' || _g_get_html_doc_name === 'sale_slip_add' && _excelConfig.isSellInventoryReduce || _g_get_html_doc_name === 'sale_slip_edit' && _excelConfig.isSellInventoryReduce ? 1 : 0;

      data.basicfield = _excelConfig.basicfield;
      data.title = that.replaceHtmlText(that.body.find('.excel-company-name').text());
      data.subTitle = that.replaceHtmlText(that.body.find('.excel-company-name-en').text());
      data.typeTitle = that.replaceHtmlText(that.body.find('.excel-name').text());
      var infoItems = that.body.find('.excel-top-info div');
      data.infoTL = {
        label: that.replaceHtmlText(infoItems.eq(0).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(0).find('span:last').text())
      };
      data.infoTR = {
        label: that.replaceHtmlText(infoItems.eq(1).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(1).find('span:last').text())
      };
      data.infoBL = {
        label: that.replaceHtmlText(infoItems.eq(2).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(2).find('span:last').text())
      };
      data.infoBR = {
        label: that.replaceHtmlText(infoItems.eq(3).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(3).find('span:last').text())
      };
      data.infoBBL = {
        label: that.replaceHtmlText(infoItems.eq(4).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(4).find('span:last').text())
      };
      data.infoBBR = {
        label: that.replaceHtmlText(infoItems.eq(5).find('span:first').text()),
        value: that.replaceHtmlText(infoItems.eq(5).find('span:last').text())
      };

      data.colTh = [];
      that.body.find('table:first th input[data-key]').each(function () {
        var input = $(this);
        var value = [];
        var _change_checked = false;
        if (hasCheckbox) {
          that.body.find('tbody tr').each(function (i) {
            var _this = $(this),
                _ischeckbox = [];
            var _cked = _this.find('input[type=\'checkbox\'],input[type=\'radio\']'); //new ++
            //new ++
            if (_cked.length) {
              if (_cked.length === 2) {
                _cked.eq(0).is(':checked') && (_change_checked = true);
                _cked.eq(1).is(':checked') && (_change_checked = true);
              } else {
                _cked.eq(0).is(':checked') && (_change_checked = true);
              }
            }
          });
        }
        that.body.find('tfoot td[' + input.attr('data-key') + '-td]').each(function () {
          if (hasCheckbox) {
            _change_checked ? value.push(that.replaceHtmlText(this.innerText)) : value.push(that.replaceHtmlText(''));
          } else {
            value.push(that.replaceHtmlText(this.innerText));
          }
        });
        data.colTh.push({
          label: input.val(),
          key: input.attr('data-key'),
          value: value,
          isDefault: Boolean(input.siblings('i').length),
          editable: input.attr('data-edit') === 'true'
        });
      });

      data.rowTr = [];

      that.body.find('tbody tr').each(function (i) {
        var tempArr = [];
        var _this = $(this),
            _ischeckbox = [];
        if (hasCheckbox) {
          var _cked = _this.find('input[type=\'checkbox\'],input[type=\'radio\']'); //new ++
          //new ++
          if (_cked.length) {
            if (_cked.length === 2) {
              _cked.eq(0).is(':checked') ? _ischeckbox.push(1) : _ischeckbox.push(0);
              _cked.eq(1).is(':checked') ? _ischeckbox.push(1) : _ischeckbox.push(0);
            } else {
              if (_cked.length) {
                if (_cked.parents('td').index() == 0) {
                  _cked.eq(0).is(':checked') ? _ischeckbox.push(1) : _ischeckbox.push(0);
                  _ischeckbox.push(0);
                } else {
                  _ischeckbox.push(0);
                  _cked.eq(0).is(':checked') ? _ischeckbox.push(1) : _ischeckbox.push(0);
                }
              }
            }
          } else {
            _ischeckbox.push(0);
            _ischeckbox.push(0);
          }
        }

        $(this).find('td').each(function (l) {

          var _this = $(this);

          var _last_input_val = _this.find('input[data-count]:last').val();

          if (Number(g_all_print_types) === 2 && _this.hasClass('code-list-bg-E8F5FF')) {

            _last_input_val = _this.find('input[data-count]:last').length ? _this.find('input[data-count]:last').val() : _this.find('span:first').text().trim();
          }

          isUndefinedType(_last_input_val) && (_last_input_val = '');

          //毛毯定制
          if (_blanket_customization) {

            if (_ischeckbox.length) {

              if (_ischeckbox[0] === 0) {
                l === 0 && (_last_input_val = '');
                l === 1 && (_last_input_val = '');
                l === 2 && (_last_input_val = '');
                l === 3 && (_last_input_val = '');
                l === 4 && (_last_input_val = '');
                l === 6 && (_last_input_val = '');
              }

              if (_ischeckbox[1] === 0) {

                l === 7 && (_last_input_val = '');
                l === 8 && (_last_input_val = '');
                l === 9 && (_last_input_val = '');
                l === 10 && (_last_input_val = '');
                l === 11 && (_last_input_val = '');
                l === 12 && (_last_input_val = '');
              }
            }
          } else {

            if (_ischeckbox.length) {

              if (_ischeckbox[0] === 0) {
                l === 0 && (_last_input_val = '');
                l === 1 && (_last_input_val = '');
                l === 2 && (_last_input_val = '');
                l === 3 && (_last_input_val = '');
                l === 4 && (_last_input_val = '');
              }
              if (_ischeckbox[1] === 0) {
                l === 5 && (_last_input_val = '');
                l === 6 && (_last_input_val = '');
                l === 7 && (_last_input_val = '');
                l === 8 && (_last_input_val = '');
                l === 9 && (_last_input_val = '');
              }
            }
          }

          tempArr.push(that.replaceHtmlText(_last_input_val));
        });

        data.rowTr.push(tempArr);
      });

      return data;
    }
  }, {
    key: 'returnHtml',
    value: function returnHtml(data, isprint, hasCheckedData) {
      //有条件处理

      var _rowTr = JSON.parse(JSON.stringify(data.rowTr));

      var _checkedExcel = [];

      // 需要的计算   退货 退回
      var hasCheckbox = _g_get_html_doc_name === 'purchase_return_add' ? 1 : 0;

      //细码单的排序问题都写在这里
      _g_get_html_doc_name == 'sale_slip_detail' || _g_get_html_doc_name == 'purchase_return_detail' || _g_get_html_doc_name == 'sale_return_add' ? _rowTr = spaceSort(_rowTr) : '';

      // 为了个所有的tbody input 打上标记
      data.rowTrMark = data.colTh.map(function (col) {
        return col.key + '-input ' + (col.editable ? '' : 'disabled');
      });
      // 加倍
      data.rowTrMark = data.rowTrMark.concat(data.rowTrMark);

      // 先填充为10倍数
      var addLength = data.rowTr.length % 10;

      //每页行数
      var rowNumber = Number(isprint) ? 10 : 50;

      var addTemp = Array.apply(null, Array(data.rowTr[0].length)).map(function (a) {
        return '';
      });

      if (addLength) {
        for (var i = rowNumber; i > addLength; i--) {
          _rowTr.push(addTemp);
        }
      }

      var _temporary = [];

      data.tableList = [];

      //生成0到10的数
      var LineNumber = Array(rowNumber).fill('naive').map(function (v, i) {
        return i;
      });

      var _page_number = Number(isprint) ? Math.ceil(data.rowTr.length / 10) : Math.ceil(data.rowTr.length / 50);

      // rowNumber = data.rowTr.length
      Array.apply(null, Array(_page_number)).forEach(function (item, i) {

        var rowTr = [];

        LineNumber.forEach(function (j) {
          if (_rowTr.hasOwnProperty([i * rowNumber + j])) {

            rowTr.push(_rowTr[i * rowNumber + j]);
          } else {

            rowTr.push(['', '', '', '', '', '', '', '']);
          }
        });

        _temporary.push(rowTr);
      });

      if (Number(isprint)) {

        _temporary.forEach(function (item, index) {

          var result;

          result = item.some(function (itemy, index) {

            return itemy[0] != '' || itemy[4] != '';
          });

          result && data.tableList.push(item);
        });
      } else {

        data.tableList = _temporary;
      }

      if (hasCheckedData && hasCheckedData.length) {

        _checkedExcel = DeleteSpaceForExcel(data.tableList, hasCheckedData);
      }

      //contenteditable="${data.isTitleEditable ? true : false}"
      // console.log(data)

      return data.isEditable ? String.raw(_templateObject, data.title ? '<h2 class="excel-company-name" >' + data.title + '</h2>' : '', data.subTitle ? '<h2 class="excel-company-name-en" >' + data.subTitle + '</h2>' : '', data.typeTitle ? '<h2 class="excel-name" >' + data.typeTitle + '</h2>' : '', data.infoTL.label, data.infoTL.value, data.infoTR.label, data.infoTR.value, data.infoBL.label, data.infoBL.value, data.infoBR.label, data.infoBR.value, data.isForstock && data.infoBBL && data.infoBBR ? '<div><span contenteditable="' + (data.isTitleEditable ? true : false) + '">' + data.infoBBL.label + '</span><span contenteditable="' + (data.isTitleEditable ? true : false) + '">' + data.infoBBL.value + '</span></div>\n        <div><span contenteditable="' + (data.isTitleEditable ? true : false) + '">' + data.infoBBR.label + '</span><span contenteditable="' + (data.isTitleEditable ? true : false) + '">' + data.infoBBR.value + '</span></div>' : '', data.tableList.map(function (row, tableIndex) {
        // console.log(row)
        return '\n          <table class="excel-table"  style="left:' + tableIndex * 680 + 'px">\n          <thead>\n          <tr>\n          ' + data.colTh.map(function (th, thIndex) {
          return '<th ' + th.key + '-th  ' + (th.key === 'line' ? 'class="sort-th"' : '') + '>  ' + (th.key === 'choose' ? '<input type="checkbox" data-type="' + thIndex + '" id="excel_cked_half_' + tableIndex + thIndex + '"><label for="excel_cked_half_' + tableIndex + thIndex + '" style="' + (data.isSingleElection ? 'display:none;' : 'display:inline-block;') + '"><i class="i-icon i-checkbox-icon"></i></label>' : '<input value="' + th.label + '" data-key="' + th.key + '" data-edit="true" readonly>') + '</th>';
        }).join('') + '\n          \n          ' + data.colTh.map(function (th, thIndex) {
          return '<th ' + th.key + '-th  ' + (th.key === 'line' ? 'class="sort-th"' : '') + '>  ' + (th.key === 'choose' ? '<input type="checkbox" data-type="' + (thIndex + 1) + '" id="excel_cked_half_' + tableIndex + (thIndex + 1) + '"><label for="excel_cked_half_' + tableIndex + (thIndex + 1) + '" style="' + (data.isSingleElection ? 'display:none;' : 'display:inline-block;') + '"><i class="i-icon i-checkbox-icon"></i></label>' : '' + th.label) + '</th>';
        }).join('') + '\n          </tr>\n          </thead>\n          <tbody>\n          ' + row.map(function (tr, trIndex) {
          return '<tr>' + tr.map(function (td, index) {
            return '<td data-index="' + tableIndex + '-' + trIndex + '-' + index + '">' + (data.rowTrMark[index].indexOf('choose-input') != -1 && '' + td ? '<input  type="' + (!data.isSingleElection ? 'checkbox' : 'radio') + '"  ' + (_checkedExcel.length && _checkedExcel.indexOf(tableIndex + '-' + trIndex + '-' + index) != -1 ? 'checked=\'checked\'' : '') + '    id="excel_cked_' + tableIndex + trIndex + index + '" ' + (!data.isSingleElection ? '' : 'name=\'stockcut\'') + '><label for="excel_cked_' + tableIndex + trIndex + index + '"><i class="i-icon ' + (!data.isSingleElection ? 'i-checkbox-icon' : 'i-radio-icon') + '"></i></label>' : '<input ' + data.rowTrMark[index] + '    value="' + td + '"   ' + (_sellInventoryReduce && !('' + td) && data.rowTrMark[0].indexOf('choose-input') != -1 ? 'readonly' : '') + '  data-count="' + (data.rowTrMark[index].indexOf('count-input' != -1) ? '' + td : '') + '"  ' + (data.ischeckInventory && data.rowTrMark[index].indexOf('realCount-input') == -1 ? 'readonly' : '') + ' ' + (!data.isPartEditable ? 'readonly' : '') + '>') + (data.isprintLabel && td && data.rowTrMark[index].indexOf('count-input') > -1 ? '<i class="excel-table-th-i print-cloth-label" style="left: -60px;" data-type="0">打印标签</i>' : '') + (data.cutAndPrint && td && data.rowTrMark[index].indexOf('line-input') > -1 ? '<i class="excel-table-th-i cut-cloth-label">开剪</i>' : '') + '</td>';
          }).join('') + '</tr>';
        }).join('') + '\n          </tbody>\n          <tfoot>\n          <tr>\n          ' + data.colTh.map(function (th) {
          return '<td class="sale-orange" ' + th.key + '-td ' + (th.isDefault ? '' : 'contenteditable="true"') + '>' + (th.value[tableIndex * 2] || '') + '</td>';
        }).join('') + '\n          ' + data.colTh.map(function (th) {
          return '<td class="sale-orange" ' + th.key + '-td ' + (th.isDefault ? '' : 'contenteditable="true"') + '>' + (th.value[tableIndex * 2 + 1] || '') + '</td>';
        }).join('') + '\n          </tr>\n          </tfoot>\n          </table>\n          ';
      }).join(''), data.NoAddDel ? 'display-none' : '', data.tableList.map(function (table, index) {
        return '<span ' + (!index ? 'class="active"' : '') + '>' + (index + 1) + '</span>';
      }).join('')) : data.tableList.map(function (row, tableIndex) {
        return '<div class="excel-wrap">\n          <div class="excel-header">\n          <div clas="excel-top-title">\n          ' + (data.title ? '<h2 class="excel-company-name">' + data.title + '</h2>' : '') + '\n          ' + (data.subTitle ? '<h2 class="excel-company-name-en" >' + data.subTitle + '</h2>' : '') + '\n          ' + (data.typeTitle ? '<h2 class="excel-name">' + data.typeTitle + '</h2>' : '') + '\n          </div>\n          <div class="excel-top-info">\n          <div><span>' + data.infoTL.label + '</span><span class=\'info-bl-val\'>' + data.infoTL.value + '</span></div>\n          <div><span>' + data.infoTR.label + '</span><span class="info-br-val">' + data.infoTR.value + '</span></div>\n          <div><span>' + data.infoBL.label + '</span><span class=\'info-bl-val\'>' + data.infoBL.value + '</span></div>\n          <div><span>' + data.infoBR.label + '</span><span class="info-br-val">' + data.infoBR.value + '</span></div>\n            </div>\n            </div>\n            <table class="excel-table">\n            <thead>\n            <tr>\n            ' + data.colTh.map(function (th) {
          return '<th ' + th.key + '-th ' + (th.key === 'tiao' ? 'style="width:100px;"' : '') + ' ' + (th.key === 'line' ? 'class="sort-th"' : '') + '>' + th.label + '</th>';
        }).join('') + '\n            ' + data.colTh.map(function (th) {
          return '<th ' + th.key + '-th ' + (th.key === 'tiao' ? 'style="width:100px;"' : '') + ' ' + (th.key === 'line' ? 'class="sort-th"' : '') + '>' + th.label + '</th>';
        }).join('') + '\n            </tr>\n            </thead>\n            <tbody>\n            ' + row.map(function (tr) {
          return '<tr>' + tr.map(function (td, index) {
            return '<td dada-index=' + index + ' ' + (data.rowTrMark[index] === 'tiao-input ' ? 'style="width:100px;"' : '') + '><span ' + data.rowTrMark[index] + '  >' + td + '</span>' + (data.iscutLabel && td && data.rowTrMark[index].indexOf('line-input') > -1 ? '<i class="excel-table-th-i cut-cloth-label">开剪</i>' : '') + '</td>';
          }).join('') + '</tr>';
        }).join('') + '\n            </tbody>\n            <tfoot>\n            <tr>\n            ' + data.colTh.map(function (th) {
          return '<td class="sale-orange" ' + th.key + '-td ' + (th.key === 'tiao' ? 'style="width:100px;"' : '') + '>' + (th.value[tableIndex * 2] || '') + '</td>';
        }).join('') + '\n            ' + data.colTh.map(function (th) {
          return '<td class="sale-orange" ' + th.key + '-td ' + (th.key === 'tiao' ? 'style="width:100px;"' : '') + '>' + (th.value[tableIndex * 2 + 1] || '') + '</td>';
        }).join('') + '\n            </tr>\n            </tfoot>\n            </table>\n            </div>';
      }).join('');
    }
  }, {
    key: 'open',
    value: function open(config, submitCb, hasCheckedData) {

      var _CodeListClick = $('#CodeListClick');
      //赋值


      _excelConfig = $.extend({}, _excelConfig, config);

      if ((_company === 31801 || _company === 3684) && _g_get_html_doc_name != 'inventory_add') {

        _excelConfig.colTh.forEach(function (item) {

          item.key === 'bao' && (item.label = '库位');
        });
      }

      if (_company === 32525) {

        _excelConfig.colTh.forEach(function (item) {

          item.key === 'bao' && (item.label = '码数');
        });
      }

      if (_company === 34869) {

        _excelConfig.colTh.forEach(function (item) {

          item.key === 'bao' && (item.label = '库位');
        });
      }

      this.callback = submitCb;

      if (Number(_excelConfig.isSpaceDifferenceunit)) {

        _excelConfig.colTh.forEach(function (item) {

          if (item.key === 'count') {

            if (_excelConfig.isSpaceDifferenceunit) {

              item.label = _excelConfig.isSpaceDifferenceunit;

              _CodeListClick.prop('checked', true);
            } else {

              _CodeListClick.prop('checked', false);
            }
          }
        });
      }

      this.body.html(this.returnHtml(_excelConfig, '', hasCheckedData));

      Number(_excelConfig.useSpaceDifference) ? _CodeListClick.parents('.public-selection-ck').show() : _CodeListClick.parents('.public-selection-ck').hide();

      this.model.modal('show');

      $('body #excel_model').find('.excel-table').tableMultipleSelection();

      // 获取table 待优化

      //展示布匹标签
      Number(warehousing_type_key_print) && getCodeTemplates();

      //计算每个页面的数量
      $('body #excel_model').find('.excel-table').each(function (index, el) {

        conutInput($(this));
      });
    }
  }]);

  return ExcelMaker;
}();

//inputnew 有细码单时  需要点开计算


function conutInput(table) {

  console.log('Calculation');

  var firstLine = 0;
  var firstTotal = 0;
  var lastLine = 0;
  var lastTotal = 0;

  var countUnit = table.find('thead th[count-th]').text().trim().charAt('' + (_g_get_html_doc_name === 'inventory_add' ? 5 : 0));

  var hasCheckbox = 0;

  if (localStorage.getItem('distributionProcess') == '1') {

    hasCheckbox = _g_get_html_doc_name === 'distribution_add' || _g_get_html_doc_name === 'distribution_edit' || _g_get_html_doc_name === 'outbound_add' || _g_get_html_doc_name === 'allocation_add' || _g_get_html_doc_name === 'outbound_edit' || _g_get_html_doc_name === 'allocation_edit' || _g_get_html_doc_name === 'purchase_return_add' || _g_get_html_doc_name === 'cutting_add' ? 1 : 0;
  } else {

    hasCheckbox = _g_get_html_doc_name === 'distribution_add' || _g_get_html_doc_name === 'distribution_edit' || _g_get_html_doc_name === 'outbound_add' || _g_get_html_doc_name === 'sale_slip_add' || _g_get_html_doc_name === 'sale_slip_edit' || _g_get_html_doc_name === 'allocation_add' || _g_get_html_doc_name === 'outbound_edit' || _g_get_html_doc_name === 'allocation_edit' || _g_get_html_doc_name === 'purchase_return_add' || _g_get_html_doc_name === 'cutting_add' ? 1 : 0;
  }

  countUnit = countUnit === '公' ? '公斤' : countUnit;

  //存放信息
  var info = {};
  //下标位置 0 左 1 右
  var place = 0;
  //此计算属于总计
  table.find('tbody input[count-input],tbody span[count-input]').each(function (i) {

    //判断元素标签名
    var _is_span = this.tagName === 'SPAN';

    var val = _is_span ? parseFloat(this.innerText) : parseFloat(this.value);

    var _this = $(this),
        _checkbox = '',
        _ischeckbox = '';
    //tr
    var _tr = _this.parents('tr');
    //tr下的input
    var _cked = _tr.find('input[type=\'checkbox\'],input[type=\'radio\']'); //new ++
    //米数
    var count = _this.val();
    //占用情况
    if (_g_get_html_doc_name == 'outbound_edit' || _g_get_html_doc_name == 'outbound_add' || _g_get_html_doc_name == 'allocation_add' || _g_get_html_doc_name == 'allocation_edit' || _g_get_html_doc_name == 'distribution_edit' || _g_get_html_doc_name == 'distribution_add') {
      if (count !== '') {
        if (_cked.length) {
          if (_cked.length == 1) {
            if (_cked.parents('td').index() == 0 && _tr.children('td').eq(9).children('input').attr('data-count') != '') {
              for (var _i = 5; _i < _tr.children('td').size(); _i++) {
                _tr.children('td').eq(_i).attr('data-select', true);
                _tr.children('td').eq(_i).unbind('click').bind('click', function () {
                  g_msgAlert('该数据已被其他单据占用，请选择其他数据！', function () {
                    return;
                  });
                });
              }
            } else if (_cked.parents('td').index() == 5 && _tr.children('td').eq(4).children('input').attr('data-count') != '') {
              for (var _i2 = 0; _i2 < _cked.parents('td').index(); _i2++) {
                _tr.children('td').eq(_i2).unbind('click').bind('click', function () {
                  g_msgAlert('该数据已被其他单据占用，请选择其他数据！', function () {
                    return;
                  });
                });
              }
            }
          }
        } else {
          if (_this.parents('td').index() == 4) {
            for (var _i3 = 0; _i3 < _this.parents('td').index() + 1; _i3++) {
              _tr.children('td').eq(_i3).bind('click', function () {
                g_msgAlert('该数据已被其他单据占用，请选择其他数据！', function () {
                  return;
                });
              });
            }
          } else {
            for (var _i4 = 5; _i4 < _tr.children('td').size(); _i4++) {
              _tr.children('td').eq(_i4).bind('click', function () {
                g_msgAlert('该数据已被其他单据占用，请选择其他数据！', function () {
                  return;
                });
              });
            }
          }
        }
      }
    }
    if (_cked.length) {
      if (_cked.length != 1) {
        if (i % 2) {
          _checkbox = _cked.eq(1);
        } else {
          _checkbox = _cked.eq(0);
        }
        if (_checkbox.length) {
          _checkbox.eq(0).is(':checked') ? _ischeckbox = 1 : _ischeckbox = 0;
        }
      } else {

        //占用和选中两个状态
        info[i] = {
          'takeUp': true,
          'select': false
        };
        _cked.parents('td').index() == 0 ? place = 0 : place = 1;
        if (i % 2 == place) {
          info[i].takeUp = false;
          info[i].select = _cked.is(':checked');
        }
        if (info[i].takeUp) {
          _ischeckbox = 0;
        } else {
          if (info[i].select) {
            _ischeckbox = 1;
          } else {
            _ischeckbox = 0;
          }
        }
      }
    }
    if (!val) {
      return;
    }

    if (hasCheckbox) {
      if (i % 2) {
        if (_ischeckbox) {
          lastLine++;
          lastTotal += val;
        }
      } else {
        if (_ischeckbox) {
          firstLine++;
          firstTotal += val;
        }
      }
    } else {

      if (i % 2) {
        lastLine++;
        lastTotal += val;
      } else {
        firstLine++;
        firstTotal += val;
      }
    }
    //new end
  });

  _blanket_customization && (countUnit = '平方米');

  table.find('tfoot td[line-td]:first').text(firstLine ? firstLine + ('' + (_blanket_customization ? '卷' : '匹')) : '');
  table.find('tfoot td[count-td]:first').text(firstTotal ? correctNumberInput(firstTotal) + countUnit : '');
  table.find('tfoot td[line-td]:last').text(lastLine ? lastLine + ('' + (_blanket_customization ? '卷' : '匹')) : '');
  table.find('tfoot td[count-td]:last').text(lastTotal ? correctNumberInput(lastTotal) + countUnit : '');
  // coding 循环 table 累加总数
}

//细码单去空格  [3, "18", "2", "", 3]


function DeleteSpaceForExcel(arrLits, arr) {

  var _has_some = [];

  arrLits.forEach(function (item, index) {

    item.forEach(function (itemy, indexy) {

      var _length = Number(itemy.length / 2);

      var _itemx = itemy.slice(0, _length);

      if (_itemx[0]) {

        arr.forEach(function (itemz, indexz) {

          var _true = _itemx.equals(itemz);

          _true && _has_some.push('' + index + '-' + ('' + indexy) + '-' + '0');
        });
      }

      var _itemy = itemy.slice(_length, itemy.length + 1);

      if (_itemy[0]) {

        arr.forEach(function (itemz, indexz) {

          var _true = _itemy.equals(itemz);

          _true && _has_some.push('' + index + '-' + ('' + indexy) + '-' + '5');
        });
      }
    });
  });

  return _has_some;
}

//对象去重复    key value 都一样的情况下  位置一样的情况下 请确保缸号相同的情况下卷的唯一
function ArrayObjLike(_obj) {
  var _new_obj = [],
      _new_double_obj = [];
  _obj.forEach(function (item, index) {
    if (Object.keys(item).length) {
      _new_obj.push(JSON.stringify(item));
    }
  });
  var _new_double_obj = [].concat(_toConsumableArray(new Set(_new_obj)));
  return _new_double_obj.length != _new_obj.length;
}

//判断值得类型
var JudgesType = function JudgesType(type) {

  return function (obj) {

    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };
};

var isUndefinedType = JudgesType('Undefined');

// 判断数组相等
arrayEquals();

function arrayEquals() {

  // Warn if overriding existing method
  if (Array.prototype.equals) console.warn('Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there\'s a framework conflict or you\'ve got double inclusions in your code.');
  // attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array) return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length) return false;

    for (var i = 0, l = this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].equals(array[i])) return false;
      } else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  };

  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, 'equals', {
    enumerable: false
  });
}

// 字符串的计算公式处理
var calculatorFormula = function calculatorFormula(str) {
  return new Function('return (' + str + ')')();
};

//获取打印模板
function getCodeTemplates() {

  var _labelSelects = $('#labelSelects');

  var _defaultLabel = $('#defaultLabel');

  //初始化
  var list_options = {
    type: 'get',
    url: '/api/clothLables/templates',
    data: {
      companyId: _company
    }
  };

  var list_callback = g_return200CbObj(function (data) {

    var _html = '';

    _g_template_id_list = data.lables;

    data.lables.forEach(function (item, index) {

      if (Number(item.isDefault) === 1) {

        _defaultLabel.html(item.templateName + ' ' + '<span class="caret"></span>');

        _g_template_id = item.templateId;

        if (!isUndefinedType(_excelConfig.basicfield)) {

          html = '<iframe id="printIframe" src="/api/clothLables/print.pdf?companyId=' + _company + '&templateId=' + _g_template_id + '&userId=' + Number($.cookie('user_id')) + '&sampleId=' + _excelConfig.basicfield.sampleId + '&warehouseId=' + (_excelConfig.basicfield.warehouseId ? _excelConfig.basicfield.warehouseId : '') + '&type=' + _excelConfig.basicfield.type + '&isAll=0"   type="application/pdf" style="width:370px;height:530px;"   frameborder="0" scrolling="no"> </iframe>';

          $('#div_print_iframe').html(html);
        }
      }

      _html += '<li id="' + item.templateId + '" value="' + item.templatePicKey + '"><a>' + item.templateName + '</a></li>';
    });

    _labelSelects.html(_html);
  });

  if (_g_template_id_list.length) {

    var _html = '';

    _g_template_id_list.forEach(function (item, index) {

      if (Number(item.isDefault) === 1) {

        _defaultLabel.html(item.templateName + ' ' + '<span class="caret"></span>');

        _g_template_id = item.templateId;

        if (!isUndefinedType(_excelConfig.basicfield)) {

          html = '<iframe id="printIframe" src="/api/clothLables/print.pdf?companyId=' + _company + '&templateId=' + _g_template_id + '&userId=' + Number($.cookie('user_id')) + '&warehouseId=' + (_excelConfig.basicfield.warehouseId ? _excelConfig.basicfield.warehouseId : '') + '&sampleId=' + _excelConfig.basicfield.sampleId + '&type=' + _excelConfig.basicfield.type + '&isAll=0"   type="application/pdf" style="width:370px;height:530px;"   frameborder="0" scrolling="no"> </iframe>';

          $('#div_print_iframe').html(html);
        }
      }

      _html += '<li id="' + item.templateId + '" value="' + item.templatePicKey + '"><a>' + item.templateName + '</a></li>';
    });

    _labelSelects.html(_html);
  } else {

    sendAjax(list_options, list_callback);
  }
}

function getCodeTemplatesInfo(type) {

  Number(_excelConfig.basicfield.dataType) && (_g_is_label_all = 1);

  var _template_label_obj = {
    companyId: _company,
    templateId: _g_template_id,
    userId: Number($.cookie('user_id')),
    warehouseId: _excelConfig.basicfield.warehouseId ? _excelConfig.basicfield.warehouseId : '',
    sampleId: _excelConfig.basicfield.sampleId,
    colorId: _excelConfig.basicfield.colorId,
    colorName: _excelConfig.basicfield.colorName ? _excelConfig.basicfield.colorName : '',
    colorMark: _excelConfig.basicfield.mark ? _excelConfig.basicfield.mark : '',
    type: _excelConfig.basicfield.type,
    orderNo: _excelConfig.basicfield.orderNo ? _excelConfig.basicfield.orderNo : '',
    orderId: _excelConfig.basicfield.orderId ? _excelConfig.basicfield.orderId : '',
    isAll: 0, //单选
    dyelot: Number(_g_is_label_all) ? '' : _g_is_label_val.dyelot ? _g_is_label_val.dyelot : '',
    boltNo: Number(_g_is_label_all) ? '' : _g_is_label_val.boltNo ? _g_is_label_val.boltNo : '',
    quantity: Number(_g_is_label_all) ? '' : _g_is_label_val.quantity ? _g_is_label_val.quantity : '',
    contractNo: _excelConfig.basicfield.contractNo ? _excelConfig.basicfield.contractNo : ''

    //新样品要加单位
  };if (Number(_excelConfig.basicfield.type) === 3) {

    _template_label_obj.packageUnit = _excelConfig.basicfield.packageUnit ? _excelConfig.basicfield.packageUnit : '';

    _template_label_obj.quantityUnit = _excelConfig.basicfield.quantityUnit ? _excelConfig.basicfield.quantityUnit : '';
  }

  //毛毯
  if (_blanket_customization) {

    if (Number(_g_is_label_all) === 2) {

      _template_label_obj.colorId = '';

      _template_label_obj.isAll = Number(_g_is_label_all);

      if (_excelConfig.basicfield.sample) {

        _template_label_obj.isAll = 1;

        _template_label_obj.sample = _excelConfig.basicfield.sample;
      }
    } else {

      _template_label_obj.breadth = Number(_g_is_label_all) ? '' : _g_is_label_val.breadth;

      _template_label_obj.length = Number(_g_is_label_all) ? '' : _g_is_label_val.length;

      _template_label_obj.sampleType = Number(_g_is_label_all) ? '' : _g_is_label_val.sampleType;
    }
  }

  if (Number(_excelConfig.basicfield.dataType)) {
    //不是定制  用json

    _template_label_obj.isAll = 3;

    _template_label_obj.colorId = '';

    Number(type) ? _template_label_obj.sampleId = _excelConfig.basicfield.sampleId : _template_label_obj.sampleId = '';

    _template_label_obj.sample = _excelConfig.basicfield.sample ? _excelConfig.basicfield.sample : '';
  }

  var _data = '';

  for (var key in _template_label_obj) {

    if (_template_label_obj.hasOwnProperty(key)) {

      var element = _template_label_obj[key];

      if (key == 'sample') {

        element = encodeURIComponent(element);
      }

      String(element) != '' && (_data += '&' + key + '=' + element);
    }
  }

  _data = _data.replace(/^(\s|&)+|(\s|&)+$/g, '');

  // console.log(_data);


  html = '<iframe id="printIframe" src="/api/clothLables/print.pdf?' + _data + '"   type="application/pdf" style="width:370px;height:530px;"   frameborder="0" scrolling="no"> </iframe>';

  $('#div_print_iframe').html(html);
}

//获取json  样式


function getJsonPrint() {

  var data = {};

  if (Number(g_all_print_types) === 2) {

    //获取背景颜色数据
    data = exceler.returnData();
    data.colTh = _excelConfig.colTh;
  } else {

    data = _excelConfig;
  }

  var _line = '',
      //卷、匹、布
  _count = '',
      //米、码、公斤
  _dyelot = '',
      //缸
  _package_no = '',
      //包
  _data_details = [];

  var _temporary_data = {
    sampleId: _excelConfig.basicfield.sampleId,
    colorId: _excelConfig.basicfield.colorId
  },
      _data_arr = [],
      _data_obj_arr = {};

  data.colTh.forEach(function (item, index) {

    if (item.key === 'line') {
      _line = index;
    }

    if (item.key === 'count') {
      _count = index;
    }

    if (item.key === 'gang') {
      _dyelot = index;
    }

    if (item.key === 'bao') {
      _package_no = index;
    }
  });

  data.rowTr.forEach(function (item, index) {

    var _length = Number(item.length / 2);

    var _itemx = item.slice(0, _length);

    if (_itemx[_line] !== '' && _itemx[_count] !== '') {

      var _datax = {
        boltNo: _itemx[_line],
        dyelot: _itemx[_dyelot],
        packageNo: _itemx[_package_no],
        quantity: _itemx[_count]

        //毛毯定制
      };if (_blanket_customization) {

        _datax.customtype = _itemx[_customtype];
      }

      _data_details.push(_datax);
    }

    var _itemy = item.slice(_length, item.length + 1);

    if (_itemy[_line] !== '' && _itemy[_count] !== '') {

      var _datay = {
        boltNo: _itemy[_line],
        dyelot: _itemy[_dyelot],
        packageNo: _itemy[_package_no],
        quantity: _itemy[_count]

        //毛毯定制
      };if (_blanket_customization) {

        _datay.customtype = _itemy[_customtype];
      }

      _data_details.push(_datay);
    }
  });

  _data_details.forEach(function (item) {

    _temporary_data = $.extend({}, _temporary_data, item);

    _temporary_data = JSON.parse(JSON.stringify(_temporary_data).replace(/quantity/g, 'num'));

    _data_arr.push(_temporary_data);
  });

  _data_obj_arr.samples = _data_arr;

  return JSON.stringify(_data_obj_arr);
}

$.fn.tableMultipleSelection = function () {

  return this.each(function () {

    var tb = $(this),
        startTD;

    tb.addClass('bgj-not-select');

    function onMousemove(e) {
      //鼠标在表格单元格内移动事件

      e = e || window.event;

      var o = e.srcElement || e.target;

      if (o.tagName == 'TD' || o.tagName == 'SPAN') {

        if (!(startTD === e.target)) {

          if (o.tagName == 'TD') {

            $(e.target).eq(0).trigger('click', 2);

            startTD = e.target;
          }
        }
      }
    }

    function onMouseup(e) {
      //鼠标弹起事件

      tb.off('mouseup mousemove');
    }

    function onMousedown(e) {
      //鼠标按下  绑定事件

      var o = e.target;
      if (o.tagName == 'TD' || o.tagName == 'SPAN') {

        startTD = {};

        tb.on({
          mouseup: onMouseup,
          mousemove: onMousemove
        });
      }
    }

    tb.mousedown(onMousedown);
  });
};