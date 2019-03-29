import React, { useMemo, useCallback, FunctionComponent } from 'react';
import { useDropzone } from 'react-dropzone';
import { FeatureCollection } from '@turf/helpers';
import { geojsonType } from '@turf/invariant';

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


type ModelDropZone = {
  onDroppedJson: (file: FeatureCollection) => void;
}


const ModelDropZone: FunctionComponent<ModelDropZone> = ({ onDroppedJson, children }) => {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0] !== undefined) {

      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const geoJson: FeatureCollection = JSON.parse(reader.result)
          try {
            geojsonType(geoJson, "FeatureCollection", "Drop Zone")
            onDroppedJson(geoJson)
          } catch (e) {
            console.log(e);
            // TODO: Handle if dropped bad JSON data 
          }
        }
      }

      reader.readAsText(acceptedFiles[0])

    }
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'application/json', multiple: false, onDrop });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
      isDragActive,
      isDragReject
    ]);






  return (
    <div {...getRootProps({ style })}>
      {isDragActive && <div style={overlayStyle}>Drop files here</div>}
      {children}
    </div>
  );
}

export default ModelDropZone