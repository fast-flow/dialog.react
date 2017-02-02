var React = require('react')
var Dialog = require('dialog.react').default
var $ = require('jquery')
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false
        }
    },
    render: function () {
        var self = this
        var animateOptions = {
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
        return (
            <div>
                <Dialog
                    animate={animateOptions}
                    show={self.state.show}
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                     >
                    animate
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                }} >animate</button>
            </div>
        )
    }
})
module.exports = App
