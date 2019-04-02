import React, { FunctionComponent } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SelectProjection from '../SelectProjection';
import './index.css';

type LandingProperties = {
  isLoading: boolean,
  isFileLoaded: boolean,
  onSelectProj: (proj: string) => void
}


const Landing: FunctionComponent<LandingProperties> = ({ isLoading, isFileLoaded, onSelectProj }) => {

  return (
    <div className="flex-grid">
      <div className="col1">
        <h3>Matrado</h3>
        <h1>Model View</h1>
        <p className="subtitle">Share and view models in the browser</p>
        <p className="blurb">Model View is under active development and this version is an early preview.</p>
        <p className="blurb">This application and its source code are free and open source under AGPLv3. Feature requests and issues can be logged on GitHub, contact me on LinkedIn or email - luke@matrado.ca</p>

        <div className="droparea">
          {isFileLoaded ?
            <SelectProjection onSelectProj={onSelectProj} />
            : isLoading ?
              <CircularProgress />
              :
              <>
                <p>Drop model extract here</p>
                <p className="blurb">All data is proccessed client side, no model data sent to the server.</p>
              </>
          }
        </div>
        <div className="btns-float-left">
          <a href="https://github.com/modelcreate/model-view/"><button className="btn blue" type="button"><span>Model Extract Guide</span></button></a>
          <a href="https://github.com/modelcreate/model-view/"><button className="btn" type="button"><span>Github</span></button></a>
        </div>
      </div>
      <div className="col2"></div>
    </div>
  )
}


export default Landing