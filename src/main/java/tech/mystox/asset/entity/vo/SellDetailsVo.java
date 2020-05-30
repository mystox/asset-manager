package tech.mystox.asset.entity.vo;

/**
 * Created by mystoxlol on 2020/5/29, 14:56.
 * company: kongtrolink
 * description:
 * update record:
 */
public class SellDetailsVo {
    private String sampleId;//": "1862174",
    private String itemNo;//": "",
    private String sampleName;//": "",
    private String colorId;//": "1324777",
    private String num;//": "2", 数量
    private String numUnit;//": "米", 单位
    private String unitPrice;//": "1", 单价
    private String extraCharge;//": "",
    private String price;//": "2", 总价
    private String noTaxPrice;//": "2",
    private Integer taxRate;//": 0,
    private String taxPrice;//": "0",
    private String exchangeRate;//": "",
    private String foreignPrice;//": "",
    private String remark;//": ""

    public SellDetailsVo() {
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public String getSampleName() {
        return sampleName;
    }

    public void setSampleName(String sampleName) {
        this.sampleName = sampleName;
    }

    public String getColorId() {
        return colorId;
    }

    public void setColorId(String colorId) {
        this.colorId = colorId;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getNumUnit() {
        return numUnit;
    }

    public void setNumUnit(String numUnit) {
        this.numUnit = numUnit;
    }

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getExtraCharge() {
        return extraCharge;
    }

    public void setExtraCharge(String extraCharge) {
        this.extraCharge = extraCharge;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getNoTaxPrice() {
        return noTaxPrice;
    }

    public void setNoTaxPrice(String noTaxPrice) {
        this.noTaxPrice = noTaxPrice;
    }

    public Integer getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(Integer taxRate) {
        this.taxRate = taxRate;
    }

    public String getTaxPrice() {
        return taxPrice;
    }

    public void setTaxPrice(String taxPrice) {
        this.taxPrice = taxPrice;
    }

    public String getExchangeRate() {
        return exchangeRate;
    }

    public void setExchangeRate(String exchangeRate) {
        this.exchangeRate = exchangeRate;
    }

    public String getForeignPrice() {
        return foreignPrice;
    }

    public void setForeignPrice(String foreignPrice) {
        this.foreignPrice = foreignPrice;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
