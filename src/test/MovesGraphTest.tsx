import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MovesGraph, MovesGraphProps } from '../chess/MovesGraph';


export const MovesGraphTest = (container: HTMLElement, props: MovesGraphProps) => {
    ReactDOM.render(React.createElement(MovesGraph, props), container, () => { });
};