import { Component } from "react"
import classNames from "classNames"

class Mask extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div className={classNames({
                [`${pcls}-mask`]: true,
                [self.props.maskClassName]: self.props.maskClassName
            })}  ></div>
        )

    }
}
export default Mask
