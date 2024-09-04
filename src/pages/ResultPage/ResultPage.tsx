import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import {
  // ButtonsContainer,
  // DataBlock,
  // DownloadButton,
  // ResultPageNamings,
  // ResultPageText,
  // UploadImageAgain,
  GoBackBlock,
  ResultsDataContainer,
  ResultContainer,
  ResultPageTitle,
  ResultPageWrapper,
  ResultDataBlock,
  ResultsRightBlock,
  ColumnBlock,
  ResultPageContainer,
  DataContainer,
  TextResult,
  ImageBox,
  Hoverelement,
} from './styled';
import Header from '../../components/Header/Header';

import { ReactComponent as ArrayLeft } from '../../assets/images/array_left.svg';
import { EventSourceMessage, fetchEventSource } from '@microsoft/fetch-event-source';

console.log(import.meta.env.VITE_BACKEND_URL);

export const ResultPage = () => {
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [textErrors, setTextErrors] = useState<
    { index: number; error: string; message: string; wordIndex?: number; suggestions: string[] }[]
  >([]);
  const [text, setText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [resultText, setResultText] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();
  let params = useLocation();

  useEffect(() => {
    const hoverElement = document.getElementById('hover_element') as HTMLElement;
    const hoverTextElement = document.getElementById('hover_text') as HTMLElement;
    let hovered = false;
    const errorHover = (ev: MouseEvent) => {
      const e = ev.target as HTMLElement;
      if (e.classList.contains('error')) {
        hovered = true;
        hoverElement.style.display = 'block';
        hoverTextElement.innerText = e.getAttribute('val') || '';
        const rect = e.getBoundingClientRect();
        hoverElement.style.left = rect.left + 'px';
        hoverElement.style.top = rect.top - 40 + 'px';
      }
    };
    const errorHoverLeave = () => {
      if (hovered) {
        hoverElement.style.display = 'none';
        hovered = false;
      }
    };
    document.addEventListener('mouseover', errorHover);
    document.addEventListener('mouseout', errorHoverLeave);

    return () => {
      document.removeEventListener('mouseover', errorHover);
      document.removeEventListener('mouseout', errorHoverLeave);
    };
  }, []);

  const getMessage = useCallback((ctrl: AbortController, ev: EventSourceMessage) => {
    switch (ev.event) {
      case 'load_finished':
        {
          setText(ev.data);
          setMessage('');
          ctrl.abort();
        }
        break;
      case 'load_error':
        {
          setErrorText('Произошла ошибка');
          setMessage('');
          ctrl.abort();
        }
        break;
      case 'original_text':
        {
          setOriginalText(ev.data);
        }
        break;
      case 'text_errors':
        try {
          setTextErrors(JSON.parse(ev.data.replace(/'/g, '"').replace(/\\"/g, "'").replace(/\\\'/g, "'")));
        } catch (e) {
          console.log(e);
          console.log('Incorrect data');
          console.log(ev.data.replace(/'/g, '"').replace(/\\"/g, "'").replace(/\\\'/g, "'"));
        }
        break;
      default:
    }
  }, []);

  useEffect(() => {
    if (text && originalText) {
      let i = 0;
      let j = 0;
      let words = originalText.split(' ');
      textErrors.forEach((error) => {
        let t = -1;
        i = words.findIndex((word) => {
          if (word !== '-' && word.match(/[a-zA-Zа-яА-Я]/i)) {
            t++;
            if (t === error.wordIndex) return true;
          }
        });
        words[i] = `<span class='error' val='${error.suggestions[0]}'>${words[i]}</span>`;
      });
      const el = document.getElementById('resultText');
      if (el) el.innerHTML = words.join(' ');
    }
  }, [text, originalText, textErrors, resultText]);

  useEffect(() => {
    if (params?.state?.image) {
      setMessage('Сохранение');
      setImage(params?.state?.image);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ image: params?.state?.image }),
      })
        .then((response) => response.json())
        .then((response) => {
          const ctrl = new AbortController();
          const fetchData = async () => {
            await fetchEventSource(`${import.meta.env.VITE_BACKEND_URL}/stream?name=` + response.message, {
              signal: ctrl.signal,
              onmessage(ev) {
                //console.log(ev); // for debugging purposes
                getMessage(ctrl, ev);

                // setMessages((prev) => [...prev, ev.data]);
              },
              onerror(err) {
                console.log(err);
                ctrl.abort();
              },
            });
          };
          fetchData();
        });
    }
  }, [params]);

  const [vwDesk, setVwDesk] = useState<boolean>(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770,
  );

  useEffect(() => {
    const handleResize = () => {
      setVwDesk(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 770);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResultPageWrapper>
      <ResultPageContainer desk={vwDesk}>
        <Hoverelement id="hover_element">
          <div id="hover_text"></div>
          <div className="arrow-wrapper">
            <div className="arrow-divider"></div>
          </div>
        </Hoverelement>
        <Header vwDesk={vwDesk} />
        {vwDesk && (
          <GoBackBlock onClick={() => navigate('/')}>
            <ArrayLeft />
          </GoBackBlock>
        )}
        <ResultContainer>
          <ResultPageTitle>Результат</ResultPageTitle>

          {/* <ResultPageText>
            Перевод текста с фото, сделанного в реальном времени или загруженного из галереи
          </ResultPageText>
          <ResultPageNamings>Ошибки</ResultPageNamings>
          <DataBlock />
          <ResultPageNamings>Метрика</ResultPageNamings>
          <DataBlock />
          <ButtonsContainer>
            <DownloadButton>Скачать</DownloadButton>
            <UploadImageAgain>Загрузить новое</UploadImageAgain>
          </ButtonsContainer> */}

          <DataContainer>
            <TextResult>
              {image && (
                <ImageBox>
                  <img style={{ width: '100%' }} src={image} />
                </ImageBox>
              )}
              {errorText ? (
                <span>Результат обработки текста: {errorText}</span>
              ) : text ? (
                <span>
                  Результат обработки текста: <span id="resultText"></span>{' '}
                </span>
              ) : (
                <span>Идет обработка изображения:{message}</span>
              )}
            </TextResult>

            <ResultsDataContainer>
              <ResultDataBlock>
                <span className="title">Точность проверки</span>
                <ColumnBlock>
                  <span className="number">79%</span>
                  <span>Мы почти уверены, но стоит перепроверить</span>
                </ColumnBlock>
              </ResultDataBlock>
              <ResultDataBlock>
                <span className="title">5 ошибок</span>
                <ColumnBlock>
                  <span className="grammar">Грамматика: 4</span>
                  <span className="punctuation">Пунктуация: 1</span>
                </ColumnBlock>
              </ResultDataBlock>
            </ResultsDataContainer>
          </DataContainer>
        </ResultContainer>
      </ResultPageContainer>
    </ResultPageWrapper>
  );
};
