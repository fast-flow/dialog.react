var React = require('react')
var Dialog = require('dialog.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false,
            clickBodyShow: false,
            clickNavShow: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog

                    maskClassName="r-dialog-mask--hide"
                    className="r-dialog--simple m-dialog--debug"

                    title="Don't mask"
                    show={self.state.show}
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                     >
                     离离原上草，一岁一枯荣。
                    野火烧不尽，春风吹又生。
                    远芳侵古道，晴翠接荒城。
                    又送王孙去，萋萋满别情。
                    <br />
                    <strong>But you can not click on the left navigation</strong>
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                }} >{"Don't mask"}</button>
                <hr/>
                <Dialog

                    className="r-dialog--simple m-dialog--bodyclickable m-dialog--debug"
                    maskClassName="r-dialog-mask--hide"

                    title="Don't mask body"
                    show={self.state.clickBodyShow}
                    onClose={function () {
                        self.setState({
                            clickBodyShow: false
                        })
                    }}
                     >
                    <div>
                        <strong>You can click on the elements in the body</strong>
                        <br/>
                            If the body can click, can't let dialog height over the window height,
                        <div style={{
                                "height": "200px",
                                "overflow": "auto"
                            }} >
                            <div style={{
                                    "height": "2000px",
                                    "border": "1px dotted skyblue"
                                }} ></div>
                        </div>
                    </div>
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            clickBodyShow: true
                        })
                }} >{"Don't mask body click body"}</button>
            </div>
        )
    }
})
module.exports = App
