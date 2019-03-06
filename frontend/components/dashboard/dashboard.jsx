import React from 'react';
import NavbarContainer from '../nav/nav_container';
import PhotoIndexContainer from '../photo/photo_index_container';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <NavbarContainer />
      <PhotoIndexContainer />
    </div>
  )
}

export default Dashboard;
