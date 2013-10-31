var mysql = require('mysql2');
var async = require('async');

var sqlFun=function(){

};
sqlFun.prototype.setupConnection=function(info){
    this.connection=mysql.createConnection({
        host:info.host,
        user:info.user,
        password:info.password,
        database:info.database
    });


};
sqlFun.prototype.selectSql=function(sqlSentence,returnResult){
    console.log("start select");
    var that=this;
    that.connection.query(sqlSentence,function(err,rows){
        returnResult(rows);
    });
};

sqlFun.prototype.insertSql=function(sql,returnResult){
    var connection=this.connection;
    async.waterfall([function(callback){
            connection.query(sql,function(err,rows){
             if(!err)
                callback(null,'true');
             else
             {
                 callback(err,'false');
             }
         });
      }],
          function(err,result){
               console.log("insert error:"+err);
               returnResult(result);
          });
};
sqlFun.prototype.closeConnection=function(callback){
      console.log("end connection");
      this.connection.end(function(err){
          callback(err);
      });
};
module.exports=sqlFun;



