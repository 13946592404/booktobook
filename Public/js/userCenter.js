let userCenter = new Vue({
    el: ".mycontainer",
    data:{
        user_id: null, //用户ID
        parseURL: null, //解析URL
        hideRand: 6, //隐藏种子
        parseCheck: 1, //选择的模块(1-4)
        /*四种类别的书*/
        booksOnSale: null,
        booksOffSale: null,
        booksOnTradeBuy: null,
        booksOnTradeSell: null
    },
    filters:{
        moreWord: value => { //名称溢出
            let max = /.*[\u4e00-\u9fa5]+.*$/.test(value) ? 15 : 30; //中文字符检测
            return value.length > max ? value.slice(0, max) + '...' : value; //多余部分变成点
        },
        imageURL: value => "./images/books/" + value //图片相对地址引用
    },
    methods:{
        hideUserId(user_id) {
            let s = '', d = '';
            for(let i = 0; i < this.hideRand; i++)
                s += Math.floor(Math.random()*10).toString();
            for(let i = 0; i < this.hideRand; i++)
                d += Math.floor(Math.random()*10).toString();
            return s.toString() + user_id.toString() +d.toString();
        },
        updateBookStateOff(id){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){
                    alert("下架成功！");
                    location.reload();
                };
            };
            xhttp.open("GET", `http://localhost:567/BookDao/updateBookStateOffByBookId?rand=${Math.random()}&id=${id}`, true);
            xhttp.send();
        },
        updateBookStateOn(id){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){
                    alert("上架成功！");
                    location.reload();
                };
            };
            xhttp.open("GET", `http://localhost:567/BookDao/updateBookStateOnByBookId?rand=${Math.random()}&id=${id}`, true);
            xhttp.send();
        },
        updateBookTradeOff(id){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){
                    alert("交易成功！物品已进入买家的库存！感谢您的支持！");
                    location.reload();
                };
            };
            xhttp.open("GET", `http://localhost:567/BookDao/updateBookTradeOff?rand=${Math.random()}&id=${id}&user_id=${this.user_id}`, true);
            xhttp.send();
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
        this.parseCheck = this.parseURL.page;
        if(theRequest.__glt != null && theRequest.__glt != undefined)
            this.user_id = theRequest.__glt.slice(this.hideRand, theRequest.__glt.length - this.hideRand);
    },
    beforeMount(){ //AJAX获取书籍数据
        /*1*/
        let xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                userCenter.booksOnSale = JSON.parse(this.responseText);
        };
        xhttp1.open("GET", `http://localhost:567/BookDao/selectBooksOnSaleByUserId?rand=${Math.random()}&user_id=${this.user_id}`, true);
        xhttp1.send();
        /*2*/
        let xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                userCenter.booksOffSale = JSON.parse(this.responseText);
        };
        xhttp2.open("GET", `http://localhost:567/BookDao/selectBooksOffSaleByUserId?rand=${Math.random()}&user_id=${this.user_id}`, true);
        xhttp2.send();
        /*3*/
        let xhttp3 = new XMLHttpRequest();
        xhttp3.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                userCenter.booksOnTradeBuy = JSON.parse(this.responseText);
        };
        xhttp3.open("GET", `http://localhost:567/BookDao/selectBooksOnTradeBuyByUserId?rand=${Math.random()}&user_id=${this.user_id}`, true);
        xhttp3.send();
        /*4*/
        let xhttp4 = new XMLHttpRequest();
        xhttp4.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
                userCenter.booksOnTradeSell = JSON.parse(this.responseText);
        };
        xhttp4.open("GET", `http://localhost:567/BookDao/selectBooksOnTradeSellByUserId?rand=${Math.random()}&user_id=${this.user_id}`, true);
        xhttp4.send();
    },

});