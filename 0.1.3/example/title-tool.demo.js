var React = require('react')
var ReactDOM = require('react-dom')
var Dialog = require('dialog.react').default
import $ from "jquery"
var App = React.createClass({
    getInitialState: function() {
        return {
            titleToolShow: false,
            titleShow: false,
            show: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog
                    title="basic"
                    show={self.state.titleToolShow}
                    onClose={function (){
                        self.setState({
                            titleToolShow: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true">Cancel</span>
                        </div>
                    )}
                     >
                    <div>
                        君自故乡来，应知故乡事。
                        来日绮窗前，寒梅著花未？
                    </div>
                </Dialog>
                <button className="r-dialog-btn" onClick={function () {
                        self.setState({
                            titleToolShow: true
                        })
                    }} >title&tool</button>
                <hr/>
                <Dialog
                    title="basic"
                    show={self.state.titleShow}
                    onClose={function (){
                        self.setState({
                            titleShow: false
                        })
                    }}
                     >
                    <div>
                        故国三千里，深宫二十年。
                        一声何满子，双泪落君前。
                    </div>
                </Dialog>
                <button className="r-dialog-btn r-dialog-btn--primary" onClick={function () {
                        self.setState({
                            titleShow: true
                        })
                    }} >title</button>
                <hr/>
                <Dialog
                    show={self.state.show}
                    onClose={function (){
                        self.setState({
                            show: false
                        })
                    }}
                     >
                    <div>
                        乘兴南游不戒严，九重谁省谏书函。
                        春风举国裁宫锦，半作障泥半作帆。
                    </div>
                </Dialog>
                <button className="r-dialog-btn r-dialog-btn--info" onClick={function () {
                        self.setState({
                            show: true
                        })
                    }} >title&tool empty</button>

            </div>
        )
    }
})
module.exports = App
