import styled from 'styled-components';

export const UploadWrapper = styled.div<{ hovered: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  z-index: ${({ hovered }) => (hovered ? 30 : 9)};
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;
