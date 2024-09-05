import React, { useEffect, useState } from 'react';
import { GoBackBlock, MainPageContainer, MainPageWrapper } from './styled';
import { ReactComponent as ArrayLeft } from '../assets/images/array_left.svg';

import { Outlet, useLocation, useNavigate } from 'react-router';
import Header from '../components/Header/Header';

export const MainLayout = () => {
  const [vwDesk, setVwDesk] = useState<boolean>(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770,
  );
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setVwDesk(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainPageWrapper>
      <MainPageContainer>
        <Header vwDesk={vwDesk} />
        {pathname.pathname.length > 1 && (
          <GoBackBlock onClick={() => navigate('/')}>
            <ArrayLeft />
          </GoBackBlock>
        )}
        <Outlet context={vwDesk} />
      </MainPageContainer>
    </MainPageWrapper>
  );
};
