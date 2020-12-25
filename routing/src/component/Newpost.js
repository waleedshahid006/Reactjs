import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteP} from './PostAction'

class Newpost extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('Conn');
    }

    render() {

        const post = this.props.post ? (
            <div className= "post"> 
            <h4 className= "center"> {this.props.post.title}  </h4>
            <p> {this.props.post.body}</p>
            <div className= "center">
                <button className= "btn grey" onClick= {this.handleClick}>
                    DELETEE POSTT
                </button>

            </div>
            </div> 
        ) : (
            <div className="container">
                Loading post...
            </div>
        )
  
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state , ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post : state.posts.find(post => post.id === id)
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deleteP(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newpost)
