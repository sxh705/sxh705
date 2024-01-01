# 第9章_数据仓库Hive

## 请分别对Hive的几个主要组成模块进行简要介绍

Hive由以下3个模块组成：

### 用户接口模块

用户接口模块包括CLI，Hive网页接口（Hive Web Interface，HWI）、JDBC、ODBC、Thrift Server等，用来实现外部应用对Hive的访问。

#### CLI是Hive自带的一个命令行客户端工具

在Hive3.0以上版本，另一个Hive命令行工具Beeline取代了CLI

#### HWI是Hive的一个简单网页界面

#### JDBC、ODBC和Thrift Server可以向用户提供进行编程访问的接口

其中Thrift Server提供Hive的对外通信接口。

JDBC和ODBC提供数据库连接接口。

### 驱动模块

包括编译器、优化器、执行器等，可以使用MapReduce、Tez和Spark作为执行引擎，当采用MapReduce作为执行引擎时，负责将HiveQL语句转换成一系列MapReduce作业。

所有命令和查询都会进入到驱动模块，通过该模块对输入进行解析编译，对需求的计算进行优化，然后按照指定的步骤进行执行。

### 元数据存储模块

是一个独立的关系型数据库。通常是与MySql数据库连接后创建的一个MySql实例，也可以是Hive自带的derby数据库实例。元数据存储模块中主要保存表模式和其他系统元数据，比如表的名称、表的列及其属性、表的分区及其属性、表的属性、表中数据所在位置信息等。



## 请简述Impalad进程的主要作用

### 协调Client（客户端）提交的查询任务的执行

### 给其他Inpalad分配任务

### 收集其他Impalad执行结果并汇总

### 另外 Impalad也会执行其他Inpalad分配的任务