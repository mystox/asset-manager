package tech.mystox.asset.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import tech.mystox.asset.entity.db.Sequence;

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
    public Long getSequenceId(String sequenceName){
        Criteria criteria = new Criteria();
        criteria.where("name").is(sequenceName);
        Query query = new Query(criteria);
        Update update = new Update();
        update.inc("uid", 1);
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.upsert(true);
        options.returnNew(true);
        Sequence sequence = mongoTemplate.findAndModify(query, update, options, Sequence.class);
        return sequence.getUid();
    }


}
