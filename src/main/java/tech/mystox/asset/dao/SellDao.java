package tech.mystox.asset.dao;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.MongoDocName;
import tech.mystox.asset.entity.db.Sell;
import tech.mystox.asset.entity.vo.SellSearch;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/29, 14:36.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class SellDao extends MongoBaseDao {
    public List<Sell> findByCondition(SellSearch sellSearch) {
        Criteria criteria = new Criteria();
        return mongoTemplate.find(Query.query(criteria), Sell.class, MongoDocName.SELL);
    }

    public void save(Sell sell) {
        sell.setOrderId(getSequenceId("orderId"));
        mongoTemplate.save(sell, MongoDocName.SELL);
    }

    public Long countByCondition(SellSearch sellSearch) {
        Criteria criteria = new Criteria();
        return mongoTemplate.count(Query.query(criteria),MongoDocName.SELL);
    }
}
