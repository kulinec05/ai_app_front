import React, { useEffect, useState } from 'react';

import {
  ResultContainer,
  ResultPageTitle,
  ResultPageWrapper,
  ResultPageContainer,
  ResultPageText,
} from './styled';
import { useOutletContext } from 'react-router';

export const AboutPage = () => {
  const vwDesk = useOutletContext<boolean>();


  return (
    <ResultPageWrapper>
      <ResultPageContainer desk={vwDesk}>
        <ResultContainer>
          <ResultPageTitle>О сервисе</ResultPageTitle>

          <ResultPageText>
            Говорун — это инновационный сервис на основе искусственного интеллекта, созданный для облегчения работы
            учителей по проверке письменных заданий учеников по русскому языку и литературе. С его помощью можно быстро
            и точно анализировать тексты, выявлять грамматические, орфографические и стилистические ошибки, а также
            давать рекомендации по их исправлению. Этот инструмент существенно сокращает время, затрачиваемое на
            проверку работ, и повышает точность оценки знаний учащихся.
            <br />
            <br />
            Кроме того, Говорун предоставляет возможность отслеживания прогресса каждого ученика. Сервис автоматически
            формирует реестр с результатами проверок, позволяя учителю видеть динамику успеваемости и выявлять
            проблемные зоны в обучении. Благодаря этому, учителя могут более эффективно планировать учебный процесс и
            индивидуализировать подход к каждому ученику, обеспечивая их наиболее продуктивное развитие в изучении
            русского языка и литературы.
          </ResultPageText>
        </ResultContainer>
      </ResultPageContainer>
    </ResultPageWrapper>
  );
};
