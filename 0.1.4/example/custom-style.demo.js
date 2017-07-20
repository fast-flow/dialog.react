var React = require('react')
var Dialog = require('dialog.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Dialog
                    title="bootstrap"
                    show={self.state.show}
                    maskClassName="m-dialog-mask--bootstrap"
                    className="m-dialog--bootstrap"
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true" >Close</span>
                            <span className="r-dialog-btn r-dialog-btn--primary">Save</span>
                        </div>
                    )}
                     >
                    bootstrap style
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                    }} >bootstrap</button>
            </div>
        )
    }
})
module.exports = App
