import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const MainPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
`;

export const GoBackBlock = styled.div`
  width: 20px;
  height: 20px;
  padding: 20px;
  cursor: pointer;
  position: sticky;
  top: 100px;
  left: 0px;
  @media (max-width: 440px) {
    display: none;
    width: 0;
    height: 0;
    padding: 0;
  }
`;
