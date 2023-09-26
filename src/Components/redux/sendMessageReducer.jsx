let initialState = {
  newMessageBody: "",
  messageData: [],
};

const sendMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND-MESSAGE":
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messageData.push({ id: 2, message: body });
      return state;
    case "UPDATE-NEW-MESSAGE-BODY":
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }

  // if(action.type === 'SEND-MESSAGE'){
  //     let body = state.newMessageBody;
  //     state.newMessageBody = '';
  //     state.messageData.push({id:2, message: body});
  // }else if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
  //     state.newMessageBody = action.body;
  // }
  // return state
};

export const updateNewMessage = (txt) => {
  // debugger
  if (txt) {
    return { type: "UPDATE-NEW-MESSAGE-BODY", body: txt };
  } else {
    return { type: "SEND-MESSAGE" };
  }
};

export default sendMessageReducer;
