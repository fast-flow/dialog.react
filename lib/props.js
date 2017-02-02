import { PropTypes, createElement } from "react"
import extend from "extend"
export default function (component) {    
    extend(true, component, {
        defaultProps: {
            title: '',
            close: '×',
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
            mask: true,
            maskAllowClose:true,
            animate:{},
            // For the time being only true
            maskAlwaysShow: true,
            tool: createElement('div', {})
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            onClose: PropTypes.func
        }
    })
}
