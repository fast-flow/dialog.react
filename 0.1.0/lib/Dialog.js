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
                    {
                        props.title?
                        (
                            <div className={[pcls + '-title']} >
                                {props.title}
                            </div>
                        ):null
                    }
                    {
                        props.close?
                        (
                            <span className={[pcls + '-close']} data-r-dialog-close="true"  >{props.close}</span>
                        )
                        :null
                    }
                    <div className={[pcls + '-bd']} >
                        {props.children}
                    </div>
                    {
                        props.tool?
                        (
                            <div className={[pcls + '-tool']} >
                                {props.tool}
                            </div>
                        ):null
                    }
                </div>
            </div>
        )
    }
}
props(Dialog)
export default Dialog
module.exports = Dialog
