import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className='top'>
                <div className='wrap'>
                    <div className='header-content'>

                        <div className='header-rating'>
                            <div className='header-rating-tag'>Rating: </div>
                            <div className='header-rating-icon'>★★★★★</div>
                        </div>

                        <div className='header-devider'></div>
                        <h1 className='font-effect-fire-aimation'>{this.props.title}</h1>
                        <h3>
                            <span>
                                Fast diliver
                                <span className='sub-header'>#Burgers</span>
                            </span>
                        </h3>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

// {this.props.title} обращаться к пропсам...