package tech.mystox.asset.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.mystox.asset.dao.ColorDao;
import tech.mystox.asset.dao.SampleDao;
import tech.mystox.asset.entity.db.Sample;
import tech.mystox.asset.service.SampleService;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 17:07.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class SampleServiceImpl implements SampleService {


    @Autowired
    SampleDao sampleDao;


    @Autowired
    ColorDao colorDao;

    @Override
    public void saveSamples(Sample body) {
        sampleDao.saveSamples(body);
    }

    @Override
    public List<Sample> findByCondition(Integer pageSize, Integer pageNo, Integer orderByType, Integer searchType, String key) {

        JSONObject condition = new JSONObject();

        condition.put("pageSize", pageSize);
        condition.put("pageNo", pageNo);
        return sampleDao.findSamples(condition,searchType,key);
    }

    @Override
    public boolean isExists(Sample sample)
    {
        String itemNo = sample.getItemNo();
        return sampleDao.isExistByItemNo(itemNo);
    }

    @Override
    public Long countByCondition(Integer searchType, String key)
    {
        return sampleDao.countByCondition(searchType, key);
    }

    @Override
    public Sample findBySampleId(Long sampleId) {
        Sample sample = sampleDao.findSampleById(sampleId);
        return sample;
    }

    @Override
    public void deleteBySampleId(Long sampleId) {
        sampleDao.deleteBySampleId(sampleId);

    }
}
