package tech.mystox.asset.entity;

/**
 * Created by mystoxlol on 2020/5/14, 17:19.
 * company: kongtrolink
 * description:
 * update record:
 */
public class ColorEntity {
    private Long id;
    private String name;//": "纯红",
    private String mark;//": "ffffff"
    private String remark;//": "",
    private String pic;//": "#ff0000"


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }
}
