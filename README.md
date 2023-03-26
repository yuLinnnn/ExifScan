# ExifScan
右键检测图片是否存在Exif漏洞

下载解压

<img width="461" alt="image" src="https://user-images.githubusercontent.com/103826350/227783269-b8d4e431-589f-45d9-b821-fccf83e80e7b.png">

对图片右键检测,存在和不存在都会弹

原理:加载图像的二进制数据，然后检查前几个字节以查看是否存在Exif标识符

国内SRC不收,hackerone不收,Bugcrowd50-100刀一个

<img width="748" alt="image" src="https://user-images.githubusercontent.com/103826350/227783613-8d8cc01b-f1d7-4216-9135-423def0d0866.png">
