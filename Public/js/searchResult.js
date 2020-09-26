let searchResult = new Vue({
    el: ".mycontainer",
    data:{
        user_id: null, //用户ID
        parseURL: null, //解析URL
        hideRand: 6, //隐藏种子
        flag: true, //true：搜索结果(v-show) false：书籍信息(v-if)
        searchWord: "", //搜索内容
        searchNone: "<p>没有更多内容……</p><p>尝试修改一下搜索关键字？</p>", //没有搜索内容时候的显示
        booksAll: [], //全部书籍信息，对象的数组
        selectBookObj: null, //点击查看信息后，选定书籍的对象
    },
    computed:{
        books: function(){ //书籍信息，根据搜索内容进行模式匹配
            return this.booksAll.filter(value => value.name.search(this.searchWord) >= 0);
        }
    },
    methods:{
        CheckMoreInformation(id){ //点击书籍详情，查看信息
            this.flag = false; //更换 搜索结果 到 书籍信息
            this.selectBookObj = this.booksAll.find(value => value.id == id); //选定对象：依据id查找
        },
        insertTrade(id) { //购买书籍请求
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){
                    alert("成功发送购买请求！卖家发货并确认后将完成订单！");
                    location.reload();
                };
            };
            xhttp.open("GET", `http://localhost:567/BookDao/insertTrade?rand=${Math.random()}&id=${id}&user_id=${this.user_id}`, true);
            xhttp.send();
        },
        hideUserId(user_id) {
            let s = '', d = '';
            for(let i = 0; i < this.hideRand; i++)
                s += Math.floor(Math.random()*10).toString();
            for(let i = 0; i < this.hideRand; i++)
                d += Math.floor(Math.random()*10).toString();
            return s.toString() + user_id.toString() +d.toString();
        }
    },
    filters:{
        moreWord: value => { //名称溢出
            let max = /.*[\u4e00-\u9fa5]+.*$/.test(value) ? 10 : 20; //中文字符检测
            return value.length > max ? value.slice(0, max) + '...' : value; //多余部分变成点
        },
        moreInfo: value => { //详细信息溢出
            let max = /.*[\u4e00-\u9fa5]+.*$/.test(value) ? 213 : 377; //中文字符检测
            return value.length > max ? value.slice(0, max) + '......' : value; //多余部分变成点
        },
        imageURL: value => "./images/books/" + value //图片相对地址引用
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
    },
    beforeMount(){ //AJAX获取书籍数据
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                searchResult.booksAll = JSON.parse(this.responseText);
        };
        xhttp.open("GET", `http://localhost:567/BookDao/selectBooksOnSale`, true);
        xhttp.send();
    }
});