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
        var emptyStyle = {}
        return (
            <div>
                <Dialog
                    title="body scroll"
                    show={self.state.show}
                    showBodyStyle={emptyStyle}
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
                    Rotate the mouse wheel
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                    }} >body scroll</button>
            </div>
        )
    }
})
module.exports = App
