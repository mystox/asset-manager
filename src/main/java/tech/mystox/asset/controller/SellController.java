package tech.mystox.asset.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.mystox.asset.entity.vo.SellResult;
import tech.mystox.asset.entity.vo.SellSaveBody;
import tech.mystox.asset.entity.vo.SellSearch;
import tech.mystox.asset.entity.vo.SellVo;
import tech.mystox.asset.service.SellService;

import java.util.List;

/**
 * \* @Author: mystox
 * \* Date: 2020/5/7 15:46
 * \* Description:
 * \
 */
@RestController
@RequestMapping("/api")
public class SellController {

    @Autowired
    SellService sellService;

    @RequestMapping("/sell")
    public SellResult listCell(SellSearch sellSearch) {
        System.out.println(JSONObject.toJSONString(sellSearch));
        List<SellVo> sellVos =  sellService.getSell(sellSearch);
        Long count = sellService.countByCondition(sellSearch);
        SellResult sellResult = new SellResult();
        sellResult.setPageSize(sellSearch.getPageSize());
        sellResult.setRecordCount(count);
        sellResult.setPageCount(sellResult.getPageSize());
        sellResult.setSellOrders(sellVos);
        return sellResult;

    }


    @RequestMapping("/sell/quote/record")
    public String quoteRecord(Long sampleId, String type, Long customerId) {
        return "{\"code\":\"200\",\"message\":\"\",\"records\":[]}";
    }


    /**
     * 订单id
     * @param companyId
     * @return
     */
    @RequestMapping("/sell/{sellId}")
    public String sellPrint(@PathVariable(required = false) String companyId) {

        return "{\"code\":\"200\",\"message\":\"\",\"companyName\":\"mystox\",\"companyAddress\":\"\",\"sellOrderNo\":\"SO2020050002\",\"contractNo\":\"\",\"contractOrderNo\":\"\",\"contractPhoto\":\"\",\"sellerId\":38737,\"sellerName\":\"mystox\",\"sellerMobile\":\"15067455667\",\"customerId\":24939,\"customerName\":\"dd\",\"customerTel\":\"\",\"orderDate\":\"2020-05-22\",\"priceUnit\":11,\"payType\":\"0\",\"payDeadline\":\"2020-05-29\",\"leadTime\":\"2020-06-21\",\"totalPrice\":16.0,\"totalCostPrice\":0.0,\"type\":0,\"taxType\":0,\"creatorId\":38737,\"creatorName\":\"mystox\",\"currencyName\":\"人民币\",\"remark\":\"\",\"status\":0,\"depositPrice\":16.0,\"receivablePrice\":0.0,\"isClosed\":0,\"haveDelivered\":0,\"haveProduction\":0,\"haveDistribute\":0,\"warehouseId\":0,\"warehouseName\":\"\",\"shippingStatus\":0,\"distributionStatus\":0,\"details\":[{\"detailId\":36551,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325009,\"colorMark\":\"2\",\"colorName\":\"2\",\"num\":1.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":2.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":2.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":1.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36552,\"sampleId\":1861550,\"samplePicId\":2198970,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589426099435.png\",\"itemNo\":\"dddddddd\",\"name\":\"ddd\",\"width\":\"145CM\",\"weight\":\"140g/㎡\",\"component\":\"C:100%\",\"specification\":\"d\",\"colorId\":1325010,\"colorMark\":\"1\",\"colorName\":\"1\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":4.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":4.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36553,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325012,\"colorMark\":\"12\",\"colorName\":\"12\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":3.0,\"price\":6.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":6.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36554,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325013,\"colorMark\":\"222\",\"colorName\":\"222\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":4.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":4.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]}]}";
    }
    @RequestMapping("/sell/save")
    public String sellSave(@RequestBody SellSaveBody sellBody) {

        sellService.saveSell(sellBody);

        return "{\"code\":\"200\",\"message\":\"\",\"companyName\":\"mystox\",\"companyAddress\":\"\",\"sellOrderNo\":\"SO2020050002\",\"contractNo\":\"\",\"contractOrderNo\":\"\",\"contractPhoto\":\"\",\"sellerId\":38737,\"sellerName\":\"mystox\",\"sellerMobile\":\"15067455667\",\"customerId\":24939,\"customerName\":\"dd\",\"customerTel\":\"\",\"orderDate\":\"2020-05-22\",\"priceUnit\":11,\"payType\":\"0\",\"payDeadline\":\"2020-05-29\",\"leadTime\":\"2020-06-21\",\"totalPrice\":16.0,\"totalCostPrice\":0.0,\"type\":0,\"taxType\":0,\"creatorId\":38737,\"creatorName\":\"mystox\",\"currencyName\":\"人民币\",\"remark\":\"\",\"status\":0,\"depositPrice\":16.0,\"receivablePrice\":0.0,\"isClosed\":0,\"haveDelivered\":0,\"haveProduction\":0,\"haveDistribute\":0,\"warehouseId\":0,\"warehouseName\":\"\",\"shippingStatus\":0,\"distributionStatus\":0,\"details\":[{\"detailId\":36551,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325009,\"colorMark\":\"2\",\"colorName\":\"2\",\"num\":1.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":2.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":2.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":1.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36552,\"sampleId\":1861550,\"samplePicId\":2198970,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589426099435.png\",\"itemNo\":\"dddddddd\",\"name\":\"ddd\",\"width\":\"145CM\",\"weight\":\"140g/㎡\",\"component\":\"C:100%\",\"specification\":\"d\",\"colorId\":1325010,\"colorMark\":\"1\",\"colorName\":\"1\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":4.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":4.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36553,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325012,\"colorMark\":\"12\",\"colorName\":\"12\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":3.0,\"price\":6.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":6.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]},{\"detailId\":36554,\"sampleId\":1868655,\"samplePicId\":2219366,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589793540177.png\",\"itemNo\":\"ddee\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1325013,\"colorMark\":\"222\",\"colorName\":\"222\",\"num\":2.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"米\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":2.0,\"price\":4.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":4.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":2.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]}]}";
    }



}