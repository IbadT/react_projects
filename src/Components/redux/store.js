import addPostReducer from './addPostReducer';
import sendMessageReducer from './sendMessageReducer'

let store = {
  _stateData: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valeriy" },
      ],
      newMessageBody : '',
      messageData: [],
    },
    posts: [
      { id: 1, text: "It's first post", likeCount: 1 },
      { id: 2, text: "It's second post", likeCount: 5 },
    ],
    newPostText: "Inpute text",
  },
  
  getState(){
    return this._stateData
  },
  
  _renderEntireTree(){},
  
  // _addPost(){
  //   let post = {
  //     id: this._stateData.posts.map((i) => (i.id ? i.id : 0)).pop() + 1,
  //     text: this._stateData.newPostText,
  //     likeCount: 0,
  //   };
  //   this._stateData.posts.push(post);
  //   this._stateData.newPostText = "";
  //   this._renderEntireTree(this._stateData);
  // },

  // _updateNewPost(text){
  //   this._stateData.newPostText = text;
  //   this._renderEntireTree(this._stateData);
  // },
  
  _subscribe(observer){
    this._renderEntireTree = observer;
  },
  
  dispatch(action){

    this._stateData = addPostReducer(this._stateData, action);
    this._stateData.messagesPage = sendMessageReducer(this._stateData.messagesPage, action)
    this._renderEntireTree(this._stateData)

    // if(action.type === 'ADD-POST'){
    //   // return this._addPost()
    //   let post = {
    //     id: this._stateData.posts.map((i) => (i.id ? i.id : 0)).pop() + 1,
    //     text: this._stateData.newPostText,
    //     likeCount: 0,
    //   };
    //   this._stateData.posts.push(post);
    //   this._stateData.newPostText = "";
    //   this._renderEntireTree(this._stateData);

    // }else if(action.type === 'UPDATE-NEW-POST'){
    //   // return this._updateNewPost(action.text)

    //   this._stateData.newPostText = action.text;
    //   this._renderEntireTree(this._stateData);

    // }else if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
    //   this._stateData.messagesPage.newMessageBody = action.body;
    //   this._renderEntireTree(this._stateData)
    
    // }else if(action.type === 'SEND-MESSAGE'){
    //   let body = this._stateData.messagesPage.newMessageBody;
    //   this._stateData.messagesPage.newMessageBody = '';
    //   this._stateData.messagesPage.messageData.push({id:2, message: body});
    //   this._renderEntireTree(this._stateData)
    
    // }
  }
}

export const actionCreator = (text) => {
  if(text){
    return {
      type : 'UPDATE-NEW-POST',
      text : text
    }
  }else{
    return { type : 'ADD-POST' }
  } 
}

export const updateNewMessage = (txt) => {
  if(txt){
    return { type : 'UPDATE-NEW-MESSAGE-BODY', body : txt }
  }else{
    return {type : 'SEND-MESSAGE'}
  } 
}

export default store;