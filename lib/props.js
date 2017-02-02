import { PropTypes, createElement } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            title: '',
            tool: '',
            close: '×',
            // '.r-dialog-mask--hide'
            maskClassName: 'r-dialog-mask--simple',
            className: 'r-dialog--simple',
            rootClassName: '',
            show: false,
            onClose: function () {},
            prefixClassName: 'r-dialog',
            showBodyStyle: {
               overflow: 'hidden'
            },
            style: {
               width: '700px'
            },
            maskAllowClose:true,
            animate:{},
            // For the time being only true
            maskAlwaysShow: true
        },
        propTypes: {
            title: PropTypes.oneOfType([
                PropTypes.boolean,
                PropTypes.string,
                PropTypes.element
            ]),
            tool: PropTypes.oneOfType([
                PropTypes.boolean,
                PropTypes.string,
                PropTypes.element
            ]),
            close: PropTypes.oneOfType([
                PropTypes.boolean,
                PropTypes.string,
                PropTypes.element
            ]),
            maskAllowClose: PropTypes.boolean,
            className: PropTypes.string,
            maskClassName: PropTypes.string,
            prefixClassName: PropTypes.string,
            onClose: PropTypes.func,
            show: PropTypes.boolean,
            showBodyStyle: PropTypes.object,
            style: PropTypes.object,
            maskAllowClose: PropTypes.boolean,
            // animate format https://github.com/react-component/animate/tree/2.3.1
            animate: PropTypes.object,
            maskAlwaysShow: PropTypes.boolean
        }
    })
}
