import { Component } from "react"
import classNames from "classnames"

class Mask extends Component {
    rootClick () {
        const self = this
        self.props.onClose.bind(this)()
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div className={classNames({
                [`${pcls}-mask`]: true,
                [self.props.maskClassName]: self.props.maskClassName
            })} onClick={self.rootClick}  ></div>
        )

    }
}
export default Mask
