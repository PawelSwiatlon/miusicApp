var $ = jQuery.noConflict();
(function() {
    var app = {
        init: function(){
            this.test();
        },
        test: function(){
           console.log("Hello you, Main js here :D !");
        },

    }
    $(document).ready(function(){
        app.init();
    });
}());