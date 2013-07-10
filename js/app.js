

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
		
		/* to do */ self.ele.not(this).hide();
		self.getItem(className, domEl);
		if (domEl == undefined) {
			self.complete();
		}
	});
};
voteMe.prototype.complete = function() {
	console.log('complete');
	return;
}
voteMe.prototype.getItem = function(className, domEl) {
	(className == 'right') ? className = 'left' : className = 'right';
	return $(domEl).addClass(className).show();
};

var vote = new voteMe('#gallery ul li');
