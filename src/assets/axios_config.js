import axios from 'axios';
import {showMessage} from "./status";   // 引入状态码文件
import {ElMessage} from 'element-plus'  // 引入el 提示框，这个项目里用什么组件库这里引什么



export function useAxios() {
    const instance = axios.create({
        // 设置api请求的baseURL
        // baseURL: process.env.API_BASE_URL || '',
        baseURL: "/api",
        // 请求超时时间
        timeout: 10000,
    })
// 添加请求拦截器
    instance.interceptors.request.use(
        config => {
            // 在发送请求之前自动添加 token
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            // // 检查 token 是否存在，并跳转到登录页面
            // if (!localStorage.getItem('token')) {
            //     window.location.href = '/login';
            //     alert('请先登录！')
            // }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

// 添加响应拦截器
    instance.interceptors.response.use(
        response => {
            return response.data; // 只返回 data 部分的内容
        },
        error => {
            return Promise.reject(error);
        }
    );


    return instance
}




