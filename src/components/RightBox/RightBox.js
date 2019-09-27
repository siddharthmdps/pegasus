import React from 'react';
import ProfileRightBox from '../ProfileRightBox/ProfileRightBox';
import DiaryRightBox from '../DiaryRightBox/DiaryRightBox';
import classes from './RightBox.module.css';



const RightBox = (props) => (props.profile?<ProfileRightBox show={props.show} />:(props.diary?<DiaryRightBox show={props.show}/>:null));

export default RightBox;