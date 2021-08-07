import React, { Component } from 'react'
import Item from'../Item/index.jsx'
import './index.css'
import PropTypes from 'prop-types'
export default class List extends Component {
//对接收的props进行类型、必要性的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render() {
        //从App组件中接值
        const {todos,updateTodo,deleteTodo}= this.props
        console.log(todos)
        return (
            <div>
                <ul className="todo-main">
                    {
                        //从传入的props拿到todos，动态渲染todos到Item组件中
                        todos.map((todo)=>{
                            //批量传递的重要性完全显现，太多的属性会导致工程量巨大
                            //这样就能实现Item组件的复用，效率高
                            return(<Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
