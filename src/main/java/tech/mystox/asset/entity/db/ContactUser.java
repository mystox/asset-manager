package tech.mystox.asset.entity.db;

/**
 * Created by mystoxlol on 2020/5/21, 16:04.
 * company: kongtrolink
 * description:
 * update record:
 */
public class ContactUser {
    private String contactUserName;
    private Integer userId;

    public String getContactUserName() {
        return contactUserName;
    }

    public void setContactUserName(String contactUserName) {
        this.contactUserName = contactUserName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
