import React, { Fragment } from "react";
import mealsImgae from '../../assest/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header =props=>{
    return <Fragment>
<header className={classes.header}>
<h1>ReactMeals</h1>
<HeaderCartButton />
</header>
<div className={['main-image']}>
<img src={mealsImgae} alt="a table of full of delicious foods."/>
</div>
    </Fragment>
}

export default Header;