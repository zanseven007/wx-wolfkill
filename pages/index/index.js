//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  onLoad: function () {

  },
  comingsoon: function () {
    wx.showToast({
      title: '敬请期待',
      icon: 'success',
      duration: 1500
    })
  }
})
