import React from "react";

function Cart (props){
    const {cartItems,onAdd,onRemove,remove}=props;
    const itemPrice = cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice = itemPrice*0.02;
    const shippingPrice= itemPrice> 16000 ? 0 : 500;
    const totalPrice = itemPrice+taxPrice+shippingPrice;
    return(
        <aside className="block ">
            <h2>Cart Item</h2>
            <div>
                {cartItems.length === 0 &&<div> chưa có sản phẩm trong giỏ hàng </div>}
            </div>
            {cartItems.map((item)=>(
                <div key={item.id} className="row">
                    <div className="col-2">
                        <img className="small1" src={item.image} alt={item.title}/>
                    </div>
                    <div className="col-2 pd" >
                        {item.title}
                    </div>
                    <div className="col-1">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 pd text-right">
                        {item.qty}x ${item.price.toFixed(3)}
                    </div>
                    <div className="remove1 col-1" >
                        <button onClick={()=>remove(item)} className="add">X</button>
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 &&(
                <>
                <hr></hr>
                    <div className="row">
                        <div className="col-2">
                            Giá sản phẩm:
                        </div>
                        <div className="col-1 text-right">
                            ${itemPrice.toFixed(3)}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-2">
                            Thuế sản phẩm:
                        </div>
                        <div className="col-1 text-right">
                            ${taxPrice.toFixed(3)}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-2">
                            Phí ship:
                        </div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(3)}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-2">
                            <strong>Tổng Tiền:</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(3)}</strong>
                        </div>
                    </div>  
                </>
            )}
            
        </aside>
        
    )
}
export default Cart