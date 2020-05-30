package tech.mystox.asset.entity;

/**
 * Created by mystoxlol on 2020/5/25, 10:04.
 * company: kongtrolink
 * description:
 * update record:
 */
public class SellNum {
    private String unit;
    private Double value;
    private String packageNum;
    private Integer packageValue;

    public SellNum() {
    }

    public SellNum(String unit, Double value, String packageNum, Integer packageValue) {
        this.unit = unit;
        this.value = value;
        this.packageNum = packageNum;
        this.packageValue = packageValue;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getPackageNum() {
        return packageNum;
    }

    public void setPackageNum(String packageNum) {
        this.packageNum = packageNum;
    }

    public Integer getPackageValue() {
        return packageValue;
    }

    public void setPackageValue(Integer packageValue) {
        this.packageValue = packageValue;
    }
}
