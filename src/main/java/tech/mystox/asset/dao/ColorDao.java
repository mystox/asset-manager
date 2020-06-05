package tech.mystox.asset.dao;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import tech.mystox.asset.entity.ColorEntity;
import tech.mystox.asset.entity.MongoDocName;

import java.util.List;

/**
 * Created by mystoxlol on 2020/6/4, 9:34.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class ColorDao extends MongoBaseDao {

    public void saveColors(List<ColorEntity> colorEntities) {

        mongoTemplate.insert(colorEntities, MongoDocName.COLOR);

    }

    public void saveColor(ColorEntity colorEntity) {

        mongoTemplate.save(colorEntity, MongoDocName.COLOR);

    }

    public boolean isExistsByMarkAndName(String mark, String name, String sampleId) {
        return mongoTemplate.exists(Query.query(Criteria.where("mark").is(mark).and("name").is(name).and("sampleId").is(sampleId)), MongoDocName.COLOR);
    }
}
