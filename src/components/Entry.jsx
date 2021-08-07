import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import QS from 'qs'
import './Entry.css'
export default class Entry extends Component {
    submit =()=>{
        //axios.defaults.headers = {'Content-Type':'Access-Control-Allow-Origin'}
        const url = 'http://47.94.194.50:8080/cz/sign';
        axios.defaults.timeout = 3000

        axios.post(
            url,
            QS.stringify({id:1}),
        ).then(
            res=>{
                console.log(res)
            },
            err=>{
                console.log(err)
            }
        )
    }
    render() {
        return (
            <div>
                <div id="login-box">
                    <h1>TODOLIST</h1>
                    <div className="form">
                        <div className="item">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            <input type="text" ref={data=>this.getId = data} placeholder="数据库坏了，直接登入" />
                        </div>
                    </div>
                    <button onClick={this.submit}><Link id="my_login" to="todo">Login</Link></button>
                </div>
            </div>
        )
    }
}
