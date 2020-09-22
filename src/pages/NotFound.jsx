import React from 'react';
import { Header, MenuBottom, ProfileIcon, MainContents } from '../components';
import notFoundImg from '../images/garfo-e-faca-7.jpg';
import '../layouts/NotFound.css';

const NotFound = () => {
  const headerExplorer = {
    left: <ProfileIcon />,
    center: `Ops...`,
    right: <div />,
  };
  return (
    <div>
      <Header {...headerExplorer} />
      <MainContents>
        <div className="not-found-container">
          <img
            className="not-found-img"
            src={notFoundImg}
            alt="No forks found"
          />
          <span>Not Found</span>
        </div>
      </MainContents>

      <MenuBottom />
    </div>
  );
};

export default NotFound;
