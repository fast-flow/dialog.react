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
                    title="rootClassName"
                    style={{width:200}}
                    show={self.state.show}
                    rootClassName="m-dialog-rootClasssNameExample"
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                     >
                    Don't mask navigation
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                    }} >rootClassName</button>
            </div>
        )
    }
})
module.exports = App
