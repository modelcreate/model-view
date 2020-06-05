import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { proj4List } from "./epsg";

import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  AutocompleteRenderGroupParams,
} from "@material-ui/lab/Autocomplete";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import { Typography } from "@material-ui/core";

type SelectProjectionProps = {
  onSelectProj: (proj: string) => void;
};

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up("sm"), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactNode) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

const useStyles = makeStyles({
  listbox: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

const renderGroup = (params: AutocompleteRenderGroupParams) => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children,
];

function SelectProjection({ onSelectProj }: SelectProjectionProps) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const classes = useStyles();

  return (
    <>
      <p className="model-proj-subtitle">
        Type out your map projection below if known, e.g. British National Grid
        - EPSG:27700, this will include background maps in your model.
      </p>
      <p className="model-proj-subtitle">
        Otherwise select 'No Basemap' to load without the background maps.
      </p>
      <Autocomplete
        id="virtualize-demo"
        style={{ width: "100%", marginTop: "20px", paddingBottom: "20px" }}
        disableListWrap
        classes={classes}
        ListboxComponent={
          ListboxComponent as React.ComponentType<
            React.HTMLAttributes<HTMLElement>
          >
        }
        renderGroup={renderGroup}
        onChange={(event, newInputValue) => {
          console.log(newInputValue?.value);
          setValue(newInputValue?.value);
        }}
        options={proj4List}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Model Projection" />
        )}
        renderOption={(option) => (
          <Typography noWrap>{option.label}</Typography>
        )}
      />

      {value && (
        <div className="btns-float-left">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onSelectProj(value);
            }}
          >
            View Model
          </Button>
        </div>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          onSelectProj("METERS");
        }}
      >
        No Basemap
      </Button>
    </>
  );
}

export default SelectProjection;
