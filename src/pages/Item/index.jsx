import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
export default class Item extends Component {
//对接收的props进行类型、必要性的限制
    static propTypes = {
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired

    }

    state = {mouse:false}
    handleMouse = (flag)=>{
        return(
            ()=>{
                this.setState({mouse:flag})
            }
        )
    }
    //传进id并拿到checked值，调用App.js=>Item.jsx的函数
    changeCheck = (id)=>{
        return(
            (event)=>{
                this.props.updateTodo(id,event.target.checked)
            }
        )
    }
    //删除一个todo（不用高阶函数传id）
    handleDelete = (id)=>{
        const {deleteTodo} = this.props
        if(window.confirm('确认删除吗？')){
            deleteTodo(id)
        }
    }
    render() {
        const{mouse}=this.state
        const{name,done,id}=this.props
        return (
            <div style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <li>
                    <label>
                        {/**defaultChecked设置的值可以改变，checked选中后不可改 */}
                        <input type="checkbox" checked={done} onChange={this.changeCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
