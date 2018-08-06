let navBarApp = new Vue({
    el: '#navBarApp',
    data: {
        showX: false
    },
    methods: {

        toggleX: function () {
            this.showX = !this.showX;
        }
    }

})

let videoApp = new Vue({

    el: '#videoApp',

    data: {
        showRemainingContent: false,
        hideBtn: false
    },

    methods: {
        showRemaingVideos: function () {
            this.showRemainingContent = true
            this.hideBtn = true
        }
    }

})


let footerApp = new Vue({
    el: '#footerApp',

    data: {
        // you can change the phone and email strings as desired
        phone: '(123) 456-7891',
        email: 'someemail@email.com',
        phoneClick: false,
        emailClick: false
    },

    methods: {
        phonePopulate: function () {

            this.phoneClick = true

        },
        emailPopulate: function () {
            this.emailClick = true
        },
        toggleButtons: function () {
            this.phoneClick = false
            this.emailClick = false
        }

    }

})