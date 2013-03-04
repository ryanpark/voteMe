var VoteforMe = (function() {
    
    var doms = ('ul li'),
        lists= $(doms).get();
    
    
    
    return {
        next : function() {
            index = 2;
            for (var i = 0; i < lists.length; i++) {
                console.log(lists[index++]);
            }
          
        },
        init : function() {
           var self = this;
           $(doms).on('click', function() {
                self.next(); 
            });
        }
    }
    
})();

$(function(){
    VoteforMe.init();    
});
