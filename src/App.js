import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Profile from './containers/Profile/Profile';
import AJ from './containers/AppliedJobs/AppliedJobs';
import SJ from './containers/SavedJobs/SavedJobs';
import RJ from './containers/RecommendedJobs/RecommendedJobs';
import Settings from './containers/Settings/Settings';
import PersonalDiary from './containers/PersonalDiary/PersonalDiary';

class app extends Component{
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
    const showAJ = () => {
      this.setState({showOnScreen: 'AJ', showDrawer: false});
    }
    const showSJ = () => {
      this.setState({showOnScreen: 'SJ', showDrawer: false});
    }
    const showRJ = () => {
      this.setState({showOnScreen: 'RJ', showDrawer: false});
    }
    const showSettings = () => {
      this.setState({showOnScreen: 'Settings', showDrawer: false});
    }
    const showLogout = () => {
      this.setState({showOnScreen: 'Logout', showDrawer: false});
    }
  return (
    <div className="App">
      <Layout drawer={this.state.showDrawer} toggleDrawer={toggleDrawer} diary={this.state.showPersonalDiary} showDiary={showDiary} showProfile={showProfile} showAJ={showAJ} showSJ={showSJ} showRJ={showRJ} showSettings={showSettings} showLogout={showLogout}>
      
            {(() =>{switch (this.state.showOnScreen) {
                case 'Diary':
                    return [<PersonalDiary />];     
                case 'Profile':
                    return [<Profile />];
                case 'AJ':
                    return [<AJ />];
                case 'SJ':
                  return [<SJ />];                    
                case 'RJ':
                  return [<RJ />];
                case 'Settings':
                  return [<Settings />];
                case 'Logout':
                  break;
                default:
                  break;
            }})()}
      </Layout>
    </div>
  );
  }
}

export default app;
