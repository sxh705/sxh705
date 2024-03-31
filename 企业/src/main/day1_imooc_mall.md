# 慕慕生鲜 springboot vue 商城项目

## 第五章 商品分类模块开发

### 问题: 为什么 新建一个 AddCategoryRequest 类, 而不是复用之前的 Category pojo类 ?

回答: 每个类都有自己单一的职责 不应该有多个职责 否则容易造成混乱. 

pojo的全称: plain ordinary java object 普通java对象 是表结构的映射

如果用其作为请求类 会产生多余字段 不够安全. 

![img.png](img.png)

@RequestParam("value") get query 参数 

@PathVariable("value") 路径变量 对应 getMapping(/{value})

@RequestBody post body 参数

参数校验: 

    @Valid: 开启入参校验

    具体入参, 在实体类中校验: @NotNull @Max @Size(Max, Min)

标题: 解决Spring Boot异常返回页面中文乱码问题 - 猪脚踏浪 - 博客园 网址: https://www.cnblogs.com/zsg88/articles/15934181.html

// pojo abbr. 简单的 Java 对象（Plain Ordinary Java Object）

标题: java的(PO,VO,TO,BO,DAO,POJO)解释 - 白了少年头 - 博客园 网址: https://www.cnblogs.com/yxnchinahlj/archive/2012/02/24/2366110.html

对应字段验证注解的学习:

@Validated 注解:

可以在Controller类上使用, 以验证单独的Integer String字段

可以在Request类参数前使用, 以使Request类的内部验证生效

@Valid 注解:

配合@Validated 实现递归验证. 

引用:

标题: java - 将自定义验证注释应用于参数 - 代码日志 --- java - apply custom validation annotation to parameter - Stack Overflow 网址: https://stackoverflow.com/questions/73871315/apply-custom-validation-annotation-to-parameter

标题: 注解参数校验——@Vaild和@Validated在Service使用 - 掘金 网址: https://juejin.cn/post/7103206849859551268

复制属性: 使用BeanUtils.copyProperties(