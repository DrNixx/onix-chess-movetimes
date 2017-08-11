import * as React from 'react';
import { ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Intl, intVal } from 'onix-core';
import { registerStrings } from 'onix-chess';

export interface MovesGraphProps {
    white: number[],
    black: number[],
    startPly?: number
}

export class MovesGraph extends React.Component<MovesGraphProps, any> {
    public static defaultProps: MovesGraphProps = {
        white: [],
        black: [],
        startPly: 0
    }    
    
    constructor(props: MovesGraphProps) {
        super(props);
        registerStrings();
    }

    private anTooltipValFmt = (...params) => {
        let obj = params[2];

        let wd = new Date();
        

        return (
            <span>
                <span>{Intl.t("chess", "white")}: {obj.payload.white}</span><br/>
                <span>{Intl.t("chess", "black")}: {obj.payload.black}</span>
            </span>
        );
    }

    private anTooltipLblFmt = (...params) => {
        return "";
    }

    render() {
        const { white, black, startPly } = this.props;

        let data = [];
        let turn = 1;
        if (startPly > 0) {
            if (startPly % 2 === 1) {
                white.unshift(0);
            }

            turn = intVal(1 + (startPly - 1) / 2);
        }

        

        const len = Math.max(white.length, black.length);
        for (let i = 0; i < len; i++) {
            data.push({
                turn: turn++,
                white: intVal(white[i]),
                black: -intVal(black[i]),
            });
        }

        return (
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} stackOffset="sign" margin={{top: 5, right: 30, left: 10, bottom: 5}}>
                    <XAxis dataKey="turn" hide={true} />
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip formatter={this.anTooltipValFmt} labelFormatter={this.anTooltipLblFmt} />
                    <ReferenceLine y={0} stroke='#000'/>
                    <Bar dataKey="white" fill="#f0d9b5" stackId="stack" />
                    <Bar dataKey="black" fill="#b58863" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        );
    }

}