let footerApp = new Vue({
    el: '#footerApp',

    data:{
        // you can change the phone and email strings as desired
        phone:'(123) 456-7891',
        email:'someemail@email.com',
        phoneClick:false,
        emailClick: false 
    },

    methods:{
        phonePopulate: function(){

            this.phoneClick = true
    
        },
        emailPopulate: function(){
            this.emailClick =true
        },
        toggleButtons: function(){
            this.phoneClick = false
            this.emailClick = false
        }
        
    }

})