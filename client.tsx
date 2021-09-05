import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';
import NumberBaseball from './NumberBaseball';

const Hot = hot(NumberBaseball); // HOC

ReactDOM.render(<Hot />, document.querySelector("#root"));