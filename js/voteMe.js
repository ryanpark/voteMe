(function($, window, document, undefined) {
    var $window = $(window);
	
	$.fn.voteMe = function(options, callback) {
			
		 var defaults = {
			primaryCn : 'left',
			secondaryCn : 'right'
		 },
		 options = $.extend(
			{callback: function() {}}, defaults, arguments[0] || {}),
		 
		 app = {
			count : 0,
			nArray : [],
			selected : undefined,
			hideLists : function() {
				return $(this.nArray).hide();
			},
			init : function(elem) {
				var self = this;
				self.hideLists();
				self.selectedNext(elem);
			},
			getItem : function(className, domEl) {
				(className == options.primaryCn) ? className = options.primaryCn : className = options.secondaryCn;
				return $(domEl).addClass(className).show();
			},
			complete : function(domEl) {
				
				if (this.selected != undefined) {
					return;
				}
				
				var selected = $(domEl).find('span').text();
				this.selected = selected;
				
				if (options.callback) { 
					options.callback.call(this);
				} else {
					console.log(this.selected);
				}
				
			},
			selectedNext : function(elem) {
				var self = this,
					j = 0;
				
				function alink (link, event) {
					var target = $(link).find('span');
					
					if (target) {
						if (event.type == 'mouseenter') {
							target.fadeIn('fast');
						}
						if (event.type == 'mouseleave') {
							target.fadeOut('slow');
						}
					}
					
				} 
				$(elem).on({
					click : function() {
						var className = $(this).attr('class'),
							domEl = self.nArray[self.count++];
						
					
						/* to do */ $(elem).not(this).hide();
						self.getItem(className, domEl);
						
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
			}
		 }
	
		 this.each(function(i) {
			if ( i !== 0 && i !== 1) { 
				app.nArray.push(this);
			} else {
				if ( i == 0 ) {
					$(this).addClass(options.primaryCn);
				} else {
					$(this).addClass(options.secondaryCn);
				}
			}
			app.init(this);	
		 });
		return this;
	};
	
	
	
})(jQuery, window, document);