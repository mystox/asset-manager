package tech.mystox.asset.entity.db;

import tech.mystox.asset.entity.ColorEntity;
import tech.mystox.asset.entity.PicVo;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by mystoxlol on 2020/5/14, 17:12.
 * company: kongtrolink
 * description:
 * update record:
 */
public class Sample {
    private Long sampleId;
    private String companyId;
    private List<ColorEntity> colors;
    private Map<Integer,String> customAttribute;
    private Integer hot;
    private Integer topType;
    private List<PicVo> pics;
    private String privateRemark;
    private String protectRemark;
    private String publicRemark;
    private String tagIds;
    private Date createTime;




    public Sample() {
    }


    public Long getSampleId() {
        return sampleId;
    }

    public void setSampleId(Long sampleId) {
        this.sampleId = sampleId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public List<ColorEntity> getColors() {
        return colors;
    }

    public void setColors(List<ColorEntity> colors) {
        this.colors = colors;
    }

    public Map<Integer, String> getCustomAttribute() {
        return customAttribute;
    }

    public void setCustomAttribute(Map<Integer, String> customAttribute) {
        this.customAttribute = customAttribute;
    }

    public Integer getHot() {
        return hot;
    }

    public void setHot(Integer hot) {
        this.hot = hot;
    }

    public Integer getTopType() {
        return topType;
    }

    public void setTopType(Integer topType) {
        this.topType = topType;
    }

    public List<PicVo> getPics() {
        return pics;
    }

    public void setPics(List<PicVo> pics) {
        this.pics = pics;
    }

    public String getPrivateRemark() {
        return privateRemark;
    }

    public void setPrivateRemark(String privateRemark) {
        this.privateRemark = privateRemark;
    }

    public String getProtectRemark() {
        return protectRemark;
    }

    public void setProtectRemark(String protectRemark) {
        this.protectRemark = protectRemark;
    }

    public String getPublicRemark() {
        return publicRemark;
    }

    public void setPublicRemark(String publicRemark) {
        this.publicRemark = publicRemark;
    }

    public String getTagIds() {
        return tagIds;
    }

    public void setTagIds(String tagIds) {
        this.tagIds = tagIds;
    }
}
