{
    appear: function(node, done){
        node.style.display='none';
        node.style.position = 'relative'
        node.style.zIndex= 1050
        setTimeout(function () {
            node.style.position = ''
            node.style.zIndex= ''
        }, 400)
        $(node).fadeIn(done);
         return {
           stop:function(){
             // jq will call done on finish
             $(node).stop(true);
           }
         };
    },
    enter: function(){
        console.log('enter')
        this.appear.apply(this,arguments);
    },
    leave: function(node, done){
        node.style.position = 'relative'
        node.style.zIndex= 1050
        setTimeout(function () {
            node.style.position = ''
            node.style.zIndex= ''
        }, 400)
         $(node).fadeOut(done);
         return {
           stop:function(){
             // jq will call done on finish
             $(node).stop(true);
           }
         };
    }
}
