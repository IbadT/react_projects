import React from 'react';

class Burger extends React.Component{

    handlClick = () => {
        this.props.addToOrder(this.props.index)
    }

    render(){

        const isAvailable = this.props.details.status === 'available'
        return(
            <li className='menu-burger'>
                <div className='image-container'>
                    <img src={this.props.details.image} alt={this.props.details.name}/>
                </div>

                <div className='burger-details'>
                    <h3 className='burger-name'>{this.props.details.name}
                        <span className='price'>{this.props.details.price} ₽</span>
                    </h3>
                    <p>{this.props.details.desc}</p>
                    <button onClick={this.handlClick} className='buttonOrder' disabled={!isAvailable}>{isAvailable ? 'To order(заказать)' : 'Temporarily not'}</button>
                </div>
            </li>
        )
    }
}

export default Burger;