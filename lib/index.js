import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"
import Body from "body.react"
import Dialog from "./Dialog"
import Mask from "./Mask"
import Animate from 'rc-animate'
class DialogWrap extends Component {
    componentDidUpdate(prevProps) {
        const self = this
        let props = self.props
        for(let attr in props.showBodyStyle) {
            let value = props.showBodyStyle[attr]
            if (props.show) {
                // 通过延迟解决多个dialog出现时候，其他dialog清空了当前dialog设置的body样式
                // TODO: 目前只是临时解决方案，在多个dialog showBodyStyle 不同时会冲突。有空了需要设计一个完美的解决方案
                setTimeout(function () {
                    document.body.style[attr] = value
                }, 10)
            }
            else {
                document.body.style[attr] = ''
            }
        }
    }
    render() {
        const self = this
        return (
            <Body className={self.props.show?self.props.rootClassName:null} >
                <Animate animation={self.props.animate} >
                {
                    self.props.show?
                    (
                        <div>
                            <Mask {...self.props}></Mask>
                            <Dialog {...self.props}>
                                {self.props.children}
                            </Dialog>
                        </div>
                    ):null
                }
                </Animate>
            </Body>
        )
    }
}
props(DialogWrap)
export default DialogWrap
