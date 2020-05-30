package tech.mystox.asset.entity.db;

import tech.mystox.asset.entity.SellNum;
import tech.mystox.asset.entity.vo.SampleVo;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/22, 17:11.
 * company: kongtrolink
 * description:
 * update record:
 */
public class Sell {
    private Long orderId;//": 27392,
    private Integer contractId;//": 0, 合同id
    private String contractOrderNo;//": "",合同编号
    private String contractNo;//": "",合同
    private String contractPhoto;//": "",
    private String orderNo;//": "SO20200500
    private String orderDate;//": "2020-05-
    private Long sellerId;//": 38737,
    private String sellerName;//": "mystox"
    private Integer customerId;//": 24939,
    private String customerName;//": "dd",
    private Integer warehouseId;//": 0,
    private String warehouseName;//": "",
    private Double totalPrice;//": 16.0,
    private Double totalCostPrice;//": 0.0,
    private Double totalDeliverPrice;//": 0
    private Integer priceUnit;//": 11,
    private String payType;//": "0",
    private String payDeadline;//": "2020-0
    private String leadTime;//": "2020-06-2
    private Integer type;//": 0,
    private String remark;//": "",
    private Integer status;//": 0,
    private Integer isClosed;//": 1,
    private Integer distributionStatus;//":
    private Integer shippingStatus;//": 0,
    private Integer sellPackageNum;//": 0,
    private Integer distributedPackageNum;
    private String distributeablePackageNum;
    private List<SellNum> sellNum;
    private List<SellNum> deliverNum; //交付
    private List<SellNum> distributeNum; //分销
    private List<SampleVo> samples;


    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Integer getContractId() {
        return contractId;
    }

    public void setContractId(Integer contractId) {
        this.contractId = contractId;
    }

    public String getContractOrderNo() {
        return contractOrderNo;
    }

    public void setContractOrderNo(String contractOrderNo) {
        this.contractOrderNo = contractOrderNo;
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

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public Long getSellerId() {
        return sellerId;
    }

    public void setSellerId(Long sellerId) {
        this.sellerId = sellerId;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Integer getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Integer warehouseId) {
        this.warehouseId = warehouseId;
    }

    public String getWarehouseName() {
        return warehouseName;
    }

    public void setWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Double getTotalCostPrice() {
        return totalCostPrice;
    }

    public void setTotalCostPrice(Double totalCostPrice) {
        this.totalCostPrice = totalCostPrice;
    }

    public Double getTotalDeliverPrice() {
        return totalDeliverPrice;
    }

    public void setTotalDeliverPrice(Double totalDeliverPrice) {
        this.totalDeliverPrice = totalDeliverPrice;
    }

    public Integer getPriceUnit() {
        return priceUnit;
    }

    public void setPriceUnit(Integer priceUnit) {
        this.priceUnit = priceUnit;
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

    public String getLeadTime() {
        return leadTime;
    }

    public void setLeadTime(String leadTime) {
        this.leadTime = leadTime;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getIsClosed() {
        return isClosed;
    }

    public void setIsClosed(Integer isClosed) {
        this.isClosed = isClosed;
    }

    public Integer getDistributionStatus() {
        return distributionStatus;
    }

    public void setDistributionStatus(Integer distributionStatus) {
        this.distributionStatus = distributionStatus;
    }

    public Integer getShippingStatus() {
        return shippingStatus;
    }

    public void setShippingStatus(Integer shippingStatus) {
        this.shippingStatus = shippingStatus;
    }

    public Integer getSellPackageNum() {
        return sellPackageNum;
    }

    public void setSellPackageNum(Integer sellPackageNum) {
        this.sellPackageNum = sellPackageNum;
    }

    public Integer getDistributedPackageNum() {
        return distributedPackageNum;
    }

    public void setDistributedPackageNum(Integer distributedPackageNum) {
        this.distributedPackageNum = distributedPackageNum;
    }

    public String getDistributeablePackageNum() {
        return distributeablePackageNum;
    }

    public void setDistributeablePackageNum(String distributeablePackageNum) {
        this.distributeablePackageNum = distributeablePackageNum;
    }

    public List<SellNum> getSellNum() {
        return sellNum;
    }

    public void setSellNum(List<SellNum> sellNum) {
        this.sellNum = sellNum;
    }

    public List<SellNum> getDeliverNum() {
        return deliverNum;
    }

    public void setDeliverNum(List<SellNum> deliverNum) {
        this.deliverNum = deliverNum;
    }

    public List<SellNum> getDistributeNum() {
        return distributeNum;
    }

    public void setDistributeNum(List<SellNum> distributeNum) {
        this.distributeNum = distributeNum;
    }

    public List<SampleVo> getSamples() {
        return samples;
    }

    public void setSamples(List<SampleVo> samples) {
        this.samples = samples;
    }
}
