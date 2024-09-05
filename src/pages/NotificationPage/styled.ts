import styled from 'styled-components';

export const NotificationPageWrapper = styled.div`
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 10px;
  @media (min-width: 440px) {
    display: none;
  }
  svg {
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  gap: 24px;
  @media (max-width: 440px) {
    width: 100%;
  }
  max-width: 440px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ImagesBlock = styled.div`
  background-color: #efefef;
  display: flex;
  padding: 40px 8px;
  width: 440px;

  @media (max-width: 440px) {
    width: 100%;
  }
  border-radius: 8px;
  flex-direction: column;
  gap: 32px;
`;

export const ImageContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background-color: #efefef;
  gap: 16px;
  width: 440px;

  @media (max-width: 440px) {
    width: 100%;
  }
  padding: 40px 24px;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

export const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;
