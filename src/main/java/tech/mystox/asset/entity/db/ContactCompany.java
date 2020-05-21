package tech.mystox.asset.entity.db;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/21, 15:50.
 * company: kongtrolink
 * description: 联系客户实体
 * update record:
 */
public class ContactCompany {
    private Integer id;
    private String name;//": "1",
    private String shortName;//": "1",
    private String code;//": "",
    private String telephone;//": "1",
    private String email;//": "mysm",
    private String fax;//": "",
    private String provinceName;//": "浙江省",
    private String cityName;//": "杭州市",
    private String areaName;//": "上城区",
    private String address;//": "企业地址",
    private Integer nature;//": 2,
    private String remark;//": "",
    private String accountsBank;//": "",
    private Integer companyCurrencyId;//": 86408,
    private String currencyName;//": "人民币",
    private Integer salesman;//": 38737,
    private String salesmanName;//": "mystox",
    private String creatorName;//": "mystox",
    private Integer contactUserNum;//": 1,
    private String invoiceTitle;//": "",
    private String taxNumber;//": "",
    private Integer contactUpdateDeleteAuthority;//": 1,
    private List<ContactUser> contactUser;//":

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getNature() {
        return nature;
    }

    public void setNature(Integer nature) {
        this.nature = nature;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getAccountsBank() {
        return accountsBank;
    }

    public void setAccountsBank(String accountsBank) {
        this.accountsBank = accountsBank;
    }

    public Integer getCompanyCurrencyId() {
        return companyCurrencyId;
    }

    public void setCompanyCurrencyId(Integer companyCurrencyId) {
        this.companyCurrencyId = companyCurrencyId;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public Integer getSalesman() {
        return salesman;
    }

    public void setSalesman(Integer salesman) {
        this.salesman = salesman;
    }

    public String getSalesmanName() {
        return salesmanName;
    }

    public void setSalesmanName(String salesmanName) {
        this.salesmanName = salesmanName;
    }

    public String getCreatorName() {
        return creatorName;
    }

    public void setCreatorName(String creatorName) {
        this.creatorName = creatorName;
    }

    public Integer getContactUserNum() {
        return contactUserNum;
    }

    public void setContactUserNum(Integer contactUserNum) {
        this.contactUserNum = contactUserNum;
    }

    public String getInvoiceTitle() {
        return invoiceTitle;
    }

    public void setInvoiceTitle(String invoiceTitle) {
        this.invoiceTitle = invoiceTitle;
    }

    public String getTaxNumber() {
        return taxNumber;
    }

    public void setTaxNumber(String taxNumber) {
        this.taxNumber = taxNumber;
    }

    public Integer getContactUpdateDeleteAuthority() {
        return contactUpdateDeleteAuthority;
    }

    public void setContactUpdateDeleteAuthority(Integer contactUpdateDeleteAuthority) {
        this.contactUpdateDeleteAuthority = contactUpdateDeleteAuthority;
    }

    public List<ContactUser> getContactUser() {
        return contactUser;
    }

    public void setContactUser(List<ContactUser> contactUser) {
        this.contactUser = contactUser;
    }
}
