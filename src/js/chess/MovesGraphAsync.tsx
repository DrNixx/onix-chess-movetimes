import * as React from 'react';
import Loadable from "react-loadable";
import { MovesGraphProps } from './MovesGraphProps';

const LoadableGraph = Loadable({
    loader: () => import(/* webpackChunkName: "moveTimeGraph" */ './MovesGraphDumb'),
    render(loaded, props: MovesGraphProps) {
        let Component = loaded.MovesGraphDumb;
        return <Component {...props} />;
    },
    loading() {
      return <div className="progress-circle-indeterminate text-hide">Loading...</div>
    }
});

export class MovesGraphAsync extends React.Component<MovesGraphProps, {}> {
    render() {
        return <LoadableGraph {...this.props} />
    }
}