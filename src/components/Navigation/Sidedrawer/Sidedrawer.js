import React from 'react';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = props => {

    return (
        <React.Fragment>
        <Backdrop show={props.show} clickBackdrop={props.toggleDrawer} />
        <div className={[classes.Sidedrawer, props.show?classes.Open:null].join(' ')}>
            <nav>
                <ul>
                    <li onClick={props.showProfile}>Profile</li>
                    <li>Applied Jobs</li>
                    <li>Saved Jobs</li>
                    <li>Recommended Jobs</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
        </React.Fragment>
    );
};

export default sidedrawer;