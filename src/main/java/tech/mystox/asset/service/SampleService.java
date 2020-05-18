package tech.mystox.asset.service;

import tech.mystox.asset.entity.db.Sample;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 17:06.
 * company: kongtrolink
 * description:
 * update record:
 */
public interface SampleService {
    public void saveSamples(Sample body);


    List<Sample> findByCondition(Integer pageSize, Integer pageNo, Integer orderByType);
}
