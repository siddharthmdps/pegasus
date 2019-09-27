import React from 'react';
import classes from './DiaryRightBox.module.css';
import SiddharthSingh from '../DiaryContent/SiddharthSingh';
import Joshua from '../DiaryContent/Joshua';
import Marn from '../DiaryContent/Marn';
import San from '../DiaryContent/San';
import Zhi from '../DiaryContent/Zhiting';
import Soon from '../DiaryContent/Soon';


const profileRightBox = (props) => (
        <div className={classes.ProfileRightBox}>
            {(() =>{switch (props.show) {
                case 0:
                    return <SiddharthSingh />;
                    
                case 1:
                    return <Joshua />
                    
                case 2:
                    return <Marn />
                case 3: 
                    return <San />   
                case 4:
                    return <Zhi />
                    
                case 5:
                    return <Soon />; 
                default:
                    break;
            }})()}
        </div>
    )

export default profileRightBox;