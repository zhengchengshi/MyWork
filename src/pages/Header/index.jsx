import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
//引入nanoid，产生一个随机数
import{nanoid}from 'nanoid'
export default class Header extends Component {

    //对接收的props进行类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    //键盘事件的回调
    handleKeyUp=(event)=>{
        //事件对象解构赋值，拿到keyCode、target
        const{keyCode,target} = event
        //手写判断，回车地keyCode是13，所以ifkeyCode===13逻辑才执行
        if(keyCode===13){
            //添加的数据不可为空，trim为去空格
            if(target.value.trim()===''){
                alert('输入不能为空');
                //终止后续代码
                return
            }
            //准备一个todo对象
            const todoObj = {id:nanoid(),name:target.value,done:false}           
            //将todoObj传递给父组件
            this.props.addTodo(todoObj)
            //console.log(target.value,keyCode)
        }
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    {/**onKeyUp事件能够更精准地判断是否输入完毕 */}
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        )
    }
}
