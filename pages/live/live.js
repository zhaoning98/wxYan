// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeArr: [
      {
        "id": 491,
        "dictId": 1,
        "itemKey": "3",
        "itemName": "教研活动",
        "itemOrder": 1,
        "parentItem": null,
        "modifyEnable": 0,
        "subs": []
      },
      {
        "id": 492,
        "dictId": 1,
        "itemKey": "1",
        "itemName": "大型会议",
        "itemOrder": 2,
        "parentItem": null,
        "modifyEnable": 0,
        "subs": []
      },
      {
        "id": 490,
        "dictId": 1,
        "itemKey": "2",
        "itemName": "项目学情",
        "itemOrder": 3,
        "parentItem": null,
        "modifyEnable": 0,
        "subs": []
      },
      {
        "id": 493,
        "dictId": 1,
        "itemKey": "0",
        "itemName": "其他",
        "itemOrder": 4,
        "parentItem": null,
        "modifyEnable": 0,
        "subs": []
      }
    ],
    isShowOptions: true,
    index: 0,
    multiIndex: [0, 0],
    multiArray: [['1', '2'], ['1-1', '1-2', '1-3', '1-4', '1-5']],
    array: ['美国', '中国', '巴西', '日本'],
    list: [],
    isNoMoreData: false
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['1-1', '1-2', '1-3', '1-4', '1-5'];
            break;
          case 1:
            data.multiArray[1] = ['2-1', '2-2', '2-3'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  toggleOptions: function (e)  {
    this.setData({
      isShowOptions: (e.detail.scrollTop > 48 && e.detail.deltaY<0) ? false : true
    })
  },
  getData: function () {
    this.setData({
      isNoMoreData: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    });
  },
  getMoreData: function() {
    if (this.data.list.length>20) {
      this.setData({ isNoMoreData: true });
      return;
    }
    this.setData({ list: this.data.list.concat([1, 1, 1]) });
  }
})