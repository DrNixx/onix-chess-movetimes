import { IView } from './Interfaces';
export interface MovesGraphProps {
    height?: number | string,
    isLive?: boolean,
    view: IView,
    currentPly?: number,
    onTurnClick?: (ply: number) => void,
}
