'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

  authCheckAndAutoShow();
});

//声明一个window.AUTHDATA 对象

window.AUTHDATA = [];

//主线程 权限控制
function authCheckAndAutoShow() {
    var _g_canIUse;

    g_canIUse((_g_canIUse = {}, _defineProperty(_g_canIUse, AUTH.COMPANY.total, {
        HTMLDom: '#auth_manage'
    }), _defineProperty(_g_canIUse, AUTH.COMPANY.pay, { //支付
    HTMLDom: '#auth_pay'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.total, {
    HTMLDom: ''
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.addUpdate, { //增改
    HTMLDom: '#auth_add_sample,.goNewSample',
    ajaxDom: '.auth_add_sample,.auth_edit_sample'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.recycle, { //回收站
    HTMLDom: '#auth_recycle'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.output, { //导出
    HTMLDom: '#auth_output'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.print, { //打印
    ajaxDom: '.auth_print'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.share, { //分享
    ajaxDom: '.auth_share'
  }), _defineProperty(_g_canIUse, AUTH.SAMPLE.del, {
    ajaxDom: '.auth_del'
  }), _g_canIUse), function (data) {

    Object.keys(data).forEach(function (item) {

      if (data[item].can === 0) {

        data[item].HTMLDom && $(data[item].HTMLDom).remove();
      } else {

        data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
      }
    });

    //ajax回调用数据处理
    AUTHDATA = [data[AUTH.SAMPLE.addUpdate], data[AUTH.SAMPLE.print], data[AUTH.SAMPLE.share], data[AUTH.SAMPLE.del]];

    // if(Number(data[AUTH.SAMPLE.total].can)){   //样品总权限

    OldBadJs(Number(data[AUTH.SAMPLE.total].can)); //样品总权限

    //  }

  });
}

//控制ajax回调的按钮
function authControlAjaxBtn(data) {

  var count = 0;
  var flag = false;

  data.forEach(function (item) {

    if (item.can === 1) {

      count = count + 1;
      item.ajaxDom && $(item.ajaxDom).removeClass('display-none');

      //判断两个图组合
      if (!flag && '.auth_share .auth_del'.indexOf(item.ajaxDom) > -1) {

        $(item.ajaxDom).parents('.dropdown').removeClass('display-none');

        flag = true;
      }
    } else {
      item.ajaxDom && $(item.ajaxDom).remove();
    }
  });

  if (count === 0) {

    $('.edit_box').remove();
  } else {
    $('.edit_box').removeClass('display-none');
  }
}
//页面老旧代码
function OldBadJs(sampleCan) {

    if (!Number(sampleCan)) {

    //监测用户信息
    manager_check();

    return;
    }

    if ($.cookie('isSample') == 1 && isPhone) {
        try {
            introJs().setOptions({
                'nextLabel': '下一步&rarr;',
                'prevLabel': '&larr;上一步',
                'skipLabel': '跳过',
                'doneLabel': '我知道啦！'
            }).start().oncomplete(function () {
                $.cookie('isSample', 0, {
                    path: '/'
                });
            });
        } catch (err) {
        }
    }

    $.cookie('weightMin', '');
    $.cookie('weightMax', '');
    $.cookie('widthMin', '');
    $.cookie('widthMax', '');
    $.cookie('haveRice', '');
    $.cookie('havePics', '');
    $.cookie('isPublished', '');

    var sortitemNo = 0;
    $.cookie('sortitemNo', sortitemNo);

    //购物篮数量
    //navSelectNum();


    //屏幕分辨率
    ScreenResolution();

    //动态配置可搜索项
    getSearchItem();

    //监测用户信息
    manager_check();

    //点击事件
    judgeClick();

    //showSampleList(1);
    mes_check();

    $('.notCheckAll').off().on('click', function () {
        clearChecked();
    });

    $('.goPrint').off().on('click', function () {
        location.href = '/sampleBasket/print_samples.html';
    });

    $('.goShare').off().on('click', function () {
        location.href = '/sampleBasket/share_samples.html';
    });

    $('.goAddSample').off().on('click', function () {

        if (isPhone) {

            location.href = '/sample/add_sample.html';
        } else {
            location.href = '../modelweix.html';
            // location.href = "../weixinX.html";
        }
    });
    $('.goNewSample').off().on('click', function () {
        if (isPhone) {

            location.href = '/sample/add_sample.html';
        } else {
            location.href = '../modelweix.html';
            // location.href = "../weixinX.html";
        }
    });
    $('.goRecycleBin').off().on('click', function () {
        location.href = '/sample/recycle_samples.html';
    });

    $('.goToManage').off().on('click', function () {
        $.cookie('company_page', '1', {
            path: '/'
        });
        location.href = '/my/company.html';
    });

    $('.goToPay').off().on('click', function () {
        $.cookie('company_page', '3', {
            path: '/'
        });
        location.href = '/my/company.html';
    });

    $('#labelSelects').on('click', '.sampleListSearchType', function (e) {
        APP.sampleListSearchType = $(e.target).attr('value');

        $('#sampleListSearchType').text($(e.target).text());
        clearTimeout(clk);
        var clk = setTimeout(function () {
            var key = $('#keySearch').val();
            $.cookie('search_key', key, {
                path: '/'
            });
            if (key) {

                showSampleList(1, null, key);
            } else {
                showSampleList(1);
            }
        }, 400);
    });
}

//获取用户配置的赛选项目
function getSearchItem() {

  var search_box = $('#labelSelects');
  var search_html = '';

  var search_opts = {
    url: '/api/company/attribute',
    type: 'GET',
    data: {
      companyId: $.cookie('company_id'),
      isUsed: 1,
      isSearchAttr: 1
    }
  };

  var search_cb = g_return200CbObj(function (data) {

    //高级搜索。
    AdvancedSearch(data.attributes);

    search_html = data.attributes.reduce(function (total, item) {

      return total + '\n                        <li class="sampleListSearchType" value="' + item.attributeId + '">\n                            <a value="' + item.attributeId + '">' + item.prettyName + '</a>\n                        </li>';
    }, '');

    //华海定制
    var _sampleListSearchType = $('#sampleListSearchType');

    if (huahaiTesting(COMPANYID)) {

      search_box.html(search_html);

      APP.sampleListSearchType = data.attributes[0].attributeId;

      _sampleListSearchType.text(data.attributes[0].prettyName);
    } else {
      search_box.append(search_html);

      _sampleListSearchType.text('样品');
    }
  });

  sendAjax(search_opts, search_cb);
}

function judgeClick() {

  var _keySearch = $('#keySearch');

  //搜索样品列表，点击加载历史记录

  _keySearch.on('click', function (event) {

    var _this = $(this);

    historySearch(_this);
  });

  _keySearch.on('input', function (event) {

    var _this = $(this);

    historySearch(_this);
  });

  //失去焦点隐藏搜索结果
  $('body').on('click', function (e) {
    if (!$(e.target).closest('.brandcrumb_search').length) {
      $('.brandcrumb_search ul').hide();
    }
  });

  $('.brandcrumb_search').on('click', 'ul li[data-trace]', function (event) {

    var _this = $(this);
    var _val = _this.attr('data-trace');
    var _ul = _this.parent();
    var _input = _this.parents('.brandcrumb_search').find('input');

    _input.val(_val);

    _ul.hide();

    $.cookie('search_key', _val, {
      path: '/'
    });

    showSampleList(1, null, _val);
  });

  //优化  from samples list
  var _sample_list = $('#sample_list');

  //进入样品信息页
  _sample_list.on('click', '.goSampleInfo', function (e) {

    $.cookie('sample_id', $(e.target).attr('value'), {
      path: '/'
    });

    window.open('sample.html');
  });

  //编辑按钮
  _sample_list.on('click', '.edit_icon', function (e) {
    e.stopPropagation();
    $.cookie('sample_id', $(e.target).attr('value'), {
      'path': '/'
    });
    location.href = 'edit_sample.html';
  });

  //复制新增
  _sample_list.on('click', '.copy_icon', function (e) {
    e.stopPropagation();
    $.cookie('sample_id', $(e.target).attr('value'), {
      'path': '/'
    });
    //new_type==1 复制状态下的新建样品
    $.cookie('new_type', 1, {
      path: '/'
    });
    location.href = 'copy_sample.html';
  });

  //打印
  _sample_list.on('click', '.print_icon', function (e) {
    $.cookie('sample_id', $(e.target).attr('value'), {
      path: '/'
    });
    isPDFPluginInstall(1);
  });
  //置顶
  _sample_list.on('click', '.top_sample', function (e) {
    var _this = $(this);
    var sample_Id = _this.parents('tr').attr('value');
    var list_client = {
      url: '/api/samples/' + sample_Id + '/topType',
      type: 'PUT',
      data: {
        topType: Number(_this.attr('data-topstatic'))
      }
    };
    var list_callback = g_return200CbObj(function (data) {
      console.log(data);
      showSampleList(1, null, '');
    });
    sendAjax(list_client, list_callback);
  });

  //热门
  _sample_list.on('click', '.hot_sample', function (e) {

    var _this = $(this);

    var sample_Id = _this.parents('tr').attr('value');

    var _num = Number(_this.attr('data-topstatic'));

    var list_client = {
      url: '/api/samples/' + sample_Id + '/hot',
      type: 'PUT',
      data: {
        hot: _num
      }
    };
    var list_callback = g_return200CbObj(function (data) {

      _this.attr('data-topstatic', _num ? 0 : 1);

      _this.text(_num ? '取消热门' : '热门');
    });

    sendAjax(list_client, list_callback);
  });
  //分享
  _sample_list.on('click', '.share_icon', function (e) {

    var invite_link;
    var time_set = new Date();

    var _itemNo = $(this).attr('data-item');

    $.ajax({
      url: '/api/samples/' + $(e.target).attr('value') + '/share',
      type: 'post',
      dataType: 'json',
      data: JSON.stringify({}),
      beforeSend: function beforeSend(request) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authorization', $.cookie('authorization'));
        if (!$.cookie('authorization')) {
          request.abort();
        }
      },
      success: function success(response) {
        if (response.code == 200) {

          var company_name = encodeURI($.cookie('company_name'));
          var urlString = 'https://' + location.href.split('//').pop().split('/').shift() + '/sample/share_singal.html?shareKey=' + response.shareKey + '&companyName=' + company_name + '&itemNo=' + _itemNo;
          invite_link = toUtf8(urlString);
          time_set.getDate();
          time_set.getTime();
          time_set.setHours(time_set.getHours() + 720);
          time_set.toLocaleString();
          var time_set_string = '链接有效日期: ' + time_set.getFullYear() + '年' + (time_set.getMonth() + 1) + '月' + time_set.getDate() + '日' + time_set.getHours() + ':' + (time_set.getMinutes() >= 10 ? time_set.getMinutes() : '0' + time_set.getMinutes());
          $('#invite_link').val(urlString);
          $('#code').html('');
          $('#code').qrcode({
            render: 'canvas',
            width: 180,
            height: 180,
            text: invite_link
          });
          $('#invite_end_time').html(time_set_string);
          $('.sample_list_preview').attr('href', urlString);
        } else {}
      },
      error: function error() {}
    });
  });

  //checkBox 按钮事件
  _sample_list.on('change', 'input[class=\'sampleCheck\']', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var sampleId = $(this).val();
    console.log(sampleId);
    if (this.checked) {

      SampleSelectAll('post', sampleId, 1);
      //全选检查
      input_arr = $('input[class="sampleCheck"]');
      for (var i = 0; i < input_arr.length; i += 1) {
        if (!input_arr[i].checked) {
          break;
        }
        if (i == input_arr.length - 1) {
          $('#checkAll').prop('checked', true);
        }
      }
    } else {
      $('#checkAll').prop('checked', false);
      SampleSelectAll('delete', sampleId, 1);
    }
  });

  //checkAll 按钮事件
  $('#checkAll').on('click', function () {
    var input_arr = [],
        sampleIds = [];
    input_arr = $('input[class=\'sampleCheck\']');
    for (var i = 0; i < input_arr.length; i += 1) {
      sampleIds.push($(input_arr[i]).val());
    }
    sampleIds = sampleIds.join(',');
    // console.log(sampleIds);
    if (this.checked) {
      $('input[class=\'sampleCheck\']').prop('checked', true);

      SampleSelectAll('post', sampleIds, 1);
    } else {
      $('input[class=\'sampleCheck\']').prop('checked', false);

      SampleSelectAll('delete', sampleIds, 1);
    }
  });

  //鼠标经过更多按钮
  _sample_list.on('mouseover', '.more_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/more_blue.png');
  });

  _sample_list.on('mouseout', '.more_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/more_black.png');
  });

  //编辑结果按钮
  _sample_list.on('mouseover', '.edit_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/edit_blue.png');
  });

  _sample_list.on('mouseout', '.edit_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/edit_black.png');
  });

  //鼠标经过复制按钮

  _sample_list.on('mouseover', '.copy_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/copy_blue.png');
  });

  _sample_list.on('mouseout', '.copy_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/copy_black.png');
  });

  //鼠标经过打印按钮


  _sample_list.on('mouseover', '.print_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/print_blue.png');
  });

  _sample_list.on('mouseout', '.print_icon', function (event) {

    $(this).children().children('img').attr('src', '/images/print_black.png');
  });

  //鼠标经过缩略图


  _sample_list.on('mouseover', '.img_sample', function (e) {

    if ($(e.target).attr('src') != '/images/sampleImg.png' && $('body').width() > 767) {
      $(e.target).after('<div class="image_hover_box"><div class="select_img"><img style="height:240px;width:240px" src="' + $(e.target).attr('src') + '"></div></div>');
      $('.image_hover_box').css('top', $(e.target).offset().top - $(document).scrollTop());
      $('.image_hover_box').css('left', $(e.target).offset().left - $(document).scrollLeft());
      $('.image_hover_box img').attr('src', $(e.target).attr('src').split('?x-oss')[0] + '?x-oss-process=image/resize,m_fixed,h_240,w_240');
    }
  });

  _sample_list.on('mouseout', '.img_sample', function (e) {

    $('.image_hover_box').remove();
  });

  //加载条数
  $('#set_show_pageSize').on('change', function () {
    var list_opt = {
      url: '/api/companys/' + $.cookie('company_id') + '/users/settings',
      type: 'POST',
      data: {
        sampleListPageSize: $('#set_show_pageSize').val()
      }
    };

    var list_cb = g_return200CbObj(function (data) {
      window.location.reload();
    });
    console.log(list_opt);
    sendAjax(list_opt, list_cb);
  });
}

function historySearch(_this) {
  var _ul = _this.parent().find('ul');

  var tpl_fn = Handlebars.compile($('#trace-template').html());

  var list_ul = $('#trace_list');

  var list_options = {
    url: '/api/user/account/trace',
    type: 'GET',
    data: {
      companyId: $.cookie('company_id'),
      traceType: 0
    }
  };

  var list_callback = g_return200CbObj(function (data) {

    var html = '';

    data.userTraces.length != 0 ? _ul.css('display', 'block') : _ul.css('display', 'none');

    var _userTraces = data.userTraces.reverse().slice(0, 4);

    _userTraces.forEach(function (item) {

      html += tpl_fn(item);
    });

    list_ul.html(html);
  });

  !_this.val() ? sendAjax(list_options, list_callback) : _ul.css('display', 'none');
}

//提示分辨率

function ScreenResolution() {

  var _not_prompt = localStorage.getItem('notPrompt');

  if (_not_prompt) {

    return;
  }

  if (Number(window.screen.width) < 1366) {

    var _ResolvingModeal = $('#ResolvingModeal');

    //提示。

    _ResolvingModeal.modal('show');

    $('#not-prompt').on('click', function (event) {

      localStorage.setItem('notPrompt', 1);

      _ResolvingModeal.modal('hide');
    });
  }
}