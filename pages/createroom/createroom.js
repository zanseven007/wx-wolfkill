//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    dataList:[
      //村民
      {
          "id":"1",
          "pic": "./images/cunmin.png",
          "title": "cunmin",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":6,
          "name": "村民",
          "intro": "全场最懵的角色"
      },
      //女巫
      {
          "id":"2",
          "pic": "./images/nvwu.png",
          "title": "nvwu",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "女巫",
          "intro": "可乐的代言人"
      },
      //猎人
      {
          "id":"3",
          "pic": "./images/lieren.png",
          "title": "lieren",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "猎人",
          "intro": "全场最叼的角色"
      },
      //预言家
      {
          "id":"4",
          "pic": "./images/yuyanjia.png",
          "title": "yuyanjia",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "预言家",
          "intro": "全场最惨的角色"
      },
      //盗贼
      {
          "id":"5",
          "pic": "./images/daozei.png",
          "title": "daozei",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "盗贼",
          "intro": "全场最gay的角色"
      },
      //丘比特
      {
          "id":"6",
          "pic": "./images/qiubite.png",
          "title": "qiubite",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":1,
          "name": "丘比特",
          "intro": "全场最色情的角色"
      },
      //测试
      {
          "id":"7",
          "pic": "./images/qiubite.png",
          "title": "qiubite",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":2,
          "name": "测试甲",
          "intro": "全场最色情的角色"
      },
      //测试
      {
          "id":"8",
          "pic": "./images/qiubite.png",
          "title": "qiubite",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":4,
          "name": "测试乙",
          "intro": "全场最色情的角色"
      },
      //测试
      {
          "id":"9",
          "pic": "./images/qiubite.png",
          "title": "qiubite",
          "currentNum":0,
          "addclass":"itemroom-add",
          "reduceclass":"itemroom-reduce itemroom-no",
          "max":3,
          "name": "测试丙",
          "intro": "全场最色情的角色"
      },
      
    ],
    total:0
  },
  addnum: function(e){
    let currId = e.currentTarget.dataset.id;
    let max = e.currentTarget.dataset.max;
    let array = this.data.dataList;
    let totalNum = this.data.total;
    for(let i = 0;i<array.length;i++){
      if(array[i]['id']==currId){
        if(array[i]['currentNum'] >= (max-1)){
            array[i]['addclass'] = "itemroom-add itemroom-no";
            if(array[i]['currentNum'] == (max-1)){
                console.log(1);
                totalNum += 1;
            }
            array[i]['currentNum'] = max;
        }else{
            array[i]['addclass'] = "itemroom-add";
            array[i]['currentNum'] += 1;
            totalNum += 1;
        }
        array[i]['reduceclass'] = "itemroom-reduce";
        this.setData({
          dataList:array,
          total:totalNum
        });
        break;
      }
    }
  },
  reducenum: function(e){
    let currId = e.currentTarget.dataset.id;
    let array = this.data.dataList;
    let totalNum = this.data.total;
    for(let i = 0;i<array.length;i++){
      if(array[i]['id']==currId){
        
        if(array[i]['currentNum'] <= 1){
            array[i]['reduceclass'] = "itemroom-reduce itemroom-no";
            if(array[i]['currentNum'] == 1){
                totalNum -= 1;
            }
            array[i]['currentNum'] = 0;
        }else{
            array[i]['reduceclass'] = "itemroom-reduce";
            array[i]['currentNum'] -= 1;
            totalNum -= 1;
        }
        array[i]['addclass'] = "itemroom-add";
        this.setData({
          dataList:array,
          total:totalNum
        });
        break;
      }
    }
  },
  onLoad: function () {
    
  },
  goToPlay: function(){
      wx.navigateTo({
      url: '/pages/room/room',
      success: function(res){
        
      },
      fail: function() {
        
      },
      complete: function() {
        
      }
    })
  }
})
