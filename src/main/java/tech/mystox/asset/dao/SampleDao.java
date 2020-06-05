package tech.mystox.asset.dao;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.MongoDocName;
import tech.mystox.asset.entity.db.Sample;

import java.util.ArrayList;
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

    public List<Sample> findSamples(JSONObject condition, Integer searchType, String key) {

        Integer pageSize = condition.getInteger("pageSize");
        Integer pageNo = condition.getInteger("pageNo");
        Criteria criteria = new Criteria();
        if (StringUtils.isNotBlank(key)) {

            List<Criteria> orList = new ArrayList<>();
            if (0 == searchType) {
                for (int i = 1; i < 8; i++) {
                    orList.add(Criteria.where("customAttribute." + i).regex(key));
                }
                criteria.orOperator(orList.toArray(new Criteria[orList.size()]));
            } else
                criteria.and("customAttribute." + searchType).regex(key);
        }
        return mongoTemplate.find(Query.query(criteria).limit(pageSize).skip((pageNo - 1) * pageSize), Sample.class, MongoDocName.SAMPLE);

    }

    public boolean isExistByItemNo(String itemNo) {
        return mongoTemplate.exists(Query.query(Criteria.where("itemNo").is(itemNo)), MongoDocName.SAMPLE);
    }

    public Long countByCondition(Integer searchType, String key) {
        Criteria criteria = new Criteria();
        if (StringUtils.isNotBlank(key)) criteria = Criteria.where("customAttribute." + searchType).is(key);
        return mongoTemplate.count(Query.query(criteria), MongoDocName.SAMPLE);
    }

    public Sample findSampleById(Long sampleId) {
        return mongoTemplate.findOne(Query.query(Criteria.where("sampleId").is(sampleId)), Sample.class, MongoDocName.SAMPLE);
    }

    public void deleteBySampleId(Long sampleId) {
        mongoTemplate.remove(Query.query(Criteria.where("sampleId").is(sampleId)), MongoDocName.SAMPLE);
    }
}
