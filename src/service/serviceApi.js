import requestHelper from "@/service/requestHelper";

let urlHead = "/api";
export default {
    TryLogin(formData){
        return requestHelper({
            url: urlHead + "/user/login",
            method: "post",
            data: formData
        })
    },

    TryRegist(formData){
        return requestHelper({
            url: urlHead + "/user/regist",
            method: "post",
            data: formData
        })
    },
    GoLogout(){
        return requestHelper({
            url: urlHead + "/user/logout",
            method: "post"
        })
    },
    GetApiResult(response){
        if(response.status == "operation_success")
            return true
        return false
    },
    GetApiResultExplain(response){
        if(response.status in statusExplain)
            return statusExplain[response.status]
        return "未知错误"
    },

}

var statusExplain = {
    "not_login": "用户未登录",
    "incomplete_certificate": "用户凭据不完整",
    "wrong_certificate": "用户凭据有误",
    "user_existed": "用户已经存在" ,
    "user_not_exist": "用户不存在",
    "operation_success": "操作成功" ,
    "operation_fail": "操作失败",
    "incomplete_data": "输入数据不完整",
    "parse_error": "服务器响应格式有误" ,
    "invalid_argument": "参数错误" ,
    "comment_not_exist": "回复不存在"
}