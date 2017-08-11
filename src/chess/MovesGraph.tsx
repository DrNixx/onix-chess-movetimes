import * as React from 'react';
import { ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Intl as IntlCore, intVal, formatTimestamp } from 'onix-core';
import { Intl as IntlChess } from 'onix-chess';

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

export class MovesGraph extends React.Component<MovesGraphProps, any> {
    public static defaultProps: MovesGraphProps = {
        height: 400,
        colorWhite: "#f0d9b5",
        colorBlack: "#b58863",
        white: [],
        black: [],
        startPly: 0,
        currentPly: 0,
        onTurnClick: (ply) => { }
    }    
    
    constructor(props: MovesGraphProps) {
        super(props);
        IntlChess.register();
    }

    private formatTooltipValue = (...params) => {
        return (
            <span>{formatTimestamp(Math.abs(params[0]))}</span>
        );
    }

    private formatTooltipLabel = (...params) => {
        return "";
    }

    private formatYTick = (value) => {
        return formatTimestamp(Math.abs(value));
    }

    private handleClick = (data, e) => {
        const apl = data.activePayload;
        if (apl && apl[0]) {
            const pl = apl[0];
            if (pl && pl.payload) {
                const { onTurnClick } = this.props;
                onTurnClick(pl.payload.ply);
            }
        }
    }

    render() {
        const { height, colorWhite, colorBlack, white, black, startPly } = this.props;

        let totalWhite = 0;
        let totalBlack = 0;
        let data = [];
        let turn = 1;
        let ply = startPly;
        if (startPly > 0) {
            if (startPly % 2 === 1) {
                white.unshift(0);
            }

            turn = intVal(1 + (startPly - 1) / 2);
        }

        const len = Math.max(white.length, black.length);
        for (let i = 0; i < len; i++) {
            const w = intVal(white[i]);
            const b = intVal(black[i]);
            data.push({
                turn: turn++,
                ply: ply,
                white: w,
                black: -b,
            });

            totalWhite += w;
            totalBlack += b;

            ply += 2;
        }

        return (
            <div className="movetimes">
                <div className="graph-container">
                    <ResponsiveContainer width="100%" height={height}>
                        <BarChart data={data} stackOffset="sign" margin={{top: 5, right: 30, left: 10, bottom: 5}} onClick={this.handleClick}>
                            <XAxis dataKey="turn" hide={true} />
                            <YAxis tickFormatter={this.formatYTick}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip formatter={this.formatTooltipValue} labelFormatter={this.formatTooltipLabel} />
                            <ReferenceLine y={0} stroke='#000'/>
                            <Bar dataKey="white" name={IntlCore.t("chess", "white")} fill={colorWhite} stackId="stack" />
                            <Bar dataKey="black" name={IntlCore.t("chess", "black")} fill={colorBlack} stackId="stack" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="graph-totals">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12 white" style={{ backgroundColor: colorWhite}}>
                            <span><span>{formatTimestamp(totalWhite)}</span></span>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12 black" style={{ backgroundColor: colorBlack}}>
                            <span><span>{formatTimestamp(totalBlack)}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}