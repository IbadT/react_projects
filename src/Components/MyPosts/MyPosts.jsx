import React from "react";
import s from "./MyPosts.module.css";
import { actionCreator } from "../redux/addPostReducer";


const Post = (props) => {
  return (
    <div className={s.wrapperPosts}>
      <img className={s.post} alt="#" src="https://html5css.ru/howto/img_avatar.png" />
      <span>{props.text}</span>
      <div>{props.likeCount}</div>
    </div>
  );
};

const MyPosts = (props) => {
  let postElement = props.posts.map((i) => <Post text={i.text} likeCount={i.likeCount} />);
  let myRef = React.createRef();

  let showRef = () => {
    // let refValue = myRef.current.value;
    // props.addPost(refValue);
    // props.dispatch({type : 'ADD-POST'})
    props.dispatch(actionCreator())

  };

  let onChangeInput = () => {
    let text = myRef.current.value;
    // this.updateNewPost(text)
    // props.dispatch({type : 'UPDATE-NEW-POST', text : text})
    props.dispatch(actionCreator(text))
  }

  let forFocus = () => {
    myRef.current.value = ''
  }
  return (
    <div className={ s.container }>
      <p className={ s.text }>My posts</p>
      <div>
        <input onFocus={ forFocus } 
               onChange={ onChangeInput } 
               ref={myRef} 
               className={s.input}
               value={props.newPostText} 
               placeholder='Hello' />
      </div>
      <div>
        <button onClick={ showRef } className={s.button}>
          Send
        </button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;










// class MyPosts extends React.Component {
//   constructor(){
//     super();
//   }
//   render() {
//     return (
//       <div className={s.container}>
//         <p className={s.text}>My posts</p>
//         <div>
//           <input className={s.input} placeholder="your news..." />
//         </div>
//         <div>
//           <button className={s.button}>Send</button>
//         </div>
//       </div>
//     );
//   }
// }