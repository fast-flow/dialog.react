var React = require('react')
var ReactDOM = require('react-dom')
var Dialog = require('dialog.react').default
import $ from "jquery"
var App = React.createClass({
    getInitialState: function() {
        return {
            textCloseShow: false,
            emptyCloseShow: false,
            maskAllowCloseShow: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog
                    close="close"
                    show={self.state.textCloseShow}
                    onClose={function (){
                        self.setState({
                            textCloseShow: false
                        })
                    }}
                     >
                    <div>
                    虢国夫人承主恩，平明骑马入宫门。
                    却嫌脂粉污颜色，淡扫峨眉朝至尊。
                    </div>
                </Dialog>
                <button className="r-dialog-btn r-dialog-btn--warning" onClick={function () {
                        self.setState({
                            textCloseShow: true
                        })
                }} >close:"close"</button>
                <hr/>
                <Dialog
                    close={false}
                    show={self.state.emptyCloseShow}
                    onClose={function (){
                        self.setState({
                            emptyCloseShow: false
                        })
                    }}
                     >
                    <div>
                    禁门宫树月痕过，媚眼惟看宿鹭巢。
                    斜拔玉钗灯影畔，剔开红焰救飞蛾。
                        <br/>
                        <strong>Please click on the layer mask to close the dialog</strong>
                    </div>
                </Dialog>
                <button className="r-dialog-btn r-dialog-btn--danger" onClick={function () {
                        self.setState({
                            emptyCloseShow: true
                        })
                }} >close:false</button>
                <hr/>
                <Dialog
                    maskAllowClose={false}
                    show={self.state.maskAllowCloseShow}
                    onClose={function (){
                        self.setState({
                            maskAllowCloseShow: false
                        })
                    }}
                     >
                    <div>
                    日光斜照集灵台，红树花迎晓露开。
                    昨夜上皇新授箓，太真含笑入帘来。
                        <br/>
                        <strong>Click on the mask layer will not trigger onClose</strong>
                    </div>
                </Dialog>
                <button className="r-dialog-btn r-dialog-btn--link" onClick={function () {
                        self.setState({
                            maskAllowCloseShow: true
                        })
                }} >maskAllowClose:false</button>
            </div>
        )
    }
})
module.exports = App
