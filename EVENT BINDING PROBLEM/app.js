const app=Vue.createApp({
    data:function(){
        return{
            output1:'',
            output2:''
        }
        
    },
    methods:{
        ShowAlert(event)
        {
         event.preventDefault();
         alert('alert me!');
        },
        
        setoutput1(event){
          this.output1=event.target.value
        },
         
        setoutput2(event){
          this.output2=event.target.value
        },
    
    }

});
app.mount('.events');