# Basic

## Navigation

1. [custom-style](./custom-style.md)
1. [body scroll](./body-scroll.md)
1. [width](./width.md)
1. [animate](./animate.md)
1. [confirm](./confirm.md)

## title&tool

> element has `data-r-dialog-close="true"`,will trigger onChange.

```html
tool={(
    <div>
        <span className="r-dialog-btn" data-r-dialog-close="true">Cancel</span>
    </div>
)}
```

<div id="example__title-tool_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './title-tool.demo.js'
} -->
[./title-tool.demo.js](./title-tool.demo.js)

### Button style optional

````html
<span class="r-dialog-btn">default</span>
<span class="r-dialog-btn r-dialog-btn--primary">r-dialog-btn r-dialog-btn--primary</span>
<span class="r-dialog-btn r-dialog-btn--info">r-dialog-btn r-dialog-btn--info</span>
<hr/>
<span class="r-dialog-btn r-dialog-btn--warning">r-dialog-btn r-dialog-btn--warning</span>
<span class="r-dialog-btn r-dialog-btn--danger">r-dialog-btn r-dialog-btn--danger</span>
<span class="r-dialog-btn r-dialog-btn--link">r-dialog-btn r-dialog-btn--link</span>
````

## close&maskAllowClose


<div id="example__close-maskAllowClose_node" class="fast-flow-demo">loading...</div>

<!--MR-R {
    type: "pre",
    file: './close-maskAllowClose.demo.js'
} -->
[./close-maskAllowClose.demo.js](./close-maskAllowClose.demo.js)
