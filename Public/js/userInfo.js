let index = new Vue({
    el: ".mycontainer",
    data: {
        user_id: null, //用户ID
        parseURL: null, //解析URL
        hideRand: 6, //隐藏种子
        check: null, //选择哪页
        newpassword: null, //新密码
        book_name: null, //新书名称
        book_price: null, //新书价格
        book_information: null //新书信息
    },
    computed: {
        insertBookTest: function(){
            return !(this.book_name != null && this.book_information != null &&
            /(^[0-9]{1,6}$)|(^[0-9]{1,6}[\.]{1}[0-9]{1,2}$)/.test(this.book_price)
            );
        }
    },
    methods: {
        hideUserId(user_id) {
            let s = '', d = '';
            for(let i = 0; i < this.hideRand; i++)
                s += Math.floor(Math.random()*10).toString();
            for(let i = 0; i < this.hideRand; i++)
                d += Math.floor(Math.random()*10).toString();
            return s.toString() + user_id.toString() +d.toString();
        },
        logout(){ //按钮0
            let res = confirm("确定要注销当前账号吗？")
            if(res) {
                this.user_id = null;
                window.location.href = `./index.html?__lgt=${this.hideUserId(Math.ceil(Math.random()*100))}`;
            }
        },
        alter(){ //按钮1
            this.check = 1;
        },
        book(){ //按钮2
            this.check = 2
        },
        updatePassword(){ //修改密码的提交
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    alert("修改成功！");
            };
            xhttp.open("POST", "http://localhost:567/Post/UpdatePassword", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`userid=${this.user_id}&password=${this.newpassword}`);
        },
        insertBook(){ //添加书籍的提交
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    alert("插入成功！");
            };
            xhttp.open("GET", `http://localhost:567/BookDao/insertBook?book_name=${this.book_name}&book_price=${this.book_price}&book_information=${this.book_information}&user_id=${this.user_id}`, true);
            xhttp.send(`userid=${this.user_id}&password=${this.newpassword}`);
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