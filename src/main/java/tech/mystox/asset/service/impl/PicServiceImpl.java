package tech.mystox.asset.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.mystox.asset.dao.PicDao;
import tech.mystox.asset.entity.db.Pic;
import tech.mystox.asset.service.PicService;

/**
 * Created by mystoxlol on 2020/5/18, 17:25.
 * company: kongtrolink
 * description:
 * update record:
 */
@Service
public class PicServiceImpl implements PicService {
    @Autowired
    PicDao picDao;
    @Override
    public void savePicData(Pic pic) {
        picDao.save(pic);

    }

    @Override
    public Pic getPicDataById(Long picId) {
        return picDao.findByPicId(picId);
    }
}
