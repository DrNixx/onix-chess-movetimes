import toSafeInteger from 'lodash-es/toSafeInteger';
import * as React from 'react';
import { Container, Row, Col, TooltipProps } from 'react-bootstrap';
import { ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { _, formatTimer } from 'onix-core';
import { i18nRegister, Color, Chess as Engine } from 'onix-chess';
import { MovesGraphProps } from './MovesGraphProps';

export interface MovesGraphState {
    white: number[],
    black: number[],
}

export class MovesGraphDumb extends React.Component<MovesGraphProps, MovesGraphState> {
    public static defaultProps: MovesGraphProps = {
        height: 400,
        white: [],
        black: [],
        startPly: 0,
        currentPly: 0,
        onTurnClick: (ply) => { }
    }    
    
    constructor(props: MovesGraphProps) {
        super(props);

        i18nRegister();

        let white: number[] = [];
        let black: number[] = [];

        props.white.forEach((value, index) => {
            white.push(toSafeInteger(value / 10));
        });

        props.black.forEach((value, index) => {
            black.push(toSafeInteger(value / 10));
        });

        this.state = {
            white: white,
            black: black
        };

    }

    private formatTooltipValue = (...params: any[]) => {
        return (
            <span>{formatTimer(Math.abs(params[0]))}</span>
        );
    }

    private formatTooltipLabel = (label: string | number) => {
        return (<strong>{"#" + label.toString()}</strong>);
    }

    private formatYTick = (value: number) => {
        return formatTimer(Math.abs(value));
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
        const { height, currentPly, startPly } = this.props;
        const { white, black } = this.state;

        let totalWhite = 0;
        let totalBlack = 0;
        let data = [];
        let turn = 1;
        let ply = startPly || 0 + 1;
        if (startPly && (startPly > 0)) {
            if (Engine.plyToColor(startPly) === Color.Black) {
                white.unshift(0);
            }

            turn = Engine.plyToTurn(1, startPly);
        }

        const len = Math.max(white.length, black.length);
        for (let i = 0; i < len; i++) {
            const w = toSafeInteger(white[i]);
            const b = toSafeInteger(black[i]);
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
            <div className="movetimes d-block d-lg-flex">
                <div className="graph-container flex-grow-1">
                    <ResponsiveContainer width="100%" height={height}>
                        <BarChart data={data} stackOffset="sign" margin={{top: 5, right: 30, left: 10, bottom: 5}} onClick={this.handleClick}>
                            <XAxis dataKey="turn" hide={true} />
                            <YAxis tickFormatter={this.formatYTick}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip contentStyle={{ "font-size": ".75rem" }} formatter={this.formatTooltipValue} labelFormatter={this.formatTooltipLabel} />
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