import React from "react";

class CartItem extends React.Component{
    render()
    {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>
                        Phone
                    </div>
                    <div style={{color: '#777'}}>
                        $ 1100
                    </div>
                    <div style={{color: '#777'}}>
                        Qty: 1
                    </div>
                    <div className="cart-items-action0">
                        {/* Buttons */}
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
        background: "#ccc"
    }
}

export default CartItem;


    // for a class component to be a react component we need to give it the render method
