import styled from 'styled-components';
import { ReactComponent as Ellipse1 } from '../../assets/images/ellipse1.svg';
import { ReactComponent as Ellipse2 } from '../../assets/images/ellipse2.svg';
import { ReactComponent as Ellipse3 } from '../../assets/images/ellipse3.svg';
import { ReactComponent as Ellipse4 } from '../../assets/images/ellipse4.svg';

export const MainPageWrapper = styled.div`
  position: relative;
`;

export const Container = styled.div``;

export const MainPageContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  height: calc(100vh - 80px);
  position: relative;
  align-items: center;
`;

export const MainPageContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  width: 40%;

  @media (max-width: 770px) {
    width: 80%;
  }

  img {
    width: 240px;
    height: 240px;
  }
  .parrot {
    width: 170px;
    height: 170px;

    @media (max-width: 770px) {
      height: 100px;
      width: 100px;
    }
  }
`;

export const MainPageText = styled.div<{ desk: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${({ desk }) => (desk ? '36px' : '28px')};
  font-weight: ${({ desk }) => (desk ? 300 : 700)};
  line-height: ${({ desk }) => (desk ? '44px' : '32px')};
  text-align: center;
`;

export const TakePhotoBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  width: 100px;
  height: 100px;
  border: none;
  transition: 0.3s all;
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const TakePhotoBlock = styled.div<{ desk: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: ${({ desk }) => desk && '48px'};

  .custom-file-upload {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 770px) {
      left: 32%;
    }

    @media (max-width: 660px) {
      left: 29%;
    }

    @media (max-width: 580px) {
      left: 26%;
    }

    @media (max-width: 490px) {
      left: 23%;
    }

    @media (max-width: 420px) {
      left: 20%;
    }

    @media (max-width: 390px) {
      left: 17%;
    }
  }

  .custom-file-upload.desk {
    position: unset;
    padding: 24px 48px;
    background-color: black;
    color: white;
    border-radius: 82px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const Button = styled.div`
  background-color: inherit;
  display: inline-block;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 770px) {
    display: flex;
  }
`;

export const LeaveText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 64px;
  font-weight: 400;
  color: #0057ff;
  text-align: center;
  line-height: 94px;
`;

export const Circle1 = styled(Ellipse1)`
  position: absolute;
  bottom: 33%;
  transform: translateY(50%) translateX(-50%);
  left: 50%;
  z-index: 8;
`;
export const Circle2 = styled(Ellipse2)`
  position: absolute;
  bottom: 33%;
  z-index: 8;
  transform: translateY(50%) translateX(-50%);
  left: 50%;
`;
export const Circle3 = styled(Ellipse3)`
  position: absolute;
  bottom: 39%;
  z-index: 8;
  transform: translateY(50%) translateX(-50%);
  left: 50%;
`;
export const Circle4 = styled(Ellipse4)`
  position: absolute;
  bottom: 50%;
  z-index: 8;
  transform: translateY(50%) translateX(-50%);
  left: 50%;
`;
export const Circle5 = styled(Ellipse4)`
  position: absolute;
  z-index: 8;
  bottom: 56%;
  width: 110%;
  height: 110%;
  transform: translateY(50%) translateX(-50%);
  left: 50%;
`;

export const Circles = styled.div<{ hovered: boolean }>`
  position: absolute;
  top: 0;
  display: ${({ hovered }) => (hovered ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  z-index: 9;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const PasteImageBtn = styled.div``;

export const InputImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 16px;
    color: #777777;
    font-weight: 400;
  }
`;

export const LoadingDeskBlock = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LoadingBlockText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`;
