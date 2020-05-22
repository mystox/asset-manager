package tech.mystox.asset.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * \* @Author: mystox
 * \* Date: 2020/5/7 10:50
 * \* Description:
 * \
 */
@RestController
@RequestMapping("/api/companys/")
public class SampleController {



    @RequestMapping("/*/users/authority")
    public JSONObject usersAuthority() {
        String content = "{\n" +
                "\t\"code\": \"200\",\n" +
                "\t\"userAuthorityItems\": [\n" +
                "\t{\n" +
                "\t\t\t\"id\": 10000,\n" +
                "\t\t\t\"key\": \"basic_data\",\n" +
                "\t\t\t\"name\": \"基础资料\",\n" +
                "\t\t\t\"haveRight\": 1\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"样品\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10001,\n" +
                "\t\t\t\"key\": \"sample\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"新增/修改/导入\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10002,\n" +
                "\t\t\t\"key\": \"sample_add_update\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"删除\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10003,\n" +
                "\t\t\t\"key\": \"sample_delete\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"打印\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10004,\n" +
                "\t\t\t\"key\": \"sample_print\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"分享\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10005,\n" +
                "\t\t\t\"key\": \"sample_share\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售管理\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10050,\n" +
                "\t\t\t\"key\": \"sell\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售订单\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10051,\n" +
                "\t\t\t\"key\": \"sell_order\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"新增/修改\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10052,\n" +
                "\t\t\t\"key\": \"sell_order_add_update\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"删除\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10053,\n" +
                "\t\t\t\"key\": \"sell_order_delete\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"打印\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10054,\n" +
                "\t\t\t\"key\": \"sell_order_print\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销货单\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10057,\n" +
                "\t\t\t\"key\": \"sell_deliver\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"新增/修改\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10058,\n" +
                "\t\t\t\"key\": \"sell_deliver_add_update\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"删除\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10059,\n" +
                "\t\t\t\"key\": \"sell_deliver_delete\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"打印\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10060,\n" +
                "\t\t\t\"key\": \"sell_deliver_print\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"查看金额\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10062,\n" +
                "\t\t\t\"key\": \"sell_deliver_view_amount\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"导出\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10063,\n" +
                "\t\t\t\"key\": \"sell_deliver_export\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"退货单\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10064,\n" +
                "\t\t\t\"key\": \"sell_return\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"新增\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10065,\n" +
                "\t\t\t\"key\": \"sell_return_add\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"删除\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10066,\n" +
                "\t\t\t\"key\": \"sell_return_delete\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"打印\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10067,\n" +
                "\t\t\t\"key\": \"sell_return_print\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"查看金额\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10069,\n" +
                "\t\t\t\"key\": \"sell_return_view_amount\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售报表\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10070,\n" +
                "\t\t\t\"key\": \"sell_report_form\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售订单统计表\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10071,\n" +
                "\t\t\t\"key\": \"sell_order_statistical_table\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售明细(按货品)\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10072,\n" +
                "\t\t\t\"key\": \"sell_deliver_details_by_sample\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"退货明细(按货品)\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10073,\n" +
                "\t\t\t\"key\": \"sell_return_details_by_sample\"\n" +
                "\t\t},\n" +
                "\t\t{\n" +
                "\t\t\t\"name\": \"销售统计表\",\n" +
                "\t\t\t\"haveRight\": 1,\n" +
                "\t\t\t\"id\": 10074,\n" +
                "\t\t\t\"key\": \"sell_statistical_table\"\n" +
                "\t\t}\n" +
                "\t],\n" +
                "\t\"message\": \"\"\n" +
                "}";
        return JSONObject.parseObject(content);
    }


    @RequestMapping("/*/settings")
    public JSONObject setting() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"modules\":[],\"sampleListParams\":[1,2,3,4,5],\"imageSearch\":0,\"waterMarker\":0,\"samplePublish\":0,\"waterMarkerParams\":[{\"key\":\"comp_name\",\"prettyName\":\"公司名\",\"isSelected\":0},{\"key\":\"comp_name_en\",\"prettyName\":\"公司名称(英文)\",\"isSelected\":0},{\"key\":\"item_no\",\"prettyName\":\"编号\",\"isSelected\":0},{\"key\":\"width\",\"prettyName\":\"门幅\",\"isSelected\":0},{\"key\":\"weight\",\"prettyName\":\"克重\",\"isSelected\":0}],\"multiUnit\":0,\"ratio\":0,\"taxRate\":0.0,\"sellInventoryReduce\":0,\"foreignCurrency\":0,\"receivableStartDate\":\"\",\"payableStartDate\":\"\",\"storeStartDate\":\"\",\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"distributionProcess\":0,\"moduleHandle\":0,\"clothLabel\":\"色号:,匹号:,缸号:,包号:,米:\",\"classifyItemAutoIncrement\":0,\"allowNegativeInventory\":1,\"bigcarStoreZeroHide\":0,\"sampleStoreZeroHide\":0}";
        return JSONObject.parseObject(content);
    }



    @RequestMapping("/*/manager")
    public JSONObject manager() {
        String content = "{\"code\":\"200\",\"message\":\"\"}";
        return JSONObject.parseObject(content);
    }



  @RequestMapping("/{companyId}")
    public JSONObject getCompany(@PathVariable(required = false) String companyId) {
      System.out.println(companyId);
        String content = "{\"code\":\"200\",\"message\":\"\",\"company\":{\"companyId\":36052,\"subDomain\":\"\",\"name\":\"mystox\",\"nameEn\":\"\",\"nature\":0,\"scale\":0,\"logo\":\"\",\"linkman\":\"mystox\",\"address\":\"\",\"theodolite\":\"\",\"telephone\":\"15067455667\",\"email\":\"\",\"companyUserNum\":0,\"userNumLimit\":1,\"companyDesc\":\"\",\"scope\":\"\",\"fax\":\"\",\"qq\":\"\",\"validStatus\":0,\"payStatus\":0,\"endTime\":\"\",\"companyKey\":\"FCE@G\",\"companyPhoto\":\"\",\"photos\":[],\"modules\":[\"sampleStore\",\"invoice\"],\"userVisibleModules\":[\"sell\",\"inventory\"],\"isHadUnhandleForm\":0}}";
        return JSONObject.parseObject(content);
    }




  @RequestMapping("/{companyId}/currency")
    public JSONObject getCompanyCurrency(@PathVariable(required = false) String companyId) {
      System.out.println(companyId);
      String content = "{\"code\":\"200\",\"message\":\"\",\"currencies\":[{\"companyCurrencyId\":86408,\"currencyId\":11,\"currencyName\":\"人民币\",\"currencyUnit\":\"元\",\"currencySymbol\":\"￥\",\"rate\":1.0},{\"companyCurrencyId\":86409,\"currencyId\":12,\"currencyName\":\"美元\",\"currencyUnit\":\"美元\",\"currencySymbol\":\"$\",\"rate\":6.32}]}";
      return JSONObject.parseObject(content);
    }



    @RequestMapping("/{companyId}/users")
    public JSONObject getCompanyUser(@PathVariable(required = false) String companyId) {
        System.out.println(companyId);
        String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":100,\"pageCount\":1,\"recordCount\":1,\"companyUsers\":[{\"companyUserId\":38090,\"userId\":38737,\"isLoginUser\":1,\"mobile\":\"15067455667\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"name\":\"mystox\",\"email\":\"\",\"roleType\":0,\"roleId\":1,\"roleName\":\"所有者\",\"joinTime\":\"2020-05-06 10:13:11\",\"lastLoginIP\":\"112.17.133.189\",\"lastLoginTime\":\"2020-05-22 10:22:04\",\"groups\":[{\"groupId\":33539,\"name\":\"默认用户组\"}]}]}";
        return JSONObject.parseObject(content);
    }

}