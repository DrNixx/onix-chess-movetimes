import toSafeInteger from 'lodash-es/toSafeInteger';
import * as React from 'react';
import { Container, Row, Col, TooltipProps } from 'react-bootstrap';
import { ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { _, formatTimer } from 'onix-core';
import { i18nRegister, Color, Chess as Engine } from 'onix-chess';
import { MovesGraphProps } from './MovesGraphProps';

export interface MovesGraphState {
    times: number[],
}

export class MovesGraphDumb extends React.Component<MovesGraphProps, MovesGraphState> {
    public static defaultProps: MovesGraphProps = {
        height: 400,
        isLive: false,
        view: { game: { startedAtTurn: 0 } },
        currentPly: 0,
        onTurnClick: (ply) => { }
    }    
    
    constructor(props: MovesGraphProps) {
        super(props);

        i18nRegister();

        const { isLive, view } = this.props;
        let times: number[] = [];
        const scale = isLive ? 10 : 1;
        
        if (isLive) {
            times.push(0);
        }
        
        if (view.game.moveCentis !== undefined) {
            view.game.moveCentis.forEach((value, index) => {
                times.push(toSafeInteger(value * scale));
            })
        }

        if (times.length % 2 === 0) {
            times.push(0);
        }

        this.state = {
            times: times
        };

    }

    private formatTooltipValue = (...params: any[]) => {
        return (
            <span>{formatTimer(Math.abs(params[0]), true, "0")}</span>
        );
    }

    private formatTooltipLabel = (label: string | number) => {
        return (<strong>{"#" + label.toString()}</strong>);
    }

    private formatYTick = (value: number) => {
        return formatTimer(Math.abs(value), true, "0");
    }

    private handleClick = (data: any) => {
        const apl = data.activePayload;
        if (apl && apl[0]) {
            const pl = apl[0];
            if (pl && pl.payload) {
                const { onTurnClick } = this.props;
                if (onTurnClick !== undefined) {
                    onTurnClick(pl.payload.ply);
                }
            }
        }
    }

    render() {
        const { height, currentPly, view } = this.props;
        const { times } = this.state;

        let totalWhite = 0;
        let totalBlack = 0;
        let data = [];
        let turn = 1;
        let startPly = view.game.startedAtTurn;
        let ply = startPly || 0 + 1;
        if (startPly && (startPly > 0)) {
            //if (Engine.plyToColor(startPly) === Color.Black) {
            //    white.unshift(0);
            //}

            turn = Engine.plyToTurn(1, startPly);
        }

        if (times.length > 1) {
            for (let i = 1; i < times.length; i = i + 2) {
                const w = times[i];
                const b = times[i + 1];
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
        }
        

        return (
            <div className="movetimes d-block d-lg-flex">
                <div className="graph-container flex-grow-1">
                    <ResponsiveContainer width="100%" height={height}>
                        <BarChart data={data} stackOffset="sign" margin={{top: 5, right: 30, left: 10, bottom: 5}} onClick={this.handleClick}>
                            <XAxis dataKey="turn" hide={true} />
                            <YAxis tickFormatter={this.formatYTick}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip contentStyle={{ fontSize: ".75rem" }} formatter={this.formatTooltipValue} labelFormatter={this.formatTooltipLabel} />
                            <ReferenceLine y={0} stroke='#000'/>
                            <Bar dataKey="white" name={_("chess", "white")} className="white" stackId="stack" />
                            <Bar dataKey="black" name={_("chess", "black")} className="black" stackId="stack" />
                            { currentPly ? (<ReferenceLine x={Engine.plyToTurn(currentPly, startPly)} stroke="green" />) : null }
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="graph-totals align-self-stretch">
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col xs={6} lg={12} className="white py-3">
                                <span className="h-100 d-flex justify-content-center align-items-center">
                                    <label>{formatTimer(totalWhite)}</label>
                                </span>
                            </Col>
                            <Col xs={6} lg={12} className="black  py-3">
                                <span className="h-100 d-flex justify-content-center align-items-center">
                                    <label>{formatTimer(totalBlack)}</label>
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>
        );
    }
}