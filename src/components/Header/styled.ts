import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  border-bottom: ${({ mobile }) => (mobile ? '1px solid #DDDDDD' : 'none')};
  position: absolute;
  top: 20px;
  z-index: 11;
  left: 50%;
  width: ${({ mobile }) => (mobile ? '100%' : '90%')};
  padding: ${({ mobile }) => (mobile ? '0 0 16px 16px' : '0')};
  transform: translateX(-50%);
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