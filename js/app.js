var VoteforMe = (function() {
    
   var arr = [],
       start = 1;
    
    return {
        display: function (elem) {
            
        },
        next : function(elem) {
            elem == arr[1] ? alert('asd') : alert('sadas');
        },
        init : function(elem) {
            var self = this;
            var elem = $(elem);
            for (var i = 0; i < elem.length; i++) {
                arr.push(elem[i]);
            }
            elem.on('mouseover', function() {
               self.display(this); 
            });
            elem.on('click', function() {
                self.next(this);
            });
        }
    }
    
})();

$(function(){
    VoteforMe.init('#gallery ul li');
});
