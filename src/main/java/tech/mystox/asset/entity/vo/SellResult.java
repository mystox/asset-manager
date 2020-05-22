package tech.mystox.asset.entity.vo;

import tech.mystox.asset.entity.BaseResult;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 16:22.
 * company: kongtrolink
 * description:
 * update record:
 */
public class SellResult extends BaseResult {

    private List<SellVo> sellOrders;

    public SellResult() {
    }

    public SellResult(Integer code, String message) {
        super(code,message);
    }


    public List<SellVo> getSellOrders() {
        return sellOrders;
    }

    public void setSellOrders(List<SellVo> sellOrders) {
        this.sellOrders = sellOrders;
    }
}
