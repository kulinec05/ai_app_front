import styled from 'styled-components';

export const ResultPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const ResultPageContainer = styled.div<{ desk: boolean }>`
  width: 80%;
  height: 100%;
  padding: 100px 0 20px 80px;
  @media (max-width: 440px) {
    width: 100%;
    padding: 20px;
  }
  display: flex;
  flex-direction: ${({ desk }) => (desk ? 'row' : 'column-reverse')};
`;

export const GoBackBlock = styled.div`
  width: 20px;
  height: 20px;
  padding: 20px;
  cursor: pointer;
  position: sticky;
  top: 100px;
  left: 0;
  transform: translateX(-100px);
`;

export const ResultContainer = styled.div`
  width: 90%;
  display: flex;
  @media (max-width: 440px) {
    width: 100%;
  }
  flex-direction: column;
  gap: 42px;
`;

export const ResultsRightBlock = styled.div``;

export const ResultsDataContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  border-radius: 14px;
  background-color: #f2f2f4;
`;

export const ResultDataBlock = styled.div`
  border-radius: 10px;
  background-color: #fff;
  width: 240px;
  @media (max-width: 440px) {
    width: 100%;
  }
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #111111;
  }

  .title {
    font-size: 16px;
  }

  .number {
    color: #15b74c;
    font-size: 32px;
  }

  .grammar {
    color: #d85821;
  }

  .punctuation {
    color: #1a807f;
  }
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
  font-weight: 400;
  line-height: 24px;
`;

export const ResultPageNamings = styled.div`
  margin-top: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

export const DataBlock = styled.div`
  background-color: #efefef;
  margin-top: 8px;
  width: 100%;
  height: 150px;
  border-radius: 24px;
`;

export const DownloadButton = styled.button`
  width: fit-content;
  padding: 16px 32px;
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border-radius: 82px;
  border: none;
  color: white;
`;

export const UploadImageAgain = styled.button`
  background-color: #efefef;
  padding: 16px 32px;
  color: #080501;
  border-radius: 82px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  border: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 55px;
  gap: 16px;
`;

export const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DataContainer = styled.div`
  display: flex;
  gap: 42px;
  @media (max-width: 440px) {
    flex-direction: column-reverse;
  }
`;

export const TextResult = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;

  line-height: 160%;
  width: 100%;

  .error {
    color: orange;
    text-decoration: underline;
    text-decoration-color: #ff9000;
    text-decoration-style: wavy;
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width:  1000px;
`;

export const Hoverelement = styled.div`
  position: fixed;
  display: none;
  background: white;
  height: 26px;
  border: 1px solid #9b9b9b66;
  padding: 1px 5px;
  padding-top: 7px;

  .arrow-wrapper {
    display: inline-block;
    position: relative;
    left: 50%;
    top: -12px;
  }

  .arrow-divider {
    height: 8px;
    width: 8px;
    margin-left: -6px;
    transform: rotate(45deg);
    border-right: 2px solid #a4a4a4;
    border-bottom: 2px solid #a4a4a4;
  }
`;
