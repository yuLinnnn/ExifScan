chrome.contextMenus.create({
  title: "Exif漏洞检测 By:yuLin",
  contexts: ["image"],
  onclick: function(info, tab) {
    var imageUrl = info.srcUrl;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", imageUrl, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      var buffer = xhr.response;
      var dv = new DataView(buffer);
      var exif = dv.getUint16(0, false) == 0xFFD8 && dv.getUint16(2, false) == 0xFFE1 && dv.getUint32(4, false) == 0x45786966;
      if (exif) {
        alert("存在Exif漏洞");
      } else {
        alert("该漏洞不存在");
      }
    };
    xhr.send();
  }
});
