import styled from 'styled-components';

export const ResultPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const ResultPageContainer = styled.div<{ desk: boolean }>`
  max-width: 100%;
  display: flex;
  flex-direction: ${({ desk }) => (desk ? 'row' : 'column-reverse')};
`;

export const ResultContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 42px;
`;

export const ResultPageTitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 700;
`;

export const ResultPageText = styled.div`
  margin-top: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 566px;
  @media (max-width: 440px) {
    width: 100%;
  }
  font-weight: 400;
  line-height: 24px;
`;

export const ResultPageNamings = styled.div`
  margin-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
`;
