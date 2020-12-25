import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import amir from '../amir.png'
import {connect} from 'react-redux'

class Conn extends Component {

    render(){
        console.log(this.props)
        const { posts } = this.props;
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
                <h2 className="center">COnnnnn</h2>
                {postlist}
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Conn)