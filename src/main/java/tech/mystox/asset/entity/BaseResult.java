package tech.mystox.asset.entity;

/**
 * Created by mystoxlol on 2020/5/22, 17:13.
 * company: kongtrolink
 * description:
 * update record:
 */
public class BaseResult {
    private Integer code = 200;
    private String message;
    private Integer pageCount;
    private Integer pageNo;
    private Integer pageSize;
    private Long recordCount;

    public BaseResult() {
    }

    public BaseResult(Integer code, String message) {
        this.code = code;
        this.message = message;
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

    public Long getRecordCount() {
        return recordCount;
    }

    public void setRecordCount(Long recordCount) {
        this.recordCount = recordCount;
    }
}
