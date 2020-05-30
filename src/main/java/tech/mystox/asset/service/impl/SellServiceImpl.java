package tech.mystox.asset.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import tech.mystox.asset.dao.SellDao;
import tech.mystox.asset.entity.SellNum;
import tech.mystox.asset.entity.db.Sell;
import tech.mystox.asset.entity.vo.SellDetailsVo;
import tech.mystox.asset.entity.vo.SellSaveBody;
import tech.mystox.asset.entity.vo.SellSearch;
import tech.mystox.asset.entity.vo.SellVo;
import tech.mystox.asset.service.SellService;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by mystoxlol on 2020/5/22, 17:04.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class SellServiceImpl implements SellService {

    @Autowired
    SellDao sellDao;

    @Override
    public List<SellVo> getSell(SellSearch sellSearch) {
        List<Sell> sellList = sellDao.findByCondition(sellSearch);
        List<SellVo> sellVos = new ArrayList<>();
        if (!CollectionUtils.isEmpty(sellList))
            sellList.forEach(sell -> {
                SellVo sellVo = new SellVo();
                BeanUtils.copyProperties(sell, sellVo);
                sellVos.add(sellVo);
            });
        return sellVos;
    }

    @Override
    public void saveSell(SellSaveBody sellBody) {
        String companyId = sellBody.getCompanyId();
        List<SellDetailsVo> details = sellBody.getDetails();

        final Double[] totalPrice = {0.0};
        Map<String, Double> totalNum = new HashMap<>(); //总数量
        details.forEach(sellDetailsVo -> {
            String num = sellDetailsVo.getNum();
            Double doubleNum = Double.valueOf(num);
            String numUnit = sellDetailsVo.getNumUnit();
            // totalNum.com
            totalNum.compute(numUnit, (k, v) -> v == null ? doubleNum : v + doubleNum);
            String price = sellDetailsVo.getPrice();
            totalPrice[0] += Double.valueOf(price);
        });
        Sell sell = new Sell();
        BeanUtils.copyProperties(sellBody, sell);
        sell.setContractId(0);
        sell.setContractOrderNo("2");
        sell.setContractNo("");
        //todo 合同保存
        sell.setCustomerId(Integer.valueOf(sellBody.getCustomerId()));
        sell.setCustomerName("测试客户");
        Long orderId = sellDao.getSequenceId("orderId");
        sell.setOrderId(orderId);
        SimpleDateFormat sdf = new SimpleDateFormat("YYYYMMdd");
        sell.setOrderNo("SO" + sdf.format(new Date()) + orderId);
        sell.setOrderDate(sellBody.getOrderDate());
        sell.setSellerName("测试业务员");
        sell.setPayDeadline(sellBody.getOrderDate());
        sell.setSellerId(sellBody.getSellerId());
        sell.setType(Integer.valueOf(sellBody.getType()));
        sell.setContractNo(sellBody.getContractNo());


        sell.setPayDeadline(sellBody.getPayDeadline());
        sell.setLeadTime(sellBody.getLeadTime());
        sell.setPayType(sellBody.getPayType());

        List<SellNum> sellNums = new ArrayList<>();
        totalNum.forEach((k,v)->{

        sellNums.add(new SellNum(k,v,"",0));
        });
        sell.setTotalPrice(totalPrice[0]);
        sell.setSellNum(sellNums);
        sell.setStatus(0);
        sell.setIsClosed(0);
        sell.setDistributionStatus(0);
        sell.setDistributeablePackageNum("");
        sell.setDistributedPackageNum(0);
        sell.setDistributeNum(new ArrayList<>());
        sell.setDeliverNum(new ArrayList<>());

        sellDao.save(sell);
    }

    @Override
    public Long countByCondition(SellSearch sellSearch) {
        return sellDao.countByCondition(sellSearch);
    }

    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("YYYYMMdd");
        String format = sdf.format(new Date());
        System.out.println(format);


        Map<String, Integer> a = new HashMap<>();
        Integer integer = a.compute("x", (k, v) -> (v == null) ? (1) : (v + 1));
        System.out.println(integer);
        System.out.println(a.get("x"));


    }
}
