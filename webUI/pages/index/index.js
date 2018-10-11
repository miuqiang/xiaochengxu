import http from '../../api/http';

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },
  onLoad: function() {
    // this.getHome();
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  getHome: function() {
    http.get('v2/home').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  handleChoise: function(e) {
    // wx.chooseImage({
    //   success (res) {
    //     console.log(res);
    //     // const filePath = res.tempFilePaths;
    //   }
    // })

    wx.showToast({
      title: '登陆中',
      icon: 'loading',
      duration: 1000,
      mask:true
    })
  }
})