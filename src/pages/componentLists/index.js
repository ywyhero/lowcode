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
                type: 'text',
                lists: [
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
            }
        ]
    }, {
        text: 'Tab',
        type: 'tab',
        icon: 'https://img01.yzcdn.cn/upload_files/2022/06/17/FjAs6eTmbK_4lQRI3GYXu97Fj_B_.png',
        value: ['tab1', 'tab2'],
        imgs: ['https://image-c-dev.weimobwmc.com/qa-saas-wxbiz/ccb78c9dcec649d99d3accdf265d4a15.jpg', 'https://image-c-dev.weimobwmc.com/qa-saas-wxbiz/acff8551572e4c888f0b73ddb62fc26a.jpg'],
        config: [
            {
                type: 'text',
                lists: [
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
            },
            {
                type: 'upload',
                lists: [
                    {
                        label: 'Tab1图片',
                        type: 'upload',
                        fileList: [{
                            uid: '-1',
                            name: 'image.png',
                            status: 'done',
                            url: 'https://image-c-dev.weimobwmc.com/qa-saas-wxbiz/ccb78c9dcec649d99d3accdf265d4a15.jpg'
                        }]
                    },
                    {
                        label: 'Tab2图片',
                        type: 'upload',
                        fileList: [{
                            uid: '-1',
                            name: 'image.png',
                            status: 'done',
                            url: 'https://image-c-dev.weimobwmc.com/qa-saas-wxbiz/acff8551572e4c888f0b73ddb62fc26a.jpg'
                        }]
                    },
                ]
            }
           
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