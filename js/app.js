var VoteforMe = (function() {
    
   var arr = [],
       start = 2;
    
    
    function display(item) {
        $(arr).hide();
        $(item).show();    
    }
    
    return {
        next : function(elem) {
            var self = this;
            elem == arr[1] ? display(arr[start++]) : display(arr[start++]);
            $(elem).show();
        },
        init : function(elem) {
            var self = this;
            var elem = $(elem);
            for (var i = 0; i < elem.length; i++) {
                arr.push(elem[i]);
            }
           /* elem.on('mouseover', function() {
               self.display(this); 
            });*/
            elem.on('click', function() {
                self.next(this);
            });
        }
    }
    
})();

$(function(){
    VoteforMe.init('#gallery ul li');
});
