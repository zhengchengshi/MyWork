import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckedAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }
    //清除已完成回调
    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        //计算一下已完成的个数
        //reduce传两个参数，一个回调，一个做统计时的初始值，reduce回调中传两个值，pre是上一次函数调用时的返回值，todo是当前调用函数的返回值
        //因为上一次调用函数没有，所以为0
        //done为true则+1，false则+0
        const doneCount = todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
        //总数
        const total = todos.length
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        {/**注意：这里只能用checked，defaultChecked只在第一次奏效
                         * 后面就算判断为true了仍为第一次的未勾选
                         * checked为最后一次勾选判断
                         * 但是直接用checked就写死了，需要用onChange才行
                        */}
                        <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount===total&&total!==0}/>
                    </label>
                    <span>
                    <span>已完成{doneCount}</span> / 全部{total}</span>
                    <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}
