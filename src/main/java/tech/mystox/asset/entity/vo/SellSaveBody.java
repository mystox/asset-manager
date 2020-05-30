package tech.mystox.asset.entity.vo;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/29, 14:51.
 * company: kongtrolink
 * description:
 * update record:
 */
public class SellSaveBody {
    private String companyId;//": "36052",
    private String orderDate;//": "2020-05-29",
    private String customerId;//": "24939",
    private Long sellerId;//": 38737,
    private String contractNo;//": "",
    private String contractPhoto;//": "",
    private String taxType;//": "0", 税类型
    private String remark;//": "",
    private Integer priceUnit;//": 11,
    private String type;//": "0",
    private List<SellDetailsVo> details;//": [
    private String leadTime;//": "2020-06-28", 交货日期
    private String payType;//": "0",
    private String payDeadline;//": "2020-06-05", 支付期限
    private String depositPrice;//": 6, 订金
    private String receivablePrice;//": 0


    public String getLeadTime() {
        return leadTime;
    }

    public void setLeadTime(String leadTime) {
        this.leadTime = leadTime;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
    }

    public String getPayDeadline() {
        return payDeadline;
    }

    public void setPayDeadline(String payDeadline) {
        this.payDeadline = payDeadline;
    }

    public String getDepositPrice() {
        return depositPrice;
    }

    public void setDepositPrice(String depositPrice) {
        this.depositPrice = depositPrice;
    }

    public String getReceivablePrice() {
        return receivablePrice;
    }

    public void setReceivablePrice(String receivablePrice) {
        this.receivablePrice = receivablePrice;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public Long getSellerId() {
        return sellerId;
    }

    public void setSellerId(Long sellerId) {
        this.sellerId = sellerId;
    }

    public String getContractNo() {
        return contractNo;
    }

    public void setContractNo(String contractNo) {
        this.contractNo = contractNo;
    }

    public String getContractPhoto() {
        return contractPhoto;
    }

    public void setContractPhoto(String contractPhoto) {
        this.contractPhoto = contractPhoto;
    }

    public String getTaxType() {
        return taxType;
    }

    public void setTaxType(String taxType) {
        this.taxType = taxType;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getPriceUnit() {
        return priceUnit;
    }

    public void setPriceUnit(Integer priceUnit) {
        this.priceUnit = priceUnit;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<SellDetailsVo> getDetails() {
        return details;
    }

    public void setDetails(List<SellDetailsVo> details) {
        this.details = details;
    }
}
