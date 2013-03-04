var VoteforMe = (function() {
    
    var domElements = $('ul li');
    var lists = [];
    
    function test() {
      return lists.push(domElements);   
    }
    
    return {
        init : function() {
            test();   
            for (var i=0; i<lists.length; i++) {
                 console.log('lists ' + lists[i]);
           }
        }
    }
    
})();

$(function(){
    VoteforMe.init();    
});
