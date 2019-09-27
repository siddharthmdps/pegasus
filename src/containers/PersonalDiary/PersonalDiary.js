import React, {Component} from 'react';
import Display from '../../components/Display1/Display1';
import classes from './PersonalDiary.module.css';

const Optionlist = ['Siddharth Singh', 'Joshua Cheng Chee Yan', 'Min Marn Oo', 'Min San', 'Zhi Ting Chia', 'Lum Soon Keong'];

class PersonalDiary extends Component{
    state={
        active: '0'
    };

    activeHandler = (key) =>{
        this.setState({active: key});
    }
    
    render(){
        return(
            <div>
            <Display heading='Personal Diary' activeHandler={this.activeHandler} active={this.state.active} list={Optionlist} diary/>
            </div>
        );
    }
}

export default PersonalDiary;