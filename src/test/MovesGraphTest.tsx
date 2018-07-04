import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MovesGraphAsync } from '../chess/MovesGraphAsync';
import { MovesGraphProps } from '../chess/MovesGraphProps';


export const MovesGraphTest = (container: HTMLElement, props: MovesGraphProps) => {
    ReactDOM.render(React.createElement(MovesGraphAsync, props), container, () => { });
};