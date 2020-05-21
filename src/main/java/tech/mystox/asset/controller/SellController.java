package tech.mystox.asset.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * \* @Author: mystox
 * \* Date: 2020/5/7 15:46
 * \* Description:
 * \
 */
@RestController
@RequestMapping("/api")
public class SellController {


    @RequestMapping("/sell")
    public String listCell() {

        return "{\"code\":\"200\",\"message\":\"\",\"pageNo\":1,\"pageSize\":10,\"pageCount\":1,\"recordCount\":1,\"sellOrders\":[{\"orderId\":27347,\"contractId\":0,\"contractOrderNo\":\"\",\"contractNo\":\"\",\"contractPhoto\":\"\",\"orderNo\":\"SO2020050001\",\"orderDate\":\"2020-05-20\",\"sellerId\":38737,\"sellerName\":\"mystox\",\"customerId\":24831,\"customerName\":\"1\",\"warehouseId\":0,\"warehouseName\":\"\",\"totalPrice\":11.0,\"totalCostPrice\":0.0,\"totalDeliverPrice\":0.0,\"priceUnit\":11,\"payType\":\"0\",\"payDeadline\":\"2020-05-27\",\"leadTime\":\"2020-06-19\",\"type\":0,\"remark\":\"\",\"status\":0,\"isClosed\":0,\"distributionStatus\":0,\"shippingStatus\":0,\"sellPackageNum\":0,\"distributedPackageNum\":0,\"distributeablePackageNum\":0,\"sellNum\":[{\"unit\":\"码\",\"value\":1.0,\"packageUnit\":\"\",\"packageValue\":0}],\"deliverNum\":[{\"unit\":\"码\",\"value\":0.0,\"packageUnit\":\"\",\"packageValue\":0}],\"distributeNum\":[],\"samples\":[{\"detailId\":0,\"sampleId\":1862174,\"samplePicId\":2199920,\"samplePicKey\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/samplepic/36052/1589448336501.png\",\"itemNo\":\"11111\",\"name\":\"\",\"width\":\"\",\"weight\":\"\",\"component\":\"\",\"specification\":\"\",\"colorId\":1324777,\"colorMark\":\"fffff\",\"colorName\":\"\",\"num\":1.0,\"instructNum\":0.0,\"putNum\":0.0,\"greyFabricColorId\":0,\"greyFabricColorName\":\"\",\"greyFabricColorMark\":\"\",\"numUnit\":\"码\",\"accUnit\":\"\",\"subUnit1\":\"\",\"subUnit1Ratio\":0.0,\"subUnit2\":\"\",\"subUnit2Ratio\":0.0,\"subUnit3\":\"\",\"subUnit3Ratio\":0.0,\"packageUnit\":\"\",\"unitPrice\":0.0,\"price\":0.0,\"remark\":\"\",\"extraCharge\":0.0,\"noTaxPrice\":0.0,\"taxRate\":0.0,\"taxPrice\":0.0,\"foreignPrice\":0.0,\"exchangeRate\":0.0,\"deliverableNum\":0.0,\"distributePackageNum\":0,\"distributeNum\":0.0,\"colorNo\":\"\",\"packageNum\":0,\"packingListDetail\":[],\"distributedPackingListDetail\":[]}]}]}";
    }

}