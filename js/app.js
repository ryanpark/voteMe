

function voteMe(ele) {
    this.ele = $(ele);
    this.init();
};

voteMe.prototype.init = function() {
	this.arr = [];
	
	for (var i = 0; i < this.ele.length ; i++ ) {
		if ( i !== 0 && i !== 1) {
			this.arr.push(this.ele[i]);
		}
	}
	console.log(this.arr);
	this.next();
	return $(this.arr).hide();
};

voteMe.prototype.next = function() {
	var self = this,
		j = 0;
		
	function alink (link, event) {
		var target = $(link).find('span');
		if (event.type == 'mouseenter') {
			target.fadeIn('fast');
		}
		if (event.type == 'mouseleave') {
			target.fadeOut('slow');
		}
	}
	
	this.ele.on({
		click : function() {
			var className = $(this).attr('class'),
				domEl = self.arr[j++];
			console.log(j);
			/* to do */ self.ele.not(this).hide();
			self.getItem.call(this, className, domEl);
			
			if (domEl == undefined) {
				self.complete(this);
			}
		},
		mouseenter : function(evt) {
			alink(this, evt);
		},
		mouseleave : function(evt) {
			alink(this, evt);
		}
	});
	
	
};
voteMe.prototype.complete = function(domEl) {
	var selected = $(domEl).find('span').text();
	console.log(selected);
	return;
}
voteMe.prototype.getItem = function(className, domEl) {
	(className == 'right') ? className = 'left' : className = 'right';
	return $(domEl).addClass(className).show();
};

var vote = new voteMe('#gallery ul li');
