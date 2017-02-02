import { Component } from "react"
import Dialog from "../index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<Dialog className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
