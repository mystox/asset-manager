package tech.mystox.asset.entity.vo;

import tech.mystox.asset.entity.BaseResult;
import tech.mystox.asset.entity.ColorEntity;

import java.util.List;

/**
 * Created by mystoxlol on 2020/6/4, 14:18.
 * company: kongtrolink
 * description:
 * update record:
 */
public class ColorResult extends BaseResult {

    private List<ColorEntity> colors;

    public ColorResult() {
    }

    public List<ColorEntity> getColors() {
        return colors;
    }

    public void setColors(List<ColorEntity> colors) {
        this.colors = colors;
    }
}
