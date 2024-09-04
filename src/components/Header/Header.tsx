import React from 'react';
import { HeaderContainer, HeaderTitle, Links, LinksContainer } from './styled';

const Header = ({ vwDesk }: { vwDesk: boolean }) => {
  return (
    <HeaderContainer mobile={!vwDesk}>
      <HeaderTitle>ГВРН</HeaderTitle>
      <LinksContainer>
        <Links to="">О сервисе</Links>
        <Links to="/how-to">Рекомендации к фото</Links>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
