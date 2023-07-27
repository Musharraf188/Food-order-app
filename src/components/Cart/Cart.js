import classes from './Cart.module.css';

const Cart =()=>{
    const cartItems = <ul className={classes['cart-items']}> {[{id:'c1', name:'Musharrf', amount:2, price:12.99}
].map(meal=><li>{meal.name}</li>)}</ul>
    return <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
<button className={classes['button--alt']}>Cancel</button>
<button className={classes.button}>Order</button>
        </div>
    </div>
}

export default Cart;