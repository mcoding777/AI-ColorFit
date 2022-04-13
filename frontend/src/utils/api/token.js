import Cookies from 'js-cookie';
import axios from 'axios';
import { axiosUserConfig, expire } from './user';

// axios 기본 인스턴스 생성 (토큰 검증 포함)
const axiosConfig = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
});

// acces 토큰 재발급
async function getAccessToken() {
    try {
        const response = await axiosUserConfig({
            url: '/app/token/refresh/',
            data: {
                refresh: Cookies.get('refreshToken'),
            },
        });

        Cookies.set('accessToken', response.data.access, {
            path: '/',
            expires: expire, // 테스트 기준 5분 (하루 단위로 응답)
        });

        Cookies.set('refreshToken', response.data.refresh, {
            path: '/',
            expires: 90, // 테스트 기준 90일
        });

        return response;
    } catch (error) {
        return error.response;
    }
}

// access 토큰 유효성 검증 함수
async function accessAvailableCheck() {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    try {
        if (accessToken) return accessToken; // 액세스 토큰이 존재하면 그대로 반환

        // 리프레시 토큰이 존재하지 않으면 로그아웃
        if (!refreshToken) {
            sessionStorage.clear();
            window.open('/', '_self');
        } else {
            // 리프레시 토큰이 존재하고 액세스 토큰이 없다면 재발급 후 토큰 반환
            const reAccessToken = await getAccessToken();
            return reAccessToken;
        }

        return null;
    } catch (error) {
        return error.response;
    }
}

// axios 인터셉터 생성
axiosConfig.interceptors.request.use(
    async config => {
        const axiosInstance = config;
        await accessAvailableCheck();

        axiosInstance.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`;
        return axiosInstance;
    },
    error => {
        console.log(error);
    },
);

export default axiosConfig;
