# booktobook
online book store
个人所作，在线二手书交易网站



一、使用到的技术

1、前端
基础HTML、CSS、JS
UI采用Bootstrap一部分样式，使用了animate.css库的一部分动画
JS使用vue.js简单地进行数据绑定与渲染

2、后端
使用node.js实现基本数据库增删改查和GET/POST请求的处理和响应

3、数据库
使用MySql数据库


二、实现的功能

1、基本的登陆注册、注销、修改密码
2、搜索与模式匹配、书籍展示、书籍购买
3、书籍上架下架、订单管理、确认交易
4、新书籍的上传
 
 
三、文件目录

MySql
	b2b.sql —— 数据库脚本文件，在MySql数据库创建数据库b2b并执行
Node
	Dao —— 存放数据库接口和实现
		Config —— 存放本地数据库配置
		Interface —— 存放数据库CRUD的基本接口
		Implement —— 根据需求对各个表的CRUD具体方法和sql语句
Promise —— 根据Server.js解析请求URL的不同，promise处理并响应
	Server —— 存放服务器文件
		Server.js —— 主要后端服务器文件，打开终端输入node Server启动
Public
	css —— css样式文件，和页面一一对应
	js —— js脚本文件，和页面一一对应，主要为vue对象
	lib —— 库文件，这里用到了vue.js，bootstrap，animate.css等
	images —— 图片文件
	fonts ——字体文件
	index.html —— 主页，通过浏览器打开
	searchResult.html —— 搜索结果
	userCenter.html —— 个人中心
	userInfo.html —— 个人信息
	register.html —— 登陆注册
