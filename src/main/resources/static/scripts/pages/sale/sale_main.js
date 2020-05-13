'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _body = $('body');
var _g_url_name = getHtmlDocName();

// 生成一个单号
function createOrderNo(header, footerLength) {

  var now = new Date();
  var time = '' + now.getFullYear() + (now.getMonth() < 9 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate());
  var footer = '' + randomString(4);

  return header + time + footer;

  // 生成随机数
  function randomString(length) {
    var len = length || 32;
    // 　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var chars = '123456789';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }
}

//生成空白行  行数   增加的列数
function GenerateBlankRows() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var addcous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var isForeigncurrency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '人民币';


  //默认行
  var _blank_tr = '<tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (isForeigncurrency != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr>',
      _blank_td = '',
      _blank_tr_new = '';

  for (var i = 0; i < Number(addcous); i++) {

    _blank_td += '<td></td>';
  }

  _blank_td && (_blank_tr = '<tr class="add-td-foreign-currency blank-tr">' + _blank_td + '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (isForeigncurrency != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr>');

  for (var _i = 0; _i < Number(rows); _i++) {

    _blank_tr_new += _blank_tr;
  }

  return _blank_tr_new;
}

//空差匹配  默认单位 、 价格单位、细码单单位
function spaceDifferenceMatching(inorout, accUnit, priceUnit, codeUnit) {

  var _in_obj_arr = [{
    accUnit: '', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 0.9144, //系数
    transformation: 0 //细码单是否要转换
  }, {
    accUnit: '', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1.0936, //系数
    transformation: 0 //细码单是否要转换
  }, {
    accUnit: '米', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 0.9144, //系数 
    transformation: 1 //细码单是否要转换
  }, {
    accUnit: '米', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1.0936, //系数
    transformation: 0 //细码单是否要转换
  }, {
    accUnit: '米', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 0.9144, //系数
    transformation: 1 //细码单是否要转换
  }, {
    accUnit: '码', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 0.9144, //系数
    transformation: 0 //细码单是否要转换
  }, {
    accUnit: '码', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1.0936, //系数
    transformation: 1 //细码单是否要转换
  }, {
    accUnit: '码', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1.0936, //系数
    transformation: 1 //细码单是否要转换
  }];
  var _out_obj_arr = [{
    accUnit: '米', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1 //系数
  }, {
    accUnit: '米', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '米', //细码单选的单位
    ratio: 1.0936 //系数
  }, {
    accUnit: '码', //样品默认单位
    priceUnit: '码', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 1 //系数
  }, {
    accUnit: '码', //样品默认单位
    priceUnit: '米', //价格选的单位
    codeUnit: '码', //细码单选的单位
    ratio: 0.9144 //系数
  }, {
    accUnit: '公斤', //样品默认单位
    priceUnit: '公斤', //价格选的单位
    codeUnit: '公斤', //细码单选的单位
    ratio: 1 //系数
  }];

  var result = '',
      data_processed = '';

  data_processed = Number(inorout) ? _in_obj_arr : _out_obj_arr;

  data_processed.forEach(function (item) {

    item.accUnit == accUnit && item.priceUnit == priceUnit && item.codeUnit == codeUnit && (result = item);
  });

  if (result) {

    console.log(result);

    return result;
  }
}

// 生成付款方式金额
function moneyHowWhen() {

  var payType = $('#pay_type');
  var payPercentItem = $('#pay_percent');
  var payPercent = payPercentItem.find('select');
  var payFirstItem = $('#pay_first');
  var payFirst = payFirstItem.find('input');
  var payNeed = $('#pay_need');
  var payDateItem = $('#pay_date');
  var payDate = $('#end_date');
  var beginDate = $('#new_date');
  var needIcon = payNeed.siblings('i');

  var TOTAL = 0;
  var PERCENT = $('#pay_percent_select').attr('data-val') || 'diy';
  var PAYTPYE = '0';
  // 监听分类改变
  payType.on('change', function () {
    PAYTPYE = this.value;
    controlFirstEnd();
  });

  payPercent.on('change', function () {
    $('#pay_percent_select').removeAttr('data-val');
    PERCENT = this.value;
    controlPercent();
  });

  // 控制首款输入
  payFirst.on('input', function () {
    var val = correctNumberInput(this.value);

    if (val > TOTAL) {
      val = TOTAL;
    }

    // payNeed.val(correctNumberInput(TOTAL - val))
    payNeed.val(TOTAL - val);
  });

  // 纠正输入
  payFirst.on('blur', function () {
    var val = correctNumberInput(this.value);

    if (val > TOTAL) {
      val = TOTAL;
    }
    payFirst.val(val);
  });

  // 控制付款时间
  function controlPayDate(time) {
    if (time) {
      payDate.val(time);
      return;
    }

    var endDate = new Date(beginDate.val()).getTime() + (PAYTPYE === 0 ? 0 : 7 * 24 * 60 * 60 * 1000);
    payDate.val(new Date(endDate).Format('yyyy-MM-dd'));
  }

  // 控制付款方式改变而引起的改变
  function controlFirstEnd(firstEndArray, date) {

    payPercentItem.hide();
    payDateItem.hide();
    controlPayDate(date);

    // 全款
    if (PAYTPYE === '0') {
      payPercentItem.hide();
      payDateItem.show();
      payFirstItem.hide();
      payFirst.val(TOTAL);
      payNeed.val(0);
      needIcon.attr('aria-label', '全款： 开单即结清，没有应收');
    }

    // 货到付款
    if (PAYTPYE === '1') {
      payDateItem.show();
      payPercentItem.hide();
      payFirstItem.hide();
      payFirst.val(0);
      payNeed.val(TOTAL);
      needIcon.attr('aria-label', '货到付款: 零首款开单，货到付全款');
    }

    // 分期付款
    if (PAYTPYE === '2') {
      payDateItem.show();
      payFirstItem.show();
      payDateItem.show();
      payPercentItem.show();
      needIcon.attr('aria-label', '应收 = 总金额 - 首款 (每一笔尾款将会在订单详情体现)');
      controlPercent(firstEndArray);
    }
  }

  //  选择比例控制 金额的显示
  function controlPercent(firstEndArray) {
    PERCENT = $('#pay_percent_select').attr('data-val') || PERCENT;

    // console.log(PERCENT)
    var defaultArray = firstEndArray ? firstEndArray : [0, TOTAL];
    //防止清空记录后 NAN的出现
    window.isNaN(defaultArray[0]) ? defaultArray[0] = 0 : '';
    window.isNaN(defaultArray[1]) ? defaultArray[1] = 0 : '';
    // console.log(defaultArray)
    var percentArray = PERCENT === 'diy' ? defaultArray : PERCENT.split(',').map(function (item) {
      return correctNumberInput(TOTAL * parseInt(item) / 10);
    });
    //选择自定义的时候可以输入金额，不选择的时候不可以输入
    var end = percentArray[1] + percentArray[0] ? Number((percentArray[0] / (percentArray[1] + percentArray[0])).toFixed(1)) : 0;
    var partEnd = false;
    if (end === 1 || end === 2 || end === 3 || end === 4 || end === 5 || end === 6 || end === 7 || end === 8 || end === 9 || end === 0.1 || end === 0.2 || end === 0.3 || end === 0.4 || end === 0.5 || end === 0.6 || end === 0.7 || end === 0.8 || end === 0.9 || PERCENT != 'diy') {
      partEnd = true;
    }
    // console.log(partEnd,end)
    if (percentArray[0] === 0 || !partEnd) {
      console.log('自定义');
      $('#pay_first1').attr('disabled', false);
    }
    if (partEnd == true) {
      $('#pay_first1').attr('disabled', true);
    }
    payFirst.val(percentArray[0]);
    payNeed.val(percentArray[1]);
    // console.log('改变')
  }

  return {
    returnPay: function returnPay() {
      return {
        payType: PAYTPYE,
        payDeadline: payDate.val(),
        depositPrice: parseFloat(payFirst.val()),
        receivablePrice: parseFloat(payNeed.val())
      };
    },
    changeTotal: function changeTotal(total) {
      TOTAL = total;
      controlFirstEnd();
    },
    changeStartTime: function changeStartTime(date) {
      controlPayDate();
    },
    initControlPay: function initControlPay(type, total, first, end, date) {
      PAYTPYE = type;
      TOTAL = total;
      PERCENT = 'diy';
      payType.find('option').eq(parseInt(PAYTPYE)).prop('selected', true);

      controlFirstEnd([first, end], date);
    }
  };
}
// 优化数字
function correctNumberInput(val) {
  return isNaN(parseFloat(val)) ? 0 : parseInt(Math.round(parseFloat(val) * 100)) / 100;
}

// 优化数字
function correctNumberInpuReservedDecimal(val) {

  var lastChar = val[val.length - 1] === '.' ? '.' : '';
  return (isNaN(parseFloat(val)) ? '' : parseInt(Math.round(parseFloat(val) * 100)) / 100) + lastChar;
}

// 处理颜色
function chooseColor(companyId) {

  var tpl = '\n  <li data-id="{{id}}" data-name="{{name}}" data-mark="{{mark}}" data-pic="{{pic}}" data-remark="{{remark}}">\n  <div class="btn-group" role="group">\n  <button type="button" class="btn btn-primary">\u9009\u62E9</button>\n  <button type="button" class="btn btn-danger">\u7F16\u8F91</button>\n  </div>\n  {{#isColorValue pic}}\n  <div class="color-show" style="background-color: {{pic}};"></div>\n  {{else}}\n  <img src="{{#if pic}}{{pic}}?x-oss-process=image/resize,m_fill,h_125,w_125{{else}}../images/empty_color.png{{/if}}">\n  {{/isColorValue}}\n  <p>{{mark}}#{{name}}</p>\n  </li>\n  ';
  var isUpdate = false;
  var loadMark = {};
  var colorTplFn = Handlebars.compile(tpl);
  var colorMaker = new ColorMaker(companyId);
  Handlebars.registerHelper('isColorValue', function (value, options) {
    if (value && value.length < 20) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // 点击出现选择颜色
  _body.on('click', '.choose-text', function () {

    var tr = $(this).parents('tr');

    var ul = tr.find('.choose-color-box');

    var div = tr.find('.choose-color-div');

    var id = tr.attr('data-id');

    var verification = tr.attr('data-directlyEnterColor');

    Number(verification) ? '' : loadColor(id, ul);

    ul.show();

    div.show();
  });

  _body.on('input', '#search-color', g_throttle(function () {

    var tr = $(this).parents('tr');

    var ul = tr.find('.choose-color-box');

    var id = tr.attr('data-id');

    var verification = tr.attr('data-directlyEnterColor');

    var key = this.value.trim();

    Number(verification) ? '' : loadColor(id, ul, key);
  }, 500));

  // 颜色管理
  // _body.on('click', '.choose-color-box .add-color-li', function () {
  _body.on('click', '.choose-color-div .add-color', function () {

    var tr = $(this).parents('tr');

    var verification = tr.attr('data-directlyEnterColor');

    var ul = $(this).parent('div').siblings('ul');
    var btn = $(this);
    colorMaker.open({
      sampleId: ul.parent('.choose-color-div').parents('tr').attr('data-id'),
      isdirectlyEnter: Number(verification) ? 1 : 0
    }, function (color) {

      var text = '选择颜色';

      if (color.name || color.mark) {
        text = color.mark + '#' + color.name;
      }

      //更新仓库后 需要取消标识符 
      CancelIdentifier(ul);

      ul.parent('div').siblings('.choose-text').attr('aria-label', text).attr('data-id', color.id).find('p').text(text);

      if (Number(color.isdirectlyEnter)) {

        tr.data('colorData', color);

        ul.parent('.choose-color-div').hide();
      } else {

        ul.append(colorTplFn(color));

        var _choose_color = ul.parents('.choose-color');

        _choose_color.attr('data-id', color.id);

        loadMark[ul.parents('tr').attr('data-id')].push(color);
      }
    });
  });

  // 点击选择颜色
  _body.on('click', '.choose-color-box .btn-primary', function () {

    var _this = $(this);
    var choose_color = _this.parents('.choose-color');
    var li = _this.parents('li');
    var color_id = li.attr('data-id');
    var color_name = li.find('p').text().trim();
    var _tbody = _this.parents('tbody');
    var _is_repeat = 0;

    _tbody.find('tr[class=\'search_smaples_tr\']').each(function (index, el) {

      var _that = $(this);

      var _id = _that.find('.choose-color').attr('data-id');

      _id === color_id && (_is_repeat = 1);
    });

    if (_is_repeat) {

      g_msgAlert('同一个样品，请选择不同的颜色');

      return;
    }

    choose_color.attr('data-id', color_id);

    choose_color.find('.text-p').text(color_name);
    choose_color.find('.choose-text').attr({
      'data-id': color_id,
      'aria-label': color_name
    });

    $('.choose-color-div').hide();
    //更新仓库后 需要取消标识符 
    CancelIdentifier(li);
  });

  // 点击编辑颜色
  _body.on('click', '.choose-color-box .btn-danger', function () {

    var li = $(this).parents('li');
    var ul = li.parent('ul');

    colorMaker.open(_defineProperty({
      id: parseInt(li.attr('data-id')),
      name: li.attr('data-name'),
      mark: li.attr('data-mark'),
      remark: li.attr('data-remark'),
      pic: li.attr('data-pic')
    }, 'pic', li.attr('data-pic')), function (color) {

      ul.hide().parent('div').siblings('.choose-text').attr('data-id', color.id).attr('aria-label', color.mark + '#' + color.name).find('p').text(color.mark + '#' + color.name);
      $('.choose-color-div').hide();
      loadMark[ul.parents('tr').attr('data-id')].forEach(function (item) {
        if (item.id === color.id) {
          item.name = color.name;
          item.mark = color.mark;
          item.pic = color.pic;
          return true;
        }
      });
    });
  });

  //失去焦点隐藏搜索结果
  _body.click(function (e) {
    if (!$(e.target).closest('.choose-color').length && !$(e.target).closest('#select_color_model').length && !$(e.target).closest('#jconfirm-scrollpane').length) {
      $('.choose-color-div').hide();
      // $('.choose-color-box').hide();
    }
  });

  // 获取该样品的颜色
  function loadColor(sampleId, addDom) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


    var listOpt = {
      url: '/api/samples/' + sampleId + '/color',
      data: {
        key: key
      },
      type: 'GET'
    };

    var listCb = g_return200CbObj(function (data) {

      addDom.find('li').remove();
      loadMark[sampleId] = data.colors;

      addDom.append(data.colors.reduce(function (html, color) {
        return html += colorTplFn(color);
      }, ''));
    });

    sendAjax(listOpt, listCb);
  }

  function updateColor(sampleId, ids, callback) {
    if (isUpdate) {
      return;
    }

    var updateOpt = {
      url: '/api/samples/' + sampleId + '/color',
      type: 'PUT',
      data: {
        colorIds: ids
      }
    };

    var updateCb = g_return200CbObj(function (data) {

      callback();
    });

    updateCb.beforeSend = function () {
      isUpdate = true;
    };

    updateCb.complete = function () {
      isUpdate = false;
    };

    sendAjax(updateOpt, updateCb);
  }
}

//1是否有库存，

function CheckStork(company_id, warehouse_id, sample_id, color_id, _this_tr, _form_input, hasCheckBox, test) {

  if (!warehouse_id) {

    g_msgAlert('请填写仓库名称！');

    return;
  }

  if (!color_id) {

    g_msgAlert('请选择该样品颜色！');

    return;
  }

  var _list_options = {

    url: '/api/storequery/qList',
    type: 'GET',
    data: {
      companyId: company_id,
      warehouseId: warehouse_id,
      itemId: sample_id,
      colorId: color_id,
      qLevel: 'color',
      pageNo: 1,
      pageSize: 20
    }
  };

  var _list_cb = g_return200CbObj(function (data) {

    //satisfy test's demand
    // console.log(data)
    //1是否有库存
    if (data.dataResult.length) {

      _this_tr.attr('data-dataResult', 1);

      if (data.dataResult[0].cFlag) {
        console.log('有细码单');
        //3.设置细码单状态

        _this_tr.attr('data-cFlag', 1);

        if (_g_url_name === 'sale_slip_edit' && _this_tr.attr('data-formdetail')) {

          _this_tr.find('.warehouse-num').attr({
            disabled: 'disabled'
          }).val('');

          _this_tr.find('.warehouse-num-decimal').attr({
            disabled: 'disabled'
          }).val('');
        } else {

          // _this_tr.find('.warehouse-num').attr({
          //   disabled: 'disabled',
          //   maxnum: data.dataResult[0].packageNum
          // }).val(data.dataResult[0].packageNum);

          // _this_tr.find('.warehouse-num-decimal').attr({
          //   disabled: 'disabled',
          //   maxnum: data.dataResult[0].quantity
          // }).val(data.dataResult[0].quantity);

        }

        CheckStorkExcel(company_id, warehouse_id, sample_id, color_id, _this_tr, hasCheckBox);
      } else {

        var _multiUnit = 0,
            _initialNum = 0;

        console.log('进这里了！');

        //无细码单 需要干预
        changeInitData(_this_tr, function (_ratio, _nuit, _data_unit) {

          _initialNum = Number(data.dataResult[0].quantity);
          _multiUnit = 1;

          //编辑 + 辅助单位
          if (_this_tr.attr('data-formdetail')) {
            //

            var _init_unit = _this_tr.attr('init-unit');
            //首先获取默认单位   然后同比例还原成核算单位  _ratio, _data_unit

            var _ratio_edit = '';

            for (var key in _data_unit) {

              var element = _data_unit[key];

              if (element === _init_unit && key != 'accUnit') {

                _ratio_edit = _data_unit[key + 'Ratio'];
              }
            }

            if (_ratio_edit) {
              //有数据  还原

              var _this_tr_decimal = _this_tr.find('.warehouse-num-decimal');

              data.dataResult[0].quantity = correctNumberInput(Number(data.dataResult[0].quantity) * Number(_ratio_edit));

              _this_tr_decimal.attr('data-val', Number(_this_tr_decimal.attr('data-val')) * Number(_ratio_edit));
            }
          }

          if (Number(_ratio)) {

            data.dataResult[0].quantity = correctNumberInput(Number(data.dataResult[0].quantity) / Number(_ratio));
          }
        });

        //没有细码单 do something
        _this_tr.attr('data-cFlag', 0);

        if (_g_url_name === 'sale_slip_edit' && _this_tr.attr('data-formdetail')) {

          var packageNumTotal = correctNumberInput(Number(data.dataResult[0].packageNum) + Number(_this_tr.find('.warehouse-num').attr('data-val')));
          var quantityTotal = correctNumberInput(Number(data.dataResult[0].quantity) + Number(_this_tr.find('.warehouse-num-decimal').attr('data-val')));

          if (!Number(_form_input)) {
            //是否点击了input

            g_msgAlert('该样品没有细码单！', function () {

              _this_tr.find('.warehouse-num').attr('maxnum', packageNumTotal);
              _this_tr.find('.warehouse-num').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + packageNumTotal);

              _this_tr.find('.warehouse-num-decimal').attr('maxnum', quantityTotal);

              if (Number(_multiUnit)) {

                _this_tr.find('.warehouse-num-decimal').attr('initialNum', correctNumberInput(Number(_initialNum) + Number(_this_tr.find('.warehouse-num-decimal').attr('data-val'))));

                _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + quantityTotal);
              } else {
                _this_tr.find('.warehouse-num-decimal').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + quantityTotal);
              }
            });
          } else {

            _this_tr.find('.warehouse-num').attr('maxnum', packageNumTotal);
            _this_tr.find('.warehouse-num').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + packageNumTotal);

            _this_tr.find('.warehouse-num-decimal').attr('maxnum', quantityTotal);

            if (Number(_multiUnit)) {

              _this_tr.find('.warehouse-num-decimal').attr('initialNum', correctNumberInput(Number(_initialNum) + Number(_this_tr.find('.warehouse-num-decimal').attr('data-val'))));

              _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + quantityTotal);
            } else {

              _this_tr.find('.warehouse-num-decimal').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + quantityTotal);
            }

            // console.log(_this_tr.find('.sale-excel-btn'))
          }
        } else {

          if (!Number(_form_input)) {
            //是否点击了input

            g_msgAlert('该样品没有细码单！', function () {

              _this_tr.find('.warehouse-num').attr('maxnum', data.dataResult[0].packageNum).val(data.dataResult[0].packageNum);
              _this_tr.find('.warehouse-num').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + data.dataResult[0].packageNum);

              _this_tr.find('.warehouse-num-decimal').attr('maxnum', data.dataResult[0].quantity).val(data.dataResult[0].quantity);

              if (Number(_multiUnit)) {

                _this_tr.find('.warehouse-num-decimal').attr('initialNum', correctNumberInput(Number(_initialNum)));

                _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + data.dataResult[0].quantity);
              } else {

                _this_tr.find('.warehouse-num-decimal').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + data.dataResult[0].quantity);
              }
            });
          } else {

            _this_tr.find('.warehouse-num').attr('maxnum', data.dataResult[0].packageNum).val(data.dataResult[0].packageNum);
            _this_tr.find('.warehouse-num').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + data.dataResult[0].packageNum);

            _this_tr.find('.warehouse-num-decimal').attr('maxnum', data.dataResult[0].quantity).val(data.dataResult[0].quantity);

            if (Number(_multiUnit)) {

              _this_tr.find('.warehouse-num-decimal').attr('initialNum', correctNumberInput(Number(_initialNum)));

              _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + data.dataResult[0].quantity);
            } else {

              _this_tr.find('.warehouse-num-decimal').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + data.dataResult[0].quantity);
            }
          }
        }

        _this_tr.find('.check-count').eq(0).trigger('input');
      }
    } else {

      //从编辑 库存已出完的状态。    修改销货单标识符

      if (Number(_this_tr.attr('data-formdetail'))) {

        // 没有库存 出完状态 也有库存
        _this_tr.attr('data-dataResult', 1);
        //判断是否有细码单
        var _data_detail = _this_tr.find('.save-data-details').attr('data-detail');
        if (_data_detail) {

          // console.log('应该到这里来！')

          _this_tr.attr('data-cFlag', 1);

          _data_detail = JSON.parse(_data_detail);

          _data_detail.isSellInventoryReduce = true, //扣减库存


          //没有库存有细码单
          _this_tr.data('detail-form-stock', _data_detail);

          if (hasCheckBox == 1) {
            _data_detail.colTh.unshift({
              label: '选择',
              key: 'choose',
              value: [],
              isChecked: true,
              editable: true,
              isReadonly: true
            });
            if (_data_detail.rowTr.length < 70) {
              for (var i = 0; i < 70 - _data_detail.rowTr.length; i++) {
                _data_detail.rowTr.push(['', '', '', '', '', '', '', '', '', '']);
              }
            }
            $.each(_data_detail.rowTr, function (key, val) {
              if (val.length == 8) {
                _data_detail.rowTr[key].splice(4, 0, '');
                _data_detail.rowTr[key].splice(0, 0, '');
              }
              $.each(val, function (k, v) {
                if (k > 0 || k < 5) {
                  if (v != '') {
                    _data_detail.rowTr[key][0] = '1';
                  }
                }

                if (k > 5 && k < 10) {
                  if (v != '') {
                    _data_detail.rowTr[key][5] = '1';
                  }
                }
              });
            });
          }
          //打开细码单
          OpenPackingList(_this_tr, hasCheckBox);
        } else {

          var _data_val_num = _this_tr.find('.warehouse-num').attr('data-val');
          var _data_val_num_decimal = _this_tr.find('.warehouse-num-decimal').attr('data-val');

          var _multiUnit2 = 0,
              _initialNum2 = 0;

          //无细码单 需要干预
          changeInitData(_this_tr, function (_ratio, _nuit, _data_unit) {

            _multiUnit2 = 1;

            //编辑 + 辅助单位
            if (_this_tr.attr('data-formdetail')) {
              //

              var _init_unit = _this_tr.attr('init-unit');
              //首先获取默认单位   然后同比例还原成核算单位  _ratio, _data_unit

              var _ratio_edit = '';

              for (var key in _data_unit) {

                var element = _data_unit[key];

                if (element === _init_unit && key != 'accUnit') {

                  _ratio_edit = _data_unit[key + 'Ratio'];
                }
              }

              if (_ratio_edit) {
                //有数据  还原

                _initialNum2 = correctNumberInput(Number(_data_val_num_decimal) * Number(_ratio));
              }
            }
          });

          _this_tr.attr('data-cFlag', 0);

          _this_tr.find('.warehouse-num').attr('maxnum', _data_val_num);
          _this_tr.find('.warehouse-num').parent('div').addClass('hint--top').attr('aria-label', '库存数：' + _data_val_num);

          _this_tr.find('.warehouse-num-decimal').attr('maxnum', _data_val_num_decimal);

          if (Number(_multiUnit2)) {

            _this_tr.find('.warehouse-num-decimal').attr('initialNum', correctNumberInput(Number(_initialNum2)));

            _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + _data_val_num_decimal);
          } else {

            _this_tr.find('.warehouse-num-decimal').parents('.input-group').addClass('hint--right').attr('aria-label', '库存数：' + _data_val_num_decimal);
          }
        }
      } else {

        //没有库存 do something
        _this_tr.attr('data-dataResult', 0);

        g_msgAlert('该颜色的样品，没有库存。请选择有库存的样品！', function () {

          _this_tr.find('.warehouse-num').attr('disabled', 'disabled');

          _this_tr.find('.warehouse-num-decimal').attr('disabled', 'disabled');
        });
      }
    }
  });

  sendAjax(_list_options, _list_cb);
}

function CheckStorkExcel(company_id, warehouse_id, sample_id, color_id, _this_tr, hasCheckBox) {

  var newRowTr = '';

  var _list_options = {

    url: '/api/storequery/qChildList',
    type: 'GET',
    data: {
      itemId: sample_id,
      colorId: color_id,
      companyId: company_id,
      warehouseId: warehouse_id,
      qLevel: 'boltNo',
      pageSize: 1000,
      pageNo: 1
    }
  };

  var _list_cb = g_return200CbObj(function (data) {

    var config = {
      basicfield: {
        sampleId: _this_tr.attr('data-id'),
        colorId: _this_tr.find('.choose-text').attr('data-id'),
        type: 2,
        dataType: 1
      },
      isEditable: true,
      isprintLabel: true,
      isPartEditable: true, //出库全出，不能出半卷，全部不可编辑 false 代表不可编辑
      isTitleEditable: false, //头部不可编辑
      isSellInventoryReduce: true, //扣减库存
      NoAddDel: true, //细码单移除新增移除按钮，true  隐藏, false  显示
      typeTitle: '出库细码单',
      // infoTL: {
      //   label: '编号：',
      //   value: data.dataResult[0].itemNo,
      // },
      infoTR: {
        label: '客户：',
        value: $('.linkman-supplier').text() || $('#info_customer').text() || $('#info_customer').val() || ''
      },
      infoBL: {
        label: '颜色：',
        value: data.dataResult[0].mark + '#' + data.dataResult[0].colorName
      },
      infoBR: {
        label: '日期：',
        value: $('#new_date').val()
      },
      colTh: [{
        label: '匹号',
        key: 'line',
        value: [],
        isDefault: true,
        editable: true,
        isReadonly: true
      }, {
        label: '缸号',
        key: 'gang',
        value: [],
        editable: true,
        isReadonly: true
      }, {
        label: '包号',
        key: 'bao',
        value: [],
        editable: true,
        isReadonly: true
      }, {
        label: '' + '数',
        key: 'count',
        value: [],
        isDefault: true,
        editable: true,
        isReadonly: true
      }],
      rowTr: [['', '', '', '', '', '', '', '']]
    };
    // console.log(hasCheckBox)
    if (hasCheckBox) {

      config.colTh = [{
        label: '选择',
        key: 'choose',
        value: [],
        isChecked: true,
        editable: true,
        isReadonly: true
      }, {
        label: '匹号',
        key: 'line',
        value: [],
        isDefault: true,
        editable: true,
        isReadonly: true
      }, {
        label: '缸号',
        key: 'gang',
        value: [],
        editable: true,
        isReadonly: true
      }, {
        label: '包号',
        key: 'bao',
        value: [],
        editable: true,
        isReadonly: true
      }, {
        label: '' + '数',
        key: 'count',
        value: [],
        isDefault: true,
        editable: true,
        isReadonly: true
      }];

      config.rowTr = [['', '', '', '', '', '', '', '', '', '']];
    }

    //该样品有细码单 获取json里出库的细码单  获取库存剩余细码单


    if (_g_url_name === 'sale_slip_edit' && _this_tr.attr('data-formdetail')) {

      // console.log('修改销货单页面')

      var outdetails = JSON.parse(_this_tr.find('.save-data-details').attr('data-detail')).rowTr;

      var stockdetails = changeFineCode(data.dataResult, '', hasCheckBox);

      //细码单 需要干预
      changeInitData(_this_tr, function (_ratio, _nuit, _data_unit) {

        var _line = Number(hasCheckBox) ? 1 : 0,
            _count = Number(hasCheckBox) ? 4 : 3,
            _next_num = Number(hasCheckBox) ? 5 : 4; //米、码、公斤

        var _excelConfig = JSON.parse(JSON.stringify(stockdetails));

        //编辑 + 辅助单位
        if (_this_tr.attr('data-formdetail')) {
          //

          var _init_unit = _this_tr.attr('init-unit');
          //首先获取默认单位   然后同比例还原成核算单位  _ratio, _data_unit

          var _ratio_edit = '';

          for (var key in _data_unit) {

            var element = _data_unit[key];

            if (element === _init_unit && key != 'accUnit') {

              _ratio_edit = _data_unit[key + 'Ratio'];
            }
          }

          if (_ratio_edit) {
            //有数据  还原

            _excelConfig.forEach(function (item) {

              if (item[_line] !== '' && item[_count] !== '') {

                item[_count] = correctNumberInput(Number(item[_count]) / Number(_ratio_edit));
              }

              if (item[_line + _next_num] !== '' && item[_count + _next_num] !== '') {

                item[_count + _next_num] = correctNumberInput(Number(item[_count + _next_num]) / Number(_ratio_edit));
              }
            });

            stockdetails = _excelConfig;
          }
        }
      });
      //合并数据的时候就要转化

      //合并数据并返回


      newRowTr = CombinationEdit(1, outdetails, stockdetails, hasCheckBox);
    } else {

      newRowTr = changeFineCode(data.dataResult, '', hasCheckBox);

      // console.log(newRowTr)
    }

    // console.log(config)
    config.rowTr = newRowTr;

    config.colTh['' + (hasCheckBox ? 1 : 0)].label = '匹号';
    config.colTh['' + (hasCheckBox ? 4 : 3)].label = data.dataResult[0].quantityUnit;
    _this_tr.data('detail-form-stock', config);

    //打开细码单

    OpenPackingList(_this_tr, hasCheckBox);
  });

  sendAjax(_list_options, _list_cb);
}

//修改数组结构 生成插件符合数据

function changeFineCode(splitData, changeFineCode, hasCheckBox) {

  var rowTrChild = [],
      newRowTr = [];

  var _num = Number(hasCheckBox) ? 10 : 8;

  if (Number(changeFineCode) === 1) {

    //盘点时  库存数量放入栏位3  实际数量为空

    splitData.forEach(function (item) {

      rowTrChild.push(String(item.boltNo));
      rowTrChild.push(String(item.dyelot));
      rowTrChild.push(String(item.quantity));
      rowTrChild.push(String(''));
    });
  } else if (Number(changeFineCode) === 2) {

    splitData.forEach(function (item) {

      rowTrChild.push(String(item.boltNo));
      rowTrChild.push(String(item.dyelot));
      rowTrChild.push(String(item.packageNo || ''));
      rowTrChild.push(String(item.realQuantity));
    });
  } else {

    if (changeFineCode === 'blanket') {

      _num = Number(hasCheckBox) ? 12 : 10;

      splitData.forEach(function (item) {
        '' + (Number(hasCheckBox) ? rowTrChild.push(String(item.quantity)) : '');
        rowTrChild.push(String(item.boltNo));
        rowTrChild.push(String(item.breadth));
        rowTrChild.push(String(item.length));
        rowTrChild.push(String(item.quantity));
        rowTrChild.push(String(item.sampleType));
      });
    } else {

      splitData.forEach(function (item) {
        '' + (Number(hasCheckBox) ? rowTrChild.push(String(item.quantity)) : '');
        rowTrChild.push(String(item.boltNo));
        rowTrChild.push(String(item.dyelot));
        rowTrChild.push(String(item.packageNo || ''));
        rowTrChild.push(String(item.quantity));
      });
    }
  }

  //截取数组


  for (var i = 0, len = rowTrChild.length; i < len; i += _num) {

    var interceptLength = rowTrChild.slice(i, i + _num);

    //补齐空格
    if (interceptLength.length != _num) {

      var _length = Number(_num - interceptLength.length);

      for (var y = 0; y < _length; y++) {

        interceptLength.push('');
      }
    }

    newRowTr.push(interceptLength);
  }

  Number(hasCheckBox) && (newRowTr = changeFineCodeJsonCorrectLength(newRowTr));

  return newRowTr;
}

//打开细码单   扣减库存 

function OpenPackingList(tr, hasCheckBox) {

  var initDataResult = _g_url_name === 'sale_slip_edit' ? detailid_deduction_data[tr.attr('data-detailid')] : [];

  var hasCheckedData = [];

  if (initDataResult) {

    initDataResult.forEach(function (item) {

      hasCheckedData.push([item.quantity, item.boltNo, item.dyelot, item.packageNo, item.quantity]);
    });
  }

  var config = tr.data('detail-form-stock');

  //细码单 需要干预
  changeInitData(tr, function (_ratio, _nuit, _data_unit) {

    var _line = 0,
        //卷、匹、布
    _count = 0,
        _next_num = Number(hasCheckBox) ? 5 : 4; //米、码、公斤

    var _excelConfig = JSON.parse(JSON.stringify(config));

    _excelConfig.colTh.forEach(function (item, index) {

      if (item.key === 'line') {
        _line = index;
      }

      if (item.key === 'count') {
        _count = index;

        item.label = _nuit;
      }
    });

    //编辑 + 辅助单位
    if (tr.attr('data-formdetail')) {
      //

      var _init_unit = tr.attr('init-unit');
      //首先获取默认单位   然后同比例还原成核算单位  _ratio, _data_unit

      var _ratio_edit = '';

      for (var key in _data_unit) {

        var element = _data_unit[key];

        if (element === _init_unit && key != 'accUnit') {

          _ratio_edit = _data_unit[key + 'Ratio'];
        }
      }

      if (_ratio_edit) {
        //有数据  还原

        _excelConfig.rowTr.forEach(function (item) {

          if (item[_line] !== '' && item[_count] !== '') {

            item[_count] = correctNumberInput(Number(item[_count]) * Number(_ratio_edit));
          }

          if (item[_line + _next_num] !== '' && item[_count + _next_num] !== '') {

            item[_count + _next_num] = correctNumberInput(Number(item[_count + _next_num]) * Number(_ratio_edit));
          }
        });

        config = _excelConfig;
      }
    }

    //正常新增模式
    if (Number(_ratio) && config) {

      _excelConfig.rowTr.forEach(function (item) {

        if (item[_line] !== '' && item[_count] !== '') {

          item[_count] = correctNumberInput(Number(item[_count]) / Number(_ratio));
        }

        if (item[_line + _next_num] !== '' && item[_count + _next_num] !== '') {

          item[_count + _next_num] = correctNumberInput(Number(item[_count + _next_num]) / Number(_ratio));
        }
      });

      config = _excelConfig;
    }
  });

  var _new_config = config;

  //判断大货还是剪样
  //console.log(_new_config);

  if ($('#order_type').length) {

    Number($('#order_type option:selected').val()) ? config.isPartEditable = false : config.isPartEditable = true;
  }

  // console.log(config)
  exceler.open(config, function (data) {

    // 勾选后的数据

    //btn.text('编辑');


    tr.find('.sale-excel-btn').attr('data-detail', JSON.stringify(data));

    var _line_config = '',
        _count_config = '',
        _dyelot_config = '',
        //缸
    _package_no_config = '',
        //包
    _data_details_config = [];

    //获取出库之前的细码单


    _new_config.colTh.forEach(function (item, index) {

      if (item.key === 'line') {
        _line_config = index;
      }

      if (item.key === 'count') {
        _count_config = index;
      }

      if (item.key === 'gang') {
        _dyelot_config = index;
      }

      if (item.key === 'bao') {
        _package_no_config = index;
      }
    });

    _new_config.rowTr.forEach(function (item, index) {

      var _length = Number(item.length / 2);

      var _itemx = item.slice(0, _length);

      if (_itemx[_line_config] !== '' && _itemx[_count_config] !== '') {

        var _datax = {
          boltNo: _itemx[_line_config],
          quantity: _itemx[_count_config],
          dyelot: _itemx[_dyelot_config],
          packageNo: _itemx[_package_no_config],
          numUnit: _new_config.colTh[Number(_count_config)].label
        };

        _data_details_config.push(_datax);
      }

      var _itemy = item.slice(_length, item.length + 1);

      if (_itemy[_line_config] !== '' && _itemy[_count_config] !== '') {
        var _datay = {
          boltNo: _itemy[_line_config],
          quantity: _itemy[_count_config],
          dyelot: _itemy[_dyelot_config],
          packageNo: _itemy[_package_no_config],
          numUnit: _new_config.colTh[Number(_count_config)].label
        };

        _data_details_config.push(_datay);
      }
    });

    // console.log(_data_details_config);

    //存入 tr.find('.save-data-details').data('data-details','');

    var _line = '',
        //卷、匹、布
    _count = '',
        //米、码、公斤
    _dyelot = '',
        //缸
    _package_no = '',
        //包
    _data_details = [];

    data.colTh.forEach(function (item, index) {

      if (item.key === 'line') {
        _line = Number(hasCheckBox) ? index + 1 : index;
      }

      if (item.key === 'count') {
        _count = Number(hasCheckBox) ? index + 1 : index;
      }

      if (item.key === 'gang') {
        _dyelot = Number(hasCheckBox) ? index + 1 : index;
      }

      if (item.key === 'bao') {
        _package_no = Number(hasCheckBox) ? index + 1 : index;
      }
    });

    data.rowTr.forEach(function (item, index) {

      var _length = Number(item.length / 2);

      var _itemx = item.slice(0, _length);

      if (_itemx[_line] !== '' && _itemx[_count] !== '') {

        var _datax = {
          boltNo: _itemx[_line],
          quantity: _itemx[_count],
          dyelot: _itemx[_dyelot],
          packageNo: _itemx[_package_no],
          numUnit: data.colTh[Number(_count) - 1].label
        };

        _data_details.push(_datax);
      }

      var _itemy = item.slice(_length, item.length + 1);

      if (_itemy[_line] !== '' && _itemy[_count] !== '') {
        var _datay = {
          boltNo: _itemy[_line],
          quantity: _itemy[_count],
          dyelot: _itemy[_dyelot],
          packageNo: _itemy[_package_no],
          numUnit: data.colTh[Number(_count) - 1].label
        };

        _data_details.push(_datay);
      }
    });

    //判断是否出完
    //
    // console.log(_data_details_config);
    // console.log(_data_details);

    var _outbound_add_num = 0;

    _data_details_config.forEach(function (itemx) {

      _data_details.forEach(function (itemy) {

        if (itemx.boltNo === itemy.boltNo && itemx.dyelot === itemy.dyelot && Number(itemx.quantity) === Number(itemy.quantity)) {

          itemy.isAllOut = 1;
          _outbound_add_num++;
        }

        if (itemx.boltNo === itemy.boltNo && itemx.dyelot === itemy.dyelot && Number(itemx.quantity) != Number(itemy.quantity)) {

          itemy.isAllOut = 0;
        }
      });
    });

    //合计
    var _num = 0,
        _num_decimal = 0,
        _all_emty = true;

    _data_details.forEach(function (item) {

      _num_decimal += Number(correctNumberInput(item.quantity));
    });

    if (_data_details.length) {

      tr.find('.warehouse-num').val(_outbound_add_num).attr('realNum', _data_details.length);

      tr.find('.warehouse-num-decimal').val(correctNumberInput(_num_decimal));
    } else {

      tr.find('.warehouse-num').val('').attr('realNum', '');

      tr.find('.warehouse-num-decimal').val('');
    }

    //空差是否要计算  米码 互转

    if (Number(isSpaceDifference)) {

      if (_data_details.length) {

        tr.find('.coefficient').attr('data-ratioUnit', _data_details[0].numUnit);

        var _spaceDifferenceMatching = spaceDifferenceMatching(0, tr.attr('data-accUnit'), tr.find('.check-unit').text().trim(), tr.find('.coefficient').attr('data-ratioUnit'));

        _spaceDifferenceMatching ? tr.find('.coefficient').val(_spaceDifferenceMatching.ratio) : tr.find('.coefficient').val(1);
      }
    }

    //是否点击确认过 且勾选

    tr.find('.save-data-details').data('data-details', _data_details).attr('hasSelect', 1); //存入 所需数据

    if (_g_url_name === 'sale_slip_edit' && tr.attr('data-formdetail')) {

      var price = correctNumberInput(tr.find('.check-price').val());
      var count = correctNumberInput(tr.find('.sale_list_2').val());
      var other = correctNumberInput(tr.find('.check-other').val());
      var default_total = Number(price) * Number(count) + Number(other); //默认合计  替换了  default_total

      if (Number(isSpaceDifference)) {
        //金额等于 （销货*系数+空差）*单价

        var isSpace = correctNumberInput(tr.find('.space-difference').val());

        default_total = correctNumberInput((Number(count) * Number(tr.find('.coefficient').val()) + Number(isSpace)) * Number(price));

        tr.find('.accounting-volume').val(correctNumberInput(Number(count) * Number(tr.find('.coefficient').val())));
      }

      if (currencyName != '人民币') {
        if ($('.tax_class').text() == '不计税') {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-foreign-currency').val(correctNumberInput(default_total * rate));
          tr.find('.check-notax').val(correctNumberInput(default_total * rate));
          tr.find('.check-taxPrice').val(0);
        } else if ($('.tax_class').text() == '应税内含') {
          tr.find('.check-total').val(correctNumberInput(default_total));
          var totalprice = default_total * rate;
          tr.find('.check-foreign-currency').val(correctNumberInput(totalprice));
          tr.find('.check-notax').val(correctNumberInput(totalprice / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(totalprice - totalprice / (1 + taxRate / 100)));
        } else {
          var total = default_total * (1 + taxRate / 100);
          tr.find('.check-foreign-currency').val(correctNumberInput(total * rate));
          tr.find('.check-total').val(correctNumberInput(total));
          tr.find('.check-notax').val(correctNumberInput(total * rate / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(total * rate - total * rate / (1 + taxRate / 100)));
        }
      } else {
        if ($('.tax_class').text() == '不计税') {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-notax').val(correctNumberInput(default_total));
          tr.find('.check-taxPrice').val(0);
        } else if ($('.tax_class').text() == '应税内含') {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-notax').val(correctNumberInput(default_total / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(default_total - default_total / (1 + taxRate / 100)));
        } else {
          tr.find('.check-total').val(correctNumberInput(default_total + default_total * taxRate / 100));
          tr.find('.check-notax').val(correctNumberInput(default_total));
          tr.find('.check-taxPrice').val(correctNumberInput(default_total * taxRate / 100));
        }
      }
      makeBigTotal();
      //触发 
      tr.find('.check-count').trigger('input');
    } else {

      // 价格 税率 js
      var price = correctNumberInput(tr.find('.check-price').val());
      var count = correctNumberInput(tr.find('.check-count').val());
      var other = correctNumberInput(tr.find('.check-other').val());
      var default_total = Number(price) * Number(count) + Number(other); //默认合计  替换了  default_total

      if (Number(isSpaceDifference)) {
        //金额等于 （销货*系数+空差）*单价

        var _isSpace = correctNumberInput(tr.find('.space-difference').val());

        default_total = correctNumberInput((Number(count) * Number(tr.find('.coefficient').val()) + Number(_isSpace)) * Number(price));

        tr.find('.accounting-volume').val(correctNumberInput(Number(count) * Number(tr.find('.coefficient').val())));
      }

      if (currencyName != '人民币') {
        if ($('#tax_type').val() == 0) {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-foreign-currency').val(correctNumberInput(default_total * rate));
          tr.find('.check-notax').val(correctNumberInput(default_total * rate));
          tr.find('.check-taxPrice').val(0);
        } else if ($('#tax_type').val() == 1) {
          tr.find('.check-total').val(correctNumberInput(default_total));
          var totalprice = default_total * rate;
          tr.find('.check-foreign-currency').val(correctNumberInput(totalprice));
          tr.find('.check-notax').val(correctNumberInput(totalprice / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(totalprice - totalprice / (1 + taxRate / 100)));
        } else {
          var _total = default_total * (1 + taxRate / 100);
          tr.find('.check-foreign-currency').val(correctNumberInput(_total * rate));
          tr.find('.check-total').val(correctNumberInput(_total));
          tr.find('.check-notax').val(correctNumberInput(_total * rate / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(_total * rate - _total * rate / (1 + taxRate / 100)));
        }
      } else {
        if ($('#tax_type').val() == 0) {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-notax').val(correctNumberInput(default_total));
          tr.find('.check-taxPrice').val(0);
        } else if ($('#tax_type').val() == 1) {
          tr.find('.check-total').val(correctNumberInput(default_total));
          tr.find('.check-notax').val(correctNumberInput(default_total / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(default_total - default_total / (1 + taxRate / 100)));
        } else {
          tr.find('.check-total').val(correctNumberInput(default_total + default_total * taxRate / 100));
          tr.find('.check-notax').val(correctNumberInput(default_total));
          tr.find('.check-taxPrice').val(correctNumberInput(default_total * taxRate / 100));
        }
      }
      makeBigTotal();
      //触发 
      tr.find('.check-count').trigger('input');
    }
  }, hasCheckedData);
}

//修改销货单页面  实际出库数=出库数+库存数
function CombinationEdit(cFlag, outdetails, stockdetails, hasCheckBox) {

  /*假设数据
  outdetails = [
    ['1', '2', '3', '4', '1', '3', '2', '2'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  stockdetails = [
    ['5', '6', '7', '8', '1', '2', '3', '2'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
  ];
  */

  if (cFlag) {

    //第一步 去除空格
    var outdetailsRest = DeleteSpace(outdetails);
    var stockdetailsRest = DeleteSpace(stockdetails);

    //第二步 合并 相同的相加
    var newarr = [],
        newarrall = [],
        newRowTr = [];

    outdetailsRest.forEach(function (itemx, index) {

      var isNeedAdd = true;

      stockdetailsRest.forEach(function (itemy, index) {

        if (Number(itemx[1]) === Number(itemy[1]) && Number(itemx[2]) === Number(itemy[2])) {

          itemy[4] = Number(itemx[4]) + Number(itemy[4]);

          isNeedAdd = false;
        }
      });

      if (isNeedAdd) {
        newarr.push(itemx);
      }
    });

    newarr = newarr.concat(stockdetailsRest);

    //第三部 放入同一数组

    newarr.forEach(function (item, index) {

      newarrall = newarrall.concat(item);
    });

    //第四部 处理成插件需要的数据

    for (var i = 0, len = newarrall.length; i < len; i += 10) {

      var interceptLength = newarrall.slice(i, i + 10);

      //补齐空格
      if (interceptLength.length != 10) {

        var _length = Number(10 - interceptLength.length);

        for (var y = 0; y < _length; y++) {

          interceptLength.push('');
        }
      }

      newRowTr.push(interceptLength);
    }

    //return 数据
    Number(hasCheckBox) && (newRowTr = changeFineCodeJsonCorrectLength(newRowTr));

    return newRowTr;
  }
}

//10位细码单去空格

function DeleteSpace(arr) {

  var _data_details_config = [];

  arr.forEach(function (item, index) {

    var _length = Number(item.length / 2);

    var _itemx = item.slice(0, _length);

    if (_itemx[1] !== '' && _itemx[2] !== '' && _itemx[4] !== '') {

      var _datax = [];

      _datax.push(_itemx[4]);
      _datax.push(_itemx[1]);
      _datax.push(_itemx[2]);
      _datax.push(_itemx[3]);
      _datax.push(_itemx[4]);

      _data_details_config.push(_datax);
    }

    var _itemy = item.slice(_length, item.length + 1);
    if (_itemy[1] !== '' && _itemy[2] !== '' && _itemy[4] !== '') {
      var _datay = [];

      _datay.push(_itemy[4]);
      _datay.push(_itemy[1]);
      _datay.push(_itemy[2]);
      _datay.push(_itemy[3]);
      _datay.push(_itemy[4]);
      // console.log(_datay)
      _data_details_config.push(_datay);
    }
  });

  return _data_details_config;
}

//8位细码单去空格

function eDeleteSpace(arr) {

  var _data_details_config = [];

  arr.forEach(function (item, index) {

    var _length = Number(item.length / 2);

    var _itemx = item.slice(0, _length);

    if (_itemx[0] !== '' && _itemx[1] !== '' && _itemx[3] !== '') {

      var _datax = [];
      _datax.push(_itemx[0]);
      _datax.push(_itemx[1]);
      _datax.push(_itemx[2]);
      _datax.push(_itemx[3]);

      _data_details_config.push(_datax);
    }

    var _itemy = item.slice(_length, item.length + 1);
    if (_itemy[0] !== '' && _itemy[1] !== '' && _itemy[3] !== '') {
      var _datay = [];

      _datay.push(_itemy[0]);
      _datay.push(_itemy[1]);
      _datay.push(_itemy[2]);
      _datay.push(_itemy[3]);
      _data_details_config.push(_datay);
    }
  });

  return _data_details_config;
}

//细码单排序问题

function spaceSort(arr) {

  if (localStorage.getItem('distributionProcess') == '1') {
    return arr;
  }
  var id = 0;
  var row = [];
  arr[0].length == 8 ? (id = 0, row = eDeleteSpace(arr)) : (id = 1, row = DeleteSpace(arr));
  //arr 复制空数据
  var rowTr = [];
  //存放去除空格之后的总数据
  var rowList = [];
  //去除空格的数据 放入一个数据中
  $.each(row, function (k, v) {
    $.each(v, function (i, j) {
      rowList.push(j);
    });
  });
  if (row.length) {
    //添加空格 
    id ? rowList.length % arr[0].length ? rowList.push('', '', '', '', '') : '' : rowList.length % arr[0].length ? rowList.push('', '', '', '') : '';
    //切割位置从0开始
    for (var i = 0; i < rowList.length / arr[0].length; i++) {
      // console.log(i)
      rowTr[i] = [];
      for (var j = arr[0].length * i; j <= (1 + i) * arr[0].length - 1; j++) {
        rowTr[i].push(rowList[j]);
      }
      for (var _i2 = 0; _i2 < 50; _i2++) {
        id ? rowTr.push(['', '', '', '', '', '', '', '', '', '']) : rowTr.push(['', '', '', '', '', '', '', '']);
      }
    }
    return rowTr;
  } else {
    return row;
  }
}

//取消标识符
function CancelIdentifier(_selectedSamples, stock) {

  try {
    var dosomethingF = function dosomethingF(_this) {

      _this.removeAttr('data-dataResult').removeAttr('data-cFlag');

      // _this.find('.warehouse-num').val('').attr('disabled', false);
      // _this.find('.warehouse-num-decimal').val('').attr('disabled', false);

      _this.find('.warehouse-num').val('');
      _this.find('.warehouse-num-decimal').val('');

      _this.find('.sale-excel-btn').removeAttr('data-detail');

      _this.find('.save-data-details').data('data-details', '').removeAttr('hasSelect');
    };

    if (stock) {

      $('#selectedSamples').find('tr').each(function (index, el) {

        var _this = $(this);

        dosomethingF(_this);
      });
    } else {

      _selectedSamples.parents('tr').each(function (index, el) {

        var _this = $(this);

        dosomethingF(_this);
      });
    }
  } catch (err) {
    // console.log('不管！')
  }
}

function changeTemplateforsale(id, _unitslist_samplebasket) {

  var _option_html = '',
      tpl_data = {};

  _unitslist_samplebasket.forEach(function (item, index) {

    _option_html += ' <li><a id="offer_samples_Number">' + item.unitName + '</a></li>';
  });

  return _option_html;

  //$(`#${id}`).html(g_formateString($(`#${id}`).html(), tpl_data));
}

//详情页去空格  长度为十的情况下


function changeFineCodeJsonRemoveChecked(splitData) {

  var _new_splitData = [];

  //截取数组

  splitData.forEach(function (item, index) {

    var _data = [];

    var _length = Number(item.length / 2);

    var _itemx = item.slice(0, _length);

    _itemx.splice(0, 1);

    _data = _data.concat(_itemx);

    var _itemy = item.slice(_length, item.length + 1);

    _itemy.splice(0, 1);

    _data = _data.concat(_itemy);

    _new_splitData.push(_data);
  });

  return _new_splitData;
}

//新增退货老数据 修复  长度为8的情况下


function changeFineCodeJsonAddChecked(splitData) {

  var _new_splitData = [],
      newRowTr = [];

  //截取数组

  splitData.forEach(function (item, index) {

    var _length = Number(item.length / 2);

    var _itemx = item.slice(0, _length);

    if (_itemx[0] !== '' && _itemx[3] !== '') {

      var _data = [];

      _itemx.unshift(_itemx[3]);

      _data = _data.concat(_itemx);

      _new_splitData.push(_data);
    }

    var _itemy = item.slice(_length, item.length + 1);

    if (_itemy[0] !== '' && _itemy[3] !== '') {

      var _data2 = [];

      _itemy.unshift(_itemy[3]);

      _data2 = _data2.concat(_itemy);

      _new_splitData.push(_data2);
    }
  });

  for (var i = 0, len = _new_splitData.length; i < len; i++) {

    //补齐空格
    if (_new_splitData[i].length != 10) {

      var _length = Number(10 - _new_splitData[i].length);

      for (var y = 0; y < _length; y++) {

        _new_splitData[i].push('');
      }
    }

    newRowTr.push(_new_splitData[i]);
  }

  return changeFineCodeJsonCorrectLength(newRowTr);
}

//修改数组结构 生成插件符合数据 修复原数据 长度不足的问题

function changeFineCodeJsonCorrectLength(splitData) {

  //截取数组

  var _splitData_length = splitData.length % 50;

  for (var i = 0, len = 50 - _splitData_length; i < len; i += 1) {

    var interceptLength = [];

    for (var y = 0; y < splitData[0].length; y++) {

      interceptLength.push('');
    }

    splitData.push(interceptLength);
  }

  return splitData;
}

//获取样品详情的计量单位，让后在做处理

function getSamplesInfoUnits(sampleId, cb) {

  var _list_options = {

    url: '/api/samples/' + sampleId,
    type: 'GET',
    data: {}
  };

  var _list_cb = g_return200CbObj(function (data) {

    cb && cb(data.sample);
  });

  sendAjax(_list_options, _list_cb);
}

//扣减 且 开启计量单位 且选择辅助单位  需要修改库存原生数据，sb
function changeInitData(tr, cb) {

  var _company_id = $.cookie('company_id');

  var _units_enable = JSON.parse(sessionStorage.getItem('company_units_enable_' + _company_id) || null);

  if (!_units_enable) {

    isEnableAccountingUnitPublic(function (_obj) {

      if (Number(_obj.multiUnit)) {

        var _data_unit = tr.data('unit');

        var _unit_class = tr.find('.nuit').length ? tr.find('.nuit') : tr.find('.nuit');

        var _nuit = _unit_class.text().trim();

        var _ratio = '';

        for (var key in _data_unit) {

          var element = _data_unit[key];

          if (element === _nuit && key != 'accUnit') {

            _ratio = _data_unit[key + 'Ratio'];
          }
        }

        cb && cb(_ratio, _nuit, _data_unit);
      }
    });

    return;
  }

  if (Number(_units_enable.multiUnit)) {

    var _data_unit = tr.data('unit');

    var _unit_class = tr.find('.nuit').length ? tr.find('.nuit') : tr.find('.nuit');

    var _nuit = _unit_class.text().trim();

    var _ratio = '';

    for (var key in _data_unit) {

      var element = _data_unit[key];

      if (element === _nuit && key != 'accUnit') {

        _ratio = _data_unit[key + 'Ratio'];
      }
    }

    cb && cb(_ratio, _nuit, _data_unit);
  }
}

//获取销售的具体价格

//失去焦点隐藏搜索结果
_body.click(function (e) {

  if (!$(e.target).closest('.find-offer-history').length) {

    $('.offer-history-ul').hide();
  }
});

_body.on('click', '.find-offer-history', g_throttle(function (e) {

  console.log();
  var _this = $(this);

  var _ul = _this.parents('.offer-samples-history').find('.offer-history-ul');

  $('.offer-samples-history .offer-history-ul').hide();

  var list_options = {
    type: 'GET',
    url: '',
    data: {
      sampleId: _this.parents('tr').attr('data-id')
    }
  };

  switch (_g_url_name) {

    case 'purchase_add':
    case 'purchase_edit':

      list_options.url = '/api/purchase/quote/record';

      list_options.data.type = 'purchase';

      list_options.data.supplierId = $('#lianman_id').val();

      break;
    case 'purchase_stock_add':
    case 'purchase_stock_edit':

      list_options.url = '/api/purchase/quote/record';

      list_options.data.type = 'stock';

      list_options.data.supplierId = $('#lianman_id').val();

      break;

    default:
      list_options.url = '/api/sell/quote/record';

      list_options.data.type = _g_url_name === 'sale_add' || _g_url_name === 'sale_edit' ? 'sell' : 'deliver';

      list_options.data.customerId = $('#lianman_id').val();

      break;
  }

  // if (_g_url_name === 'purchase_add' || _g_url_name === 'purchase_edit') {

  //   list_options.url = '/api/purchase/quote/record';

  //   list_options.data.type = 'purchase';

  //   list_options.data.supplierId = $('#lianman_id').val();

  // } else {

  //   list_options.url = '/api/sell/quote/record';

  //   list_options.data.type = _g_url_name === 'sale_add' || _g_url_name === 'sale_edit' ? 'sell' : 'deliver';

  //   list_options.data.customerId = $('#lianman_id').val();
  // }


  var list_callback = g_return200CbObj(function (data) {
    console.log(list_options);
    console.log(_g_url_name);
    var _this = $(this);

    var html = '';

    data.records.length != 0 ? _ul.css('display', 'block') : _ul.css('display', 'none');

    data.records = data.records.slice(0, 10);

    data.records.forEach(function (item) {

      html += '<li class="li-history-active" data-samplePrice="' + item.price + '" title="' + item.time + ': \u62A5\u4EF7(' + item.price + ')">' + item.time + ': \u62A5\u4EF7(' + item.price + ')</li>';
    });
    _ul.html(html);

    _ul.prepend(' <li>该样品的最近报价记录:</li>');
  });

  _ul.find('li').length === 1 ? sendAjax(list_options, list_callback) : _ul.css('display', 'block');
}, 100));

//点击价格历史记录 li-history-active
_body.on('click', '.offer-history-ul .li-history-active', function (event) {

  var _this = $(this);

  var _samplePrice = _this.attr('data-samplePrice');

  var _parents = _this.parents('.offer-samples-history');

  var _input = _parents.find('.find-offer-history');

  var _ul = _this.parents('.offer-history');

  _input.val(Number(_samplePrice));

  $('.check-price').trigger('input');

  _ul.css('display', 'none');
});