import React from 'react';
import corrImage from '../../assets/images/correct_image.png';
import wrongImage from '../../assets/images/wrong_image.png';
import { ReactComponent as CloseIcon } from '../../assets/images/close_icon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/images/remove_icon.svg';
import { ReactComponent as CheckmarkIcon } from '../../assets/images/checkmark_icon.svg';

import {
  ContentContainer,
  ImagesBlock,
  ImagesContainer,
  NotificationPageWrapper,
  Text,
  TextContainer,
  IconContainer,
  Title,
  ImageContainer,
} from './styled';
import { useNavigate } from 'react-router';

export const NotificationPage = () => {
  const navigate = useNavigate();

  return (
    <NotificationPageWrapper>
      <ContentContainer>
        <IconContainer>
          <CloseIcon onClick={() => navigate('/')} />
        </IconContainer>
        <ImagesBlock>
          <Title>Как должно выглядеть фото</Title>
          <ImagesContainer>
            <ImageContainer>
              <img src={corrImage} alt="" />
              <CheckmarkIcon />
            </ImageContainer>
            <ImageContainer>
              <img src={wrongImage} alt="" />
              <RemoveIcon />
            </ImageContainer>
          </ImagesContainer>
        </ImagesBlock>
        <TextContainer>
          <Title>Рекомендации</Title>
          <Text>Убедитесь что вокруг вас хорошее освещение </Text>
          <Text>Положите документ на ровную поверхность</Text>
          <Text>Текст должен быть четко виден</Text>
        </TextContainer>
        <TextContainer>
          <Title>Формат</Title>
          <Text>
            Формат – JPG, PNG, TIFF или BMP. Размер – не более 5 МБ. Рекомендуемое разрешение – не менее 720 x 720 пикс.
            и не более 3000 x 3000 пикс
          </Text>
        </TextContainer>
      </ContentContainer>
    </NotificationPageWrapper>
  );
};
