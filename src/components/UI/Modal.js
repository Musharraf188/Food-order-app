import { Fragment } from 'react';
import { ReactDOM } from 'react-dom';
import classes from './Modal.module.css';
const Backdrop =()=>{
    return <div className={classes.backdrop}/>
}

const Modaloverlays =(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');
const Modal =()=>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<Modaloverlays>{props.children}</Modaloverlays>, portalElement)}
    </Fragment>
}

export default Modal;