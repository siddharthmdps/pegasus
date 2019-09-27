import React from 'react';
import Logo from '../Logo/Logo';
import classes from './LeftBox.module.css'

const leftBox = (props) => {
    return(
        <div className={classes.LeftBox}>
            <ul>
                {props.logo?
                    <li>
                        <Logo />
                    </li>:null
                }
                {
                    props.list.map((value, index) => {
                        return (
                            <li key={index} onClick={props.activeHandler.bind(this, index)} className={index===props.active?classes.active: null}>
                                {value}
                                
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default leftBox;