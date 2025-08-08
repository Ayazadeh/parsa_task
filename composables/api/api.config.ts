export const BASE_URL = 'https://ylnk.site/test/'
export const PROXY_CONFIG = {
    '/service': {
        target: 'https://ylnk.site/test/',
        changeOrigin: true,
        pathRewrite: {
            '^/service': ''
        }
    }
}