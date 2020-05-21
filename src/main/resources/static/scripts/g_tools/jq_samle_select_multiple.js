'use strict';

// 暂定一个页面只出现一个选择器
/*
 * config {
 *    addCb: function(array, searchSelect)
 *    removeCb: function(ids, searchSelect)
 *    selected: array,
 *    listener: function(add, remove) {
 *     $('#xxx').on('click', () => {
 *         $('body').html('')
 *         remove(ids)
 *         add()
 
 *   }
 * }
 */
//tobdy框可以方向键移动
function tabTableInput(inputType) {
  // console.log('开始执行')
  var rowInputs = [];
  var trs = $('#selectedSamples tr');
  var inputRowIndex = 0;
  // console.log(trs)
  $.each(trs, function (i, obj) {
    if ($(obj).find('th').length > 0) {
      //跳过表头  
      return true;
    }
    var rowArray = [];
    var thisRowInputs;
    if (!inputType) {
      //所有的input  
      thisRowInputs = $(obj).find('input:not(:disabled):not(:hidden):not([readonly])');
    } else {
      thisRowInputs = $(obj).find('input:not(:disabled):not(:hidden):not([readonly])[type=' + inputType + ']');
    }
    if (thisRowInputs.length == 0) {
      return true;
    }
    thisRowInputs.each(function (j) {
      $(this).attr('_r_', inputRowIndex).attr('_c_', j);
      rowArray.push({
        'c': j,
        'input': this
      });
      $(this).keydown(function (evt) {
        var r = $(this).attr('_r_');
        var c = $(this).attr('_c_');
        var tRow;
        if (evt.which == 38) {
          //上  
          // console.log('按上')
          $('.offer-history-ul').hide();
          if (r == 0) return;
          r--; //向上一行  
          tRow = rowInputs[r];
          if (c > tRow.length - 1) {
            c = tRow.length - 1;
          }
          var _this2 = $(rowInputs[r].data[c].input);

          var _el = _this2.get(0);

          setTimeout(function () {
            _el.setSelectionRange(-1, -1);
          }, 10);
        } else if (evt.which == 40) {
          //下  
          $('.offer-history-ul').hide();
          if (r == rowInputs.length - 2) {
            //已经是最后一行  
            return;
          }
          r++;
          tRow = rowInputs[r];
          if (c > tRow.length - 1) {
            c = tRow.length - 1;
          }
        } else if (evt.which == 37) {
          //左  
          $('.offer-history-ul').hide();
          if ($(rowInputs[r].data[c].input).val() != '') {
            //return
            var _this3 = $(rowInputs[r].data[c].input);

            var el = _this3.get(0);

            var pos = 0;
            // if (pos == 0){
            //   setTimeout(function(){
            //     el.setSelectionRange(-1,-1);
            //   },10);
            // }
            if ('selectionStart' in el) {
              pos = el.selectionStart;
            } else if ('selection' in document) {
              el.focus();
              var Sel = document.selection.createRange();
              var SelLength = document.selection.createRange().text.length;
              Sel.moveStart('character', -el.value.length);
              pos = Sel.text.length - SelLength;
            }

            if (pos != 0) {
              return;
            }
          }
          if (r == 0 && c == 0) {
            //第一行第一个,则不执行操作  
            return;
          }
          if (c == 0) {
            //某行的第一个,则要跳到上一行的最后一个,此处保证了r大于0  
            r--;
            tRow = rowInputs[r];
            c = tRow.length - 1;
          } else {
            //否则只需向左走一个  
            c--;
          }
        } else if (evt.which == 39) {
          //右 
          $('.offer-history-ul').hide();
          // console.log(r)
          if ($(rowInputs[r].data[c].input).val() != '') {
            //return
            var _this4 = $(rowInputs[r].data[c].input);

            var el = _this4.get(0);
            var pos = 0;
            if ('selectionEnd' in el) {
              pos = el.selectionStart;
            } else if ('selection' in document) {
              el.focus();
              var Sel = document.selection.createRange();
              var SelLength = document.selection.createRange().text.length;
              Sel.moveEnd('character', -el.value.length);
              pos = Sel.text.length - SelLength;
            }
            // console.log(pos)
            if (pos != _this4.val().length) {
              return;
            }
          }
          tRow = rowInputs[r];
          if (r == rowInputs.length - 2 && c == tRow.length - 1) {
            //最后一个不执行操作  
            return;
          }
          if (c == tRow.length - 1) {
            //当前行的最后一个,跳入下一行的第一个  
            r++;
            c = 0;
          } else {
            c++;
          }
        } else if (evt.which == 13) {
          //enter 
          $('.offer-history-ul').hide();
          tRow = rowInputs[r];
          if (r == rowInputs.length - 2 && c == tRow.length - 1) {
            //最后一个不执行操作  
            return;
          }
          if (c == tRow.length - 1) {
            //当前行的最后一个,跳入下一行的第一个  
            r++;
            c = 0;
          } else {
            c++;
          }
        }
        $(rowInputs[r].data[c].input).focus();
        var _this = $(rowInputs[r].data[c].input);

        var el = _this.get(0);
        setTimeout(function () {
          el.setSelectionRange(-1, -1);
        }, 10);
      });
    });
    rowInputs.push({
      'length': thisRowInputs.length,
      'rowindex': inputRowIndex,
      'data': rowArray
    });
    inputRowIndex++;
  });
}

function chooseSample(config, isDeducting, isDeductingTips) {

  var _isDeducting = Number(isDeducting);

  var _getHtmlDocName = getHtmlDocName();

  var _is_puechase_and_sale = _getHtmlDocName == 'purchase_add' || _getHtmlDocName == 'purchase_edit' || _getHtmlDocName == 'purchase_stock_add' || _getHtmlDocName == 'purchase_stock_edit' || _getHtmlDocName == 'sale_add' || _getHtmlDocName == 'sale_edit' || _getHtmlDocName == 'sale_slip_add' || _getHtmlDocName == 'sale_slip_edit';

  var _is_sample_input = _getHtmlDocName == 'sample_input_list_add';

  // 缓存当前存的加载的样品列表
  var AJAXSAMPLELIST = [];

  // 批量多选加载的样品列表
  var BATCHAJAXSAMPLELIST = [];

  //样品的自定义字段

  var sampleListParams = '';

  // 生成样品选中
  var SAMPLETPL = '<li class="search-checked" id="sample_select_{{' + (_isDeducting ? 'itemId' : 'sampleId') + '}}" data-id="{{' + (_isDeducting ? 'itemId' : 'sampleId') + '}}" data-colorId="' + (_isDeducting ? '{{colorId}}' : '') + '">\n  <div>\n  <span class="ch-color" >{{itemNo}}</span>\n  ' + (_isDeducting ? '<div class="info-warp">{{mark}}#{{colorName}} / {{packageNum}}{{packageUnit}}{{quantity}}{{quantityUnit}}</div>' : '') + '\n    </div>\n    </li>';

  //数据dom模板
  var SAMPLETPLFN = Handlebars.compile(SAMPLETPL);

  // 批量选择
  var BATCHSAMPLETPL = '\n  <li style="width: 460px;height: 50px;background-color: #ffffff;line-height:40px;cursor:pointer;" id="sample_select_batch_{{' + (_isDeducting ? 'itemId' : 'sampleId') + '}}"  data-id="{{' + (_isDeducting ? 'itemId' : 'sampleId') + '}}" data-colorId="' + (_isDeducting ? '{{colorId}}' : '') + '" class="batch-search-li">\n  <div style="height:30px;line-height: 30px;">\n  <span style="display:inline-block;width:90%;" class="batch-color">{{itemNo}}</span>\n  </div>\n  ' + (_isDeducting ? '<div style="height: 20px;font-size: 12px;line-height: 20px;color:#969696;">\n    {{mark}}#{{colorName}} / {{packageNum}}{{packageUnit}}{{quantity}}{{quantityUnit}}\n    </div>' : '') + '\n    </li>\n    ';
  //数据dom模板
  var BATCHSAMPLETPLFN = Handlebars.compile(BATCHSAMPLETPL);

  // 搜索INPUT
  var _keySearchSamplestest = $('body .container_sample tbody tr td #keySearchSamplestest');

  // 搜索结果box
  var _search_alert_box = $('.search_alert_test');

  // 搜索结果UL
  var _search_ul = $('#sample_list_test');

  var _search_no = _search_alert_box.find('.no_result_test');

  //客户名
  var customerName = $('.linkman-supplier');

  //仓库名称
  var stockName = $('#warehouse_id');

  //修改销货的仓库

  var stockNameEdit = $('#info_warehouseName');

  //body
  var _body = $('body');

  var g_pageNo = 1; //当前页

  var g_pageCount = 1; //总页数

  var g_val = '';

  $(document).on('click', 'td', function () {
    tabTableInput('text');
  });

  // 新增选中
  function sampleSelectAdd(id, colorId, isAll) {

    var addSample = null;

    AJAXSAMPLELIST.some(function (item) {

      if (_isDeducting) {
        item.formStockSample = 1;
      }

      if (item.sampleId === id || item.itemId === id && item.colorId === Number(colorId)) {
        addSample = item;
        return true;
      }
    });

    BATCHAJAXSAMPLELIST.some(function (item) {

      if (item.sampleId === id || item.itemId === id && item.colorId === colorId) {
        addSample = item;
        return true;
      }
    });

    if (!isNullType(addSample)) {

      window.onbeforeunload = function () {
        return '确认离开网页？';
      };
    }

    //在销货单操作中，id判断就好了 全选的时候过滤掉 已存在的且不提示
    if (_getHtmlDocName == 'sale_slip_add' || _getHtmlDocName == 'sale_slip_edit') {
      if (addSample) {
        var colorId = addSample.colorId;
        var colorLength = $('#selectedSamples').find('.choose-text').size();
        if (isAll) {
          for (var i = 0; i < colorLength; i++) {
            if (colorId == Number($('#selectedSamples').find('.choose-text').eq(i).attr('data-id'))) {
              return;
            }
          }

          !isNullType(addSample) && config.addCb(addSample, id, sampleListParams);
        } else {
          for (var i = 0; i < colorLength; i++) {
            if (colorId == Number($('#selectedSamples').find('.choose-text').eq(i).attr('data-id'))) {
              g_msgAlert('销货单中已存在相同颜色样品');
              return;
            }
          }

          !isNullType(addSample) && config.addCb(addSample, id, sampleListParams);
        }
      }
    } else {

      !isNullType(addSample) && config.addCb(addSample, id, sampleListParams);
    }

    // if (_getHtmlDocName == 'purchase_stock_edit' || _getHtmlDocName == 'purchase_edit' || _getHtmlDocName == 'purchase_stock_add') {
    //   $('.text-p:last').text('选择颜色') //??????????
    // }

    if (_getHtmlDocName == 'sale_slip_add' || _getHtmlDocName == 'sale_slip_edit') {

      if (localStorage.getItem('distributionProcess') == '1') {

        for (var _i = 0; _i < $('#selectedSamples').children('tr').length; _i++) {
          if ($('#selectedSamples').children('tr').eq(_i).attr('data-packinglisttype')) {
            $('#selectedSamples').children('tr').eq(_i).find('.warehouse-num-decimal').removeAttr('disabled');
            $('#selectedSamples').children('tr').eq(_i).find('.add-enclosure').removeClass('sale-excel-btn');
            $('#selectedSamples').children('tr').eq(_i).find('.add-enclosure').text('-');
            $('#selectedSamples').children('tr').eq(_i).find('.sale-excel-btn').text('-');
          }
        }
      }
    }

    var _keySearchSamplestest = $('#keySearchSamplestest');

    var mTop = getElementToPageTop(_keySearchSamplestest[0]);

    var mLeft = getElementToPageLeft(_keySearchSamplestest[0]);

    _search_alert_box.css({
      'top': Number(mTop) + 36 + '' + 'px',
      'left': Number(mLeft) + '' + 'px'
    });
  }

  // 加载样品
  function sampleSelectSearchSample(key, concatType) {

    var html = '';

    if (_isDeducting) {

      if (!stockNameEdit.attr('data-id')) {

        if (!stockName.val()) {

          g_msgAlert('请选择仓库！');

          return;
        }
      }

      var list_options = {
        type: 'get',
        url: '/api/storequery/qList',
        data: {
          companyId: $.cookie('company_id'),
          warehouseId: stockName.val() || stockNameEdit.attr('data-id'),
          itemNo: key,
          qLevel: 'color',
          pageNo: Number(concatType) ? g_pageNo : 1,
          pageSize: 200
        }
      };
    } else {

      if (isDeductingTips) {
        if (!stockNameEdit.attr('data-id')) {

          if (!stockName.val()) {

            g_msgAlert('请选择仓库！');

            return;
          }
        }
      }

      var list_options = {
        type: 'get',
        url: '/api/samples',
        data: {
          companyId: $.cookie('company_id'),
          searchType: 1,
          key: key,
          nature: 0,
          pageNo: Number(concatType) ? g_pageNo : 1,
          pageSize: 20
        }
      };
    }

    var list_callback = g_return200CbObj(function (data) {

      _search_alert_box.show();

      _search_ul.hide();

      _search_no.hide();

      g_pageNo = data.pageNo;

      g_pageCount = data.pageCount;

      if (!data.recordCount) {

        if ([3019, 32332, 28175].includes(Number(list_options.data.companyId))) {

          (_getHtmlDocName == 'purchase_add' || _getHtmlDocName == 'purchase_edit' || _getHtmlDocName == 'purchase_stock_add' || _getHtmlDocName == 'purchase_stock_edit') && config.addCb({
            directlyEnter: 1,
            itemNo: list_options.data.key
          });

          _search_alert_box.hide();

          _keySearchSamplestest.blur();
        } else {

          _search_no.show();
        }

        return;
      }

      if (_isDeducting) {

        var newdate = [];

        if (Number(concatType)) {

          newdate = AJAXSAMPLELIST.concat(data.dataResult);
        } else {

          newdate = data.dataResult;
        }

        // let newdate = AJAXSAMPLELIST.concat(data.dataResult);


        // let newdate = data.dataResult;

        newdate.forEach(function (item) {

          item.itemId = item.itemId.toString();

          html += SAMPLETPLFN(item);
        });

        AJAXSAMPLELIST = newdate;
      } else {

        var _newdate = [];

        if (Number(concatType)) {

          _newdate = AJAXSAMPLELIST.concat(data.samples);
        } else {

          _newdate = data.samples;
        }

        // let newdate = AJAXSAMPLELIST.concat(data.samples);

        // let newdate = data.samples;


        _newdate.forEach(function (item) {

          item.sampleId = item.sampleId.toString();

          html += SAMPLETPLFN(item);
        });

        if (!_isDeducting && _is_puechase_and_sale) {

          html += '<li style="height:43px;">\n          <div>\n           \n          </div>\n        </li>';

          _search_ul.parents('.search-alert-uls').append('<ul style="background-color: #fff;position: absolute;bottom: 0px;display: block;z-index: 200;width: 231px;">\n            <li class="search-checked add-sample-modal" data-toggle="modal" data-target="#add_sample_modal">\n            <div>\n              <span class="ch-color bu-blue-text" >+\u65B0\u589E\u6837\u54C1</span>\n            </div>\n          </li>\n         </ul>');
        } else if (_is_sample_input) {

          html += '<li style="height:43px;">\n          <div>\n           \n          </div>\n        </li>';

          _search_ul.parents('.search-alert-uls').append('<ul style="background-color: #fff;position: absolute;bottom: 0px;display: block;z-index: 200;width: 231px;">\n            <li class="search-checked add-sample-modal" data-toggle="modal" data-target="#add_sample_modal">\n            <div>\n              <span class="ch-color bu-blue-text" >+\u65B0\u589E\u6837\u54C1</span>\n            </div>\n          </li>\n         </ul>');
        }

        AJAXSAMPLELIST = _newdate;

        sampleListParams = data.sampleListParams;
        // console.log(sampleListParams)
      }

      _search_ul.html(html).show();

      // 纠正出现位置
      // if (document.documentElement.scrollHeight - _keySearchSamplestest.offset().top < 300) {
      //   _search_alert_box.css({
      //     'bottom': '32px',
      //     'top': ''
      //   })
      // } else {
      //   _search_alert_box.css({
      //     'top': '52px',
      //     'bottom': ''
      //   })
      // }
    });

    sendAjax(list_options, list_callback);
  }

  //滚动判断

  document.addEventListener('scroll', function (event) {

    if (event.target.id === 'sample_list_test') {

      var _this = $('#sample_list_test');

      var scrollTop = Math.round(_this.scrollTop());
      var scrollHeight = _this[0].scrollHeight;
      var windowHeight = _this.height();

      //默认20条
      if (Number(scrollTop) != 0) {

        if (scrollTop + windowHeight == scrollHeight) {

          if (Number(g_pageCount) > Number(g_pageNo)) {

            g_pageNo += 1;

            sampleSelectSearchSample(g_val, 1);
          }
        }
      }
    }
  }, true);

  // 单选样品
  function sampleSelect() {

    //载入结果框 试验性
    var createResultBox = function createResultBox() {

      var div = document.createElement('div');
      div.className = 'search_smaples_tr';
      div.innerHTML = '<div class="search_alert_test" style="position: absolute; left:0px; top: 0px; display: block;">\n            <div>\n              <span class="no_result_test">\u6CA1\u6709\u627E\u5230\u76F8\u5173\u7ED3\u679C\uFF01</span>\n            </div>\n            <div class=\'search-alert-uls\' style="position: relative;">\n            <ul id="sample_list_test"style="z-index: 100">\n            </ul>\n           \n            </div>\n          </div>';
      document.body.appendChild(div);
      return div;
    };

    //单利模式 getSingle from main.js
    var createSingleBatchLayer = getSingle(createResultBox);

    var isAccordWith = 1;

    _keySearchSamplestest.click(function () {

      var _this = $(this);

      var mTop = getElementToPageTop(_this[0]);

      var mLeft = getElementToPageLeft(_this[0]);

      checked_s(mTop, mLeft);
    });

    _keySearchSamplestest.on('input', function () {

      if (customerName.text() == '请选客户' || customerName.text() == '请选供应商') {

        g_msgAlert(customerName.text(), function () {

          _keySearchSamplestest.val('');
        });
      }
    });

    _keySearchSamplestest.on('blur', function () {

      _keySearchSamplestest.val('');
    });

    function checked_s(mTop, mLeft) {

      if (customerName.text() == '请选客户' || customerName.text() == '请选供应商') {

        g_msgAlert(customerName.text(), function () {});

        isAccordWith = 1;
      } else {

        isAccordWith = 0;
      }

      var loginLayer = createSingleBatchLayer();

      //重新获取值
      _search_ul = $('#sample_list_test');
      _search_alert_box = $('.search_alert_test');
      _search_no = _search_alert_box.find('.no_result_test');

      _search_alert_box.css({
        'top': Number(mTop) + 36 + '' + 'px',
        'left': Number(mLeft) + '' + 'px'
      });
    }
    // 单品搜索样品
    _keySearchSamplestest.on('input', g_throttle(function (e) {

      if (isAccordWith) {

        return;
      }

      var val = $(this).val().trim();

      g_val = val;

      if (val) {

        //搜索样品列表
        sampleSelectSearchSample(val, 0);
      } else {

        _search_alert_box.hide();
      }
    }, 500));

    // 回车也能搜素搜
    _keySearchSamplestest.on('keyup', function (e) {

      if (isAccordWith) {

        return;
      }

      var key = e.which;

      var val = $(this).val().trim();

      g_val = val;

      if (key == 13) {

        if (val) {

          sampleSelectSearchSample(val, 0);
        } else {

          _search_alert_box.hide();
        }
      }
    });

    // 点击选择
    _body.on('click', '#sample_list_test li', function () {

      _keySearchSamplestest.val('');
      sampleSelectAdd($(this).attr('data-id'), $(this).attr('data-colorId'), false);
      tabTableInput('text');
    });

    //失去焦点隐藏搜索结果
    _body.click(function (e) {

      if (!$(e.target).closest('.search_alert_test').length) {

        _search_alert_box.find('#sample_list_test').length && (document.getElementById('sample_list_test').scrollTop = 0);

        _search_alert_box.hide();
      }
    });
  }

  /*================样品蓝批量添加弹框==============*/
  function sampleBasketBatchAdd() {
    var createBatchLayer = function createBatchLayer() {
      var div = document.createElement('div');
      div.innerHTML = '<div class="modal modal2 fade" tabindex="-1" role="dialog" id="myModal">\n    <div class="modal-dialog" role="document">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="batch-close">&times;</span></button>\n                <h4 class="modal-title" style="font-weight:bold;">\u6279\u91CF\u6DFB\u52A0</h4>\n            </div>\n            <h4 style="height:30px;padding:0 30px;color:#fff;" class="batch-no-search">\u6CA1\u6709\u627E\u5230\u76F8\u5173\u7ED3\u679C\uFF01</h4>\n            <div class="modal-body" style="padding:0 30px 30px 30px;height:209px;">\n                <textarea id="batch_samples_content" spellcheck="false" style="width:500px;height:179px;border-radius: 4px;background-color: #ffffff;" class="form-control" placeholder="\u8F93\u5165\u6837\u54C1\u7F16\u53F7,\u7528\u9017\u53F7\u9694\u5F00\uFF08\u53EA\u5C55\u793A\u524D20\u7684\u7ED3\u679C\uFF09"></textarea>\n            </div>\n            <div class="modal-footer batch_matching_result" style="border-top:0;padding:0 30px 30px 30px;display:none;">\n                <div style="width: 500px;max-height: 325px;border-radius: 4px;border: solid 1px #d3dce6;">\n                    <span style="display:inline-block; width: 500px;height: 72px;text-align:left;color: #20a0ff; padding:26px 20px;font-weight:bold;">\u5339\u914D\u7ED3\u679C <span style="color:red;" class="batch-search-num"></span>--<span style="color:red;" class="batch-results-num"></span></span>\n                    <div style="width: 498px;height: 50px;text-align:right;line-height:50px;background-color: #f9fafc;border-top: solid 2px #d3dce6;padding:0 28px;">\n                        <label for="batch_ckeck_all" style="cursor: pointer; vertical-align:middle;color: #99a9bf;">\u5168\u9009</label>\n                        <input type="checkbox" id="batch_ckeck_all" style="display: none;">\n                    </div>\n            <ul style="padding:0 20px;text-align:left; overflow-y: auto;overflow-x: hidden;max-height: 200px;" id="batch_search_singal">\n            </ul>\n                </div>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n    </div>\n    <!-- /.modal -->';
      document.body.appendChild(div);
      return div;
    };

    //单利模式 getSingle from main.js
    var createSingleBatchLayer = getSingle(createBatchLayer);

    //绘制批量搜索弹框
    $('#batch_add').on('click', function (event) {
      var loginLayer = createSingleBatchLayer();
    });

    //调用 两次问题  涉及多个页面  选择插件里修改
    //点击匹配结果
    _body.off('click', '#batch_search_singal .batch-search-li').on('click', '#batch_search_singal .batch-search-li', function (event) {

      sampleSelectAdd($(this).attr('data-id'), $(this).attr('data-colorId'), false);
    });

    //点击全选
    _body.off('click', '#batch_ckeck_all').on('click', '#batch_ckeck_all', function (event) {
      BATCHAJAXSAMPLELIST.forEach(function (item) {

        _isDeducting ? sampleSelectAdd(item.itemId, item.colorId, true) : sampleSelectAdd(item.sampleId, '', true);
      });
    });

    //点击关闭处理
    _body.off('click', '.batch-close').on('click', '.batch-close', function (event) {
      clearTimeout(clk);
      var clk = setTimeout(function () {
        $('#batch_search_singal').empty();
        $('.batch_matching_result').css('display', 'none');
        $('#batch_samples_content').val('');
        $('#batch_ckeck_all').prop('checked', false);
      }, 500);
    });

    //用英文逗号替换中文分号、中文文逗号或者回车
    function ReplaceSeperator(val) {
      var result;
      //先去除空格换行回车，再替换常用符号，去除超过一个以上的逗号，去除首尾英文逗号.replace(/(\s)|(\t)/g, '').
      var result = val.replace(/(\s)|(\t)|(\')|(\n')|(\')|(')|(，)|(:)|(：)/g, ',').replace(/(,)\1{1,}/g, ',').replace(/^\,/gi, '').replace(/\,$/gi, '');

      return result;
    }

    //批量输入,获取结果
    _body.on('input', '#batch_samples_content', g_throttle(function (e) {
      var recomma = ReplaceSeperator($(this).val());
      if ($(this).val().trim().length > 0) {
        obtainBatchSample(recomma);
      } else {

        $('.batch_matching_result').css('display', 'none');
        $('.batch-no-search').css('color', '#fff');
      }
    }, 500));

    //批量中的获取样品
    function obtainBatchSample(key) {

      var html = '';
      BATCHAJAXSAMPLELIST = [];
      $('#batch_search_singal').empty();

      if (_isDeducting) {

        if (!stockNameEdit.attr('data-id')) {

          if (!stockName.val()) {

            g_msgAlert('请选择仓库！');

            return;
          }
        }

        var list_options = {
          type: 'get',
          url: '/api/storequery/qList',
          data: {
            companyId: $.cookie('company_id'),
            warehouseId: stockName.val() || stockNameEdit.attr('data-id'),
            itemNo: key,
            qLevel: 'color',
            pageNo: 1,
            pageSize: 200
          }
        };
      } else {

        var list_options = {
          type: 'get',
          url: '/api/samples',
          data: {
            companyId: $.cookie('company_id'),
            searchType: 1,
            key: key,
            pageNo: 1,
            pageSize: 20
          }
        };
      }

      //数据dom模板
      var list_table = $('#batch_search_singal');

      //调用ajax
      var list_callback = g_return200CbObj(function (data) {

        $('.batch-search-num').text(key.split(',').length);

        //匹配结果数量
        $('.batch-results-num').text(data.recordCount);
        data.recordCount == 0 ? $('.batch_matching_result').css('display', 'none') : $('.batch_matching_result').css('display', 'block');
        data.recordCount == 0 ? $('.batch-no-search').css('color', '#000') : $('.batch-no-search').css('color', '#fff');

        if (_isDeducting) {

          data.dataResult.forEach(function (item) {
            item.itemId = item.itemId.toString();
            html += BATCHSAMPLETPLFN(item);
          });
          AJAXSAMPLELIST = data.dataResult;

          BATCHAJAXSAMPLELIST = data.dataResult;
        } else {

          data.samples.forEach(function (item) {
            item.sampleId = item.sampleId.toString();
            html += BATCHSAMPLETPLFN(item);
          });

          BATCHAJAXSAMPLELIST = data.samples;
          AJAXSAMPLELIST = data.samples;
          sampleListParams = data.sampleListParams;
        }
        list_table.html(html);
      });

      sendAjax(list_options, list_callback);
    }
  }

  /*================新增样品==============*/
  function sampleNewAdd(_getHtmlDocName) {

    var _company_id = Number($.cookie('company_id'));

    var createNewAdd = function createNewAdd() {

      var div = document.createElement('div');

      div.innerHTML = '<div class="modal fade modal2 bgj-modal-addsample not-last-model" tabindex="-1" role="dialog" id="add_sample_modal">\n      <div class="modal-dialog" role="document" style="width: 480px;">\n        <div class="modal-content">\n          <div class="modal-header addsample-modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n            <h4 class="modal-title">\u5FEB\u901F\u65B0\u589E\u6837\u54C1</h4>\n          </div>\n          <div class="modal-body-addsample" style="min-height: 280px;position: relative;margin:0;padding:0;">\n            <form id="ajax_send_addsample_form">\n              <input type="text" placeholder="\u7F16\u53F7\uFF08\u5FC5\u586B\uFF09" name="1" >\n              <input type="text" placeholder="\u540D\u79F0" name="2" >\n              <input type="text" placeholder="\u6210\u5206" name="3" >\n              <input type="text" placeholder="\u95E8\u5E45" name="4">\n              <input type="text" placeholder="\u514B\u91CD" name="5">\n              <input type="text" placeholder="\u89C4\u683C" name="6">\n              <div class="public-selection-ck" id="immediate_stock_list_radio" style="margin: 10px 0;line-height: 30px;text-align: left;">\n               <span style="display: inline-block;margin-right: 15px;">\u7EDF\u8BA1\u7EA7\u522B</span>\n               ' + (_getHtmlDocName == 'purchase_add' || _getHtmlDocName == 'purchase_edit' || _getHtmlDocName == 'purchase_stock_add' || _getHtmlDocName == 'purchase_stock_edit' ? '<input type="radio" name="nature" id="product_sample_type" value="2" ' + ([3004, 32465].includes(_company_id) ? '' : 'checked=\'checked\'') + '>\n               <label class="label-radio" for="product_sample_type" style="vertical-align: middle;padding-top: 2px;">\n               <b class="i-icon i-radio-icon"></b>\n                \u576F\u5E03\n               </label>' : '<input type="radio" name="nature" id="product_sample_type_2" value="1"  ' + ([32465].includes(_company_id) ? 'checked=\'checked\'' : '') + ' >\n               <label class="label-radio" for="product_sample_type_2" style="vertical-align: middle;padding-top: 2px;">\n               <b class="i-icon i-radio-icon"></b>\n                \u6210\u54C1\n                </label>') + '\n\n               \n              <input type="radio" name="nature" id="product_sample_type_3" value="0"  ' + ([32465].includes(_company_id) ? '' : 'checked=\'checked\'') + '>\n               <label class="label-radio" for="product_sample_type_3">\n               <b class="i-icon i-radio-icon"></b>\n               \u6837\u54C1\n              </label>\n\n               </div>\n            </form>\n          </div>\n          <div class="modal-footer modal-footer-addsample" style="border:0;padding-left: 0;padding-right: 0; ">\n            <div>\n              <button type="button " class="btn btn-primary" id="send_add_sample">\u65B0\u589E\u6837\u54C1</button>\n            </div>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>';
      document.body.appendChild(div);
      return div;
    };

    //单利模式 getSingle from main.js
    var createSingleBatchLayer = getSingle(createNewAdd);

    //绘制新增样品弹框
    _body.on('click', '.add-sample-modal', function (event) {

      var loginLayer = createSingleBatchLayer();
    });

    //点击新增
    _body.off('click', '#send_add_sample').on('click', '#send_add_sample', function (event) {

      var _data = {},
          _data_type = {},
          _ajax_send_addsample_form = $('#ajax_send_addsample_form'),
          lenCanISave = true,
          valCanISave = true,
          _key = 1,
          _this = $(this);

      //将form表单里面设置了name值的表单元素 每个以{name：''; value:''}的形式 返回数组
      _ajax_send_addsample_form.serializeArray().forEach(function (item) {

        if (!isNaN(Number(item.name))) {

          _data['' + item.name] = item.value;
        } else {

          _data_type['' + item.name] = item.value;
        }
      });

      for (var key in _data) {

        if (Number(key) === 1 && !_data[key]) {

          valCanISave = false;
        }

        if (_data[key].length > APP.attributeLength) {

          lenCanISave = false;

          _key = key;
        }
      }

      if (!valCanISave) {

        g_msgAlert('以下字段为必填：编号');
        return;
      }

      if (!lenCanISave) {

        g_msgAlert('\u4EE5\u4E0B\u5B57\u6BB5\u957F\u5EA6\u8BF7\u63A7\u5236\u5728 ' + APP.attributeLength + ' \u4EE5\u5185 \uFF1A' + ['编号', '名称', '成分', '门幅', '克重', '规格'][_key]);
        return;
      }

      var list_options = {
        type: 'POST',
        url: '/api/samples',
        data: {
          companyId: $.cookie('company_id'),
          customAttribute: _data,
          nature: Number(_data_type.nature)
        }
      };

      //调用ajax
      var list_callback = g_return200CbObj(function (data) {

        $('#add_sample_modal').modal('hide');

        g_autoCloseTip('新建样品成功，去添加数据！');
      });

      list_callback.beforeSend = function () {
        _this.prop('disabled', true).text('保存中...');
      };

      list_callback.complete = function () {
        _this.prop('disabled', false).text('新增样品');
      };

      sendAjax(list_options, list_callback);
    });
  }

  function sampleFastAdd(_getHtmlDocName) {
    var _company_id = Number($.cookie('company_id'));

    var createNewAdd = function createNewAdd() {

      var div = document.createElement('div');

      div.innerHTML = '<div class="modal fade modal2 bgj-modal-addsample not-last-model" tabindex="-1" role="dialog" id="add_sample_modal">\n      <div class="modal-dialog" role="document" style="width: 480px;">\n        <div class="modal-content">\n          <div class="modal-header addsample-modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n            <h4 class="modal-title">\u5FEB\u901F\u65B0\u589E\u6837\u54C1</h4>\n          </div>\n          <div class="modal-body-addsample" style="min-height: 280px;position: relative;margin:0;padding:0;">\n            <form id="ajax_send_addsample_form">\n              <input type="text" placeholder="\u7F16\u53F7\uFF08\u5FC5\u586B\uFF09" name="1" >\n              <input type="text" placeholder="\u540D\u79F0" name="2" >\n              <input type="text" placeholder="\u6210\u5206" name="3" >\n              <input type="text" placeholder="\u95E8\u5E45" name="4">\n              <input type="text" placeholder="\u514B\u91CD" name="5">\n              <input type="text" placeholder="\u89C4\u683C" name="6">\n              <div class="public-selection-ck" id="immediate_stock_list_radio" style="margin: 10px 0;line-height: 30px;text-align: left;">\n               <span style="display: inline-block;margin-right: 15px;">\u7EDF\u8BA1\u7EA7\u522B</span>\n               <input type="radio" name="nature" id="product_sample_type_2" value="1" >\n               <label class="label-radio" for="product_sample_type_2" style="vertical-align: middle;padding-top: 2px;">\n               <b class="i-icon i-radio-icon"></b>\n                \u6210\u54C1\n                </label>               \n              <input type="radio" name="nature" id="product_sample_type_3" value="0"  checked>\n               <label class="label-radio" for="product_sample_type_3">\n               <b class="i-icon i-radio-icon"></b>\n               \u6837\u54C1\n              </label>\n\n               </div>\n            </form>\n          </div>\n          <div class="modal-footer modal-footer-addsample" style="border:0;padding-left: 0;padding-right: 0; ">\n            <div>\n              <button type="button " class="btn btn-primary" id="send_add_sample">\u65B0\u589E\u6837\u54C1</button>\n            </div>\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>';
      document.body.appendChild(div);
      return div;
    };

    //单利模式 getSingle from main.js
    var createSingleBatchLayer = getSingle(createNewAdd);

    //绘制新增样品弹框
    _body.on('click', '.add-sample-modal', function (event) {

      var loginLayer = createSingleBatchLayer();
    });

    //点击新增
    _body.off('click', '#send_add_sample').on('click', '#send_add_sample', function (event) {

      var _data = {},
          _data_type = {},
          _ajax_send_addsample_form = $('#ajax_send_addsample_form'),
          lenCanISave = true,
          valCanISave = true,
          _key = 1,
          _this = $(this);

      //将form表单里面设置了name值的表单元素 每个以{name：''; value:''}的形式 返回数组
      _ajax_send_addsample_form.serializeArray().forEach(function (item) {

        if (!isNaN(Number(item.name))) {

          _data['' + item.name] = item.value;
        } else {

          _data_type['' + item.name] = item.value;
        }
      });

      for (var key in _data) {

        if (Number(key) === 1 && !_data[key]) {

          valCanISave = false;
        }

        if (_data[key].length > APP.attributeLength) {

          lenCanISave = false;

          _key = key;
        }
      }

      if (!valCanISave) {

        g_msgAlert('以下字段为必填：编号');
        return;
      }

      if (!lenCanISave) {

        g_msgAlert('\u4EE5\u4E0B\u5B57\u6BB5\u957F\u5EA6\u8BF7\u63A7\u5236\u5728 ' + APP.attributeLength + ' \u4EE5\u5185 \uFF1A' + ['编号', '名称', '成分', '门幅', '克重', '规格'][_key]);
        return;
      }

      var list_options = {
        type: 'POST',
        url: '/api/samples',
        data: {
          companyId: $.cookie('company_id'),
          customAttribute: _data,
          nature: Number(_data_type.nature)
        }
      };

      //调用ajax
      var list_callback = g_return200CbObj(function (data) {

        $('#add_sample_modal').modal('hide');

        g_autoCloseTip('添加成功！');
      });

      list_callback.beforeSend = function () {
        _this.prop('disabled', true).text('保存中...');
      };

      list_callback.complete = function () {
        _this.prop('disabled', false).text('新增样品');
      };

      sendAjax(list_options, list_callback);
    });
  }

  //单个搜索 sampleSelect
  sampleSelect();

  //批量搜索搜索
  sampleBasketBatchAdd();

  //快速新增样品 不是搜索库存 且只在 采购 销售
  !_isDeducting && _is_puechase_and_sale && sampleNewAdd(_getHtmlDocName);

  _is_sample_input && sampleFastAdd(_getHtmlDocName);
}