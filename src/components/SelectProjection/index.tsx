import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { ValueType, ActionMeta, OptionsType } from 'react-select/lib/types';
import { proj4List } from './epsg'


interface ProjectionOption {
  value: string;
  label: string;
}

type SelectProjectionProps = {
  onSelectProj: (proj: string) => void
}
interface SelectProjectionState {
  selectedOption: ValueType<ProjectionOption> | null
}


class SelectProjection extends React.Component<SelectProjectionProps, SelectProjectionState> {
  state: Readonly<SelectProjectionState> = {
    selectedOption: null
  };

  onInputChange = (inputValue: ValueType<ProjectionOption>, { action }: ActionMeta) => {


    this.setState({ selectedOption: inputValue })

  }
  getOptions = (input: string, callback: (c: OptionsType<any>) => void) => {

    const searchString = input.toLowerCase().trim()
    console.log(searchString)
    //input.length > 0 ? 

    const options: ProjectionOption[] = proj4List.filter((d) => {
      return d.label.toLocaleLowerCase().match(searchString);
    })

    return (
      callback(options.slice(0, 20)
      )
    );
  }

  _submitProjection = () => {
    if (this.state.selectedOption) {
      // Todo, fix this us - source https://github.com/JedWatson/react-select/issues/2902
      if (Array.isArray(this.state.selectedOption)) {
        throw new Error("Unexpected type passed to ReactSelect onChange handler");
      }
      const test = this.state.selectedOption
      this.props.onSelectProj(this.state.selectedOption.value)
    }
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <AsyncSelect
          className='react-select-container'
          classNamePrefix="react-select"
          value={selectedOption}
          onChange={this.onInputChange}
          name="color"
          //options={proj4List}
          loadOptions={this.getOptions}
        />
        {this.state.selectedOption &&
          <button onClick={this._submitProjection}>Go</button>
        }
      </>
    );
  }
}

export default SelectProjection