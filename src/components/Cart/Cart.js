import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart =()=>{
    const cartItems = <ul className={classes['cart-items']}> {[{id:'c1', name:'Musharrf', amount:2, price:12.99}
].map(meal=><li>{meal.name}</li>)}</ul>
    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
<button className={classes['button--alt']}>Cancel</button>
<button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;