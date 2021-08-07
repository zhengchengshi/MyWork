import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './todo.css'
export default class todo extends Component {
    
    //状态初始化
    state = {todos:[
        {id:'01',name:'吃饭',done:true},
        {id:'02',name:'打代码',done:false},
        {id:'03',name:'睡觉',done:true},
        {id:'04',name:'逛街',done:false}
    ]}
    /**addTodo用于添加一个todo，接受的参数是todos中的todo对象 */
    addTodo=(todoObj)=>{
        //获取原todo
        const{todos}=this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }
    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        //获取原todos
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            //*匹配处理数据，指定让选中的单选框的item done改动，其他的原封不动
            //不然所有的done都会全部改变
            if(todoObj.id===id){
                return{...todoObj,done}
            }
            else return todoObj
        })
        
        //改变todos数据
        this.setState({todos:newTodos})
    }
    //用于删除一个todo
    deleteTodo=(id)=>{
        //取到todos
        const {todos} = this.state
        //删除指定id的todo对象,filter过滤id匹配的数组
        const newtodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        //更新状态
        this.setState({todos:newtodos})
    }

    checkAllTodo = (done)=>{
        //取到todos
        const{todos} = this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return{...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    //用于清除所有已完成
    clearAllDone=()=>{
        const{todos} = this.state
        //数组过滤，过滤已完成的todo
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <div id="root">
                    <div className="todo-container">
                        <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        {/*将状态中的todos解构赋值传给List组件*/}
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


