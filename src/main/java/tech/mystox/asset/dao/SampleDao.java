package tech.mystox.asset.dao;

import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.MongoDocName;
import tech.mystox.asset.entity.Sample;

/**
 * Created by mystoxlol on 2020/5/14, 17:08.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class SampleDao extends MongoBaseDao {


    public void saveSamples(Sample sample) {

        mongoTemplate.save(sample, MongoDocName.SAMPLE);
    }

}
