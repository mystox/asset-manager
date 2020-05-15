package tech.mystox.asset.controller;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import tech.mystox.asset.entity.ResponseResult;
import tech.mystox.asset.entity.Sample;
import tech.mystox.asset.service.SampleService;

import java.io.File;
import java.io.IOException;
import java.util.Collections;

/**
 * \* @Author: mystox
 * \* Date: 2020/5/7 14:57
 * \* Description:
 * \
 */
@RestController
@RequestMapping("/api")
public class MessageController {

    @Value("${server.host}")
    private String serverHost;


    @RequestMapping("/message")
    public JSONObject message() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":10,\"pageCount\":1,\"recordCount\":9,\"unreadCount\":9,\"messages\":[{\"messageId\":174545,\"status\":0,\"createTime\":\"2019-07-20 05:55:21\",\"title\":\"颜色管理\",\"content\":\"布管家作为国内颜色管理一线品牌的战略合作伙伴，代理销售光源箱、色差仪等产品，具有很强价格优势。\"},{\"messageId\":174544,\"status\":0,\"createTime\":\"2018-01-20 09:55:32\",\"title\":\"布管家销售单\",\"content\":\"销售单功能帮助用户高效处理销售单、发货单、退货单；科学管理应收账款，降低坏账率；聪明地计算成本、核算利润，业务员绩效一目了然。\"},{\"messageId\":174543,\"status\":0,\"createTime\":\"2018-01-20 09:46:47\",\"title\":\"布管家商机管理\",\"content\":\"布管家提供实用的商机管理功能，方便用户寄样、报价等，并与采样助手、展会助手的数据无缝对接，助力用户把握每一个潜在商机。\"},{\"messageId\":174542,\"status\":0,\"createTime\":\"2017-11-01 13:41:51\",\"title\":\"纺织采样\",\"content\":\"布管家用户可以使用“纺织采样”小程序进行面料样品的快速选样，可以在后台“客户选样”中看到客人的选样信息。\"},{\"messageId\":174541,\"status\":0,\"createTime\":\"2017-11-01 13:31:01\",\"title\":\"\",\"content\":\"布管家用户可以使用“纺织展会助手”小程序或APP中的展会登记功能帮助您会展前充分准备，会展中高效登记，会展后持续跟踪。\"},{\"messageId\":174540,\"status\":0,\"createTime\":\"2017-06-28 17:28:36\",\"title\":\"布管家字段设置\",\"content\":\"布管家可以设定自定义字段，并能对字段顺序进行自由排序，还能自由设定搜索和分享的字段。具体操作方法请联系您的业务代表。\"},{\"messageId\":174539,\"status\":0,\"createTime\":\"2017-06-28 17:27:05\",\"title\":\"布管家灵活的权限控制\",\"content\":\"布管家设置不同的角色来获得不同的权限，管理员可以控制每个员工对敏感信息的查看、操作权限。操作方法请联系您的业务代表。\"},{\"messageId\":174538,\"status\":0,\"createTime\":\"2017-04-24 16:28:29\",\"title\":\"布管家推样功能\",\"content\":\"小贴士：您可以使用布管家PC端的分享功能和“知布布管家”小程序的转发功能方便地推样给您的客户。\"},{\"messageId\":174537,\"status\":0,\"createTime\":\"2016-09-24 11:03:09\",\"title\":\"系统通知\",\"content\":\"欢迎加入布管家\"}]}";
        return JSONObject.parseObject(content);
    }

    @RequestMapping("/samples")
    public JSONObject samples() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":10,\"pageCount\":1,\"recordCount\":1,\"samples\":[{\"sampleId\":1853761,\"publicKey\":\"DM@FBCD\",\"companyId\":36052,\"itemNo\":\"123\",\"name\":\"\",\"nameEn\":null,\"component\":\"\",\"width\":\"\",\"weight\":\"\",\"specification\":\"\",\"formerItemNo\":null,\"lableRemark\":null,\"depotPosition\":null,\"isPublished\":0,\"createTime\":\"2020-05-06 10:16:12\",\"modifyTime\":\"2020-05-06 10:16:12\",\"type\":null,\"topType\":0,\"hot\":0,\"primaryUnit\":null,\"viceUnit\":null,\"accUnit\":null,\"subUnit1\":null,\"subUnit1Ratio\":null,\"subUnit2\":null,\"subUnit2Ratio\":null,\"subUnit3\":null,\"subUnit3Ratio\":null,\"defaultColorId\":null,\"samplePicId\":0,\"samplePicKey\":\"\",\"num\":0.0,\"weixinAppCodeUrl\":\"\",\"attributes\":{\"1\":\"123\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"656\":\"\"},\"sampleAttributes\":[]}],\"sampleListParams\":[{\"attrId\":1,\"prettyName\":\"编号\"},{\"attrId\":2,\"prettyName\":\"名称\"},{\"attrId\":3,\"prettyName\":\"成分\"},{\"attrId\":4,\"prettyName\":\"门幅\"},{\"attrId\":5,\"prettyName\":\"克重\"}]}";
        sampleService.
        ResponseResult responseResult = new ResponseResult();
        responseResult.setPageCount(1);
        responseResult.setPageNo(1);
        responseResult.setPageSize(10);
        responseResult.setRecordCount();
        return JSONObject.parseObject(content);
    }
    @RequestMapping("/samples/selects")
    public JSONObject samplesSelects() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"sampleSelects\":[],\"quoteSampleSelects\":[],\"sampleListParams\":[{\"attrId\":1,\"prettyName\":\"编号\"},{\"attrId\":2,\"prettyName\":\"名称\"},{\"attrId\":3,\"prettyName\":\"成分\"},{\"attrId\":4,\"prettyName\":\"门幅\"},{\"attrId\":5,\"prettyName\":\"克重\"}]}";

        return JSONObject.parseObject(content);
    }
@RequestMapping("/sell")
    public JSONObject sell() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":0,\"pageSize\":0,\"pageCount\":0,\"recordCount\":0,\"sellOrders\":[]}";
        return JSONObject.parseObject(content);
    }

    @Autowired
    SampleService sampleService;

@RequestMapping("/saveSamples")
    public ResponseResult samplesSave(@RequestBody JSONObject body) {
    Sample sample = body.toJavaObject(Sample.class);
    sampleService.saveSamples(sample);
        return new ResponseResult(200, "");
    }



@RequestMapping("/upload/pic")
    public ResponseResult uploadPic(@RequestParam Integer bizType, @RequestParam Integer bizId, @RequestParam MultipartFile files) {
    System.out.println(files.getName());

    String originalFilename = files.getOriginalFilename();
    String extendName = "";
    if (originalFilename.contains(".")) {
        extendName = originalFilename.split("\\.")[1];
    }
    String fileName = System.currentTimeMillis()+"";
    if (StringUtils.isNotBlank(extendName)) {
        fileName = fileName+"."+extendName;
    }
    File file = new File("./picResources/"+ fileName);

    System.out.println(file.getAbsolutePath());
    try {
        files.transferTo(file);
    System.out.println(file.getCanonicalPath());
    } catch (IOException e) {
        e.printStackTrace();
    }

    // String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":0,\"pageSize\":0,\"pageCount\":0,\"recordCount\":0,\"sellOrders\":[]}";
    ResponseResult responseResult = new ResponseResult(200, "");
    responseResult.setPicIds(Collections.singletonList(123));
    responseResult.setPicKeys(Collections.singletonList("http://"+serverHost+"/picResources/"+fileName));
    return responseResult;
    }




}