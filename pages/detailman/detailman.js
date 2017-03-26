//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    "name": ""
  },
  onLoad: function (options) {
    this.setData({
        name: options.name
    })
  }
})
