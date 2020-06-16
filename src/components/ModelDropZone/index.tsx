import { useDropzone } from "react-dropzone";
import React, { useMemo, useCallback, FunctionComponent } from "react";

const overlayStyle = {
  position: "absolute",
  zIndex: 1400,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: "4em 0",
  background: "rgba(0,0,0,0.5)",
  fontSize: "4rem",
  textAlign: "center",
  color: "#fff",
} as React.CSSProperties;

const activeStyle = {
  borderStyle: "solid",
  borderColor: "#6c6",
};

const acceptStyle = {
  borderStyle: "solid",
  borderColor: "#00e676",
};

const rejectStyle = {
  borderStyle: "solid",
  borderColor: "#ff1744",
};

type ModelDropZone = {
  onDroppedInpFile: (file: string) => void;
};

const ModelDropZone: FunctionComponent<ModelDropZone> = ({
  onDroppedInpFile,
  children,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0] !== undefined) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            onDroppedInpFile(reader.result);
          }
        };

        reader.readAsText(acceptedFiles[0]);
      }
    },
    [onDroppedInpFile]
  );

  const {
    getRootProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: ["application/json", ""],
    multiple: false,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...overlayStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <div {...getRootProps({})}>
      {isDragActive && <div style={style}>Drop file to load model...</div>}
      {children}
    </div>
  );
};

export default ModelDropZone;
