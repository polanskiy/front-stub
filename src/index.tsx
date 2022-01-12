import * as React from 'react';
import { render } from 'react-dom';
import Routing from './routing';
import './index.css';

render(<Routing />, document.getElementById('root'));

if (module['hot']) {
  module['hot'].accept();
}
