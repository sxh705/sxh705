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

架构课 https://time.geekbang.org/opencourse/intro/100064201

搜索技术带上`详解`两个字 这样搜出来比较系统

下午面试. 准备java八股文

11.00做饭

12.00吃饭

12.30睡觉

13.20 走 14.20 到

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

通过value注解读取简单配置信息

通过configurationProperties读取并

可以像普通bean一样注入类使用

### 通过pofileProperties校验类

### 如何进行spring监控?

springboot actuator 自带状态api

### 参数校验

@null
@notnull
@assertture
@assertfalse
@min
@max
@decimalmin
@size
@digits
@past
@future
@pattern

@notblank
@email
@length
@notempty
@range
@valid

### 定时任务?

@enablescheduing作用与启动类, 启动定时任务.

scheduled注解可以创建任务


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

## java

### 为什么编译与解释并存?

编译型语言会通过贬义词一次性编译成可被平台执行的机器码,执行速度快,开发效率低 c c++ rust

解释型语言会通过解释器解释执行 python JavaScript php等

java既有编译特征也有解释特性

### 成员变量和局部变量?

成员变量是属于类的, 局部变量是在代码块或方法中定义的变量

对象存在于堆, 局部变量存在于栈

### 重载和重写的区别?

重载就是一个方法能根据输入不同做不同处理

重写是子类覆盖父类方法.

### 可变参数

作为函数的最后一个参数.

在编译时转换为数组.

### 基本类型

byte short int long float double
char
boolean

### 自动装箱?

Integer i = 10 装箱
int j = i 拆箱

尽量避免大量拆箱装箱操作, 这样会生成大量对象

### 浮点精度维问题, 超过long的数据?

二进制截断

使用BigDecimal和BigInteger

### 没有构造函数的类?

会自动添加 默认构造函数

### 面向对象的三大特点

#### 封装:

把对象的状态隐藏在对象内部, 不允许外部直接访问, 但是提供方法来操作,如果属性不想提供就不提供.

#### 继承:

不同类型的对象,有一定共同点,

1. 子类拥有父类的属性 父类的私有属性子类不能访问

2. 子类可以对父类拓展

3. 子类可以用自己的方式实现父类方法

(组合优于继承, 因为继承会带来不必要耦合性?)

实现接口比较好. 接口特性的组合

具体: https://blog.csdn.net/fuzhongmin05/article/details/108646872

#### 多态:

一个对象具有多种状态, 父类的引用指向子类的实例.

对象类型和引用类型有继承和实现的关系

### 深拷贝和浅拷贝?

浅拷贝会在堆创建一个新对象

深拷贝会复制整个对象和内部对象.

### == 和 equals

== 比较地址

equals 比较值

## 多线程

### 虚拟线程

使用虚拟线程需要避免同步块和同步方法:
https://blog.fastthread.io/2023/02/28/pitfalls-to-avoid-when-switching-to-virtual-threads/

使用reentrantlock替代

## 设计模式

### 创建型:

创建对象的同时隐藏创建逻辑 不用new实例化对象

* 工厂模式

    * 抽象工厂

    通过产品接口实现增加产品

* 单例模式

一个单例一个实例, 减少开销

懒加载 使用时创建对象, 私有化构造方法.

懒加载 + 同步锁 + 双重验证, 线程安全


* 建造者模式

* 原型模式


### 结构型:

通过类和接口继承创建复杂对象

* 适配器

* 桥接

* 过滤器

* 外观

* 享元

* 代理

### 行为型

* 责任链

* 命名

* 解释器

* 迭代器

* 中介者

* 备忘录

* 观察者

* 状态

* 策略

* 模板

* 访问者


# end