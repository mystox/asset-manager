package tech.mystox.asset.entity;

import tech.mystox.asset.entity.vo.PicDoc;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/15, 10:00.
 * company: kongtrolink
 * description:
 * update record:
 */
public class PicVo {
    private Integer roleType;
    private String picIds;
    private List<PicDoc> pic;

    public List<PicDoc> getPic() {
        return pic;
    }

    public void setPic(List<PicDoc> pic) {
        this.pic = pic;
    }

    public Integer getRoleType() {
        return roleType;
    }

    public void setRoleType(Integer roleType) {
        this.roleType = roleType;
    }

    public String getPicIds() {
        return picIds;
    }

    public void setPicIds(String picIds) {
        this.picIds = picIds;
    }
}
