'use strict';

$(document).ready(function () {

    pageBegin();

    //authCheckAndAutoShow();
});

//权限系统
// function authCheckAndAutoShow() {

//     g_canIUse(
//         {
//             [AUTH.STOCK.total]: {  //是否购买过库存
//             }
//         },
//         function(data) {

//删除、编辑权限
// var tpl_auth_data = {

//     packingList: `<div class="operation {{#ifCond detailslength ">" 1}}  {{else}} sale-excel-btn{{/ifCond}}" data-key="" data-list-num="{{index}}" data-length="{{detailslength}}" style="max-width: 80px;width: 69px;" {{#ifCond detailslength ">" 1}} data-toggle="modal" data-target="#stock_detailed_modal" {{/ifCond}}>
//       细码单
//     </div>`,

// };

//细码单  权限  废弃
// if(data[AUTH.STOCK.total].can !== 1 ) {
//   $('#download_details_template, #inputExcel, #output_excel').remove();

//   //16362
//   if (COMPANYID >= 16362) {
//     tpl_auth_data.packingList = `<div class="operation operation-tip-buy" style="max-width: 80px;width: 69px;" >
//       细码单
//     </div>`
//   } else {
//       tpl_auth_data.packingList = ''
//   }
// }

// $('#stock_tpl').html(g_formateString($('#stock_tpl').html(),tpl_auth_data));

//             pageBegin();
//         }
//     )
// }

//启动页面主程序
function pageBegin() {

    var G_id_company = $.cookie('company_id');

    G_AJAXDATA.data.companyId = G_id_company;

    Main_js();

    loadListAjax = initAjaxList();

    //请求默认值
    loadListAjax(G_AJAXDATA);

    judgeClick(G_id_company);

    hoverImg();
}

//注册一个G标识的全局AJAX数据对象，仅供当前页面使用details
var G_AJAXDATA = {
    url: '/api/samples/store',
    data: {
        companyId: '',
        itemNo: '',
        name: '',
        type: '',
        orderByType: 6,
        pageNo: 1,
        pageSize: 10
    }

    //跟mainjs挂钩的
};function Main_js() {

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
}

//处理点击操作
function judgeClick(company_id) {

    var _table_list = $('#table_list');

    var _form = $('#sample_stock_form');

    //面包屑导航的公司
    $('#reload').on('click', function () {

        location.reload();
    });

    // 查看详情
    _table_list.on('click', '.goSampleInfo', function () {

        var _id = $(this).parents('tr').attr('data-id');

        $.cookie('wh_stock_info_id', _id, {
            path: '/'
        });

        location.href = 'stock_info.html';
    });

    //搜索

    $('#sample_stock_list_search').on('click', function (event) {

        var _data = {};

        _form.serializeArray().forEach(function (item) {

            _data[item.name] = item.value;
        });
        G_AJAXDATA.data = _data;
        G_AJAXDATA.data.pageNo = 1;
        G_AJAXDATA.data.pageSize = 10;
        G_AJAXDATA.data.orderByType = 6;
        G_AJAXDATA.data.companyId = company_id;

        loadListAjax(G_AJAXDATA);
    });

    //重置
    $('#sample_stock_list_reset').on('click', function (event) {

        _form[0].reset();

        var _data = {};

        _form.serializeArray().forEach(function (item) {

            _data[item.name] = item.value;
        });

        G_AJAXDATA.data = _data;
        G_AJAXDATA.data.pageNo = 1;
        G_AJAXDATA.data.pageSize = 10;
        G_AJAXDATA.data.orderByType = 6;
        G_AJAXDATA.data.companyId = company_id;

        loadListAjax(G_AJAXDATA);
    });

    //导出数据

    $('#sample_stock_export').on('click', function (e) {

        //初始化
        var _output = {
            url: '/api/samples/store/output',
            type: 'POST',
            data: {
                'companyId': $.cookie('company_id'),
                'itemNo': G_AJAXDATA.data.itemNo,
                'name': G_AJAXDATA.data.name,
                'type': G_AJAXDATA.data.type,
                'orderByType': G_AJAXDATA.data.orderByType
            }
        };

        var list_callback = g_return200CbObj(function (data) {

            location.href = data.resultFileUrl;
        });

        sendAjax(_output, list_callback);
    });

    //编号排序
    var timeSort = $('#items_sort');
    var timeUp = timeSort.find('.dot-top');
    var timeDown = timeSort.find('.dot-bottom');

    timeSort.on('click', function () {

        var orderByType = G_AJAXDATA.data.orderByType;

        if (orderByType === 6) {

            G_AJAXDATA.data.orderByType = 5;

            timeDown.removeClass('list-sort-dot-active');
            timeUp.addClass('list-sort-dot-active');

            //调用ajax
            loadListAjax(G_AJAXDATA);
        } else {

            G_AJAXDATA.data.orderByType = 6;

            timeUp.removeClass('list-sort-dot-active');
            timeDown.addClass('list-sort-dot-active');

            //调用ajax
            loadListAjax(G_AJAXDATA);
        }
    });
}

//缓存变量，先初始化再调用
var loadListAjax;

function initAjaxList() {

    //初始化
    var list_options = {
        url: '',
        type: 'GET',
        data: {}
    };

    //数据dom模板
    var tpl_fn = Handlebars.compile($('#stock_tpl').html());

    //where inset dom
    var list_table = $('#table_list');

    //ajax callback
    var list_callback = g_return200CbObj(function (data) {

        var html = '';

        //coding
        data.items.forEach(function (item, index) {

            item.hiddenc = 1;

            !item.colorMark && !item.colorName && (item.hiddenc = 0);

            item.unit = ['米', '份', '公斤', '件', '份'][item.type];

            item.type = ['米样', '挂卡', '公斤样', '样衣', 'A4样'][item.type];

            html += tpl_fn(item);
        });

        list_table.html(html);

        //控制分页布局
        change_page(data.pageNo, data.pageCount, data.recordCount);

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