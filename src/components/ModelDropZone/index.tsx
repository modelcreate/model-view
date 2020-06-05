import { useDropzone } from "react-dropzone";
import React, { useMemo, useCallback, FunctionComponent } from "react";
import { runEpanet, ReportingInfo } from "../../utils/epanet";
import { EpanetResults } from "../../utils/EpanetBinary";

import EpanetGeoJSON from "../../interfaces/EpanetGeoJSON";

const overlayStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: "2.5em 0",
  background: "rgba(0,0,0,0.5)",
  textAlign: "center",
  color: "#fff",
} as React.CSSProperties;

const baseStyle = {
  position: "relative",
} as React.CSSProperties;

const activeStyle = {
  borderStyle: "solid",
  borderColor: "#6c6",
  backgroundColor: "#eee",
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
  onDroppedJson: (file: [EpanetGeoJSON, EpanetResults, ReportingInfo]) => void;
};

const ModelDropZone: FunctionComponent<ModelDropZone> = ({
  onDroppedJson,
  children,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0] !== undefined) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            runEpanet(reader.result, onDroppedJson);
          }
        };

        reader.readAsText(acceptedFiles[0]);
      }
    },
    [onDroppedJson]
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
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <div {...getRootProps({ style })}>
      {isDragActive && <div style={overlayStyle}>Drop files here</div>}
      {children}
    </div>
  );
};

export default ModelDropZone;
