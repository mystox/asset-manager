'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

  authCheckAndAutoShow();
});

//权限系统
function authCheckAndAutoShow() {
  var _g_canIUse;

  var G_id_company = $.cookie('company_id');
  g_canIUse((_g_canIUse = {}, _defineProperty(_g_canIUse, AUTH.SALE.cost, {}), _defineProperty(_g_canIUse, AUTH.SALE.sellOrderAddUpdate, { //新增、修改
    HTMLDom: '#sale_list_add'
  }), _g_canIUse), function (data) {

    //删除、编辑权限
    var tpl_auth_data = {
      costBtn: '{{#ifCond status \'==\' 2}}\n                            {{#if accountingStatus}}\n                              <a class="operation-btn btn-account hint--top" aria-label="\u67E5\u770B\u6838\u7B97\u6210\u672C">\u67E5\u770B\u6838\u7B97</a>\n                            {{else}}\n                              <a class="operation-btn btn-account hint--top" aria-label="\u6838\u7B97\u6210\u672C">\u6838\u7B97</a>\n                            {{/if}}\n                          {{/ifCond}}'
    };

    if (data[AUTH.SALE.cost].can !== 1) {

      tpl_auth_data.costBtn = '';
    }

    Object.keys(data).forEach(function (item) {

      if (data[item].can === 1) {

        data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
      } else {
        data[item].HTMLDom && $(data[item].HTMLDom).remove();
      }
    });

    $('#list_tpl').html(g_formateString($('#list_tpl').html(), tpl_auth_data));
    receivedProp();
    pageBegin();
    selectStyleInit();

    chooseSearchInit(G_id_company);
  });
}

// 肢解 props
function receivedProp() {
  var props = JSON.parse($.cookie('sale_sale_list_data') || $.cookie('is_use_sale_history') || '{}');
  $.cookie('sale_sale_list_data', '', {
    path: '/'
  });
  $.cookie('is_use_sale_history', '', {
    path: '/'
  });
  if (props.customer) {
    $('.linkman-supplier').text(props.customer);
    G_AJAXDATA.data.searchType = 2;
    G_AJAXDATA.data.customerId = props.customerId;
  }

  if (props.sellman) {
    $('.warehouse-supplier').text(props.sellman);
    G_AJAXDATA.data.searchType = 1;
    G_AJAXDATA.data.sellerId = props.sellerId;
  }
  if (props.id) {
    G_AJAXDATA.data.pageNo = props.pageNo;
    console.log(props);
  }
  if (props.cost) {
    // $('#search_status').find('option:nth-child(4)').prop('selected', true)
    $('#search_cost').find('option:nth-child(2)').prop('selected', true);
    // G_AJAXDATA.data.accountingStatus = 0
    G_AJAXDATA.data.status = 2;
  }
}

//启动页面主程序
function pageBegin() {

  Main_js();

  G_AJAXDATA.data.companyId = $.cookie('company_id');

  //是否使用历史搜索记录
  if (Number($.cookie('is_use_sale_history')) === 1 && $.cookie('save_sale_search_state')) {

    var _get_state = JSON.parse($.cookie('save_sale_search_state'));

    var _search_type_title = $('#search_type_title'),
        _search_input = $('#search_input'),
        _search_status = $('#search_status'),
        _search_status_text = $('#search_status_text'),
        _search_close_type_text = $('#search_close_type_text'),
        _search_close_type = $('#search_close_type'),

    // _search_cost = $('#search_cost'),
    _search_type = $('#search_type'),
        _search_type_text = $('#search_type_text');

    switch (parseInt(_get_state.search_type_title)) {
      case 0:
        _search_type_title.text('销售单号').attr('data-type', 0);
        _search_input.val(_get_state.search_input);
        break;

      case 1:
        _search_type_title.text('销售人员').attr('data-type', 1);
        _search_input.val(_get_state.search_input);
        break;

      case 2:
        _search_type_title.text('客户').attr('data-type', 2);
        _search_input.val(_get_state.search_input);
        break;

      default:

    }

    //select赋值
    switch (parseInt(_get_state.search_status)) {
      case 0:
        _search_close_type.val(0);
        _search_close_type_text.val('未关闭');
        break;

      case 1:
        _search_close_type.val(1);
        _search_close_type_text.val('已关闭');
        break;

      default:
        _search_close_type.val('');
        _search_close_type_text.val('全部');
    }

    //select赋值
    switch (parseInt(_get_state.search_status)) {
      case 0:
        _search_status.val(0);
        _search_status_text.val('未发货');
        break;

      case 1:
        _search_status.val(1);
        _search_status_text.val('已发货');
        break;

      default:
        _search_status.val('');
        _search_status_text.val('选择状态');
    }

    // switch (parseInt(_get_state.search_cost)) {
    //   case 0:
    //     _search_cost.find('option:contains(\'未核算\')').attr('selected', true);
    //     break;

    //   case 1:
    //     _search_cost.find('option:contains(\'已核算\')').attr('selected', true);
    //     break;

    //   default:
    //     _search_cost.find('option:contains(\'状态筛选\')').attr('selected', true);
    // }

    switch (parseInt(_get_state.search_type)) {
      case 0:
        _search_type.val(0);
        _search_type_text.val('剪样');
        break;

      case 1:
        _search_type.val(1);
        _search_type_text.val('大货');
        break;

      default:
        _search_type.val('');
        _search_type_text.val('选择类型');
    }

    //时间赋值
    $('#start_date').val(_get_state.start_date);

    $('#end_date').val(_get_state.end_date);

    G_AJAXDATA.data.key = _get_state.search_input;
    G_AJAXDATA.data.searchType = _get_state.search_type_title;
    G_AJAXDATA.data.status = _get_state.search_status;
    G_AJAXDATA.data.type = _get_state.search_type;
    // G_AJAXDATA.data.accountingStatus = _get_state.search_cost;
    G_AJAXDATA.data.orderDateStart = _get_state.start_date;
    G_AJAXDATA.data.orderDateEnd = _get_state.end_date;
  }

  //清除cookie
  $.cookie('is_use_sale_history', '', {
    path: '/'
  });

  loadListAjax = initAjaxList(G_AJAXDATA.data.companyId);

  searchSometh();

  judgeClick();
}

//注册一个G标识的全局AJAX数据对象，仅供当前页面使用
var G_AJAXDATA = {
  url: '/api/sell/',
  data: {
    companyId: '',
    pageNo: 1,
    pageSize: 10,
    orderDateStart: '',
    orderDateEnd: '',
    key: '',
    orderNo: '',
    status: '',
    type: '',
    isClosed: '',
    searchType: 0,
    orderByType: '',
    customerId: '',
    sellerId: '',
    totalPage: 1,
    totalRecord: 1
  }
};

var _g_contract_modular = 0;

//跟mainjs挂钩的
function Main_js() {

  //监测用户信息
  manager_check(function (modules) {

    var _contract_modular = $('#contract_modular');

    //请求默认值
    loadListAjax(G_AJAXDATA);

    _g_contract_modular = modules.includes('contract') ? 1 : 0;

    _g_contract_modular ? _contract_modular.removeClass('display-none') : _contract_modular.remove();
  });

  //message更新
  mes_check();

  //管理公司
  $('.goToManage').off().on('click', function () {
    $.cookie('company_page', '1', {
      path: '/'
    });
    location.href = '/my/company.html';
  });

  //去付钱
  $('.goToPay').off().on('click', function () {
    $.cookie('company_page', '3', {
      path: '/'
    });
    location.href = '/my/company.html';
  });
}

//处理点击操作
function judgeClick() {

  //销售菜单 库存菜单 点击提醒 功能

  var _table_list = $('#table_list');

  var _stock_tips = $('.stock-tips');

  _stock_tips.on('click', 'img', function (event) {

    _stock_tips.find('.stock-tips-content').css('display', 'block');
  });

  _stock_tips.on('click', '.sale-tips-content-close', function (event) {

    _stock_tips.find('.stock-tips-content').css('display', 'none');
  });

  // 导出库存表
  $('#outputExcel').on('click', function () {

    var out_opt = {
      url: '/api/inventory/output',
      data: {
        companyId: COMPANYID
      }
    };

    var out_cb = g_return200CbObj(function (data) {

      if (!data.resultFileUrl) {

        g_msgAlert('无法导出库存表');

        return;
      }

      location.href = data.resultFileUrl;
    });

    sendAjax(out_opt, out_cb);
  });

  //导出销售单明细列表

  $('#expo_sale_order').on('click', function () {

    var searchInput = $('#search_input');
    var searchType = $('#search_type_title');
    var starTime = $('#start_date');
    var endTime = $('#end_date');
    var searchStatus = $('#search_status');
    var saleType = $('#search_type');
    // var costStatus = $('#search_cost');


    var _data = {
      companyId: COMPANYID,
      orderDateStart: starTime.val(),
      orderDateEnd: endTime.val(),
      key: searchInput.val().trim(),
      type: saleType.val(),
      status: searchStatus.val(),
      // accountingStatus: costStatus.val(),
      searchType: searchType.attr('data-type')
    };

    var out_opt = {
      url: '/api/sell/output',
      data: _data
    };

    var out_cb = g_return200CbObj(function (data) {

      if (!data.resultFileUrl) {

        g_msgAlert('无法导出库存表');

        return;
      }

      location.href = data.resultFileUrl;
    });

    sendAjax(out_opt, out_cb);
  });

  var longClick = 0,
      timeOutEvent = 0;

  // 查看详情
  _table_list.on('click', '.goSampleInfo', function () {

    clearTimeout(timeOutEvent);

    if (!Number(longClick)) {
      //点击
      // 此处为点击事件----在此处添加跳转详情页

      var _id = $(this).parents('tr').attr('data-id');

      $.cookie('sale_sale_detail_id', JSON.stringify({
        id: _id,
        pageNo: G_AJAXDATA.data.pageNo,
        pageSize: G_AJAXDATA.data.pageSize,
        totalPage: G_AJAXDATA.data.totalPage,
        totalRecord: G_AJAXDATA.data.totalRecord
      }), {
        path: '/'
      });

      window.open('sale_detail.html');
    }
  });

  _table_list.on('mousedown', '.goSampleInfo', function () {

    longClick = 0;

    timeOutEvent = setTimeout(function () {

      longClick = 1;
    }, 500);
  });

  //查看合同图片 open-contract-img

  _table_list.on('click', '.open-contract-img', function (e) {

    var _this = $(this);

    var _img = _this.attr('data-img');

    window.open(_img);
  });

  // 核算
  _table_list.on('click', '.btn-account', function () {

    var _id = $(this).parents('tr').attr('data-id');

    $.cookie('sale_sale_account_id', _id, {
      path: '/'
    });

    location.href = 'account_detail.html';
  });
}

//搜索控制
function searchSometh() {

  var searchInput = $('#search_input');
  // var searchType = $('#search_type_title')
  var starTime = $('#start_date');
  var endTime = $('#end_date');
  var searchStatus = $('#search_status');
  var saleType = $('#search_type');
  var closeType = $('#search_close_type');
  var customerId = $('#lianman_id');
  var sellerId = $('#seller_id');
  var contractId = $('#contract_id');
  var itemNo = $('#itemNo');
  // var costStatus = $('#search_cost')

  // type select
  $('#labelSelects').on('click', 'a', function (e) {
    searchType.text(this.innerText).attr('data-type', this.getAttribute('data-value'));
  });

  // time select
  laydate({
    elem: '#start_date',
    format: 'YYYY-MM-DD',
    festival: true
  });

  laydate({
    elem: '#end_date',
    format: 'YYYY-MM-DD',
    festival: true
  });

  // make search
  $('#make_search').on('click', function () {
    G_AJAXDATA.data.orderNo = searchInput.val().trim();
    // G_AJAXDATA.data.searchType = searchType.attr('data-type')
    G_AJAXDATA.data.status = searchStatus.val();
    G_AJAXDATA.data.type = saleType.val();
    G_AJAXDATA.data.isClosed = closeType.val();
    // G_AJAXDATA.data.accountingStatus = costStatus.val()
    G_AJAXDATA.data.orderDateStart = starTime.val();
    G_AJAXDATA.data.orderDateEnd = endTime.val();
    G_AJAXDATA.data.customerId = customerId.val();
    G_AJAXDATA.data.sellerId = sellerId.val();
    G_AJAXDATA.data.itemNo = itemNo.val();
    G_AJAXDATA.data.pageNo = 1;

    _g_contract_modular && (G_AJAXDATA.data.contractId = contractId.val());

    //记录销售列表的搜索条件 save_sale_search_state
    var _save_sale_search_state = {
      // search_type_title: searchType.attr('data-type'),
      // search_input: searchInput.val().trim(),
      // start_date: starTime.val(),
      // end_date: endTime.val(),
      // search_status: searchStatus.val(),
      // search_cost: costStatus.val(),
      // search_type: saleType.val()
    };

    _save_sale_search_state = JSON.stringify(_save_sale_search_state);

    $.cookie('save_sale_search_state', _save_sale_search_state, {
      path: '/'
    });

    //console.log(G_AJAXDATA.data)
    if (G_AJAXDATA.data.orderDateEnd < G_AJAXDATA.data.orderDateStart) {
      g_msgAlert('开始日期不能晚于结束日期，请您重新调整查询日期之后再查询！', function () {
        return;
      });
    } else {
      loadListAjax(G_AJAXDATA);
    }
  });

  // make reset
  $('#reset_search').on('click', function () {
    searchInput.val('');
    starTime.val('');
    endTime.val('');
    itemNo.val('');

    $('#search_status_text').val('选择状态');
    searchStatus.val('');

    $('#search_type_text').val('选择类型');
    saleType.val('');

    $('#search_close_type_text').val('全部');
    closeType.val('');;

    $('.supplier-text').text('请选客户');
    $('.user-text').text('请选业务员');

    customerId.val('');
    sellerId.val('');

    _g_contract_modular && ($('.contract-text').text('请选择合同'), contractId.val(''));

    $('#make_search').trigger('click');
  });

  // 排序变量存储
  var allSort = $('thead span');

  //订单日期
  var timeStartSort = $('#indent_start_time_sort');
  var timeStartUp = timeStartSort.find('.dot-top');
  var timeStartDown = timeStartSort.find('.dot-bottom');

  //订单交期
  var timeStopSort = $('#indent_over_time_sort');
  var timeStopUp = timeStopSort.find('.dot-top');
  var timeStopDown = timeStopSort.find('.dot-bottom');

  //订单状态
  var orderStatusSort = $('#order_status_sort');
  var orderStatusUp = orderStatusSort.find('.dot-top');
  var orderStatusDown = orderStatusSort.find('.dot-bottom');

  var payFunnel = $('#pay_funnel');
  var payFunnelIcon = payFunnel.find('i');

  //时间排序
  timeStartSort.on('click', function () {

    var _old = G_AJAXDATA.data.orderByType;

    allSort.removeClass('list-sort-dot-active');
    if (_old === 6) {

      G_AJAXDATA.data.orderByType = '';
    } else if (_old === 5) {

      G_AJAXDATA.data.orderByType = 6;

      timeStartUp.addClass('list-sort-dot-active');
    } else {

      G_AJAXDATA.data.orderByType = 5;

      timeStartDown.addClass('list-sort-dot-active');
    }

    //调用ajax
    loadListAjax(G_AJAXDATA);
  });

  timeStopSort.on('click', function () {

    var _old = G_AJAXDATA.data.orderByType;

    allSort.removeClass('list-sort-dot-active');
    if (_old === 8) {

      G_AJAXDATA.data.orderByType = '';
    } else if (_old === 7) {

      G_AJAXDATA.data.orderByType = 8;

      timeStopUp.addClass('list-sort-dot-active');
    } else {

      G_AJAXDATA.data.orderByType = 7;

      timeStopDown.addClass('list-sort-dot-active');
    }

    //调用ajax
    loadListAjax(G_AJAXDATA);
  });

  orderStatusSort.on('click', function () {

    var _old = G_AJAXDATA.data.orderByType;

    allSort.removeClass('list-sort-dot-active');
    if (_old === 10) {

      G_AJAXDATA.data.orderByType = '';
    } else if (_old === 9) {

      G_AJAXDATA.data.orderByType = 10;

      orderStatusUp.addClass('list-sort-dot-active');
    } else {

      G_AJAXDATA.data.orderByType = 9;

      orderStatusDown.addClass('list-sort-dot-active');
    }

    //调用ajax
    loadListAjax(G_AJAXDATA);
  });

  // payFunnel.on('click', function() {
  //
  //   // var _old = G_AJAXDATA.data.haveReceivablePrice;
  //
  //   if (_old === 1) {
  //
  //     G_AJAXDATA.data.haveReceivablePrice = 0;
  //
  //     payFunnelIcon.removeClass('active')
  //   } else {
  //
  //     G_AJAXDATA.data.haveReceivablePrice = 1;
  //
  //     payFunnelIcon.addClass('active')
  //   }
  //
  //   //调用ajax
  //   loadListAjax(G_AJAXDATA);
  // });
}

//缓存变量，先初始化再调用
var loadListAjax;

function initAjaxList(companyId) {

  //初始化
  var list_options = {
    url: '',
    type: 'GET',
    data: {}
  };

  //数据dom模板
  var tpl_fn = Handlebars.compile($('#list_tpl').html());

  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    if (operator) {
      return v1 == v2 ? options.fn(this) : options.inverse(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper('ifCond1', function (v1, operator, v2, options) {
    if (operator) {
      return v1 > v2 ? options.fn(this) : options.inverse(this);
    } else {
      return options.inverse(this);
    }
  });

  //where inset dom
  var list_table = $('#table_list');

  //ajax callback
  var list_callback = g_return200CbObj(function (data) {
    var html = '';

    //coding
    data.sellOrders.forEach(function (item) {

      item.contractModular = _g_contract_modular;

      // item.differDay = (new Date(item.payDeadline).getTime() - new Date(new Date().Format('yyyy-MM-dd')).getTime()) / (24 * 60 * 60 * 1000)
      // item.isOut = item.differDay < 0
      // item.outTime = Math.floor(-item.differDay)
      // item.isClose = item.differDay < 8 && item.differDay > 0
      // item.isToday = item.differDay === 0
      // item.sellNumVal_Mi = 0;
      // item.sellNumVal_Ma = 0;
      // item.sellNumVal_Gj = 0;
      // item.deliverNumVal_Mi = 0;
      // item.deliverNumVal_Ma = 0;
      // item.deliverNumVal_Gj = 0;
      // item.sellNum.forEach(function(itemx) {
      //   if (itemx.unit == 21) {
      //     item.sellNumVal_Mi+=itemx.value;
      //   }else if(itemx.unit == 22){
      //     item.sellNumVal_Ma+=itemx.value;
      //   }else{
      //     item.sellNumVal_Gj+=itemx.value;
      //   }
      // });
      // item.deliverNum.forEach(function(itemy) {
      //   if(itemy.unit == 21){
      //     item.deliverNumVal_Mi+=itemy.value;
      //   }else if(itemy.unit == 22){
      //     item.deliverNumVal_Ma+=itemy.value;
      //   }else{
      //     item.deliverNumVal_Gj+=itemy.value;
      //   }
      // });


      item.deliverNumCount = item.deliverNum ? item.deliverNum.reduce(function (text, a) {
        return '' + text + (a.value + a.unit + '');
      }, '') : '';

      item.sellNumCount = item.sellNum ? item.sellNum.reduce(function (text, a) {
        return '' + text + (a.value + a.unit + ' ');
      }, '') : '';

      item.storeInNumCount = item.storeInNum ? item.storeInNum.reduce(function (text, a) {
        return '' + text + (a.value + a.unit + ' ');
      }, '') : '';

      item.storeOutNumCount = item.storeOutNum ? item.storeOutNum.reduce(function (text, a) {
        return '' + text + (a.value + a.unit + ' ');
      }, '') : '';

      html += tpl_fn(item);
    });

    list_table.html(html);

    //控制分页布局
    change_page(data.pageNo, data.pageCount, data.recordCount);
    G_AJAXDATA.data.totalPage = data.pageCount;
    G_AJAXDATA.data.totalRecord = data.recordCount;

    if (data.recordCount > 0) {

      $('#table_list').show();
      $('#noth_search_div').hide();
    } else {
      $('#table_list').hide();
      $('#noth_search_div').show();
    }
  });

  //分页事件绑定
  var change_page = $('#table_page').pageInit({

    callback: function callback(pageNum) {

      G_AJAXDATA.data.pageNo = pageNum;

      loadListAjax(G_AJAXDATA);
    }
  });

  return function (ajaxData) {

    list_options.url = ajaxData.url;
    list_options.data = ajaxData.data;

    sendAjax(list_options, list_callback);
  };
};

function chooseSearchInit(companyId) {

  $('body .choose-search-plugin-customer').initChooseSearch({
    listUrl: '/api/contact/company',
    listBox: '.choose-search-plugin-customer',
    fastCreate: 0,
    searchField: 'key',
    dataAssignment: ['contactCompanys', 'name', 'id'],
    moreData: {
      nature: 2,
      orderByType: 6,
      searchType: 1
    },
    callback: function callback(_this, data) {

      $('#lianman_id').val(data.id);
    }
  });

  $('body .choose-search-plugin-user').initChooseSearch({
    listUrl: '/api/companys/' + companyId + '/users',
    listBox: '.choose-search-plugin-user',
    fastCreate: 0,
    searchField: 'searchInfo',
    dataAssignment: ['companyUsers', 'name', 'userId'],
    moreData: {},
    callback: function callback(_this, data) {

      $('#seller_id').val(data.userId);
    }
  });

  $('body .choose-search-plugin-contract').initChooseSearch({
    listUrl: '/api/contract',
    listBox: '.choose-search-plugin-contract',
    fastCreate: 0,
    searchField: 'orderNo',
    dataAssignment: ['contracts', 'orderNo', 'id'],
    moreData: {
      companyId: companyId
    },
    callback: function callback(_this, data) {

      $('#contract_id').val(data.id);
    }
  });
  ListEnterBind('#sale_form', '#make_search');
}