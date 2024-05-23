# ciyverify无感一键套盾

可以无需修改web项目的代码实现套用ciyverify

AppID和Key 申请网站:
    https://ciyverify.com


### 第一步
把项目下载到你的服务器解压

### 第二步
修改配置文件 config.json
```json
{
  "AppID": "fsdggdfgdfhfghfdg", // 你申请的AppID
  "Key": "hfghddfghfgdjhjhgjgdrter", // 你申请的Key
  "TargetBaseURL": "http://127.0.0.1:8090", // 你想要转发的web服务（最好127.0.0.1本地，套域名什么的可能会出现跨域问题）
  "VerifyJs": "https://ciyverify.com/1.0.1/js/cyverification.js", // 那个版本的校验js
  "ServerPort": 18280 // 套盾后启动的服务端口
}
```
配置好上面文件
访问 "http://127.0.0.1:18280" 就相当于访问 "http://127.0.0.1:8090"
"http://127.0.0.1:18280" 这个会套上盾 


### 启动服务
centos 启动
```shell
chmod +x main
./main &
```
win 启动
```shell
main.exe
```

### 注意
套用了ciyverify无感就不能使用滑块了
风控次数记得开大一些

### 修改环境检测界面
可以在./data/Info.html 去修改样式和代码