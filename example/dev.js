var ReactDOM = require('react-dom')
var render = ReactDOM.render

// title-tool
;(function (node) {
    if (!node) {return}
    require(['./title-tool.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__title-tool_node'))

// close-maskAllowClose
;(function (node) {
    if (!node) {return}
    require(['./close-maskAllowClose.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__close-maskAllowClose_node'))

// custom-style
;(function (node) {
    if (!node) {return}
    require(['./custom-style.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__custom-style_node'))


// custom-style: rootClassName
;(function (node) {
    if (!node) {return}
    require(['./rootClassName.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__rootClassName_node'))

// custom-style dontMask
;(function (node) {
    if (!node) {return}
    require(['./dontMask.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__dontMask_node'))

// body-scroll
;(function (node) {
    if (!node) {return}
    require(['./body-scroll.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__body-scroll_node'))


// width
;(function (node) {
    if (!node) {return}
    require(['./width.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__width_node'))

// animate
;(function (node) {
    if (!node) {return}
    require(['./animate.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__animate_node'))

// confrim
;(function (node) {
    if (!node) {return}
    require(['./confirm.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__confirm_node'))
