const BOOK_DAO = require('../Implement/BookDao');
const USER_DAO = require('../Implement/UserDao');

module.exports = {
    /*GET*/ 
    selectBooksOnSale: (req, res) => {
        BOOK_DAO.selectBooksOnSale().then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(value);
            res.end();
        })
    },
    selectBooksOnSaleByUserId: (req, res, user_id) => {
        BOOK_DAO.selectBooksOnSaleByUserId(user_id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(value);
            res.end();
        })
    },
    selectBooksOffSaleByUserId: (req, res, user_id) => {
        BOOK_DAO.selectBooksOffSaleByUserId(user_id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(value);
            res.end();
        })
    },
    selectBooksOnTradeBuyByUserId: (req, res, user_id) => {
        BOOK_DAO.selectBooksOnTradeBuyByUserId(user_id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(value);
            res.end();
        })
    },
    selectBooksOnTradeSellByUserId: (req, res, user_id) => {
        BOOK_DAO.selectBooksOnTradeSellByUserId(user_id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.write(value);
            res.end();
        })
    },
    updateBookStateOffByBookId: (req, res, id) => {
        BOOK_DAO.updateBookStateOffByBookId(id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(value);
            res.end();
        })
    },
    updateBookStateOnByBookId: (req, res, id) => {
        BOOK_DAO.updateBookStateOnByBookId(id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(value);
            res.end();
        })
    },
    updateBookTradeOff: (req, res, id, user_id) => {
        BOOK_DAO.updateBookTradeOff0(id, user_id).then(value => {
            //res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(value);
            //res.end();
            BOOK_DAO.updateBookTradeOff1(id, user_id).then(value => {
                //res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                //res.write(value);
                //res.end();
                BOOK_DAO.updateBookTradeOff2(id, user_id).then(value => {
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                    //res.write(value);
                    res.end();
                })
            })
        })
    },
    // updateBookTradeOff1: (req, res, id, user_id) => {
    //     BOOK_DAO.updateBookTradeOff(id, user_id)[1].then(value => {
    //         //res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    //         //res.write(value);
    //         //res.end();
    //     })
    // },
    // updateBookTradeOff2: (req, res, id, user_id) => {
    //     BOOK_DAO.updateBookTradeOff(id, user_id)[2].then(value => {
    //         res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    //         //res.write(value);
    //         res.end();
    //     })
    // },
    insertTrade: (req, res, id, user_id) => {
        BOOK_DAO.insertTrade0(id, user_id).then(value => {
            //res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(value);
            //res.end();
            BOOK_DAO.insertTrade1(id, user_id).then(value => {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                //res.write(value);
                res.end();
            })
        })
    },
    // insertTrade1: (req, res, id, user_id) => {
    //     BOOK_DAO.insertTrade(id, user_id)[1].then(value => {
    //         res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    //         //res.write(value);
    //         res.end();
    //     })
    // },
    // selectUserNameByUserId: (req, res, user_id) => {
    //     USER_DAO.selectUserNameByUserId(id, user_id).then(value => {
    //         res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    //         res.write(value);
    //         res.end();
    //     })
    // }
    insertBook: (req, res, book_name, book_price, book_information, user_id) => {
        BOOK_DAO.insertBook(book_name, book_price, book_information, user_id).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(val.id.toString());
            res.end();
        })
    },
    /*POST*/
    handleUserByUsername: (req, res, user_name, pass_word) => {
        if(user_name != undefined && user_name != null)
        USER_DAO.selectUserByUsername(user_name).then(value => {
            let val = JSON.parse(value); //string to object JSON.stringfy to JSON.parse
            if(val.length < 1) {
                res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end("没有该用户");
            }
            else{
                val = val[0];
                if(pass_word != val.password) {
                    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.end("密码错误");
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                    res.write(val.id.toString());
                    res.end();
                }
            }
        })
    },
    handleRegister: (req, res, user_name, pass_word) => {
        if(user_name != undefined && user_name != null)
        USER_DAO.selectUserByUsername(user_name).then(value0 => {
            //console.log(value);
            // if(value == undefined || value.length == 0 || value == []) {
            //     USER_DAO.insertUser(user_name, pass_word).then(value => {
            //         USER_DAO.selectUserByUsername(user_name).then(value2 => {
            //             let val = JSON.parse(value2);
            //             val = val[0];
            //             res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //             res.write(val.id.toString());
            //             res.end();
            //         })
            //     })
            // }
            // else {
            //     res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            //     res.end("用户名已存在！");
            // }
            let val = JSON.parse(value0); //string to object JSON.stringfy to JSON.parse
            if(val.length > 0) {
                res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end("用户名已存在！");
            }
            else {
                USER_DAO.insertUser(user_name, pass_word).then(value1 => {
                    USER_DAO.selectUserByUsername(user_name).then(value2 => {
                        let val = JSON.parse(value2);
                        val = val[0];
                        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                        res.write(val.id.toString());
                        res.end();
                    })
                })
            }
        });
    },
    updatePassword: (req, res, user_id, pass_word) => {
        USER_DAO.updatePassword(user_id, pass_word).then(value => {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            //res.write(val.id.toString());
            res.end();
        })
    }
}