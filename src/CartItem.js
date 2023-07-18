import React from "react";

class CartItem extends React.Component{

    constructor()
    {
        super();
        this.state = {
            price: 1100,
            title: "iphone",
            qty: 1,
            img: ""
        }
    }

    increaseQuantity = () => {
        console.log('====================================');
        console.log('this', this.state);
        console.log('====================================');
    }

    render()
    {
        
        const {price, title, qty, img} = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>                   
                        {title}
                    </div>
                    <div style={{color: '#777'}}>
                        $ {price}
                    </div>
                    <div style={{color: '#777'}}>
                        Qty: {qty}
                    </div>
                    <div className="cart-items-action0">
                        {/* Buttons */}
                        <img 
                            className="action-icons" 
                            alt = "increase" 
                            src = "https://uxwing.com/wp-content/themes/uxwing/download/user-interface/minus-round-line-icon.svg" 
                            onClick={this.increaseQuantity}
                        />

                        <img 
                            className="action-icons" 
                            alt = "decrease" 
                            src = "https://uxwing.com/wp-content/themes/uxwing/download/user-interface/plus-round-line-icon.svg"
                        />
                        
                        <img 
                            className="action-icons" 
                            alt = "delete" 
                            src = "https://uxwing.com/wp-content/themes/uxwing/download/user-interface/trash-can-icon.svg"
                        />
                        
                    </div>
                </div>
            </div> 
        );
    }
}

const styles = {
    image: {
        background: "ccc",
        height: 110,
        width: 110,
        borderRadius: 4,
    }
}

export default CartItem;


    // for a class component to be a react component we need to give it the render method
