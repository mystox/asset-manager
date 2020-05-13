package tech.mystox.asset.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * \* @Author: mystox
 * \* Date: 2020/5/7 11:07
 * \* Description:
 * \
 */
@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @RequestMapping("/attribute")
    public JSONObject attribute() {
        String content = "{\"code\":\"200\",\"message\":\"\",\"attributes\":[{\"attributeId\":1,\"prettyName\":\"编号\",\"isUsed\":1,\"source\":0,\"isShopAttr\":1,\"isSearchAttr\":1,\"isListAttr\":1,\"isCopyAttr\":1,\"isRequired\":1,\"isChangeable\":0,\"valueType\":0,\"options\":\"\",\"optionList\":[],\"optionsScalable\":0,\"viewers\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"groups\":[]},{\"attributeId\":2,\"prettyName\":\"名称\",\"isUsed\":1,\"source\":0,\"isShopAttr\":1,\"isSearchAttr\":1,\"isListAttr\":1,\"isCopyAttr\":1,\"isRequired\":0,\"isChangeable\":1,\"valueType\":0,\"options\":\"\",\"optionList\":[],\"optionsScalable\":0,\"viewers\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"groups\":[]},{\"attributeId\":3,\"prettyName\":\"成分\",\"isUsed\":1,\"source\":0,\"isShopAttr\":1,\"isSearchAttr\":1,\"isListAttr\":1,\"isCopyAttr\":1,\"isRequired\":0,\"isChangeable\":1,\"valueType\":1,\"options\":\"P:100%,C:100%,R:100%,T:95% SP:5%,R:95% SP:5%,C:95% SP:5%,T: 50% R:50%,T: 65% R:35%,T: 70% R:30%,T: 50% C:50%,T: 65% C:35%,T: 70% C:30%,T: 85% L:15%,R: 85% L:15%\",\"optionList\":[],\"optionsScalable\":0,\"viewers\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"groups\":[]},{\"attributeId\":4,\"prettyName\":\"门幅\",\"isUsed\":1,\"source\":0,\"isShopAttr\":1,\"isSearchAttr\":1,\"isListAttr\":1,\"isCopyAttr\":1,\"isRequired\":0,\"isChangeable\":1,\"valueType\":1,\"options\":\"140CM,145CM,150CM,155CM,160CM,165CM,170CM,175CM,180CM,185CM\",\"optionList\":[],\"optionsScalable\":0,\"viewers\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"groups\":[]},{\"attributeId\":5,\"prettyName\":\"克重\",\"isUsed\":1,\"source\":0,\"isShopAttr\":1,\"isSearchAttr\":1,\"isListAttr\":1,\"isCopyAttr\":1,\"isRequired\":0,\"isChangeable\":1,\"valueType\":1,\"options\":\"130g/㎡,140g/㎡,160g/㎡,180g/㎡,200g/㎡,210g/㎡,220g/㎡,240g/㎡,260g/㎡\",\"optionList\":[],\"optionsScalable\":0,\"viewers\":[{\"userId\":38737,\"userName\":\"mystox\",\"avatar\":\"https://buguanjia.oss-cn-hangzhou.aliyuncs.com/useravatar/M.png\",\"changeable\":0}],\"groups\":[]}]}";
        return JSONObject.parseObject(content);
    }
}