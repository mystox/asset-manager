package tech.mystox.asset.service;

import tech.mystox.asset.entity.vo.SellSaveBody;
import tech.mystox.asset.entity.vo.SellSearch;
import tech.mystox.asset.entity.vo.SellVo;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/22, 17:04.
 * company: kongtrolink
 * description:
 * update record:
 */
public interface SellService {
    List<SellVo> getSell(SellSearch sellSearch);


    void saveSell(SellSaveBody sellBody);

    Long countByCondition(SellSearch sellSearch);
}
