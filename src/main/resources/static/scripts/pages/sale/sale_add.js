'use strict';

$(document).ready(function () {
  var G_id_company = 1;

  if (!G_id_company) {
    g_msgAlert('获取数据出现错误,请重新选择!', function () {
      return;
    });
  }

  //minijs 
  Main_js();

  //点击事件
  judgeClick();

  //移入看大图
  hoverImg();

  //获取员工列表
  // getUsersList(G_id_company);

  //获取销售单号，制单人信息
  // getSaleiInfo();

  //获取联系人列表
  getCompanyList(G_id_company);

  //获取样品间基础设置   重复调用/settings
  getCompanySet(G_id_company);

  //提交处理
  submitFrom(G_id_company);

  //处理支付方式
  moneyPay = moneyHowWhen();

  //样品搜索接口
  sampleSearchInit();

  //excel插件
  initExcel();

  //价格合计处理
  makeMoney();

  //价格统计监听
  changeUnit();

  //处理颜色
  chooseColor(1);

  //是否核算外币 重复调用/settings
  accountForeignCurrency(G_id_company);

  //搜索初始化
  chooseSearchInit(G_id_company);

  if ([3019, 33097].includes(Number(G_id_company))) {

    var _input = $('input[type=\'radio\']').eq(1);

    _input.parents('.btn-default').addClass('active');

    _input.attr('checked', true);
  } else {

    var _input2 = $('input[type=\'radio\']').eq(0);

    _input2.parents('label').addClass('active');

    _input2.attr('checked', true);
  }
});

//是否启用计量单位 是否启用扣减库存
var isEnablingMeasurementUnits = 0,
    isEnablingInventoryDeduction = 0;

var taxType = 0;
var G_id_company = $.cookie('company_id');

var contractPicPath = '';
//税率
var taxRate = 0;
//币别
var currencyName = '人民币';
var currencyId = 11;

var show = 0;

var salemanId = 0;

//汇率
var rate = 1;

var _g_contract_modular = 0;

//单位list
var units_list = '',
    second_units_list = '',
    _g_contract_modular = 0;

//跟mainjs挂钩的
function Main_js() {

  var getunitslistfn = function getunitslist(data) {

    units_list = changeTemplateforsale('sample_tpl', data).trim();
  };

  unitsPublic(getunitslistfn);

  //获取消息
  mes_check();

  manager_check(function (modules) {

    var _contract_modular = $('#contract_modular'),
        _old_contract_modular = $('#old_contract_modular');

    _g_contract_modular = modules.includes('contract') ? 1 : 0;

    _g_contract_modular ? _contract_modular.removeClass('display-none') : _contract_modular.remove();

    _g_contract_modular ? _old_contract_modular.remove() : _old_contract_modular.removeClass('display-none');
  });
}

function accountForeignCurrency(G_id_company) {
  var list_client = {
    url: '/api/companys/' + G_id_company + '/settings',
    type: 'GET'
  };

  var sale_order_type1 = Handlebars.compile($('#sale_add_type1').html());
  var sale_order_type2 = Handlebars.compile($('#sale_add_type2').html());
  var list_callback = g_return200CbObj(function (data) {
    var html = '';

    if (data.foreignCurrency == 0) {
      html += sale_order_type1();
      $('.add-td-foreign-currency').find('.foreign-td').remove();
    } else {
      html += sale_order_type2();
      $('.add-td-foreign-currency').append('<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>');
    }

    $('.sale_add_type').html(html);
  });
  sendAjax(list_client, list_callback);
}
//处理点击操作
function judgeClick() {

  var _focus_position = {
    _focus_this: '',
    _focus_class: ''
  };
  var _supplier_list = $('#supplier_list');

  //日历
  laydate({
    elem: '#new_date',
    format: 'YYYY-MM-DD',
    festival: true,
    choose: function choose(date) {
      moneyPay.changeStartTime(date);
    }
  });

  //交期
  laydate({
    elem: '#day_delivery',
    format: 'YYYY-MM-DD',
    festival: true
  });

  // 收款日期
  laydate({
    elem: '#end_date',
    format: 'YYYY-MM-DD',
    festival: true
  });
  if ($.cookie('company_id') == 30334) {
    // if($.cookie('company_id')==30334||$.cookie('company_id')==3019||$.cookie('company_id')==3702){
    $('#pay_date1').show();
    $('#pay_method').show();
  } else {
    $('#public_yingfu').show();
    $('#pay_fangshi').show();
  }
  //时间默认为当前时间
  $('#new_date').val(new Date().Format('yyyy-MM-dd'));

  //时间为默认一周以后
  $('#end_date').val(new Date().Format('yyyy-MM-dd'));

  //交期时间
  $('#day_delivery').val(getTimeLate(30));

  //  设置负责人
  // $('#search_users_status').val($.cookie('user_id'))

  $('#make_sale_saleman').val($.cookie('name'));
  $('#contract_num').val($('#contract-num-inp').text());

  // $('#sale_saleman').val($.cookie('user_id'));

  //查看样品详情
  $('#selectedSamples').on('click', '.goSampleInfo', function (e) {
    $.cookie('sample_id', $(this).parents('tr').attr('data-id'), {
      path: '/'
    });
    sessionStorage.setItem('gopanestock', 0);
    window.open('../sample/sample.html');
  });

  //失去焦点隐藏搜索结果
  $('body').click(function (e) {
    if (!$(e.target).closest('.search_Contacts_alert').length) {
      $('.search_Contacts_alert').hide();
    }
  });

  //阻止冒泡
  $('.selectedRow').on('click', '[data-stopPropagation]', function (e) {
    e.stopPropagation();
  });

  $('.linkman-supplier').on('click', function (event) {

    $('.choose-linkman').toggle();
    $('#search_stock').focus();
  });

  //付款方式
  $('.pay_way').on('click', function (event) {
    $('.choose_pay_way').toggle();
    $('.choose_pay_way_list').focus();
  });

  //计税
  $('.tax_class').on('click', function (event) {
    $('.tax_class_way').toggle();
    $('.tax_class_way_list').focus();
  });

  $('body').click(function (e) {

    if (!$(e.target).closest('.linkman-supplier').length && e.target.id !== 'search_linkman' && e.target.id !== 'search_no_result_lm') {

      $('.choose-linkman').css('display', 'none');
    }
  });

  $('body').click(function (e) {

    if (!$(e.target).closest('.pay_way').length) {

      $('.choose_pay_way').css('display', 'none');
    }
  });

  $('body').click(function (e) {

    if (!$(e.target).closest('.tax_class').length) {

      $('.tax_class_way').css('display', 'none');
    }
  });

  //新建供应商

  _supplier_list.on('click', 'li[data-add-supplier]', function (event) {

    var expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + 5 * 60 * 1000);

    $.cookie('newly_build_return', '../sale/sale_add.html', {
      expires: expiresDate,
      path: '/'
    });

    $.cookie('company_type', 2, {
      path: '/'
    });

    location.href = '../contact/company_add.html';
  });

  //选择联系公司
  _supplier_list.on('click', 'li[value]', function (event) {

    var _this = $(this);

    var _val = _this.attr('value');

    var _text = _this.attr('data-name');

    $('#lianman_id').val(_val);

    $('.linkman-supplier').text(_text);
    var list_client = {
      url: '/api/contact/company/' + _val,
      // url: '/api/contact/company/'+_val,
      type: 'GET',
      data: {
        nature: 2
      }
    };
    $('.cancel_icon_text_test').parents('tr').remove();

    $('.blank-tr').remove();

    $('.insert-tr').after('<tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr>');

    var sale_order_type1 = Handlebars.compile($('#sale_add_type1').html());
    var sale_order_type2 = Handlebars.compile($('#sale_add_type2').html());
    var sale_order_type1_total = Handlebars.compile($('#sale_order_num_type1_total').html());
    var sale_order_type2_total = Handlebars.compile($('#sale_order_num_type2_total').html());
    var list_callback = g_return200CbObj(function (data) {
      var html = '';
      var html2 = '';
      data.salesmanName == '' ? g_msgAlert('请到设置->客户下添加对应客户的业务员') : $('#sale_saleman').val(data.salesmanName);
      $('#search_users_status').val(data.salesman);
      salemanId = data.salesman;

      !data.currencyName && (data.currencyName = '人民币');

      $('#currency_type').val(data.currencyName);
      currencyName = data.currencyName;
      if (currencyName == '人民币') {
        html += sale_order_type1();
        html2 += sale_order_type1_total();
        show = 0;

        $('.add-td-foreign-currency').find('.foreign-td').remove();
      } else {
        show = 1;
        html += sale_order_type2();
        html2 += sale_order_type2_total();
        $('.add-td-foreign-currency').append('<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>');
      }

      $('.sale_add_type').html(html);

      $('.sale_add_type_total').html(html2);
      searchcurrency(currencyName);
    });
    sendAjax(list_client, list_callback);
  });

  // 缓存最初数据
  var DEFAULTLINKMANDATA = '';

  //搜索客户
  $('#search_linkman').on('input', g_throttle(function () {

    var key = this.value.trim();

    DEFAULTLINKMANDATA = DEFAULTLINKMANDATA ? DEFAULTLINKMANDATA : _supplier_list.html();

    if (!key) {
      _supplier_list.html(DEFAULTLINKMANDATA);
      return;
    }

    //数据dom模板
    var tpl_fn = Handlebars.compile($('#list_linkman_tpl').html());

    var list_options = {
      url: '/api/contact/company',
      type: 'GET',
      data: {
        companyId: $.cookie('company_id'),
        orderByType: 6,
        searchType: 1,
        key: key,
        nature: 2,
        pageSize: 50
      }
    };

    var list_callback = g_return200CbObj(function (data) {
      var html = '';

      data.contactCompanys.forEach(function (item, index) {
        html += tpl_fn(item);
      });

      if (data.contactCompanys.length === 0) {

        html = '<li id="search_no_result_lm">没有找到相关信息</li>';
      }

      html += '<li data-add-supplier="1" style="color: rgb(32, 160, 255);cursor: pointer;">+新建客户</li>';
      _supplier_list.html(html);
    });

    list_callback.beforeSend = function () {

      $('#result_search_loading_lm').show();
    };

    list_callback.complete = function () {

      $('#result_search_loading_lm').hide();
    };

    sendAjax(list_options, list_callback);
  }, 500));
  //计税类型
  $('#tax_type').change(function () {
    //获取样品间基础设置

    if ($('#tax_type').val() == 0) {
      $('.check-taxRate').val(0 + '%');
    } else {
      $('.check-taxRate').val(taxRate + '%');
    }
    $('#selectedSamples').find('tr[id]').each(function () {
      var tr = $(this);

      var price = correctNumberInputAccurate(tr.find('.check-price').val());
      var count = correctNumberInput(tr.find('.check-count').val());
      var other = correctNumberInput(tr.find('.check-other').val());
      // var getexchange = correctNumberInput(tr.find('.check-exchange').val());

      var getTaxRate = correctNumberInput(tr.find('.check-taxRate').val());

      if (currencyName != '人民币') {
        if ($('#tax_type').val() == 0) {
          tr.find('.check-total').val(correctNumberInput(price * count + other));
          tr.find('.check-foreign-currency').val(correctNumberInput((price * count + other) * rate));
          tr.find('.check-notax').val(correctNumberInput((price * count + other) * rate));
          tr.find('.check-taxPrice').val(0);
        } else if ($('#tax_type').val() == 1) {
          tr.find('.check-total').val(correctNumberInput(price * count + other));
          var totalprice = (price * count + other) * rate;
          tr.find('.check-foreign-currency').val(correctNumberInput(totalprice));
          tr.find('.check-notax').val(correctNumberInput(totalprice / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(totalprice - totalprice / (1 + taxRate / 100)));
        } else {
          var total = (price * count + other) * (1 + taxRate / 100);
          tr.find('.check-foreign-currency').val(correctNumberInput(total * rate));
          tr.find('.check-total').val(correctNumberInput(total));
          tr.find('.check-notax').val(correctNumberInput(total * rate / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(total * rate - total * rate / (1 + taxRate / 100)));
        }
      } else {
        if ($('#tax_type').val() == 0) {
          tr.find('.check-total').val(correctNumberInput(price * count + other));
          tr.find('.check-notax').val(correctNumberInput(price * count + other));
          tr.find('.check-taxPrice').val(0);
        } else if ($('#tax_type').val() == 1) {
          tr.find('.check-total').val(correctNumberInput(price * count + other));
          tr.find('.check-notax').val(correctNumberInput((price * count + other) / (1 + taxRate / 100)));
          tr.find('.check-taxPrice').val(correctNumberInput(price * count + other - (price * count + other) / (1 + taxRate / 100)));
        } else {
          tr.find('.check-total').val(correctNumberInput(price * count + other + (price * count + other) * taxRate / 100));
          tr.find('.check-notax').val(correctNumberInput(price * count + other));
          tr.find('.check-taxPrice').val(correctNumberInput((price * count + other) * taxRate / 100));
        }
      }
    });
    makeBigTotal();
  });

  $('#set_groups_new').on('click', function (event) {
    var _contractNum = $('#contract-num-inp').val();

    if (_contractNum === '') {
      g_msgAlert('合同号不能为空！');
      return;
    }

    $('#contract_num').val(_contractNum);
    $('#add_contract_modal').modal('hide');
  });

  //取消合同号 set_groups_new_cancel

  $('#set_groups_new_cancel').on('click', function (event) {

    $('#contract_num').val('');

    $('#contract-num-inp').val('');

    $('.up-img-box').html('');

    contractPicPath = '';

    $('#add_contract_modal').modal('hide');
  });

  //检测光标位置
  $('#selectedSamples').on('focus', 'input[type=text]', function (event) {

    _focus_position._focus_this = $(this);

    _focus_position._focus_class = _focus_position._focus_this.attr('data-focus');

    //console.log(_focus_position);
  });
  //enter 移动光标

  $(document).keydown(function (event) {

    var e = event || window.event;

    var k = e.keyCode || e.which;

    if (k === 13) {

      //获取下一个next focus
      var _next_focus = _focus_position._focus_this.parents('tr').next().find('.' + _focus_position._focus_class);

      _next_focus.focus();
    }
  });

  //加载图片
  upLoadImg(G_id_company);
}

// 处理付款方式
var moneyPay = null;

//搜索汇率
function searchcurrency(currencyName) {
  var list_currency = {
    url: '/api/companys/' + G_id_company + '/currency',
    type: 'GET'
  };
  var list_currency_callback = g_return200CbObj(function (data) {
    data.currencies.forEach(function (item) {
      if (currencyName == item.currencyName) {
        rate = item.rate;
        currencyId = item.currencyId;
      }
    });
  });
  sendAjax(list_currency, list_currency_callback);
}

//样品搜索
function sampleSearchInit() {

  var priceUnit = {
    11: '元',
    12: '美元',
    13: '欧元'
  };

  var tbody = $('#selectedSamples');
  var searchTr = $('.search_smaples_tr');

  var tppFn = Handlebars.compile($('#sample_tpl').html());

  Handlebars.registerHelper('ifCondnuit', function (v1, operator, v2, options) {
    if (operator) {
      return v1 == v2 ? options.fn(this) : options.inverse(this);
    } else {
      options.inverse(this);
    }
  });

  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    if (operator) {
      return v1 != v2 ? options.fn(this) : options.inverse(this);
    } else {
      options.inverse(this);
    }
  });

  function addCb(sample, selected) {

    sample.priceUnit = priceUnit[currencyId];
    sample.getRate = rate;

    if (show == 0) {
      sample.show1 = 0;
    } else {
      sample.show1 = 1;
    }

    var history = tbody.find('tr[id]:first');

    if (history.length === 8) {
      g_msgAlert('单个订单样品数量过多, 建议拆分订单');
      return;
    }
    taxType = $('#tax_type').val();
    if (taxType == 0) {
      sample.getTaxRate = 0;
    } else {
      sample.getTaxRate = taxRate;
    }

    sample.units_list = units_list;

    sample.isEnablingInventoryDeduction = isEnablingInventoryDeduction;

    //做扣减是在做处理
    if (Number(isEnablingInventoryDeduction)) {

      //判断时候开启多计量单位  
      /**
       * 
       *   1.入过库  有主单位 + 开启计量单位 
       *  
       *     没入库  没有选过单位 + 设置过计量单位 + 开启计量单位; 做以下处理
       * 
       */

      if (sample.accUnit && Number(isEnablingMeasurementUnits)) {

        var _html_unit = '';

        sample.primaryUnit = '';

        sample.isEnablingMeasurementUnits = isEnablingMeasurementUnits;

        _html_unit += '<li><a id="offer_samples_Number">' + sample.accUnit + '</a></li>';

        _html_unit += sample.subUnit1 ? '<li><a id="offer_samples_Number">' + sample.subUnit1 + '</a></li>' : '';

        _html_unit += sample.subUnit2 ? '<li><a id="offer_samples_Number">' + sample.subUnit2 + '</a></li>' : '';

        _html_unit += sample.subUnit3 ? '<li><a id="offer_samples_Number">' + sample.subUnit3 + '</a></li>' : '';

        sample.units_list = _html_unit;
      }
    } else {

      //不做扣减,隐藏计量单位设置
      sample.hideAccUnit = 1;
    }

    searchTr.before(tppFn(sample));

    //删除空白
    tbody.find('tr[id]').length < 5 && tbody.find('.blank-tr')[0].remove();

    //做扣减是在做处理  此方法在searchTr.before(tppFn(sample));后

    if (Number(isEnablingInventoryDeduction)) {

      //存入多计量单位


      var _muliti_unit = {
        accUnit: sample.accUnit,
        subUnit1: sample.subUnit1,
        subUnit1Ratio: sample.subUnit1Ratio,
        subUnit2: sample.subUnit2,
        subUnit2Ratio: sample.subUnit2Ratio,
        subUnit3: sample.subUnit3,
        subUnit3Ratio: sample.subUnit3Ratio
      };

      tbody.find('tr[data-id=\'' + sample.sampleId + '\']').data('unit', _muliti_unit);
    }

    if (history.length) {

      tbody.find('tr[id]:last').find('.rmb').text(history.find('.rmb.first_span').eq(0).text());
    }

    $('#selectedNum').text(tbody.find('tr[id]').length);
  }

  // 点击tr后面的移除
  tbody.on('click', '.cancel_icon_text_test', function () {

    $(this).parents('tr').remove();

    //添加空白行
    tbody.find('tr[id]').length < 4 && tbody.find('.insert-tr').after('<tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr>');

    $('#selectedNum').text(tbody.find('tr[id]').length);

    makeBigTotal();
  });

  // 清空全部选择
  $('#empty_sample').on('click', function () {

    //添加空白行

    tbody.find('tr[id]').length > 0 && (tbody.find('.blank-tr').remove(), tbody.find('.insert-tr').after('<tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr><tr class="add-td-foreign-currency blank-tr"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>' + (currencyName != '人民币' ? '<td class=\'foreign-td\'></td><td class=\'foreign-td\'></td>' : '') + '</tr>'));

    tbody.find('tr[id]').remove();

    $('#selectedNum').text(0);

    makeBigTotal();
  });

  //直接输入 direct-input-samples
  tbody.on('click', '.direct-input-samples', function () {

    var _init_attr = {
      directlyEnter: 1
    };

    if (!$('#lianman_id').val()) {

      g_msgAlert('请选客户');

      return;
    };

    //

    addCb(_init_attr);
  });

  chooseSample({
    addCb: addCb
  });
}

// 企业资料图片上传
function upLoadImg(companyId) {

  //最后对应上传的
  var _pics_input = $('#company_info_pics');

  //图片在此box中展示
  var _img_box = $('.up-img-box');

  //图片上传插件
  $('.up-img-btn').initUploadImg({

    uploadUrl: '/api/upload/pic',

    listenImgBox: '.up-img-box',

    totalLen: 3,

    multiple: false,

    moreData: {
      bizType: 35,
      bizId: companyId
    },

    callback: function callback(data) {

      data.forEach(function (item) {
        contractPicPath = item.path;
      });

      var _pics = _pics_input.val();

      //修正数组
      if (_pics.length === 0) {
        _pics = [];
      } else {
        _pics = _pics.split(',');
      }

      var _html = '';

      data.forEach(function (item, i) {

        _pics.push(item.key);

        _html += ['<a href="', item.url, '" target="_blank" data-key="', item.key, '">', '<img src="', item.url, '" class="call-upload-length" style="width: 198px;height: 98px" onload="centerImg(this.parentNode)">', '<i class="i-icon i-close-icon"></i>', '</a>'].join('');
      });

      _pics_input.val(_pics.join(','));

      _img_box.append(_html);
    }
  });
  //删除绑定
  _img_box.on('click', '.i-close-icon', function () {

    var _a = $(this).parents('a');

    var _key = _a.attr('data-key');

    var _keys = _pics_input.val().split(',');

    //splice 是破坏原有数组，return值位被处理的元素，切不可 var 赋值
    _keys.splice(_keys.indexOf(_key), 1);

    _a.remove();

    _pics_input.val(_keys.join(','));

    return false;
  });
}

// excel 生成
function initExcel() {
  var exceler = new ExcelMaker();

  //查看样品详情
  $('#selectedSamples').on('click', '.sale-excel-btn', function (e) {
    var btn = $(this);
    var tr = btn.parents('tr');
    var config = btn.attr('data-detail');

    if ($('.linkman-supplier').text() === '请选客户') {
      g_autoCloseTip('请选择客户');
      return;
    }

    if (tr.find('.choose-text').text() === '选择颜色') {
      g_autoCloseTip('请先选择颜色');
      return;
    }

    if (!tr.find('.check-price').val().trim()) {
      g_autoCloseTip('请先选择单位');
      return;
    }

    if (!config) {
      config = {
        infoTR: {
          label: '客户：',
          value: $('.linkman-supplier').text()
        },
        infoTL: {
          label: '品号：',
          value: tr.find('td:nth-child(2)').text()
        },
        infoBL: {
          label: '颜色：',
          value: tr.find('.choose-text').text()
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
          label: tr.find('.check-unit .nuit').text(),
          key: 'count',
          value: [],
          isDefault: true,
          editable: true,
          isReadonly: true
        }],
        rowTr: [['', '', '', '', '', '', '', '']]
      };
    } else {
      config = JSON.parse(config);
    }

    new_dateexceler.open(config, function (data) {
      btn.attr('data-detail', JSON.stringify(data));
      btn.text('编辑');
    });
  });
}

function getCompanySet(companyId) {

  var _list_options = {

    url: '/api/companys/' + companyId + '/settings',
    type: 'GET',
    data: {}
  };

  var _list_cb = g_return200CbObj(function (data) {

    taxRate = data.taxRate;

    //是否启用计量单位
    isEnablingMeasurementUnits = data.multiUnit;

    //是否启用库存扣减
    isEnablingInventoryDeduction = data.sellInventoryReduce;

    // 计量单位处理

    if (Number(isEnablingInventoryDeduction)) {

      initUnitEvent(companyId);
    }
  });

  sendAjax(_list_options, _list_cb);
}

//获取联系人列表
function getCompanyList(companyId) {

  //添加创建公司的的按钮li
  var companyAddHtml = '<li data-add-supplier="1" style="color: rgb(32, 160, 255);cursor: pointer;">+新建客户</li>';
  var _tpl_fn = Handlebars.compile($('#list_linkman_tpl').html());
  var $supplier_list = $('#supplier_list');

  var _list_options = {
    url: '/api/contact/company',
    type: 'GET',
    data: {
      companyId: companyId,
      pageNo: 1,
      orderByType: 5,
      nature: 2,
      pageSize: 999
    }
  };

  var _list_cb = g_return200CbObj(function (data) {

    var _html = '';

    data.contactCompanys.forEach(function (item) {

      _html += _tpl_fn(item);
    });

    _html += companyAddHtml;

    $supplier_list.html(_html);
  });

  sendAjax(_list_options, _list_cb);
}

// 提交样品
function submitFrom(companyId) {

  var submitBtn = $('#form_submit');
  // var saleName = $('#sale_name')
  // var saleTime = $('#new_date')
  // var customer = $('#lianman_id')
  // var saleman = $('#search_users_status')
  // var saleDelivery = $('#day_delivery')
  // var contractNum = $('#contract_num')
  // var taxType = $('#tax_type')
  // var makeSaleman = $('#make_sale_saleman')
  // var remark = $('#remark')
  // var type = $('input[name="type"]')
  // var tbody = $('#selectedSamples')


  // var unitMatch = {
  //   '米': 21,
  //   '码': 22,
  //   '公斤': 23,
  // }

  var unitMoney = {
    '人民币': 11,
    '美元': 12
    // '欧元': 23,
  };

  var formOpt = {
    url: '/api/sell/save',
    data: {}
  };

  var formCb = g_return200CbObj(function (data) {

    //取消离开提示  
    window.onbeforeunload = null;

    $.cookie('sale_sale_detail_id', JSON.stringify({
      id: data.id
    }), {
      path: '/'
    });

    location.href = 'sale_detail.html';
  });

  formCb.beforeSend = function () {
    submitBtn.prop('disabled', true).text('正在生成...');
  };

  formCb.complete = function () {
    submitBtn.prop('disabled', false).text('保存');
  };

  // 开始提交
  submitBtn.on('click', function () {

    var saleTime = $('#new_date');
    var customer = $('#lianman_id');
    var saleman = $('#sale_saleman');
    var saleDelivery = $('#day_delivery');
    var contractNum = $('#contract_num');
    var contractPic = $('#company_info_pics');
    var taxType = $('#tax_type');
    var remark = $('#remark');
    var type = $('input[name="type"]');
    var tbody = $('#selectedSamples');

    // 闯关开始 第一关
    formOpt.data = {
      companyId: companyId,
      orderDate: saleTime.val(),
      customerId: customer.val(),
      sellerId: salemanId,
      // leadTime:saleDelivery.val(),
      contractNo: contractNum.val(),
      contractPhoto: contractPicPath,
      taxType: taxType.val(),
      remark: remark.val(),
      priceUnit: 11,
      type: $('input[name="type"]:checked').val(),
      details: []
    };

    _g_contract_modular && (formOpt.data.contractId = $('#contract_id').val());

    saleDelivery.val() != '交付时间' ? formOpt.data.leadTime = saleDelivery.val() : formOpt.data.leadTime = '';
    // 验证
    if (!formOpt.data.orderDate) {
      g_msgAlert('请选择订单日期');
      return;
    }
    if (!formOpt.data.customerId) {
      g_msgAlert('请选择或者新增一个客户');
      return;
    }
    if (!formOpt.data.sellerId) {
      g_msgAlert('请选择销售人员');
      return;
    }
    if (!formOpt.data.leadTime) {
      g_msgAlert('请选择订单交期');
      return;
    }
    // if (!formOpt.data.contractNo) {
    //   g_msgAlert('请添加合同')
    //   return
    // }
    if (!formOpt.data.taxType) {
      g_msgAlert('请选择计税类别');
      return;
    }

    // 第二关
    var failText = '';
    var sampleCache = {};
    var samples = tbody.find('tr[id]');

    if (!samples.length) {
      failText = '请至少选择一个样品';
    }

    samples.each(function (i) {
      var item = $(this);
      var itemFailText = '';
      formOpt.data.priceUnit = currencyId;
      var taxRate = Number(item.find('.check-taxRate').val().substring(0, item.find('.check-taxRate').val().length - 1));
      var data = {
        sampleId: item.attr('data-id'),
        itemNo: item.find('.sample-item').val() ? item.find('.sample-item').val() : '',
        sampleName: item.find('.sample-name').val() ? item.find('.sample-name').val() : '',
        colorId: item.find('.choose-text').attr('data-id').trim() ? item.find('.choose-text').attr('data-id').trim() : '',
        num: item.find('.check-count').val(),
        numUnit: item.find('.check-unit').text().trim(),
        unitPrice: item.find('.check-price').val(),
        extraCharge: item.find('.check-other').val(),
        price: item.find('.check-foreign-currency').val(),
        noTaxPrice: item.find('.check-notax').val(),
        taxRate: taxRate,
        taxPrice: item.find('.check-taxPrice').val(),
        exchangeRate: item.find('.check-exchange').val(),
        foreignPrice: item.find('.check-total').val(),
        // packingList: item.find('.sale-excel-btn').attr('data-detail'),
        remark: item.find('.check-remark').val()
      };
      if (rate != 1) {
        data.price = item.find('.check-foreign-currency').val();
        data.exchangeRate = item.find('.check-exchange').val();
        data.foreignPrice = item.find('.check-total').val();
      } else {
        data.price = item.find('.check-total').val();
        data.exchangeRate = '';
        data.foreignPrice = '';
      }

      if (!Number(item.attr('data-verification'))) {

        if (!data.colorId) {
          itemFailText += '<li>选择一个颜色</li>';
        } else {

          if (sampleCache[data.sampleId + data.colorId] === data.colorId) {
            itemFailText += '<li>颜色重复</li>';
          }

          sampleCache[data.sampleId + data.colorId] = data.colorId;
        }

        if (Number(isEnablingInventoryDeduction)) {

          //前提 开启计量单位后，没设置核算单位的，都需设置计量单位
          if (Number(isEnablingMeasurementUnits) && !item.data('unit').accUnit) {

            itemFailText += '<li>开启计量单位后，需设置计量单位!</li>';
          }
        }
      } else {

        if (!data.itemNo) {

          itemFailText += '<li>请填写编号</li>';
        }
      }

      if (!correctNumberInput(data.num)) {
        itemFailText += '<li>填写正确的数量</li>';
      }

      if (!correctNumberInput(data.unitPrice)) {
        itemFailText += '<li>填写正确的单价</li>';
      }

      if (isNaN(data.extraCharge)) {
        itemFailText += '<li>填写正确的附加费</li>';
      }

      // if (!correctNumberInput(data.noTaxPrice)) {
      //   itemFailText += '<li>填写正确的未税金额</li>'
      // }
      //
      // if (!correctNumberInput(data.taxRate)) {
      //   itemFailText += '<li>填写正确的税率</li>'
      // }
      //
      // if (!correctNumberInput(data.taxPrice)) {
      //   itemFailText += '<li>填写正确的税额</li>'
      // }

      if (itemFailText) {
        itemFailText = '<div class="sale-form-error"><p>\u7B2C' + (i + 1) + '\u4E2A\u6837\u54C1:</p> <ul>' + itemFailText + '</ul></div>';
        failText += itemFailText;
      } else {
        formOpt.data.details.push(data);
      }
    });

    if (failText) {
      g_confirmAlert('<div style="overflow: hidden;">' + failText + '</div>');
      return;
    }

    // 第三关
    var payData = moneyPay.returnPay();

    if (!payData.payDeadline) {
      g_msgAlert('请选择结款日期');
      return;
    }

    if (new Date(formOpt.data.orderDate).getTime() > new Date(payData.payDeadline).getTime()) {
      g_msgAlert('请选择正确的结款日期');
      return;
    }
    //华东定制
    if ($.cookie('company_id') == 30334) {
      // if($.cookie('company_id')==30334||$.cookie('company_id')==3019||$.cookie('company_id')==3702){

      formOpt.data.payType = $('#method_info').val();
      formOpt.data.payDeadline = $('#end_date').val();
    } else {
      formOpt.data.payType = payData.payType;
      formOpt.data.payDeadline = payData.payDeadline;
    }
    if (Math.floor(Number(payData.depositPrice + payData.receivablePrice)) !== Math.floor(Number(totalCache))) {
      g_msgAlert('请选择正确的首款');
      return;
    }

    formOpt.data.depositPrice = payData.depositPrice;
    formOpt.data.receivablePrice = payData.receivablePrice;
    //console.log(formOpt.data) //接入库存
    sendAjax(formOpt, formCb);
  });
}

// 设置单位 数量
function changeUnit() {

  var $selectedSamples = $('#selectedSamples');

  //修改下拉列表的内容
  $selectedSamples.on('click', '#offer_samples_Number_rmb', function (e) {
    $selectedSamples.find('.rmb').text($(e.target).text());
    makeBigTotal();
  });

  $selectedSamples.on('click', '#offer_samples_Number', function (e) {

    var _this = $(this);

    $(e.target).parents('tr').find('.nuit').text($(e.target).text());

    if (Number(isEnablingMeasurementUnits)) {

      //触发 
      _this.parents('tr').find('.check-count').trigger('input');
    }

    makeBigTotal();
  });

  //批量设置单位
  $('.exp_change').on('click', function (event) {
    $selectedSamples.find('.rmb').text($('#setting_currency option:selected').text());
    $selectedSamples.find('.rmb_nuit').text($('#setting_type option:selected').text());
    $selectedSamples.find('.nuit').text($('#setting_type option:selected').text());
    makeBigTotal();
  });
}

//价格统计
function makeMoney() {

  var tbody = $('#selectedSamples');
  // .check-price .check-conut .check-other .check-total
  // 价格输入
  tbody.on('input', '.check-price, .check-count, .check-other', function () {
    var input = $(this);
    var tr = input.parents('tr');

    input.val(correctNumberInputAccurate(input.val()));

    //开启计量单位 需要更新数量
    if (Number(isEnablingMeasurementUnits) && Number(input.attr('data-change'))) {

      var _data_unit = tr.data('unit');

      var _nuit = tr.find('.nuit').text().trim();

      var _pdiv = input.parent('div');

      var _ratio = '';

      for (var key in _data_unit) {

        var element = _data_unit[key];

        if (element === _nuit && key != 'accUnit') {

          _ratio = _data_unit[key + 'Ratio'];
        }
      }

      _ratio ? _pdiv.attr('aria-label', '换算成核算数量：' + correctNumberInput(Number($(this).val()) * Number(_ratio)) + ' ' + _data_unit.accUnit) : _pdiv.attr('aria-label', '');
    }

    var price = correctNumberInputAccurate(tr.find('.check-price').val());
    var count = correctNumberInput(tr.find('.check-count').val());
    var other = correctNumberInput(tr.find('.check-other').val());
    var getTaxRate = correctNumberInput(tr.find('.check-taxRate').val());
    // var getexchange = correctNumberInput(tr.find('.check-exchange').val());
    if (currencyName != '人民币') {
      if ($('#tax_type').val() == 0) {
        tr.find('.check-total').val(correctNumberInput(price * count + other));
        tr.find('.check-foreign-currency').val(correctNumberInput((price * count + other) * rate));
        tr.find('.check-notax').val(correctNumberInput((price * count + other) * rate));
        tr.find('.check-taxPrice').val(0);
      } else if ($('#tax_type').val() == 1) {
        tr.find('.check-total').val(correctNumberInput(price * count + other));
        var totalprice = (price * count + other) * rate;
        tr.find('.check-foreign-currency').val(correctNumberInput(totalprice));
        tr.find('.check-notax').val(correctNumberInput(totalprice / (1 + taxRate / 100)));
        tr.find('.check-taxPrice').val(correctNumberInput(totalprice - totalprice / (1 + taxRate / 100)));
      } else {
        var total = (price * count + other) * (1 + taxRate / 100);
        tr.find('.check-foreign-currency').val(correctNumberInput(total * rate));
        tr.find('.check-total').val(correctNumberInput(total));
        tr.find('.check-notax').val(correctNumberInput(total * rate / (1 + taxRate / 100)));
        tr.find('.check-taxPrice').val(correctNumberInput(total * rate - total * rate / (1 + taxRate / 100)));
      }
    } else {
      if ($('#tax_type').val() == 0) {
        tr.find('.check-total').val(correctNumberInput(price * count + other));
        tr.find('.check-notax').val(correctNumberInput(price * count + other));
        tr.find('.check-taxPrice').val(0);
      } else if ($('#tax_type').val() == 1) {
        tr.find('.check-total').val(correctNumberInput(price * count + other));
        tr.find('.check-notax').val(correctNumberInput((price * count + other) / (1 + taxRate / 100)));
        tr.find('.check-taxPrice').val(correctNumberInput(price * count + other - (price * count + other) / (1 + taxRate / 100)));
      } else {
        tr.find('.check-total').val(correctNumberInput(price * count + other + (price * count + other) * taxRate / 100));
        tr.find('.check-notax').val(correctNumberInput(price * count + other));
        tr.find('.check-taxPrice').val(correctNumberInput((price * count + other) * taxRate / 100));
      }
    }
    makeBigTotal();
  });

  tbody.on('blur', '.check-price, .check-count, .check-other', function () {
    var input = $(this);
    input.val(correctNumberInputAccurate(input.val()));
    makeBigTotal();
  });
}

// 缓存总金额， 用来防止非正常输入
var totalCache = 0;

// 合计
function makeBigTotal() {
  var TOTAL = {
    count: [],
    other: [],
    total: [],
    outMoney: [],
    notax: [],
    taxPrice: []
  };

  var bigOrder = $('input[type="radio"]:last');
  var bigLabel = bigOrder.parent('label');
  // .check-coin  .check-unit
  $('#selectedSamples').find('tr[id]').each(function () {
    var tr = $(this);
    // var coin = tr.find('.check-coin').text().trim()
    if (currencyName == '人民币') {
      var coin = '元';
    } else {
      var coin = currencyName;
    }
    var unit = tr.find('.check-unit').text().trim();

    var count = correctNumberInput(tr.find('.check-count').val());
    var other = correctNumberInput(tr.find('.check-other').val());
    var total = correctNumberInput(tr.find('.check-total').val());
    var outMoney = correctNumberInput(tr.find('.check-foreign-currency').val());
    var notax = correctNumberInput(tr.find('.check-notax').val());
    var taxPrice = correctNumberInput(tr.find('.check-taxPrice').val());

    addNum(TOTAL, 'count', count, unit);

    addNum(TOTAL, 'other', other, coin);

    addNum(TOTAL, 'total', total, coin);
    addNum(TOTAL, 'outMoney', outMoney, '元');
    addNum(TOTAL, 'notax', notax, '元');
    addNum(TOTAL, 'taxPrice', taxPrice, '元');

    if (count >= 30 && !bigLabel.hasClass('active')) {
      bigOrder.prop('checked', true);
      bigLabel.addClass('active').siblings('label').removeClass('active');
    }
  });

  $('#total_count').html(TOTAL.count.join(' / '));
  $('#total_other').html(TOTAL.other.join(' / '));
  $('#total_big').html(TOTAL.total.join(' / '));
  $('#total_outmoney').html(TOTAL.outMoney.join(' / '));
  $('#total_notax').html(TOTAL.notax.join(' / '));
  $('#total_taxPrice').html(TOTAL.taxPrice.join(' / '));

  moneyPay.changeTotal(parseFloat(TOTAL.total.join(' / ')));
  totalCache = parseFloat(TOTAL.total.join(' / '));
}

//计量单位处理 
function initUnitEvent(company_id) {

  var unitMaker = new UnitMaker(company_id, 0); // 区分新增  还是 编辑 1新增 0编辑

  var btn = $('#selectedSamples');

  // open init   variable-unit-to-auxiliary   确定后单位将变成辅助单位
  btn.on('click', '.set-unit-of-measurement', function () {

    var _this = $(this).parents('tr');

    var _sample_id = _this.attr('data-id');

    var _this_unit = _this.data('unit');

    unitMaker.open({
      htmlThis: _this,
      dataUnit: _this_unit,
      sampleId: _sample_id
    }, function (_data_nuit_list) {

      //???? 做扣减 +未开启计量单位的 = 设置后自动启用计量单位

      Number(isEnablingInventoryDeduction) && !Number(isEnablingMeasurementUnits) && (isEnablingMeasurementUnits = 1);

      //更新单位列表

      if (_data_nuit_list) {

        _this.find('.nuit').text(_data_nuit_list.accUnit);

        var _html_unit = '';

        _html_unit += '<li><a id="offer_samples_Number" >' + _data_nuit_list.accUnit + '</a></li>';

        _html_unit += _data_nuit_list.subUnit1 ? '<li><a id="offer_samples_Number">' + _data_nuit_list.subUnit1 + '</a></li>' : '';

        _html_unit += _data_nuit_list.subUnit2 ? '<li><a id="offer_samples_Number">' + _data_nuit_list.subUnit2 + '</a></li>' : '';

        _html_unit += _data_nuit_list.subUnit3 ? '<li><a id="offer_samples_Number">' + _data_nuit_list.subUnit3 + '</a></li>' : '';

        _this.find('.measurement-units').html(_html_unit);
      }
    });
  });
}

function chooseSearchInit(company_id) {

  $('body .choose-search-plugin-contract').initChooseSearch({
    listUrl: '/api/contract',
    listBox: '.choose-search-plugin-contract',
    fastCreate: 0,
    searchField: 'orderNo',
    dataAssignment: ['contracts', 'orderNo', 'id'],
    moreData: {
      companyId: company_id
    },
    callback: function callback(_this, data) {

      $('#contract_id').val(data.id);

      $('#contract_num').val(data.orderNo);
    }
  });
}