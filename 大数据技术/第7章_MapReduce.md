## 第7章_MapReduce

## 试述MapReduce和Hadoop的关系

Hadoop是基于MapReduce模型的分布式计算平台。

MapReduce是Hadoop的核心组件之一。



## MapReduce模型采用Master-Slave结构，试描述JobTracker和Tracker的功能。

MapReduce框架采用了Master/Slave架构，包括**一个Master和若干个Slave**

Master上运行JobTracker，Slave上运行TaskTracker。

用户提交的每个计算作业，会被划分成若干个任务。

**JobTracker负责作业和任务的调度，监控它们的执行，并重新调度已经失败的任务。**

**TaskTracker负责执行由JobTracker指派的任务。**



## 试述MapReduce的工作流程（需包括提交任务、Map、Shuffle、Reduce的过程）。

### 逻辑切分

首先MapReduce框架会使用InputFormat模块做Map前的预处理，比如验证输入的格式是否符合输入的定义；

然后，将输入文件切分为逻辑上的多个InputSplit，InputSplit是MapReduce对文件进行处理和运算的输入单位；每个InputSplit并没有对文件进行实际切割，只是记录了要处理的数据的位置和长度。

### 转化为Key-value

通过RecordReader（RR）根据InputSplit中的信息来处理InputSplit中的具体记录

加载数据并转换为适合map任务读取的键值对，输入给map任务

### Map处理

Map任务会根据用户自定义的映射规则，输出一系列的<key，value>作为中间结果；

### Shuffle

为了让Reduce可以并行处理Map的结果，需要对Map的输出进行一定的分区，排序，合并。归并等操作，得到<key,value-list>形式的中间结果，再交给对应的Reduce进行处理。

Shuffle将无序的<key,value>转化为有序的<key,value-list>

### Reduce

Reduce以一系列<key,value-list>中间结果作为输入，

执行用户自定义的逻辑，输出结果给OutputFormat模块。

### 输出模块

OutputFormat模块验证输出目录是否已经存在且输出结果类型是否符合配置文件中的配置类型，如果都满足，就输出Reduce的结果到分布式文件系统。

## 试分析为何采用Combiner可以减少数据传输量。是否所有的MapReduce程序都可以采用Combiner？为什么？

对于每个分区内的所有键值对，后台线程会根据key对他们进行内存排序（sort），排序是MapReduce的默认操作。如果用户事先没有定义Combiner函数，就不用进行合并操作。如果用户事先定义了Combiner函数，则这个时候会执行合并操作，从而减少需要溢写到磁盘的数据量。

所谓“合并”，是指将那些具有相同key的<key,value>的value加起来，必须，有两个键值对<\*xmu,1>和<\*xmu,1>，经过合并操作以后就可以得到一个键值对<*xmu,2>，

减少了键值对的数量。

不过，并非所有场合都可以使用Combiner，因为，Combiner的输出是Reduce任务的输入，Combiner绝不能改变Reduce任务的最终计算结果，一般而言，累加，最大值等场景可以使用合并操作。



















