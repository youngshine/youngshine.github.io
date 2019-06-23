
//"use strict";

var Loading = {
  template: `
  <div id="loadingPage">
    <div style="font-size:10px;color:#888;padding-top:20px;">期待2020再相聚</div>
    <img id="loadingImg" src="./images/loading.gif" />
  </div>
  `,
}
var Header = {
  template: `
  <div style="padding:0 15px 0 75px;color:#fff;">
    <p>相聚如歌，曲终难忘</p>
    <p style="color:#888;font-size:10px;margin-top:-20px;">曾经以为淡忘的面孔，在相见那一瞬间突然变得清晰起来。</p>
  </div>
  `  
}
var List = {
  template: `
  <div @click="previewImg(event)">
    <div class="HolyGrail">
      <div class="HolyGrail-body">
        <nav class="HolyGrail-nav">2015<br>福州<br>宁德</nav>
        <main class="parent HolyGrail-content">
          <img class="child" src="./images/2015/thumb/001.jpg" />
          <img class="child" src="./images/2015/thumb/002.jpg" />
          <img class="child" src="./images/2015/thumb/003.jpg" />
          <img class="child" src="./images/2015/thumb/004.jpg" />
          <img class="child" src="./images/2015/thumb/005.jpg" />
          <img class="child" src="./images/2015/thumb/006.jpg" />
          <img class="child" src="./images/2015/thumb/007.jpg" />
          <img class="child" src="./images/2015/thumb/008.jpg" />
          <img class="child" src="./images/2015/thumb/009.jpg" />
          <img class="child" src="./images/2015/thumb/010.jpg" />
          <img class="child" src="./images/2015/thumb/011.jpg" />
          <img class="child" src="./images/2015/thumb/012.jpg" />
          <img class="child" src="./images/2015/thumb/013.jpg" />
          <img class="child" src="./images/2015/thumb/014.jpg" />
          <img class="child" src="./images/2015/thumb/015.jpg" />
          <img class="child" src="./images/2015/thumb/016.jpg" />
          <img class="child" src="./images/2015/thumb/017.jpg" />
          <img class="child" src="./images/2015/thumb/018.jpg" />
        </main>
      </div>
    </div>

    <br>
    <div class="HolyGrail">
      <div class="HolyGrail-body">
        <nav class="HolyGrail-nav">2010<br>泉州</nav>
        <main class="parent HolyGrail-content">
          <img class="child" src="./images/2010/thumb/001.jpg" />
          <img class="child" src="./images/2010/thumb/002.jpg" />
          <img class="child" src="./images/2010/thumb/003.jpg" />
          <img class="child" src="./images/2010/thumb/004.jpg" />
          <img class="child" src="./images/2010/thumb/005.jpg" />
          <img class="child" src="./images/2010/thumb/006.jpg" />
          <img class="child" src="./images/2010/thumb/007.jpg" />
          <img class="child" src="./images/2010/thumb/008.jpg" />
          <img class="child" src="./images/2010/thumb/009.jpg" />
          <img class="child" src="./images/2010/thumb/010.jpg" />
          <img class="child" src="./images/2010/thumb/011.jpg" />
          <img class="child" src="./images/2010/thumb/012.jpg" />
          <img class="child" src="./images/2010/thumb/013.jpg" />
          <img class="child" src="./images/2010/thumb/014.jpg" />
          <img class="child" src="./images/2010/thumb/015.jpg" />
          <img class="child" src="./images/2010/thumb/016.jpg" />
          <img class="child" src="./images/2010/thumb/017.jpg" />
          <img class="child" src="./images/2010/thumb/018.jpg" />
        </main>
      </div>
    </div>

    <br>
    <div class="HolyGrail">
      <div class="HolyGrail-body">
        <nav class="HolyGrail-nav">2005<br>武夷山</nav>
        <main class="parent HolyGrail-content">
          <img class="child" src="./images/2005/thumb/001.jpg" />
          <img class="child" src="./images/2005/thumb/002.jpg" />
          <img class="child" src="./images/2005/thumb/003.jpg" />
          <img class="child" src="./images/2005/thumb/004.jpg" />
          <img class="child" src="./images/2005/thumb/005.jpg" />
          <img class="child" src="./images/2005/thumb/006.jpg" />
          <img class="child" src="./images/2005/thumb/007.jpg" />
          <img class="child" src="./images/2005/thumb/008.jpg" />
          <img class="child" src="./images/2005/thumb/009.jpg" />
          <img class="child" src="./images/2005/thumb/010.jpg" />
          <img class="child" src="./images/2005/thumb/011.jpg" />
          <img class="child" src="./images/2005/thumb/012.jpg" />
          <img class="child" src="./images/2005/thumb/013.jpg" />
          <img class="child" src="./images/2005/thumb/014.jpg" />
          <img class="child" src="./images/2005/thumb/015.jpg" />
          <img class="child" src="./images/2005/thumb/016.jpg" />
          <img class="child" src="./images/2005/thumb/017.jpg" />
          <img class="child" src="./images/2005/thumb/018.jpg" />
        </main>
      </div>
    </div>

    <br>
    <div class="HolyGrail">
      <div class="HolyGrail-body">
        <nav class="HolyGrail-nav">2000<br>厦门</nav>
        <main class="parent HolyGrail-content">
          <img class="child" src="./images/2000/thumb/001.jpg" />
          <img class="child" src="./images/2000/thumb/002.jpg" />
          <img class="child" src="./images/2000/thumb/003.jpg" />
          <img class="child" src="./images/2000/thumb/004.jpg" />
          <img class="child" src="./images/2000/thumb/005.jpg" />
          <img class="child" src="./images/2000/thumb/006.jpg" />
          <img class="child" src="./images/2000/thumb/007.jpg" />
          <img class="child" src="./images/2000/thumb/008.jpg" />
          <img class="child" src="./images/2000/thumb/009.jpg" />
          <img class="child" src="./images/2000/thumb/010.jpg" />
          <img class="child" src="./images/2000/thumb/011.jpg" />
          <img class="child" src="./images/2000/thumb/012.jpg" />
          <img class="child" src="./images/2000/thumb/013.jpg" />
          <img class="child" src="./images/2000/thumb/014.jpg" />
          <img class="child" src="./images/2000/thumb/015.jpg" />
          <img class="child" src="./images/2000/thumb/016.jpg" />
          <img class="child" src="./images/2000/thumb/017.jpg" />
          <img class="child" src="./images/2000/thumb/018.jpg" />
        </main>
      </div>
    </div>

    <br>
    <div class="HolyGrail">
      <div class="HolyGrail-body">
        <nav class="HolyGrail-nav">1995<br>福州</nav>
        <main class="parent HolyGrail-content">
          <img class="child" src="./images/1995/thumb/001.jpg" />
          <img class="child" src="./images/1995/thumb/002.jpg" />
          <img class="child" src="./images/1995/thumb/003.jpg" />
          <img class="child" src="./images/1995/thumb/004.jpg" />
          <img class="child" src="./images/1995/thumb/005.jpg" />
          <img class="child" src="./images/1995/thumb/006.jpg" />
          <img class="child" src="./images/1995/thumb/007.jpg" />
          <img class="child" src="./images/1995/thumb/008.jpg" />
          <img class="child" src="./images/1995/thumb/009.jpg" />
          <img class="child" src="./images/1995/thumb/010.jpg" />
          <img class="child" src="./images/1995/thumb/011.jpg" />
          <img class="child" src="./images/1995/thumb/012.jpg" />
          <img class="child" src="./images/1995/thumb/013.jpg" />
          <img class="child" src="./images/1995/thumb/014.jpg" />
          <img class="child" src="./images/1995/thumb/015.jpg" />
          <img class="child" src="./images/1995/thumb/016.jpg" />
          <img class="child" src="./images/1995/thumb/017.jpg" />
          <img class="child" src="./images/1995/thumb/018.jpg" />
        </main>
      </div>
    </div>

  </div>
  `,
  methods: {
    previewImg(e){
        console.log(e.target)
        if(!e.target.src) return
        var thumbUrl = e.target.src
        var imgUrl = thumbUrl.replace('/thumb','');
        var imgPath = thumbUrl.substr(0,thumbUrl.indexOf('thumb'))
        //console.log(imgPath)
        var arr = [];
        arr.push(imgPath+'001.jpg')
        arr.push(imgPath+'002.jpg')
        arr.push(imgPath+'003.jpg')
        arr.push(imgPath+'004.jpg')
        arr.push(imgPath+'005.jpg')
        arr.push(imgPath+'006.jpg')
        arr.push(imgPath+'007.jpg')
        arr.push(imgPath+'008.jpg')
        arr.push(imgPath+'009.jpg')
        arr.push(imgPath+'010.jpg')
        arr.push(imgPath+'011.jpg')
        arr.push(imgPath+'012.jpg')
        arr.push(imgPath+'013.jpg')
        arr.push(imgPath+'014.jpg')
        arr.push(imgPath+'015.jpg')
        arr.push(imgPath+'016.jpg')
        arr.push(imgPath+'017.jpg')
        arr.push(imgPath+'018.jpg')
        console.log('current: ',imgUrl)
        console.log('arr: ',arr) //[imgUrl]  
        WeixinJSBridge.invoke('imagePreview', {  
          'current' : imgUrl, 
          'urls'    : arr  
        })
    }, /*
    showDialog() {
        this.$dialog({
            title: "确定删除此订单？",
            content: "删除后将从你的记录里消失，无法找回"
        });
    } */
  }
}

// 共享总线事件通信：Bus注入到Vue根对象中，子组件中通过this.$root.Bus.$on(),this.$root.Bus.$emit()来调用
//const Bus = new Vue(); 

new Vue({
  el: '#app',
  data: {
    //Bus,
    loading: true,
  },
  components: {
    Loading, Header, List
  },
  template: `
  <div>
    <Loading v-show="loading"></Loading>
    <Header></Header>
    <List v-show="!loading"></List>"
  </div>  
  `,
  mounted() {
    //document.querySelector("#loadingPage").remove()
    setTimeout(()=>{
      this.loading = false
    },3000)
    var imgs = document.querySelectorAll('img.child');
    console.log(this.loading)
    //this.checkImg(imgs) 
    //this.promiseImg(imgs) 
  },
  methods: {
    checkImg(imgs){
      var me = this
      var img = [], flag = 0
      for(var i = 0 ; i < imgs.length ; i++){ 
        img[i] = new Image()   
        img[i].src = imgs[i].src
        img[i].onload = function(){ 
          //第i张图片加载完成 
          flag++ 
          console.log(imgs[i]) //don't work
          if( flag == imgs.length ){ 
            //全部加载完成 
            setTimeout(()=>{
              me.loading = false
            },5000)
            
          } 
        } 
      }
    },
    promiseImg(imgs){
      var me = this;
      let promiseAll = [], img = [];
      for(let i = 0 ; i < imgs.length ; i++){
        promiseAll[i] = new Promise((resolve, reject)=>{
            img[i] = new Image()
            img[i].src = imgs[i].src
            img[i].onload = function(){
              //第i张加载完成
              resolve(img[i])
              console.log(imgs[i]) 
            }
        })
      }
      Promise.all(promiseAll).then((img)=>{
        //全部加载完成
        me.loading = false;
        console.log('img all loaded by promise')
      })
    }
  }

});
