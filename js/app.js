var VoteforMe = (function() {
    
   var arr = [],
       start = 2,
       final = 'a';
    
    
    function nextItem(item, target) {
        var $target = $(arr).filter(':visible').not(target),
            $item = $(item);
           $target.hide(); 
           $item.show();
    }
    
    function finalItem(i) {
        var final = $(i).find('span').text();
        $(arr).hide();
        $(i).show();
        $('body').append('<div>' + final + ' </div>');
    }
    
    return {
        next : function(elem) {
            var self = this,
                dom = arr[start++];
            dom == undefined ? self.final(elem) :  nextItem(dom, elem);  
        },
        final: function(item) {
            finalItem(item)   
        },
        init : function(elem) {
            var self = this,
                $elem = $(elem);
            for (var i = 0; i < $elem.length; i++) {
                arr.push($elem[i]);
            }
            $elem.on({
                click: function() {
                    self.next(this);    
                },
                mouseenter: function() {
                   $(this).find('span').show();
                },
                mouseleave: function() {
                   $(this).find('span').hide();
                }
            });
                
        }
    }
    
})();

$(function(){
    VoteforMe.init('#gallery ul li');
});
