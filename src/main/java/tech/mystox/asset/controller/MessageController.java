package tech.mystox.asset.controller;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tech.mystox.asset.entity.AttrVo;
import tech.mystox.asset.entity.Attribute;
import tech.mystox.asset.entity.ColorEntity;
import tech.mystox.asset.entity.PicVo;
import tech.mystox.asset.entity.db.Pic;
import tech.mystox.asset.entity.db.Sample;
import tech.mystox.asset.entity.vo.*;
import tech.mystox.asset.service.PicService;
import tech.mystox.asset.service.SampleService;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

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
    public SampleResult samples(Integer pageSize, Integer pageNo, Integer orderByType, String key, Integer searchType) {
        //key = 搜索编号


        // String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":10,\"pageCount\":1,\"recordCount\":1,\"samples\":[{\"sampleId\":1853761,\"publicKey\":\"DM@FBCD\",\"companyId\":36052,\"itemNo\":\"123\",\"name\":\"\",\"nameEn\":null,\"component\":\"\",\"width\":\"\",\"weight\":\"\",\"specification\":\"\",\"formerItemNo\":null,\"lableRemark\":null,\"depotPosition\":null,\"isPublished\":0,\"createTime\":\"2020-05-06 10:16:12\",\"modifyTime\":\"2020-05-06 10:16:12\",\"type\":null,\"topType\":0,\"hot\":0,\"primaryUnit\":null,\"viceUnit\":null,\"accUnit\":null,\"subUnit1\":null,\"subUnit1Ratio\":null,\"subUnit2\":null,\"subUnit2Ratio\":null,\"subUnit3\":null,\"subUnit3Ratio\":null,\"defaultColorId\":null,\"samplePicId\":0,\"samplePicKey\":\"\",\"num\":0.0,\"weixinAppCodeUrl\":\"\",\"attributes\":{\"1\":\"123\",\"2\":\"\",\"3\":\"\",\"4\":\"\",\"5\":\"\",\"6\":\"\",\"7\":\"\",\"656\":\"\"},\"sampleAttributes\":[]}],\"sampleListParams\":[{\"attrId\":1,\"prettyName\":\"编号\"},{\"attrId\":2,\"prettyName\":\"名称\"},{\"attrId\":3,\"prettyName\":\"成分\"},{\"attrId\":4,\"prettyName\":\"门幅\"},{\"attrId\":5,\"prettyName\":\"克重\"}]}";


        List<Sample> samples = sampleService.findByCondition(pageSize, pageNo, orderByType, searchType, key);
        List<SampleVo> vos = new ArrayList<>();
        samples.forEach(sample -> {
            SampleVo vo = new SampleVo();
            Map<Integer, String> customAttribute = sample.getCustomAttribute();
            vo.setAttributes(customAttribute);
            vo.setCompanyId(111);
            List<PicVo> pics = sample.getPics();
            if (!CollectionUtils.isEmpty(pics)) {
                PicVo picVo = pics.get(0);
                String picIds = picVo.getPicIds();
                String picId = picIds.split(",")[0];
                Pic pic = picService.getPicDataById(Long.valueOf(picId));
                if (pic != null)
                    vo.setSamplePicKey(pic.getUri());
            }
            vo.setName(customAttribute.get(1));
            vo.setSampleId(sample.getSampleId());
            vo.setItemNo(sample.getItemNo());
            vos.add(vo);

        });
        JSONObject selects = samplesSelects();
        List<AttrVo> sampleListParams = selects.getJSONArray("sampleListParams").toJavaList(AttrVo.class);
        Long count = sampleService.countByCondition(searchType, key);
        SampleResult responseResult = new SampleResult();
        responseResult.setSampleListParams(sampleListParams);
        responseResult.setSamples(vos);
        responseResult.setPageCount(pageNo);
        responseResult.setPageNo(pageNo);
        responseResult.setPageSize(pageSize);
        responseResult.setRecordCount(count);
        return responseResult;
    }

    @RequestMapping("/samples/selects")
    public JSONObject samplesSelects() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"sampleSelects\":[],\"quoteSampleSelects\":[],\"sampleListParams\":[{\"attrId\":1,\"prettyName\":\"编号\"},{\"attrId\":2,\"prettyName\":\"名称\"},{\"attrId\":3,\"prettyName\":\"成分\"},{\"attrId\":4,\"prettyName\":\"门幅\"},{\"attrId\":5,\"prettyName\":\"克重\"}]}";

        return JSONObject.parseObject(content);
    }

    @RequestMapping("/samples/{sampleId}/remarks")
    public JSONObject samplesRemarks() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":0,\"pageSize\":0,\"pageCount\":0,\"recordCount\":0,\"remarks\":[]}";
        return JSONObject.parseObject(content);
    }

    @RequestMapping("/samples/{sampleId}/logs")
    public JSONObject samplesLogs() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"sampleLogs\":[{\"id\":1377554,\"userId\":38737,\"userName\":\"mystox\",\"type\":0,\"logTime\":\"2020-05-14 17:25:58\"}]}";
        return JSONObject.parseObject(content);
    }

    @DeleteMapping("/samples/{sampleId}")
    public SampleResult deleteSampleById(@PathVariable(required = false) Long sampleId) {

        System.out.println("delete sample" + sampleId);
        sampleService.deleteBySampleId(sampleId);
        return new SampleResult();
    }

    @RequestMapping("/samples/{sampleId}")
    public SampleResult getSampleById(@PathVariable(required = false) Long sampleId) {
        Sample sample = sampleService.findBySampleId(sampleId);
        Map<Integer, String> customAttribute = sample.getCustomAttribute();
        if (sample == null) return new SampleResult(500, "没有样品");
        // String content = "{\"code\":\"200\",\"message\":\"\",\"sampleSelects\":[],\"quoteSampleSelects\":[],\"sampleListParams\":[{\"attrId\":1,\"prettyName\":\"编号\"},{\"attrId\":2,\"prettyName\":\"名称\"},{\"attrId\":3,\"prettyName\":\"成分\"},{\"attrId\":4,\"prettyName\":\"门幅\"},{\"attrId\":5,\"prettyName\":\"克重\"}]}";
        // String attributeStr = "[{\"attributeKey\":\"\",\"attributeId\":1,\"prettyName\":\"编号\",\"prettyNameEn\":\"ITEM NO\",\"linkType\":0,\"linkId\":0,\"value\":\"11111\",\"valueType\":0},{\"attributeKey\":\"\",\"attributeId\":2,\"prettyName\":\"名称\",\"prettyNameEn\":\"NAME\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":0},{\"attributeKey\":\"\",\"attributeId\":3,\"prettyName\":\"成分\",\"prettyNameEn\":\"COMPONENT\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":1},{\"attributeKey\":\"\",\"attributeId\":4,\"prettyName\":\"门幅\",\"prettyNameEn\":\"WIDTH\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":1},{\"attributeKey\":\"\",\"attributeId\":5,\"prettyName\":\"克重\",\"prettyNameEn\":\"WEIGHT\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":1},{\"attributeKey\":\"\",\"attributeId\":6,\"prettyName\":\"规格\",\"prettyNameEn\":\"SPEC.\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":1},{\"attributeKey\":\"\",\"attributeId\":7,\"prettyName\":\"分类\",\"prettyNameEn\":\"CLASSIFY\",\"linkType\":0,\"linkId\":0,\"value\":\"\",\"valueType\":2}]";
        // List<Attribute> attributes = JSONArray.parseArray(attributeStr, Attribute.class);
        List<Attribute> attributes = new ArrayList<>();
        customAttribute.forEach((id, value) -> {
            String prettyName = "";
            String prettyNameEn = "";
            Integer valueType = 0;
            switch (id) {
                case 1:
                    prettyName = "编号";
                    prettyNameEn = "ITEM NO";
                    valueType = 0;
                    break;
                case 2:
                    prettyName = "名称";
                    prettyNameEn = "NAME";
                    valueType = 0;
                    break;
                case 3:
                    prettyName = "成分";
                    prettyNameEn = "COMPONENT";
                    valueType = 1;
                    break;
                case 4:
                    prettyName = "门幅";
                    prettyNameEn = "WIDTH";
                    valueType = 1;
                    break;
                case 5:
                    prettyName = "克重";
                    prettyNameEn = "WEIGHT";
                    valueType = 1;
                    break;
                case 6:
                    prettyName = "规格";
                    prettyNameEn = "SPEC.";
                    valueType = 1;
                    break;
                case 7:
                    prettyName = "分类";
                    prettyNameEn = "CLASSIFY";
                    valueType = 2;
                    break;
            }
            Attribute attribute = new Attribute(id, "", 0, 0, prettyName, prettyNameEn, value, valueType);
            attributes.add(attribute);
        });
        SampleDetailVo vo = new SampleDetailVo();
        vo.setAttributes(attributes);
        vo.setCompanyId(111);
        List<PicVo> pics = sample.getPics();
        if (!CollectionUtils.isEmpty(pics)) {
            PicVo picVo = pics.get(0);
            String picIds = picVo.getPicIds();
            String[] picIdArr = picIds.split(",");
            List<PicDoc> picList = new ArrayList<>();
            picVo.setPic(picList);
            for (String picId : picIdArr) {
                Pic pic = picService.getPicDataById(Long.valueOf(picId));
                PicDoc picDoc = new PicDoc();
                picDoc.setDocId(Long.valueOf(picId));
                picDoc.setSampleDocId(sampleId);
                picDoc.setSampleDocKey(pic.getUri());
                picList.add(picDoc);

            }
            // if (pic != null)
            //     vo.setSamplePicKey(pic.getUri());
        }
        vo.setPics(pics);
        vo.setName(customAttribute.get(1));
        vo.setSampleId(sample.getSampleId());
        vo.setItemNo(sample.getItemNo());
        vo.setTags(new ArrayList<>());
        SampleResult sampleResult = new SampleResult();
        sampleResult.setSample(vo);
        return sampleResult;
    }

    // @RequestMapping("/sell")
    // public JSONObject sell() {
    //     String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":0,\"pageSize\":0,\"pageCount\":0,\"recordCount\":0,\"sellOrders\":[]}";
    //     return JSONObject.parseObject(content);
    // }

    @Autowired
    SampleService sampleService;

    @RequestMapping("/saveSamples")
    public SampleResult samplesSave(@RequestBody JSONObject body) {
        Sample sample = body.toJavaObject(Sample.class);
        Map<Integer, String> customAttribute = sample.getCustomAttribute();
        String itemNo = customAttribute.get(1);
        sample.setItemNo(itemNo);
        boolean isExists = sampleService.isExists(sample);
        if (isExists)
            return new SampleResult(400, "样品编号不能重复");
        sampleService.saveSamples(sample);
        return new SampleResult(200, "");
    }

    @RequestMapping("/updateSample")
    public SampleResult samplesUpdate(@RequestBody JSONObject body) {
        Sample sample = body.toJavaObject(Sample.class);
        // Map<Integer, String> customAttribute = sample.getCustomAttribute();
        // String itemNo = customAttribute.get(1);
        // sample.setItemNo(itemNo);
        boolean isExists = sampleService.isExists(sample);
        if (isExists)
            return new SampleResult(400, "样品编号不能重复");
        sampleService.saveSamples(sample);
        return new SampleResult(200, "");
    }


    @Autowired
    PicService picService;

    @RequestMapping("/upload/pic")
    public SampleResult uploadPic(@RequestParam Integer bizType, @RequestParam Integer bizId, @RequestParam MultipartFile files) {

        String originalFilename = files.getOriginalFilename();
        String extendName = "";
        if (originalFilename.contains(".")) {
            extendName = originalFilename.split("\\.")[1];
        }
        String fileName = System.currentTimeMillis() + "";
        if (StringUtils.isNotBlank(extendName)) {
            fileName = fileName + "." + extendName;
        }
        File file = new File("./picResources/" + fileName);

        System.out.println(file.getAbsolutePath());
        try {
            files.transferTo(file);
            System.out.println(file.getCanonicalPath());
        } catch (IOException e) {
            e.printStackTrace();
        }

        // String content = "{\"code\":\"200\",\"message\":\"\",\"pageNo\":0,\"pageSize\":0,\"pageCount\":0,\"recordCount\":0,\"sellOrders\":[]}";
        SampleResult responseResult = new SampleResult(200, "");
        long picId = System.currentTimeMillis();
        String picKeys = "http://" + serverHost + "/picResources/" + fileName;
        Pic pic = new Pic();
        pic.setPicId(picId);
        pic.setUri(picKeys);
        picService.savePicData(pic);
        responseResult.setPicIds(Collections.singletonList(picId));
        responseResult.setPicKeys(Collections.singletonList(picKeys));
        return responseResult;
    }


    @RequestMapping("/samples/colorByCompanyId")
    public String colorByCompanyId() {
        //聚合获取颜色信息


        return "{\"code\":\"200\",\"message\":\"\",\"colors\":[{\"id\":0,\"name\":\"1\",\"mark\":\"1\",\"pic\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samples/color/36052/1589447713395.png\",\"remark\":\"\"}]}";
    }

    @RequestMapping("/samples/{companyId}/color")
    public ColorResult colorByCompanyId(@PathVariable(required = false) Long companyId) {
        Sample bySampleId = sampleService.findBySampleId(companyId);
        List<ColorEntity> colors = bySampleId.getColors();
        colors.forEach(colorEntity -> {
            colorEntity.setId(0L);
        });
        ColorResult colorResult = new ColorResult();
        colorResult.setColors(colors);
        return colorResult;
        // System.out.println(companyId);
        // return "{\"code\":\"200\",\"message\":\"\",\"colors\":[{\"id\":0,\"name\":\"1\",\"mark\":\"1\",\"pic\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samples/color/36052/1589447713395.png\",\"remark\":\"\"}]}";
    }


    public static void main(String[] args) {
        reverseString(new char[]{'a', 'b', 'c', 'd', 'e'});

    }

    public static void reverseString(char[] s) {
        for (int i = 0; i < s.length; i++) {
            char tempStart = s[i];
            char tempEnd = s[s.length - i - 1];
            s[i] = tempEnd;
            s[s.length - i - 1] = tempStart;
            if (i == s.length - i - 1 || i == s.length - i - 2) break;
        }
        System.out.println(s);
    }


}