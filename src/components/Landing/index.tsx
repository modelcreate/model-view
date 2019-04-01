import React, { FunctionComponent } from 'react';
import './index.css';

const Landing: FunctionComponent = () => {

  return (
    <div className="flex-grid">
      <div className="col1">
        <h3>Matrado</h3>
        <h1>Model View</h1>
        <p className="subtitle">Share and view models in the browser</p>
        <div className="droparea">
          <p>Drop model extract here</p>
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