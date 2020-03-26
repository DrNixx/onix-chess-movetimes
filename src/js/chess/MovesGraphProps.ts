export interface MovesGraphProps {
    height?: number,
    colorWhite?: string,
    colorBlack?: string,
    white: number[],
    black: number[],
    startPly?: number,
    currentPly?: number,
    onTurnClick?: (ply: number) => void,
}