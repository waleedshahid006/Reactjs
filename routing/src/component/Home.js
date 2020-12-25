import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import amir from '../amir.png'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }
    render(){
        const { posts } = this.state;
        const postlist = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src= {amir} alt="Amir Bhai" />
                        <div classname="card-content"> 
                            <Link to= {'/' + post.id} > 
                            <span className ="card-title"> {post.title} </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            } )
        ) : (
            <div className="center"> NOOO POSTT YETTTT</div>
            )
        
        return (
            <div className="container home">
                <h2 className="center">HOMEEEEE</h2>
                {postlist}
            </div> 
        )
    }
}

export default Home