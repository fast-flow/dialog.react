var React = require('react')
var Dialog = require('dialog.react').default
var $ = require('jquery')
var App = React.createClass({
    getInitialState: function () {
        return {
            show: false,
            confirm: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                confirm: {self.state.confirm?"yes":"no"}
                <br />
                <Dialog
                    show={self.state.show}
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                    }}
                    tool={(
                        <div>
                            <span className="r-dialog-btn" data-r-dialog-close="true" >Close</span>
                            <span className="r-dialog-btn r-dialog-btn--primary" onClick={function () {
                                self.setState({
                                    show: false,
                                    confirm: true
                                })
                                /*
                                $.ajax({
                                    type: 'post',
                                    url: '/remove_news'
                                })
                                */
                            }} >Confirm</span>
                        </div>
                    )}
                     >
                    confirm?
                </Dialog>
                <button className="r-dialog-btn" onClick={function() {
                        self.setState({
                            show: true
                        })
                }} >confirm</button>
            </div>
        )
    }
})
module.exports = App
