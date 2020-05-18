package tech.mystox.asset.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 * Created by mystoxlol on 2020/5/14, 17:08.
 * company: kongtrolink
 * description:
 * update record:
 */

public abstract class MongoBaseDao {
    protected MongoTemplate mongoTemplate;
    @Autowired
    public void setMongoTemplate(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }



}
