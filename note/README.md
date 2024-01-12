博客部署完成 2023.12.15

# [首页](/)

https://docsify.js.org/#/zh-cn/quickstart

D:\Codes\IDEAprj\java_project_study\sxh705.github.io\

# 2024年1月6日

同时开始两个项目, 
这样在一个项目停止的时候可以开始进行另一个

# 2024年1月1日

powershell 不重启更新环境变量: 

```
bash>  [Environment]::GetEnvironmentVariable('Path', 'Machine')
```

# 2024年1月12日

搜索技术带上`详解`两个字 这样搜出来比较系统

下午面试. 准备java八股文

11.00做饭

12.00吃饭

12.30睡觉

13.20 走 14.30 到

下午跑步

关闭网站首页显示? 浪费时间

## spring

来源: https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html#spring-ioc

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

## springboot

来源:SpringBoot 常见面试题总结.pdf

### 介绍spring

spring 是EJB的替代品 提供依赖注入和面向切面功能,用 简单Java对象(POJO, plain old java object)实现ejb功能,spring的配置是重量级的,故spring2.5引入基于注解的组件扫描,消除了大量显示xml配置,spring3引入了基于java的配置,替代xml
但是开启事务管理和springmvc还需要配置,使用可以修改的默认配置减少开发工作.springboot提供cli工具可以测试

### 什么是springboot starters?

项目依赖更简单了,开发web之前需要mvn tomcat jackson,现在只需要springbootstarterweb即可

### springboot支持哪些servlet容器

tomcat jetty undertow

### 如何使用jetty?

导入maven或者gradle配置

### 介绍springbootapplication注解

enableautoconfiguration 自动配置

componentscan 扫描类之下的所有类

configuration 允许注册额外的bean或者导入配置类

### 自动配置是如何实现的?

@enableautoconfiguration实现的, 通过 @inport注解导入autoconfigurationImportSelector类, import注解可以导入配置类或者bean,
autoconfigurationimportselector类中getcandidateconfiguration会将自动配置信息以list返回,给spring容器管理

附加题:springbean是如何被重写的?
自定义的同包同类的bean会覆盖原本的类
框架定义了ConditionalOnMissingBean注解
如果你创建了相同bean则不会自动创建了.
https://blog.csdn.net/gzt19881123/article/details/109333230

### rest常用注解:

autowired 自动导入

restcontroller 结合了controller和responsebody
会将函数返回值填入http响应体

component 标注任意spring组件

等价于component:

@respository dao层数据库操作注解

@service 服务注解

get post put delete mapping 处理http请求

前后端传值:

requestParam 和 pathvairable:
获取查询参数(?user=1&pwd=2)和路径参数(/)

requestbody 读取request请求的body

类型默认json 会自动绑定到java对象

会使用httpmessageconverter转换.

注解详解:
https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html

参数校验:
https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247485783&idx=1&sn=a407f3b75efa17c643407daa7fb2acd6&chksm=cea2469cf9d5cf8afbcd0a8a1c9cc4294d6805b8e01bee6f76bb2884c5bc15478e91459def49&token=292197051&lang=zh_CN#rd

















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

#### 原子性 atomicity 
事务是最小的执行单位 不允许分割
事务的原子性确保动作要么全部完成, 要么完全不起作用

#### 一致性 consistency 
执行事务前后 数据保持一直
转账时 无论业务是否成功, 转账者和和收款人的总额是不变的

#### 隔离性 isolation 
并发访问数据库时, 一个用户的事务不被其他事务所干扰

#### 持久性
一个事务被提交后, 它对数据库中数据的改变是持久的 即使数据库故障也不应该对其有任何影响

### 并发事务问题

脏读: dirty read
数据修改未提交时被访问了

丢失修改
事务的修改导致第一个事务的修改被覆盖

不可重复读
事务的事务过程中两次读取的数据不同

幻读
事务中第二次修改导致不存在的记录产生

### mysql的隔离

通过锁和mvcc机制实现

