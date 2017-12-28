new Vue({
    el:'.root',
    data:{
        list:[
            {id:1,title:"aaaa"},
            {id:2,title:"bbbb"},
            {id:3,title:"cccc"},
        ],
        status:false,
        title:''
    },
    methods:{
        aa(){
            this.status=true
        },
        bb(v){
            this.title=v;
            this.status=false;

        }
    }
})