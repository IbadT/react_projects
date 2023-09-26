let initialState = {
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Dmitriy" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valeriy" },
    ],
    newMessageBody: "",
    messageData: [],
  },
  posts: [
    { id: 1, text: "It's first post", likeCount: 1 },
    { id: 2, text: "It's second post", likeCount: 5 },
  ],
  newPostText: "Inpute text",
};

const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let post = {
        id: state.posts.map((i) => (i.id ? i.id : 0)).pop() + 1,
        text: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(post);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST":
      state.newPostText = action.text;
      return state;
    default:
      return state;
  };

    // if(action.type === 'ADD-POST'){
  //     let post = {
  //         id: state.posts.map((i) => (i.id ? i.id : 0)).pop() + 1,
  //         text: state.newPostText,
  //         likeCount: 0,
  //     };
  //     state.posts.push(post);
  //     state.newPostText = "";
  // }else if(action.type === 'UPDATE-NEW-POST'){
  //     state.newPostText = action.text;
  // }
  // return state;
};

export const actionCreator = (text) => {
    if(text){
      return { type : 'UPDATE-NEW-POST', text : text }
    }else{
      return { type : 'ADD-POST' }
    } 
};

export default addPostReducer;