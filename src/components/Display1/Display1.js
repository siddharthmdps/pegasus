import React from 'react';
import classes from './Display1.module.css';
import LeftBox from '../LeftBox/LeftBox';
import RightBox from '../RightBox/RightBox';

const display1 = props => {
    return(
        <div>
            <div className={classes.Heading}><h1>{props.heading}</h1></div>
            <div className={classes.Display1}>
                <div className={classes.LeftBox}>
                    <LeftBox activeHandler={props.activeHandler} active={props.active} list={props.list} logo={props.profile}/>
                </div>
                <div className={classes.RightBox}>
                    <RightBox show={props.active} diary={props.diary} profile={props.profile}/>
                </div>
            </div>
        </div>
    );
}

export default display1;