import recommendService from '@/core/api-server/recommend';
import singerService from '@/core/api-server/singer';
import seniorityService from '@/core/api-server/seniority';
import searchService from '@/core/api-server/search';

const servers = {
    singerService,
    recommendService,
    seniorityService,
    searchService

};


export default {
    install(Vue) {
        Object.keys(servers).forEach(key => {
            Vue.prototype[`$${key}`] = servers[key];
        });
    }
}

