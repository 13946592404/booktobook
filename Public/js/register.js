let index = new Vue({
    el: ".mycontainer",
    data: {
        user_id: null, //用户ID
        parseURL: null, //解析URL
        hideRand: 6, //隐藏种子
        /*用户名密码*/
        username: null,
        password: null,
        //tel: null
    },
    computed: {
        /*用户名密码：响应状态*/
        username_state: function(){
            return /^[\w]{6,16}$/.test(this.username);
        },
        password_state: function(){
            return /^[\w]{6,16}$/.test(this.password);
        },
        /*用户名密码：响应文字*/
        if_username_warning: function() {
            return !this.username_state ? '用户名应在6-16位，请使用下划线、字母和数字！' : '用户名格式正确！';
        },
        if_password_warning: function() {
            return !this.password_state ? '密码应在6-16位，请使用下划线、字母和数字！' : '密码格式正确！';
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
        login(){ //点击登录按钮
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 404) {
                    confirm(this.responseText);
                }
                if (this.readyState == 4 && this.status == 200) {
                    alert("登陆成功！");
                    index.user_id = Number.parseInt(this.responseText);
                    window.location.href=`./index.html?__glt=${index.hideUserId(index.user_id)}`;
                }
            };
            xhttp.open("POST", "http://localhost:567/Post/Login", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`username=${this.username}&password=${this.password}`);
        },
        register(){ //点击注册按钮
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 404) {
                    confirm(this.responseText);
                }
                if (this.readyState == 4 && this.status == 200) {
                    alert("注册成功！");
                    index.user_id = Number.parseInt(this.responseText);
                    window.location.href=`./index.html?__glt=${index.hideUserId(index.user_id)}`;
                }
            };
            xhttp.open("POST", "http://localhost:567/Post/Register", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`username=${this.username}&password=${this.password}`);
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