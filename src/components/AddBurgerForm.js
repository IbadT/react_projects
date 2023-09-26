import React from 'react';

class AddBurgerForm extends React.Component{

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imagRef = React.createRef()

    createBurger = event => {
        event.preventDefault()
        // console.log(this.nameRef.current.value)
        const burger = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value || 0),
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            imag : this.imagRef.current.value,
        }
        
        this.props.addBurger(burger)
        event.currentTarget.reset()
    }

    render(){
        return (
            <form className='burger-edit' onSubmit={this.createBurger}>
                <input ref={this.nameRef} name='name' type='text' placeholder='Name' autoComplete='off'/>
                <input ref={this.priceRef} name='price' type='text' placeholder='Price' autoComplete='off'/>
                <select ref={this.statusRef} name='status' className='status'>
                    <option value='available'>available</option>
                    <option value='unavailable'>unavailable</option>
                </select>
                <textarea ref={this.descRef} name='desc' placeholder='Name'></textarea>
                <input ref={this.imagRef} name='image' type='text' placeholder='Image' autoComplete='off'/>
                <button type='submit'> + Add to Menu</button>
            </form>
        )
    }
}

export default AddBurgerForm;