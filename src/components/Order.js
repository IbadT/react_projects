import { object } from 'prop-types';
import { obj } from 'pumpify';
import React from 'react';
import Shipment from './Shipment';

class Order extends React.Component{

    renderOrder = item => {
        const burger = this.props.burgers[item];
        const count = this.props.order[item];

        const isAvailable = burger && burger.status === 'available';
        if(!isAvailable){
            return <li key={item} className="unavailable">
                Sorry ,{burger ? burger.name : 'Burger'} temporarily unavailable
            </li>
        }

        return  <li key={item}>
            <span>
                <span>{count}</span>
                 it. {burger.name}
                <span> {count * burger.price} ₽</span>
                <button className='cancelItem'>&times;</button>
            </span>
        </li>
    }

    render(){
        const orderId = Object.keys(this.props.order)

        const total = orderId.reduce((acc,cur)=>{
            const burger = this.props.burgers[cur];
            const count = this.props.order[cur];
            const isAvailable = burger && burger.status === 'available';
            if(isAvailable){
                return acc + burger.price * count;
            }else{
                return acc
            }
            
        },0)
        return (
            <div className='order-wrap'>
                <h2>Your Order</h2>
                <ul className='order'>
                    {orderId.map(this.renderOrder)}
                </ul>
                
                {total>0 ? (
                    <Shipment total={total}/>
                ) : (
                    <div className='nothingSelected'>
                        Choose a dish and add to the order
                    </div>
                )}

            </div>
        )
    }
}

export default Order;