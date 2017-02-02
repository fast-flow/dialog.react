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
                    show={self.state.show}
                    rootClassName="m-dialog-rootClasssNameExample"
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
