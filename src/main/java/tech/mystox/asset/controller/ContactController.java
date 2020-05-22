package tech.mystox.asset.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by mystoxlol on 2020/5/21, 15:45.
 * company: kongtrolink
 * description:
 * update record:
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @RequestMapping("/company")
    public String contactCompany() {
        return "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":999,\"pageCount\":1,\"recordCount\":1,\"contactCompanys\":[{\"id\":24831,\"name\":\"1\",\"shortName\":\"1\",\"code\":\"\",\"telephone\":\"1\",\"email\":\"mysm\",\"fax\":\"\",\"provinceName\":\"浙江省\",\"cityName\":\"杭州市\",\"areaName\":\"上城区\",\"address\":\"企业地址\",\"nature\":2,\"remark\":\"\",\"accountsBank\":\"\",\"companyCurrencyId\":86408,\"currencyName\":\"人民币\",\"salesman\":38737,\"salesmanName\":\"mystox\",\"creatorName\":\"mystox\",\"contactUserNum\":1,\"invoiceTitle\":\"\",\"taxNumber\":\"\",\"contactUpdateDeleteAuthority\":1,\"contactUser\":[{\"contactUserId\":12425,\"contactUserName\":\"1\"}]}]}";

    }

    @RequestMapping("/company/get")
    public String contactCompanyGet() {
        return "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":999,\"pageCount\":1,\"recordCount\":1,\"contactCompanys\":[{\"id\":24831,\"name\":\"1\",\"shortName\":\"1\",\"code\":\"\",\"telephone\":\"1\",\"email\":\"mysm\",\"fax\":\"\",\"provinceName\":\"浙江省\",\"cityName\":\"杭州市\",\"areaName\":\"上城区\",\"address\":\"企业地址\",\"nature\":2,\"remark\":\"\",\"accountsBank\":\"\",\"companyCurrencyId\":86408,\"currencyName\":\"人民币\",\"salesman\":38737,\"salesmanName\":\"mystox\",\"creatorName\":\"mystox\",\"contactUserNum\":1,\"invoiceTitle\":\"\",\"taxNumber\":\"\",\"contactUpdateDeleteAuthority\":1,\"contactUser\":[{\"contactUserId\":12425,\"contactUserName\":\"1\"}]}]}";

    }


    @RequestMapping("/company/*")
    public String contactCompanyById() {
        return "{\"code\":\"200\",\"message\":\"\",\"name\":\"1\",\"shortName\":\"1\",\"telephone\":\"1\",\"customerCode\":\"\",\"email\":\"mysm\",\"fax\":\"\",\"remark\":\"\",\"provinceId\":330000,\"provinceName\":\"浙江省\",\"cityId\":330100,\"cityName\":\"杭州市\",\"areaId\":330102,\"areaName\":\"上城区\",\"address\":\"企业地址\",\"nature\":2,\"scale\":1,\"accountsBank\":\"\",\"companyCurrencyId\":86408,\"currencyName\":\"人民币\",\"salesman\":38737,\"salesmanName\":\"mystox\",\"receivableAmount\":0.0,\"businessLicensePic\":[],\"managerContactUserId\":12425,\"manager\":\"1\",\"creatorName\":\"mystox\",\"contactUpdateDeleteAuthority\":1,\"participants\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"participantGroups\":[],\"invoiceTitle\":\"\",\"taxNumber\":\"\"}";
    }


    @RequestMapping("/company/saveContact")
    public String saveContact() {
        return "";
    }

}
