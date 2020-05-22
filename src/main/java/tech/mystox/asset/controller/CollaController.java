package tech.mystox.asset.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by mystoxlol on 2020/5/22, 13:49.
 * company: kongtrolink
 * description:
 * update record:
 */
@RestController
@RequestMapping("/api/colla")
public class CollaController {

    @RequestMapping("/region")
    public String region() {
        return "{\"code\":\"200\",\"message\":\"\",\"regions\":[{\"id\":110000,\"name\":\"北京\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":120000,\"name\":\"天津\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":130000,\"name\":\"河北省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":140000,\"name\":\"山西省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":150000,\"name\":\"内蒙古自治区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":210000,\"name\":\"辽宁省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":220000,\"name\":\"吉林省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":230000,\"name\":\"黑龙江省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":310000,\"name\":\"上海\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":320000,\"name\":\"江苏省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":330000,\"name\":\"浙江省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":340000,\"name\":\"安徽省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":350000,\"name\":\"福建省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":360000,\"name\":\"江西省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":370000,\"name\":\"山东省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":410000,\"name\":\"河南省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":420000,\"name\":\"湖北省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":430000,\"name\":\"湖南省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":440000,\"name\":\"广东省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":450000,\"name\":\"广西壮族自治区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":460000,\"name\":\"海南省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":500000,\"name\":\"重庆\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":510000,\"name\":\"四川省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":520000,\"name\":\"贵州省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":530000,\"name\":\"云南省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":540000,\"name\":\"西藏自治区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":610000,\"name\":\"陕西省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":620000,\"name\":\"甘肃省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":630000,\"name\":\"青海省\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":640000,\"name\":\"宁夏回族自治区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":650000,\"name\":\"新疆维吾尔自治区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":710000,\"name\":\"台湾\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":810000,\"name\":\"香港特别行政区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"},{\"id\":820000,\"name\":\"澳门特别行政区\",\"parentId\":100000,\"levelType\":1,\"cityCode\":\"\",\"zipCode\":\"\"}]}";

    }
}
