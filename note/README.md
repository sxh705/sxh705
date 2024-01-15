博客部署完成 2023.12.15

* [首页](/)

* [test](/test/)

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


问题: 面试取消了

任务: 继续学习java八股, 架构. 

## 周志明的软件架构课

https://time.geekbang.org/column/article/337708

### 开篇词

5个模块

演进中的架构: 架构设计的本质

架构师的视角: 架构师思考的问题, 主流方案的特点

分布式的基石: 聚焦在分布式架构, 

不可变基础设施: 按照云原生时代"基础设施即代码"的新思路,带你深入理解基础设施不变性的目的

探索与实践: 开发不同架构的Fenix's Bookstore, 并看看不同环境的部署

深入理解java虚拟机...

### 什么是The Fenix Project:

探索与实践, 开发不同架构的Fenix's BookStore

来源: 布道与分享

#### 软件架构探索

phoneix 凤凰 软件工厂产物 

出错是正常的

人员还是架构?

人员 过程 产出物的能力和质量?

整体流程和架构?

前者为术 后者为道

学习语言 框架 spring java vue.js

复杂程序 

架构方法

单体 微服务 服务网络 无服务 云原生

都是抽象的架构方法

### 可靠的系统

构建一个大规模但依然可靠的软件系统, 是否可行?

碰到不靠谱的人员 代码 硬件和网络

误差会不断累计叠加导致结果不能稳定

1940 自复制自动机?

用不可靠的部件构造可靠的系统?

分子和细胞不可靠 但是 生命依然迭代

在微生态中, 每一个部件都会老去, 但总会重生.

软件架构风格:

大型机-> 多层单体-> 分布式-> 微服务 -> 服务网格
-> 无服务

从宏观来看 架构演变最重要的驱动力不是性能

是方便某个服务能够顺利的死去与重生 而设计的

软件的缺陷不会遵循停机计划, 不会被安排出错的原因

无服务就架构视角

微服务架构的视角

如果每个部件都符合phoneix特性, 

即便部件3分钟就会崩溃

但是架构设计有恰当而自动的熔断, 淘汰, 重建机制

它整体上仍然表现稳定和健壮的服务能力

PetStore 项目

Fenix's BookStore

复杂的技术是为了演示技术

### 原始分布式时代 unix设计哲学下的服务探索

架构不是发明, 而是进化的结果

> 保持接口与实现的简单性, 比系统其他任何属性, 包括准确性,一致性和完整性, 都来的更加重要

分布式架构的目标是使用多个独立的分布式服务, 构建大型的分布式系统

微型计算机系统 16位寻址 5MHz处理器 128KB内存地址空间

因为当时计算机硬件处理能力薄弱 达到最大规模

惠普: nca 网络计算架构

卡梅隆大学: afs 文件系统

麻省理工: kerberos 协议

为了避免unix的版本战争, osf共同制定了分布式运算环境公约

让开发人员不需要知道服务是在本地还是远程

不可兼顾 简单 透明 性能 正确 鲁棒

#### 要解决的问题: 

服务在哪里 服务发现

多少个 负载均衡

分区出错怎么办 熔断 隔离 降级

参数和返回怎么办 序列化协议

如何传输 传输协议

权限认证 认证 授权

通信安全 网络安全层

令调用不同机器的服务返回相同结果 分布式数据一致性

考虑到性能差异, 无法忽略分布式和本地的鸿沟..

刻意构造长时间运行的方法很麻烦, 与初衷矛盾

编码, 部署和运行效率都有天壤之别...

> ust because something can be distributed doesn’t mean it should be distributed. Trying to make a distributed call act like a local call always ends in tears.
>某个功能能够进行分布式，并不意味着它就应该进行分布式，强行追求透明的分布式操作，只会自寻苦果。


20世纪80年代 硬件性能2年增长一倍 
信息系统进入了单体时代

### 单体系统时代

单体架构为何在想当长的时间内成为主流?

`巨石系统` 很难找到单体文章, 

在想当长的时间内, 软件架构都是单体的

误区: 单体架构是落后的系统架构, 最终会被微服务所取代

必须是软件的性能超过单机的系统, 才是需要改变的单体系统.

monolithc 巨石 也不是铁板一块

不可拆分, 难以拓展?

从纵向角度, 大部分大型系统都是分层架构.

外部请求会在各层之间, 以不同形式的数据结构进行流转传递, 在末端数据库触及后一次返回响应..

单词系统并不意味着一个程序, 也可以拆分不同的程序

#### 非独立的单体

单体存在隔离与自治能力的欠缺

一旦架构出现了内存泄漏, 线程爆炸, 阻塞, 死循环问题

都会影响整个程序的工作, 无法单独更新一部分的代码

共享同样进程获得简单和高效

但是损失了功能的自治和隔离能力, 

哪个更重要呢

当规模小时, 部署在一起的子系统是优势

但是规模扩大时, 迁移成本会变得很高.

单词系统无法构建7x24不间断可靠系统

从 尽量不出错 -> 出错是必然

soa时代 面向服务的系统拆分.

### soa时代 成功理论与失败实践

soa没有成为普适的软件架构

1. 烟囱式挂钩 系统之间不会进行互操作, 

两个不交互的系统, 可以拆分

但是系统之间总会有交互

2. 微内核架构

所有主数据集中在一块, 具体的业务系统以插件模块存在,

插件是相互透明的, 插件只会访问内核中的公共资源?

子系统不能互相通信

3. 事件驱动架构

从管道发送和接收消息, 每个消息的处理者都是高度解耦的

SOA架构时代的探索..

出现了服务的松耦合 注册 发现 治理 编排等

Open CSA组织

服务的松耦合 注册 发现 治理 隔离 编排等

具体的探索:

更具体: soa是抽象概念, 但是更有可操作性

基础平台: soa有技术组织open csa

设计指导原则 封装性 自治 松耦合 可重用 可组合 无状态

在体系化, 精密写作的技术组件支持下, soa解决了服务注册发现, 隔离治理的技术问题

soa的精密流程和理论, 过于艰难难懂, 难以成为广泛普适性的软件架构风格.

构建在webService基础之上的ESB BPM SCA SDO的诸多上层建筑, 进一步加剧了复杂性

ejb当年作为企业级javabean 仍然被spring hibernate打败了

分布式时代距离透明越来越远了.

### 微服务时代 soa的革命者

专注于单一职责的 与语言无关的 细粒度的web服务

2005年被提出

2012单一职责 康威定理 自动拓展 领域驱动

重拾unix设计哲学

2014 微服务的真正起源

微服务是一种通过多个小型服务的组合 构建单个应用的架构风格, 这些服务会围绕业务能力而非特定的技术标准来构建,各个服务可以采用不同的编程语言, 不同的数据存储技术, 运行在不同的进程之中, 服务会采取轻量的通讯与自动化的部署机制, 实现通讯与运维

微服务的核心思想:

1. 围绕业务能力构建

有怎样的规模和能力的团队 就会产生怎样的产品

当团队和产品稳定后 就会有一致的结构

2. 分散治理

微服务对应的开发团队, 有直接对服务运行质量负责的责任

3. 通过服务来实现独立自治的组件

服务是进程化的组件, 远程服务调用成本高昂, 但是是为组件带来隔离与自治能力的代价

4. 产品化思维

软件研发不是完成某种功能, 而是作为一个持续改进, 提升的过程

5. 数据去中心化

数据应该按领域来分散管理, 更新, 维护和存储.

6. 轻量级通讯机制

弱管道机制, 很多服务只是强加进来的负担

restful风格通讯是比较适合的

7. 容错性设计

可以通过快速的故障检测, 进行及时的隔离和联通

可靠的系统可以由出错的服务来组成

8. 演进式设计

一个良好设计的服务, 是可以被报废的

9. 基础设施自动化

CI/CD的发展, 降低构建, 发布, 运维工作的复杂度.


> This common manifestation of SOA has led some microservice advocates to reject the SOA label entirely, although others consider microservices to be one form of SOA , perhaps service orientation done right. Either way, the fact that SOA means such different things means it’s valuable to have a term that more crisply defines this architectural style.
> 由于与 SOA 具有一致的表现形式，这让微服务的支持者更加迫切地拒绝再被打上 SOA 的标签。一些人坚持认为微服务就是 SOA 的一种变体，尽管仅从面向服务这个角度来考虑，这个观点可以说也是正确的。但无论如何，从整体上看 SOA 与微服务都是两种不同的东西。也因此，使用一个别的名称，来简明地定义这种架构风格就显得非常有必要了。—— Martin Fowler / James Lewis，Microservices


服务通讯, 进入候选清单的就很多了..

服务发现

解决方案太多了...

一个简单的服务, 不会同时面临分布式中的所有问题

springcloud的工具集, 通过统一接口, 屏蔽了复杂度

架构者的第一职责是做决策权衡

我的产品适合微服务架构吗?

### 后微服务时代

微服务时代都没法完全避免服务注册 跟踪 负载 传输的问题

扩容: 多部署

负载均衡: 恰当的算法

安全传输: tls链路 ca证书

服务发现: dns服务器 访问记录而不是ip地址

基本上都出现了专职的基础设施解决这些问题了

但是硬件构成的基础设施, 跟不上软件构成的应用服务的灵活性

而注册发现, 跟踪治理问题的解决, 依赖虚拟化和容器化技术

微服务的成就, 离不开docker容器化技术的贡献..

早期: 软件定义网络 软件定义存储

但是2017 最终 kubernetes 赢得了容器战争.

spring cloud 的应用解决方案

kubernetes的基础设施层面解决方案

![Alt text](image.png)


云原生时代 与业务无关的技术问题, 在硬件基础设施内被解决掉..

k8s 并没有完美解决全部的分布式问题

因为一些问题处于应用系统与基础设施的边缘, 

我们很难精细化的解决掉他们

例如 服务A 调用了 服务B 的两个服务 B1 B2

其中B2 出现连续报错, 

如果对A-B进行熔断, 则

# 2024年1月13日

autocad弹出lincense解决办法:
https://www.moxingzu.com/a/2020-02-05/113598.html

已重命名为 AcWebBrowser.bak.exe

## git详解

https://www.liaoxuefeng.com/wiki/896043488029600

### 后微服务时代

基础设施的力度比较粗犷

dns不能满足额外需求的负载均衡

引入 服务网格 边车代理模式

微服务注入一个通讯代理服务器

接管所有对外通讯

不需要在应用层附带代码

对应用是透明的, 在不改变软件代码的情况下实现服务治理.

容器化对软件架构, 开发的改变

服务网格

istio envoy

smart endpoints

业务与技术完全分离..

远程与本地完全透明

微服务只需要考虑业务本身逻辑..

## 周志明的软件架构课

https://time.geekbang.org/column/article/337708

### 无服务架构

分布式架构带来的新问题

服务的安全 容错 事务一致性

不去做分布式无疑是最简单的.

AWS 阿里云等云服务商都能在算力上满足系统对性能的需求

iron.in提出无服务概念

卖点: 只设计了后端设施和函数两种内容..

后端设施指数据库 消息队列 日志 存储这些支撑业务 本身无业务含义的技术组件

无服务函数运行于云端, 不考虑算力和容量规划

1. 不需要考虑组件 组件是提供的

2. 不需要考虑部署 部署是自动的

3. 不考虑算力 算力是无限的

4. 不需要担心运维 运维是服务商的责任

无服务的冷启动 无状态 运行时间有限等

它不是普适性的架构模式

无服务是短连接, 无状态, 适合事件驱动的交互形式..

无服务的无限算力决定其按使用量付费, 

函数响应时间不会太好..

封装了服务的维护流程..

## 模块二 架构师的视角

### 07 远程服务调用 上 本地到远程的桥梁

架构师: 软件系统中技术模型的系统设计者

RPC的常见问题.

#### 进程间通讯

本地方法调用过程

* 传递方法参数 压栈

* 确定方法位置 找到Callee

* 执行被调方法

* 返回执行结果

本地转远程障碍

* 没有栈空间

* 语言实现不同

解决交换数据的问题:

管道

| ps的标准输出 pipleine

* 信号

singal

* 信号量

特殊变量

* 消息队列

适合大量消息传递

* 共享内存

共享内存空间 配合信号量

* IPC Socket 本地套接字接口

普适的Linux进程间通信机制

RPS应该是高层次的语言层工具

而不是IPC那样 底层地的 系统层次的特征

RPC很多学习了IPC的概念

Fragment 字段是url #后面的字段信息

可以用于做文档内跳转

java字段校验: 使用Java Bean Validation

@Null、@NotNull、@AssertTrue、@AssertFalse、@Min、@Max、@DecimalMin、@DecimalMax、@Negative、@NegativeOrZero、@Positive、@PositiveOrZeor、@Szie、@Digits、@Pass、@PassOrPresent、@Future、@FutureOrPresent、@Pattern、@NotEmpty、@NotBlank、@Email

https://time.geekbang.org/column/article/336798


## 分布式基石

### 共识算法

Paxos算法

# 2024年1月14日

2024年1月14日10:36:21

折腾GraalVm Native-Image

此文件为作为全局变量安装

第一步寻找gu.exe

切换到目录

```
# bash 脚本
cd C:\Users\23629\scoop\apps\graalvm22-jdk17\22.3.2\lib\installer\bin
 .\gu.exe list
```

找native image工具包:

https://github.com/graalvm/graalvm-ce-builds/releases?q=22.3.2&expanded=true

在release界面搜索native-image-installable-svm-java17-windows-amd64

https://www.cnblogs.com/qiyebao/p/14351599.html

https://blog.csdn.net/wangpaiblog/article/details/122422987

native-image -jar JAR 包的路径 打包命令

放弃了, java的依赖问题不是好解决的

相信后人的智慧... 哈哈

继续周志明架构课

## 周志明的软件架构课

https://time.geekbang.org/column/article/337708

课程答题记录 爬虫

```
let a = []
document.querySelectorAll('.paper-item-cotainer').forEach(res => {a.push(res.innerText)})

只回复"正确", 或者"错误"

[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n
```

([^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n)

\n\n\n\n\n只回复正确选项, 不需要任何解释, 我接下来的五个问题是: \n $1