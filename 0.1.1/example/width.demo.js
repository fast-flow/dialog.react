var React = require('react')
var Dialog = require('dialog.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false,
            show80: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog
                    title="width"
                    style={{
                        width: 400
                    }}
                    show={self.state.show}
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true">Close</span>
                        </div>
                    )}
                     >
                    width: "400px"
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                }} >width:"400px"</button>
                <hr/>
                <Dialog
                    title="width"
                    style={{
                        width: "80%"
                    }}
                    show={self.state.show80}
                    onClose={function () {
                        self.setState({
                            show80: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true">Close</span>
                        </div>
                    )}
                     >
                    width: "80%"
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show80: true
                        })
                }} >width:"80%"</button>
            </div>
        )
    }
})
module.exports = App
