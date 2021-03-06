import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="header-text">
        <HeaderTitle title="Lambda School" subtitle="@LambdaSchool • 26 jan" />

        <HeaderContent content="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simples and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
      </div>
    </div>
  )
}

export default HeaderContainer;