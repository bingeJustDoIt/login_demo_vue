import axios from 'axios';
import {showMessage} from "./status";   // 引入状态码文件
import {ElMessage} from 'element-plus'  // 引入el 提示框，这个项目里用什么组件库这里引什么



export function useAxios() {
    const axiosInstance = axios.create({
        // 设置api请求的baseURL
        // baseURL: process.env.API_BASE_URL || '',
        baseURL: "/api",
        // 请求超时时间
        timeout: 10000,
    })

//http request 拦截器
    axiosInstance.interceptors.request.use(
        config => {
            // 配置请求头
            config.headers = {
                //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
                'Content-Type': 'application/json;charset=UTF-8',        // 传参方式json
                'token': '可以登录成功后从storage里面拿token'              // 这里自定义配置，这里传的是token
            };
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

//http response 拦截器
    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            const {response} = error;
            if (response) {
                // 请求已发出，但是不在2xx的范围
                showMessage(response.status);           // 传入响应码，匹配响应码对应信息
                return Promise.reject(response.data);
            } else {
                ElMessage.warning('网络连接异常,请稍后再试!');
            }
        }
    );

    return axiosInstance
}




// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'POST') {
//设置 url params type 的默认值
    return new Promise((resolve, reject) => {
        let promise
        if (type.toUpperCase() === 'GET') {
            promise = axios({
                url,
                params
            })
        } else if (type.toUpperCase() === 'POST') {
            promise = axios({
                method: 'POST',
                url,
                data: params
            })
        }
        //处理返回
        promise.then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}







