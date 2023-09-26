import React from "react";
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from "./Burger";
import base from "../base";

class App extends React.Component{
    state={
        burgers:{},
        order:{}    
    }

    componentDidMount(){
        const {params} = this.props.match;
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this, 
            state: 'burgers',
        })
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    loadSampleBurgers =() =>{
        this.setState({burgers : sampleBurgers})
    }

    addBurger =(burger) => {
        console.log('addBurger', burger)
        // 1. делаем копию {} state
        const burgers = {...this.state.burgers}
        //2. добавляем новый бергер в переменную(объект) burgers
        burgers[`burger${Date.now()}`] = burger;
        // 3. записать наш новый {} burgers в state
        this.setState({burgers})
    }

    addToOrder = key => {
        //1. copy state
        const order = {...this.state.order}
        //2. добавить ключ к заказу со значением 1 или обновить текущее значение
        order[key] = order[key] + 1 || 1;
        //3. записано новый {} order в state;
        this.setState({order})
    }

    render(){
        return(
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burger"/>
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(item => <Burger key={item} index={item} addToOrder={this.addToOrder} details={this.state.burgers[item]}/>)}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order}/>

                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers}/>

            </div>
        )
    }
}

export default App;