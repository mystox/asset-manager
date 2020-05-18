package tech.mystox.asset.entity.db;

/**
 * Created by mystoxlol on 2020/5/18, 14:23.
 * company: kongtrolink
 * description:
 * update record:
 */
public class Pic {
    private Long picId;
    private String uri;

    public Long getPicId() {
        return picId;
    }

    public void setPicId(Long picId) {
        this.picId = picId;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
