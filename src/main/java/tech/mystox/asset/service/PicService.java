package tech.mystox.asset.service;

import tech.mystox.asset.entity.db.Pic;

/**
 * Created by mystoxlol on 2020/5/18, 17:25.
 * company: kongtrolink
 * description:
 * update record:
 */
public interface PicService {

    void savePicData(Pic pic);

    Pic getPicDataById(Long picId);
}
