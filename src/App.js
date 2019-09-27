import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Profile from './containers/Profile/Profile';
import PersonalDiary from './containers/PersonalDiary/PersonalDiary';

class app extends Component{
  // const [showDrawer, showDrawerHandler] = useState(false);
  // const [showPersonalDiary, showPersonalDiaryHandler] = useState(false);
  state = {
    showDrawer: false,
    showOnScreen: 'Profile'
  };
  
  render(){
    const toggleDrawer = () =>{
      this.setState({showDrawer: !this.state.showDrawer});
    }
    const showDiary = () => {
      this.setState({showOnScreen: 'Diary', showDrawer: false});
    }
    const showProfile = () => {
      this.setState({showOnScreen: 'Profile', showDrawer: false});
    }
  return (
    <div className="App">
      <Layout drawer={this.state.showDrawer} toggleDrawer={toggleDrawer} diary={this.state.showPersonalDiary} showDiary={showDiary} showProfile={showProfile}>
      
            {(() =>{switch (this.state.showOnScreen) {
                case 'Diary':
                    return [<PersonalDiary />];
                    
                case 'Profile':
                    return [<Profile />];
                default:
                    break;
            }})()}
      </Layout>
    </div>
  );
  }
}

export default app;
