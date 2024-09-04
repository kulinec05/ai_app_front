import React, { FC } from 'react';
import { UploadWrapper } from './styled';

interface UploadComponentProps {
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  uploadFile: (file: File | undefined) => void;
}

const UploadComponent: FC<UploadComponentProps> = ({ hovered, setHovered, uploadFile }) => {
  const [highlight, setHighlight] = React.useState(false);
  const [drop, setDrop] = React.useState(false);

  const handleEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHovered(false);
    setHighlight(false);
  };

  const handleUpload = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
    setHovered(false);
    setDrop(true);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      uploadFile(files[0]);
    } else {
      uploadFile(undefined);
    }
  };

  return (
    <UploadWrapper
      hovered={hovered}
      onDragEnter={(e) => handleEnter(e)}
      onDragLeave={(e) => handleLeave(e)}
      onDragOver={(e) => handleOver(e)}
      onDrop={(e) => handleUpload(e)}
      className={`upload${highlight ? ' is-highlight' : drop ? ' is-drop' : ''}`}
    />
  );
};

export default UploadComponent;
