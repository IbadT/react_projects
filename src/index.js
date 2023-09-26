import ReactDOM from 'react-dom';
import App from './App'
import store from './Components/redux/reduxStore'

export let renderEntireTree = (stateData) => {
    ReactDOM.render(
        <App dispatch={store.dispatch.bind(store)}
             store={store}
             //  updateNewPost={store.updateNewPost.bind(store)} 
            //  addPost={store.addPost.bind(store)}
             stateData={stateData}/>, 
        document.getElementById('root'))
}

renderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
})