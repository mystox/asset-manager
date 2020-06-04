'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

  authCheckAndAutoShow();
});
//暴露一个控制图片与备注的编辑
window.EDIT_AUTH = false;
window.REGISTER_DELETE = false;
window.REGISTER_PRINT = false;
/**
 *   registerAddUpdate: 'sample_register_update', //来样新增/修改
        registerDelete: 'sample_register_delete', //来样删除
        registerPrint: 'sample_register_print', //来样打印
 */
//主线程 权限控制
function authCheckAndAutoShow() {
  var _g_canIUse;

  g_canIUse((_g_canIUse = {}, _defineProperty(_g_canIUse, AUTH.SAMPLE.addUpdate, { //增改
    HTMLDom: '.auth_add_sample,.auth_edit_sample'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.print, { //打印
    HTMLDom: '.auth_print'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.share, { //分享
    HTMLDom: '.auth_share'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.del, { //删除
    HTMLDom: '.auth_del'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.registerAddUpdate, { ////来样新增/修改
    HTMLDom: ''
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.registerDelete, { ////来样新增/修改
    HTMLDom: ''
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.registerPrint, { ////来样新增/修改
    HTMLDom: ''
  }), _defineProperty(_g_canIUse, AUTH.COMPANY.lookScreat, {//能否查看敏感信息

  }), _defineProperty(_g_canIUse, AUTH.BIZOPP.view, {
    HTMLDom: '#paneRecord,#panel_record_box'
  }), _g_canIUse), function (data) {

    //华海实业 --独占 成本核算按钮控制

    var companyId = $.cookie('company_id');
    var _go_cost_account = $('#go_cost_account');

    var _huahaiTesting = huahaiTesting($.cookie('company_id'));
    //htmldom隐藏
    Object.keys(data).forEach(function (item) {

      if (data[item].HTMLDom === '#paneRecord,#panel_record_box' && _huahaiTesting) {

        data[item].can = 0;
      }

      if (data[item].can === 1) {

        data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');

        if (item === AUTH.SAMPLE.addUpdate) {
          window.EDIT_AUTH = true;
        }

        if (item === AUTH.SAMPLE.registerDelete) {
          window.REGISTER_DELETE = true;
        }

        if (item === AUTH.SAMPLE.registerPrint) {
          window.REGISTER_PRINT = true;
        }

        if (item === AUTH.SAMPLE.registerAddUpdate) {

          $('#samplesRegistration').removeClass('display-none');
        }
      } else {
        data[item].HTMLDom && $(data[item].HTMLDom).remove();
      }
    });

    if (huahaiTesting(companyId)) {

      _go_cost_account.removeClass('display-none');
    } else {
      _go_cost_account.remove();
    }

    //样式处理
    [AUTH.SAMPLE.print, AUTH.SAMPLE.share, AUTH.SAMPLE.del].some(function (item) {

      if (data[item].can === 1) {
        $(data[item].HTMLDom).parent('.large_edit_box').removeClass('display-none');
        return true;
      }
    });

    //敏感信息不能查看时
    if (data[AUTH.COMPANY.lookScreat].can !== 1) {

      $('.auth_screat_img').remove();
    } else {
      $('.auth_screat_img').removeClass('display-none');
    }

    // OldBadJs(companyId);
    OldBadJs(1);
  });
}

//页面老旧代码
function OldBadJs(companyId) {

  getSampleInfo();
  getAllRemarks();
  getAllRemarks2(1);

  mes_check();
  getViewCheck();
  manager_check();
  getSampleHostory();

  ifReload();
  dragSort();

  getPayInfo();

  laydate({
    elem: '#register_date',
    format: 'YYYY-MM-DD',
    festival: true
  });

  //这是我自己写 上面下面我都不知道什么意思
  // initBegin();

  [3019, 32961].includes(Number(companyId)) && $('#addinsideRemarkNew').text('保存成本备注');

  function getViewCheck() {
    if ($(document).width() < 767) {
      $('.panel').css('display', 'block');
    } else {
      $('.panel').css('display', 'none');
      var target = '.' + $('.nav_tabs .active').attr('id');
      $(target).css('display', 'block');
    }
  }

  function ifReload() {

    if ($.cookie('ifreload') == 1) {

      if ($(document).width() > 767) {
        $('.panel1').css('display', 'none');
        $('.panel2').css('display', 'none');
        $('.panel3').css('display', 'none');
        $('.paneALL').css('display', 'none');
        $('.panel4').css('display', 'block');
        $('.panel5').css('display', 'none');
        $('#panel_price_box').hide();
        $('#panel_send_box').hide();

        $('#panel1').removeClass('active');
        $('#panel2').removeClass('active');
        $('#panel3').removeClass('active');
        $('#paneALL').removeClass('active');
        $('#panel4').addClass('active');
        $('#panel5').removeClass('active');
        $('#panePrice').removeClass('active');
        $('#paneSend').removeClass('active');
      }

      $.cookie('ifreload', 0);
    }
  }

  $(window).resize(function () {
    getViewCheck();
  });

  $('body').on('click', '.info_pic', function (e) {
    $('#theImageUrl').attr('src', '/images/loading.gif');
    var theImageUrl = $(e.target).attr('src').split('?x-oss').shift();
    $('#theBigImageContainer').fadeIn(400);
    $('#theBigImageBackground').fadeIn(400);
    $('#theImageUrl').attr('src', theImageUrl);
    $('#theImageUrl').css('height', 'auto');
    $('#theImageUrl').css('width', 'auto');
  });
  $('#theBigImageContainer').on('click', function () {
    $('#theBigImageContainer').fadeOut(200);
    $('#theBigImageBackground').fadeOut(200);
    $('#theImageUrl').attr('src', '');
  });
  $('#slidePublic').on('click', function () {
    if ($('#slidePublic').hasClass('hidePublic')) {
      if ($('#publicgallery li:eq(0)').attr('data-src') == '') {
        $('.public_text').slideUp();
      } else {
        $('#publicgallery').slideUp();
      }

      $('#slidePublic').html('展开<img src=\'/images/slidedown.png\'>');
      $('#slidePublic').removeClass('hidePublic');
      $('#slidePublic').addClass('showPublic');
    } else if ($('#slidePublic').hasClass('showPublic')) {
      if ($('#publicgallery li:eq(0)').attr('data-src') == '') {
        $('.public_text').slideDown();
        $('.public_text').removeClass('none_pic');
      } else {
        $('#publicgallery').slideDown();
      }
      $('#slidePublic').html('收起<img src=\'/images/slideup.png\'>');
      $('#slidePublic').removeClass('showPublic');
      $('#slidePublic').addClass('hidePublic');
    }
  });
  $('#slideInner').on('click', function () {
    if ($('#slideInner').hasClass('hideInner')) {
      if ($('#innergallery li:eq(0)').attr('data-src') == '') {
        $('.inner_text').slideUp();
      } else {
        $('#innergallery').slideUp();
      }

      $('#slideInner').html('展开<img src=\'/images/slidedown.png\'>');
      $('#slideInner').removeClass('hideInner');
      $('#slideInner').addClass('showInner');
    } else if ($('#slideInner').hasClass('showInner')) {
      if ($('#innergallery li:eq(0)').attr('data-src') == '') {
        $('.inner_text').slideDown();
        $('.inner_text').removeClass('none_pic');
      } else {
        $('#innergallery').slideDown();
      }
      $('#innergallery').slideDown();
      $('#slideInner').html('收起<img src=\'/images/slideup.png\'>');
      $('#slideInner').removeClass('showInner');
      $('#slideInner').addClass('hideInner');
    }
  });
  $('#slidePrivate').on('click', function () {
    if ($('#slidePrivate').hasClass('hidePrivate')) {
      // console.log("hide");
      if ($('#privategallery li:eq(0)').attr('data-src') == '') {
        $('.private_text').slideUp();
      } else {
        $('#privategallery').slideUp();
      }
      $('#slidePrivate').html('展开<img src=\'/images/slidedown.png\'>');
      $('#slidePrivate').removeClass('hidePrivate');
      $('#slidePrivate').addClass('showPrivate');
    } else if ($('#slidePrivate').hasClass('showPrivate')) {
      // console.log("show");

      if ($('#privategallery li:eq(0)').attr('data-src') == '') {
        $('.private_text').slideDown();
        $('.private_text').removeClass('none_pic');
      } else {
        $('#privategallery').slideDown();
      }
      $('#slidePrivate').html('收起<img src=\'/images/slideup.png\'>');
      $('#slidePrivate').removeClass('showPrivate');
      $('#slidePrivate').addClass('hidePrivate');
    }
  });

  $('#addPublicRemarkNew').on('click', function () {

    if (isPhone) {

      var publicRemarkInputNew = $('#publicRemarkInputNew').val().trim();
      var reg = new RegExp('\r\n', 'g');
      if (publicRemarkInputNew.length < 1) {
        $('#publicRemarkInputNew').focus();
        return;
      }
      if (publicRemarkInputNew.length > 400) {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒',
          content: '请输入小于400位字符长度的备注',
          buttons: {
            confirm: {
              text: '确定'
            }
          }
        });
        return;
      }

      beginLoading();
      $('#addPublicRemark').attr('disabled', 'false');
      $.ajax({
        type: 'post',
        url: '/api/samples/' + $.cookie('sample_id') + '/remarks',
        dataType: 'json',
        data: JSON.stringify({
          isOpen: 1,
          content: publicRemarkInputNew
        }),
        beforeSend: function beforeSend(request) {
          request.setRequestHeader('Content-Type', 'application/json');
          request.setRequestHeader('authorization', $.cookie('authorization'));
          if (!$.cookie('authorization')) {
            request.abort();
          }
        },
        success: function success(response) {
          if (response.code == 200) {
            // console.log(response);
            $('#publicRemarkInputNew').val('');
            getAllRemarks2(1);
          } else {
            //console.log('getPublicRemarks Err');
            $.alert({
              animation: 'bottom',
              closeAnimation: 'scale',
              title: '提醒',
              content: response.message,
              buttons: {
                confirm: {
                  text: '确定'
                }
              }
            });
          }
          $('#addPublicRemark').attr('disabled', 'true');
          endLoading();
        },
        error: function error() {
          //console.log('链接服务器失败，请联系系统管理员！');
          endLoading();
        }
      });
    } else {
      location.href = '../modelweix.html';
      // location.href = "../weixinX.html";
    }
  });

  $('#addprivateRemarkNew').on('click', function () {

    if (isPhone) {

      if ($('#publicRemarkInputNew').val().trim().length < 1) {
        $('#publicRemarkInputNew').focus();
        return;
      }
      if ($('#publicRemarkInputNew').val().trim().length > 400) {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒',
          content: '请输入小于400位字符长度的备注',
          buttons: {
            confirm: {
              text: '确定'
            }
          }
        });
        return;
      }
      beginLoading();
      $('#addPublicRemark').attr('disabled', 'false');
      $.ajax({
        type: 'post',
        url: '/api/samples/' + $.cookie('sample_id') + '/remarks',
        dataType: 'json',
        data: JSON.stringify({
          isOpen: 0,
          content: $('#publicRemarkInputNew').val().trim()
        }),
        beforeSend: function beforeSend(request) {
          request.setRequestHeader('Content-Type', 'application/json');
          request.setRequestHeader('authorization', $.cookie('authorization'));
          if (!$.cookie('authorization')) {
            request.abort();
          }
        },
        success: function success(response) {
          if (response.code == 200) {
            // console.log(response);
            $('#publicRemarkInputNew').val('');
            getAllRemarks2(1);
          } else {
            //console.log('getPublicRemarks Err');
            $.alert({
              animation: 'bottom',
              closeAnimation: 'scale',
              title: '提醒',
              content: response.message,
              buttons: {
                confirm: {
                  text: '确定'
                }
              }
            });
          }
          $('#addPublicRemark').attr('disabled', 'true');
          endLoading();
        },
        error: function error() {
          //console.log('链接服务器失败，请联系系统管理员！');
          endLoading();
        }
      });
    } else {
      location.href = '../modelweix.html';
      // location.href = "../weixinX.html";
    }
  });

  //保存内部信息

  $('#addinsideRemarkNew').on('click', function () {

    var _this = $(this),
        _publicRemarkInputNew = $('#publicRemarkInputNew');

    if (isPhone) {

      if (_publicRemarkInputNew.val().trim().length < 1) {
        _publicRemarkInputNew.focus();
        return;
      }
      if (_publicRemarkInputNew.val().trim().length > 400) {
        $.alert({
          animation: 'bottom',
          closeAnimation: 'scale',
          title: '提醒',
          content: '请输入小于400位字符长度的备注',
          buttons: {
            confirm: {
              text: '确定'
            }
          }
        });
        return;
      }
      beginLoading();

      $('#addPublicRemark').attr('disabled', 'false');

      var _list_options = {

        url: '/api/samples/' + $.cookie('sample_id') + '/remarks',
        type: 'POST',
        data: {
          isOpen: 2,
          content: _publicRemarkInputNew.val().trim()
        }
      };

      var _list_cb = g_return200CbObj(function (data) {

        _publicRemarkInputNew.val('');

        getAllRemarks2(1);

        $('#addPublicRemark').attr('disabled', 'true');
      });

      sendAjax(_list_options, _list_cb);
    } else {
      location.href = '../modelweix.html';
    }
  });
  $('#cancelRemark').on('click', function () {

    $('#publicRemarkInputNew').val('');
  });

  //加入样品蓝
  $('#add_sample_basket').on('click', function (event) {
    var list_options = {
      url: '/api/samples/selects',
      type: 'post',
      data: {
        companyId: $.cookie('company_id'),
        sampleIds: $.cookie('sample_id')
      }
    };
    //调用ajax
    var list_callback = g_return200CbObj(function (data) {
      // console.log(data.num);
      $('.navselectnum').text(data.num);
      $('.navselectnum').show();
    });

    sendAjax(list_options, list_callback);
  });
  $('#add_sample_basket').hover(function () {
    $('#add_sample_basket img').attr('src', '/images/add_sample_basket_blue.png');
  }, function () {
    $('#add_sample_basket img').attr('src', '/images/add_sample_basket_black.png');
  });

  //去成本核算页面   -------华海定制  独占

  $('#go_cost_account').on('click', function (event) {

    var _this = $(this);

    var _data_itemNo = _this.attr('data-itemNo');

    _data_itemNo && $.cookie('huahai_item_no', _data_itemNo, {
      path: '/'
    });

    location.href = '../sample/cost_account.html';
  });
}

//两个记录主要执行
function initBegin() {

  //将该页面对应的联系人id 公司id存起了，确保进入详情对cookie篡改影响为0;
  var G_key_page = $.cookie('sample_id');
  var G_id_company = $.cookie('company_id');

  if (!G_key_page || !G_id_company) {
    g_msgAlert('获取样品信息出现错误,请重新选择!', function () {
      return;
    });
  }

  judge_click(G_key_page, G_id_company);

  //tag切换对应的控制
  controlTagView(G_key_page, G_id_company);

  //报价、寄样记录
  controlRecordView();

  // 颜色处理
  initColorEvent(G_key_page, G_id_company);
}

//事件
function judge_click(sample_id, company_id) {

  var _body = $('body');

  //设置默认模板
  _body.on('click', '.select-remark', function () {

    var _this = $(this);

    var _isOpen = _this.attr('data-isopen');

    sessionStorage.setItem('sample-remark-isopen', _isOpen);

    getAllRemarks2(1, '', _isOpen);
  });
}

//控制额外tag显示
function controlTagView(sample_id, company_id) {

  //样品记录
  var _flag_first_load_price = true;
  var _flag_first_load_send = true;

  var _flag_first_load_registration = true;

  var _flag_first_load_stock = true;
  var _flag_first_load_sample_stock = true;

  //来样登记
  $('#samplesRegistration').on('click', function () {

    var _this = $(this);

    if (_this.hasClass('active')) {
      return;
    }

    $('.nav_tab').removeClass('active');
    _this.addClass('active');

    $('.panel').hide();
    $('#panel_registration_box').show();

    if (_flag_first_load_registration) {

      samplesRegistrationInit({
        data: {
          itemId: sample_id,
          companyId: company_id
        },
        callback: function callback() {

          _flag_first_load_registration = false;
        }
      });
    }
  });

  $('#paneRecord').on('click', function () {

    var _this = $(this);

    if (_this.hasClass('active') && !_flag_first_load_price && !_flag_first_load_send) {
      return;
    }

    $('.nav_tab').removeClass('active');
    $(this).addClass('active');

    $('.panel').hide();
    $('#panel_record_box').show();

    if (_flag_first_load_price) {

      $('#panel_price_title').trigger('click');

      initPlaneList({
        key: '#panel_price',
        data: {
          sampleId: sample_id,
          companyId: company_id
        },
        listUrl: '/api/contact/quote/record',
        infoLink: '/business/print_Detailed_offer.html',
        cookieLinkman: 'quote_record_linkman_id',
        cookieRecord: 'quote_record_id',
        callback: function callback() {
          _flag_first_load_price = false;
        }
      });
    }

    if (_flag_first_load_send) {

      initPlaneList({
        key: '#panel_send',
        data: {
          sampleId: sample_id,
          companyId: company_id
        },
        listUrl: '/api/contact/send/record',
        infoLink: '/business/print_Detailed_send.html',
        cookieLinkman: 'send_record_linkman_id',
        cookieRecord: 'send_record_id',
        callback: function callback() {
          _flag_first_load_send = false;
        }
      });
    }
  });

  //库存
  $('#paneStock').on('click', function () {
    var _this = $(this);

    if (_this.hasClass('active')) {
      return;
    }

    $('.nav_tab').removeClass('active');
    _this.addClass('active');

    $('.panel').hide();
    $('#panel_stock_box').show();

    if (_flag_first_load_stock) {
      // console.log('库存')
      initPlaneList({
        key: '#panel_stock_list',
        value: 'dataResult',
        data: {
          itemId: sample_id,
          companyId: company_id,
          qLevel: 'color'
        },
        listUrl: '/api/storequery/qList',
        callback: function callback() {
          _flag_first_load_stock = false;
        }
      });
    }
  });
  //样品库存
  $('#sampleStock').on('click', function () {
    var _this = $(this);
    if (_this.hasClass('active')) {
      return;
    }
    $('.nav_tab').removeClass('active');
    _this.addClass('active');

    $('.panel').hide();
    $('#panel_sample_stock_box').show();
    if (_flag_first_load_sample_stock) {
      initPlaneList({
        key: '#panel_sample_stock_list',
        value: 'items',
        data: {
          sampleId: sample_id,
          companyId: company_id
        },
        listUrl: '/api/samples/store',
        callback: function callback() {
          _flag_first_load_sample_stock = false;
        }
      });
    }
  });
}

//控制寄样、报价记录
function controlRecordView() {

  $('#panel_price_title').on('click', function () {

    var _this = $(this);

    if (_this.hasClass('active')) {
      return;
    }

    $('#panel_send_title').removeClass('active');
    _this.addClass('active');

    $('#panel_send_box').hide();
    $('#panel_price_box').show();
  });

  $('#panel_send_title').on('click', function () {

    var _this = $(this);

    if (_this.hasClass('active')) {
      return;
    }

    $('#panel_price_title').removeClass('active');
    _this.addClass('active');

    $('#panel_price_box').hide();
    $('#panel_send_box').show();
  });
}
//初始化一个列表plane
//options:{
//  key:string,
//  listUrl:string,
//  delUrl:string,
//  delKey:string,
//  infoLink：string
//  callback:function
//}

function initPlaneList(options) {
  console.log(options.key);
  var delKey = options.delKey || 'recordId';
  var _panel = $(options.key + '_box');
  var _count = $(options.key + '_title').find('i');

  var _tpl_fn = Handlebars.compile($(options.key + '_tpl').html());

  var _table = _panel.children('.row');
  var _noFind = _panel.children('.noth-search-div');

  var _tbody = _table.find('tbody');
  var _pages = _table.find('.panel-page');

  var _data = $.extend({
    pageNo: 1,
    pageSize: 10
  }, options.data);

  var list_opts = {
    url: options.listUrl,
    type: 'GET',
    data: _data
  };

  var list_cb = g_return200CbObj(function (data) {

    var _html = '';

    options.callback();

    if (options.value == 'dataResult') {

      data.dataResult.forEach(function (item) {
        _html += _tpl_fn(item);
      });
    } else if (options.value == 'items') {
      data.items.forEach(function (item) {

        item.unit = ['米', '份', '公斤', '件', '份'][item.type];

        if (item.type == 0) {
          item.type = '米样';
        }
        if (item.type == 1) {
          item.type = '挂卡';
        }
        if (item.type == 2) {
          item.type = '公斤样';
        }
        if (item.type == 3) {
          item.type = '样衣';
        }
        if (item.type == 4) {
          item.type = 'A4样';
        }

        _html += _tpl_fn(item);
      });
    } else {
      data.records.forEach(function (item) {

        var sampleObj;
        item.recordDetail.some(function (sample, i) {

          if (sample.sampleId == options.data.sampleId) {
            sampleObj = sample;
            return true;
          }
        });

        item.recordDetail = [];

        if ((typeof sampleObj === 'undefined' ? 'undefined' : _typeof(sampleObj)) === 'object') {

          item.recordDetail.push(sampleObj);
        }

        _html += _tpl_fn(item);
      });
    }

    _tbody.html(_html);

    if (Number(data.recordCount) > 0) {
      _table.show();
      _noFind.hide();
    } else {
      _table.hide();
      _noFind.show();
    }

    _count.text(data.recordCount);

    //控制分页布局
    change_page(data.pageNo, data.pageCount, data.recordCount);
  });

  /*上绑*/

  //默认进入加载
  sendAjax(list_opts, list_cb);

  //分页时间绑定
  var change_page = _pages.pageInit({

    callback: function callback(pageNum) {
      // console.log(pageNum);
      list_opts.data.pageNo = pageNum;

      sendAjax(list_opts, list_cb);
    }
  });

  //查看详情
  _tbody.on('click', '.goSampleInfo', function () {

    var _tr = $(this).parents('tr');

    var _id = _tr.attr('data-record');

    var _linkman = _tr.attr('data-linkman');

    $.cookie(options.cookieLinkman, _linkman, {
      path: '/'
    });

    $.cookie(options.cookieRecord, JSON.stringify({
      quote_record_id: _id
    }), {
      path: '/'
    });

    $.cookie('business_classification', 4, {
      path: '/'
    });

    window.open(options.infoLink);
  });
}

//颜色处理
function initColorEvent(sample_id, company_id) {

  var panle = $('#panel_color_box');
  var btn = $('#color_manager_btn');
  var tpl = Handlebars.compile($('#panel_color_tpl').html());
  var isUpdate = false;

  Handlebars.registerHelper('isColorValue', function (value, options) {
    if (value && value.length < 20) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  $('#panelColor').on('click', function () {
    $('.nav_tab').removeClass('active');
    $(this).addClass('active');

    $('.panel').hide();
    panle.show();

    if (!panle.attr('data-load')) {
      loadColor();
    }
  });

  var colorMaker = new ColorMaker(1);
  // var colorMaker = new ColorMaker(company_id);

  // add
  btn.on('click', function () {

    colorMaker.open({
      sampleId: sample_id,
      name: '', mark: '', remark: ''
    }, function (color) {
      console.log(color);
      btn.before(tpl(color));
    });
  });

  // remove
  panle.on('click', '.btn-danger', function () {
    var color = $(this).parents('.sample-color-item');

    g_confirmAlert('确定要移除该颜色吗？', function () {
      var delOpt = {
        url: '/api/samples/color/' + color.attr('data-id'),
        type: 'DELETE'
      };

      var delCb = g_return200CbObj(function (data) {
        color.remove();
      });

      sendAjax(delOpt, delCb);
    });
  });

  // edit
  panle.on('click', '.btn-primary', function () {
    var color = $(this).parents('.sample-color-item');

    colorMaker.open({
      id: color.attr('data-id'),
      name: color.attr('data-name'),
      mark: color.attr('data-mark'),
      remark: color.attr('data-remark'),
      pic: color.attr('data-pic')
    }, function (colorData) {
      // console.log(colorData)
      color.before(tpl(colorData));
      color.remove();
    });
  });

  function loadColor() {

    var listOpt = {
      url: '/api/samples/' + sample_id + '/color',
      type: 'GET'
    };

    var listCb = g_return200CbObj(function (data) {
      var html = '';
      data.colors.forEach(function (item) {
        html += tpl(item);
      });
      panle.attr('data-load', 1);
      panle.prepend(html);
    });

    sendAjax(listOpt, listCb);
  }

  //2019.04.19确认无效
  function updateColor(ids, callback) {
    if (isUpdate) {
      return;
    }

    var updateOpt = {
      url: '/api/samples/' + sample_id + '/color',
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