let app = new Vue({
    el: '#my_style',
    data:{
        user: '',
        USER1: false,
        USER2: false,
        active: true,
        color:'',
        activeColor: '',
    },

    methods:{
        user_input(event){
            this.user = event.target.value;

            if(this.user === 'USER1'){
                this.USER1 = !this.USER1;
            }else if(this.user ==='USER2'){
                this.USER2 = !this.USER2;
            }else{
                this.USER1= ''
                this.USER2 = ''
            }
        },
        btnToggle(){
            this.active = !this.active;
        },

        input_Color(event){
           this.color = event.target.value;
           if(this.color === 'pink'){
               this.activeColor = this.color;
           }else if(this.color === 'red'){
               this.activeColor = this.color
           }else if(this.color ==='orange'){
               this.activeColor = this.color;
           }else if(this.color==='dark green'){
               this.activeColor=this.color;
           }else if(this.color==='blue'){
               this.activeColor=this.color;
           }else if(this.color==='violet'){
               this.activeColor=this.color;
           }else if(this.color==='white'){
               this.activeColor=this.color;
           }else if(this.color==='purple'){
            this.activeColor=this.color;
           }else if(this.color==='white'){
            this.activeColor=this.color;
           }else if(this.color==='black'){
            this.activeColor=this.color;
           }else if(this.color==='brown'){
            this.activeColor=this.color;
           }else if(this.color==='yellow'){
            this.activeColor=this.color;
           }else if(this.color==='gray'){
            this.activeColor=this.color;
           }
           else{
               this.activeColor = ''
           }
        }
       
    },
   
});