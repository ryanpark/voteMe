

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

	this.next();
	return $(this.arr).hide();
	
};
voteMe.prototype.next = function() {
	var self = this,
		j = 0;
		
	this.ele.on('click', function() {
		var className = $(this).attr('class'),
			domEl = self.arr[j++];
			
		self.ele.not(this).hide();
		self.getItem.call(this, className, domEl);
		if (domEl == undefined) {
			alert('done');
		}
	});
};

voteMe.prototype.getItem = function(className, domEl) {
	if (className == 'right') {
		$(domEl).addClass('left').show();
	} else {
		$(domEl).addClass('right').show();
	}
	
};

var vote = new voteMe('#gallery ul li');
