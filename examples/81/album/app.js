
//"use strict";

var Loading = {
  template: `
  <sui-dimmer active>
    <sui-loader>Loading...</sui-loader>
  </sui-dimmer>
  `,
}

new Vue({
  el: '#app',
  mounted() {
    document.querySelector("#loadingPage").remove()
  },

  template: `
  <div @click="previewImg(event)">
    <p style="padding:10px 10px 10px 75px;color:#aaa;">岁月如歌。</p>
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
        <nav class="HolyGrail-nav">1995<br>福州<br>母校</nav>
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
});
