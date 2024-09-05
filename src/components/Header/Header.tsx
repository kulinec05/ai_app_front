import React from 'react';
import { HeaderContainer, HeaderTitle, Links, LinksContainer } from './styled';

const Header = ({ vwDesk }: { vwDesk: boolean }) => {
  return (
    <HeaderContainer mobile={!vwDesk}>
      <Links to="/">
        <HeaderTitle>ГВРН</HeaderTitle>
      </Links>
      <LinksContainer>
        <Links to="/about">О сервисе</Links>
        <Links to="/how-to">Рекомендации к фото</Links>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
