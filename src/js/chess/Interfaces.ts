export interface IGameWithTimes {
    startedAtTurn: number;
    moveCentis?: number[],
}

export interface IView {
    game: IGameWithTimes;
}
