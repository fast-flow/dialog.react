require('./index.css')
import {Component} from "react"
import props from "./props"
import classNames from "classnames"
import "./index.css"
class Dialog extends Component {
    wrapClick = (e) => {
        const self = this
        if (self.props.maskAllowClose && e.target === e.currentTarget) {
            self.props.onClose.bind(this)()
        }
        if (e.target.getAttribute('data-r-dialog-close')) {
            self.props.onClose.bind(this)()
        }
    }
    render() {
        const self = this
        const props = self.props
        const state = self.state
        let pcls = props.prefixClassName
        return (
            <div ref="-wrap" className={classNames({
                [pcls + '-wrap']: true,
                [props.className]: true
            })}
                onClick={self.wrapClick}
             >
                <div ref="dialog" className={[pcls]} style={props.style}  >
                    <div className={[pcls + '-hd']} >
                        <div className={[pcls + '-hd-title']} >
                            {props.title}
                        </div>
                        {
                            props.close == false
                            ? null
                            : (
                                <span className={[pcls + '-hd-close']} onClick={self.props.onClose.bind(this)} >{props.close}</span>
                            )
                        }
                    </div>
                    <div className={[pcls + '-bd']} >
                        {props.children}
                    </div>
                    <div className={[pcls + '-tool']} >
                        {props.tool}
                    </div>
                </div>
            </div>
        )
    }
}
props(Dialog)
export default Dialog
module.exports = Dialog
