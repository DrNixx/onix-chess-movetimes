import { GameStore, GameRelatedStore } from 'onix-chess';

export interface MovesGraphProps {
    height?: number | string,
    isLive?: boolean,
    store: GameRelatedStore
}
