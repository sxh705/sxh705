博客部署完成 2023.12.15

## [首页](/)

https://docsify.js.org/#/zh-cn/quickstart

D:\Codes\IDEAprj\java_project_study\sxh705.github.io\

## 2024年1月6日

同时开始两个项目, 
这样在一个项目停止的时候可以开始进行另一个

## 2024年1月1日

powershell 不重启更新环境变量: 

```
bash>  [Environment]::GetEnvironmentVariable('Path', 'Machine')
```

## 2024年1月12日

搜索技术带上`详解`两个字 这样搜出来比较系统

下午面试. 准备java八股文

11.00做饭

12.00吃饭

12.30睡觉

13.20 走 14.30 到

下午跑步

关闭网站首页显示? 浪费时间

### springboot aop详解 https://www.cnblogs.com/Andya/p/12685428.html

springboot aop: 

切面: 横切多个对象的关注点的一个模块化

设置vscode字体为微软雅黑,比较舒服

提交记得写消息

### 谈谈自己对于springioc的了解:

ioc将对象之间的相互依赖关系交给ioc容器来管理, 并由ioc容器完成对象的注入

可以很大程度上简化开发

### aop定义的通知类型:

before 前置通知

arter 后置通知

afterReturning 返回通知

afterThrowing 异常通知

around 环绕通知

### 对springmvc的了解?

model1 页面由jsp组成

控制逻辑与表现逻辑混杂

### model2 mvc 

model模型:dao和bean

jsp view视图数据:展示模型

controller处理请求 操作model

### springmvc


### 统一异常处理?

spring3.2 
ControllerAdvice + 
ExceptionHaldler + 
ResponseBody

### spring事务传播

propagation_required
默认 加入事务/新建事务

propagation_requires_new
开启新事务

propagation_nested
嵌套事务

mandatory
嵌套或报异常

### 事务隔离级别

isolation_default 默认 可重复读

read_uncommited 读未提交 导致脏读 幻读和不可重复读

https://blog.csdn.net/kusedexingfu/article/details/118005261

## mysql

mysql提供哪些存储引擎:

innodb 支持事务

存储引擎是基于表的

myisam 不支持事务和行级锁

不支持安全恢复

查询缓存?

quwey cache size

任何字符不同

包括自定义函数

会导致缓存不命中

### mysql事务

#### 原子性 atomicity 事务是最小的执行单位 不允许分割

事务的原子性确保动作要么全部完成, 要么完全不起作用

#### 一致性 consistency 执行事务前后 数据保持一直

转账时 无论业务是否成功, 转账者和和收款人的总额是不变的

#### 隔离性 isolation 并发访问数据库时, 一个用户的事务不被其他事务所干扰


#### 持久性 一个事务被提交后, 它对数据库中数据的改变是持久的 即使数据库故障也不应该对其有任何影响

