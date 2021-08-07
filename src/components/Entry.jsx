import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Entry.css'
export default class Entry extends Component {
    submit =()=>{
        // 取输入的value值并更名为id
        const {value:id} = this.getId
        
        console.log(id)
    }
    render() {
        return (
            <div>
                <div id="login-box">
                    <h1>TODOLIST</h1>
                    <div className="form">
                        <div className="item">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            <input type="text" ref={data=>this.getId = data} placeholder="请输入一串标识以便数据存储" />
                        </div>
                    </div>
                    <button onClick={this.submit}><Link id="my_login" to="todo">Login</Link></button>
                </div>
            </div>
        )
    }
}
