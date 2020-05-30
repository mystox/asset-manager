package tech.mystox.asset.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.MongoDocName;
import tech.mystox.asset.entity.db.Sample;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 17:08.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class SampleDao extends MongoBaseDao {


    public void saveSamples(Sample sample) {

        sample.setSampleId(getSequenceId("sampleId"));
        mongoTemplate.save(sample, MongoDocName.SAMPLE);
    }

    public List<Sample> findSamples(JSONObject condition) {
        Integer pageSize = condition.getInteger("pageSize");
        Integer pageNo = condition.getInteger("pageNo");
        Criteria criteria = new Criteria();
        return mongoTemplate.find(Query.query(criteria).limit(pageSize).skip((pageNo - 1) * pageSize),Sample.class,MongoDocName.SAMPLE);

    }

    public boolean isExistByItemNo(String itemNo)
    {
        return mongoTemplate.exists(Query.query(Criteria.where("itemNo").is(itemNo)), MongoDocName.SAMPLE);
    }

    public Long countByCondition()
    {
        return mongoTemplate.count(Query.query(new Criteria()),MongoDocName.SAMPLE);
    }
}
