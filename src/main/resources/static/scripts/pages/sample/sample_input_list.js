'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {

   //authCheckAndAutoShow();
   pageBegin();
});

//权限系统
function authCheckAndAutoShow() {

   g_canIUse(_defineProperty({}, AUTH.STOCK.warehouseAddUpdate, { //新增
      HTMLDom: '#warehousing_add'
   }), function (data) {

      Object.keys(data).forEach(function (item) {

         if (data[item].can === 1) {

            data[item].HTMLDom && $(data[item].HTMLDom).removeClass('display-none');
         } else {
            data[item].HTMLDom && $(data[item].HTMLDom).remove();
         }
      });

      pageBegin();
   });
}

function pageBegin() {

   var G_id_company = $.cookie('company_id');

   G_AJAXDATA_INVENTORY_LIST.data.companyId = G_id_company;

   if (!G_id_company) {
      g_msgAlert('获取数据出现错误,请重新选择!', function () {
         return;
      });
   }

   Main_js();

   //点击事件
   judge_click(G_id_company);

   //缓存变量，先初始化再调用，调用ajax
   loadListAjax = initAjaxList();

   //请求默认值   获取入库列表列表
   loadListAjax(G_AJAXDATA_INVENTORY_LIST);
}

//入库列表
var G_AJAXDATA_INVENTORY_LIST = {
   url: '/api/samples/store/in',
   type: 'get',
   data: {
      startDate: '',
      endDate: '',
      orderNo: '',
      pageNo: 1,
      pageSize: 10,
      companyId: ''
   }

   //跟mainjs挂钩的
};function Main_js() {

   //监测用户信息
   manager_check();

   //message更新
   mes_check();
}

function judge_click(company_id) {

   var _warehousing_list = $('#warehousing_list');

   var _form = $('#sample_input_list_form');

   //新增样品入库
   $('#sample_input_list_add').on('click', function (event) {

      location.href = 'sample_input_list_add.html';
   });

   //面包屑导航的公司
   $('#reload').on('click', function () {

      location.reload();
   });
   //查看详情

   _warehousing_list.on('click', '.warehousing-list-info', function (event) {

      var _inFormId = $(this).attr('data-id');

      $.cookie('sample_input_info_id', _inFormId, {
         path: '/'
      });
      window.open('sample_input_list_info.html');
   });

   //入库列表的开始时间
   laydate({
      elem: '#start_date',
      format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
      festival: true, //显示节日
      choose: function choose(datas) {//选择日期完毕的回调

      }
   });

   //入库列表的结束时间
   laydate({
      elem: '#end_date',
      format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
      festival: true, //显示节日
      choose: function choose(datas) {//选择日期完毕的回调

      }
   });

   //搜索

   var input = $('#search_input');
   $('#sample_input_list_search').on('click', function (event) {

      var _data = {};

      _form.serializeArray().forEach(function (item) {
         console.log(item);

         _data[item.name] = item.value;
      });

      G_AJAXDATA_INVENTORY_LIST.data = _data;
      G_AJAXDATA_INVENTORY_LIST.data.pageNo = 1;
      G_AJAXDATA_INVENTORY_LIST.data.companyId = company_id;
      G_AJAXDATA_INVENTORY_LIST.data.itemNo = input.val();
      G_AJAXDATA_INVENTORY_LIST.data.pageSize = 10;

      loadListAjax(G_AJAXDATA_INVENTORY_LIST);
   });

   //重置
   $('#sample_input_list_reset').on('click', function (event) {

      _form[0].reset();

      var _data = {};

      _form.serializeArray().forEach(function (item) {

         _data[item.name] = item.value;
      });

      G_AJAXDATA_INVENTORY_LIST.data = _data;
      G_AJAXDATA_INVENTORY_LIST.data.pageNo = 1;
      G_AJAXDATA_INVENTORY_LIST.data.companyId = company_id;

      loadListAjax(G_AJAXDATA_INVENTORY_LIST);
   });
}

var loadListAjax;

//入库列表
function initAjaxList() {

   //模板
   var tpl_fn = Handlebars.compile($('#warehouse-samples-template').html());

   //where inset dom
   var list_table = $('#warehousing_list');

   //初始化
   var list_options = {
      url: '',
      type: 'get',
      data: {}
   };
   beginLoading();

   //数据dom模板
   var list_callback = g_return200CbObj(function (data) {
      var html = '';

      data.items.forEach(function (item) {
         item.iTemOrNo = item.iTemNo;
         var iTemNo = item.iTemNo.split(',');
         if (iTemNo.length > 3) {
            iTemNo = iTemNo.slice(0, 3) + '...';
            item.iTemNo = iTemNo;
         } else {}
         html += tpl_fn(item);
      });

      list_table.html(html);

      if (data.recordCount > 0) {

         $('#warehousing_list').show();
         $('.noSample').hide();
      } else {
         $('#warehousing_list').hide();
         $('.noSample').show();
      }

      //控制分页布局
      change_page(data.pageNo, data.pageCount, data.recordCount);
   });

   //分页时间绑定
   var change_page = $('.panel-page').pageInit({

      callback: function callback(pageNum) {

         G_AJAXDATA_INVENTORY_LIST.data.pageNo = pageNum;

         loadListAjax(G_AJAXDATA_INVENTORY_LIST);
      }

   });
   return function (ajaxData, companyKey) {

      list_options.url = ajaxData.url;
      list_options.type = ajaxData.type;
      list_options.data = ajaxData.data;
      if (ajaxData.data.endDate < ajaxData.data.startDate) {
         g_msgAlert('开始日期不能晚于结束日期，请您重新调整查询日期之后再查询！', function () {
            return;
         });
      } else {
         sendAjax(list_options, list_callback);
      }
   };
};