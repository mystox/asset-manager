package tech.mystox.asset.dao;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.MongoDocName;
import tech.mystox.asset.entity.db.Pic;

/**
 * Created by mystoxlol on 2020/5/18, 17:25.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class PicDao extends MongoBaseDao{

    public void save(Pic pic) {
        mongoTemplate.save(pic, MongoDocName.PIC);
    }

    public Pic findByPicId(Long picId) {
        return mongoTemplate.findOne(Query.query(Criteria.where("picId").is(picId)), Pic.class, MongoDocName.PIC);
    }
}
