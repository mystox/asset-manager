package tech.mystox.asset.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.mystox.asset.dao.SampleDao;
import tech.mystox.asset.entity.Sample;
import tech.mystox.asset.service.SampleService;

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

    @Override
    public void saveSamples(Sample body) {
        sampleDao.saveSamples(body);
    }
}
