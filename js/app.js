var VoteforMe = (function() {
    
    var doms = $('ul li'),
        arr = [],
        start = 1;
    
    return {
        next : function(e) {
            $(arr).hide();
            $(e).show();
            $(arr[start++]).show();
        },
        init : function() {
            var self = this;
            for (var i = 0; i < doms.length; i++) {
              arr.push(doms[i]);
            }
            $(arr).on('click', function(e) {
              self.next(this);
            });
        }
    }
    
})();

$(function(){
    VoteforMe.init();
});
