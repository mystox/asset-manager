package tech.mystox.asset.entity;

/**
 * Created by mystoxlol on 2020/6/2, 9:54.
 * company: kongtrolink
 * description:
 * update record:
 */
public class Attribute {
    private Integer attributeId;//: 3
    private String attributeKey;//: ""
    private Integer linkId;//: 0
    private Integer linkType;//: 0
    private String prettyName;//: "成分"
    private String prettyNameEn;//: "COMPONENT"
    private String value;//: ""
    private Integer valueType;//: 1


    public Attribute(Integer attributeId, String attributeKey, Integer linkId, Integer linkType, String prettyName, String prettyNameEn, String value, Integer valueType) {
        this.attributeId = attributeId;
        this.attributeKey = attributeKey;
        this.linkId = linkId;
        this.linkType = linkType;
        this.prettyName = prettyName;
        this.prettyNameEn = prettyNameEn;
        this.value = value;
        this.valueType = valueType;
    }

    public Attribute() {
    }

    public Integer getAttributeId() {
        return attributeId;
    }

    public void setAttributeId(Integer attributeId) {
        this.attributeId = attributeId;
    }

    public String getAttributeKey() {
        return attributeKey;
    }

    public void setAttributeKey(String attributeKey) {
        this.attributeKey = attributeKey;
    }

    public Integer getLinkId() {
        return linkId;
    }

    public void setLinkId(Integer linkId) {
        this.linkId = linkId;
    }

    public Integer getLinkType() {
        return linkType;
    }

    public void setLinkType(Integer linkType) {
        this.linkType = linkType;
    }

    public String getPrettyName() {
        return prettyName;
    }

    public void setPrettyName(String prettyName) {
        this.prettyName = prettyName;
    }

    public String getPrettyNameEn() {
        return prettyNameEn;
    }

    public void setPrettyNameEn(String prettyNameEn) {
        this.prettyNameEn = prettyNameEn;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Integer getValueType() {
        return valueType;
    }

    public void setValueType(Integer valueType) {
        this.valueType = valueType;
    }
}
