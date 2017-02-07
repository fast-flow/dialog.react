var React = require('react')
var Dialog = require('dialog.react').default
var ReactDOM = require('react-dom')
var commandDialog = function (type, settings, callback) {
    var TempCompoenent = React.createClass({
        getInitialState: function () {
            return {
                show: true
            }
        },
        render: function () {
            var self = this
            var tool
            if (type === 'confirm') {
                tool = (
                    <div style={{textAlign: 'center'}} >
                        <button onClick={function () {
                            self.setState({
                                show: false
                            })
                            settings.onConfirm()
                        }} className="r-dialog-btn r-dialog-btn--primary">
                            确认
                        </button>
                        <button data-r-dialog-close="true" className="r-dialog-btn r-dialog-btn--primary">
                            取消
                        </button>
                    </div>
                )
            }
            return (
                <Dialog
                    style={{width: 400, textAlign: 'center'}}
                    show={self.state.show}
                    tool={tool}
                    title={(<strong>{settings.title}</strong>)}
                    onClose={function () {
                        self.setState({
                            show: false
                        })
                        if (settings.onClose) {
                            settings.onClose()
                        }
                    }}
                 >
                    {
                        type !== 'confirm'?
                        (
                            <div className={"iconfont icon-" + type}></div>
                        ):null
                    }
                    {settings.content}
                </Dialog>
            )
        }
    })
    ReactDOM.render((
        <TempCompoenent />
    ),
    document.createElement('div'))
}
var App = React.createClass({
    render: function () {
        var self = this
        return (
            <div>
                <button onClick={function () {
                    commandDialog('success', {
                        title: '操作成功',
                        content: '数据删除成功',
                        onClose: function () {
                            console.log('success 关闭')
                        }
                    })
                }} className="r-dialog-btn r-dialog-btn--primary"> success </button>
                <hr />
                <button onClick={function () {
                    commandDialog('info', {
                        title: '提示',
                        content: '提示消息',
                        onClose: function () {
                            console.log('info 关闭')
                        }
                    })
                }} className="r-dialog-btn r-dialog-btn--info"> info </button>
                <hr />
                <button onClick={function () {
                    commandDialog('danger', {
                        title: '密码错误',
                        content: '您输入的密码错误',
                        onClose: function () {
                            console.log('danger 关闭')
                        }
                    })
                }} className="r-dialog-btn r-dialog-btn--danger"> danger </button>
                <hr />
                <button onClick={function () {
                    commandDialog('warning', {
                        title: '到期提醒',
                        content: '您的账户将于 2017年02月07日 到期',
                        onClose: function () {
                            console.log('warning 关闭')
                        }
                    })
                }} className="r-dialog-btn r-dialog-btn--warning"> warning </button>
                <hr />
                <button className="r-dialog-btn" onClick={function () {
                    commandDialog('confirm', {
                        title: 'confirm delete',
                        content: 'delete user someone',
                        onConfirm: function () {
                            console.log('confirm delete someone')
                        },
                        onClose: function () {
                            console.log('someone cancel')
                        }
                    })
                }} >confirm</button>
            </div>
        )
    }
})
module.exports = App
