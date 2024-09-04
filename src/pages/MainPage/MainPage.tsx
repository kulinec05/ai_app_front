import React, { useEffect, useState } from 'react';
import {
  MainPageContainer,
  Button,
  MainPageWrapper,
  MainPageText,
  MainPageContentWrapper,
  TakePhotoBlock,
  TakePhotoBtn,
  Container,
  LeaveText,
  PasteImageBtn,
  InputImageContainer,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circles,
  LoadingDeskBlock,
  LoadingBlockText,
} from './styled';
import { ReactComponent as CameraIcon } from '../../assets/images/camera.svg';
import { ReactComponent as ImageIcon } from '../../assets/images/image.svg';
import { ReactComponent as LoadingIcon } from '../../assets/images/loading.svg';
import parrot from '../../assets/images/parrot.png';
import loadingParrot from '../../assets/images/loading_parrot.png';
import UploadComponent from '../../components/UploadComponent/UploadComponent';
import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';

export const MainPage = () => {
  const [image, setImage] = useState<string | null | File>(null);
  const [vwDesk, setVwDesk] = useState<boolean>(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770,
  );

  const [isLoading, setIsLoading] = useState(false);

  const [hovered, setHovered] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setVwDesk(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setHovered(true);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
          setIsLoading(false);
        } else {
          setImage(null);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    image && navigate('result', { state: { image: image } });
  }, [image, navigate]);

  function uploadFile(file?: File) {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        } else {
          setImage(null);
        }
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <MainPageWrapper>
      <Container onDragOver={(e) => handleOver(e)}>
        <Header vwDesk={vwDesk} />
        {isLoading ? (
          vwDesk ? (
            <LoadingDeskBlock>
              <img src={loadingParrot} alt="parrot" />
              <LoadingBlockText>Пару секунд, анализируем ... </LoadingBlockText>
            </LoadingDeskBlock>
          ) : (
            <LoadingDeskBlock>
              <LoadingIcon />
              <LoadingBlockText>Пару секунд, анализируем ... </LoadingBlockText>
            </LoadingDeskBlock>
          )
        ) : (
          <MainPageContentWrapper>
            <MainPageContainer>
              <img src={parrot} alt="parrot" className="parrot" />
              <MainPageText desk={vwDesk}>Говорун ИИ</MainPageText>
              <TakePhotoBlock desk={vwDesk}>
                <PasteImageBtn>
                  {hovered ? (
                    <LeaveText>Отпускайте</LeaveText>
                  ) : (
                    <InputImageContainer>
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className={`custom-file-upload ${vwDesk && 'desk'}`}>
                          <Button>{vwDesk ? 'Загрузить изображение' : <ImageIcon style={{ margin: 'auto' }} />}</Button>
                        </label>
                      </>
                      {vwDesk && <span>или перенесите в эту область</span>}
                    </InputImageContainer>
                  )}
                </PasteImageBtn>
                {!vwDesk && (
                  <div>
                    <TakePhotoBtn htmlFor="file-input">
                      <CameraIcon />
                    </TakePhotoBtn>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      capture="environment"
                      style={{ display: 'none' }}
                      onChange={handleImageUpload}
                    />
                  </div>
                )}
              </TakePhotoBlock>
            </MainPageContainer>
          </MainPageContentWrapper>
        )}
      </Container>
      <UploadComponent uploadFile={uploadFile} setHovered={setHovered} hovered={hovered} />
      <Circles hovered={hovered}>
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
      </Circles>
    </MainPageWrapper>
  );
};
