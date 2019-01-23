import './bootstrap';
import router from './routes';


const app = new Vue({
    el: '#app',
    data: {
    	laracast_url_1: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/26?autoplay=true',
    	laracast_url_2: 'https://laracasts.com/series/learn-vue-2-step-by-step/episodes/27?autoplay=true'
    },
    router: router
});










