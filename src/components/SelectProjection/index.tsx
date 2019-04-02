import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { ValueType, ActionMeta, OptionsType } from 'react-select/lib/types';
import { proj4List } from './epsg'


interface ProjectionOption {
  value: string;
  label: string;
}


class SelectProjection extends React.Component {
  state = {
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

  render() {
    const { selectedOption } = this.state;
    return (
      <AsyncSelect
        className='react-select-container'
        classNamePrefix="react-select"
        value={selectedOption}
        onChange={this.onInputChange}
        name="color"
        //options={proj4List}
        loadOptions={this.getOptions}
      />
    );
  }
}

export default SelectProjection