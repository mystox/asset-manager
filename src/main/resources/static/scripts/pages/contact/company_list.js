'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

  var _cookie_company_type = '',
      _type = Number(getUrlValue('type'));

  if (_type) {

    _cookie_company_type = _type;

    $.cookie('company_page', _type, {
      path: '/'
    });
  } else {

    _cookie_company_type = Number($.cookie('company_type'));
  }

  authCheckAndAutoShow(_cookie_company_type);
});
//权限系统
function authCheckAndAutoShow(_cookie_company_type) {

  if (_cookie_company_type === 2) {
    var _g_canIUse;

    g_canIUse((_g_canIUse = {}, _defineProperty(_g_canIUse, AUTH.CONTACTCUSTOMER.addUpdate, { //新增、修改 客户
      HTMLDom: '#add_new_company'
    }), _defineProperty(_g_canIUse, AUTH.CONTACTCUSTOMER.del, {//

    }), _defineProperty(_g_canIUse, AUTH.CONTACTCUSTOMER.customerExport, { //
      HTMLDom: '#output_costmer_excel'
    }), _g_canIUse), function (data) {

      //编辑权限、删除
      var tpl_auth_data = {

        auth_edit: '  <div class="operation edit_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u7F16\u8F91">\n                                        <i class=" i-icon i-edit-icon"></i>\n                                    </div>\n                                </div>',
        auth_del: ' <div class="operation del_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u5220\u9664">\n                                        <i class=" i-icon i-del-icon"></i>\n                                    </div>\n                                </div>'

      };

      Object.keys(data).forEach(function (item) {

        if (data[item].can === 1) {

          data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
        } else {
          data[item].HTMLDom && $(data[item].HTMLDom).remove();
        }
      });

      //编辑
      data[AUTH.CONTACTCUSTOMER.addUpdate].can !== 1 && (tpl_auth_data.auth_edit = '');

      //删除
      data[AUTH.CONTACTCUSTOMER.del].can !== 1 && (tpl_auth_data.auth_del = '');

      $('#company_tree_tpl').html(g_formateString($('#company_tree_tpl').html(), tpl_auth_data));

      pageBegin(_cookie_company_type);
    });
  }

  if (_cookie_company_type === 1) {
    var _g_canIUse2;

    g_canIUse((_g_canIUse2 = {}, _defineProperty(_g_canIUse2, AUTH.CONTACTSUPPLIER.addUpdate, { //新增、修改 供应商  加工厂
      HTMLDom: '#add_new_company'
    }), _defineProperty(_g_canIUse2, AUTH.CONTACTSUPPLIER.del, {//

    }), _defineProperty(_g_canIUse2, AUTH.CONTACTCUSTOMER.supplierExport, { //
      HTMLDom: '#output_costmer_excel'
    }), _g_canIUse2), function (data) {

      //编辑权限、删除
      var tpl_auth_data = {

        auth_edit: '  <div class="operation edit_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u7F16\u8F91">\n                                        <i class=" i-icon i-edit-icon"></i>\n                                    </div>\n                                </div>',
        auth_del: ' <div class="operation del_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u5220\u9664">\n                                        <i class=" i-icon i-del-icon"></i>\n                                    </div>\n                                </div>'

      };

      Object.keys(data).forEach(function (item) {

        if (data[item].can === 1) {

          data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
        } else {
          data[item].HTMLDom && $(data[item].HTMLDom).remove();
        }
      });

      //编辑
      data[AUTH.CONTACTSUPPLIER.addUpdate].can !== 1 && (tpl_auth_data.auth_edit = '');

      //删除
      data[AUTH.CONTACTSUPPLIER.del].can !== 1 && (tpl_auth_data.auth_del = '');

      $('#company_tree_tpl').html(g_formateString($('#company_tree_tpl').html(), tpl_auth_data));

      pageBegin(_cookie_company_type);
    });
  }

  if (_cookie_company_type === 3) {
    var _g_canIUse3;

    g_canIUse((_g_canIUse3 = {}, _defineProperty(_g_canIUse3, AUTH.CONTACTOTHER.addUpdate, { //新增、修改其他往来单位
      HTMLDom: '#add_new_company'
    }), _defineProperty(_g_canIUse3, AUTH.CONTACTOTHER.del, {//删除

    }), _g_canIUse3), function (data) {

      //编辑权限、删除
      var tpl_auth_data = {

        auth_edit: '  <div class="operation edit_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u7F16\u8F91">\n                                        <i class=" i-icon i-edit-icon"></i>\n                                    </div>\n                                </div>',
        auth_del: ' <div class="operation del_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u5220\u9664">\n                                        <i class=" i-icon i-del-icon"></i>\n                                    </div>\n                                </div>'

      };

      Object.keys(data).forEach(function (item) {

        if (data[item].can === 1) {

          data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
        } else {
          data[item].HTMLDom && $(data[item].HTMLDom).remove();
        }
      });

      //编辑
      data[AUTH.CONTACTOTHER.addUpdate].can !== 1 && (tpl_auth_data.auth_edit = '');

      //删除
      data[AUTH.CONTACTOTHER.del].can !== 1 && (tpl_auth_data.auth_del = '');

      $('#company_tree_tpl').html(g_formateString($('#company_tree_tpl').html(), tpl_auth_data));

      receivedProp();
      pageBegin(_cookie_company_type);
    });
  }

  if (_cookie_company_type === 4) {
    var _g_canIUse4;

    g_canIUse((_g_canIUse4 = {}, _defineProperty(_g_canIUse4, AUTH.CONTACTFACTORY.addUpdate, { //新增、修改其他往来单位
      HTMLDom: '#add_new_company'
    }), _defineProperty(_g_canIUse4, AUTH.CONTACTFACTORY.del, {//删除

    }), _g_canIUse4), function (data) {

      //编辑权限、删除
      var tpl_auth_data = {

        auth_edit: '  <div class="operation edit_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u7F16\u8F91">\n                                        <i class=" i-icon i-edit-icon"></i>\n                                    </div>\n                                </div>',
        auth_del: ' <div class="operation del_icon">\n                                    <div class="img_icon hint--top-right" aria-label="\u5220\u9664">\n                                        <i class=" i-icon i-del-icon"></i>\n                                    </div>\n                                </div>'

      };

      Object.keys(data).forEach(function (item) {

        if (data[item].can === 1) {

          data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
        } else {
          data[item].HTMLDom && $(data[item].HTMLDom).remove();
        }
      });

      //编辑
      data[AUTH.CONTACTFACTORY.addUpdate].can !== 1 && (tpl_auth_data.auth_edit = '');

      //删除
      data[AUTH.CONTACTFACTORY.del].can !== 1 && (tpl_auth_data.auth_del = '');

      $('#company_tree_tpl').html(g_formateString($('#company_tree_tpl').html(), tpl_auth_data));

      receivedProp();
      pageBegin(_cookie_company_type);
    });
  }
}
// 肢解 props
function receivedProp() {
  var props = JSON.parse($.cookie('company_list_data') || $.cookie('is_use_company_history') || '{}');
  $.cookie('company_list_data', '', {
    path: '/'
  });
  $.cookie('is_use_company_history', '', {
    path: '/'
  });
  if (props.id) {
    G_AJAXDATA.data.pageNo = props.pageNo;
  }
}
//启动页面
function pageBegin(_cookie_company_type) {

  var _company_id = $.cookie('company_id');

  //修改 文字 1:供应商 2:客户 3: 其他
  var _company_type_name = $('.company_type_name');
  var _saleman_type_name = $('.saleman_type_name');
  var _shortName_type_name = $('.shortName_type_name');
  switch (_cookie_company_type) {
    case 1:
      $(document).attr('title', '供应商列表');

      _company_type_name.text('供应商');
      _shortName_type_name.text('简称');

      _saleman_type_name.text('采购员');
      break;
    case 2:
      $(document).attr('title', '客户列表');
      _company_type_name.text('客户');
      _saleman_type_name.text('业务员');
      break;
    case 4:
      $(document).attr('title', '加工厂列表');
      _company_type_name.text('加工厂');
      _saleman_type_name.text('业务员');
      break;
    default:
      $(document).attr('title', '其他来往单位列表');

      _company_type_name.text('其他来往单位');
  }

  G_AJAXDATA.data.companyId = _company_id;

  G_AJAXDATA.data.nature = _cookie_company_type;

  //请求默认值
  loadListAjax = initAjaxList();

  loadListAjax(G_AJAXDATA);

  searchSometh(G_AJAXDATA.data.companyId);

  judge_click();

  mainJsDo(_company_id);
}

//注册一个G标识的全局AJAX数据对象，仅供当前页面使用
var G_AJAXDATA = {
  url: '/api/contact/company',
  type: 'GET',
  data: {
    companyId: '',
    key: '',
    pageNo: 1,
    nature: '',
    pageSize: 10,
    totalRecord: 1,
    totalPage: 1
  }

  //跟mainjs挂钩的
};function mainJsDo(_company_id) {

  //监测用户信息
  manager_check();

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

  // 导出库存表
  $('#output_costmer_excel').on('click', function () {

    var out_opt = {
      url: '/api/contact/company/output',
      data: {
        companyId: _company_id,
        name: G_AJAXDATA.data.name ? G_AJAXDATA.data.name : '',
        address: G_AJAXDATA.data.address ? G_AJAXDATA.data.address : '',
        telephone: G_AJAXDATA.data.telephone ? G_AJAXDATA.data.telephone : '',
        nature: G_AJAXDATA.data.nature
      }
    };

    var out_cb = g_return200CbObj(function (data) {

      if (!data.resultFileUrl) {

        g_msgAlert('暂无客户，无法导出！');

        return;
      }

      location.href = data.resultFileUrl;
    });

    sendAjax(out_opt, out_cb);
  });
}

//处理点击操作
function judge_click() {

  //新增
  $('#add_new_company, #go_to_add').on('click', function () {
    //form main.js
    phoneGoToWx();

    location.href = '../contact/company_add.html';
  });

  //移动端想要操作
  $('#table_list').on('click', '.moreAtMobile', function () {

    phoneGoToWx();
  });

  //面包屑导航的公司
  $('#companyListLink').on('click', function () {

    location.reload();
  });

  //去一个公司的详情
  $('#table_list').on('click', '.goItemInfo', function () {

    var _id = $(this).parents('tr').attr('data-value');

    $.cookie('contact_company_info_id', JSON.stringify({
      id: _id,
      pageNo: G_AJAXDATA.data.pageNo,
      pageSize: G_AJAXDATA.data.pageSize,
      totalPage: G_AJAXDATA.data.totalPage,
      totalRecord: G_AJAXDATA.data.totalRecord
    }), {
      path: '/'
    });

    window.open('../contact/company_info.html');
  });

  //去一个公司的联系人列表
  $('#table_list').on('click', '.goItemInfoList', function () {

    var _id = $(this).parents('tr').attr('data-value');

    $.cookie('contact_company_info_show_linkman_list', 'show', {
      path: '/'
    });
    $.cookie('contact_company_info_id', _id, {
      path: '/'
    });

    location.href = '../contact/company_info.html';
  });

  //编辑一个公司   *到了目标页面一定要清空该cookie
  $('#table_list').on('click', '.edit_icon', function () {

    var _id = $(this).parents('tr').attr('data-value');

    $.cookie('contact_company_edit_id', _id, {
      path: '/'
    });

    location.href = '../contact/company_edit.html';
  });

  //删除一个公司
  $('#table_list').on('click', '.del_icon', function () {

    var _id = $(this).parents('tr').attr('data-value');
    var lm_conut = $(this).parents('tr').attr('data-numbers');

    if (Number(lm_conut) > 0) {
      g_msgAlert('必须删除或转移该公司下全部联系人，才能删除！');
      return;
    }

    var del_options = {
      url: '/api/contact/company/' + _id,
      type: 'DELETE'
    };

    var del_callback = g_return200CbObj(function (data) {
      loadListAjax(G_AJAXDATA);
    });

    g_confirmAlert('确认删除该联系公司？', function () {
      sendAjax(del_options, del_callback);
    });
  });
}

//根据返回总记录数控制显示内容
function contrlView(total) {

  if (+total > 0) {

    $('#show_list').show();
    $('#noth_search_div').hide();
  } else {
    $('#show_list').hide();
    $('#noth_search_div').show();
  }
}

//搜索控制
// function searchSometh(updateFn) {

//   var _selectDom = $('#sampleListSearchType');

//   $('.sampleListSearchType').on('click', function(e) {

//     var _this = $(this);

//     _selectDom.text(_this.text());

//     G_AJAXDATA.data.searchType = this.value;

//     G_AJAXDATA.data.pageNo = 1;

//     //调用ajax
//     loadListAjax(G_AJAXDATA);
//   });

//   //g_throttle form mainjs
//   $('#search_input').on('input', g_throttle(function() {

//     G_AJAXDATA.data.key = this.value;

//     G_AJAXDATA.data.pageNo = 1;

//     //调用ajax
//     loadListAjax(G_AJAXDATA);

//   }, 500));
// }

//搜索控制
function searchSometh(company_id) {

  var _form = $('#company_list_hd_form');

  // make search
  $('#make_search').on('click', function () {

    var _data = {};

    _form.serializeArray().forEach(function (item) {

      _data[item.name] = item.value;
    });

    G_AJAXDATA.data.name = _data.name;
    G_AJAXDATA.data.telephone = _data.telephone;
    G_AJAXDATA.data.address = _data.address;
    G_AJAXDATA.data.pageNo = 1;
    G_AJAXDATA.data.pageSize = 10;
    G_AJAXDATA.data.companyId = company_id;

    loadListAjax(G_AJAXDATA);
  });

  // make reset
  $('#reset_search').on('click', function () {

    _form[0].reset();

    $('#search_status').val('');

    var _data = {};

    _form.serializeArray().forEach(function (item) {

      _data[item.name] = item.value;
    });

    G_AJAXDATA.data.name = _data.name;
    G_AJAXDATA.data.telephone = _data.telephone;
    G_AJAXDATA.data.address = _data.address;
    G_AJAXDATA.data.pageNo = 1;
    G_AJAXDATA.data.pageSize = 10;
    G_AJAXDATA.data.companyId = company_id;

    loadListAjax(G_AJAXDATA);
  });
  ListEnterBind('#company_list_hd_form', '#make_search');
}
//缓存变量，先初始化再调用，调用ajax

var loadListAjax;

function initAjaxList() {

  //初始化
  var list_options = {
    url: '',
    type: 'GET',
    data: {}
  };

  //数据dom模板
  var tpl_fn = Handlebars.compile($('#company_tree_tpl').html());

  //where inset dom
  var list_table = $('#table_list');

  //ajax callback
  var list_callback = g_return200CbObj(function (data) {

    var html = '';

    data.contactCompanys.forEach(function (item) {

      if (item.contactUserNum === 0) {

        item.contacts = '暂无联系人';
      } else {

        item.contacts = item.contactUser[0].contactUserName + ' \u7B49 ' + item.contactUserNum + ' \u4E2A\u8054\u7CFB\u4EBA';
      }

      html += tpl_fn(item);
    });

    list_table.html(html);

    //控制没有找到页面显隐
    contrlView(data.recordCount);

    //控制分页布局
    change_page(data.pageNo, data.pageCount, data.recordCount);
    G_AJAXDATA.data.totalPage = data.pageCount;
    G_AJAXDATA.data.totalRecord = data.recordCount;
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