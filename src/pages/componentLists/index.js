import React from "react";
import List from "./components/list";
import './index.less'

const components = [
    {
        text: '按钮',
        type: 'button',
        icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
        value: '默认按钮',
        config: [
            {
                label: '按钮文案',
                type: 'input',
                value: '默认按钮'
            },
            {
                label: '字体大小',
                type: 'inputNumber',
                value: '14',
                style: 'fontSize'
            },
            {
                label: '圆角',
                type: 'inputNumber',
                value: '4',
                style: 'borderRadius'
            }
        ]
    }, {
        text: 'Tab',
        type: 'tab',
        icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
        value: ['tab1', 'tab2'],
        config: [
            {
                label: 'Tab1文案',
                type: 'input',
                value: 'tab1'
            },
            {
                label: 'Tab2文案',
                type: 'input',
                value: 'tab2'
            },
        ]
    }
]
function ComponentLists() {

    return (
        <div className="component">
            <div className="component-lists">
                {
                    components.map((item, index) => {
                        return (
                            <List item={item} key={`component-${index}`}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ComponentLists