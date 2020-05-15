"use strict";
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++)a[t] = e[t];
        return a
    }
    return Array.from(e)
}
function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
}
function auth_nav_checked() {
    var e;
    g_canIUse((e = {}, _defineProperty(e, AUTH.SAMPLE.total, {navDom: "#auth_nav_sample,#auth_nav_basket,#left_nav_sample,#left_status_sample"}), _defineProperty(e, AUTH.SAMPLE.addUpdate, {navDom: "#auth_nav_addSample"}), _defineProperty(e, AUTH.SAMPLE.print, {navDom: "#auth_nav_printSample"}), _defineProperty(e, AUTH.SAMPLE.share, {navDom: "#auth_nav_shareSample"}), _defineProperty(e, AUTH.CONTACTUSER.total, {navDom: "#auth_nav_contact_user"}), _defineProperty(e, AUTH.CONTACTCUSTOMER.total, {navDom: "#auth_nav_contact_customer"}), _defineProperty(e, AUTH.CONTACTSUPPLIER.total, {navDom: "#auth_nav_contact_supplier"}), _defineProperty(e, AUTH.CONTACTOTHER.total, {navDom: "#auth_nav_contact_other"}), _defineProperty(e, AUTH.CONTACTFACTORY.total, {navDom: "#auth_nav_contact_factory"}), _defineProperty(e, AUTH.WAREHOUSE.total, {navDom: "#auth_nav_warehouse"}), _defineProperty(e, AUTH.CURRENCY.total, {navDom: "#auth_nav_currency"}), _defineProperty(e, AUTH.ACCOUNT.total, {navDom: "#auth_nav_account"}), _defineProperty(e, AUTH.BIZOPP.total, {navDom: "#auth_nav_chance"}), _defineProperty(e, AUTH.BIZOPP.sampleSelectForm, {navDom: "#auth_nav_sample_select_form"}), _defineProperty(e, AUTH.BIZOPP.sampleSelectFormDetail, {navDom: "#auth_nav_sample_select_form_detail"}), _defineProperty(e, AUTH.BIZOPP.sampleSelectFormStatistic, {navDom: "#auth_nav_sample_select_form_statistic"}), _defineProperty(e, AUTH.PURCHASE.total, {navDom: "#auth_nav_purchase,#left_nav_purchase,#left_nav_purchase"}), _defineProperty(e, AUTH.PURCHASE.purchaseOrder, {navDom: "#auth_nav_purchase_order"}), _defineProperty(e, AUTH.PURCHASE.purchaseStock, {navDom: "#auth_nav_purchase_stock"}), _defineProperty(e, AUTH.PURCHASE.purchaseReturn, {navDom: "#auth_nav_purchase_return"}), _defineProperty(e, AUTH.PURCHASE.purchaseReportForm, {navDom: "#auth_nav_purchase_report_form"}), _defineProperty(e, AUTH.PURCHASE.purchaseOrderStatisticalTable, {navDom: "#auth_nav_purchase_order_statistical_table"}), _defineProperty(e, AUTH.PURCHASE.purchaseStockDetailsDySample, {navDom: "#auth_nav_purchase_stock_details_by_sample"}), _defineProperty(e, AUTH.PURCHASE.purchaseReturnDetailsByOrder, {navDom: "#auth_nav_purchase_return_details_by_order"}), _defineProperty(e, AUTH.PURCHASE.purchaseStockStatisticalTable, {navDom: "#auth_nav_purchase_stock_statistical_table"}), _defineProperty(e, AUTH.SALE.total, {navDom: "#auth_nav_sale,#left_nav_sale,#left_nav_sale"}), _defineProperty(e, AUTH.SALE.sellOrder, {navDom: "#auth_nav_sell_order"}), _defineProperty(e, AUTH.SALE.sellDeliver, {navDom: "#auth_nav_sell_deliver"}), _defineProperty(e, AUTH.SALE.sellReturn, {navDom: "#auth_nav_sell_return"}), _defineProperty(e, AUTH.SALE.sellReportForm, {navDom: "#auth_nav_sell_report_form"}), _defineProperty(e, AUTH.SALE.sellOrderStatisticalTable, {navDom: "#auth_nav_sell_order_statistical_table"}), _defineProperty(e, AUTH.SALE.sellDetailsDySample, {navDom: "#auth_nav_sell_details_by_sample"}), _defineProperty(e, AUTH.SALE.sellDetailsByOrder, {navDom: "#auth_nav_sell_details_by_order"}), _defineProperty(e, AUTH.SALE.sellStatisticalTable, {navDom: "#auth_nav_sell_statistical_table"}), _defineProperty(e, AUTH.RECEIVABLE.total, {navDom: "#auth_nav_receivable,#yingshou"}), _defineProperty(e, AUTH.RECEIVABLE.receipt, {navDom: "#auth_nav_receipt"}), _defineProperty(e, AUTH.RECEIVABLE.receiptOther, {navDom: "#auth_nav_receipt_other"}), _defineProperty(e, AUTH.RECEIVABLE.initialEntry, {navDom: "#auth_nav_initial_entry,#chushihua"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportForm, {navDom: "#auth_nav_receipt_report_form"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportTable, {navDom: "#auth_nav_receipt_report_table"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportByOrder, {navDom: "#auth_nav_receipt_report_by_order"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportBySample, {navDom: "#auth_nav_receipt_report_balance_table"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportBalanceTable, {navDom: "#auth_nav_receipt_report_by_sample"}), _defineProperty(e, AUTH.RECEIVABLE.receiptReportReceivableTable, {navDom: "#auth_nav_receipt_report_receivable_table"}), _defineProperty(e, AUTH.PAYABLE.total, {navDom: "#auth_nav_payable,#public_left_yingfu"}), _defineProperty(e, AUTH.PAYABLE.receipt, {navDom: "#auth_nav_payable"}), _defineProperty(e, AUTH.PAYABLE.financeProductionPayable, {navDom: "#auth_nav_productionPayable"}), _defineProperty(e, AUTH.PAYABLE.receiptOther, {navDom: "#auth_nav_payable_other"}), _defineProperty(e, AUTH.PAYABLE.initialEntry, {navDom: "#auth_nav_initial_payable_entry,#chushihua"}), _defineProperty(e, AUTH.PAYABLE.receiptReportForm, {navDom: "#auth_nav_payable_report_form"}), _defineProperty(e, AUTH.PAYABLE.receiptReportTable, {navDom: "#auth_nav_payable_report_table"}), _defineProperty(e, AUTH.PAYABLE.receiptReportByOrder, {navDom: "#auth_nav_payable_report_by_order"}), _defineProperty(e, AUTH.PAYABLE.receiptReportBySample, {navDom: "#auth_nav_payable_report_balance_table"}), _defineProperty(e, AUTH.PAYABLE.receiptReportBalanceTable, {navDom: "#auth_nav_payable_report_by_sample"}), _defineProperty(e, AUTH.PAYABLE.receiptReportReceivableTable, {navDom: "#auth_nav_payable_report_receivable_table"}), _defineProperty(e, AUTH.PAYABLE.receiptReportOtherTable, {navDom: "#auth_nav_payable_report_other_table"}), _defineProperty(e, AUTH.STOCK.total, {navDom: "#auth_nav_stock,#left_nav_stock,#left_nav_stock"}), _defineProperty(e, AUTH.STOCK.warehouse, {navDom: "#auth_nav_store_in"}), _defineProperty(e, AUTH.STOCK.warehouseAddUpdate, {navDom: "#auth_nav_store_in_add_update"}), _defineProperty(e, AUTH.STOCK.warehouseDelete, {navDom: "#auth_nav_store_in_delete"}), _defineProperty(e, AUTH.STOCK.warehousePrint, {navDom: "#auth_nav_store_in_print"}), _defineProperty(e, AUTH.STOCK.cutting, {navDom: "#auth_nav_store_cut"}), _defineProperty(e, AUTH.STOCK.cuttingAddUpdate, {navDom: "#auth_nav_store_cut_add_update"}), _defineProperty(e, AUTH.STOCK.cuttingDelete, {navDom: "#auth_nav_store_cut_delete"}), _defineProperty(e, AUTH.STOCK.cuttingPrint, {navDom: "#auth_nav_store_cut_print"}), _defineProperty(e, AUTH.STOCK.distribution, {navDom: "#auth_nav_store_dis"}), _defineProperty(e, AUTH.STOCK.distributionAddUpdate, {navDom: "#auth_nav_store_dis_add_update"}), _defineProperty(e, AUTH.STOCK.distributionDelete, {navDom: "#auth_nav_store_dis_delete"}), _defineProperty(e, AUTH.STOCK.distributionPrint, {navDom: "#auth_nav_store_dis_print"}), _defineProperty(e, AUTH.STOCK.allocation, {navDom: "#auth_nav_store_dump"}), _defineProperty(e, AUTH.STOCK.allocationAddUpdate, {navDom: "#auth_nav_store_dump_add_update"}), _defineProperty(e, AUTH.STOCK.allocationDelete, {navDom: "#auth_nav_store_dump_delete"}), _defineProperty(e, AUTH.STOCK.allocationPrint, {navDom: "#auth_nav_store_dump_print"}), _defineProperty(e, AUTH.STOCK.outbound, {navDom: "#auth_nav_store_out"}), _defineProperty(e, AUTH.STOCK.outboundAddUpdate, {navDom: "#auth_nav_store_out_add_update"}), _defineProperty(e, AUTH.STOCK.outboundDelete, {navDom: "#auth_nav_store_out_delete"}), _defineProperty(e, AUTH.STOCK.outboundPrint, {navDom: "#auth_nav_store_out_print"}), _defineProperty(e, AUTH.STOCK.inventory, {navDom: "#auth_nav_store_check"}), _defineProperty(e, AUTH.STOCK.inventoryAddUpdate, {navDom: "#auth_nav_store_check_add_update"}), _defineProperty(e, AUTH.STOCK.inventoryDelete, {navDom: "#auth_nav_store_check_delete"}), _defineProperty(e, AUTH.STOCK.inventoryPrint, {navDom: "#auth_nav_store_check_print"}), _defineProperty(e, AUTH.STOCK.warehouseInit, {navDom: "#auth_nav_store_in_initial,#chushihua"}), _defineProperty(e, AUTH.STOCK.warehouseInitAddUpdate, {navDom: "#auth_nav_store_in_initial_add_update"}), _defineProperty(e, AUTH.STOCK.warehouseInitDelete, {navDom: "#auth_nav_store_in_initial_delete"}), _defineProperty(e, AUTH.STOCK.warehouseInitPrint, {navDom: "#auth_nav_store_in_initial_print"}), _defineProperty(e, AUTH.STOCK.storeReportForm, {navDom: "#auth_nav_store_report_form"}), _defineProperty(e, AUTH.STOCK.stockList, {navDom: "#auth_nav_store_statistic"}), _defineProperty(e, AUTH.STOCK.immediateStockList, {navDom: "#auth_nav_just_in_time_store"}), _defineProperty(e, AUTH.STOCK.inventoryAccountList, {navDom: "#auth_nav_store_book"}), _defineProperty(e, AUTH.STOCK.inventoryStatistic, {navDom: "#auth_nav_purchase_sale_stock_statistical_table"}), _defineProperty(e, AUTH.STOCK.inventoryAccountingList, {navDom: "#auth_nav_store_accounting"}), _defineProperty(e, AUTH.STOCK.surplusList, {navDom: "#auth_nav_surplus_list"}), _defineProperty(e, AUTH.STOCK.lossList, {navDom: "#auth_nav_loss_list"}), _defineProperty(e, AUTH.PRODUCTION.total, {}), _defineProperty(e, AUTH.PRODUCTION.productionInstruct, {navDom: "#auth_nav_production_order"}), _defineProperty(e, AUTH.PRODUCTION.productionInstructAddUpdate, {navDom: "#auth_nav_production_order_add_update"}), _defineProperty(e, AUTH.PRODUCTION.productionInstructDelete, {navDom: "#auth_nav_production_order_delete"}), _defineProperty(e, AUTH.PRODUCTION.productionInstructPrint, {navDom: "#auth_nav_production_order_print"}), _defineProperty(e, AUTH.PRODUCTION.productionInstructView, {navDom: "#auth_nav_production_order_view"}), _defineProperty(e, AUTH.PRODUCTION.outsourceProcess, {navDom: "#auth_nav_outsourced_list"}),_defineProperty(e, AUTH.PRODUCTION.outsourceProcessAddUpdate, {navDom: "#auth_nav_outsourced_list_add_update"}),_defineProperty(e, AUTH.PRODUCTION.outsourceProcessDelete, {navDom: "#auth_nav_outsourced_list_delete"}),_defineProperty(e, AUTH.PRODUCTION.outsourceProcessPrint, {navDom: "#auth_nav_outsourced_list_print"}),_defineProperty(e, AUTH.PRODUCTION.outsourceProcessView, {navDom: "#auth_nav_outsourced_list_view"}),_defineProperty(e, AUTH.PRODUCTION.ProductionMaterial, {navDom: "#auth_nav_cast_billet_single"}),_defineProperty(e, AUTH.PRODUCTION.productionMaterialAddUpdate, {navDom: "#auth_nav_cast_billet_single_add_update"}),_defineProperty(e, AUTH.PRODUCTION.productionMaterialDelete, {navDom: "#auth_nav_cast_billet_single_delete"}),_defineProperty(e, AUTH.PRODUCTION.productionMaterialPrint, {navDom: "#auth_nav_cast_billet_single_print"}),_defineProperty(e, AUTH.PRODUCTION.productionMaterialView, {navDom: "#auth_nav_cast_billet_single_view"}),_defineProperty(e, AUTH.PRODUCTION.processComplete, {navDom: "#auth_nav_process_completion_list"}),_defineProperty(e, AUTH.PRODUCTION.processCompleteAddUpdate, {navDom: "#auth_nav_process_completion_list_add_update"}),_defineProperty(e, AUTH.PRODUCTION.processCompleteDelete, {navDom: "#auth_nav_process_completion_list_delete"}),_defineProperty(e, AUTH.PRODUCTION.processCompletePrint, {navDom: "#auth_nav_process_completion_list_print"}),_defineProperty(e, AUTH.PRODUCTION.processCompleteView, {navDom: "#auth_nav_process_completion_list_view"}),_defineProperty(e, AUTH.PRODUCTION.processTransfer, {navDom: "#auth_nav_process_transfer_order"}),_defineProperty(e, AUTH.PRODUCTION.processTransferAddUpdate, {navDom: "#auth_nav_process_transfer_order_add_update"}),_defineProperty(e, AUTH.PRODUCTION.processTransferDelete, {navDom: "#auth_nav_process_transfer_order_delete"}),_defineProperty(e, AUTH.PRODUCTION.processTransferPrint, {navDom: "#auth_nav_process_transfer_order_print"}),_defineProperty(e, AUTH.PRODUCTION.processTransferView, {navDom: "#auth_nav_process_transfer_order_view"}),_defineProperty(e, AUTH.PRODUCTION.processStore, {navDom: "#auth_nav_process_warehouse_receipt"}),_defineProperty(e, AUTH.PRODUCTION.processStoreAddUpdate, {navDom: "#auth_nav_process_warehouse_receipt_add_update"}),_defineProperty(e, AUTH.PRODUCTION.processStoreDelete, {navDom: "#auth_nav_process_warehouse_receipt_delete"}),_defineProperty(e, AUTH.PRODUCTION.processStorePrint, {navDom: "#auth_nav_process_warehouse_receipt_print"}),_defineProperty(e, AUTH.PRODUCTION.outsourceStore, {navDom: "#auth_nav_hand_in_warehouse_receipt"}),_defineProperty(e, AUTH.PRODUCTION.outsourceStoreAddUpdate, {navDom: "#auth_nav_hand_in_warehouse_receipt_add_update"}),_defineProperty(e, AUTH.PRODUCTION.outsourceStoreDelete, {navDom: "#auth_nav_hand_in_warehouse_receipt_delete"}),_defineProperty(e, AUTH.PRODUCTION.outsourceStorePrint, {navDom: "#auth_nav_hand_in_warehouse_receipt_print"}),_defineProperty(e, AUTH.PRODUCTION.productionReportForm, {navDom: "#auth_nav_production_form"}),_defineProperty(e, AUTH.PRODUCTION.outsourceProcessStatistic, {navDom: "#auth_nav_outsource_process_statistic"}),_defineProperty(e, AUTH.PRODUCTION.productionMaterialStatistic, {navDom: "#auth_nav_material_statistics"}),_defineProperty(e, AUTH.PRODUCTION.outsourceStoreStatistic, {navDom: "#auth_nav_outsource_store_statistics"}),_defineProperty(e, AUTH.PRODUCTION.documentaryProgressTable, {navDom: "#auth_nav_documentary_progress_statistic"}),_defineProperty(e, AUTH.INSTRUCTIONS.total, {navDom: "#auth_nav_production_template"}),_defineProperty(e, AUTH.CONTRACT.total, {navDom: "#auth_nav_contract_template"}),_defineProperty(e, AUTH.INVOICE.total, {navDom: "#auth_nav_bill_template"}),_defineProperty(e, AUTH.PROCESSTEMPLATE.total, {navDom: "#auth_nav_contact_procedure_template"}),_defineProperty(e, AUTH.PROCESSTEMPLATE.addUpdate, {navDom: "#auth_nav_contact_procedure_template_add"}),_defineProperty(e, AUTH.PROCESSTEMPLATE.del, {navDom: "#auth_nav_contact_procedure_template_del"}),_defineProperty(e, AUTH.COMPANY.total, {navDom: "#auth_nav_manage"}),_defineProperty(e, AUTH.COMPANY.user, {navDom: "#group_nav_manage"}),_defineProperty(e, AUTH.COMPANY.info, {navDom: "#auth_nav_info"}),_defineProperty(e, AUTH.COMPANY.pay, {navDom: "#auth_nav_pay"}),_defineProperty(e, AUTH.COMPANY.basicsTotal, {navDom: "#auth_nav_mail_list,#auth_nav_sample,#auth_nav_basics_all,#jichuziliao,#chushihua"}),_defineProperty(e, AUTH.COMPANY.base, {navDom: "#auth_nav_params,#auth_nav_system"}),_defineProperty(e, AUTH.BIZOPP.publicSample, {navDom: "#auth_nav_exhibition"}),_defineProperty(e, AUTH.COMPANY.unit, {navDom: "#auth_nav_unit"}),e), function (e) {
        $("#auth_nav_finance").removeClass("display-none");
        var t = huahaiTesting(COMPANYID);
        t && $("#auth_nav_sale,#auth_nav_stock").addClass("display-none-huahai"), 0 === e.finance_receivable.can && 0 === e.finance_payable.can ? ($("#auth_nav_receivable").remove(), $("#auth_nav_payable").remove(), $("#yingshou").remove(), $("#public_left_yingfu").remove(), $("#yingshou_status").remove(), $("#yingfu_status").remove()) : ($("#auth_nav_receivable").removeClass("display-none"), $("#auth_nav_payable").removeClass("display-none"), $("#yingshou").removeClass("display-none"), $("#public_left_yingfu").removeClass("display-none"), $("#yingshou_status").removeClass("display-none"), $("#yingfu_status").removeClass("display-none")), 0 === e.contact.can && 0 === e.contact_customer.can && 0 === e.contact_supplier.can && 0 === e.contact_other.can && 0 === e.warehouse.can && 0 === e.company_currency.can && 0 === e.company_account.can && 0 === e.company.can ? ($("#auth_nav_set").remove(), $("#jichuziliao").remove(), $("#jichuziliao_status").remove(), $("#chushihua").remove(), $("#chushihua_status").remove(), $(".kehuBtn").addClass("noPe"), $(".gongBtn").addClass("noPe"), $(".qitaBtn").addClass("noPe")) : ($("#auth_nav_set").removeClass("display-none"), $("#jichuziliao").removeClass("display-none"), $("#jichuziliao_status").removeClass("display-none"), $("#chushihua").removeClass("display-none"), $("#chushihua_status").removeClass("display-none")), 0 === e.contact.can && 0 === e.contact_customer.can && 0 === e.contact_supplier.can && 0 === e.contact_other.can && $("#auth_nav_mail_list").remove(), 0 === e.contact.can && 0 === e.contact_customer.can && 0 === e.contact_supplier.can && 0 === e.contact_other.can && 0 === e.warehouse.can && 0 === e.company_currency.can && 0 === e.company_account.can && ($("#auth_nav_set").remove(), $(".kehuBtn").addClass("noPe"), $(".gongBtn").addClass("noPe"), $(".qitaBtn").addClass("noPe"), $("#auth_nav_basics_all").remove(), $("#jichuziliao").addClass("display-none"), $("#jichuziliao_status").addClass("display-none")), 0 === e.finance_payable_initial.can && 0 === e.finance_receivable_initial.can && 0 === e.store_in_initial.can && $("#auth_nav_initialization_all").remove();
        var a = $("#auth_nav_stock"), o = $("#close_exhibition"), n = $("#famosi_custom_module,#famosi_custom_module_report,#famosi_nav_technology,#famosi_custom_sale_module"), i = $("#public_custom_module,#public_custom_module_report,#public_custom_sale_module");
        closeModular(COMPANYID) ? (a.addClass("display-none"), o.addClass("display-none")) : (a.removeClass("display-none"), o.removeClass("display-none")), Object.keys(e).forEach(function (a) {
            t && "#auth_nav_chance" === e[a].navDom && (e[a].can = 0), [34249].includes(Number(COMPANYID)) ? (n.removeClass("display-none"), $("#auth_nav_sale").find("a").attr("href", "../famous/sale.html")) : i.removeClass("display-none"), [3004, 34282, 3019].includes(Number(COMPANYID)) && n.removeClass("display-none"), [8284, 34655, 34493, 3019].includes(Number(COMPANYID)) && $("#auth_nav_fabric_print").removeClass("display-none"), [3004, 34929].includes(Number(COMPANYID)) && $("#customize_renaming").text("生产跟踪"), 1 === e[a].can ? e[a].navDom && $(e[a].navDom).removeClass("display-none") : e[a].navDom && $(e[a].navDom).remove()
        }), 1 === e[AUTH.COMPANY.pay].can && (AUTHPAY = !0)
    })
}
function g_canIUse(e, t) {
    function a(a) {
        Object.keys(e).forEach(function (t) {
            a[t] ? e[t].can = a[t].haveRight : [t].can = 0
        }), t(e)
    }

    var o = [], n = {
        url: "/api/companys/" + COMPANYID + "/users/authority",
        type: "GET",
        async: !1,
        data: {authorityKeys: ""}
    }, i = g_return200CbObj(function (e) {
        AUTHSTATE = {}, e.userAuthorityItems.forEach(function (e) {
            AUTHSTATE[e.key] = e
        }), sessionStorage.setItem("userAuthorityItems", JSON.stringify(AUTHSTATE)), a(AUTHSTATE)
    });
    "undefined" == typeof AUTHSTATE ? (Object.keys(AUTH).forEach(function (e) {
            Object.keys(AUTH[e]).forEach(function (t) {
                o.push(AUTH[e][t])
            })
        }), peihuo(), sendAjax(n, i)) : a(AUTHSTATE)
}
function sampleInfoTextCheck(e) {
    return e.itemNo && (e.itemNo.length < APP.sampleInfoText.itemNoLength.min || e.itemNo.length > APP.sampleInfoText.itemNoLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.itemNoLength.max + "位)的样品编号", "#panel1") : e.name && (e.name.length < APP.sampleInfoText.nameLength.min || e.name.length > APP.sampleInfoText.nameLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.nameLength.max + "位)的样品中文名称", "#panel1") : e.formerItemNo && (e.formerItemNo.length < APP.sampleInfoText.formerItemNoLength.min || e.formerItemNo.length > APP.sampleInfoText.formerItemNoLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.formerItemNoLength.max + "位)的曾用样品编号", "#panel1") : e.nameEn && (e.nameEn.length < APP.sampleInfoText.nameEnLength.min || e.nameEn.length > APP.sampleInfoText.nameEnLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.nameEnLength.max + "位)的样品英文名称", "#panel1") : e.component && (e.component.length < APP.sampleInfoText.componentLength.min || e.component.length > APP.sampleInfoText.componentLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.componentLength.max + "位)的样品成分", "#panel1") : e.width && (e.width.length < APP.sampleInfoText.widthLength.min || e.width.length > APP.sampleInfoText.widthLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.widthLength.max + "位)的样品门幅", "#panel1") : e.weight && (e.weight.length < APP.sampleInfoText.weightLength.min || e.weight.length > APP.sampleInfoText.weightLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.weightLength.max + "位)的样品克重", "#panel1") : e.specification && (e.specification.length < APP.sampleInfoText.specificationLength.min || e.specification.length > APP.sampleInfoText.specificationLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.specificationLength.max + "位)的样品规格", "#panel1") : e.publicRemark && (e.publicRemark.length < APP.sampleInfoText.publicRemarkLength.min || e.publicRemark.length > APP.sampleInfoText.publicRemarkLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.publicRemarkLength.max + "位)的公有备注信息", "#panel1") : e.privateRemark && (e.privateRemark.length < APP.sampleInfoText.privateRemarkLength.min || e.privateRemark.length > APP.sampleInfoText.privateRemarkLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.privateRemarkLength.max + "位)的私有备注信息", "#panel1") : e.lableRemark && (e.lableRemark.length < APP.sampleInfoText.lableRemarkLength.min || e.lableRemark.length > APP.sampleInfoText.lableRemarkLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.lableRemarkLength.max + "位)的标签备注信息", "#panel1") : e.supplierInfo.supplierName && (e.supplierInfo.supplierName.length < APP.sampleInfoText.supplierInfo.supplierNameLength.min || e.supplierInfo.supplierName.length > APP.sampleInfoText.supplierInfo.supplierNameLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.supplierNameLength.max + "位)的供应商名称信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.itemNo && (e.supplierInfo.itemNo.length < APP.sampleInfoText.supplierInfo.itemNoLength.min || e.supplierInfo.itemNo.length > APP.sampleInfoText.supplierInfo.itemNoLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.itemNoLength.max + "位)的样品编号信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.name && (e.supplierInfo.name.length < APP.sampleInfoText.supplierInfo.nameLength.min || e.supplierInfo.name.length > APP.sampleInfoText.supplierInfo.nameLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.nameLength.max + "位)的样品名称信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.nameEn && (e.supplierInfo.nameEn.length < APP.sampleInfoText.supplierInfo.nameEnLength.min || e.supplierInfo.nameEn.length > APP.sampleInfoText.supplierInfo.nameEnLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.nameEnLength.max + "位)的样品英文名称信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.width && (e.supplierInfo.width.length < APP.sampleInfoText.supplierInfo.widthLength.min || e.supplierInfo.width.length > APP.sampleInfoText.supplierInfo.widthLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.widthLength.max + "位)的门幅信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.height && (e.supplierInfo.height.length < APP.sampleInfoText.supplierInfo.heightLength.min || e.supplierInfo.height.length > APP.sampleInfoText.supplierInfo.heightLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.heightLength.max + "位)的克重信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.component && (e.supplierInfo.component.length < APP.sampleInfoText.supplierInfo.componentLength.min || e.supplierInfo.component.length > APP.sampleInfoText.supplierInfo.componentLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.componentLength.max + "位)的成分信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.specification && (e.supplierInfo.specification.length < APP.sampleInfoText.supplierInfo.specificationLength.min || e.supplierInfo.specification.length > APP.sampleInfoText.supplierInfo.specificationLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.specificationLength.max + "位)的规格信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : e.supplierInfo.clothPrice && (e.supplierInfo.clothPrice.length < APP.sampleInfoText.supplierInfo.clothPriceLength.min || e.supplierInfo.clothPrice.length > APP.sampleInfoText.supplierInfo.clothPriceLength.max) ? alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.clothPriceLength.max + "位)的胚布加个信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2") : !e.supplierInfo.finishedPrice || !(e.supplierInfo.finishedPrice.length < APP.sampleInfoText.supplierInfo.finishedPriceLength.min || e.supplierInfo.finishedPrice.length > APP.sampleInfoText.supplierInfo.finishedPriceLength.max) || alertMessage("请输入合适长度(不大于" + APP.sampleInfoText.supplierInfo.finishedPriceLength.max + "位)的成品价格信息", $("#panel5") && $("#panel5").length > 0 ? "#panel5" : "#panel2")
}
function alertMessage(e, t) {
    return $(t).trigger("click"), $.alert({
        title: "提醒",
        content: e,
        animation: "bottom",
        closeAnimation: "scale",
        buttons: {confirm: {text: "确定"}}
    }), !1
}
function redirect() {
    var e = location.href;
    e.indexOf("www") != -1 && (e = e.split("www.").pop(), e = "https://" + e, window.location = e)
}
function toHanzi(e) {
    var t, a = e.split("\\u"), o = "";
    for (t = 0; t < a.length; t += 1)o += String.fromCharCode(parseInt(a[t], 16).toString(10));
    return o
}
function beginLoading() {
    $(".loading").css("opacity", "1")
}
function endLoading() {
    $(".loading").css("opacity", "0")
}
function beginImgLoading() {
    $(".imgLoading").show(), $(".chooseFile").text("正在上传"), $("select").attr("disabled", !0), $("#chooseFile").attr("disabled", !0), $(".addSample").attr("disabled", !0), $(".addSample").parent().attr("disabled", !0), $(".addSample").parent().parent().attr("disabled", !0), $("#update_sample").attr("disabled", !0), $("#update_sample").parent().attr("disabled", !0), $("#update_sample").parent().parent().attr("disabled", !0), $("#loadAvatar").text("正在上传"), $("#loadAvatar").attr("disabled", !0), $("#loadAvatar").parent().attr("disabled", !0), $("#save_account_info").attr("disabled", !0), $("#save_account_info").parent().attr("disabled", !0)
}
function endImgLoading() {
    $(".imgLoading").hide(), $(".chooseFile").text("选择文件"), $("select").attr("disabled", !1), $("#chooseFile").attr("disabled", !1), $(".addSample").attr("disabled", !1), $("#update_sample").attr("disabled", !1), $(".addSample").parent().attr("disabled", !1), $(".addSample").parent().parent().attr("disabled", !1), $("#update_sample").parent().attr("disabled", !1), $("#update_sample").parent().parent().attr("disabled", !1), $("#loadAvatar").text("上传新头像"), $("#loadAvatar").attr("disabled", !1), $("#loadAvatar").parent().attr("disabled", !1), $("#save_account_info").attr("disabled", !1), $("#save_account_info").parent().attr("disabled", !1)
}
function Trim(e, t) {
    var a;
    return a = e.replace(/(^\s+)|(\s+$)/g, ""), t && "g" == t.toLowerCase() && (a = a.replace(/\s/g, "")), a
}
function toUtf8(e) {
    var t, a, o, n;
    for (t = "", o = e.length, a = 0; a < o; a += 1)n = e.charCodeAt(a), n >= 1 && n <= 127 ? t += e.charAt(a) : n > 2047 ? (t += String.fromCharCode(224 | n >> 12 & 15), t += String.fromCharCode(128 | n >> 6 & 63), t += String.fromCharCode(128 | n >> 0 & 63)) : (t += String.fromCharCode(192 | n >> 6 & 31), t += String.fromCharCode(128 | n >> 0 & 63));
    return t
}
function toFrontEndBirthday(e) {
    var t = e.split("-");
    return t.reverse(), t.join("/")
}
function toBackEndBirthday(e) {
    var t = e.split("/");
    return t.reverse(), t.join("-")
}
function auth_check() {
    var e = location.href.split("/"), t = e.length, a = !1;
    "my" != e[t - 2] && "sample" != e[t - 2] || (a = !0), /share/.test(location.href) && (a = !1), $.cookie("authorization") && "visitor" == $.cookie("authorization") && $(".navbar-right").css("display", "none"), !a || "" != $.cookie("authorization") && $.cookie("authorization") || /*$.alert({
     animation: "bottom",
     closeAnimation: "scale",
     title: "提醒!",
     content: "登录信息失效,请重新登录!",
     buttons: {
     confirm: {
     text: "确定", action: function () {
     $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
     }
     }
     }
     })*/console.log("登录信息失效,请重新登录")
}
function getConnectInfo() {
    beginLoading(), $.ajax({
        type: "get", url: "/api/user/account/platform", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("authorization", $.cookie("authorization"))
        }, success: function (e) {
            if (200 == e.code)for (var t = 0; t < e.platform.length; t++)$(".bind_" + t).removeClass("bind_ok"), $(".bind_" + t).text("绑定帐号"), $(".bind_" + t).attr("value", e.platform[t].account), $("#connect_img_" + t).attr("src", "/images/not_connect_img_" + t + ".png"), 1 == e.platform[t].isBind && ($(".bind_" + t).addClass("bind_ok"), $(".bind_" + t).text("取消绑定"), $("#connect_img_" + t).attr("src", "/images/connect_img_" + t + ".png"));
            endLoading()
        }, error: function () {
            endLoading(), $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "连接服务器失败!",
                buttons: {confirm: {text: "确定"}}
            })
        }
    })
}
function connect_platform(e, t, a) {
    $.ajax({
        type: "post",
        url: "/api/user/account/platform/bind",
        dataType: "json",
        async: !1,
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
        },
        data: JSON.stringify({platType: parseInt($.cookie("plat_type")), platCode: e, unionId: t, openAccount: a}),
        success: function (e) {
            200 == e.code ? ($.cookie("wechat_code", "", {path: "/"}), $.cookie("union_id", "", {path: "/"}), $.cookie("open_account", "", {path: "/"}), "bind.html" == location.href.split("/").pop() ? $.cookie("invitationCode") ? location.href = "my/join_company.html?invite=" + $.cookie("invitationCode") : $.ajax({
                            type: "get",
                            url: "/api/user/account/settings",
                            dataType: "json",
                            beforeSend: function (e) {
                                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                            },
                            success: function (e) {
                                200 == e.code && e.companyId ? ($.cookie("company_id", e.companyId, {path: "/"}), $.cookie("company_name", e.companyName, {path: "/"}), location.href = "/sample/sample_list.html") : location.href = "/my/center.html"
                            }
                        }) : location.href = "/my/account-connect.html") : $.alert({
                    title: "提醒",
                    content: e.message,
                    buttons: {
                        confirm: {
                            text: "确定", action: function () {
                                /oauthConnect/.test(location.href) && (location.href = "/my/account-connect.html")
                            }
                        }
                    }
                })
        },
        error: function () {
            $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "连接服务器失败!",
                buttons: {confirm: {text: "确定"}}
            })
        }
    })
}
function delete_img(e) {
    var t, a = e.parentNode.getAttribute("id"), o = /^public/.test(a) ? "#public_" : "#private_", n = a.charAt(a.length - 1), i = index - 1;
    if (n == i) t = "#" + a, $(t).css("background-image", "none"), $(t).css("display", "none"), index > 1 && index--; else if (n < i) {
        var s, r, l, p = 1;
        for (p = 1; p < i; p += 1)p >= n && (t = o + "imagePreview" + p, s = p + 1, r = o + "imagePreview" + s, l = $(t).css("background-image"), $(t).css("background-image", l));
        t = o + "imagePreview" + i, $(t).css("background-image", "none"), $(t).css("display", "none"), index--
    }
}
function img_showcase() {
    1 == $("＃img_showcase").selectedIndex ? ($(".private_img").hide(), $(".public_img").show(), pre_img = "#public_") : ($(".public_img").hide(), $(".private_img").show(), pre_img = "#private_")
}
function message_check(e) {
    $.ajax({
        type: "get", url: "/api/message?pageNo=1&pageSize=10", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            200 == e.code ? ($(".not_read_num").text(e.unreadCount), $(".not_read_num").show(), 0 == e.unreadCount && ($(".not_read_num").text(0), $(".dot_message").hide())) : 401 == e.code ? $.alert({
                        animation: "bottom",
                        closeAnimation: "scale",
                        title: "提醒!",
                        content: "登录信息失效,请重新登录!",
                        buttons: {
                            confirm: {
                                text: "确定", action: function () {
                                    $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                                }
                            }
                        }
                    }) : $.alert({
                        animation: "bottom",
                        closeAnimation: "scale",
                        title: "提醒!",
                        content: e.message,
                        buttons: {confirm: {text: "确定"}}
                    })
        }, error: function () {
            $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "连接服务器失败,请联系系统管理员！",
                buttons: {
                    confirm: {
                        text: "确定", confirm: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            })
        }
    })
}
function mes_check() {
    setTimeout(message_check(), 6e3)
}
function manager_check(e) {
    $.ajax({
        type: "get", url: "/api/companys/" + COMPANYID + "/manager", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (t) {
            AUTHMANGER = 200 === Number(t.code), getPayInfo(e), 401 == t.code ? $.alert({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "登录信息失效,请重新登录!",
                    buttons: {
                        confirm: {
                            text: "确定", action: function () {
                                $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                            }
                        }
                    }
                }) : 400 == t.code && $("#export_contacts").css("display", "none")
        }, error: function () {
        }
    })
}
function getLabels(e) {
    $.ajax({
        type: "get", url: "/api/lables/templates?companyId=" + COMPANYID, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (t) {
            if (200 == t.code) {
                var a = "", o = 0;
                for (o = 0; o < t.lables.length; o += 1)a = "<li id='" + t.lables[o].templateId + "' value='" + t.lables[o].templatePicKey + "'><a>" + t.lables[o].templateName + "</a></li>", $("#labelSelects").append(a), (0 == o || t.lables[o].isDefault) && ($("#defaultLabel").html(t.lables[o].templateName + " <span class='caret'></span>"), $("#labelPrint").attr("src", t.lables[o].templatePicKey), $("#labelPrint").attr("value", t.lables[o].templateId)), $("#" + t.lables[o].templateId).off().on("click", function (e) {
                    $("#defaultLabel").html($(e.target).html() + ' <span class="caret"></span>'), $("#labelPrint").attr("value", $(e.target).parent().attr("id")), $("#labelPrint").attr("src", $(e.target).parent().attr("value"))
                });
                e && e(t.lables)
            } else 401 == t.code && $.alert({
                animation: "bottom", closeAnimation: "scale", title: "提醒!", content: "登录信息失效,请重新登录!", buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {
                                path: "/"
                            }), location.href = "/login.html"
                        }
                    }
                }
            })
        }, error: function () {
        }
    })
}
function setLabel() {
    $.ajax({
        type: "POST",
        url: "/api/companys/" + COMPANYID + "/users/settings",
        dataType: "json",
        data: JSON.stringify({templateId: $("#labelPrint").attr("value")}),
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 == e.code || 401 == e.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            })
        },
        error: function () {
        }
    })
}
function isPDFPluginInstall(e) {
    if (!isIE()) {
        if (navigator.userAgent.indexOf("Firefox") >= 0)return void(2 == e ? ($.cookie("template_id", $("#labelPrint").attr("value"), {path: "/"}), window.open("../sample/print.html"), $.cookie("authorization") || request.abort()) : window.open("../sample/single_print.html"));
        if (navigator.plugins && navigator.plugins.length)for (var t = 0; t < navigator.plugins.length; t++) {
            var a = navigator.plugins[t].name;
            if ("Adobe Reader" == a || "Adobe PDF" == a || "Acrobat" == a || "Chrome PDF Viewer" == a || "Chromium PDF Viewer" == a || "Adobe Acrobat" == a || "WebKit 内建 PDF" == a) {
                if (2 == e) {
                    var o = [];
                    $("#selectedSamples").find("tr").each(function (e, t) {
                        var a = $(this), n = a.attr("data-id");
                        n && o.push(n)
                    }), $.cookie("sortArr", o.join(","), {path: "/"}), $.cookie("template_id", $("#labelPrint").attr("value"), {path: "/"}), window.open("../sample/print.html"), $.cookie("authorization") || request.abort()
                } else window.open("../sample/single_print.html");
                return !0
            }
        }
        return !1
    }
    var n = !1, i = null, s = null;
    try {
        s = new ActiveXObject("AcroPDF.PDF")
    } catch (r) {
        $.alert({
            animation: "bottom",
            closeAnimation: "scale",
            title: "提醒!",
            content: "你可能还没有安装pdf阅读器，为了方便你查看pdf文档，请下载安装！",
            buttons: {
                confirm: {
                    text: "确定", action: function () {
                        window.location.href = "https://get.adobe.com/cn/reader/"
                    }
                }, cancel: {text: "取消"}
            }
        })
    }
    if (!s)try {
        s = new ActiveXObject("PDF.PdfCtrl")
    } catch (r) {
    }
    if (!s)try {
        s = new ActiveXObject("Adobe Acrobat")
    } catch (r) {
    }
    if (!s)try {
        s = new ActiveXObject("Adobe PDF Plug-in")
    } catch (r) {
    }
    if (s)return n = !0, i = s.GetVersions().split(","), i = i[0].split("="), i = parseFloat(i[1]), 2 == e ? ($.cookie("template_id", $("#labelPrint").attr("value"), {path: "/"}), window.open("../sample/print.html"), $.cookie("authorization") || request.abort()) : window.open("../sample/single_print.html"), n
}
function isIE() {
    return !!(window.ActiveXObject || "ActiveXObject" in window)
}
function printLabelPdf() {
    isPDFPluginInstall(2)
}
function cancelCheck(e) {
    $.ajax({
        type: "delete", url: "/api/samples/" + e + "/selects", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            200 == e.code || 401 == e.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            })
        }, error: function () {
        }
    })
}
function getRecycles(e) {
    var t = $("#delete-sample-template").html(), a = Handlebars.compile(t), o = "";
    o = e ? "/api/samples/recycles?companyId=" + COMPANYID + "&pageNo=" + e + "&pageSize=10" : "/api/samples/recycles?companyId=" + COMPANYID + "&pageNo=1&pageSize=10", beginLoading(), $.ajax({
        type: "get",
        url: o,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            if (200 == e.code) {
                if (sampleArr = [], $("#checkAll").prop("checked", !1), 0 == e.pageCount && ($(".pagination_container").css("display", "none"), 0 == e.recordCount))return $(".samplesRow").css("display", "none"), $(".noSample").css("display", "block"), void endLoading();
                if (parseInt(e.pageCount) < parseInt(e.pageNo) && parseInt(e.pageCount) >= 1)return void getRecycles(e.pageCount);
                $("#recycle_list").empty();
                for (var t = 0; t < e.sampleRecycles.length; t += 1)$("#recycle_list").append(a(e.sampleRecycles[t])), e.sampleRecycles[t].samplePicKey ? $(".img_sample[value='" + e.sampleRecycles[t].sampleId + "']").prop("src", e.sampleRecycles[t].samplePicKey + "?x-oss-process=image/resize,m_fixed,h_48,w_48") : $(".img_sample[value='" + e.sampleRecycles[t].sampleId + "']").attr("src", "/images/sampleImg.png");
                $(".samplesRow").css("display", "block"), pagination_set(e.pageNo, e.pageCount, e.recordCount)
            } else responseNo200(Number(e.code), e.message);
            $(".recycle_icon").off().on("click", function (e) {
                restoreSample($(e.target).attr("value"))
            }), $(".recycle_icon").hover(function () {
                $(this).children().children("img").attr("src", "/images/recycle_blue.png")
            }, function () {
                $(this).children().children("img").attr("src", "/images/recycle_black.png")
            }), $(".delete_icon").off().on("click", function (e) {
                deleteSample($(e.target).attr("value"))
            }), $(".delete_icon").hover(function () {
                $(this).children().children("img").attr("src", "/images/delete_sample_blue.png")
            }, function () {
                $(this).children().children("img").attr("src", "/images/delete_sample_black.png")
            }), $("input[class='sampleCheck']").change(function (e) {
                if (e.stopPropagation(), e.preventDefault(), this.checked) {
                    sampleArr.indexOf(this.value) == -1 && sampleArr.push(parseInt(this.value)), inputArr = $("input[class='sampleCheck']");
                    for (var t = 0; t < inputArr.length && inputArr[t].checked; t += 1)t == inputArr.length - 1 && $("#checkAll").prop("checked", !0)
                } else {
                    $("#checkAll").prop("checked", !1);
                    for (var a = [], t = 0; t < sampleArr.length; t += 1)a.push(sampleArr[t]);
                    sampleArr = [];
                    for (var t = 0; t < a.length; t += 1)a[t] != this.value && sampleArr.push(parseInt(a[t]))
                }
            }), endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function deleteSample(e) {
    $.confirm({
        animation: "bottom",
        closeAnimation: "scale",
        title: "提醒",
        content: "彻底删除后将无法恢复，您确认要删除所选样品吗？",
        buttons: {
            confirm: {
                text: "确定", action: function () {
                    beginLoading(), $.ajax({
                        type: "delete",
                        url: "/api/samples/recycles",
                        dataType: "json",
                        data: JSON.stringify({companyId: parseInt(COMPANYID), sampleIds: e}),
                        beforeSend: function (e) {
                            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                            /*, $.cookie("authorization") || e.abort()*/
                        },
                        success: function (e) {
                            200 == e.code ? ($("#checkAll").prop("checked", !1), getRecycles(set_page_num)) : 401 == e.code && $.alert({
                                    animation: "bottom",
                                    closeAnimation: "scale",
                                    title: "提醒!",
                                    content: "登录信息失效,请重新登录!",
                                    buttons: {
                                        confirm: {
                                            text: "确定", action: function () {
                                                $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                                            }
                                        }
                                    }
                                })
                        },
                        error: function () {
                        }
                    })
                }
            }, cancel: {text: "取消"}
        }
    })
}
function restoreSample(e) {
    beginLoading(), $.ajax({
        type: "put",
        url: "/api/samples/restore",
        dataType: "json",
        data: JSON.stringify({companyId: parseInt(COMPANYID), sampleIds: e}),
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 == e.code ? ($("#checkAll").prop("checked", !1), getRecycles(set_page_num)) : 401 == e.code && $.alert({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "登录信息失效,请重新登录!",
                    buttons: {
                        confirm: {
                            text: "确定", action: function () {
                                $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                            }
                        }
                    }
                })
        },
        error: function () {
        }
    })
}
function clearRecycles() {
    beginLoading(), $.ajax({
        type: "delete",
        url: "/api/samples/recycles/all",
        dataType: "json",
        data: JSON.stringify({companyId: COMPANYID}),
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 == e.code ? getRecycles(set_page_num) : 401 == e.code && $.alert({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "登录信息失效,请重新登录!",
                    buttons: {
                        confirm: {
                            text: "确定", action: function () {
                                $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                            }
                        }
                    }
                })
        },
        error: function () {
        }
    })
}
function recycleSamples(e) {
    beginLoading(), $.ajax({
        type: "put",
        url: "/api/samples/restore",
        dataType: "json",
        data: JSON.stringify({companyId: parseInt(COMPANYID), sampleIds: e}),
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 == e.code ? (sampleArr = [], getRecycles()) : 401 == e.code ? $.alert({
                        animation: "bottom",
                        closeAnimation: "scale",
                        title: "提醒!",
                        content: "登录信息失效,请重新登录!",
                        buttons: {
                            confirm: {
                                text: "确定", action: function () {
                                    $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                                }
                            }
                        }
                    }) : getRecycles()
        },
        error: function () {
        }
    })
}
function SampleSelectAll(e, t, a) {
    var o = {
        type: e,
        url: "/api/samples/selects",
        data: {companyId: COMPANYID, sampleIds: t}
    }, n = g_return200CbObj(function (e) {
        if (a) {
            var t;
            t = e.num > 99 ? "99+" : e.num, e.num > 0 ? ($(".navselectnum").text(t), $.cookie("navselectnum", t, {path: "/"}), $(".navselectnum").show()) : ($(".navselectnum").css("display", "none"), $.cookie("navselectnum", "", {path: "/"}))
        } else $("input").prop("checked", !1), $("#selectedNum").text("0"), $(".selectedRow").hide(), $(".getCheckedNo").css("display", "block"), $(".getCheckedYes").css("display", "none"), $(".sample-operation").hide(), $(".navselectnum").css("display", "none"), $.cookie("navselectnum", "", {path: "/"})
    });
    sendAjax(o, n)
}
function getTags(e, t) {
    var a;
    beginLoading(), $.ajax({
        type: "get",
        url: "/api/tags/cloud",
        dataType: "json",
        data: {companyId: COMPANYID},
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            if (200 == e.code) {
                var o = $("#tags");
                o.empty();
                for (var n = 0; n < e.tags.length; n += 1)$(".tagCloud_row").show(), n >= 30 ? (30 === n && (a = '<li role=\'presentation\' style="cursor:pointer;"><a id="showMoreTags" style="color:#4a90e2;background-color:#FFF;border:1px solid #4a90e2;width:100px;display:inline-block;text-align:center;"> 显示更多 </a></li>', o.append(a)), a = '<li role=\'presentation\' class="moreTags" style="display:none" value =\'' + e.tags[n].tagId + "'><a href='#' value ='" + e.tags[n].tagId + "'>" + e.tags[n].name + " <span class='badge' value ='" + e.tags[n].tagId + "'>" + e.tags[n].count + "</span></a></li>") : a = "<li role='presentation' value ='" + e.tags[n].tagId + "'><a href='#' value ='" + e.tags[n].tagId + "'>" + e.tags[n].name + " <span class='badge' value ='" + e.tags[n].tagId + "'>" + e.tags[n].count + "</span></a></li>", o.append(a);
                a = '<li role=\'presentation\' class="moreTags" style="display:none"><a id="hideMoreTags" style="color:#4a90e2;background-color:#FFF;border:1px solid #4a90e2;cursor:pointer;width:100px;display:inline-block;text-align:center;"> 少量显示 </a></li>', o.append(a), t && t(e), $("#showMoreTags").on("click", function (e) {
                    function t(e) {
                        setTimeout(function () {
                            $(a[e]).css("display", "block")
                        }, 50 * e)
                    }

                    e.preventDefault(), e && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = !0;
                    var a = $(".moreTags");
                    $("#showMoreTags").parent().css("display", "none");
                    for (var o = 0; a && o < a.length; o++)t(o), o == a.length && t()
                }), $("#hideMoreTags").on("click", function (e) {
                    e.preventDefault(), e && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = !0;
                    $('li[style="display:block"]');
                    $(".moreTags").css("display", "none"), $("#hideMoreTags").parent().css("display", "none"), $("#showMoreTags").parent().css("display", "block")
                })
            } else 401 == e.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            });
            endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function searchTags(e, t, a) {
    !(t.length > 0) && (t = []);
    var o;
    beginLoading();
    var n = encodeURI("/api/tags/cloud?companyId=" + COMPANYID + "&limit=5&key=" + e);
    /tag_cloud/.test(location.href) && (n = encodeURI("/api/tags/cloud?companyId=" + COMPANYID + "&limit=30&key=" + e)), $.ajax({
        type: "get",
        url: n,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            if ($(".samplesRow").hide(), 200 == e.code) {
                var n = $("#tags");
                if (n.empty(), $(".noSample p").text("请选择你想要查看相关样品的标记"), 0 == e.tags.length) o = "<li role='presentation'><a href='#'>查找失败</a></li>", $(".noSample p").text("没有查找到相关的标记"), n.append(o), $(".noSample").css("display", "block"), $(".samplesRow").css("display", "none"); else {
                    for (var i = 0; i < e.tags.length; i += 1)t.includes("" + e.tags[i].tagId) || (o = "<li role='presentation' value ='" + e.tags[i].tagId + "'><a href='#' value ='" + e.tags[i].tagId + "'>" + e.tags[i].name + " <span class='badge' value ='" + e.tags[i].tagId + "'>" + e.tags[i].count + "</span></a></li>", n.append(o));
                    $(".noSample").css("display", "none"), $(".samplesRow").css("display", "block")
                }
                a && a(), endLoading()
            } else 401 == e.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            });
            endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function showMyShareSampleList(e, t, a, o) {
    var n = $("#sample-template").html(), i = Handlebars.compile(n);
    Handlebars.registerHelper("compare", function (e, t, a) {
        return e > t ? a.fn(this) : a.inverse(this)
    }), Handlebars.registerHelper("addKey", function (e) {
        return e + 1
    });
    var s, r = "";
    beginLoading(), t ? a ? (r = encodeURI("/api/samples/share/customer?companyId=" + COMPANYID + "&customerIds=" + t + "&key=" + a + "&pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType), $.cookie("customerIds", t, {path: "/"})) : (r = encodeURI("/api/samples/share/customer?companyId=" + COMPANYID + "&customerIds=" + t + "&pageNo=" + e + "&pageSize=10"), $.cookie("customerIds", t, {path: "/"})) : a ? (r = encodeURI("/api/samples/share/customer?companyId=" + COMPANYID + "&key=" + a + "&pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType), $.cookie("customerIds", t, {path: "/"})) : r = encodeURI("/api/samples/share/customer?companyId=" + COMPANYID + "&pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType), $.ajax({
        type: "get",
        url: r,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (n) {
            if ($(".samplesRow").hide(), 200 == n.code) {
                0 == n.pageCount && $(".pagination_container").css("display", "none"), n.pageCount < n.pageNo && n.pageCount >= 1 && showMyShareSampleList(n.pageCount, t, a, o), pre_page_num = e, $("#companyName").text($.cookie("company_name")), $("#sample_list").empty();
                for (var r = 0; r < n.share.length; r += 1)$(".samplesRow").show(), s = i(n.share[r]), $("#sample_list").append(s), n.share[r].samplePicKey ? $(".img_sample[value='" + n.share[r].sampleId + "']").prop("src", n.share[r].samplePicKey + "?x-oss-process=image/resize,m_fixed,h_48,w_48") : $(".img_sample[value='" + n.share[r].sampleId + "']").attr("src", "/images/sampleImg.png");
                0 == n.share.length ? ($(".samplesRow").css("display", "none"), $(".noSample").css("display", "block")) : $(".noSample").css("display", "none");
                for (var r = 5; r > total_page_num; r--)control_Id = "#set_page_" + r, $(control_Id).css("display", "none");
                total_page_num = n.pageCount, o || pagination_set(n.pageNo, n.pageCount, n.recordCount), $(".goSampleInfo").off().on("click", function (e) {
                    $.cookie("sample_id", $(e.target).attr("value"), {path: "/"}), window.open("../sample/sample.html")
                }), $(".edit_icon").off().on("click", function (e) {
                    e.stopPropagation(), $.cookie("tag_ids", ""), $.cookie("shareSample_id", $(e.target).attr("value"), {path: "/sample/"}), $.cookie("shareItem_no", $(e.target).attr("itemNo"), {path: "/sample/"}), $.cookie("shareSample_name", $(e.target).attr("sample"), {path: "/sample/"}), location.href = "../sample/MyShare_details.html"
                }), $(".edit_icon").hover(function () {
                    $(this).children().children("img").attr("src", "/images/clock_blue.png")
                }, function () {
                    $(this).children().children("img").attr("src", "/images/clock.png")
                }), $(".img_sample").hover(function (e) {
                    "/images/sampleImg.png" != $(e.target).attr("src") && $("body").width() > 767 && ($(e.target).after('<div class="image_hover_box"><div class="select_img"><img style="height:240px;width:240px" src="' + $(e.target).attr("src") + '"></div></div>'), $(".image_hover_box").css("top", $(e.target).offset().top - $(document).scrollTop()), $(".image_hover_box").css("left", $(e.target).offset().left - $(document).scrollLeft()), $(".image_hover_box img").attr("src", $(e.target).attr("src").split("?x-oss")[0] + "?x-oss-process=image/resize,m_fixed,h_240,w_240"))
                }, function () {
                    $(".image_hover_box").remove()
                }), endLoading()
            } else endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function showMyShareSampleRecordList(e, t, a, o) {
    var n, i = $("#sample-template").html(), s = Handlebars.compile(i), r = "";
    beginLoading(), r = t ? encodeURI("/api/samples/" + $.cookie("shareSample_id") + "/share/customer/record?customerId=" + t + "&pageNo=" + e + "&pageSize=10") : a ? encodeURI("/api/samples/" + $.cookie("shareSample_id") + "/share/customer/record?pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType) : encodeURI("/api/samples/" + $.cookie("shareSample_id") + "/share/customer/record?pageNo=" + e + "&pageSize=10"), $.ajax({
        type: "get",
        url: r,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (i) {
            if ($(".samplesRow").hide(), 200 == i.code) {
                $("#theSampleId").text($.cookie("shareItem_no") + "记录"), 0 == i.pageCount && $(".pagination_container").css("display", "none"), i.pageCount < i.pageNo && i.pageCount >= 1 && showMyShareSampleRecordList(i.pageCount, t, a, o), pre_page_num = e, $("#companyName").text($.cookie("company_name")), $("#sample_list").empty();
                for (var r = 0; r < i.record.length; r += 1)i.record[r].name = $.cookie("shareSample_name"), $(".samplesRow").show(), n = s(i.record[r]), $("#sample_list").append(n);
                0 == i.record.length ? ($(".samplesRow").css("display", "none"), $(".noSample").css("display", "block")) : $(".noSample").css("display", "none");
                for (var r = 5; r > total_page_num; r--)control_Id = "#set_page_" + r, $(control_Id).css("display", "none");
                total_page_num = i.pageCount, o || pagination_set(i.pageNo, i.pageCount, i.recordCount), $(".img_sample").hover(function (e) {
                    "/images/sampleImg.png" != $(e.target).attr("src") && $("body").width() > 767 && ($(e.target).after('<div class="image_hover_box"><div class="select_img"><img style="height:240px;width:240px" src="' + $(e.target).attr("src") + '"></div></div>'), $(".image_hover_box").css("top", $(e.target).offset().top - $(document).scrollTop()), $(".image_hover_box").css("left", $(e.target).offset().left - $(document).scrollLeft()), $(".image_hover_box img").attr("src", $(e.target).attr("src").split("?x-oss")[0] + "?x-oss-process=image/resize,m_fixed,h_240,w_240"))
                }, function () {
                    $(".image_hover_box").remove()
                }), endLoading()
            } else endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function showShareMySampleList(e, t, a, o) {
    var n, i = $("#sample-template").html(), s = Handlebars.compile(i), r = "";
    beginLoading(), r = a ? encodeURI("/api/samples/share/supplier?pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType + "&key=" + a) : encodeURI("/api/samples/share/supplier?pageNo=" + e + "&pageSize=10&searchType=" + APP.sampleListSearchType), $.ajax({
        type: "get",
        url: r,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (i) {
            if ($(".samplesRow").hide(), 200 == i.code) {
                0 == i.pageCount && $(".pagination_container").css("display", "none"), i.pageCount < i.pageNo && i.pageCount >= 1 && showShareMySampleList(i.pageCount, t, a, o), pre_page_num = e, $("#sample_list").empty();
                for (var r = 0; r < i.share.length; r += 1)$(".samplesRow").show(), i.share.forEach(function (e) {
                    e.attributes[6] = void 0, delete e.attributes[6]
                }), n = s(i.share[r]), $("#sample_list").append(n), i.share[r].samplePicKey ? $(".img_sample[value='" + i.share[r].sampleId + "']").prop("src", i.share[r].samplePicKey + "?x-oss-process=image/resize,m_fixed,h_48,w_48") : $(".img_sample[value='" + i.share[r].sampleId + "']").attr("src", "/images/sampleImg.png");
                0 == i.share.length ? ($(".samplesRow").css("display", "none"), $(".noSample").css("display", "block")) : $(".noSample").css("display", "none");
                for (var r = 5; r > total_page_num; r--)control_Id = "#set_page_" + r, $(control_Id).css("display", "none");
                total_page_num = i.pageCount, o || pagination_set(i.pageNo, i.pageCount, i.recordCount), $(".goSampleInfo").off().on("click", function (e) {
                    window.open("share_singal.html?publicKey=" + $(e.target).parents("tr").attr("data-key"))
                }), $(".edit_icon").off().on("click", function (e) {
                    e.stopPropagation(), $.cookie("shareSample_id", $(e.target).attr("value"), {path: "/sample/"}), $.cookie("shareSample_name", $(e.target).attr("sample"), {path: "/sample/"}), location.href = "Share_detail.html"
                }), $(".edit_icon").hover(function () {
                    $(this).children().children("img").attr("src", "/images/clock_blue.png")
                }, function () {
                    $(this).children().children("img").attr("src", "/images/clock.png")
                }), $(".img_sample").hover(function (e) {
                    "/images/sampleImg.png" != $(e.target).attr("src") && $("body").width() > 767 && ($(e.target).after('<div class="image_hover_box"><div class="select_img"><img style="height:240px;width:240px" src="' + $(e.target).attr("src") + '"></div></div>'), $(".image_hover_box").css("top", $(e.target).offset().top - $(document).scrollTop()), $(".image_hover_box").css("left", $(e.target).offset().left - $(document).scrollLeft()), $(".image_hover_box img").attr("src", $(e.target).attr("src").split("?x-oss")[0] + "?x-oss-process=image/resize,m_fixed,h_240,w_240"))
                }, function () {
                    $(".image_hover_box").remove()
                }), endLoading()
            } else responseNo200(Number(i.code), i.message), endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function showShareMySampleRecordList(e, t, a, o) {
    var n, i = $("#sample-template").html(), s = Handlebars.compile(i), r = "";
    beginLoading(), r = encodeURI("/api/samples/" + $.cookie("shareSample_id") + "/share/supplier/record?pageNo=" + e + "&pageSize=10"), $.ajax({
        type: "get",
        url: r,
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (i) {
            if ($(".samplesRow").hide(), 200 == i.code) {
                $("#theSampleId").text(i.record[0].itemNo + "记录"), 0 == i.pageCount && $(".pagination_container").css("display", "none"), i.pageCount < i.pageNo && i.pageCount >= 1 && showShareMySampleRecordList(i.pageCount, t, a, o), pre_page_num = e, $("#companyName").text($.cookie("company_name")), $("#sample_list").empty();
                for (var r = 0; r < i.record.length; r += 1)$(".samplesRow").show(), i.record[r].shareSample_name = $.cookie("shareSample_name"), n = s(i.record[r]), $("#sample_list").append(n);
                0 == i.record.length ? ($(".samplesRow").css("display", "none"), $(".noSample").css("display", "block")) : $(".noSample").css("display", "none");
                for (var r = 5; r > total_page_num; r--)control_Id = "#set_page_" + r, $(control_Id).css("display", "none");
                total_page_num = i.pageCount, o || pagination_set(i.pageNo, i.pageCount, i.recordCount), $(".img_sample").hover(function (e) {
                    "/images/sampleImg.png" != $(e.target).attr("src") && $("body").width() > 767 && ($(e.target).after('<div class="image_hover_box"><div class="select_img"><img style="height:240px;width:240px" src="' + $(e.target).attr("src") + '"></div></div>'), $(".image_hover_box").css("top", $(e.target).offset().top - $(document).scrollTop()), $(".image_hover_box").css("left", $(e.target).offset().left - $(document).scrollLeft()), $(".image_hover_box img").attr("src", $(e.target).attr("src").split("?x-oss")[0] + "?x-oss-process=image/resize,m_fixed,h_240,w_240"))
                }, function () {
                    $(".image_hover_box").remove()
                }), endLoading()
            } else endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function delete_sample(e, t, a, o, n) {
    $.ajax({
        type: "delete", url: "/api/samples/" + e, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            200 == e.code ? (t ? showSampleList(t, a, o, n) : location.href = "sample_list.html", $(".active .badge").text(parseInt($(".active .badge").text()) - 1), "0" == $(".active .badge").text() && $(".active").remove()) : responseNo200(Number(e.code), e.message)
        }, error: function () {
        }
    })
}
function showSampleList(e, t, a, o, n, i, s, r, l, p, c, d) {
    var u = sessionStorage.getItem("order_by_type"), m = sessionStorage.getItem("useHistory");
    Number(m) ? (5 === Number(n) && sessionStorage.setItem("order_by_type", 5), 6 === Number(n) && sessionStorage.setItem("order_by_type", 6), 7 === Number(n) && sessionStorage.setItem("order_by_type", 7), 8 === Number(n) && sessionStorage.setItem("order_by_type", 8), 9 === Number(n) && sessionStorage.setItem("order_by_type", 9), 10 === Number(n) && sessionStorage.setItem("order_by_type", 10), e = sessionStorage.getItem("pageNum") ? sessionStorage.getItem("pageNum") : 1) : sessionStorage.setItem("order_by_type", n ? n : ""), sessionStorage.setItem("useHistory", 0), 6480 === Number(COMPANYID) && (n = 6), n || (n = u && Number(m) ? u : "");
    var i = $.cookie("widthMin");
    if ("undefined" == typeof i)var i = "";
    var s = $.cookie("widthMax");
    if ("undefined" == typeof s)var s = "";
    var r = $.cookie("weightMin");
    if ("undefined" == typeof r)var r = "";
    var l = $.cookie("weightMax");
    if ("undefined" == typeof l)var l = "";
    var p = $.cookie("havePics");
    if ("undefined" == typeof p)var p = "";
    var d = $.cookie("haveRice");
    if ("undefined" == typeof d)var d = "";
    var c = $.cookie("isPublished");
    if ("undefined" == typeof c)var c = "";
    var _, h = $("#sample-template").html(), g = Handlebars.compile(h), f = [], v = [], y = "", b = $("#search_map"), I = 0, S = 0, k = 0;
    beginLoading(), $.ajax({
        type: "get", url: "/api/samples/selects?companyId=" + COMPANYID, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (u) {
            if (200 == u.code) {
                for (var m = u.sampleSelects.length, h = 0; h < m; h += 1)f.push(u.sampleSelects[h].sampleId);
                m > 0 ? ($(".navselectnum").text(m > 99 ? "99+" : m), $.cookie("navselectnum", m, {path: "/"}), $(".navselectnum").show()) : ($(".navselectnum").css("display", "none"), $.cookie("navselectnum", "", {path: "/"}))
            } else responseNo200(Number(u.code), u.message);
            p && (p = "&havePics=" + p), c && (c = "&isPublished=" + c), d && (d = "&haveMeterSamples=" + d), t ? (y = encodeURI("/api/samples?companyId=" + COMPANYID + "&tagIds=" + t + "&pageNo=" + e + "&nature=0&pageSize=10&orderByType=" + n + "&widthMin=" + i + "&widthMax=" + s + "&weightMin=" + r + "&weightMax=" + l + p + c + d), $.cookie("tag_id", t, {path: "/"})) : y = a ? "/api/samples?companyId=" + COMPANYID + "&key=" + encodeURIComponent(a) + "&pageNo=" + e + "&nature=0&pageSize=10&orderByType=" + n + "&searchType=" + APP.sampleListSearchType + "&widthMin=" + i + "&widthMax=" + s + "&weightMin=" + r + "&weightMax=" + l + p + c + d : encodeURI("/api/samples?companyId=" + COMPANYID + "&pageNo=" + e + "&nature=0&pageSize=10&orderByType=" + n + "&searchType=" + APP.sampleListSearchType + "&widthMin=" + i + "&widthMax=" + s + "&weightMin=" + r + "&weightMax=" + l + p + c + d), $.ajax({
                type: "get", url: y, dataType: "json", beforeSend: function (e) {
                    e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                    /*, $.cookie("authorization") || e.abort()*/
                }, success: function (p) {
                    if ($(".panel-page").css("display", "none"),
                            $(".samplesRow").hide(),
                        200 == p.code) {
                        for ($("#search_map").attr("data-searchMap", 0),
                                 $(".th_default").remove(),
                                 c = 0; c < p.sampleListParams.length; c++)
                            "门幅" == p.sampleListParams[c].prettyName ? $(".th_control").before('<th class="th_default"><div class="dropdown"><span id="sortWidth" style="cursor:pointer;">' + p.sampleListParams[c].prettyName + '<span class="sort-icon"><i class="top"></i><i class="bottom"></i></span></span><button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="i-icon i-funnel-icon"></i></button><ul class="dropdown-menu" aria-labelledby="dLabel"><li><input type="text" class="widthMin" id="widthMin" value="' + i + '" >-<input type="text" class="widthMin" id="widthMax" value="' + s + '" ><br><button id="searchWidth">确定</button><button id="searchWidthcancel">取消</button></li></ul></div></th>') : "克重" == p.sampleListParams[c].prettyName ? $(".th_control").before('<th class="th_default"><div class="dropdown"><span id="sortWeight" style="cursor:pointer;">' + p.sampleListParams[c].prettyName + '<span class="sort-icon"><i class="top"></i><i class="bottom"></i></span></span><button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="i-icon i-funnel-icon"></i></button><ul class="dropdown-menu" aria-labelledby="dLabel"><li><input type="text" class="widthMin" id="weightMin" value="' + r + '" >-<input type="text" class="widthMin" id="weightMax" value="' + l + '" ><br><button id="searchWeight">确定</button><button id="searchWeightcancel">取消</button></li></ul></div></th>') : "编号" == p.sampleListParams[c].prettyName ? $(".th_control").before('<th class="th_default" style="position: relative;" id="sortitemNo">' + p.sampleListParams[c].prettyName + ' <span class="dot-top"></span><span class="dot-bottom"></span></th>') : "发布状态" == p.sampleListParams[c].prettyName ? $(".th_control").before('<th class="th_default"><div class="dropdown">发布状态<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="i-icon i-funnel-icon"></i></button><ul class="dropdown-menu img-select" id="publish_select" aria-labelledby="dLabel"><li data-value="">全部</li><li data-value="1">已发布</li><li data-value="0">未发布</li></ul></div></th>') : "米样数量" == p.sampleListParams[c].prettyName ? $(".th_control").before('<th class="th_default"><div class="dropdown">米样数量<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="i-icon i-funnel-icon"></i></button><ul class="dropdown-menu img-select" id="rice_sample" aria-labelledby="dLabel"><li data-value="">全部</li><li data-value="1">有米样</li><li data-value="0">无米样</li></ul></div></th>') : $(".th_control").before('<th class="th_default">' + p.sampleListParams[c].prettyName + "</th>");
                        p.pageCount < p.pageNo && p.pageCount >= 1 && showSampleList(p.pageCount, t, a, o),
                            pre_page_num = e,
                            $("#companyName").text($.cookie("company_name")),
                            $("#sample_list").empty();
                        for (var c = 0, d = 0; c < p.samples.length; c += 1) {
                            if ($(".samplesRow").show(),
                                /sample_list.html/.test(location.href) || /tag_cloud.html/.test(location.href)) {
                                for (_ = "<tr value=" + p.samples[c].sampleId + ">",
                                         _ += '    <td class="label hidden-xs">',
                                         _ += "        <label>",
                                         _ += '            <input type="checkbox" class="sampleCheck" value=' + p.samples[c].sampleId + ">",
                                         _ += "        </label>",
                                         _ += "    </td>",
                                         _ += '    <td class="goSampleInfo td_fixed img is-published-img" value="' + p.samples[c].sampleId + '" id="sampleParamsImg">',
                                     1 === p.samples[c].isPublished && (_ += '        <span class="published-img" value="' + p.samples[c].sampleId + '" alt="" data-toggle="modal" data-target="sampleInfo"></span>'),
                                         _ += '        <img class="img_sample img-responsive" src="' + p.samples[c].samplePicKey + '?x-oss-process=image/resize,m_fixed,h_48,w_48" value="' + p.samples[c].sampleId + '" alt="" data-toggle="modal" data-target="sampleInfo">',
                                         _ += "    </td>",
                                         d = 0; d < p.sampleListParams.length; d++) {
                                    var u = p.sampleListParams[d].attrId;
                                    void 0 !== p.samples[c][u] ? ("isPublished" === u && (p.samples[c][u] = 1 === p.samples[c][u] ? "已发布" : "未发布"),
                                            _ += '<td class="goSampleInfo hidden-xs sample_params_default" value="' + p.samples[c].sampleId + '">' + (p.samples[c][u] || "") + "</td>") : _ += p.samples[c].attributes && p.samples[c].attributes[u] ? '<td class="goSampleInfo hidden-xs sample_params_default"  value="' + p.samples[c].sampleId + '">' + p.samples[c].attributes[u] + "</td>" : '<td class="goSampleInfo hidden-xs sample_params_default" value="' + p.samples[c].sampleId + '"></td>'
                                }
                                _ += '    <td class="hidden-sm hidden-md hidden-lg">',
                                    _ += '        <div class="sample_info_at_mobile_line">',
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_1" value="' + p.samples[c].sampleId + '">' + p.samples[c].itemNo + "</span>",
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile" value="' + p.samples[c].sampleId + '">&nbsp;/&nbsp;</span>',
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_2" value="' + p.samples[c].sampleId + '">' + p.samples[c].name + "</span>",
                                    _ += "        </div>",
                                    _ += '        <div class="sample_info_at_mobile_line">',
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_3" value="' + p.samples[c].sampleId + '">成分:' + p.samples[c].component + "</span>",
                                    _ += "        </div>",
                                    _ += '        <div class="sample_info_at_mobile_line">',
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_4" value="' + p.samples[c].sampleId + '">门幅:' + p.samples[c].width + "</span>",
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile" value="' + p.samples[c].sampleId + '">&nbsp;/&nbsp;</span>',
                                    _ += '            <span class="goSampleInfo sample_info_at_mobile sample_info_at_mobile_5" value="' + p.samples[c].sampleId + '">克重:' + p.samples[c].weight + "</span>",
                                    _ += "        </div>",
                                    _ += '        <div style="position:absolute;top:0;right:0;heigh:50%;width:80px;text-align:center;padding:15% 0;"value="' + p.samples[c].sampleId + '" class="moreAtMobile"><img src="/images/more.png" value="' + p.samples[c].sampleId + '"></div>',
                                    _ += "    </td>",
                                    _ += '    <td class="hidden-xs">',
                                    _ += '        <div class="edit_box display-none">',
                                    _ += '            <div class="operation edit_icon display-none auth_edit_sample" value="' + p.samples[c].sampleId + '">',
                                    _ += '                <div class="img_icon hint--top-right" value="' + p.samples[c].sampleId + '" aria-label="编辑">',
                                    _ += '                    <img src="/images/edit_black.png" alt="" value="' + p.samples[c].sampleId + '">',
                                    _ += "                </div>",
                                    _ += '                <!-- <div class="text_icon" value="' + p.samples[c].sampleId + '"></div> -->',
                                    _ += "            </div>",
                                    _ += '            <div class="operation copy_icon display-none auth_add_sample" value="' + p.samples[c].sampleId + '">',
                                    _ += '                <div class="img_icon hint--top-right" value="' + p.samples[c].sampleId + '" aria-label="复制">',
                                    _ += '                    <img src="/images/copy_black.png" alt="" value="' + p.samples[c].sampleId + '" >',
                                    _ += "                </div>",
                                    _ += '                <!-- <div class="text_icon copy_sample" value="' + p.samples[c].sampleId + '" id="copy_sample"></div> -->',
                                    _ += "            </div>",
                                    _ += '            <div class="operation print_icon auth_print display-none" value="' + p.samples[c].sampleId + '">',
                                    _ += '                <div class="img_icon hint--top-right" value="' + p.samples[c].sampleId + '" aria-label="打印">',
                                    _ += '                    <img src="/images/print_black.png" alt="" value="' + p.samples[c].sampleId + '" >',
                                    _ += "                </div>",
                                    _ += '                <!-- <div class="text_icon" value="' + p.samples[c].sampleId + '"></div> -->',
                                    _ += "            </div>",
                                    _ += '            <div class="dropdown operation display-none">',
                                    _ += '                <div class=" more_icon dropdown-toggle" data-toggle="dropdown">',
                                    _ += '                    <div class="img_icon hint--top-right"  aria-label="更多操作">',
                                    _ += '                        <img src="/images/more_black.png" alt="">',
                                    _ += "                    </div>",
                                    _ += '                    <div class="text_icon"></div>',
                                    _ += "                </div>",
                                    _ += '                <ul class="dropdown-menu dropdown_menu" role="menu">',
                                    _ += '                    <li class="share_icon display-none auth_share" value="' + p.samples[c].sampleId + '" data-item="' + p.samples[c].itemNo + '" data-toggle="modal" data-target="#2Dcode"><a  value="' + p.samples[c].sampleId + '">分享</a></li>',
                                    _ += p.samples[c].topType ? '<li class="top_sample_box auth_top" value="' + p.samples[c].sampleId + '"><a class="top_sample" data-topStatic="0" value="' + p.samples[c].sampleId + '">取消置顶</a></li>' : '<li class="top_sample_box auth_top" value="' + p.samples[c].sampleId + '"><a class="top_sample" data-topStatic="1" value="' + p.samples[c].sampleId + '">置顶</a></li>',
                                    _ += p.samples[c].hot ? '<li class="top_sample_box auth_top" value="' + p.samples[c].sampleId + '"><a class="hot_sample" data-topStatic="0" value="' + p.samples[c].sampleId + '">取消热门</a></li>' : '<li class="top_sample_box auth_top" value="' + p.samples[c].sampleId + '"><a class="hot_sample" data-topStatic="1" value="' + p.samples[c].sampleId + '">热门</a></li>',
                                    _ += '                    <li class="delete_sample display-none auth_del" value="' + p.samples[c].sampleId + '"><a class="delete_sample" value="' + p.samples[c].sampleId + '">删除</a></li>',
                                    _ += "                </ul>",
                                    _ += "            </div>",
                                    _ += "        </div>",
                                    _ += "    </td>",
                                    _ += "</tr>"
                            } else
                                _ = g(p.samples[c]);
                            $("#sample_list").append(_),
                                $("#set_show_pageSize").val(p.pageSize),
                                p.samples[c].samplePicKey ? $(".img_sample[value='" + p.samples[c].sampleId + "']").prop("src", p.samples[c].samplePicKey + "?x-oss-process=image/resize,m_fixed,h_48,w_48") : $(".img_sample[value='" + p.samples[c].sampleId + "']").attr("src", "/images/sampleImg.png"),
                            f.indexOf(p.samples[c].sampleId) != -1 && ($("input[value='" + p.samples[c].sampleId + "']").prop("checked", "checked"),
                            /_sample/.test(location.href) && ($(".select_icon .text_icon[value='" + p.samples[c].sampleId + "']").text("取消选中"),
                                $(".select_icon .text_icon[value='" + p.samples[c].sampleId + "']").css("color", "#4a4a4a"),
                                $(".select_icon img[value='" + p.samples[c].sampleId + "']").attr("src", "/images/cancel_black.png")))
                        }
                        "undefined" != typeof authControlAjaxBtn && authControlAjaxBtn(AUTHDATA),
                            0 == p.samples.length ? ($(".pagination_container").css("display", "none"),
                                    $(".samplesRow").css("display", "block"),
                                    $(".noSample").css("display", "block")) : $(".noSample").css("display", "none"),
                            v = $('input[class="sampleCheck"]');
                        for (var c = 0; c < v.length; c += 1) {
                            if (!v[c].checked) {
                                $("#checkAll").prop("checked", !1);
                                break
                            }
                            c == v.length - 1 && $("#checkAll").prop("checked", !0)
                        }
                        for (var c = 5; c > total_page_num; c--)
                            control_Id = "#set_page_" + c,
                                $(control_Id).css("display", "none");
                        total_page_num = p.pageCount,
                        o || pagination_set(p.pageNo, p.pageCount, p.recordCount),
                            $("#searchWidth").off().on("click", function(e) {
                                if ("" == $("#widthMin").val())
                                    var i = $("#widthMin").val();
                                else
                                    var i = parseFloat($("#widthMin").val());
                                if ("" == $("#widthMax").val())
                                    var s = $("#widthMax").val();
                                else
                                    var s = parseFloat($("#widthMax").val());
                                if ($.cookie("widthMin", i),
                                        $.cookie("widthMax", s),
                                    isNaN(i) || isNaN(s)) {
                                    var i = ""
                                        , s = "";
                                    $.cookie("widthMin", i),
                                        $.cookie("widthMax", s),
                                        $.alert({
                                            animation: "bottom",
                                            closeAnimation: "scale",
                                            title: "提醒!",
                                            content: "输入错误！请输入数字",
                                            buttons: {
                                                confirm: {
                                                    text: "确定"
                                                }
                                            }
                                        })
                                } else
                                    showSampleList(1, t, a, o, n, i, s, r, l)
                            }),
                            $("#searchWidthcancel").off().on("click", function(e) {
                                var i = ""
                                    , s = "";
                                $.cookie("widthMin", ""),
                                    $.cookie("widthMax", ""),
                                    showSampleList(1, t, a, o, n, i, s, r, l)
                            }),
                            $("#searchWeightcancel").off().on("click", function(e) {
                                var r = ""
                                    , l = "";
                                $.cookie("weightMin", ""),
                                    $.cookie("weightMax", ""),
                                    showSampleList(1, t, a, o, n, i, s, r, l)
                            }),
                            $("#searchWeight").off().on("click", function(e) {
                                if ("" == $("#weightMin").val())
                                    var r = $("#weightMin").val();
                                else
                                    var r = parseFloat($("#weightMin").val());
                                if ("" == $("#weightMax").val())
                                    var l = $("#weightMax").val();
                                else
                                    var l = parseFloat($("#weightMax").val());
                                if ($.cookie("weightMin", r),
                                        $.cookie("weightMax", l),
                                    isNaN(r) || isNaN(l)) {
                                    var r = ""
                                        , l = "";
                                    $.cookie("weightMin", r),
                                        $.cookie("weightMax", l),
                                        $.alert({
                                            animation: "bottom",
                                            closeAnimation: "scale",
                                            title: "提醒!",
                                            content: "输入错误！请输入数字",
                                            buttons: {
                                                confirm: {
                                                    text: "确定"
                                                }
                                            }
                                        })
                                } else
                                    showSampleList(1, t, a, o, n, i, s, r, l)
                            }),
                            $("#img_select").off().on("click", "li", function() {
                                var e = $(this);
                                e.hasClass("active") || ($("#img_select").find("li").removeClass("active"),
                                    e.addClass("active"),
                                    $.cookie("havePics", e.attr("data-value")),
                                    showSampleList(1, t, a, o, n, i, s, r, l))
                            }),
                            $("#rice_sample").off().on("click", "li", function() {
                                var e = $(this)
                                    , p = e.attr("data-value");
                                e.hasClass("active") || ($("#rice_sample").find("li").removeClass("active"),
                                    e.addClass("active"),
                                    $.cookie("haveRice", p),
                                    showSampleList(1, t, a, o, n, i, s, r, l))
                            }),
                            $("#publish_select").off().on("click", "li", function() {
                                var e = $(this);
                                e.hasClass("active") || ($("#publish_select").find("li").removeClass("active"),
                                    e.addClass("active"),
                                    $.cookie("isPublished", e.attr("data-value")),
                                    showSampleList(1, t, a, o, n, i, s, r, l))
                            }),
                        5 === Number(n) && ($(".dot-top").css("border-color", "#5395e3").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                            $(".dot-bottom").css("border-color", "#000").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                            sessionStorage.setItem("useHistory", 1)),
                        6 === Number(n) && ($(".dot-bottom").css("border-color", "#5395e3").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                            $(".dot-top").css("border-color", "#000").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                            sessionStorage.setItem("useHistory", 1)),
                        7 === Number(n) && ($("#sortWidth").find(".top").addClass("active"),
                            sessionStorage.setItem("useHistory", 1)),
                        8 === Number(n) && ($("#sortWidth").find(".bottom").addClass("active"),
                            sessionStorage.setItem("useHistory", 1)),
                        9 === Number(n) && ($("#sortWeight").find(".top").addClass("active"),
                            sessionStorage.setItem("useHistory", 1)),
                        10 === Number(n) && ($("#sortWeight").find(".bottom").addClass("active"),
                            sessionStorage.setItem("useHistory", 1)),
                            $("#sortitemNo").off().on("click", function(n) {
                                if (Number(b.attr("data-searchMap"))) {
                                    var i = $(this)
                                        , s = i.find(".dot-top")
                                        , r = i.find(".dot-bottom");
                                    I ? (s.css("border-color", "#5395e3").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                                            r.css("border-color", "#000").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                                            I = 0,
                                            $("body #advanced_search_begin").trigger("click", 5)) : (r.css("border-color", "#5395e3").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                                            s.css("border-color", "#000").css("border-left-color", "transparent").css("border-right-color", "transparent"),
                                            I = 1,
                                            $("body #advanced_search_begin").trigger("click", 6))
                                } else {
                                    var l = parseFloat($.cookie("sortitemNo")) + 1;
                                    if ($.cookie("sortitemNo", l),
                                        $.cookie("sortitemNo") % 2 == 0) {
                                        var p = 5;
                                        showSampleList(e, t, a, o, p)
                                    } else {
                                        var p = 6;
                                        showSampleList(e, t, a, o, p)
                                    }
                                }
                            }),
                            $("#sortWidth").off().on("click", function() {
                                if (Number(b.attr("data-searchMap"))) {
                                    var i = $(this)
                                        , s = i.find(".top")
                                        , r = i.find(".bottom");
                                    S ? (r.removeClass("active"),
                                            s.addClass("active"),
                                            S = 0,
                                            $("body #advanced_search_begin").trigger("click", 7)) : (s.removeClass("active"),
                                            r.addClass("active"),
                                            S = 1,
                                            $("body #advanced_search_begin").trigger("click", 8))
                                } else {
                                    var l = 8;
                                    8 === Number(n) && (l = 7),
                                        showSampleList(e, t, a, o, l)
                                }
                            }),
                            $("#sortWeight").off().on("click", function() {
                                if (Number(b.attr("data-searchMap"))) {
                                    var i = $(this)
                                        , s = i.find(".top")
                                        , r = i.find(".bottom");
                                    k ? (r.removeClass("active"),
                                            s.addClass("active"),
                                            k = 0,
                                            $("body #advanced_search_begin").trigger("click", 9)) : (s.removeClass("active"),
                                            r.addClass("active"),
                                            k = 1,
                                            $("body #advanced_search_begin").trigger("click", 10))
                                } else {
                                    var l = 10;
                                    10 === Number(n) && (l = 9),
                                        showSampleList(e, t, a, o, l)
                                }
                            }),
                            $(".moreAtMobile").on("click", function(e) {
                                var t = $(e.target).attr("value");
                                if ($(e.target).hasClass("active") || $(e.target).parent().hasClass("active"))
                                    return $("#moreAtMobile").remove(),
                                        void $(".moreAtMobile").removeClass("active");
                                $("#moreAtMobile").remove(),
                                    $(".moreAtMobile").removeClass("active"),
                                    $.cookie("sample_id", t, {
                                        path: "/"
                                    }),
                                    $(".moreAtMobile[value=" + t + "]").addClass("active");
                                var a = '<tr id="moreAtMobile" class="visible-xs" style="position:relative;height:64px;border-bottom: none;width:100%;">';
                                a += '   <td style="position:absolute;width:100vw;min-height:60px !important;height:64px;border-bottom:1px solid #CCC;background-color:#FCF0FD">',
                                    a += '       <div style="float:left;width:25%;text-align: center;height:100%;padding:10px 0;"><a href="../modelweix.html"><img src="/images/edit_black.png" style="margin-top:-6px;margin-bottom:-8px;"><br><span style="font-size:14px;color:#666;margin-top:-12px;">编辑</span></a></div>',
                                    a += '       <div style="float:left;width:25%;text-align: center;height:100%;padding:10px 0;"><a href="../modelweix.html"><img src="/images/copy_black.png" style="margin-top:-6px;margin-bottom:-8px;"><br><span style="font-size:14px;color:#666;margin-top:-12px;">复制</span></a></div>',
                                    a += '       <div style="float:left;width:25%;text-align: center;height:100%;padding:10px 0;"><a  href="../modelweix.html"><img src="/images/share_black.png" style="margin-top:-6px;margin-bottom:-8px;"  value="' + t + '"><br><span style="font-size:14px;color:#666;margin-top:-12px;" value="' + t + '">分享</span></a></div>',
                                    a += '       <div style="float:left;width:25%;text-align: center;height:100%;padding:10px 0;"><a  href="../modelweix.html"><img src="/images/delete_black.png"  value="' + t + '"><br  value="' + t + '"><span value="' + t + '" style="font-size:14px;color:#666;">删除</span></a></div>',
                                    a += "   </td>",
                                    a += "</tr>",
                                    $("tr[value=" + t + "]").after(a),
                                    $(".share_icon_at_mobile").on("click", function(e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            $.ajax({
                                                url: "/api/samples/" + $(e.target).attr("value") + "/share",
                                                type: "post",
                                                dataType: "json",
                                                data: JSON.stringify({}),
                                                beforeSend: function(e) {
                                                    e.setRequestHeader("Content-Type", "application/json"),
                                                        e.setRequestHeader("authorization", $.cookie("authorization")),
                                                    $.cookie("authorization") || e.abort()
                                                },
                                                success: function(e) {
                                                    if (200 == e.code) {
                                                        var t = "https://" + location.href.split("//").pop().split("/").shift() + "/sample/share_singal.html?shareKey=" + e.shareKey + "&companyName=" + encodeURI($.cookie("company_name"));
                                                        location.href = t
                                                    }
                                                },
                                                error: function() {}
                                            })
                                    })
                            }),
                            $("#sample_list_delete").off().on("click", ".delete_sample", function(n) {
                                n.stopPropagation();
                                var i = $(n.target);
                                $.confirm({
                                    animation: "bottom",
                                    closeAnimation: "scale",
                                    title: "提醒!",
                                    content: "确认删除样品？",
                                    buttons: {
                                        confirm: {
                                            text: "确定",
                                            action: function() {
                                                delete_sample(i.attr("value"), e, t, a, o)
                                            }
                                        },
                                        cancel: {
                                            text: "取消",
                                            action: function() {}
                                        }
                                    }
                                })
                            }),
                            endLoading()
                    } else
                        responseNo200(Number(p.code), p.message),
                            endLoading()
                }, error: function () {
                    endLoading()
                }
            })
        }, error: function () {
            endLoading()
        }
    })
}
function page_show(e, t, a) {
    sessionStorage.setItem("pageNum", e);
    var o = a, n = location.href.split("/").pop().split(".").shift();
    if ("user_message" === n) getMessages(e); else if ("recycle_samples" === n) getRecycles(e); else if ("tag_cloud" === n) {
        var i = $.cookie("tag_ids");
        showSampleList(e, i)
    } else if ("sample" === n || "detail_sample" === n) {
        var s = JSON.parse(sessionStorage.getItem("sample-remark-isopen") || null);
        getAllRemarks2(e, "", s)
    } else if ("MyShare" === n) {
        var i = $.cookie("tag_ids"), r = $.cookie("search_key");
        showMyShareSampleList(e, i, r)
    } else if ("ShareMy" === n) {
        var r = $.cookie("search_key");
        showShareMySampleList(e, null, r)
    } else if ("MyShare_details" === n) {
        var i = $.cookie("tag_ids");
        showMyShareSampleRecordList(e, i)
    } else"Share_detail" === n ? showShareMySampleRecordList(e) : o && $("#keySearch").val().length > 0 ? showSampleList(e, null, a) : showSampleList(e)
}
function g_change_page(e, t) {
    "undefined" == typeof t && (t = $("body")), t.find("#set_page_pre").off().on("click", function () {
        return set_page_num <= 1 ? void(set_page_num = 1) : (set_page_num -= 1, void e(set_page_num))
    }), t.find("#set_page_next").off().on("click", function () {
        return set_page_num >= total_page_num ? void(set_page_num = total_page_num) : (set_page_num += 1, void e(set_page_num))
    }), t.find(".set_page_num").off().keyup(function (e) {
        "13" == e.keyCode && t.find("#change_page").trigger("click")
    }), t.find("#change_page").off().on("click", function () {
        var a = parseInt(t.find(".set_page_num").val());
        return a < 1 || a > total_page_num || !a ? void $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "请正确输入需要跳转的页数！",
                buttons: {confirm: {text: "确定"}}
            }) : (set_page_num = a, void e(set_page_num))
    }), t.find(".page_set").off().on("click", function (t) {
        var a = parseInt(t.target.getAttribute("value"));
        set_page_num !== a && (set_page_num = a, e(set_page_num))
    })
}
function g_init_pages(e, t) {
    return "undefined" == typeof e ? void console.warn("forget set the jqDom to init page control") : void g_change_page(t, e)
}
function pagination_set(e, t, a) {
    set_page_num = e, total_page_num = t, total_record_num = a, $(".pre_page").text(e), $(".total_page").text(total_page_num), $(".total_record").text(total_record_num);
    for (var o = 1; o <= 5; o++)control_Id = "#set_page_" + o, $(control_Id).css("display", "block");
    for (var o = 5; o > parseInt(total_page_num); o--)control_Id = "#set_page_" + o, $(control_Id).css("display", "none");
    if (total_page_num > 5) {
        if (e >= 3 && e <= total_page_num - 2) {
            for (var o = 1, n = e - 2; o <= 5; o += 1, n++)control_Id = "#set_page_" + o, $(control_Id).text(n), $(control_Id).attr("value", n);
            $(".page_set[class = 'page_set active']").removeClass("active"), $("#set_page_3").addClass("active"), pre_page_num = e
        } else if (e < 3) {
            for (var o = 1, n = 1; o <= 5; o += 1, n++)control_Id = "#set_page_" + o, $(control_Id).text(n), $(control_Id).attr("value", n);
            control_Id = "#set_page_" + e, $(".page_set[class = 'page_set active']").removeClass("active"), $(control_Id).addClass("active"), pre_page_num = e
        } else if (e > total_page_num - 2) {
            for (var o = 1, n = total_page_num - 4; o <= 5; o += 1, n++)control_Id = "#set_page_" + o, $(control_Id).text(n), $(control_Id).attr("value", n);
            control_Id = "#set_page_" + (5 - (total_page_num - e)), $(".page_set[class = 'page_set active']").removeClass("active"), $(control_Id).addClass("active")
        }
    } else {
        for (var o = 1; o <= 5; o += 1)control_Id = "#set_page_" + o, $(control_Id).text(o), $(control_Id).attr("value", o);
        control_Id = "#set_page_" + e, $(".page_set[class = 'page_set active']").removeClass("active"), $(control_Id).addClass("active")
    }
    a > 0 && $(".pagination_container").css("display", "block"), 1 == e ? ($("#set_page_pre").addClass("disabled"), $("#set_page_pre").parent().attr("disabled", "true")) : ($("#set_page_pre").removeClass("disabled"), $("#set_page_pre").parent().attr("disabled", "false")), e == total_page_num ? ($("#set_page_next").addClass("disabled"), $("#set_page_next").parent().attr("disabled", "true")) : ($("#set_page_next").removeClass("disabled"), $("#set_page_next").parent().attr("disabled", "false"))
}
function random_string(e) {
    for (var e = e || 4, t = "", a = "ABCDEFGHJKMNPQRSTWXYZ123456789", o = a.length, n = 0; n < e; n += 1)t += a.charAt(Math.floor(Math.random() * o));
    return t
}
function getMessages(e) {
    $.ajax({
        type: "get",
        url: "/api/message",
        dataType: "json",
        data: {pageNo: e, pageSize: 10},
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (t) {
            var a;
            if (messageIds.length = 0, $("input").prop("checked", !1), 0 === t.pageCount && $(".pagination_container").css("display", "none"), t.pageCount < t.pageNo && t.pageCount >= 1)return void getMessages(t.pageCount);
            if (200 == t.code) {
                for ($("#all_message_num").text(t.recordCount), $(".not_read_num").text(t.unreadCount), $(".not_read_num").show(), 0 === t.unreadCount && $(".dot_message").hide(), $(".message_list").empty(), a = 0; a < t.messages.length; a++) {
                    var o = "";
                    o += 1 == t.messages[a].status ? '<div class="message" id ="' + t.messages[a].messageId + '"> ' : 0 === t.messages[a].status ? '<div class="message new_message"id ="' + t.messages[a].messageId + '"> ' : '<div class="message" id ="' + t.messages[a].messageId + '"> ', o += '    <div class="message_tip">', o += "        <label>", o += '            <input class="check_mes" type="checkbox" value="' + t.messages[a].messageId + '" >', o += "            <span>&nbsp;&nbsp;系统通知</span>", o += "        </label>", o += "    </div>", o += '    <div class="message_time">', o += "        <span style='padding-left:36px;white-space:nowrap;'>", o += "            " + t.messages[a].createTime, o += "        </span>", o += "    </div>", o += '    <div class="message_content no_read" style="padding-left:64px;cursor:pointer" value="' + t.messages[a].messageId + '">', o += "        <span>", o += "            " + t.messages[a].content, o += "        </span>", o += "    </div>", o += "    <button type='button' class='close' data-dismiss='modal' value='" + t.messages[a].messageId + "'><span aria-hidden='true' value='" + t.messages[a].messageId + "' style='color:#4a90e2;'>&times;</span><span class='sr-only' value='" + t.messages[a].messageId + "'>Close</span></button>", o += "</div>", $(".message_list").append(o), messageIds.length > 0
                }
                0 === t.messages.length ? $(".noMessage").css("display", "block") : ($(".noMessage").css("display", "none"), pagination_set(t.pageNo, t.pageCount, t.recordCount)), $("input[class='check_mes']").off().on("click", function (e) {
                    var t;
                    if ($(this).is(":checked")) {
                        messageIds.push(this.value), input_arr = $('input[class="check_mes"]');
                        for (var t = 0; t < input_arr.length && input_arr[t].checked; t++)t == input_arr.length - 1 && $("#checkAll").prop("checked", !0)
                    } else {
                        $("#checkAll").prop("checked", !1);
                        var a = [];
                        for (t = 0; t < messageIds.length; t++)a.push(messageIds[t]);
                        for (messageIds = [], t = 0; t < a.length; t++)a[t] !== this.value && messageIds.push(a[t])
                    }
                }), $(".close").off().on("click", function (t) {
                    var a = $(t.target).attr("value");
                    $.ajax({
                        type: "delete",
                        url: "/api/message",
                        dataType: "json",
                        data: JSON.stringify({messageIds: a}),
                        beforeSend: function (e) {
                            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                            /*, $.cookie("authorization") || e.abort()*/
                        },
                        success: function (t) {
                            if (200 == t.code && (getMessages(e), $("#checkAll").prop("checked", !1), messageIds.indexOf(a) != -1)) {
                                for (var o = 0; o < messageIds.length; o++)messageIds[o] == a && o < messageIds.length - 1 && (messageIds[o] = -1);
                                messageIds.sort(), messageIds.reverse(), messageIds.pop()
                            }
                        },
                        error: function () {
                            $.alert({
                                animation: "bottom",
                                closeAnimation: "scale",
                                title: "提醒!",
                                content: "服务器连接失败!",
                                buttons: {cnofirm: {text: "确定"}}
                            })
                        }
                    })
                }), $(".message").off().on("click", ".message_content", function () {
                    var e = $(this).attr("value");
                    $.ajax({
                        type: "put",
                        url: "/api/message",
                        dataType: "json",
                        data: JSON.stringify({messageIds: e}),
                        beforeSend: function (e) {
                            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                            /*, $.cookie("authorization") || e.abort()*/
                        },
                        success: function (e) {
                            200 == e.code && (getMessages(set_page_num), $("#checkAll").prop("checked", !1), messageIds = [])
                        },
                        error: function () {
                            $.alert({
                                animation: "bottom",
                                closeAnimation: "scale",
                                title: "提醒!",
                                content: "服务器连接失败!",
                                buttons: {cnofirm: {text: "确定"}}
                            })
                        }
                    })
                })
            } else 401 == t.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    cnofirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            })
        },
        error: function () {
            $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "服务器连接失败!",
                buttons: {cnofirm: {text: "确定"}}
            })
        }
    })
}
function getAllRemarks() {
    var e = $("#sample-All-remarks-template").html(), t = Handlebars.compile(e), a = t();
    $(".paneALL1").append(a)
}
function getAllRemarks2(e, t) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = isNullType(a) || "" === a ? 0 : 1, n = $("#sample-All-public-remarks-template").html(), i = Handlebars.compile(n);
    Handlebars.registerHelper("compare", function (e, t, a) {
        return e > t ? a.fn(this) : a.inverse(this)
    }), Handlebars.registerHelper("ifCond", function (e, t, a, o) {
        return t ? e == a ? o.fn(this) : o.inverse(this) : void o.inverse(this)
    }), beginLoading(), $.ajax({
        type: "get",
        url: "/api/samples/" + SAMPLEID + "/remarks?pageNo=" + e + "&pageSize=5" + (Number(o) ? "&isOpen=" + a : ""),
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (a) {
            var o = [];
            if (200 == a.code) {
                var n = JSON.parse(sessionStorage.getItem("userAuthorityItems") || null), s = n ? n.company_screat_view.haveRight : 0;
                Number(s) && $("#addinsideRemarkNew").removeClass("display-none"), 0 == a.pageCount && $(".pagination_container").css("display", "none"), total_page_num = e;
                for (var r = 5; r > total_page_num; r--)control_Id = "#set_page_" + r, $(control_Id).css("display", "none");
                total_page_num = a.pageCount, t || pagination_set(a.pageNo, a.pageCount, a.recordCount), a.remarks.forEach(function (e) {
                    Number(s) ? o.push(e) : 2 != Number(e.isOpen) && o.push(e)
                });
                for (var l = o, r = 0; r < l.length; r++)l[r].isOpen = l[r].isOpen.toString();
                a.remarks = o, a.companyid = COMPANYID, a.haveRight = s;
                var p = i(a);
                $(".paneALL2").empty(), $(".paneALL2").html(p), $("[id=deletePublicRemarkNewP]").off().click(function (e) {
                    isPhone ? (beginLoading(), $.ajax({
                            type: "delete",
                            url: "/api/samples/" + SAMPLEID + "/remarks/" + $(e.target).attr("value"),
                            dataType: "json",
                            beforeSend: function (e) {
                                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                                /*, $.cookie("authorization") || e.abort()*/
                            },
                            success: function (e) {
                                200 == e.code ? getAllRemarks2(1) : $.alert({
                                        animation: "bottom",
                                        closeAnimation: "scale",
                                        title: "提醒",
                                        content: e.message,
                                        buttons: {confirm: {text: "确定"}}
                                    }), endLoading()
                            },
                            error: function () {
                                endLoading()
                            }
                        })) : location.href = "../modelweix.html"
                }), $(".goPrivate").off().on("click", function (e) {
                    isPhone ? (beginLoading(), $.ajax({
                            type: "put",
                            url: "/api/samples/" + SAMPLEID + "/remarks/" + $(e.target).attr("value") + "/role",
                            dataType: "json",
                            data: JSON.stringify({isOpen: 0}),
                            beforeSend: function (e) {
                                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                                /*, $.cookie("authorization") || e.abort()*/
                            },
                            success: function (e) {
                                200 == e.code ? getAllRemarks2(1) : $.alert({
                                        animation: "bottom",
                                        closeAnimation: "scale",
                                        title: "提醒",
                                        content: e.message,
                                        buttons: {confirm: {text: "确定"}}
                                    }), endLoading()
                            },
                            error: function () {
                                endLoading()
                            }
                        })) : location.href = "../modelweix.html"
                }), $(".changeToPrivateNewP").off().on("click", function (e) {
                    var t = $(e.target).attr("type");
                    1 == t ? t = 0 : 0 == t && (t = 1), isPhone ? (beginLoading(), $.ajax({
                            type: "put",
                            url: "/api/samples/" + SAMPLEID + "/remarks/" + $(e.target).attr("value") + "/role",
                            dataType: "json",
                            data: JSON.stringify({isOpen: t}),
                            beforeSend: function (e) {
                                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                                /*, $.cookie("authorization") || e.abort()*/
                            },
                            success: function (e) {
                                200 == e.code ? getAllRemarks2(1) : $.alert({
                                        animation: "bottom",
                                        closeAnimation: "scale",
                                        title: "提醒",
                                        content: e.message,
                                        buttons: {confirm: {text: "确定"}}
                                    }), endLoading()
                            },
                            error: function () {
                                endLoading()
                            }
                        })) : location.href = "../modelweix.html"
                }), $(".goPublic").off().on("click", function (e) {
                    isPhone ? (beginLoading(), $.ajax({
                            type: "put",
                            url: "/api/samples/" + SAMPLEID + "/remarks/" + $(e.target).attr("value") + "/role",
                            dataType: "json",
                            data: JSON.stringify({isOpen: 1}),
                            beforeSend: function (e) {
                                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                                /*, $.cookie("authorization") || e.abort()*/
                            },
                            success: function (e) {
                                200 == e.code ? getAllRemarks2(1) : $.alert({
                                        animation: "bottom",
                                        closeAnimation: "scale",
                                        title: "提醒",
                                        content: e.message,
                                        buttons: {confirm: {text: "确定"}}
                                    }), endLoading()
                            },
                            error: function () {
                                endLoading()
                            }
                        })) : location.href = "../modelweix.html"
                }), $(".editNewP").off().on("click", function (e) {
                    isPhone ? ($("#showRemarkNewP_" + $(e.target).attr("value")).hide(), $("#editRemarkNewP_" + $(e.target).attr("value")).show(), remarkInput = $("#editRemarkInputNewP_" + $(e.target).attr("value")).val()) : location.href = "../modelweix.html"
                }), $(".cancelEditRemarkNewP").off().on("click", function (e) {
                    $("#editRemarkNewP_" + $(e.target).attr("value")).hide(), $("#showRemarkNewP_" + $(e.target).attr("value")).show()
                }), $(".saveEditPublicRemarkNewP").off().on("click", function (e) {
                    return $("#editRemarkInputNewP_" + $(e.target).attr("value")).val() == remarkInput ? void $(".cancelEditRemarkNewP").trigger("click") : $("#editRemarkInputNewP_" + $(e.target).attr("value")).val().length > 200 ? void $.alert({
                                animation: "bottom",
                                closeAnimation: "scale",
                                title: "提醒",
                                content: "请输入小于200位字符长度的备注",
                                buttons: {confirm: {text: "确定"}}
                            }) : (beginLoading(), void $.ajax({
                                type: "put",
                                url: "/api/samples/" + SAMPLEID + "/remarks/" + $(e.target).attr("value"),
                                dataType: "json",
                                data: JSON.stringify({content: $("#editRemarkInputNewP_" + $(e.target).attr("value")).val()}),
                                beforeSend: function (e) {
                                    e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                                    /*, $.cookie("authorization") || e.abort()*/
                                },
                                success: function (e) {
                                    200 == e.code ? getAllRemarks2(1) : $.alert({
                                            animation: "bottom",
                                            closeAnimation: "scale",
                                            title: "提醒",
                                            content: e.message,
                                            buttons: {confirm: {text: "确定"}}
                                        }), endLoading()
                                },
                                error: function () {
                                    endLoading()
                                }
                            }))
                })
            }
            endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function getSampleInfo() {
    var e = {
        type: "get",
        url: "/api/samples/" + $.cookie("sample_id")
    }, t = [], a = $("#sample-info-template").html(), o = Handlebars.compile(a);
    Handlebars.registerHelper("compareType", function (e, t, a) {
        return Number(e) === Number(t) ? a.fn(this) : (console.log(Number(e) === Number(t)), a.inverse(this))
    }), beginLoading();
    var n = g_return200CbObj(function (e) {
        e.sample.attributes.forEach(function (t) {
            1 === t.attributeId && (e.sample.itemNo = t.value), 2 === t.attributeId && (e.sample.name = t.value), 3 === t.attributeId && (e.sample.component = t.value), 4 === t.attributeId && (e.sample.width = t.value), 5 === t.attributeId && (e.sample.weight = t.value), 6 === t.attributeId && (e.sample.specification = t.value)
        }), 1 === e.sample.status && (location.href = "recycle_detail.html"), g_stepRecord.set({
            pageName: "样品详情： " + e.sample.itemNo,
            cookie: {sample_id: SAMPLEID}
        }, $("#hostory_lists")), $("#theSampleId").text(e.sample.itemNo), $("#go_cost_account").attr("data-itemNo", e.sample.itemNo), document.title = e.sample.itemNo, $(".sample_detail").empty(), itemNo = e.sample.itemNo || "", name = e.sample.name || "", component = e.sample.component || "", width = e.sample.width || "", weight = e.sample.weight || "", specification = e.sample.specification || "";
        var a = o(e.sample);
        $(window).width() <= 767 ? $(".panel1").append(a) : $(".panel1").prepend(a);
        for (var n = !1, i = !1, s = !1, r = !1, l = 0; l < e.sample.pics.length; l++)thePics = e.sample.pics[l].pic, 0 == e.sample.pics[l].roleType && (n = !0, getPics(thePics, 0, e.sample.attributes)), 1 == e.sample.pics[l].roleType && (i = !0, getPics(thePics, 1, e.sample.attributes)), 2 == e.sample.pics[l].roleType && (s = !0, getPics(thePics, 2, e.sample.attributes)), 3 == e.sample.pics[l].roleType && (r = !0, getPics(thePics, 3, e.sample.attributes));
        0 == n && ($("#publicgallery").empty(), $("#publicgallery").append(getUploadHtml(0)), picId[0].picIds = ""), 0 == i && ($("#innergallery").empty(), $("#innergallery").append(getUploadHtml(1)), picId[1].picIds = ""), 0 == s && ($("#privategallery").empty(), $("#privategallery").append(getUploadHtml(2)), picId[2].picIds = ""), 0 == r && ($("#publicinfogallery").empty(), $("#publicinfogallery").append(getUploadHtml(3)), picId[3].picIds = ""), 0 != t[0] && t.length > 0 && $("#forPublicToggle").trigger("click");
        for (var l = 0; l < t.length; l++)0 == t[l] || (1 == t[l] ? $("#forInnerToggle").trigger("click") : 2 == t[l] ? $("#forPrivateToggle").trigger("click") : $("#forpublicToggle").trigger("click"));
        $(".lead-click-a").on("click", function () {
            var e = this.getAttribute("data-key"), t = this.getAttribute("data-href"), a = this.getAttribute("data-cookie"), o = this.getAttribute("data-type");
            t && e && a && o && ($.cookie(a, e, {path: "/"}), $.cookie("company_type", o, {path: "/"}), window.open(t))
        }), 1 == sessionStorage.getItem("gopanestock") && ($("body #paneStock").trigger("click"), sessionStorage.setItem("gopanestock", 0))
    });
    sendAjax(e, n)
}
function getSamplePics() {
    beginLoading(), $.ajax({
        type: "get", url: "/api/samples/" + SAMPLEID, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            if (200 == e.code) {
                e.sample.attributes.forEach(function (t) {
                    1 === t.attributeId && (e.sample.itemNo = t.value), 2 === t.attributeId && (e.sample.name = t.value), 3 === t.attributeId && (e.sample.component = t.value), 4 === t.attributeId && (e.sample.width = t.value), 5 === t.attributeId && (e.sample.weight = t.value), 6 === t.attributeId && (e.sample.specification = t.value)
                }), itemNo = e.sample.itemNo || "", name = e.sample.name || "", component = e.sample.component || "", width = e.sample.width || "", weight = e.sample.weight || "", specification = e.sample.specification || "";
                for (var t = !1, a = !1, o = !1, n = !1, i = 0; i < e.sample.pics.length; i++)thePics = e.sample.pics[i].pic, 0 == e.sample.pics[i].roleType && (t = !0, getPics(thePics, 0, e.sample.attributes)), 1 == e.sample.pics[i].roleType && (a = !0, getPics(thePics, 1, e.sample.attributes)), 2 == e.sample.pics[i].roleType && (o = !0, getPics(thePics, 2, e.sample.attributes)), 3 == e.sample.pics[i].roleType && (n = !0, getPics(thePics, 3, e.sample.attributes));
                0 == t && ($("#publicgallery").empty(), $("#publicgallery").append(getUploadHtml(0)), picId[0].picIds = ""), 0 == a && ($("#innergallery").empty(), $("#innergallery").append(getUploadHtml(1)), picId[1].picIds = ""), 0 == o && ($("#privategallery").empty(), $("#privategallery").append(getUploadHtml(2)), picId[2].picIds = ""), 0 == n && ($("#publicinfogallery").empty(), $("#publicinfogallery").append(getUploadHtml(3)), picId[3].picIds = "")
            } else responseNo200(Number(e.code), e.message, function () {
                "样品不存在" != e.message && "用户没有权限" != e.message || (location.href = "/sample/sample_list.html")
            });
            endLoading()
        }, error: function () {
            endLoading()
        }
    })
}
function getUploadHtml(e) {
    var t = ["uploadPublic", "uploadInner", "uploadPrivate", "uploadPublicInfo"], a = '<li class="sm-3 upload_img">\n    <form name=uploadForm id=' + t[e] + 'Pics class="hidden-xs">\n    <input type=file name=files id=' + t[e] + "Img multiple accept=image/gif,image/jpg,image/png,image/jpeg,image/tiff capture=camera style=display:none onchange=handleImgs(this.files," + e + ')>\n    <img  name="" for=' + t[e] + " class=img-bg src=../images/upload.png onclick=" + t[e] + "Img.click()>\n    <p>上传本地图片</p>\n    </form>\n    </li>";
    return "boolean" == typeof EDIT_AUTH && EDIT_AUTH === !1 && (a = ""), a
}
function getPics(e, t, a) {
    var o, n = "";
    if (huahaiTesting($.cookie("company_id")) ? (n += '<table width=200px style="margin:0 auto">', n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">' + a[0].prettyName + "：" + a[0].value + "</td>",
                n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">' + a[1].prettyName + "：" + a[1].value + "</td>", n += " </tr>", n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">' + a[2].prettyName + "：" + a[2].value + "</td>", n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">' + a[3].prettyName + "：" + a[3].value + "</td>", n += " </tr>", n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">' + a[4].prettyName + "：" + a[4].value + "</td>", n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">' + a[5].prettyName + "：" + a[5].value + "</td>", n += " </tr>", n += "</table>") : (n += '<table width=200px style="margin:0 auto">', n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">编号: ' + itemNo + "</td>", n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">名称：' + name + "</td>", n += " </tr>", n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">规格: ' + specification + "</td>", n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">成分: ' + component + "</td>", n += " </tr>", n += " <tr>", n += '   <td style="text-align:left;padding-right:8px;white-space:nowrap">门幅: ' + width + "</td>", n += '   <td style="text-align:left;padding-left:8px;white-space:nowrap">克重: ' + weight + "</td>", n += " </tr>", n += "</table>"), 0 == t) {
        o = "#publicgallery", $(o).empty(), pic_num[t] = e.length, picId[t].picIds = "";
        for (var i = [], s = 0; s < e.length; s++) {
            s > 0 && (picId[t].picIds += ","), picId[t].picIds += e[s].docId;
            var r = "";
            r += '<li class="public-item sm-3" data-responsive=' + e[s].sampleDocKey + " data-src=" + e[s].sampleDocKey + " data-slide=" + s + ">", r += "  <a>", r += '    <img class="img-responsive" name=' + e[s].docId + " src=" + e[s].sampleDocKey + " value=" + e[s].sampleDocId + " data-index=" + t + ">", r += '    <i class="i-icon i-look-big" title="查看大图"></i>', r += "  </a>", r += "</li>", i.push({
                src: e[s].sampleDocKey,
                thumb: e[s].sampleDocKey,
                subHtml: n
            }), s == e.length - 1 && myContextMenu(), $(o).append(r)
        }
        openLightGallery($(o), i)
    } else if (1 == t) {
        o = "#innergallery";
        var l = [];
        $(o).empty(), pic_num[t] = e.length, picId[t].picIds = "";
        for (var s = 0; s < e.length; s++) {
            s > 0 && (picId[t].picIds += ","), picId[t].picIds += e[s].docId;
            var r = "";
            r += '<li class="inner-item sm-3" data-responsive=' + e[s].sampleDocKey + " data-src=" + e[s].sampleDocKey + " data-slide=" + s + ">", r += "  <a>", r += '    <img class="img-responsive" name=' + e[s].docId + " src=" + e[s].sampleDocKey + " value=" + e[s].sampleDocId + " data-index=" + t + ">", r += '    <i class="i-icon i-look-big" title="查看大图"></i>', r += "  </a>", r += "</li>", l.push({
                src: e[s].sampleDocKey,
                thumb: e[s].sampleDocKey,
                subHtml: n
            }), s == e.length - 1 && myContextMenu(), $(o).append(r)
        }
        openLightGallery($(o), l)
    } else if (2 == t) {
        o = "#privategallery";
        var p = [];
        $(o).empty(), pic_num[t] = e.length, picId[t].picIds = "";
        for (var s = 0; s < e.length; s++) {
            s > 0 && (picId[t].picIds += ","), picId[t].picIds += e[s].docId;
            var r = "";
            r += '<li class="private-item sm-3" data-responsive=' + e[s].sampleDocKey + " data-src=" + e[s].sampleDocKey + " data-slide=" + s + ">", r += "  <a>", r += '    <img class="img-responsive" name=' + e[s].docId + " src=" + e[s].sampleDocKey + " value=" + e[s].sampleDocId + " data-index=" + t + ">", r += '    <i class="i-icon i-look-big" title="查看大图"></i>', r += "  </a>", r += "</li>", p.push({
                src: e[s].sampleDocKey,
                thumb: e[s].sampleDocKey,
                subHtml: n
            }), s == e.length - 1 && myContextMenu(), $(o).append(r), openLightGallery($(o), p)
        }
    } else if (3 == t) {
        o = "#publicinfogallery", $(o).empty(), pic_num[t] = e.length, picId[t].picIds = "";
        for (var i = [], s = 0; s < e.length; s++) {
            s > 0 && (picId[t].picIds += ","), picId[t].picIds += e[s].docId;
            var r = "";
            r += '<li class="public-item sm-3" data-responsive=' + e[s].sampleDocKey + " data-src=" + e[s].sampleDocKey + " data-slide=" + s + ">", r += "  <a>", r += '    <img class="img-responsive" name=' + e[s].docId + " src=" + e[s].sampleDocKey + " value=" + e[s].sampleDocId + " data-index=" + t + ">", r += '    <i class="i-icon i-look-big" title="查看大图"></i>', r += "  </a>", r += "</li>", i.push({
                src: e[s].sampleDocKey,
                thumb: e[s].sampleDocKey,
                subHtml: n
            }), s == e.length - 1 && myContextMenu(), $(o).append(r)
        }
        openLightGallery($(o), i)
    }
    $(o).append(getUploadHtml(t))
}
function openLightGallery(e, t) {
    e.off("mousedown", ".i-look-big").on("mousedown", ".i-look-big", function (e) {
        if (e.stopPropagation(), 2 === e.button)return !1;
        var a = $(this), o = a.parents("li").attr("data-slide");
        a.lightGallery({dynamic: !0, thumbnail: !0, fullscreen: !1, index: o, hash: !1, dynamicEl: t})
    })
}
function myLightGallery(e) {
    clearTimeout(t);
    var t = setTimeout(function () {
        $(e).lightGallery()
    }, 500)
}
function myContextMenu() {
    if ("boolean" != typeof EDIT_AUTH || EDIT_AUTH !== !1) {
        clearTimeout(e);
        var e = setTimeout(function () {
            $(".demo-gallery .img-responsive").contextMenu("myMenu", {
                bindings: {
                    viewOriginalImage: function (e) {
                        var t = e.getAttribute("src"), a = t.lastIndexOf("?");
                        t = t.substring(0, a), window.open(t)
                    }, moveToPublic: function (e) {
                        var t = e.getAttribute("value"), a = picId[0].picIds.length ? picId[0].picIds.split(",").length + 1 : 1;
                        updatePicRole(t, 0, a)
                    }, moveToInner: function (e) {
                        var t = e.getAttribute("value"), a = picId[1].picIds.length ? picId[1].picIds.split(",").length + 1 : 1;
                        updatePicRole(t, 1, a)
                    }, moveToPrivate: function (e) {
                        var t = e.getAttribute("value"), a = picId[2].picIds.length ? picId[2].picIds.split(",").length + 1 : 1;
                        updatePicRole(t, 2, a)
                    }, moveToPublicInfo: function (e) {
                        var t = e.getAttribute("value"), a = picId[3].picIds.length ? picId[3].picIds.split(",").length + 1 : 1;
                        updatePicRole(t, 3, a)
                    }, deleteImg: function (e) {
                        var t = e.getAttribute("name"), a = e.getAttribute("data-index");
                        deletePic(t, a)
                    }
                },
                menuStyle: {
                    border: "1px solid #bebebe",
                    width: "208px",
                    "border-radius": ".2em",
                    "box-shadow": "0 2px 5px rgba(0,0,0.5)"
                },
                itemStyle: {
                    fontFamily: "inherit",
                    backgroundColor: "#fff",
                    color: "#333",
                    border: "none",
                    padding: ".5em 2em",
                    "font-size": "13px"
                },
                itemHoverStyle: {color: "#fff", backgroundColor: "#4a90e2", border: "none"},
                onShowMenu: function (e, t) {
                    return "0" == $(e.target).attr("data-index") ? $("#moveToPublic", t).remove() : "1" == $(e.target).attr("data-index") ? $("#moveToInner", t).remove() : "2" == $(e.target).attr("data-index") ? $("#moveToPrivate", t).remove() : "3" == $(e.target).attr("data-index") && $("#moveToPublicInfo", t).remove(), t
                }
            })
        }, 500)
    }
}
function dragSort() {
    "boolean" == typeof EDIT_AUTH && EDIT_AUTH === !1 || $("#publicgallery,#innergallery,#privategallery,#publicinfogallery").dragsort({
        dragSelector: "a",
        itemSelector: "li",
        dragBetween: !0,
        dragEnd: getDragItem,
        placeHolderTemplate: "<li><a></a></li>"
    })
}
function ChangeRole(e) {
    $("li .shadow").hide(), $("li[value=" + e + "] .shadow").fadeIn()
}
function updatePics() {
    beginLoading();
    for (var e = 0; e < 3; e++)getPicIds(e);
    var t = JSON.stringify({companyId: COMPANYID, pics: picId});
    EditSamples(t)
}
function getPicIds(e) {
    var t;
    0 == e ? t = "#publicgallery" : 1 == e ? t = "#innergallery" : 2 == e ? t = "#privategallery" : 3 == e && (t = "#publicinfogallery");
    var a = $(t + " li").length;
    picId[e].picIds = "";
    for (var o = 0, n = 0; n < a; n++)"" != $(t + " li:eq(" + n + ") img").attr("name") && (o > 0 && (picId[e].picIds += ","), o++, picId[e].picIds += $(t + " li:eq(" + n + ") img").attr("name"))
}
function getPicNowIds(e) {
    var t;
    0 == e ? t = "#publicgallery" : 1 == e ? t = "#innergallery" : 2 == e ? t = "#privategallery" : 3 == e && (t = "#publicinfogallery");
    var a = $(t + " li").length;
    picId_now[e].picIds = "";
    for (var o = 0, n = 0; n < a; n++)"" != $(t + " li:eq(" + n + ") img").attr("name") && (o > 0 && (picId_now[e].picIds += ","), o++, picId_now[e].picIds += $(t + " li:eq(" + n + ") img").attr("name"))
}
function getDragItem() {
    for (var e, t, a, o, n, i = $(this).find("img"), s = 0; s < 4; s++)if (getPicNowIds(s), picId[s].picIds !== picId_now[s].picIds && (e = picId[s].picIds.split(","), t = picId_now[s].picIds.split(","), a = i.attr("name"), o = i.attr("value"), n = t.indexOf(a) + 1, picId[s].picIds.length <= picId_now[s].picIds.length))return void updatePicRole(o, s, n);
    $("#panel1").children().length > 1 ? getSampleInfo() : getSamplePics()
}
function getPicId() {
    return picId
}
function updatePicRole(e, t, a) {
    isPhone ? $.ajax({
            type: "put",
            url: "/api/samples/" + SAMPLEID + "/pics/" + e,
            dataType: "json",
            data: JSON.stringify({roleType: t, position: a}),
            beforeSend: function (e) {
                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                /*, $.cookie("authorization") || e.abort()*/
            },
            success: function (e) {
                200 == e.code ? (endLoading(), $("#panel1").children().length > 1 ? getSampleInfo() : getSamplePics()) : ($.alert({
                        animation: "bottom",
                        closeAnimation: "scale",
                        title: "提醒",
                        content: e.message,
                        buttons: {confirm: {text: "确定"}}
                    }), $("#panel1").children().length > 1 ? getSampleInfo() : getSamplePics()), endLoading()
            },
            error: function () {
                endLoading()
            }
        }) : location.href = "../modelweix.html"
}
function handleImgs(e, t) {
    isPhone ? (beginLoading(), setTimeout(function () {
            var a = !1;
            if (e.length > 50)return g_msgAlert("单次上传图片，请控制在50张以内哟~"), $("#" + ["uploadPublicImg", "uploadInnerImg", "uploadPrivateImg", "uploadPublicInfoImg"][t]).val(""), endLoading(), !1;
            for (var o = 0; o < e.length; o++) {
                var n = e[o], i = /^image\//;
                n.size;
                if (n.size / 1024 / 1024 > 20) {
                    g_msgAlert("请重新选择图片，单张图片最大为20M"), a = !0;
                    break
                }
                if (!i.test(n.type)) {
                    g_msgAlert("请上传正确的文件类型"), a = !0;
                    break
                }
            }
            return a ? ($("#" + ["uploadPublicImg", "uploadInnerImg", "uploadPrivateImg", "uploadPublicInfoImg"][t]).val(""), endLoading(), !1) : void(e.length > 0 && uploadImgs(t, e))
        }, 100)) : location.href = "../modelweix.html"
}
function uploadImgs(e, t) {
    var a = new FormData;
    for (var o in t)a.append("files", t[o]);
    a.append("bizType", 11), a.append("bizId", SAMPLEID), $.ajax({
        url: "/api/upload/pic",
        type: "POST",
        data: a,
        async: !0,
        cache: !1,
        contentType: !1,
        processData: !1,
        beforeSend: function (e) {
            e.setRequestHeader("authorization", $.cookie("authorization")), $.cookie("authorization") || (e.abort(), endLoading())
        },
        success: function (t) {
            if (200 == t.code) {
                getPicIds(e), "" != picId[e].picIds && (picId[e].picIds += ","), picId[e].picIds += t.picIds;
                var a = JSON.stringify({companyId: COMPANYID, pics: picId});
                EditSamples(a), clearTimeout(window.BUGUANJIATAG), window.BUGUANJIATAG = setTimeout(function () {
                    getSamplePics()
                }, 5e3)
            } else $.alert({animation: "bottom", closeAnimation: "scale", title: "提醒!", content: t.message});
            endLoading()
        },
        error: function (e) {
            endLoading()
        }
    })
}
function addRrmoveImg(e, t, a) {
    var o = {
        type: "put",
        url: "/api/samples/" + $.cookie("sample_id") + "/pics",
        data: {operateType: e, roleType: t, docId: a}
    }, n = g_return200CbObj(function (e) {
        console.log(e)
    });
    sendAjax(o, n)
}
function deletePic(e, t) {
    if (isPhone) {
        var a = {
            type: "PUT",
            url: "/api/samples/" + SAMPLEID + "/pics",
            data: {operateType: 1, roleType: t, docIds: e}
        }, o = g_return200CbObj(function (e) {
            getSamplePics()
        });
        sendAjax(a, o)
    } else location.href = "../modelweix.html"
}
function EditSamples(e) {
    $.ajax({
        type: "get", url: "/api/samples/" + SAMPLEID, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            if (200 == e.code) {
                for (var t = e.sample, a = "", o = 0; o < t.tags.length; o++)o > 0 && (a += ","), a += t.tags[o].tagId;
                for (var n = {}, o = 0; o < t.attributes.length; o++)n[t.attributes[o].attributeId] = t.attributes[o].value;
                var i;
                i = null != e.sample.supplierInfo ? JSON.stringify({
                        companyId: COMPANYID,
                        formerItemNo: t.formerItemNo,
                        name: t.name,
                        nameEn: t.nameEn,
                        component: t.component,
                        width: t.width,
                        weight: t.weight,
                        specification: t.specification,
                        lableRemark: t.lableRemark,
                        tagIds: a,
                        pics: picId,
                        customAttribute: n,
                        supplierInfo: {
                            supplierName: e.sample.supplierInfo.supplierName,
                            itemNo: e.sample.supplierInfo.itemNo,
                            name: e.sample.supplierInfo.name,
                            nameEn: e.sample.supplierInfo.nameEn,
                            width: e.sample.supplierInfo.width,
                            weight: e.sample.supplierInfo.weight,
                            component: e.sample.supplierInfo.component,
                            specification: e.sample.supplierInfo.specification,
                            clothPrice: e.sample.supplierInfo.clothPrice,
                            finishedPrice: e.sample.supplierInfo.finishedPrice
                        }
                    }) : JSON.stringify({
                        companyId: COMPANYID,
                        formerItemNo: t.formerItemNo,
                        name: t.name,
                        nameEn: t.nameEn,
                        component: t.component,
                        width: t.width,
                        weight: t.weight,
                        specification: t.specification,
                        lableRemark: t.lableRemark,
                        tagIds: a,
                        pics: picId,
                        customAttribute: n
                    }), $.ajax({
                    type: "put",
                    url: "/api/samples/" + SAMPLEID,
                    dataType: "json",
                    data: i,
                    beforeSend: function (e) {
                        e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                        /*, $.cookie("authorization") || e.abort()*/
                    },
                    success: function (e) {
                        200 == e.code ? (endLoading(), $("#panel1").children().length > 1 ? getSampleInfo() : getSamplePics()) : 401 == e.code ? $.alert({
                                    animation: "bottom",
                                    closeAnimation: "scale",
                                    title: "提醒!",
                                    content: e.message,
                                    buttons: {
                                        confirm: {
                                            text: "确定", action: function () {
                                                $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                                            }
                                        }
                                    }
                                }) : ($("#panel1").trigger("click"), $.alert({
                                    animation: "bottom",
                                    closeAnimation: "scale",
                                    title: "提醒!",
                                    content: e.message,
                                    buttons: {confirm: {text: "确定"}}
                                }))
                    },
                    error: function () {
                        $.alert({
                            animation: "bottom",
                            closeAnimation: "scale",
                            title: "提醒!",
                            content: "服务器连接失败!",
                            buttons: {cnofirm: {text: "确定"}}
                        })
                    }
                })
            } else $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: e.message,
                buttons: {cnofirm: {text: "确定"}}
            })
        }, error: function () {
            $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "服务器连接失败!",
                buttons: {cnofirm: {text: "确定"}}
            })
        }
    })
}
function refreshSample() {
    $.cookie("ifreload", 1), location.reload()
}
function getSampleHostory() {
    var e = ["新增", "修改", "放入回收站", "从回收站还原", "彻底删除"];
    beginLoading(), $.ajax({
        type: "get",
        url: "/api/samples/" + $.cookie("sample_id") + "/logs",
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (t) {
            if (200 == t.code)for (var a = 0; a < t.sampleLogs.length; a++)html = "<div class='list'>" + t.sampleLogs[a].userName + e[t.sampleLogs[a].type] + "于" + getTimeSpan(t.sampleLogs[a].logTime) + "</div>", $("#hostory_operation_lists").append(html);
            endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function getNewSampleList() {
    $.ajax({
        url: "/api/samples?companyId=" + $.cookie("company_id") + "&pageNo=1&pageSize=10&orderByType=2",
        type: "get",
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            var t = "";
            if (200 == e.code) {
                e.samples.length > 5 && $("#show_hidden_lists").css("display", "block");
                for (var a = 0; a < e.samples.length; a++)t = e.samples[a].name && e.samples[a].name.length > 0 ? "<div class='link_list list' value=" + e.samples[a].sampleId + ' onclick="goSampleInfoPage(' + e.samples[a].sampleId + ')">' + e.samples[a].itemNo + "&nbsp;&nbsp;&nbsp;" + e.samples[a].name + "</div>" : "<div class='link_list list' value=" + e.samples[a].sampleId + ' onclick="goSampleInfoPage(' + e.samples[a].sampleId + ')">' + e.samples[a].itemNo + "</div>", a > 4 ? $("#hostory_operation_hidden_lists").append(t) : $("#hostory_operation_lists").append(t)
            }
        },
        error: function (e) {
        }
    })
}
function getTimeDuring(e) {
    var t = "天后", a = e.split(" ").shift().split("-")[0], o = e.split(" ").shift().split("-")[1], n = e.split(" ").shift().split("-")[2], i = e.split(" ").pop();
    e = o + "/" + n + "/" + a + " " + i;
    var s = new Date(e.toLocaleString().replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, "")), r = $.now(), l = s.getTime() - r, p = "", c = Math.floor(l / 31536e6);
    if (c > 1)return !1;
    var d = Math.floor(l / 2592e6);
    if (d > 1)return !1;
    var u = Math.floor(l / 2592e5);
    return p = u > 0 ? u + t : "已到期"
}
function getTimeSpan(e) {
    var t = ["分钟前", "小时前", "天前", "月前", "年前"], a = e.split(" ").shift().split("-")[0], o = e.split(" ").shift().split("-")[1], n = e.split(" ").shift().split("-")[2], i = e.split(" ").pop();
    e = o + "/" + n + "/" + a + " " + i;
    var s = new Date(e.toLocaleString().replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, "")), r = $.now(), l = r - s.getTime(), p = "", c = Math.floor(l / 31536e6);
    if (c > 0)return p = c + t[4];
    var d = Math.floor(l / 2592e6);
    if (d > 0)return p = d + t[3];
    var u = Math.floor(l / 864e5);
    if (u > 0)return p = u + t[2];
    var m = l % 864e5, _ = Math.floor(m / 36e5);
    if (_ > 0)return p = _ + t[1];
    var h = m % 36e5, g = Math.floor(h / 6e4);
    if (g > 0)return p = g + t[0];
    var f = h % 6e4, v = Math.round(f / 1e3);
    return v > 5 ? p = v + "秒前" : v <= 5 ? "刚刚" : e
}
function goSampleInfoPage(e) {
    $.cookie("sample_id", e, {path: "/"}), location.href = "sample.html"
}
function check_email(e) {
    return !!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}
function jump_email(e) {
    var t = {
        "qq.com": "http://mail.qq.com",
        "gmail.com": "http://mail.google.com",
        "sina.com": "http://mail.sina.com.cn",
        "163.com": "http://mail.163.com",
        "126.com": "http://mail.126.com",
        "yeah.net": "http://www.yeah.net/",
        "sohu.com": "http://mail.sohu.com/",
        "tom.com": "http://mail.tom.com/",
        "sogou.com": "http://mail.sogou.com/",
        "139.com": "http://mail.10086.cn/",
        "hotmail.com": "http://www.hotmail.com",
        "live.com": "http://login.live.com/",
        "live.cn": "http://login.live.cn/",
        "live.com.cn": "http://login.live.com.cn",
        "189.com": "http://webmail16.189.cn/webmail/",
        "yahoo.com.cn": "http://mail.cn.yahoo.com/",
        "yahoo.cn": "http://mail.cn.yahoo.com/",
        "eyou.com": "http://www.eyou.com/",
        "21cn.com": "http://mail.21cn.com/",
        "188.com": "http://www.188.com/",
        "foxmail.coom": "http://www.foxmail.com"
    }, a = e.split("@")[1], o = t[a];
    return o ? o : "http://www.baidu.com"
}
function info_init() {
    beginLoading(), $.ajax({
        type: "get", url: "/api/user/account", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            if (200 == e.code)if (/change-password/.test(location.href)) $("#input_mobile").val(e.user.mobile); else if ($("#bigAvatar").attr("src", $.cookie("avatar_url") + "?x-oss-process=image/resize,m_fixed,h_140,w_140"), $("#inputName").val(e.user.userName), $("#inputEmail").val(e.user.email), $("#inputJob").val(e.user.position), $("#inputAddress").val(e.user.address), $("#inputPhone").val(e.user.telephone), "" !== e.user.birthday) {
                $("#inputBirthday").val(toFrontEndBirthday(e.user.birthday));
                var t = e.user.birthday.split("-"), a = t[0], o = t[1], n = t[2];
                setYMD(a, o, n)
            } else {
                var t = [1949, 1, 1], a = t[0], o = t[1], n = t[2];
                setYMD(a, o, n)
            } else $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: e.message,
                buttons: {confirm: {text: "确定"}}
            });
            endLoading()
        }, error: function () {
            endLoading(), $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "服务器连接失败!",
                buttons: {confirm: {text: "确定"}}
            })
        }
    })
}
function refreshYMD() {
    var e, t, a = document.getElementById("inputDay").selectedIndex + 1, o = document.getElementById("inputYear").selectedIndex + 1949, n = document.getElementById("inputMonth").selectedIndex + 1, i = new Date(o, n, 0).getDate();
    $("#inputDay").empty();
    for (var s = 1; s < i + 1; s++)e = '<option value = "day_' + s + '">' + s + "</option>", $("#inputDay").append(e);
    i < a ? (t = document.getElementById("inputDay"), t.selectedIndex = i - 1) : (t = document.getElementById("inputDay"), t.selectedIndex = a - 1)
}
function setYMD(e, t, a) {
    var o, n, i, s;
    $("#inputYear").empty(), $("#inputMonth").empty(), $("#inputDay").empty();
    for (var r, l = new Date(e, t, 0).getDate(), p = 1949; p < 1999; p++)n = '<option value = "year_' + p + '">' + p + "</option>", $("#inputYear").append(n), p == e && (r = p - 1949);
    for (var p = 1; p < 13; p++)i = '<option value = "month_' + p + '">' + p + "</option>", $("#inputMonth").append(i);
    for (var p = 1; p < l + 1; p++)s = '<option value = "day_' + p + '">' + p + "</option>", $("#inputDay").append(s);
    o = document.getElementById("inputYear"), o.selectedIndex = r, o = document.getElementById("inputMonth"), o.selectedIndex = t - 1, o = document.getElementById("inputDay"), o.selectedIndex = a - 1
}
function getAttributes(e) {
    var t = $("#attribute-template").html(), a = Handlebars.compile(t), o = {
        type: "get",
        url: "/api/company/attribute",
        data: {companyId: COMPANYID, isUsed: 1}
    };
    Handlebars.registerHelper("compare", function (e, t, a) {
        return Number(e) === Number(t) ? a.fn(this) : a.inverse(this)
    });
    var n = g_return200CbObj(function (t) {
        var o = [];
        t.attributes.forEach(function (e) {
            1 !== e.valueType && 2 !== e.valueType || (e.options = e.options ? e.options.split(",") : []), 3 === e.valueType && o.push(e.attributeId)
        }), $("#input_box").prepend(a(t)), e && e(), $("input.form-control").on("focus", function () {
            $(".input_help").hide(), $(this).hasClass("need-help-input") && $(this).siblings(".input_help").show()
        }), $(".attributes-help-box").on("click", "div", function () {
            $(this).parent(".attributes-help-box").siblings("input").val($(this).text())
        }), o.forEach(function (e) {
            $.jeDate("#YMD_" + e, {format: "YYYY-MM-DD"}), $.jeDate("#HMS_" + e, {format: "hh:mm:00"}), $("#clear_" + e).on("click", function () {
                $("#YMD_" + e).val(""), $("#HMS_" + e).val("")
            })
        })
    });
    sendAjax(o, n)
}
function getDefaultCompany() {
    $.ajax({
        type: "get", url: "/api/user/account/settings", dataType: "json", async: !1, beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
        }, success: function (e) {
            200 == e.code && e.companyId ? $.cookie("default_company_id", e.companyId, {path: "/"}) : $.cookie("default_company_id", "", {path: "/"})
        }, error: function (e) {
        }
    })
}
function getPayInfo(e) {
    var t = $("#theVipState");
    $.ajax({
        type: "get", url: "/api/companys/" + COMPANYID, dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (a) {
            if (200 == a.code) {
                localStorage.setItem("phone", a.company.telephone), localStorage.setItem("companyName", a.company.name), 1 == a.company.payStatus ? $(".mianfeiban").text("已付费") : 0 == a.company.payStatus ? $(".mianfeiban").text("未付费") : $(".mianfeiban").text("已逾期"), $(".selContent_top span").text(a.company.name), e && e(a.company.modules, a.company.payStatus);
                var o = $("#rice_inventory"), n = $("#rice_inventory_list"), i = $("#rice_inventory_output_list"), s = $(".income_bill"), r = $("#outcome_bill");
                if ($.inArray("sampleStore", a.company.modules) === -1) o.addClass("aler-rice-like-content"), o.find("a").attr("href", "/sample/sample_store.html"), n.addClass("aler-rice-like-content"), n.find("a").attr("href", "javascript:void(0)"), i.addClass("aler-rice-like-content"), i.find("a").attr("href", "javascript:void(0)"); else {
                    // var l = JSON.parse(sessionStorage.getItem("userAuthorityItems") || null);
                    // l && (Number(l.sample_store.haveRight) || (o.addClass("alert-rice-jurisdiction"), o.find("a").attr("href", "javascript:void(0)"), n.addClass("alert-rice-jurisdiction"), n.find("a").attr("href", "javascript:void(0)"), i.addClass("alert-rice-jurisdiction"), i.find("a").attr("href", "javascript:void(0)")))
                }
                // if ($.inArray("invoice", a.company.modules) === -1) s.addClass("aler-bill-apply"), s.find("a").attr("href", "javascript:void(0)"), r.addClass("aler-bill-apply"), r.find("a").attr("href", "javascript:void(0)"); else {
                //     var p = JSON.parse(sessionStorage.getItem("userAuthorityItems") || null);
                //     p && (Number(p.invoice_in.haveRight) || (s.addClass("alert-bill-jurisdiction_in"), s.find("a").attr("href", "javascript:void(0)"), $("#auth_nav_bill_template").addClass("alert-bill-jurisdiction_in"), $("#auth_nav_bill_template").find("a").attr("href", "javascript:void(0)")), Number(p.invoice_out.haveRight) || (r.addClass("alert-bill-jurisdiction_out"), r.find("a").attr("href", "javascript:void(0)")))
                // }
                productionPayStatic(a.company.payStatus, $.inArray("production", a.company.modules) === -1, $.inArray("instruct", a.company.modules) === -1, $.inArray("contract", a.company.modules) === -1), $.inArray("sell", a.company.modules) === -1 && $(".stock-tips-sell").removeClass("display-none"), $.inArray("inventory", a.company.modules) === -1 && $(".stock-tips-inventory").removeClass("display-none"), $.cookie("companyKey", a.company.companyKey, {path: "/"});
                var c = "/shop?" + a.company.companyKey;
                $(".go-pcexhibitionf").attr("href", c), $(".go-pcexhibitiont").attr("href", c);
                var d = "/shop/?" + a.company.companyKey;
                $(".go-pcexhibitiont-currency").attr("href", d), 1 === a.company.isHadUnhandleForm && $(".red-remind2").css("display", "inline-block"), $.cookie("payStatus", a.company.payStatus), $.cookie("company_nameEn", a.company.nameEn), $.cookie("company_address", a.company.address), $.cookie("company_telephone", a.company.telephone), t.css("display", "block");
                var u = window.location.href.toString().split("/");
                u = u[u.length - 1].split(".")[0];
                var m = window.location.href.toString().split("/");
                m = m[m.length - 1].split(".")[0];
                var _ = getHtmlDocName();
                AUTHMANGER && 1 === Number(a.company.payStatus) && "linkman_list" === _ ? $("#export_contacts").css("display", "block") : $("#export_contacts").css("display", "none"), 0 == a.company.payStatus ? (t.text("未付费"), t.css("background-color", "#CCC"), "sample_list" === u && showSampleList(1)) : 1 == a.company.payStatus ? (t.text(""), t.css("background-color", "#f5a623"), t.css("height", "28px"), t.css("height", "28px"), t.css("padding-left", "24px"), getTimeDuring(a.company.endTime) ? $(".alert").css("display", "block") : console.log("付费用户你好，请关闭开发者工具以获取最优体验！"), "sample_list" === u && showSampleList(1)) : 2 == a.company.payStatus && (t.text("已逾期"), t.css("background-color", "#CCC"), AUTHMANGER ? ("sample_list" === u && showSampleList(1), $("#auth_pay").hasClass("active") || g_confirmAlert("你的公司付费账号已逾期，为使用付费功能，请尽快充值重新开通。", function () {
                                $.cookie("company_page", "3", {path: "/"}), location.href = "/my/company.html"
                            })) : AUTHPAY ? "company" !== m ? g_msgAlert("你的公司付费账号已逾期，为使用付费功能，请尽快充值重新开通。", function () {
                                        $.cookie("company_page", "3", {path: "/"}), location.href = "/my/company.html"
                                    }) : console.log("员工可付费！doNothing") : g_msgAlert("你的公司付费账号已逾期，为使用付费功能，请通知管理员续费。", function () {
                                    location.href = "../my/center.html"
                                }))
            } else $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: a.message,
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            });
            t.off().on("click", function () {
                return AUTHPAY !== !1 && ($.cookie("company_page", "3", {path: "/"}), void(location.href = "/my/company.html"))
            })
        }
    })
}
function productionPayStatic(e, t, a, o) {
    function n() {
        var e = document.createElement("div");
        return e.innerHTML = '<div class="modal fade modal2 instructions-remark-modal" tabindex="-1" role="dialog" id="apply_try_use">    <div class="modal-dialog" role="document" style="width: 400px;">      <div class="modal-content">      <button type="button" class="close " data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color:white;">×</span></button>        <div class="modal-header setting-modal-header"style="background-color:#20a0ff;height:150px;width:400px;">          <img style="margin-top:30px;"src="/images/alert_logo.png"/>          <h4 style="color:white;margin-top:10px;">当前功能还未开放，您可以申请试用!</h4>        </div>        <div class="modal-footer setting-modal-footer" style="padding-left: 80px;">            <button type="button" class="btn btn-primary" style="width: 100px;border-radius:15px;-   ebkit-border-radius:30px;margin-left:18px;" data-type="1" id="apply_use">申请试用</button>        </div>      </div>      <!-- /.modal-content -->    </div>    </div>', document.body.appendChild(e), e
    }

    var i = $("body");
    !Number(e) && $("#auth_nav_contract_template").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(o) && $("#auth_nav_contract_template").find("a[href]").eq(0).attr("href", "/sample/sample_store.html").addClass("aler-rice-like-content"), !Number(e) && $("#auth_nav_contract_left").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(o) && $("#auth_nav_contract_left").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler-rice-like-content"), !Number(e) && $("#auth_nav_production_template").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(a) && $("#auth_nav_production_template").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler-rice-like-content"), !Number(e) && $("#auth_nav_production_left").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(a) && $("#auth_nav_production_left").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler-rice-like-content"), !Number(e) && $("#auth_nav_production").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(t) && $("#auth_nav_production").find("a[href]").eq(0).attr("href", "javascript:void(0)").addClass("aler-rice-like-content"), $("#navbarNavProduction,.selContent_icon4,#selContent_body_right_wwbb").find("a[href]").each(function (a, o) {
        var n = $(this);
        Number(e) || n.eq(0).attr("href", "javascript:void(0)").addClass("aler_wff_content"), Number(e) && Number(t) && n.eq(0).attr("href", "javascript:void(0)").addClass("aler-rice-like-content")
    }), i.on("click", ".aler_wff_content", function () {
        g_msgAlert("检测到您是未付费用户或已逾期，请您付费或续费后可享受此功能！")
    }), i.on("click", ".aler-rice-like-content", function () {
        n();
        var e = $("#apply_try_use");
        e.modal("show"), $("body").on("click", "#apply_use", function (e) {
            var t = {
                url: "/api/company/apply/ontrial",
                type: "POST",
                data: {companyId: $.cookie("company_id"), userId: $.cookie("user_id"), applyType: 2}
            }, a = g_return200CbObj(function (e) {
                200 == e.code && g_msgAlert("申请成功")
            });
            sendAjax(t, a)
        })
    }), i.on("click", ".aler-bill-apply", function () {
        n();
        var e = $("#apply_try_use");
        e.modal("show"), $("body").on("click", "#apply_use", function (e) {
            var t = {
                url: "/api/company/apply/ontrial",
                type: "POST",
                data: {companyId: $.cookie("company_id"), userId: $.cookie("user_id"), applyType: 11}
            }, a = g_return200CbObj(function (e) {
                200 == e.code && g_msgAlert("申请成功")
            });
            sendAjax(t, a)
        })
    }), i.on("click", ".alert-rice-jurisdiction", function () {
        g_msgAlert("请联系公司所有者开通样品库存权限。")
    }), i.on("click", ".alert-bill-jurisdiction_in", function () {
        g_msgAlert("请联系公司所有者开通进项发票权限。")
    }), i.on("click", ".alert-bill-jurisdiction_out", function () {
        g_msgAlert("请联系公司所有者开通销项发票权限。")
    });
}
function ifRepeatPic(e) {
    for (var t = !1, a = 0, o = document.getElementById("previewOption").selectedIndex, n = 0; n < imgs[o].img_list.length; n++) {
        for (var i = 0; i < e.length; i++)if (e[i].name == imgs[o].img_list[n]) {
            t = !0, a++;
            break
        }
        if (0 != a)break
    }
    if (1 == t)return $.alert({animation: "bottom", closeAnimation: "scale", title: "提醒!", content: "有重复图片，请重新选择"}), !0;
    for (var n = (imgs[o].cur_num, 0); n < e.length; n++)imgs[o].cur_num + 1 <= 4 && (imgs[o].cur_num++, imgs[o].img_list.push(e[n].name));
    return !1
}
function deleteImg(e) {
    var t = document.getElementById("previewOption").selectedIndex;
    imgs[t].cur_num--, imgs[t].img_list.splice(e, 1)
}
function showCheck(e) {
    var t = document.getElementById("myCanvas"), a = t.getContext("2d");
    a.clearRect(0, 0, 1e3, 1e3);
    var o, n, i;
    a.font = "80px Arial", a.fillStyle = "#9b9b9b", a.fillText(e[0], 0, 100), i = parseInt(20 * Math.random()) + 30, a.fillText(e[1], i, 100), i = parseInt(20 * Math.random()) + 100, a.fillText(e[2], i, 100), i = parseInt(20 * Math.random()) + 160, a.fillText(e[3], i, 100), a.beginPath(), a.strokeStyle = "#9b9b9b", o = Math.floor(50 * Math.random()), n = Math.floor(60 * Math.random() + 20), a.moveTo(o, n), o = Math.floor(50 * Math.random() + 50), n = Math.floor(100 * Math.random()), a.lineTo(o, n), o = Math.floor(50 * Math.random() + 100), n = Math.floor(100 * Math.random()), a.lineTo(o, n), o = Math.floor(50 * Math.random() + 150), n = Math.floor(60 * Math.random() + 20), a.lineTo(o, n);
    var s = parseInt(4 * Math.random() + 3);
    a.lineWidth = s, a.stroke(), a.closePath()
}
function createCode() {
    code = "";
    for (var e = 4, t = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"), a = 0; a < e; a++) {
        var o = Math.floor(60 * Math.random());
        code += t[o]
    }
    code.length != e && createCode(), showCheck(code)
}
function validate() {
    clearTimeout(e);
    var e = setTimeout(function () {
        var e = $("#input_random").val().toUpperCase(), t = code.toUpperCase();
        if (e.length > 0)return e == t ? ($("#random_aside_mes").text(""), $(".checkcode").addClass("get-success"), $(".checkcode").removeClass("get-error"), $("#input_random").removeClass("need_input"), !0) : (MobileAlert("请输入正确的校验码！"), $(".checkcode").removeClass("get-success"), $(".checkcode").addClass("get-error"), !1)
    }, 50)
}
function getCode() {
    return code.toUpperCase()
}
function getInputHelp() {
    $.ajax({
        type: "get",
        url: "/api/companys/" + COMPANYID + "/sampleInputHelp",
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            if (200 == e.code) {
                for (var t = 0; t < e.supplierOptions.length; t++)$("#inputSupplierNameHelp").append("<div class='input_help_tag'>" + e.supplierOptions[t] + "</div>");
                for (var t = 0; t < e.widthOptions.length; t++)$("#inputSampleWidthHelp").append("<div class='input_help_tag'>" + e.widthOptions[t] + "</div>"), $("#inputSupplierSampleWidthHelp").append("<div class='input_help_tag'>" + e.widthOptions[t] + "</div>");
                for (var t = 0; t < e.weightOptions.length; t++)$("#inputSampleWeightHelp").append("<div class='input_help_tag'>" + e.weightOptions[t] + "</div>"), $("#inputSupplierSampleWeightHelp").append("<div class='input_help_tag'>" + e.weightOptions[t] + "</div>");
                for (var t = 0; t < e.componentOptions.length; t++)$("#inputSampleCompositionHelp").append("<div class='input_help_tag'>" + e.componentOptions[t] + "</div>"),
                    $("#inputSupplierSampleCompositionHelp").append("<div class='input_help_tag'>" + e.componentOptions[t] + "</div>");
                $("body input").on("click", function (e) {
                    $(".input_help").css("display", "none"), $("#" + $(e.target).attr("id") + "Help").css("display", "block")
                }), $("#inputSampleCompositionHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSampleComposition").val(t)
                }), $("#inputSampleWidthHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSampleWidth").val(t)
                }), $("#inputSampleWeightHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSampleWeight").val(t)
                }), $("#inputSupplierNameHelp").on("click", ".input_help_tag", function (e) {
                    var t = $(e.target).text();
                    $("#inputSupplierName").val(t)
                }), $("#inputSupplierSampleCompositionHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSupplierSampleComposition").val(t)
                }), $("#inputSupplierSampleWidthHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSupplierSampleWidth").val(t)
                }), $("#inputSupplierSampleWeightHelp .input_help_tag").on("click", function (e) {
                    var t = $(e.target).text();
                    $("#inputSupplierSampleWeight").val(t)
                });
                var a = $("#inputSupplierNameHelp"), o = a.html(), n = {
                    url: "/api/contact/company",
                    type: "GET",
                    data: {companyId: COMPANYID, searchType: "1", key: "", pageNo: 1, pageSize: 99}
                }, i = g_return200CbObj(function (e) {
                    var t = "";
                    return 0 === e.recordCount ? void a.html(o) : (t = e.contactCompanys.reduce(function (e, t) {
                            return e += '<div class="input_help_tag">' + t.name + "</div>"
                        }, ""), void a.html(t))
                });
                $("#inputSupplierName").on("input", g_throttle(function (e) {
                    var t = Trim(this.value);
                    return "" === t ? void a.html(o) : (n.data.key = t, void sendAjax(n, i))
                }, 500))
            } else 401 == e.code && $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "登录信息失效,请重新登录!",
                buttons: {
                    confirm: {
                        text: "确定", action: function () {
                            $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                        }
                    }
                }
            });
            endLoading()
        },
        error: function () {
            endLoading()
        }
    })
}
function onTheMobile() {
    return $(document).width() <= 768
}
function peihuo() {
    var e = $.cookie("company_id"), t = {
        url: "/api/companys/" + e + "/settings",
        type: "GET"
    }, a = g_return200CbObj(function (t) {
        sessionStorage.setItem("payableStart", t.payableStartDate), sessionStorage.setItem("receivableStart", t.receivableStartDate), localStorage.setItem("distributionProcess", 0), sessionStorage.setItem("ratio" + e, t.ratio), sessionStorage.setItem("imageSearch" + e, t.imageSearch), sessionStorage.setItem("classifyItemAutoIncrement", t.classifyItemAutoIncrement), sessionStorage.setItem("foreignCurrency", t.foreignCurrency)
    });
    sendAjax(t, a)
}
function MobileAlert(e) {
    var t = e;
    $.alert({animation: "bottom", closeAnimation: "scale", title: "提醒!", content: t, buttons: {cnofirm: {text: "确定"}}})
}
function quitCompany(e) {
    $.ajax({
        url: "/api/companys/" + e + "/quit", type: "post", dataType: "json", beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        }, success: function (e) {
            "200" == e.code && (location.href = "../my/center.html")
        }, error: function () {
            $.alert({
                animation: "bottom",
                closeAnimation: "scale",
                title: "提醒!",
                content: "服务器连接失败!",
                buttons: {confirm: {text: "确定"}}
            })
        }
    })
}
function testCloud(e, t, a, o) {
    if (a && "function" != typeof a && o && "function" != typeof o && console.error("make sure added a correct param!"), "undefined" != typeof e)if ($.inArray(e, t) == -1)if (t.push(e), $("li[value=" + e + "]").addClass("active"), 0 != t.length) {
        var n = t.join(",");
        $.cookie("tag_ids", n), a(n)
    } else o(n); else if (t.removeByValue(e), $("li[value=" + e + "]").removeClass("active"), 0 != t.length) {
        var n = t.join(",");
        $.cookie("tag_ids", n), a(n)
    } else o(n)
}
function getUsersListBusinessEdit(e, t) {
    var a = !1, o = Handlebars.compile($("#default_business_users_tpl").html()), n = $("#choose_edit_default_business_edit"), i = Handlebars.compile($("#list_business_users_tpl").html()), s = $("#choose_list_user_edit_business_edit"), r = Handlebars.compile($("#default_business_has_users_tpl").html()), l = $(".choose-div-new-business-edit"), p = '<li  data-id="all" name="所有员工"  class="active" style="color: #20A0FF;">所有员工 <img src="/images/Shape.png" alt="" class="edit-img"></li>', c = '<li  data-id="all" name="所有员工"  class="" style="color: #20A0FF;">所有员工 <img src="/images/Shape.png" alt="" class="edit-img"></li>', d = '<span class="choose-div-span" data-id="all">所有员工</span>', u = "", m = "", _ = "";
    t.length === e.length && (a = !0), e.forEach(function (e) {
        var a = !0;
        e.isActive = !1, t.forEach(function (t) {
            e.userId === t.userId && (e.isActive = !0), e.userId === t.userId && 0 === t.changeable && (a = !1)
        }), a && (u += i(e))
    }), t.forEach(function (e) {
        0 === e.changeable ? m += o(e) : _ += r(e)
    }), u += a ? p : c, n.html(m), a ? _ = d : _, l.html(_), s.html(u)
}
function getUsersListOnce() {
    var e = {
        type: "get",
        url: "/api/companys/" + $.cookie("company_id") + "/users"
    }, t = g_return200CbObj(function (e) {
        G_company_users = e.companyUsers
    });
    sendAjax(e, t)
}
function hoverImg(e) {
    $("tbody").on("mouseover mouseout", ".img_sample", function (e) {
        var t = $(e.target).attr("src");
        "mouseover" == e.type ? "/images/sampleImg.png" != t && "undefined" != typeof t && $("body").width() > 767 && ($(e.target).after('<div class="image_hover_box" style="z-index:1000;"><div class="select_img"><img style="height:240px;width:240px" src="' + t + '"></div></div>'), $(".image_hover_box").css("top", $(e.target).offset().top - $(document).scrollTop()), $(".image_hover_box").css("left", $(e.target).offset().left - $(document).scrollLeft()), $(".image_hover_box img").attr("src", $(e.target).attr("src").split("?x-oss")[0] + "?x-oss-process=image/resize,m_fixed,h_240,w_240")) : "mouseout" == e.type && $(".image_hover_box").remove()
    })
}
function unitsPublic(e) {
    var t = [], a = sessionStorage.getItem("generalUnit");
    if (a)return t = JSON.parse(a), e && e(t), t;
    var o = {
        type: "GET",
        url: "/api/companys/unit/?companyId=" + $.cookie("company_id")
    }, n = g_return200CbObj(function (a) {
        return t = a.units, a.units.length > 0 && sessionStorage.setItem("generalUnit", JSON.stringify(a.units)), e && e(t), t
    });
    sendAjax(o, n)
}
function isEnableAccountingUnitPublic(e) {
    var t = "", a = JSON.parse(sessionStorage.getItem("company_units_enable_" + COMPANYID) || null);
    if (a)return t = a, void(e && e(t));
    var o = {url: "/api/companys/" + COMPANYID + "/settings", type: "GET"}, n = g_return200CbObj(function (a) {
        var o = {};
        o.multiUnit = a.multiUnit, o.sellInventoryReduce = a.sellInventoryReduce, o.taxRate = a.taxRate, o.foreignCurrency = a.foreignCurrency, o.modules = a.modules, o.ratio = a.ratio, t = o, e && e(o), $.cookie("ratio", a.ratio, {path: "/"}), sessionStorage.setItem("company_units_enable_" + COMPANYID, JSON.stringify(o))
    });
    sendAjax(o, n)
}
function getUrlValue(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), a = window.location.search.substr(1).match(t);
    return null != a ? decodeURIComponent(a[2]) : null
}
function getHtmlDocName() {
    var e = window.location.href;
    return e = e.substring(e.lastIndexOf("/") + 1), e = e.substring(0, e.lastIndexOf("."))
}
function sendAjax(e, t) {
    var a = {type: "POST", data: "", dataType: "JSON", url: "", async: !0, sendAuth: !0}, o = $.extend(a, e || {});
    o.type = o.type.toUpperCase();
    var n = t.success || function (e) {
        }, i = function (e) {
        beginLoading(), e.setRequestHeader("Content-Type", "application/json"), o.sendAuth && e.setRequestHeader("authorization", $.cookie("authorization")), t.beforeSend && t.beforeSend(e)
    }, s = function () {
        endLoading(), t.complete && t.complete()
    }, r = t.hasError || function () {
            /*$.alert({
             animation: "bottom",
             closeAnimation: "scale",
             title: "提醒!",
             content: "服务器连接失败,请检测网络状况！",
             buttons: {confirm: {text: "确定"}}
             })*/
            console.log("服务器连接失败,请检测网络状况");
        };
    "GET" !== o.type && (o.data = JSON.stringify(getAllJson(o.data))), $.ajax({
        async: o.async,
        type: o.type,
        dataType: o.dataType,
        data: o.data,
        url: o.url,
        success: n,
        beforeSend: i,
        complete: s,
        error: function (e, t) {
            r.call(this, e, t)
        }
    })
}
function sendFileAjax(e, t) {
    $.ajax({
        url: e.url,
        type: e.type || "POST",
        data: e.formData,
        async: !0,
        cache: !1,
        contentType: !1,
        processData: !1,
        beforeSend: function (e) {
            e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 === Number(e.code) ? t.success(e) : responseNo200(Number(e.code), e.message)
        },
        complete: function () {
            t.complete && t.complete()
        },
        error: function (e) {
            g_msgAlert("与服务器链接失败")
        }
    })
}
function g_return200CbObj(e, t, a) {
    var o = {};
    return o.success = function (o) {
        var n = +o.code;
        200 === n ? e(o, function () {
                $("#bgj_load_model") && $("#bgj_load_model").hide()
            }) : responseNo200(n, o.message, t, a)
    }, o
}
function getAllJson(e) {
    for (key in e)"userAuthorityItems" != key && (e[key] instanceof Object ? getAllJson(e[key]) : "number" == typeof e[key] && (e[key] = Number(e[key])));
    return e
}
function responseNo200(e, t, a, o) {
    var n = t || "从服务器获取数据异常，请刷新页面重试！", a = a || function () {
        };
    o && o(), console.log("从服务器获取数据异常，请刷新页面重试！")
    /*$.alert({
     animation: "bottom",
     closeAnimation: "scale",
     title: "提醒!",
     content: n,
     buttons: {
     confirm: {
     text: "确定", action: function () {
     401 === e && (clearCookie(), location.href = "/login.html"), a(t)
     }
     }
     }
     })*/
}
function g_msgAlert(e, t) {
    t && "function" != typeof t && console.error("make sure added a correct param!"), $.alert({
        animation: "bottom",
        closeAnimation: "scale",
        title: "提醒!",
        content: e || "服务器连接失败!",
        buttons: {
            confirm: {
                text: "确定", action: t || function () {
                }
            }
        }
    })
}
function g_confirmAlert(e, t, a) {
    $.confirm({
        animation: "bottom",
        closeAnimation: "scale",
        title: "提醒!",
        content: e || "你确定要执行该项操作？",
        buttons: {
            confirm: {
                text: "确定", action: function () {
                    "function" == typeof t && t()
                }
            }, cancel: {
                text: "取消", action: function () {
                    "function" == typeof a && a()
                }
            }
        }
    })
}
function g_autoCloseTip(e, t) {
    $.confirm({
        animation: "bottom",
        closeAnimation: "scale",
        title: !1,
        content: e || "操作成功",
        autoClose: "cancel|" + (t ? t : 1e3),
        buttons: {cancel: {text: "确定", btnClass: "display-none"}}
    })
}
function phoneGoToWx() {
    return !g_is_phone || (location.href = "../modelweix.html", !1)
}
function g_throttle(e, t) {
    var a, o, n;
    return "undefined" == typeof t && (t = 500), function () {
        n = this, o = arguments, clearTimeout(a), a = setTimeout(function () {
            e.apply(n, o), a = null
        }, t)
    }
}
function g_formateString(e, t) {
    return e.replace(/\{#(\w+)#\}/g, function (e, a) {
        return void 0 === _typeof(t[a]) ? "" : t[a]
    })
}
function isPositiveInteger(e) {
    var t = /^\+?[1-9][0-9]*$/;
    return t.test(e)
}
function isPositiveIntegerOther(e) {
    var t = /^(0|[1-9][0-9]*)$/;
    return t.test(e)
}
function isDecimal(e) {
    var t = /^\d+(\.\d{1,2})?$/;
    return t.test(e)
}
function ReplaceSeperator(e) {
    var t, t = e.replace(/(\s)|(\t)|(\')|(\n')|(\')|(')|(，)|(:)|(：)/g, ",").replace(/(,)\1{1,}/g, ",").replace(/^\,/gi, "").replace(/\,$/gi, "");
    return t
}
function html2Escape(e) {
    return e.replace(/[<>&"]/g, function (e) {
        return {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;"}[e]
    })
}
function saveImage(e, t) {
    var a = e.toDataURL("image/png").replace("image/png", "image/octet-stream");
    saveFile(a, t || "file_" + (new Date).getTime() + ".png")
}
function saveFile(e, t) {
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    a.href = e, a.download = t;
    var o = document.createEvent("MouseEvents");
    o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(o)
}
function huahaiTesting(e) {
    var t = [13962, 8496], a = "";
    return a = t.indexOf(Number(e)) != -1
}
function closeModular(e) {
    var t = [3019e3], a = "";
    return a = t.indexOf(Number(e)) != -1
}
function NumberInputOnly(e) {
    return isNaN(parseFloat(e)) ? 0 : parseInt(Math.round(100 * parseFloat(e))) / 100
}
function correctNumberInput(e) {
    var t = "." === e[e.length - 1] ? "." : "";
    return (isNaN(parseFloat(e)) ? "" : parseInt(Math.round(100 * parseFloat(e))) / 100) + t
}
function convertByPn(e, t) {
    if (isNaN(e))return null;
    var a, o = parseFloat(e);
    return a = isNaN(t) ? 1 : t > 0 ? Math.pow(10, t) : 1, o *= a, o = Math.round(o), o = Math.floor(o) / a
}
function correctNumberInputAccurate(e) {
    if (isUndefinedType(e))return "";
    var t = "", a = e[e.length - 1], o = e[e.length - 2], n = e[e.length - 3];
    if (t = "." === o && "0" === a ? o + a : "." === n && "0" === o && "0" === a ? n + o + a : "." === a ? "." : "", e.toString().split(".").length > 1 && e.toString().split(".")[1].length < 4) {
        "" === t && ("0" === a && (t += "0"), "0" === o && "0" === a && (t += "0"));
        var i = (isNaN(parseFloat(e)) ? "" : parseInt(Math.round(1e3 * parseFloat(e))) / 1e3) + t, s = i.split("").reduce(function (e, t) {
            return e[t]++ || (e[t] = 1), e
        }, {});
        s["."] > 1 && (t = t.substring(0, t.length - 1))
    }
    return (isNaN(parseFloat(e)) ? "" : parseInt(Math.round(1e3 * parseFloat(e))) / 1e3) + t
}
function correctNumberInputFourPlace(e) {
    if (isUndefinedType(e))return "";
    var t = "", a = e[e.length - 1], o = e[e.length - 2], n = e[e.length - 3], i = e[e.length - 4];
    if (t = "." === o && "0" === a ? o + a : "." === n && "0" === o && "0" === a ? n + o + a : "." === i && "0" === n && "0" === o && "0" === a ? i + n + o + a : "." === a ? "." : "", e.toString().split(".").length > 1 && e.toString().split(".")[1].length < 5) {
        "" === t && ("0" === a && (t += "0"), "0" === o && "0" === a && (t += "0"));
        var s = (isNaN(parseFloat(e)) ? "" : parseInt(Math.round(1e4 * parseFloat(e))) / 1e4) + t, r = s.split("").reduce(function (e, t) {
            return e[t]++ || (e[t] = 1), e
        }, {});
        r["."] > 1 && (t = t.substring(0, t.length - 1))
    }
    return (isNaN(parseFloat(e)) ? "" : parseInt(Math.round(1e4 * parseFloat(e))) / 1e4) + t
}
function mathSign(e) {
    return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
}
function treeObj(e) {
    var t = {};
    for (var a in e) {
        var o = e[a];
        t[a] = "object" === ("undefined" == typeof o ? "undefined" : _typeof(o)) ? arguments.callee(o) : o
    }
    return t.nodes = [], t
}
function toTreeData(e, t) {
    function a(e) {
        if (0 !== n.length)for (var o = 0; o < e.length; o++) {
            for (var i = 0; i < n.length; i++)if (e[o][t.id] === n[i][t.parentId]) {
                var s = treeObj(n[i]);
                s.text = s.name, e[o].nodes.push(s), n.splice(i, 1), i--
            }
            a(e[o].nodes)
        }
    }

    function o(e) {
        if (e && (0 === e.nodes.length && delete e.nodes, e.nodes && e.nodes.length > 0)) {
            var t = 0;
            for (t = 0; t < e.nodes.length; t++)o(e.nodes[t])
        }
    }

    for (var n = e, i = [], s = 0; s < n.length; s++)if (0 === n[s][t.parentId]) {
        var r = treeObj(n[s]);
        r.text = r.name, i.push(r), n.splice(s, 1), s--
    }
    return a(i), i.forEach(function (e) {
        o(e)
    }), i
}
function addNum(e, t, a, o) {
    var n, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    e[t].some(function (e, t) {
        if (e.indexOf(o) > -1)return n = t, !0
    }), "number" == typeof n ? e[t][n] = Number(i) ? Math.round(10 * (parseFloat(e[t][n]) + parseFloat(a))) / 10 + o : correctNumberInput(parseFloat(e[t][n]) + parseFloat(a)) + o : (a = Number(i) ? Math.round(10 * a) / 10 : a, e[t].push(a + o))
}
function clearCookie() {
    var e = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (e)for (var t = e.length; t--;)document.cookie = e[t] + "=0;path=/;expires=" + new Date(0).toUTCString(), document.cookie = e[t] + "=0;path=/;domain=" + document.domain + ";expires=" + new Date(0).toUTCString(), document.cookie = e[t] + "=0;path=/;domain=kevis.com;expires=" + new Date(0).toUTCString();
    $("#divcookie").html(document.cookie)
}
function ArrayObjLikeArray(e) {
    var t = [], a = [];
    e.forEach(function (e, a) {
        Object.keys(e).length && t.push(JSON.stringify(e))
    });
    var a = [].concat(_toConsumableArray(new Set(t)));
    return [a.length != t.length, a]
}
function blockSubmission() {
    return !1
}
function getElementToPageLeft(e) {
    for (var t = e.offsetLeft, a = e.offsetParent; null != a;)t += a.offsetLeft + (a.offsetWidth - a.clientWidth) / 2, a = a.offsetParent;
    return t
}
function getElementToPageTop(e) {
    for (var t = e.offsetTop, a = e.offsetParent; null != a;)t += a.offsetTop + (a.offsetHeight - a.clientHeight) / 2, a = a.offsetParent;
    return t
}
function onLine(e) {
    var t = new Image;
    t.src = "https://buguanjia.com/images/loginLine.png?" + (new Date).valueOf(), t.onload = function () {
        lineFlag2 = !0, lineFlag1 != lineFlag2 && (lineFlag1 = !0)
    }, t.onerror = function () {
        lineFlag2 = !1, lineFlag1 != lineFlag2 && lineAlert("请检测网络状况，已经与服务器断开")
    }
}
function simulationsetInterval() {
    var e = void 0;
    clearTimeout(e), onLine(), e = setTimeout(function () {
        simulationsetInterval()
    }, 8e3)
}
function lineAlert(e) {
    var t = '<div class="no_interent_mark"></div>', a = void 0;
    clearTimeout(a), $("body").append(t), $(".no_interent_mark").css({
        display: "none",
        position: "fixed",
        top: "18%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        "max-width": "300px",
        "box-sizing": "border-box",
        border: "1px solid #AAAAAA",
        "border-radius": "10px",
        background: "rgba(41, 44, 49, 1)",
        color: "white",
        "font-size": "16px",
        "text-align": "center",
        "line-height": "30px",
        padding: "10px 20px"
    }), $(".no_interent_mark").html(e), $(".no_interent_mark").slideDown(500), a = setTimeout(function () {
        $(".no_interent_mark").slideUp(500, function () {
            $(".no_interent_mark").remove()
        })
    }, 4e3)
}
function dataGroup(e, t) {
    var a, o = {};
    return e.forEach(function (e) {
        a = "function" == typeof t ? t(e) : e[t], o[a] ? o[a].push(e) : o[a] = [e]
    }), delete o.undefined, o
}
function ListEnterBind(e, t) {
    $(e).on("keydown", "input", function (e) {
        13 === e.keyCode && $(t).trigger("click")
    })
}
function getDefaultStock(e) {
    var t = {
        url: "/api/warehouse",
        type: "get",
        data: {companyId: COMPANYID, searchType: 1, pageNo: 1, pageSize: 100}
    }, a = g_return200CbObj(function (t) {
        var a = 0, o = "";
        t.warehouses.forEach(function (e) {
            Number(e.isDefault) && (a = 1, o = e)
        }), e && a && e(o)
    });
    sendAjax(t, a)
}
function getTimeLate(e) {
    var t = (new Date).getTime() + 864e5 * e, a = new Date(t).Format("yyyy-MM-dd");
    return a
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, SAMPLEID = $.cookie("sample_id"), COMPANYID = $.cookie("company_id"), AUTH = {
    COMPANY: {
        basicsTotal: "basic_data",
        total: "company",
        info: "company_info",
        user: "company_user",
        pay: "company_pay",
        role: "company_role",
        base: "company_base_set",
        setScreat: "company_screat_set",
        lookScreat: "company_screat_view",
        unit: "company_unit",
        unitUpdate: "company_unit_add_update",
        unitDel: "company_unit_delete"
    },
    SAMPLE: {
        total: "sample",
        addUpdate: "sample_add_update",
        del: "sample_delete",
        recycle: "sample_recycle",
        output: "sample_output",
        print: "sample_print",
        share: "sample_share",
        store: "sample_store",
        registerAddUpdate: "sample_register_add_update",
        registerDelete: "sample_register_delete",
        registerPrint: "sample_register_print"
    },
    CONTACTUSER: {
        total: "contact",
        addUpdate: "contact_user_add_update",
        viewAll: "contact_user_view_all",
        del: "contact_user_delete",
        recycle: "contact_recycle"
    },
    CONTACTCUSTOMER: {
        total: "contact_customer",
        addUpdate: "contact_customer_add_update",
        viewAll: "contact_customer_participant",
        del: "contact_customer_delete",
        recycle: "contact_customer_recycle",
        customerExport: "contact_customer_export",
        supplierExport: "contact_supplier_export"
    },
    PROCESS: {total: "company_process", addUpdate: "company_process_add_update", del: "company_process_delete"},
    PROCESSTEMPLATE: {
        total: "company_process_template",
        addUpdate: "company_process_template_add_update",
        del: "company_process_template_delete"
    },
    CONTACTSUPPLIER: {
        total: "contact_supplier",
        addUpdate: "contact_supplier_add_update",
        viewAll: "contact_supplier_participant",
        del: "contact_supplier_delete",
        recycle: "contact_supplier_recycle"
    },
    CONTACTOTHER: {
        total: "contact_other",
        addUpdate: "contact_other_add_update",
        viewAll: "contact_other_participant",
        del: "contact_other_delete",
        recycle: "contact_other_recycle"
    },
    CONTACTFACTORY: {
        total: "contact_factory",
        addUpdate: "contact_factory_add_update",
        viewAll: "contact_factory_participant",
        del: "contact_factory_delete"
    },
    WAREHOUSE: {total: "warehouse", addUpdate: "warehouse_add_update", del: "warehouse_delete"},
    CURRENCY: {total: "company_currency", addUpdate: "company_currency_add_update", del: "company_currency_delete"},
    ACCOUNT: {total: "company_account", addUpdate: "company_account_add_update", del: "company_account_delete"},
    BIZOPP: {
        total: "biz_opp",
        view: "biz_opp_view",
        addUpdate: "biz_opp_add_update",
        selectView: "sample_select_form_view",
        publicSample: "sample_public",
        expoSample: "sample_expo",
        sampleSelectForm: "sample_select_form",
        sampleSelectFormDetail: "sample_select_form_detail",
        sampleSelectFormStatistic: "sample_select_form_statistic"
    },
    PURCHASE: {
        total: "purchase",
        purchaseOrder: "purchase_order",
        purchaseOrderAddUpdate: "purchase_order_add_update",
        purchaseOrderDelete: "purchase_order_delete",
        purchaseOrderPrint: "purchase_order_print",
        purchaseStock: "purchase_stock",
        purchaseStockAddUpdate: "purchase_stock_add_update",
        purchaseStockDelete: "purchase_stock_delete",
        purchaseStockPrint: "purchase_stock_print",
        purchaseStockViewAmount: "purchase_stock_view_amount",
        purchaseReturn: "purchase_return",
        purchaseReturnAddUpdate: "purchase_return_add",
        purchaseReturnDelete: "purchase_return_delete",
        purchaseReturnPrint: "purchse_return_print",
        purchaseReturnViewAmount: "purchase_return_view_amount",
        purchaseReportForm: "purchase_report_form",
        purchaseOrderStatisticalTable: "purchase_order_statistical_table",
        purchaseStockDetailsDySample: "purchase_stock_details_by_sample",
        purchaseReturnDetailsByOrder: "purchase_return_details_by_sample",
        purchaseStockStatisticalTable: "purchase_stock_statistical_table"
    },
    SALE: {
        total: "sell",
        cost: "sell_cost",
        sellOrder: "sell_order",
        sellOrderAddUpdate: "sell_order_add_update",
        sellOrderDelete: "sell_order_delete",
        sellOrderPrint: "sell_order_print",
        sellDeliver: "sell_deliver",
        sellDeliverAddUpdate: "sell_deliver_add_update",
        sellDeliverDelete: "sell_deliver_delete",
        sellDeliverPrint: "sell_deliver_print",
        sellDeliverViewAmount: "sell_deliver_view_amount",
        sellDeliverExport: "sell_deliver_export",
        sellReturn: "sell_return",
        sellReturnAddUpdate: "sell_return_add",
        sellReturnDelete: "sell_return_delete",
        sellReturnPrint: "sell_return_print",
        sellReturnViewAmount: "sell_return_view_amount",
        sellReportForm: "sell_report_form",
        sellOrderStatisticalTable: "sell_order_statistical_table",
        sellDetailsDySample: "sell_deliver_details_by_sample",
        sellDetailsByOrder: "sell_return_details_by_sample",
        sellStatisticalTable: "sell_statistical_table",
        finance: "sell_order_confirm"
    },
    RECEIVABLE: {
        total: "finance_receivable",
        receipt: "finance_receipt",
        receiptAddUpdate: "finance_receipt_add_update",
        receiptDelete: "finance_receipt_delete",
        receiptPrint: "finance_receipt_print",
        receiptOther: "finance_receipt_other",
        receiptOtherAddUpdate: "finance_receipt_other_add_update",
        receiptOtherDelete: "finance_receivable_other_delete",
        receiptOtherPrint: "finance_receivable_other_print",
        initialEntry: "finance_receivable_initial",
        initialEntryAddUpdate: "finance_receivable_initial_add_update",
        initialEntryDelete: "finance_receivable_initial_delete",
        initialEntryPrint: "finance_receivable_initial_print",
        receiptReportForm: "FINANCE_RECEIVABLE_REPORT_FORM",
        receiptReportTable: "finance_receipt_statistical_table",
        receiptReportBySample: "finance_receivable_report_by_sample",
        receiptReportByOrder: "finance_receivable_report_by_order",
        receiptReportReceivableTable: "finance_receivable_statistical_table",
        receiptReportBalanceTable: "finance_receivable_balance_table"
    },
    PAYABLE: {
        total: "finance_payable",
        receipt: "finance_pay",
        receiptAddUpdate: "finance_pay_add_update",
        receiptDelete: "finance_pay_delete",
        receiptPrint: "finance_pay_print",
        financeProductionPayable: "finance_production_payable",
        financeProductionPayableAddUpdate: "finance_production_payable_add_update",
        financeProductionPayableDelete: "finance_production_payable_delete",
        financeProductionPayablePrint: "finance_production_payable_print",
        receiptOther: "finance_pay_other",
        receiptOtherAddUpdate: "finance_pay_other_add_update",
        receiptOtherDelete: "finance_pay_other_delete",
        receiptOtherPrint: "finance_pay_other_print",
        initialEntry: "finance_payable_initial",
        initialEntryAddUpdate: "finance_payable_initial_add_update",
        initialEntryDelete: "finance_payable_initial_delete",
        initialEntryPrint: "finance_payable_initial_print",
        receiptReportForm: "FINANCE_PAYABLE_REPORT_FORM",
        receiptReportTable: "finance_pay_statistical_table",
        receiptReportBySample: "finance_payable_report_by_sample",
        receiptReportByOrder: "finance_payable_report_by_order",
        receiptReportReceivableTable: "finance_payable_statistical_table",
        receiptReportBalanceTable: "finance_payable_balance_table",
        receiptReportOtherTable: "finance_pay_other_statistical_table"
    },
    STOCK: {
        total: "store",
        warehouse: "store_in",
        warehouseAddUpdate: "store_in_add_update",
        warehouseDelete: "store_in_delete",
        warehousePrint: "store_in_print",
        cutting: "store_cut",
        cuttingAddUpdate: "store_cut_add_update",
        cuttingDelete: "store_cut_delete",
        cuttingPrint: "store_cut_print",
        allocation: "store_dump",
        allocationAddUpdate: "store_dump_add_update",
        allocationDelete: "store_dump_delete",
        allocationPrint: "store_dump_print",
        outbound: "store_out",
        outboundAddUpdate: "store_out_add_update",
        outboundDelete: "store_out_delete",
        outboundPrint: "store_out_print",
        inventory: "store_check",
        inventoryAddUpdate: "store_check_add_update",
        inventoryDelete: "store_check_delete",
        inventoryPrint: "store_check_print",
        warehouseInit: "store_in_initial",
        warehouseInitAddUpdate: "store_in_initial_add_update",
        warehouseInitDelete: "store_in_initial_delete",
        warehouseInitPrint: "store_in_initial_print",
        distribution: "order_blank",
        distributionAddUpdate: "order_blank_add_update",
        distributionDelete: "order_blank_delete",
        distributionPrint: "order_blank_print",
        storeReportForm: "store_report_form",
        stockList: "store_statistic",
        immediateStockList: "just_in_time_store",
        inventoryAccountList: "store_book",
        inventoryStatistic: "purchase_sale_stock_statistical_table",
        inventoryAccountingList: "store_accounting",
        surplusList: "store_profit",
        surplusListPrint: "store_profit_print",
        lossList: "store_loss",
        lossListPrint: "store_loss_print"
    },
    PRODUCTION: {
        total: "production",
        productionInstruct: "production_instruct",
        productionInstructAddUpdate: "production_instruct_add_update",
        productionInstructDelete: "production_instruct_delete",
        productionInstructPrint: "production_instruct_print",
        productionInstructView: "production_instruct_view",
        outsourceProcess: "outsource_process",
        outsourceProcessAddUpdate: "outsource_process_add_update",
        outsourceProcessDelete: "outsource_process_delete",
        outsourceProcessPrint: "outsource_process_print",
        outsourceProcessView: "outsource_process_view",
        ProductionMaterial: "production_material",
        productionMaterialAddUpdate: "production_material_add_update",
        productionMaterialDelete: "production_material_delete",
        productionMaterialPrint: "production_material_print",
        productionMaterialView: "production_material_view",
        processComplete: "process_complete",
        processCompleteAddUpdate: "process_complete_add_update",
        processCompleteDelete: "process_complete_delete",
        processCompletePrint: "process_complete_print",
        processCompleteView: "process_complete_view",
        processStore: "process_store",
        processStoreAddUpdate: "process_store_add_update",
        processStoreDelete: "process_store_delete",
        processStorePrint: "process_store_print",
        processTransfer: "process_transfer",
        processTransferAddUpdate: "process_transfer_add_update",
        processTransferDelete: "process_transfer_delete",
        processTransferPrint: "process_transfer_print",
        processTransferView: "process_transfer_view",
        outsourceStore: "outsource_store",
        outsourceStoreAddUpdate: "outsource_store_add_update",
        outsourceStoreDelete: "outsource_store_delete",
        outsourceStorePrint: "outsource_store_print",
        productionReportForm: "production_report_form",
        outsourceProcessStatistic: "outsource_process_statistic",
        productionMaterialStatistic: "production_material_statistic",
        outsourceStoreStatistic: "outsource_store_statistic",
        documentaryProgressTable: "documentary_progress_table"
    },
    INSTRUCTIONS: {
        total: "production_template",
        productionTemplateAddUpdate: "production_template_add_update",
        productionTemplateDelete: "production_template_delete",
        productionTemplatePrint: "production_template_print"
    },
    CONTRACT: {total: "contract", contractAddUpdate: "contract_add_update", contractPrint: "contract_print"},
    INVOICE: {
        total: "invoice",
        invoice_in: "invoice_in",
        invoice_in_add_update: "invoice_in_add_update",
        invoice_out: "invoice_out",
        invoice_out_add_update: "invoice_out_add_update"
    }
}, AUTHSTATE, AUTHPAY = !1, AUTHMANGER = !1;
if (document.getElementById("auth_nav_printSample")) {
    auth_nav_checked();
    var navselectnum = $.cookie("navselectnum");
    !navselectnum || $(".navselectnum").text(navselectnum).show()
}
var sampleListPageSize = 10, messagePageSize = 10;
window.pre_page_num = "";
var isPhone = !0, lowIe = !0, APP = {
    attributeLength: 256,
    sampleListSearchType: 0,
    sampleInfoText: {
        nameLength: {max: 128, min: 0},
        itemNoLength: {max: 128, min: 1},
        formerItemNoLength: {max: 128, min: 0},
        componentLength: {max: 128, min: 0},
        nameEnLength: {max: 128, min: 0},
        widthLength: {max: 128, min: 0},
        weightLength: {max: 128, min: 0},
        specificationLength: {max: 128, min: 0},
        publicRemarkLength: {max: 400, min: 0},
        privateRemarkLength: {max: 400, min: 0},
        lableRemarkLength: {max: 256, min: 0},
        attributeLength: {max: 256, min: 0},
        supplierInfo: {
            supplierNameLength: {max: 128, min: 0},
            itemNoLength: {max: 128, min: 0},
            nameLength: {max: 128, min: 0},
            nameEnLength: {max: 128, min: 0},
            widthLength: {max: 128, min: 0},
            weightLength: {max: 128, min: 0},
            componentLength: {max: 128, min: 0},
            specificationLength: {max: 128, min: 0},
            clothPriceLength: {max: 128, min: 0},
            finishedPriceLength: {max: 128, min: 0}
        }
    },
    companyInfo: {validStatus: -1, payStatus: -1}
}, date = new Date;
date.setTime(date.getTime() + 6048e5), $.ajaxSetup({cache: !1});
var sampleArr = [], inputArr = [], sampleIds = "";
redirect(), $(document).ready(function () {
    function e() {
        $(document).width() < 678 || ($("#BGJLOGO1").attr("src", "/images/logoandnameindex.png"), $("#BGJLOGO2").attr("src", "/images/logoandnameindex.png"))
    }

    function t() {
        for (var e = !1, t = !0, a = getHtmlDocName(), o = navigator.userAgent, n = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], i = ["", "index", "about", "contact_us", "register", "login", "term", "contact_us", "down_app_and", "down_app_ios", "pay", "reset-password", "share_singal", "share", "shares", "product", "spot_goods_first", "spot_goods_second", "trade_companies"], s = 0; s < n.length; s++)o.indexOf(n[s]) > 0 && (e = !0);
        for (var s = 0; s < i.length; s++)a === i[s] && (t = !1);
        if (e && t) {
            $("meta[name='viewport']").removeAttr("content");
            var r = $(".navbar-center[role=navigation]");
            r.find("div").eq(0).css("width", "100%"), r.find(".navbar-nav").eq(0).find(".pc-nav").css("padding", "0.375em 10px"), r.find(".navbar-nav").eq(1).css({
                "padding-top": "0.375em",
                "margin-top": "4px"
            }), r.find(".navbar-header").css("display", "none")
        }
    }

    var a = {};
    $("[_t_nav]").hover(function () {
        var e = $(this), t = e.parents(".navbar-center").find(".navigation-down").find(".navigation-down-inner"), o = e.parents(".navbar-center").find(".navigation-down").find(".navigation-down-inner-for-float"), n = e.attr("_t_nav");
        if ("LI" === e.prop("tagName"))if (1 === Number(e.attr("data-alignment"))) {
            var i = Number(e.offset().left);
            1 === Number(e.attr("data-add-distance")) ? o.css("left", i + 20 + "px") : o.css("left", i + "px"), t.css("left", "auto")
        } else o.css("left", "auto"), t.css("left", "50%");
        clearTimeout(a[n + "_timer"]), a[n + "_timer"] = setTimeout(function () {
            $("[_t_nav]").each(function () {
                $(this)[n == $(this).attr("_t_nav") ? "addClass" : "removeClass"]("nav-up-selected")
            }), $("#" + n).stop(!0, !0).show()
        }, 0)
    }, function () {
        var e = $(this).attr("_t_nav");
        clearTimeout(a[e + "_timer"]), a[e + "_timer"] = setTimeout(function () {
            $("[_t_nav]").removeClass("nav-up-selected"), $("#" + e).stop(!0, !0).hide()
        }, 0)
    });
    var o = $(".navigation-down-inner");
    o.on("click", ".data-type a[data-type]", function (e) {
        var t = Number($(this).attr("data-type"));
        t && $.cookie("company_page", t, {path: "/"}), location.href = "../my/company.html"
    }), o.on("click", ".data-type a[data-company-type]", function (e) {
        var t = Number($(this).attr("data-company-type"));
        t && $.cookie("company_type", t, {path: "/"})
    }), e(), t(), $(".next").on("click", function () {
        $.alert({
            title: "提醒",
            content: "请静候，正在开发中...",
            animation: "bottom",
            closeAnimation: "scale",
            buttons: {confirm: {text: "确定"}}
        })
    }), $(".avatar_img").attr("src", $.cookie("avatar_url") + "?x-oss-process=image/resize,m_fixed,h_40,w_40"), "sample_list.html" == location.href.split("/").pop() && $.cookie("tag_id", "", {path: "/"}), $(".new_sample").on("click", function () {
        $.cookie("new_type", "0", {path: "/"})
    }), $(".return_index").on("click", function () {
        location.href = "/index.html"
    }), $("#companyName").text($.cookie("company_name")), $(".mobileCheck").change(function () {
        var e = $(".mobileCheck").val();
        0 === e.length || /^1[34578]\d{9}$/.test(e) ? ($("#user_mes").text(""), $("#mobile_aside_mes").text("").css("display", "none")) : ($("#user_mes").text("请输入正确的手机号！"), $("#mobile_aside_mes").text("请输入正确的手机号").css("display", "block"))
    }), $(".emailCheck").change(function () {
        var e = $(".emailCheck").val();
        0 === e.length || check_email(e) ? $("#email_aside_mes").text("").css("display", "none") : $("#email_aside_mes").text("请输入正确的邮箱号").css("display", "block")
    }), $(".numberCheck").keyup(function () {
        $(".numberCheck").trigger("change")
    }), $(".numberCheck").change(function () {
        $(".numberCheck").val().length > 0 ? parseInt($(".numberCheck").val()) > 0 && parseInt($(".numberCheck").val()) < 99999 && /^([0-9]+)$/.test($(".numberCheck").val()) ? $("#number_aside_mes").text("").css("display", "none") : $("#number_aside_mes").text("请输入正确的数量").css("display", "block") : $("#number_aside_mes").text("").css("display", "none")
    }), $(".inputSampleTag").on("click", function () {
        $("#inputSampleTag").focus()
    }), $("#shareSampleBtn").on("click", function () {
        var e, t = new Date;
        $.ajax({
            url: "/api/samples/share",
            type: "post",
            dataType: "json",
            data: JSON.stringify({companyId: COMPANYID}),
            beforeSend: function (e) {
                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                /*, $.cookie("authorization") || e.abort()*/
            },
            success: function (a) {
                if (200 == a.code) {
                    if (1 === Number($.cookie("payStatus")))var o = "https://" + location.href.split("//").pop().split("/").shift() + "/sample/share.html?shareKey=" + a.shareKey + "&companyName=" + encodeURI($.cookie("company_name")) + "&companyAddress=" + encodeURI($.cookie("company_address")) + "&companyTelephone=" + encodeURI($.cookie("company_telephone")); else var o = "https://" + location.href.split("//").pop().split("/").shift() + "/sample/shares.html?shareKey=" + a.shareKey + "&companyName=" + encodeURI($.cookie("company_name")) + "&companyAddress=" + encodeURI($.cookie("company_address")) + "&companyTelephone=" + encodeURI($.cookie("company_telephone"));
                    e = toUtf8(o), t.getDate(), t.getTime(), t.setHours(t.getHours() + 720), t.toLocaleString();
                    var n = "链接有效日期: " + t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日" + t.getHours() + ":" + (t.getMinutes() >= 10 ? t.getMinutes() : "0" + t.getMinutes());
                    $("#invite_link").val(o), $("#code").html(""), $("#code").qrcode({
                        render: "canvas",
                        width: 180,
                        height: 180,
                        text: e
                    }), $("#invite_end_time").html(n)
                }
            },
            error: function () {
            }
        })
    }), $("#copy_invite_link").on("click", function (e) {
        var t = e.target, a = t.dataset.copytarget, o = a ? document.querySelector(a) : null;
        if (o) {
            o.select();
            try {
                document.execCommand("copy"), o.blur(), t.classList.add("copied"), $("#copy_invite_link").text("复制成功"), $("#copy_invite_link").css("background-color", "green"), $("#copy_invite_link").css("border", "1px solid green"), setTimeout(function () {
                    t.classList.remove("copied"), $("#copy_invite_link").css("background-color", "#4a90e2"), $("#copy_invite_link").css("border", "1px solid #4a90e2"), $("#copy_invite_link").text("复制链接")
                }, 3e3)
            } catch (n) {
                $.alert({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "复制失败，请手动复制（Ctrl+C）",
                    buttons: {confirm: {text: "确定"}}
                })
            }
        }
    }), $("#copy_invite_link_sample").on("click", function (e) {
        var t = e.target, a = t.dataset.copytarget, o = a ? document.querySelector(a) : null;
        if (o) {
            o.select();
            try {
                document.execCommand("copy"), o.blur(), t.classList.add("copied"), $("#copy_invite_link_sample").text("复制成功"), $("#copy_invite_link_sample").css("background-color", "green"), $("#copy_invite_link_sample").css("border", "1px solid green"), setTimeout(function () {
                    t.classList.remove("copied"), $("#copy_invite_link_sample").css("background-color", "#4a90e2"), $("#copy_invite_link_sample").css("border", "1px solid #4a90e2"), $("#copy_invite_link_sample").text("复制链接")
                }, 3e3)
            } catch (n) {
                $.alert({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "复制失败，请手动复制（Ctrl+C）",
                    buttons: {confirm: {text: "确定"}}
                })
            }
        }
    }), $("#keySearch").keyup(g_throttle(function (e) {
        var t = $("#keySearch").val();
        $.cookie("search_key", t, {path: "/"}), t ? showSampleList(1, null, t) : (huahaiTesting(COMPANYID) ? ($("#sampleListSearchType").text("Style NO.款号"), APP.sampleListSearchType = 441) : ($("#sampleListSearchType").text("样品"), APP.sampleListSearchType = 0), showSampleList(1))
    }, 500)), $("#keySearchIcon").on("click", function () {
        var e = $("#keySearch").val();
        showSampleList(1, null, e)
    }), $(".goCenter").on("click", function () {
        $.cookie("noJump", "true", {path: "/"}), location.href = "/my/center.html"
    })
}), String.prototype.toUnicode = function () {
    return escape(this).replace(new RegExp("%u[0-9a-f]{4}", "gim"), function (e) {
        return "\\" + e.substring(1)
    }).replace(new RegExp("%[0-9a-f]{2}", "gim"), function (e) {
        return "\\u00" + e.substring(1)
    })
}, $(".chooseFile").on("click", function () {
    "disabled" != $(this).attr("disabled") && $("#uploadFiles").trigger("click")
}), auth_check(), $(document).ready(function () {
    $(".logout").on("click", function () {
        $("#logout").trigger("click")
    }), $("#logout").on("click", function () {
        $.ajax({
            url: "/api/user/account/logout", type: "post", beforeSend: function (e) {
                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            }, success: function (e) {
                200 == e.code ? ($.cookie("isSample", 0, {path: "/"}), $.cookie("authorization", "", {path: "/"}), $.cookie("avatar_url", "/images/avatar.png", {path: "/"}), $.cookie("contact_linkman_send_id", "", {path: "/"}), $.cookie("contact_linkman_price_id", "", {path: "/"}), location.href = "/index.html") : 401 == e.code ? /*$.alert({
                         animation: "bottom",
                         closeAnimation: "scale",
                         title: "提醒!",
                         content: "登录信息失效,请重新登录!",
                         buttons: {
                         confirm: {
                         text: "确定", action: function () {
                         $.cookie("authorization", "", {path: "/"}), location.href = "/login.html"
                         }
                         }
                         }
                         })*/console.log("登录信息失效,请重新登录") : $.confirm({
                            animation: "bottom",
                            closeAnimation: "scale",
                            title: "提醒!",
                            content: "正常退出失败,强制退出？",
                            buttons: {
                                confirm: {
                                    text: "确定", action: function () {
                                        $.cookie("authorization", "", {path: "/"}), $.cookie("avatar_url", "/images/avatar.png", {path: "/"}), location.href = "/index.html"
                                    }
                                }
                            }
                        })
            }, error: function () {
                $.confirm({
                    animation: "bottom",
                    closeAnimation: "scale",
                    title: "提醒!",
                    content: "连接服务器失败,强制退出？",
                    buttons: {
                        confirm: {
                            text: "确定", action: function () {
                                $.cookie("authorization", "", {path: "/"}), $.cookie("avatar_url", "/images/avatar.png", {path: "/"}), location.href = "/index.html"
                            }
                        }
                    }
                })
            }
        })
    })
});
var control_Id, total_page_num, set_page_num, total_record_num;
$("#set_page_pre").on("click", function () {
    set_page_num <= 1 ? set_page_num = 1 : (set_page_num -= 1, $.cookie("tag_id") ? page_show(parseInt(set_page_num), parseInt($.cookie("tag_id")), $.cookie("search_key")) : $.cookie("search_key") ? page_show(parseInt(set_page_num), null, $.cookie("search_key")) : page_show(parseInt(set_page_num)))
}), $("#set_page_next").on("click", function () {
    set_page_num >= total_page_num ? set_page_num = total_page_num : (set_page_num += 1, $.cookie("tag_id") ? page_show(parseInt(set_page_num), parseInt($.cookie("tag_id")), $.cookie("search_key")) : $.cookie("search_key") ? page_show(parseInt(set_page_num), null, $.cookie("search_key")) : page_show(parseInt(set_page_num)))
}), $(".set_page_num").keyup(function (e) {
    "13" == e.keyCode && $("#change_page").trigger("click")
}), $("#change_page").on("click", function () {
    return parseInt($(".set_page_num").val()) < 1 || parseInt($(".set_page_num").val()) > total_page_num || !parseInt($(".set_page_num").val()) ? void $.alert({
            animation: "bottom",
            closeAnimation: "scale",
            title: "提醒!",
            content: "请正确输入需要跳转的页数！",
            buttons: {confirm: {text: "确定"}}
        }) : (set_page_num = parseInt($(".set_page_num").val()), void($.cookie("tag_id") ? page_show(parseInt(set_page_num), parseInt($.cookie("tag_id")), $.cookie("search_key")) : $.cookie("search_key") ? page_show(parseInt(set_page_num), null, $.cookie("search_key")) : page_show(parseInt(set_page_num))))
}), $(".page_set").on("click", function (e) {
    set_page_num = parseInt(e.target.getAttribute("value")), $.cookie("tag_id") ? page_show(parseInt(set_page_num), parseInt($.cookie("tag_id")), $.cookie("search_key")) : $.cookie("search_key") ? page_show(parseInt(set_page_num), null, $.cookie("search_key")) : page_show(parseInt(set_page_num))
});
var messageIds = [], input_arr = [];
$(document).ready(function () {
    $("#sampleListIcon").on("click", function () {
        location.href = "sample_list.html"
    }), $("#sampleListIcon").hover(function () {
        $("#sampleListIcon img").attr("src", "/images/list_sample_blue.png")
    }, function () {
        $("#sampleListIcon img").attr("src", "/images/list_sample_black.png")
    }), $("#editSampleIcon").on("click", function () {
        $.cookie("sample_id", SAMPLEID, {path: "/"}), location.href = "edit_sample.html"
    }), $("#editSampleIcon").hover(function () {
        $("#editSampleIcon img").attr("src", "/images/edit_sample_blue.png")
    }, function () {
        $("#editSampleIcon img").attr("src", "/images/edit_sample_black.png")
    }), $("#copySampleIcon").on("click", function () {
        $.cookie("sample_id", SAMPLEID, {path: "/"}), location.href = "copy_sample.html"
    }), $("#copySampleIcon").hover(function () {
        $("#copySampleIcon img").attr("src", "/images/copy_sample_blue.png")
    }, function () {
        $("#copySampleIcon img").attr("src", "/images/copy_sample_black.png")
    }), $("#shareSampleIcon").on("click", function () {
        var e, t = new Date, a = $("#sampleInfoId").text();
        $.ajax({
            url: "/api/samples/" + SAMPLEID + "/share",
            type: "post",
            dataType: "json",
            data: JSON.stringify({}),
            beforeSend: function (e) {
                e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
                /*, $.cookie("authorization") || e.abort()*/
            },
            success: function (o) {
                if (200 == o.code) {
                    var n = "https://" + location.href.split("//").pop().split("/").shift() + "/sample/share_singal.html?shareKey=" + o.shareKey + "&companyName=" + encodeURI($.cookie("company_name")) + "&itemNo=" + a;
                    e = toUtf8(n), t.getDate(), t.getTime(), t.setHours(t.getHours() + 720), t.toLocaleString();
                    var i = "有效日期: " + t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日" + t.getHours() + ":" + (t.getMinutes() >= 10 ? t.getMinutes() : "0" + t.getMinutes());
                    $("#invite_link").val(n), $("#code").html(""), $("#code").qrcode({
                        render: "canvas",
                        width: 180,
                        height: 180,
                        text: e
                    }), $("#invite_end_time").html(i), $(".sample_preview").attr("href", n)
                }
            },
            error: function () {
            }
        })
    }), $("#shareSampleIcon").hover(function () {
        $("#shareSampleIcon img").attr("src", "/images/share_sample_blue.png")
    }, function () {
        $("#shareSampleIcon img").attr("src", "/images/share_sample_black.png")
    }), $("#printSampleIcon").on("click", function () {
        isPDFPluginInstall(1)
    }), $("#printSampleIcon").hover(function () {
        $("#printSampleIcon img").attr("src", "/images/print_sample_blue.png")
    }, function () {
        $("#printSampleIcon img").attr("src", "/images/print_sample_black.png")
    }), $("#deleteSampleIcon").on("click", function () {
        $.confirm({
            animation: "bottom",
            closeAnimation: "scale",
            title: "提醒",
            content: "确定删除样品？",
            buttons: {
                confirm: {
                    text: "确定", action: function () {
                        delete_sample(SAMPLEID)
                    }
                }, cancel: {text: "取消"}
            }
        })
    }), $("#deleteSampleIcon").hover(function () {
        $("#deleteSampleIcon img").attr("src", "/images/delete_sample_blue.png")
    }, function () {
        $("#deleteSampleIcon img").attr("src", "/images/delete_sample_black.png")
    }), $("#supplierInfo_link_apart").on("click", function () {
        $("#inputSupplierItemNo").val() || $("#inputSupplierItemNo").val($("#inputSampleId").val()), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleName").val($("#inputSampleName").val()), $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleNameEn").val($("#inputSampleEnglishName").val()), $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleComposition").val($("#inputSampleComposition").val()), $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleSpecification").val($("#inputSampleSpecification").val()), $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWidth").val($("#inputSampleWidth").val()), $("#inputSupplierSampleWeight").val() || $("#inputSupplierSampleWeight").val($("#inputSampleWeight").val())
    }), $("#supplierInfo_link_total").on("click", function () {
        $("#inputSampleName").val() && $("#inputSupplierSampleName").val($("#inputSampleName").val()), $("#inputSampleEnglishName").val() && $("#inputSupplierSampleNameEn").val($("#inputSampleEnglishName").val()), $("#inputSampleComposition").val() && $("#inputSupplierSampleComposition").val($("#inputSampleComposition").val()), $("#inputSampleSpecification").val() && $("#inputSupplierSampleSpecification").val($("#inputSampleSpecification").val()), $("#inputSampleWidth").val() && $("#inputSupplierSampleWidth").val($("#inputSampleWidth").val()), $("#inputSampleWeight").val() && $("#inputSupplierSampleWeight").val($("#inputSampleWeight").val()), $("#copyBasicInfoRow").hide(200)
    }), $("#basicInfo_link_apart").on("click", function () {
        /edit/.test(location.href) || $("#inputSampleId").val() || $("#inputSampleId").val($("#inputSupplierItemNo").val()), $("#inputSampleName").val() || $("#inputSampleName").val($("#inputSupplierSampleName").val()), $("#inputSampleNameEn").val() || $("#inputSampleNameEn").val($("#inputSupplierSampleEnglishName").val()), $("#inputSampleComposition").val() || $("#inputSampleComposition").val($("#inputSupplierSampleComposition").val()), $("#inputSampleSpecification").val() || $("#inputSampleSpecification").val($("#inputSupplierSampleSpecification").val()), $("#inputSampleWidth").val() || $("#inputSampleWidth").val($("#inputSupplierSampleWidth").val()), $("#inputSampleWeight").val() || $("#inputSampleWeight").val($("#inputSupplierSampleWeight").val())
    }), $("#basicInfo_link_total").on("click", function () {
        /edit/.test(location.href) || $("#inputSupplierItemNo").val() && $("#inputSampleId").val($("#inputSupplierItemNo").val()), $("#inputSupplierSampleName").val() && $("#inputSampleName").val($("#inputSupplierSampleName").val()), $("#inputSupplierSampleEnglishName").val() && $("#inputSampleNameEn").val($("#inputSupplierSampleEnglishName").val()), $("#inputSupplierSampleComposition").val() && $("#inputSampleComposition").val($("#inputSupplierSampleComposition").val()), $("#inputSupplierSampleSpecification").val() && $("#inputSampleSpecification").val($("#inputSupplierSampleSpecification").val()), $("#inputSupplierSampleWidth").val() && $("#inputSampleWidth").val($("#inputSupplierSampleWidth").val()), $("#inputSupplierSampleWeight").val() && $("#inputSampleWeight").val($("#inputSupplierSampleWeight").val())
    })
});
var remarkInput, html, thePics, itemNo, name, component, width, weight, specification, pic_num = [0, 0, 0, 0], picId = [{
    roleType: 0,
    picIds: ""
}, {roleType: 1, picIds: ""}, {roleType: 2, picIds: ""}, {roleType: 3, picIds: ""}], picId_now = [{
    roleType: 0,
    picIds: ""
}, {roleType: 1, picIds: ""}, {roleType: 2, picIds: ""}, {roleType: 3, picIds: ""}], SAMPLEID = SAMPLEID;
$(".target_panel1").on("click", function () {
    $("#panel1").trigger("click")
}), $(".target_panel2").on("click", function () {
    $("#panel2").trigger("click")
}), $(".target_panel3").on("click", function () {
    $("#panel3").trigger("click")
}), $(".target_panel4").on("click", function () {
    $("#panel4").trigger("click")
}), $(".target_paneALL").on("click", function () {
    $("#paneALL").trigger("click")
}), $("#panel1").on("click", function () {
    $(".panel").hide(), $(".panel1").css("display", "block"), $("#update_sample").css("display", "block"), $(".update-sample-tip").show(), $(".nav_tab").removeClass("active"), $("#panel1").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
}), $("#panel2").on("click", function () {
    $(".panel").hide(), $(".panel2").css("display", "block"), $("#update_sample").css("display", "none"), $(".update-sample-tip").hide(), $(".nav_tab").removeClass("active"), $("#panel2").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
}), $("#panel3").on("click", function () {
    $(".panel").hide(), $(".panel3").css("display", "block"), $("#update_sample").css("display", "none"), $(".update-sample-tip").hide(), $(".nav_tab").removeClass("active"), $("#panel3").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
}), $("#paneALL").on("click", function () {
    $(".panel").hide(), $(".paneALL").css("display", "block"), $("#update_sample").css("display", "none"), $(".update-sample-tip").hide(), $(".nav_tab").removeClass("active"), $("#paneALL").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
}), $("#panel4").on("click", function () {
    $(".panel").hide(), $(".panel4").css("display", "block"), $("#update_sample").css("display", "none"), $(".update-sample-tip").hide(), $(".nav_tab").removeClass("active"), $("#panel4").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
}), $("#panel5").on("click", function () {
    $(".panel").hide(), $(".panel5").css("display", "block"), $("#update_sample").css("display", "block"), $(".update-sample-tip").show(), $(".nav_tab").removeClass("active"), $("#panel5").addClass("active"), $("#inputSupplierSampleName").val() || $("#inputSupplierSampleNameEn").val() || $("#inputSupplierSampleComposition").val() || $("#inputSupplierSampleSpecification").val() || $("#inputSupplierSampleWidth").val() || $("#inputSupplierSampleWeight").val() || ($("#inputSampleName").val() || $("#inputSampleEnglishName").val() || $("#inputSampleComposition").val() || $("#inputSampleSpecification").val() || $("#inputSampleWidth").val() || $("#inputSampleWeight").val()) && $("#copyBasicInfoRow").show()
});
var imgs = [{cur_num: 0, img_list: []}, {cur_num: 0, img_list: []}, {cur_num: 0, img_list: []}, {
    cur_num: 0,
    img_list: []
}, {cur_num: 0, img_list: []}, {cur_num: 0, img_list: []}, {cur_num: 0, img_list: []}, {
    cur_num: 0,
    img_list: []
}, {cur_num: 0, img_list: []}], code;
$("#alipay").on("click", function () {
    "yes" == $(this).attr("value") && $.ajax({
        type: "get",
        url: "/api/pay/params",
        dataType: "json",
        data: {companyId: parseInt(COMPANYID), productId: $("#alipay").attr("name"), payType: 0},
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("authorization", $.cookie("authorization"))
            /*, $.cookie("authorization") || e.abort()*/
        },
        success: function (e) {
            200 == e.code ? location.href = e.aliPayUrl : responseNo200(Number(e.code), e.message)
        }
    })
}), $("#companyName").on("click", function () {
    AUTHPAY ? location.href = "/my/company.html" : location.reload()
}), $("#sampleListLink").on("click", function () {
    location.href = "/sample/sample_list.html"
}), $("#tagCloudLink").on("click", function () {
    location.href = "/sample/tag_cloud.html"
}), $("#shareSampleLink").on("click", function () {
    location.href = "/sample/share_samples.html"
}), $("#printSampleLink").on("click", function () {
    location.href = "checked_samples.html"
}), $("#addSampleLink").on("click", function () {
    location.href = "/sample/add_sample.html"
}), $("#copySampleLink").on("click", function () {
    location.href = "/sample/copy_sample.html"
}), $("#editSampleLink").on("click", function () {
    location.href = "/sample/edit_sample.html"
}), $("#sampleInfoLink").on("click", function () {
    location.href = "/sample/sample.html"
}), $("#gocenter").on("click", function () {
    location.href = "../my/center.html"
}), $(".pay_product").on("click", function (e) {
    $(".pay_product_active").removeClass("pay_product_active"), $(this).addClass("pay_product_active"), $.ajax({
        type: "get",
        url: "/api/products",
        dataType: "json",
        beforeSend: function (e) {
            e.setRequestHeader("Content-Type", "application/json")
        },
        success: function (e) {
            200 == e.code || 401 == e.code
        }
    }), $("#alipay").attr("name", $(this).attr("value")), $("#alipay").css("background-color", "#F1A54B").prop("disabled", !1).css("cursor", "pointer").attr("value", "yes")
}), $(window).height() <= 900 ? $(".left_box .select").css("height", "10%") : $(".left_box .select").css("height", "8.5%"), $(".left_box .select").each(function (e) {
    $(this).on("click", function () {
        $(".sample").hide(), $(window).scrollTop(0), $(window).scrollLeft(0), $(".left_box .select").eq(e).addClass("cow").siblings(".left_box .select").removeClass("cow"), $(".left_box .selContent").eq(e).show().siblings(".left_box .selContent").hide();
        var t = $(document).scrollTop();
        $(".navbar-center").css("padding-right", "15px"), $(document).on("scroll.unable", function (e) {
            $(document).scrollTop(t)
        }), $("body").parent().css("overflow-y", "hidden")
    })
});
var key;
if (localStorage.getItem("show")) key = !0; else var Timer = setTimeout(function () {
    $(".left_box").css("width", "70"), key = !1
}, 1e3), Timer = setTimeout(function () {
    $(".left_box .select").hasClass("cow") || ($(".left_box").css("width", "0"), key = !0)
}, 2e4);
$(".left img.shouhui").on("click", function () {
    key ? ($(".left_box").css("width", "70px"), $(".left_box .select").hasClass("cow") && ($(".left_box .select").removeClass("cow"), $(".left_box .selContent").hide()), localStorage.clear("show"), key = !1) : ($(".left_box").css("width", "0"), $(".left_box .select").hasClass("cow") && ($(".left_box .selContent").fadeOut(1e3), $(".sample").show()), $(document).unbind("scroll.unable"), $("body").parent().css("overflow-y", ""), localStorage.setItem("show", !0), key = !0)
}), $("#chushihua").on("click", function () {
    var e = $.cookie("company_id"), t = {
        url: "/api/companys/" + e + "/settings",
        type: "GET"
    }, a = g_return200CbObj(function (e) {
        sessionStorage.setItem("payableStartDate", e.payableStartDate), sessionStorage.setItem("receivableStartDate", e.receivableStartDate), sessionStorage.setItem("storeStartDate", e.storeStartDate)
    });
    sendAjax(t, a)
}), $(".kehuBtn").on("click", function (e) {
    if ($(".kehuBtn").hasClass("noPe")) g_msgAlert("对不起，您没有权限查看!", function () {
    }); else {
        var t = 2;
        t && $.cookie("company_type", t, {path: "/"}), location.href = "../contact/company_list.html"
    }
}), $(".gongBtn").on("click", function (e) {
    if ($(".kehuBtn").hasClass("noPe")) g_msgAlert("对不起，您没有权限查看!", function () {
    }); else {
        var t = 1;
        t && $.cookie("company_type", t, {path: "/"}), location.href = "../contact/company_list.html"
    }
}), $(".qitaBtn").on("click", function (e) {
    if ($(".kehuBtn").hasClass("noPe")) g_msgAlert("对不起，您没有权限查看!", function () {
    }); else {
        var t = 3;
        t && $.cookie("company_type", t, {path: "/"}), location.href = "../contact/company_list.html"
    }
}), $(".audit-body-b-n").on("click", function () {
    $(".shouaudit").css("display", "none"), $(".fuaudit").css("display", "none"), $(".kuaudit").css("display", "none"), $("#box").removeClass("mask")
}), $(".close").on("click", function () {
    $(".shouaudit").css("display", "none"), $(".fuaudit").css("display", "none"), $(".kuaudit").css("display", "none"), $("#box").removeClass("mask")
}), $("#yingshouBtn").on("click", function () {
    $(".shouaudit").css("display", "block"), $("#box").addClass("mask");
    var e = sessionStorage.getItem("receivableStartDate");
    "" != e && $(".auditY1").attr("checked", "checked")
}), $("#yingfuBtn").on("click", function () {
    $(".fuaudit").css("display", "block"), $("#box").addClass("mask");
    var e = sessionStorage.getItem("payableStartDate");
    "" != e && $(".auditY2").attr("checked", "checked")
}), $("#kucunBtn").on("click", function () {
    $(".kuaudit").css("display", "block"), $("#box").addClass("mask");
    var e = sessionStorage.getItem("storeStartDate");
    "" != e && $(".auditY3").attr("checked", "checked")
}), $("#yingshou_Y").on("click", function () {
    $(".shouaudit").css("display", "none"), $("#box").removeClass("mask");
    var e = sessionStorage.getItem("receivableStartDate");
    "" != e ? g_msgAlert("您已完成初始化!", function () {
        }) : g_msgAlert("请在“系统设置-其他设置”中选择应收开始使用日期!", function () {
        })
}), $("#yingfu_Y").on("click", function () {
    $(".fuaudit").css("display", "none"), $("#box").removeClass("mask");
    var e = sessionStorage.getItem("payableStartDate");
    "" != e ? g_msgAlert("您已完成初始化!", function () {
        }) : g_msgAlert("请在“系统设置-其他设置”中选择应付开始使用日期!", function () {
        })
}), $("#kucun_Y").on("click", function () {
    $(".kuaudit").css("display", "none"), $("#box").removeClass("mask");
    var e = sessionStorage.getItem("storeStartDate");
    "" != e ? g_msgAlert("您已完成初始化!", function () {
        }) : g_msgAlert("请在“系统设置-其他设置”中选择库存开始使用日期!", function () {
        })
}), $(".weikaifang").on("click", function (e) {
    g_msgAlert("对不起，该功能暂未开放!", function () {
    })
}), $("#to_top").on("click", function () {
    $("body,html").animate({scrollTop: 0}, 600)
}), $("#contact_code").hover(function (e) {
    $(".right_hover_box").remove(), $(e.target).before('\n        <div class="right_hover_box" style="background-color:#bdcadb;scale:0.8;padding-right: 0;">\n        <div><img title="微信小程序" src="/images/zdbgjxcx.jpg" style="width: 120px;height: 120px"> <p>小程序</p></div>\n        <div><img title="布管家APP" src="/images/buguanjiaapp.jpg" style="width: 120px;height: 120px"> <p>APP</p></div>\n        </div>')
}, function () {
    $(".right_hover_box").remove()
}), $("#contact_phone_saleman").hover(function (e) {
    $(".right_hover_box").remove(), $(e.target).before('\n        <div class="right_hover_box" style="background-color:#bdcadb;scale:0.8;padding-right: 0;">\n        <div><img title="客服小孙" src="/images/saleman_1.jpg" style="width: 120px;height: 120px"> <p>客服小孙</p></div>\n        <div><img title="客服小葛" src="/images/saleman_2.jpg" style="width: 120px;height: 120px"> <p>客服小葛</p></div>\n        </div>')
}, function () {
    $(".right_hover_box").remove()
}), $(document).ready(function () {
    for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], a = 0; a < t.length; a++)if (e.indexOf(t[a]) > 0)return isPhone = !1, lowIe = !1;
    return lowIe = "Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") || ("Microsoft Internet Explorer" == navigator.appName && "MSIE7.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") || ("Microsoft Internet Explorer" == navigator.appName && "MSIE8.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") || "Microsoft Internet Explorer" == navigator.appName && "MSIE9.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "")))
});
var g_is_phone = function () {
    for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], a = 0; a < t.length; a++)if (e.indexOf(t[a]) > 0)return !0;
    return !1
}();
Array.prototype.removeByValue = function (e) {
    for (var t = 0; t < this.length; t++)if (this[t] == e) {
        this.splice(t, 1);
        break
    }
}, Array.prototype.removeByObiectValue = function (e, t) {
    for (var a = 0; a < this.length; a++)if (this[a][t] == e) {
        this.splice(a, 1);
        break
    }
};
var getSingle = function (e) {
    var t;
    return function () {
        return t || (t = e.apply(this, arguments))
    }
};
Date.prototype.Format = function (e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var a in t)new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[a] : ("00" + t[a]).substr(("" + t[a]).length)));
    return e
};
var g_stepRecord = function () {
    function e() {
        var e = "buguanjiarecord" + COMPANYID, t = "buguanjiareferrer" + COMPANYID, i = "buguanjiaupdate" + COMPANYID, s = a[e], r = [];
        s && Array.isArray(n(s)) && (r = n(s).slice(0, 6)), a[i] = "dont update";
        var l = location.href;
        if (l !== a[t]) {
            r.unshift({pageName: document.title, url: l}), a[t] = l, a[i] = "update";
            for (var p = void 0, c = r[0], d = r.length, u = 1; u < d; u++)if (r[u].pageName === c.pageName) {
                p = u;
                break
            }
            "number" == typeof p && r.splice(p, 1)
        }
        a[e] = o(r)
    }

    function t(e, t) {
        var i = "buguanjiarecord" + COMPANYID, s = "buguanjiaupdate" + COMPANYID, r = a[i], l = (a[s], n(r));
        if ("undefined" != typeof t && l.length > 0) {
            var p = l.reduce(function (e, t, a) {
                return 0 === a || a > 5 ? "" + e : e + '<div class="list link_list" data-index="' + a + '">' + t.pageName + "</div>"
            }, "");
            t.html(p).on("click", ".list", function () {
                var e = this.getAttribute("data-index");
                l[e].cookie && Object.keys(l[e].cookie).forEach(function (t) {
                    $.cookie(t, l[e].cookie["" + t], {path: "/"})
                }), location.href = l[e].url
            })
        }
        "update" === a[s] && (l[0] = $.extend({}, l[0], e), "dont update" === a[s]), a[i] = o(l)
    }

    if ("undefined" == typeof window.localStorage)return {get: e, set: t};
    var a = window.sessionStorage, o = JSON.stringify, n = JSON.parse;
    return {get: e, set: t}
}();
document.querySelector(".navbar-center.navbar-inverse") && g_stepRecord.get();
var JudgesType = function (e) {
    return function (t) {
        return Object.prototype.toString.call(t) === "[object " + e + "]"
    }
}, isArrayType = JudgesType("Array"), isObjectType = JudgesType("Object"), isFunctionType = JudgesType("Function"), isStringType = JudgesType("String"), isNumberType = JudgesType("Number"), isNullType = JudgesType("Null"), isUndefinedType = JudgesType("Undefined");
$("[data-toggle='popover']").popover(), $("body").on("click", function (e) {
    var t = $("[data-toggle='popover']"), a = $("[data-toggle='popover']").size();
    if ("popover_doubt_img" != e.target.id)for (var o = 0; o < a; o++)"undefined" != typeof t.eq(o).attr("aria-describedby") && t.eq(o).find("#popover_doubt_img").click()
}), $(".go-pcexhibitionf").on("click", function () {
    sessionStorage.setItem("ex_custom", 0)
});
var lineFlag1, lineFlag2, checkOnLine;
//simulationsetInterval();