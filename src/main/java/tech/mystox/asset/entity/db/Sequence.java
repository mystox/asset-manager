package tech.mystox.asset.entity.db;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * Created by mystoxlol on 2017/6/19, 18:54.
 * company: fastech
 * update record:
 */
@Document(collection = "sequence")
public class Sequence {
    @Id
    private String id;

    @Field
    private String name;

    @Field
    private Long uid;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getId() {
        return id;
    }
}
