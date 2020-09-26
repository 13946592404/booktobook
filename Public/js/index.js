let index = new Vue({
    el: ".mycontainer",
    data: {
        user_id: null, //用户ID
        parseURL: null, //解析URL
        hideRand: 6 //隐藏种子
    },
    methods: {
        hideUserId(user_id) {
            let s = '', d = '';
            for(let i = 0; i < this.hideRand; i++)
                s += Math.floor(Math.random()*10).toString();
            for(let i = 0; i < this.hideRand; i++)
                d += Math.floor(Math.random()*10).toString();
            return s.toString() + user_id.toString() +d.toString();
        }
    },
    created(){ //获取URL
        let url = decodeURIComponent(location.search); //获取url中"?"符后的字串
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
            let str = url.substr(1);
            let strs = str.split("&");
            const LEN = strs.length;
            for(let i = 0; i < LEN; i ++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        this.parseURL = theRequest;
        if(theRequest.__glt != null && theRequest.__glt != undefined)
            this.user_id = theRequest.__glt.slice(this.hideRand, theRequest.__glt.length - this.hideRand);
    }
});