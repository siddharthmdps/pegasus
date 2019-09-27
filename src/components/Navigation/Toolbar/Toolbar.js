import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div className={classes.LogoBox}>
            <a href='/'>Pegasus@SIM</a>
        </div>
        <nav>
            <NavigationItems drawer={props.toggleDrawer} showDiary={props.showDiary}/>
        </nav>
    </header>
);

export default toolbar;