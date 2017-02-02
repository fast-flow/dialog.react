# Custom style

If you want to completely customize the style,you need a reference [lib/index.css](../lib/index.css),and using the props.className props.prefixClassName.


## Bootstrap

<div id="example__custom-style_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './custom-style.demo.js'
} -->
[./custom-style.demo.js](./custom-style.demo.js)


````css
html .m-dialog--bootstrap {
    z-index: 1010;
}
html .m-dialog-mask--bootstrap {
    z-index: 1010;
    background-color:black;
    opacity: .5;
    filter:alpha(opacity=50);
}
html .m-dialog--bootstrap .r-dialog {
    font-size:1em;
    border-radius: .2em;
    margin:30px auto;
    border:1px solid #999;
    border:1px solid rgba(1,1,1,.8);
    background-color:white;
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
}

html .m-dialog--bootstrap .r-dialog-title {
    color:black;
    font-size:18px;
    font-weight: bold;
    border-bottom:1px solid #EEE;
    position: relative;
    line-height: 1.8em;
    padding:15px;
}
html .m-dialog--bootstrap .r-dialog-close {
    display: block;
    cursor: pointer;
    border: 0;
    background: transparent;
    font-size: 1.5em;
    position: absolute;
    padding-left: 1em;
    padding-right: 1em;
    right: 0;
    top: 0;
    font-weight: 700;
    line-height: 2.7em;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
    text-decoration: none;
}
html .m-dialog--bootstrap .r-dialog-bd {
    padding: 1em;
}
html .m-dialog--bootstrap .r-dialog-tool {
    border-top:1px solid #EEE;
    padding: .3em;
}
html .m-dialog--bootstrap .r-dialog-tool {
    padding-top: 10px;
    padding-bottom: 10px;
}

html .m-dialog--bootstrap .r-dialog-btn {
    padding:.5em 1em;
    font-size: 1em;
}
````

## rootClassName

> If you don't want to hide the navigation bar, the use of `rootClassName`

````css
.m-dialog-rootClasssNameExample {
    position: fixed;
    top:0;
    margin-top: 60px;
    margin-left: 200px;
    left:0;
    width:100%;
    height: 100%;
    z-index: 1010;
    overflow: hidden;    
}
.m-dialog-rootClasssNameExample .r-dialog-mask,
.m-dialog-rootClasssNameExample .r-dialog-wrap {
    position: absolute;
}
.m-dialog-rootClasssNameExample .r-dialog-wrap {
    margin-top: -30px;
    margin-left: -100px
}

````

<div id="example__rootClassName_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './rootClassName.demo.js'
} -->
[./rootClassName.demo.js](./rootClassName.demo.js)


## Do not mask

````css
/* Internet explorer does not support: transform */
html .m-dialog--bodyclickable {
    width: auto;
    height: auto;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
html .m-dialog--bodyclickable .r-dialog {
    margin: 0;
}
````

<div id="example__dontMask_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './dontMask.demo.js'
} -->
[./dontMask.demo.js](./dontMask.demo.js)


## prefixClassName

Completely custom styles with `prefixClassName`
