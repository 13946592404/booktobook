const CRUD = require('../Interface/CRUD')

module.exports = {
    // selectUserNameByUserId: user_id => { 
    //     let sql = `select username from user where id = ${user_id}`;
    //     let params = [];
    //     return CRUD.select(sql, params);
    // }
    selectUserByUsername: user_name => {
        let sql = `select id, password from user where username = '${user_name}'`;
        let params = [];
        return CRUD.select(sql, params);
    },
    insertUser: (user_name, pass_word) => {
        let sql = `insert into user(id, username, password, tel, head) 
        values (null, '${user_name}', '${pass_word}', null, null)`;
        let params = [];
        return CRUD.insert(sql, params);
    },
    updatePassword: (user_id, pass_word) => {
        let sql = `update user set password = '${pass_word}' where id = ${user_id}`;
        let params = [];
        return CRUD.update(sql, params);
    }
}