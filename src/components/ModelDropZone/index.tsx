import React, { useMemo, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';

const overlayStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: '2.5em 0',
  background: 'rgba(0,0,0,0.5)',
  textAlign: 'center',
  color: '#fff'
} as React.CSSProperties;


const baseStyle = {
  position: "relative",
} as React.CSSProperties;

const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#eee'
};

const acceptStyle = {
  borderStyle: 'solid',
  borderColor: '#00e676'
};

const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#ff1744'
};

interface Props {
  children: ReactNode;
}

function StyledDropzone(props: Props) {
  const { children } = props
  const {
    acceptedFiles,
    getRootProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'application/json', multiple: false });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
      isDragActive,
      isDragReject
    ]);

  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
      </li>
  ));

  return (
    <div {...getRootProps({ style })}>
      {isDragActive && <div style={overlayStyle}>Drop files here</div>}
      {children}
    </div>
  );
}

export default StyledDropzone