const PROMISE = require('../Dao/Promise/Promise');

const HTTP = require('http');
const URL = require('url');

const QUERYSTRING = require('querystring');

const SERVER = HTTP.createServer( (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
});
const SERVER_LISTEN = SERVER.listen(567);


SERVER.on('request', (req, res) => {
    let req_get = URL.parse(req.url, true);
    let req_pathname = req_get.pathname; //请求路径
    let req_query = req_get.query; //GET请求参数的对象列表

    /*GET*/ 
    switch(req_pathname) {
        /*额外请求*/
        case '/favicon.ico':{
            break; //不处理
        };
        case '/BookDao/selectBooksOnSale': {
            PROMISE.selectBooksOnSale(req, res);
            break;
        };
        case '/BookDao/selectBooksOnSaleByUserId': {
            let user_id = req_query.user_id;
            PROMISE.selectBooksOnSaleByUserId(req, res, user_id);
            break;
        };
        case '/BookDao/selectBooksOffSaleByUserId': {
            let user_id = req_query.user_id;
            PROMISE.selectBooksOffSaleByUserId(req, res, user_id);
            break;
        };
        case '/BookDao/selectBooksOnTradeBuyByUserId': {
            let user_id = req_query.user_id;
            PROMISE.selectBooksOnTradeBuyByUserId(req, res, user_id);
            break;
        };
        case '/BookDao/selectBooksOnTradeSellByUserId': {
            let user_id = req_query.user_id;
            PROMISE.selectBooksOnTradeSellByUserId(req, res, user_id);
            break;
        };
        case '/BookDao/updateBookStateOffByBookId': {
            let id = req_query.id;
            PROMISE.updateBookStateOffByBookId(req, res, id);
            break;
        };
        case '/BookDao/updateBookStateOnByBookId': {
            let id = req_query.id;
            PROMISE.updateBookStateOnByBookId(req, res, id);
            break;
        };
        case '/BookDao/updateBookTradeOff': {
            let id = req_query.id;
            let user_id = req_query.user_id;
            PROMISE.updateBookTradeOff(req, res, id, user_id);
            break;
        };
        case '/BookDao/insertTrade': {
            let id = req_query.id;
            let user_id = req_query.user_id;
            PROMISE.insertTrade(req, res, id, user_id);
            break;
        };
        // case '/UserDao/selectUserNameByUserId': {
        //     let user_id = req_query.user_id;
        //     PROMISE.selectUserNameByUserId(req, res, user_id);
        //     break;
        // };
        case '/BookDao/insertBook': {
            let book_name = req_query.book_name;
            let book_price = req_query.book_price;
            let book_information = req_query.book_information;
            let user_id = req_query.user_id;
            //console.log(book_name, book_price, book_information, user_id);
            PROMISE.insertBook(req, res, book_name, book_price, book_information, user_id);
        }
    }

    /*POST*/ 
    let req_post = ''; //POST请求参数体
    req.on('data', chunk => {req_post += chunk});
    req.on('end', () => {
        req_post = QUERYSTRING.parse(req_post);
        switch(req_pathname) {
            case '/Post/Login':{
                PROMISE.handleUserByUsername(req, res, req_post.username, req_post.password);
                break;
            };
            case '/Post/Register':{
                PROMISE.handleRegister(req, res, req_post.username, req_post.password);
                break;
            };
            case '/Post/UpdatePassword':{
                PROMISE.updatePassword(req, res, req_post.userid, req_post.password);
            }
        }
    });

})
