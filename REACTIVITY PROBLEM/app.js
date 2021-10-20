var app=Vue.createApp({
    data(){
      return{
        result:0,
      }
    },
    
    methods:{
      add(num){
        this.result=this.result+num;
         },
     },
     watch:{
        result(value){
       
        if(value >37 ){
         
         const val= this;
         setTimeout(function() {val.result=0;},5000);
        }else{
           return 0;
        }
      }
     },
    computed:{
      output(){  

        if(this.result>37){
          return 'Too much!';
        }
        else if(this.result  < 37 && this.result >0){
          return 'Not there yet!';
        }
       
        else if(this.result===37){
         return this.result;
        } 
         else{
          return 0;
        }
      }
      
    }
    });
    app.mount('#container');