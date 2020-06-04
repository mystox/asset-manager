package tech.mystox.asset.entity.vo;

import tech.mystox.asset.entity.AttrVo;
import tech.mystox.asset.entity.BaseResult;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 16:22.
 * company: kongtrolink
 * description:
 * update record:
 */
public class SampleResult extends BaseResult {
    private List<Long> picIds;
    private List<String> picKeys;
    private List<AttrVo> sampleListParams;

    private List<SampleVo> samples;
    private SampleDetailVo sample;

    public SampleResult() {
    }

    public SampleResult(Integer code, String message) {
        super(code,message);
    }
    // public SampleResult() {
    // }


    public SampleDetailVo getSample() {
        return sample;
    }

    public void setSample(SampleDetailVo sample) {
        this.sample = sample;
    }

    public List<AttrVo> getSampleListParams() {
        return sampleListParams;
    }

    public void setSampleListParams(List<AttrVo> sampleListParams) {
        this.sampleListParams = sampleListParams;
    }

    public List<SampleVo> getSamples() {
        return samples;
    }

    public void setSamples(List<SampleVo> samples) {
        this.samples = samples;
    }


    public List<Long> getPicIds() {
        return picIds;
    }

    public void setPicIds(List<Long> picIds) {
        this.picIds = picIds;
    }

    public List<String> getPicKeys() {
        return picKeys;
    }

    public void setPicKeys(List<String> picKeys) {
        this.picKeys = picKeys;
    }
}
