import React from 'react';
import CSSModule from 'react-css-modules';
import styles from './spinner.scss';

function Spinner() {
  return (
    <div styleName="faceoff">
      <div styleName="preloader"></div>
      <div styleName="preloader-section"></div>
    </div>
  );
}


export default CSSModule(Spinner, styles);
