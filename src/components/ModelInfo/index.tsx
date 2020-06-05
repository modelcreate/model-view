import React, { FunctionComponent } from "react";
import { Properties } from "@turf/helpers";
import FeatureProperties from "../FeatureProperties";
import { ReportingInfo } from "../../utils/epanet";
import format from "date-fns/format";
import addSeconds from "date-fns/addSeconds";
import "./index.css";

type DefaultContainer = {};

const DefaultContainer: FunctionComponent<DefaultContainer> = ({
  children,
}) => <div className="control-panel">{children}</div>;

export interface ModelInfoSetting {
  modeName: string;
  currentTimestep: number;
  reportingInfo: ReportingInfo;
  selectedFeature: Properties;
}

type ModelInfoProps = {
  settings: ModelInfoSetting;
  onChange: (value: string) => void;
  onClearSelected: () => void;
};

const ModelInfo: FunctionComponent<ModelInfoProps> = ({
  settings,
  onChange,
  onClearSelected,
}) => {
  const currentSecond =
    settings.reportingInfo.StartTime +
    settings.currentTimestep * settings.reportingInfo.ReportStep;

  const day = Math.floor(currentSecond / 86400) + 1;
  const hour = Math.floor((currentSecond % 86400) / 3600);
  const min = Math.floor((currentSecond % 3600) / 60);

  return (
    <DefaultContainer>
      <div className="time-controls">
        <h2>Day {day}</h2>
        <h1>
          {hour.toString().padStart(2, "0")}:{min.toString().padStart(2, "0")}
        </h1>
        <div className="input">
          <input
            type="range"
            value={settings.currentTimestep}
            min={0}
            max={settings.reportingInfo.Periods - 1}
            step={1}
            onChange={(evt) => onChange(evt.target.value)}
          />
        </div>
      </div>

      {settings.selectedFeature && (
        <FeatureProperties
          onClearSelected={onClearSelected}
          selectedFeature={settings.selectedFeature}
          key={settings.selectedFeature.us_node_id}
          feature={settings}
          tsv={Object.keys(settings.selectedFeature).filter(
            (key) =>
              settings.selectedFeature &&
              settings.selectedFeature[key].constructor === Array
          )}
        />
      )}
    </DefaultContainer>
  );
};

export default ModelInfo;
