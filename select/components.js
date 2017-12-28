Vue.component('con-input',{
    props:["title"],
    template:`
     <div class="select-box">
            <input type="text" v-model="title" @focus="focus">
     </div>
    `,
    methods:{
         focus(){
             this.$emit('sinput');
         }
    }
})
Vue.component('con-list',{
    props:['datas','status'],
    template:`
<div class="list" v-show="status==true">
    <ul class="selectlist">
         <li v-for="v in datas" @click="click(v.title)">{{v.title}}</li>
     </ul>
 </div>
    `,
    methods:{
       click(val){
          this.$emit('slist',val)
       }
    }
})