var Main = Vue.component("Main",{
    template:`
       <div class="app">
          
           <nav>
                <div class="left">
                     <router-view name="left"></router-view>
                </div>
                <div class="right">
                     <router-view name="right"></router-view>
                </div>
           </nav>
       </div>
    `,
})

var Left = Vue.component('Left',{
    template:`<div>
      <ul>
          <li  v-for="item in data">
             <div>{{item.title}}</div>
             <ul>
                <li v-for="item1 in item.child">
                   <router-link :to="'#a'+item1.id">{{item1.title}}</router-link>
                </li>
             </ul>
          </li>
      </ul>
    </div>`,
    data(){
       return{
          mnue:[
              {id:1,title:'global',pid:0},
              {id:2,title:'global11',pid:1},
              {id:3,title:'global22',pid:1},
              {id:4,title:'API',pid:0},
              {id:5,title:'API222',pid:4},
              {id:6,title:'API111',pid:4},
              ]
              }
           },
    computed:{
        data(){
            var arr = [];
            for(let i in this.mnue){
                if(this.mnue[i].pid==0){
                    arr.push(this.mnue[i]);
                }else {
                    for(let j in arr){
                        if(arr[j].id==this.mnue[i].pid){
                            if(arr[j].child){
                                arr[j].child.push(this.mnue[i]);
                            }else{
                                arr[j].child=[];
                                arr[j].child.push(this.mnue[i]);
                            }
                        }
                    }
                }
            }
            return arr;
        }
    },
    watch:{
        $route(){
            let num=this.$route.hash.slice(2);
            var pos=(document.querySelector("#a"+num).offsetTop) - 40;
            console.log(pos);
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: document.querySelector(".right").scrollTop})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: pos}, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.tweeningNumber.toFixed(0)
                })
                .start()

            animate()

        }

    },

})
var Right = Vue.component('Right',{
    template:`<div class="markdown-body">
                  <div v-html="data"></div>
              </div>`,
    data(){
      return {
          data:'<div id="a1"> <h1>global</h1> </div> <p>这是galbal的内容<br /> <strong>啊哈哈哈哈哈或或或或或或</strong></p> <p><ins>开啦啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啦<br /> 坎坎坷坷扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩</ins></p> <div id="a2"> <h2>global111</h2> </div> <table> <thead> <tr> <th>属性</th> <th>方法</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>content1</td> <td>content2</td> <td>content3</td> </tr> </tbody> </table> <div id="a3"> <h2>global222</h2> </div>  |属性|方法|描述| |-|-|-| |content1|content2|content3| <div id="a4"> <h1>APL</h1> </div> <p>这是APL的内容</p> <div id="a5"> <h2>API111</h2> </div> <table> <thead> <tr> <th>属性</th> <th>方法</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>content1</td> <td>content2</td> <td>content3</td> </tr> </tbody> </table> <p>*啦啦啦阿拉拉了 没有词语了 *</p> <div id="a6"> <h2>API222</h2> </div> <table> <thead> <tr> <th>属性</th> <th>方法</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>content1</td> <td>content2</td> <td>content3</td> </tr> </tbody> </table>'
      }
    },

})

var quick = Vue.component('quick',{
    template:`<div>qucikhahahhah</div>`
})