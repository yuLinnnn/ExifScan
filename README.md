# ExifScan

一款Chrome插件

漏洞+案例介绍 -> https://shahjerry33.medium.com/exif-data-exposure-9bdd6c2c4f2a

对图片右键检测,存在和不存在都会弹窗

原理 -> 加载图像的二进制数据，然后检查前几个字节以查看是否存在Exif标识符

一般检测Exif漏洞 国内SRC不收 hackerone不收 Bugcrowd 50~100刀一个

<img width="748" alt="image" src="https://user-images.githubusercontent.com/103826350/227783613-8d8cc01b-f1d7-4216-9135-423def0d0866.png">
