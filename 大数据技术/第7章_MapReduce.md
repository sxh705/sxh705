# 第7章_MapReduce

# 试述MapReduce和Hadoop的关系

Hadoop是基于MapReduce模型的分布式计算平台。

MapReduce是Hadoop的核心组件之一。



# MapReduce模型采用Master-Slave结构，试描述JobTracker和Tracker的功能。

MapReduce框架采用了Master/Slave架构，包括**一个Master和若干个Slave**

Master上运行JobTracker，Slave上运行TaskTracker。

用户提交的每个计算作业，会被划分成若干个任务。

**JobTracker负责作业和任务的调度，监控它们的执行，并重新调度已经失败的任务。**

**TaskTracker负责执行由JobTracker指派的任务。**



# 试述MapReduce的工作流程（需包括提交任务、Map、Shuffle、Reduce的过程）。

## 逻辑切分

首先MapReduce框架会使用InputFormat模块做Map前的预处理，比如验证输入的格式是否符合输入的定义；

然后，将输入文件切分为逻辑上的多个InputSplit，InputSplit是MapReduce对文件进行处理和运算的输入单位；每个InputSplit并没有对文件进行实际切割，只是记录了要处理的数据的位置和长度。

## 转化为Key-value

通过RecordReader（RR）根据InputSplit中的信息来处理InputSplit中的具体记录



















