# 第10章_Spark

## Spark是基于内存计算的大数据计算平台，试述Spark的主要特点

### 运行速度快

Spark采用先进的有向无环图（Directed Acycle Graph，DAG）执行引擎，以支持循环数据流于内存计算，基于内存的执行速度科比Hadoop MapReduce快上百倍，基于磁盘的执行速度也能快10倍左右。

### 容易使用

Spark支持使用Scala、java、python和R语言进行编程，简洁的API设计有助于用户轻松构建并行程序，并且可以通过Spark Shell进行交互式编程。

### 通用性

Spark提供了完整而强大的技术栈，包括SQL查询、流式计算、机器学习和图算法组件，这些组件可以无缝整合在同一个应用中，足以应对复杂的计算。

### 运行模式多样

Spark可运行于独立的集群模式中，或者运行于Hadoop中，也可运行于Amazon等云环境中，并且可以访问HDFS、Cassandra、HBase、Hive等多种数据源。



## Spark出现是为了解决Hadoop MapReduce的不足，试列举Hadoop MapReduce的几个缺陷，并说明Spark具备哪些优点。

### Hadoop存在以下缺点

#### 表达能力有限

计算必须转化成MapReduce

#### 磁盘IO开销大

执行时必须读磁盘

#### 延迟高

计算涉及IO延迟较高

### Spark有如下优点

#### 计算模式不局限于MapReduce

更灵活

#### 提供内存计算

效率高

#### DAG任务调度

优于MapReduce的迭代机制



## 试述如下Spark的几个主要概念:RDD、DAG、阶段、分区、窄依赖、宽依赖。

### RDD

是弹性分布式数据集（Resilient Distributed Dataset）的英文缩写，是分布式内存的一个抽象概念，提供了一种高度受限的共享内存模型。

### DAG

是 Directed Acyclic Graph（有向无环图）的英文缩写，反映 RDD 之间的依赖关系。

### 阶段

是作业的基本调度单位，一个作业会分为多组任务，每组任务被称为“阶段”，或者也被称为“任务集”。

### 分区

一个RDD就是一个分布式对象集合，本质上是一个只读的分区记录集合，每个RDD可以分成多个分区，每个分区就是一个数据集片段。

### 窄依赖

父RDD的一个分区只被一个子RDD的一个分区所使用就是窄依赖

### 宽依赖

父RDD的一个分区被一个子RDD的多个分区所使用就是宽依赖。



## Spark对RDD的操作主要分为行动（Action）和转换（Transformation）两种类型，两种操作的区别是什么？

### 行动：用于执行计算并制定输出的格式

### 转换：指定RDD之间的相互依赖关系

### 主要区别：

转换操作（如map、filter、groupBy、join等）接受RDD并返回RDD，

而行动操作（如count、collect等）接受RDD但是返回非RDD（即输出一个值或结果）

























