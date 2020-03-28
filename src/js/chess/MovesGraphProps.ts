export interface MovesGraphProps {
    height?: number | string,
    white: number[],
    black: number[],
    startPly?: number,
    currentPly?: number,
    onTurnClick?: (ply: number) => void,
}
