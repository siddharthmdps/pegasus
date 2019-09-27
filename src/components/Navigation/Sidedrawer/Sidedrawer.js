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
                    <li onClick={props.showAJ}>Applied Jobs</li>
                    <li onClick={props.showSJ}>Saved Jobs</li>
                    <li onClick={props.showRJ}>Recommended Jobs</li>
                    <li onClick={props.showSettings}>Settings</li>
                    <li onClick={props.showLogout}>Logout</li>
                </ul>
            </nav>
        </div>
        </React.Fragment>
    );
};

export default sidedrawer;