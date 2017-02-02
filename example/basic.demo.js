var React = require('react')
var ReactDOM = require('react-dom')
var Dialog = require('dialog.react').default
import $ from "jquery"
var App = React.createClass({
    getInitialState() {
        return {
            basicShow: false,
            twoShow: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog
                    title="basic"
                    show={self.state.basicShow}
                    onClose={function (){
                        self.setState({
                            basicShow: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true">Cancel</span>
                        </div>
                    )}
                     >
                    <div>
                        秦地罗敷女，采桑绿水边。
                        素手青条上，红妆白日鲜。
                        蚕饥妾欲去，五马莫留连。
                    </div>
                </Dialog>
                <button onClick={function () {
                        self.setState({
                            basicShow: true
                        })
                    }} >title&tool</button>
            </div>
        )
    }
})
module.exports = App
