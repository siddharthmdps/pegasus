import React, {Component} from 'react';
import Display from '../../components/Display1/Display1';
import classes from './Profile.module.css';

const Optionlist = ['View Profile', 'Personal Particulars', 'Education', 'Work Experience', 'Skills', 'Job Preference', 'Awards', 'Certifications', 'Projects', 'Resume'];

class Profile extends Component{
    state={
        active: '0'
    };

    activeHandler = (key) =>{
        this.setState({active: key});
    }
    
    render(){
        return(
            <div>
            <Display heading='Profile' activeHandler={this.activeHandler} active={this.state.active} list={Optionlist} profile/>
            </div>
        );
    }
}

export default Profile;


