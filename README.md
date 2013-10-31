sqlTool
=======

The Tools is based on mysql2 to use mysql
使用说明：
使用之前必须具有async和mysql2模块

var useMysql=new sqlFun();

首先建立连接
useMysql.setupConnection([object]);


传入参数为对象，包括host,port，user，root，password，database
例：
useMysql.setupConnection({
             host:'host',
             port:'3306',
             user:'user',
             password:'password',
             database:'datatbase'
         });
         

数据库插入：
useMysql.insertSql([String],[callback]);
String需传入标准sql插入语句，callback用来返回结果状态。

数据库查询：
useMysql.selectMysql([String],[callback]);
String为标准sql select语句，callback返回查询结果；

断开数据库连接：
useMysql.closeConnection([callback]);

callback：返回错误信息；
