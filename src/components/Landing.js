import React from "react";
import restaurants from '../sample-restaurants'

class Landing extends React.Component{
    state = {
        display: false,
        title: '',
        url: '',
    }
//this в => ф-ии равен родителю , те Landing
    displayList = () => {
        const {display} = this.state; //диструктурированное присваивание;
        // const display = this.state.display;
        this.setState({display:!display}); //меняем значение на противоположное;
    }

    getTitle = restaurants => {
        const {title, url} = restaurants;
        this.setState({title, url, display: false})
    }   

    goToRestaurant = () => { 
        const {url} = this.state;
        this.props.history.push(`/restaurant/${url}`)
    }

    render(){
        return (
                <div className="restaurant_select">
                    <div className="restaurant_select_top">

                        <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                            {this.state.title ? this.state.title : 'Выберите ресторан'} 
                        </div>
                        {/* если title получен, то оставить title если нет, то оставить эту строку */}
                                
                            <div className="arrow_picker">
                                <div className="arrow_picker-up"></div>
                                <div className="arrow_picker-down"></div>
                            </div>
                        </div>

                    {this.state.display ? (<div className="restaurant_select_bottom">
                        <ul>
                            {restaurants.map(item => <li onClick={() => this.getTitle(item)} key={item.id}>{item.title}</li>)}
                        </ul>
                    </div>):null}
                    {this.state.title && !this.state.display ? <button onClick={this.goToRestaurant}>Перейти в ресторан</button> : null}
                </div>           
        )
    }
}

export default Landing;

// создание элемента(тег, класс, текст)
// React.createElement('p',{className:'text'},'Hello React!!!')




// main
// class landing extends React.Component{
//     render(){
//         return (
//             <div className="restaurant_select">
//                     <div className="restaurant_select_top">

//                         <div className="restaurant_select_top-header font-effect-outline">
//                             Выберите ресторан 
//                         </div>
                                
//                             <div className="arrow_picker">
//                                 <div className="arrow_picker-up"></div>
//                                 <div className="arrow_picker-down"></div>
//                             </div>
//                         </div>

//                     <div className="restaurant_select_bottom">
//                         <ul>
//                             {/* {restaurants.map(item => <li onClick={() => this.getTitle(item)} key={item.id}>{item.title}</li>)} */}
//                             <li>One</li>
//                             <li>Two</li>
//                             <li>Three</li>
//                         </ul>
//                     </div>
//                     <button>Перейти в ресторан</button>
//                 </div> 
//         )
//     }
// }






//main 2
// class Landing extends React.Component{
//     state={
//         display: false,
//         title: '',
//         url: ''
//     }

//     displayList = () => {
//         const {display} = this.state;
//         this.setState({display: !display})
//     }

//     getTitle = restaurants => {
//         const {title,url} = restaurants;
//         this.setState({title, url, display: false}) 
//     }

//     goToRestaurant = () => {
//         console.log('finish')
//     }

//     render(){
//         return (
//             <div className="restaurant_select">
//                      <div className="restaurant_select_top">

//                          <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
//                             {this.state.title ? this.state.title : 'Выберите ресторан'} 
//                         </div>
                                
//                              <div className="arrow_picker">
//                                <div className="arrow_picker-up"></div>
//                                <div className="arrow_picker-down"></div>
//                              </div>
//                         </div>

//                      {this.state.display ? (<div className="restaurant_select_bottom">
//                         <ul>
//                              {restaurants.map(item => <li onClick={()=>this.getTitle(item)} key={item.id}>{item.title}</li>)}
//                         </ul>
//                     </div>) : null}
//                     {this.state.title && this.state.url ? (<button onClick={this.goToRestaurant}>Перейти в ресторан</button>) : null}
//                  </div> 
//         )
//     }
// }