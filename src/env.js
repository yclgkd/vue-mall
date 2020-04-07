let baseURL;
// 如需自定义需要创建(.env.自定义名)的文件，里面设置NODE_ENV='自定义名'
switch (process.env.NODE_ENV) {
    // 默认 npm run serve
    // 开发环境 npm run development
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    // 测试环境 npm run test
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break; 
    //线上环境
     case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}


export default{
    baseURL
}