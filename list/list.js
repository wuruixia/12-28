let obj = new Vue({
    el:".app",
    data:{
        con:'',
        status:2,
        alls:[],
        state:0,
        edit:1
    },
    methods:{
        add(){
            if(!this.con){
                alert("请输入内容");
                return;
            }
            var obj={};
            obj.title=this.con;
            obj.id=Math.random()+new Date().getTime()
            obj.status=2;
            obj.state=0;
            obj.edit=1;
            this.alls.push(obj);
            this.con="";
            return this.alls;
        },
        del(id){
            this.alls=this.alls.filter(ele=>ele.id!=id);
        },
        checkstatus(a){
            this.status=a;
        },
        check(v){
            if(v.state==0){
                v.state=1;

            }else{
                v.state=0
            }
        },
        editor(v){
            if(v.edit==1){
                v.edit=0;
            }else {
                v.edit=1;
            }
        }
    },
    computed:{
        datas(){
            return datas=this.alls.filter(ele=>{
                if(this.status==2){
                    return ele
                }else{
                    if(this.status==ele.state){
                        return ele;
                    }

                }
            })
        }
    }
})