

function voteme(ele) {
    this.ele = ele;
	this.count = 0;
    this.init();
}

voteme.prototype.init = function() {
    var $this = $(this.ele),
		self = this;

	this.length = $this.length - 2;
	
	$this.hide();
	$this.slice(0,2).show();
	
	
	return $this.each(function(i, j) {
		
		$(j).on({
			mouseenter : function() {
	
			},
			click : function() {
				self.next(this, i);
			}
		});
	});
}
voteme.prototype.next = function(ele, c) {
	var $this = $(this.ele),
		self = this,
		$ele = $(ele),
		i = 2;
	
	if (c === 1) {
		$this.first().hide();
	} else {
		$ele.next().hide();
	}
	
	$this.slice(0, i++).show();
	
	self.count++
	
	if (self.count == self.length) {
		alert('d');
	}
}
var vote = new voteme('#gallery ul li');

/*

var VoteforMe = (function() {
    
   var arr = [],
       start = 2,
       final = '';
    
    
    
    function nextItem(item, target) {
        var $target = $(arr).filter(':visible').not(target),
            className = $(target).attr('class'),
            $item = $(item);
        
        if (className == 'left' ) {
            $item.addClass('right');
        } else {
            
        }
        $target.fadeOut('fast'); 
        $item.addClass('display');
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
*/