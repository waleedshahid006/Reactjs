const initState = {
  posts: [
      {id: '1' , title: 'OOP' , body: 'ooooooooooooooooooooooooooooo'},
      {id: '2' , title: 'DWDM' , body: 'dddddddddddddddddddddddddddd'},
      {id: '3' , title: 'ITC' , body: 'iiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
      {id: '4' , title: 'PAS' , body: 'ppppppppppppppppppppppppppppp'}
  ]
}
const rootReducer= (state = initState, action) => {
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
  }  
}
  return state;
}

export default rootReducer