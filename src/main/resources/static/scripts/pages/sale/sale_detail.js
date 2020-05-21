'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  authCheckAndAutoShow();
});

//权限系统
function authCheckAndAutoShow() {
  var _g_canIUse;

  g_canIUse((_g_canIUse = {}, _defineProperty(_g_canIUse, AUTH.SALE.finance, {}), _defineProperty(_g_canIUse, AUTH.SALE.sellOrderAddUpdate, {//修改
  }), _defineProperty(_g_canIUse, AUTH.SALE.sellOrderDelete, {//删除
  }), _defineProperty(_g_canIUse, AUTH.SALE.sellOrderPrint, {//打印
  }), _g_canIUse), function (data) {

    //编辑、删除、打印、关闭
    var tpl_auth_data = {
      closeBtn: '<div class="operation operation-close">\n                  <div class="text_icon">\u5173\u95ED</div>\n                </div>',
      editBtn: '<div class="operation operation-edit">\n                  <div class="text_icon">\u4FEE\u6539</div>\n                </div>',
      delBtn: ' <div class="operation delete-btn" data-target="info_delete">\n                  <div class="text_icon">\u5220\u9664</div>\n                </div>',
      printBtn: ' <div class="operation print-btn" data-target="info_print">\n                  <div class="text_icon">\u6253\u5370</div>\n                </div>',
      nextBtn: ' <div class="operation next-btn">\n                <div class="text_icon">\u5408\u540C</div>\n              </div>'
    };

    if (data[AUTH.SALE.sellOrderAddUpdate].can !== 1) {

      tpl_auth_data.editBtn = '';
    }
    if (data[AUTH.SALE.sellOrderDelete].can !== 1) {

      tpl_auth_data.delBtn = '';
    }
    if (data[AUTH.SALE.sellOrderPrint].can !== 1) {

      tpl_auth_data.printBtn = '';
    }
    var company_id = Number($.cookie('company_id'));

    switch (company_id) {
      case 31136:
      case 3004:
        $('#info_shangpaiguoji_template').html(g_formateString($('#info_shangpaiguoji_template').html(), tpl_auth_data)); //尚派国际纺织

        break;
      default:
        $('#info_template').html(g_formateString($('#info_template').html(), tpl_auth_data)); //通用样式


        break;
    }

    pageBegin(data[AUTH.SALE.finance].can);
  });
}
//定时显示 1=瑞彩 2= 华东
var isRC = 0;
var recordIds;
var _g_contract_modular = 0;
//页码
var pageNo;
var totalPage;
var totalRecord;
var pageSize;
//启动页面主程序
function pageBegin(isFinance) {
  var props = JSON.parse($.cookie('sale_sale_detail_id') || '{}');
  if (props) {
    if (props.id) {
      recordIds = props.id;
      pageNo = props.pageNo;
      totalPage = props.totalPage;
      totalRecord = props.totalRecord;
      pageSize = props.pageSize;
    } else {
      recordIds = props;
    }
  }if (!recordIds) {}

  // g_msgAlert('获取数据出现错误,请重新选择!', function() {
  //     window.close();
  // })
  // return


  // 点击操作
  judgeClick(recordIds);

  //查看图片
  hoverImg();

  // 获取定制的数据
  dataShow = new InitDiyShow($.cookie('company_id'));
  $.cookie('company_id') == 3070 ? isRC = 1 : $.cookie('company_id') == 30334 ? isRC = 2 : isRC = 0;
  // $.cookie('company_id') == 3070 ? isRC = 1 : $.cookie('company_id') == 30334||$.cookie('company_id') == 3702||$.cookie('company_id') == 3019 ? isRC = 2 : isRC = 0;

  // dataShow = new InitDiyShow(3070);

  Main_js(recordIds, isFinance);

  //初始化详情操作按钮
  InitDetailOperation(recordIds);
}

// 定制现实占坑
var dataShow = null;

// 订单详情占坑
var detailInfo = {};

//跟mainjs挂钩的
function Main_js(recordIds, isFinance) {
  mes_check();
  manager_check(function (modules) {

    //生成详情
    getInfo(recordIds, isFinance);

    _g_contract_modular = modules.includes('contract') ? 1 : 0;
  });
}

//处理点击操作
function judgeClick(recordIds) {

  var _body = $('body');

  // 回到列表
  _body.on('click', '#hgoList,#goList', function (event) {

    $.cookie('is_use_sale_history', JSON.stringify({
      id: recordIds,
      pageNo: pageNo
    }), {
      path: '/'
    });

    location.href = 'sale.html';
  });

  //刷新页面
  $('#sale_reload').on('click', function () {
    $.cookie('sale_sale_detail_id', recordIds, {
      path: '/'
    });
    location.reload();
  });

  //进入样品信息页
  _body.on('click', '.goSampleInfo', function (e) {
    $.cookie('sample_id', $(this).attr('data-id'), {
      path: '/'
    });
    sessionStorage.setItem('gopanestock', 0);
    window.open('../sample/sample.html');
  });

  //查看合同图片
  _body.on('click', '.open-contract-img', function (e) {

    var _this = $(this);

    var _img = _this.attr('data-img');

    window.open(_img);
  });
}

// 打印 生成图片
function InitDetailOperation(recordIds) {

  var detailBody = $('.sale-detail-body');
  // 生成打印
  detailBody.on('click', '.print-btn', function () {
    $('#' + $(this).attr('data-target')).printArea({
      popX: 0,
      popY: 0,
      mode: 'popup',
      extraCss: '../styles/laydate/print_style.css',
      popWd: screen.width,
      popHt: screen.height
    });
  });

  // 生成图片并保存
  detailBody.on('click', '.save-img-btn', function () {
    html2canvas(document.getElementById($(this).attr('data-target')), {
      useCORS: true
    }).then(function (canvas) {
      saveImage(canvas);
      $(canvas).remove();
    });
  });

  //发货
  detailBody.on('click', '.operation-send', function () {
    $.cookie('sale_sale_send_id', recordIds, {
      path: '/'
    });
    location.href = 'send.html';
  });

  //编辑
  detailBody.on('click', '.operation-edit', function () {
    if ($('.operation-close').text() != '反关闭') {
      $.cookie('sale_sale_edit_id', recordIds, {
        path: '/'
      });
      location.href = 'sale_edit.html';
    } else {
      g_msgAlert('该订单已关闭，如需修改，请点击反关闭重启该订单');
    }
  });
  //关闭
  detailBody.on('click', '.operation-close', function () {
    var closeOpt = {
      url: '/api/sell/' + recordIds + '/close',
      type: 'PUT'
    };
    var closeCb = g_return200CbObj(function () {
      $('.operation-close').text() == '关闭' ? $('.operation-close').text('反关闭') : $('.operation-close').text('关闭');
    });

    sendAjax(closeOpt, closeCb);
  });

  //失去焦点隐藏搜索结果
  $('body').click(function (e) {
    if (!$(e.target).closest('.search_Contacts_alert').length) {
      $('.search_Contacts_alert').hide();
    }
  });

  // 查看细码单
  $('body').on('click', '.packing-btn', function () {
    $(this).toggleClass('active');
    $('#packing_show').toggle();
  });

  //退货
  detailBody.on('click', '.operation-back', function () {
    $.cookie('sale_sale_back_id', recordIds, {
      path: '/'
    });
    location.href = 'back.html';
  });

  // 模板引擎
  var moneyStatusTplFn = Handlebars.compile($('#money_template').html());
  var statusBox = $('#sale_money_status');

  // 查看货款状态
  $('body').on('click', '.operation-money', function () {
    $(this).toggleClass('active');
    statusBox.html(moneyStatusTplFn(detailInfo)).toggle();
  });

  $('body').click(function (e) {
    if (!($(e.target).closest('#sale_money_status').length || $(e.target).closest('#async_id_money').length)) {
      $('#async_id_money').removeClass('active');
      statusBox.hide();
    }
  });

  // 公共改变状态
  function changeStatus(type, isFinish) {
    var tipsMap = {
      '1': '\n            <p>\u8BF7\u786E\u8BA4\u5BA2\u6237\u5DF2\u652F\u4ED8' + (detailInfo.receivablePrice ? '首款' : '全款') + '</p>\n            <div class="sale-sure-tips">\n              ' + moneyStatusTplFn(detailInfo) + '\n            </div>',
      '2': '\n            <p>\u8BF7\u786E\u8BA4\u5BA2\u6237\u5168\u90E8\u5C3E\u6B3E\uFF0C\u786E\u8BA4\u8BA2\u5355\u5B8C\u7ED3\u540E\uFF0C\u5F55\u5165\u9500\u552E\u7EDF\u8BA1\uFF0C\u4E0D\u53EF\u66F4\u6539</p>\n            <div class="sale-sure-tips">\n              ' + moneyStatusTplFn(detailInfo) + '\n            </div>'
    };

    var statusOpt = {
      url: '/api/sell/' + recordIds + '/financeConfirm',
      type: 'PUT',
      data: {
        status: type
      }
    };

    var statusCb = g_return200CbObj(function () {
      $.cookie('sale_sale_detail_id', recordIds, {
        path: '/'
      });
      location.href = 'sale_detail.html';
    });

    g_confirmAlert(tipsMap[type], function () {
      sendAjax(statusOpt, statusCb);
    });
    setTimeout(function () {
      $('.jconfirm-box.jconfirm-type-default').css('width', '500px');
    }, 100);
  }
  //转合同
  detailBody.on('click', '.next-btn', function () {

    console.log(detailInfo);
    console.log(detailInfo.details);

    sessionStorage.setItem('new', 1);
    // sessionStorage.setItem('contract_template_id', arrList[company_id][_index + 1]);
    sessionStorage.setItem('template_detailInfo', JSON.stringify(detailInfo));
    sessionStorage.setItem('template_details', JSON.stringify(detailInfo.details));

    location.href = '../contract/contract_add.html';
  });

  //作废
  detailBody.on('click', '.delete-btn', function () {
    var delOpt = {
      url: '/api/sell/' + recordIds,
      type: 'DELETE'
    };

    if (totalRecord % pageSize === 1) {
      // 表格总数量 % 行数  余出的就是当前页有几个
      var lastPage = (totalRecord + pageSize - 1) / pageSize; // （表格总数量 +行数 -1) / 行数
      if (pageNo === lastPage) {
        // 当前页 === （表格总数量 +行数 -1) / 行数
        pageNo = pageNo - 1; // 减去一页就是前一页
      }
    }
    var delCb = g_return200CbObj(function () {
      $.cookie('sale_sale_id', recordIds, {
        path: '/'
      });
      /*返回列表*/
      $.cookie('is_use_sale_history', JSON.stringify({
        id: recordIds,
        pageNo: pageNo
      }), {
        path: '/'
      });
      location.href = 'sale.html';
    });

    g_confirmAlert('确定要作废该销售订单吗? 作废后不计入销售订单统计，也无法还原！', function () {
      sendAjax(delOpt, delCb);
    });
  });

  // 订单确认
  detailBody.on('click', '.operation-sure', function () {
    changeStatus($(this).attr('data-status'));
  });

  // 订单完结
  detailBody.on('click', '.operation-closing', function () {
    changeStatus(2);
  });

  // 更新尾款
  var updateBox = $('#sale_update_box');
  var needPayText = $('#sale_need_pay');
  var payHistroy = $('.sale-pay-histroy');
  var payInput = $('#sale_last_pay');
  var updateBtn = $('#sale_update_btn');
  var updateOpt = {
    url: '/api/sell/' + recordIds + '/pay',
    data: {}
  };

  var updateCb = g_return200CbObj(function (data) {
    updateOpt.data.gmtCreated = new Date().Format('yyyy-MM-dd');
    updateOpt.data.id = data.id;
    detailInfo.sellOrderPays.push(updateOpt.data);
    detailInfo.lastTotal = correctNumberInput(detailInfo.lastTotal + updateOpt.data.payPrice);
    detailInfo.realTotal = correctNumberInput(detailInfo.realTotal + updateOpt.data.payPrice);
    g_autoCloseTip('更新成功！');
    updateBox.modal('hide');
  });

  updateCb.beforeSend = function () {
    updateBtn.prop('disabled', true).text('正在提交...');
  };

  updateCb.complete = function () {
    updateBtn.prop('disabled', false).text('更新一笔尾款');
  };

  // 更新尾款
  detailBody.on('click', '.operation-update', function () {
    var last = correctNumberInput(detailInfo.receivablePrice - detailInfo.lastTotal);
    needPayText.text(last);
    payInput.val(last > 0 ? last : '');
    payHistroy.html(detailInfo.sellOrderPays.map(function (item) {
      return '<h3 data-id="' + item.id + '" data-money="' + item.payPrice + '"><i style="font-size: 12px;">' + item.gmtCreated + '</i>\u5C3E\u6B3E\uFF1A<span class="sale-orange">' + item.payPrice + '</span>\n                <span class="hint--top" style="margin-left: 10px; color:#ddd;" aria-label="' + item.remark + '"><i class="glyphicon glyphicon-comment" ></i></span>\n                <i class="glyphicon glyphicon-trash" aria-hidden="true"></i>\n              </h3>';
    }));

    updateBox.modal('show');
  });

  payInput.on('blur', function () {
    var val = correctNumberInput(this.value);
    payInput.val(val);
  });

  updateBtn.on('click', function () {
    var payed = correctNumberInput(payInput.val());
    var remark = $('#sale_remark').val();
    var last = correctNumberInput(detailInfo.receivablePrice - detailInfo.lastTotal);

    if (!payed) {
      g_autoCloseTip('请输入正确的数值');
      return;
    }

    g_confirmAlert('<p>\u5E94\u6536\u5C3E\u6B3E<span style="margin-left:10px;" class="sale-orange">' + last + '</span></p>\n                    <p>\u672C\u6B21\u5C3E\u6B3E<span style="margin-left:10px;" class="sale-orange">' + payed + '</span></p>\n                    <p>\u672C\u6B21\u5907\u6CE8<span style="margin-left:10px;  word-break: break-all;" class="sale-orange">' + remark + '</span></p>\n                    <p style="padding-right: 40px; margin-top: 20px;">\u8BF7\u786E\u8BA4\u672C\u6B21\u5C3E\u6B3E\u4E3A <span class="sale-orange">' + payed + '</span>\uFF0C \u786E\u8BA4\u540E\u5C06\u65E0\u6CD5\u518D\u6B21\u4FEE\u6539</p>\n                    ', function () {

      updateOpt.data = {
        payPrice: payed,
        remark: remark
      };
      sendAjax(updateOpt, updateCb);
    });
  });

  // 删除
  updateBox.on('click', '.glyphicon-trash', function () {
    var item = $(this).parents('h3');
    var id = parseInt(item.attr('data-id'));
    var delOpt = {
      url: '/api/sell/pay/' + id,
      type: 'DELETE'
    };

    var delCb = g_return200CbObj(function () {
      g_autoCloseTip('删除成功');
      var money = parseFloat(item.attr('data-money'));
      item.remove();
      detailInfo.sellOrderPays = detailInfo.sellOrderPays.filter(function (item) {
        return item.id != id;
      });
      detailInfo.lastTotal = correctNumberInput(detailInfo.lastTotal - money);
      detailInfo.realTotal = correctNumberInput(detailInfo.realTotal - money);
      needPayText.text(correctNumberInput(detailInfo.receivablePrice - detailInfo.lastTotal));
    });

    g_confirmAlert('你确定要删除该笔尾款记录?', function () {
      sendAjax(delOpt, delCb);
    });
  });

  // 更新首款
  var updateFirstBox = $('#sale_update_first_box');
  var updateFirstBtn = $('#sale_update_first_btn');
  var needPayFirstText = $('#sale_first_pay');
  var needPayFirstInput = $('#sale_first_pay_input');
  var updateFirstOpt = {
    url: '/api/sell/' + recordIds,
    type: 'PUT',
    data: {
      depositPrice: 0,
      receivablePrice: 0
    }
  };

  var updateFirstCb = g_return200CbObj(function () {
    detailInfo.depositPrice = correctNumberInput(needPayFirstInput.val());
    detailInfo.realTotal = correctNumberInput(detailInfo.lastTotal + detailInfo.depositPrice - detailInfo.returnPrice);
    g_autoCloseTip('修改成功！');
    updateFirstBox.modal('hide');
  });

  updateFirstCb.beforeSend = function () {
    updateFirstBtn.prop('disabled', true).text('正在提交...');
  };

  updateFirstCb.complete = function () {
    updateFirstBtn.prop('disabled', false).text('提交修改');
  };

  detailBody.on('click', '.operation-update_first', function () {
    needPayFirstText.text(detailInfo.showFirstPay);
    needPayFirstInput.val(detailInfo.showFirstPay);
    updateFirstBox.modal('show');
  });

  needPayFirstInput.on('blur', function () {
    payInput.val(correctNumberInput(this.value));
  });

  updateFirstBtn.on('click', function () {
    var payed = correctNumberInput(needPayFirstInput.val());

    g_confirmAlert('<p>\u5E94\u6536\u9996\u6B3E<span style="margin-left:10px;" class="sale-orange">' + detailInfo.showFirstPay + '</span></p>\n                    <p>\u5B9E\u6536\u5C3E\u6B3E<span style="margin-left:10px;" class="sale-orange">' + payed + ' </span></p>\n                    <p style="padding-right: 40px; margin-top: 20px;">\u8BF7\u786E\u8BA4\u66F4\u65B0\u9996\u6B3E\u4E3A <span class="sale-orange">' + payed + '</span></p>\n                    ', function () {

      updateFirstOpt.data = {
        depositPrice: payed,
        receivablePrice: detailInfo.receivablePrice
      };
      sendAjax(updateFirstOpt, updateFirstCb);
    });
  });
}
//获取详情
function getInfo(recordIds, isFinance) {

  //初始化
  var list_options = {
    url: '/api/sell/' + recordIds,
    type: 'get'
  };

  var company_id = Number($.cookie('company_id'));

  switch (company_id) {

    case 31136:
    case 3004:
      var tpl_fn = Handlebars.compile($('#info_shangpaiguoji_template').html());

      break;
    default:
      var tpl_fn = Handlebars.compile($('#info_template').html());

      break;
  }

  var exceler = new ExcelMaker();

  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    if (operator) {
      return v1 == v2 ? options.fn(this) : options.inverse(this);
    } else {
      return options.inverse(this);
    }
  });

  var list_callback = g_return200CbObj(function (data) {
    console.log(data);
    //Main.js 最近浏览记录控制
    g_stepRecord.set({
      pageName: '\u9500\u552E\u8BA2\u5355\u8BE6\u60C5: ' + data.sellOrderNo,
      cookie: {
        sale_sale_detail_id: recordIds
      }
    });

    var TOTAL = {
      count: [],
      other: [],
      total: []
    };
    data.priceUnit = data.priceUnit === 12 ? '美元' : '元';
    data.packingList = [];
    data.details.forEach(function (item) {
      // item.total = correctNumberInput(item.num * item.unitPrice + item.extraCharge)
      if (item.exchangeRate != 1 && item.exchangeRate != 0) {
        item.price = correctNumberInput(item.foreignPrice);
      } else {
        item.price = correctNumberInput(item.price);
      }
      item.price = correctNumberInput(item.price);
      item.numUnit = item.numUnit;
      item.priceUnit = data.priceUnit;
      // if (item.packingList.length > 20) {
      //   item.packingList = JSON.parse(item.packingList)
      //   data.packingList.push(exceler.returnHtml(item.packingList))
      // }

      addNum(TOTAL, 'count', item.num, item.numUnit);
      addNum(TOTAL, 'other', item.extraCharge, item.priceUnit);
      addNum(TOTAL, 'total', item.price, item.priceUnit);
    });

    var detailList = data.details.length;

    if (company_id === 31136) {

      var orderLength = Math.ceil(detailList / 6);
      var tempLoop = [0, 1, 2, 3, 4, 5];
    } else {

      var orderLength = Math.ceil(detailList / 8);
      var tempLoop = [0, 1, 2, 3, 4, 5, 6, 7];
    }

    data.orderList = Array.apply(null, Array(orderLength)).map(function (order, i) {
      var details = [];
      tempLoop.forEach(function (a) {
        if (company_id === 31136) {

          details.push(data.details[6 * i + a] || {});
        } else {
          details.push(data.details[8 * i + a] || {});
        }
      });

      return {
        details: details,
        showTotal: i + 1 === orderLength
      };
    });

    if (company_id === 31136) {

      var addLength = 6 - detailList;
    } else {

      var addLength = 8 - detailList;
    }

    if (addLength > 0) {
      for (var i = 0; i < addLength; i++) {
        data.details.push({});
      }
    }
    console.log(data.orderList);

    data.phone = localStorage.getItem('phone');
    data.count = TOTAL.count.join(' / ');
    data.other = parseFloat(TOTAL.other.join(' / '));
    data.total = TOTAL.total.join(' / ');
    data.returnPrice = 0;
    data.showFirstPay = correctNumberInput(data.totalPrice - data.receivablePrice);
    // data.lastTotal = correctNumberInput(data.sellOrderPays.reduce((total, a) => { return total + a.payPrice}, 0))
    data.realTotal = correctNumberInput(data.depositPrice + data.lastTotal);
    data.isOwner = parseInt($.cookie('user_id')) === data.sellerId;
    data.isFinance = isFinance;
    data.needFinance = dataShow.orderNeedFinace(data.totalPrice);

    data.showBtn = data.isOwner || data.isFinance;

    data.contractModular = _g_contract_modular;

    [32525, 3019].includes(Number(company_id)) && (data.companyName = '福州市杰成针纺有限公司', data.companyAddress = '福建省福州市长乐区漳港经编园37号', data.phone = '电话：0591-28686998 传真：0591-28117761', data.sellerMobile = '电话：0591-28686998 传真：0591-28117761', data.iscustomized = 1);

    $('#info_box').html(tpl_fn(data));

    dataShow.showToDom('info');

    // 用于财务确认显示字段
    detailInfo = data;
    data.isClosed == 0 ? $('.operation-close').text('关闭') : $('.operation-close').text('反关闭');
    ifDisplay(isRC);
    if (data.deliverStatus === 1) {
      getSendDetail(recordIds, {
        companyName: data.companyName,
        priceUnit: data.priceUnit,
        customerMobile: data.customerMobile,
        isOwner: data.isOwner,
        showBtn: data.showBtn
      });
    }
    if (company_id !== 3004) {
      $('.next-btn').remove();
    }
  });
  sendAjax(list_options, list_callback);
}

// 获取发货单
function getSendDetail(orderId, options) {
  var detailTplFn = Handlebars.compile($('#send_template').html());

  var detailOpt = {
    url: '/api/sell/' + orderId + '/deliver',
    type: 'GET'
  };

  var TOTAL = {
    count: [],
    other: [],
    total: []
  };

  var detailCb = g_return200CbObj(function (data) {
    // data.priceUnit = data.priceUnit === 12 ? '美元' : '元'
    data.companyName = options.companyName;
    data.customerMobile = options.customerMobile;
    data.packingList = [];

    data.details.forEach(function (item) {
      item.total = correctNumberInput(item.num * item.unitPrice + item.extraCharge);
      item.numUnit = item.numUnit;
      // item.priceUnit = data.priceUnit

      addNum(TOTAL, 'count', item.num, item.numUnit);
    });

    var detailList = data.details.length;
    var orderLength = Math.ceil(data.details.length / 8);
    var tempLoop = [0, 1, 2, 3, 4, 5, 6, 7];

    data.orderList = Array.apply(null, Array(orderLength)).map(function (order, i) {
      var details = [];
      tempLoop.forEach(function (a) {
        details.push(data.details[8 * i + a] || {});
      });

      return {
        details: details,
        showTotal: i + 1 === orderLength
      };
    });

    var addLength = 8 - detailList;
    if (addLength > 0) {
      for (var i = 0; i < addLength; i++) {
        data.details.push({});
      }
    }

    data.count = TOTAL.count.join(' / ');

    data.isOwner = options.isOwner;
    data.showBtn = options.showBtn;

    dataShow.showToDom('send');

    getBackDetail(orderId, options);
  });

  sendAjax(detailOpt, detailCb);
}

// 获取退货单
function getBackDetail(orderId, options) {
  var detailTplFn = Handlebars.compile($('#back_template').html());
  var detailOpt = {
    url: '/api/sell/' + orderId + '/return',
    type: 'GET'
  };

  var TOTAL = {
    count: [],
    other: [],
    total: []
  };

  var detailCb = g_return200CbObj(function (data) {

    // 对发货单的发货按钮进行控制
    if (!data.details || !data.details.length) {
      $('#sale_datail_back').removeClass('display-none');
      return;
    } else {
      $('#sale_datail_back').remove();
    }

    // data.priceUnit = data.priceUnit === 12 ? '美元' : '元'
    data.companyName = options.companyName;
    data.customerMobile = options.customerMobile;

    data.details.forEach(function (item) {
      item.total = correctNumberInput(item.num * item.unitPrice + item.extraCharge);
      item.numUnit = item.numUnit;
      // item.priceUnit = data.priceUnit

      addNum(TOTAL, 'count', item.num, item.numUnit);
    });

    var detailList = data.details.length;
    var orderLength = Math.ceil(data.details.length / 8);
    var tempLoop = [0, 1, 2, 3, 4, 5, 6, 7];

    data.orderList = Array.apply(null, Array(orderLength)).map(function (order, i) {
      var details = [];
      tempLoop.forEach(function (a) {
        details.push(data.details[8 * i + a] || {});
      });

      return {
        details: details,
        showTotal: i + 1 === orderLength
      };
    });

    var addLength = 8 - detailList;
    if (addLength > 0) {
      for (var i = 0; i < addLength; i++) {
        data.details.push({});
      }
    }

    data.count = TOTAL.count.join(' / ');

    data.showBtn = options.showBtn;

    $('#back_box').html(detailTplFn(data));

    dataShow.showToDom('back');

    if (data.returnPrice) {
      detailInfo.returnPrice = data.returnPrice;
      detailInfo.realTotal = correctNumberInput(detailInfo.realTotal - data.returnPrice);
    }
  });
  sendAjax(detailOpt, detailCb);
}

//方便其他公司定制显示
function ifDisplay(isRC) {
  switch (isRC) {
    case 0:
      $('.sale-company-info-add').show();
      $('.sale-company-info').hide();
      $('.sale-company-huadong').hide();

      break;
    case 1:
      $('.sale-company-info-add').hide();
      $('.sale-company-info').show();
      $('.sale-company-huadong').hide();

      break;
    case 2:
      $('.sale-company-huadong').show();
      $('.sale-company-info-add').show();
      $('.sale-company-info').hide();
      break;

    //........
  }
}