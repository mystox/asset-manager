package tech.mystox.asset.entity;

import java.util.List;

/**
 * Created by mystoxlol on 2020/5/14, 16:22.
 * company: kongtrolink
 * description:
 * update record:
 */
public class ResponseResult {
    private Integer code = 200;
    private String message;
    private List<Integer> picIds;
    private List<String> picKeys;
    private Integer pageCount;
    private Integer pageNo;
    private Integer pageSize;
    private Integer recordCount;
    private List<AttrVo> sampleListParams;

    private List<Sample> samples;

    public ResponseResult() {
    }

    public ResponseResult(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getPageCount() {
        return pageCount;
    }

    public void setPageCount(Integer pageCount) {
        this.pageCount = pageCount;
    }

    public Integer getPageNo() {
        return pageNo;
    }

    public void setPageNo(Integer pageNo) {
        this.pageNo = pageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getRecordCount() {
        return recordCount;
    }

    public void setRecordCount(Integer recordCount) {
        this.recordCount = recordCount;
    }

    public List<AttrVo> getSampleListParams() {
        return sampleListParams;
    }

    public void setSampleListParams(List<AttrVo> sampleListParams) {
        this.sampleListParams = sampleListParams;
    }

    public List<Sample> getSamples() {
        return samples;
    }

    public void setSamples(List<Sample> samples) {
        this.samples = samples;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Integer> getPicIds() {
        return picIds;
    }

    public void setPicIds(List<Integer> picIds) {
        this.picIds = picIds;
    }

    public List<String> getPicKeys() {
        return picKeys;
    }

    public void setPicKeys(List<String> picKeys) {
        this.picKeys = picKeys;
    }
}
