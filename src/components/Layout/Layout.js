import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = ( props ) => {
    
    return (
        <Aux>
        <Toolbar toggleDrawer={props.toggleDrawer} showDiary={props.showDiary}/>
        <Sidedrawer show={props.drawer} toggleDrawer={props.toggleDrawer} showProfile={props.showProfile}/>
        <main className={classes.Content}>
            {props.children}
        </main>
        </Aux>
);
}

export default layout;