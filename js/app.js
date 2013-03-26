var VoteforMe = (function() {
    
   var arr = [],
       start = 2,
       final = '';
    
    function nextItem(item, target) {
        var $target = $(arr).filter(':visible').not(target),
            className = $(target).attr('class'),
            $item = $(item);
        
        $target.fadeOut('fast'); 
        
        switch (className) {
            case 'right' :
            $item.addClass('left');
            break;
            case 'left' :
            $item.addClass('right');
            break;
        }
        
        $item.show();
    }
    
    function finalItem(i) {
        final = $(i).find('span').text();
        var $target = $(arr).filter(':visible').not(i);
        $target.hide();
        $('.final').length ? $('.final').fadeOut('fast').fadeIn('slow') : $('body').append('<div class="final">' + final + ' </div>');
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
