const CRUD = require('../Interface/CRUD')

module.exports = {
    selectBooksOnSale: () => { //searchResult页面搜索
        let sql = `select * from book where state = "onsale"`;
        let params = [];
        return CRUD.select(sql, params);
    },

    selectBooksOnSaleByUserId: user_id => { //1：我上架的书
        let sql = `select * from book where state = "onsale" and user_id = ${user_id}`;
        let params = [];
        return CRUD.select(sql, params);
    },
    selectBooksOffSaleByUserId: user_id => { //2：我下架的书(买到的书也算)
        let sql = `select * from book where state = "offsale" and user_id = ${user_id}`;
        let params = [];
        return CRUD.select(sql, params);
    },
    selectBooksOnTradeBuyByUserId: user_id => { //3：我交易中的书：买方
        let sql = `
            select * from book where id in (
                select book_id from trade where state = "on" and buyer_user_id = ${user_id}
            )
        `;
        let params = [];
        return CRUD.select(sql, params);
    },
    selectBooksOnTradeSellByUserId: user_id => { //4：我交易中的书：卖方
        let sql = `select * from book where state = "ontrade" and user_id = ${user_id}`;
        let params = [];
        return CRUD.select(sql, params);
    },

    updateBookStateOffByBookId: id => { //1按钮：上架变成下架
        let sql = `update book set state = "offsale" where id = ${id}`;
        let params = [];
        return CRUD.update(sql, params);
    },
    updateBookStateOnByBookId: id => { //2按钮：下架变成上架
        let sql = `update book set state = "onsale" where id = ${id}`;
        let params = [];
        return CRUD.update(sql, params);
    },
    updateBookTradeOff0: (id, user_id) => { //4按钮：确认交易完成
        let sql0 = `update book set user_id = 
        (select buyer_user_id from trade where book_id = ${id} order by id desc limit 1)
        where id = ${id}`; //更换用户
        //let sql1 = `update trade set state = "off" where book_id = ${id} and state = "on"`; //更改trade表状态为off
        //let sql2 = `update book set state = "offsale" where id = ${id}`; //变为下架or已拥有状态
        
        let params = [];
        return CRUD.update(sql0, params);
    },
    updateBookTradeOff1: (id, user_id) => { //4按钮：确认交易完成
        //let sql0 = `update book set user_id = 
        //(select buyer_user_id from trade where book_id = ${id} order by id desc limit 1)
        //where id = ${id}`; //更换用户
        let sql1 = `update trade set state = "off" where book_id = ${id} and state = "on"`; //更改trade表状态为off
        //let sql2 = `update book set state = "offsale" where id = ${id}`; //变为下架or已拥有状态
        
        let params = [];
        return CRUD.update(sql1, params);
    },
    updateBookTradeOff2: (id, user_id) => { //4按钮：确认交易完成
        // let sql0 = `update book set user_id = 
        // (select buyer_user_id from trade where book_id = ${id} order by id desc limit 1)
        // where id = ${id}`; //更换用户
        // let sql1 = `update trade set state = "off" where book_id = ${id} and state = "on"`; //更改trade表状态为off
        let sql2 = `update book set state = "offsale" where id = ${id}`; //变为下架or已拥有状态
        
        let params = [];
        return CRUD.update(sql2, params);
    },
    insertTrade0: (id, user_id) => { //搜索界面 购买按钮：购买请求
        let sql0 = `update book set state = "ontrade" where id = ${id}`; //更改book表状态ontrade
        //let sql1 = `insert into trade(id, time, book_id, buyer_user_id, state) values (null, ${new Date().getTime()}, ${id}, ${user_id}, "on")`;
        let params = []; //写入trade表状态为on
        return CRUD.update(sql0, params);
    },
    insertTrade1: (id, user_id) => { //搜索界面 购买按钮：购买请求
        //let sql0 = `update book set state = "ontrade" where id = ${id}`; //更改book表状态ontrade
        let sql1 = `insert into trade(id, time, book_id, buyer_user_id, state) values (null, ${new Date().getTime()}, ${id}, ${user_id}, "on")`;
        let params = []; //写入trade表状态为on
        return CRUD.insert(sql1, params);
    },
    insertBook: (book_name, book_price, book_information, user_id) => {//插入书籍
        let sql = `
            insert into book(id, name, price, image, information, user_id, state)
            values (null, "${book_name}", ${book_price}, "book${Math.floor(Math.random()*10)}.png", "${book_information}", ${user_id}, "onsale")
        `;
        let params = [];
        return CRUD.insert(sql, params);
    }
}
