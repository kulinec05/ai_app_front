import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: row;
  border-bottom: ${({ mobile }) => (mobile ? '1px solid #DDDDDD' : 'none')};
  position: sticky;
  top: 0;
  height: auto;
  z-index: 11;
  @media (max-width: 440px) {
    flex-direction:column
  }
  background-color: white;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 440px) {
    gap: 16px;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  color: #080501;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;
