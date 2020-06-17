import React, { createContext, useState } from "react";

import EpanetGeoJSON from "../interfaces/EpanetGeoJSON";

type Props = {
  children: React.ReactNode;
};

type LayoutState = "SELECTMODEL" | "SETTINGS" | "RUNNINGMODEL" | "MODELLOADED";

type ModelContextType = {
  layoutState: LayoutState;
  epanetGeoJSON: EpanetGeoJSON | undefined;
  openInpFile: (inpFile: string) => void;
  setLayoutState: (state: LayoutState) => void;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: Props) {
  console.log("Rerunning");

  const [epanetGeoJSON, setEpanetGeoJSON] = useState<EpanetGeoJSON | undefined>(
    undefined
  );

  const [layoutState, setLayoutState] = useState<LayoutState>("SELECTMODEL");

  const openInpFile = (inpFile: string) => {
    console.log("running openInpFile");

    const temp: EpanetGeoJSON = {
      type: "FeatureCollection",
      features: [],
    };
    setEpanetGeoJSON(temp);
  };

  return (
    <ModelContext.Provider
      value={{
        layoutState,
        epanetGeoJSON,
        openInpFile,
        setLayoutState,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export const ModelConsumer = ModelContext.Consumer;

export default ModelContext;
