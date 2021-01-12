import { createGameState, gameReducer, GameRelatedState, IGameData } from 'onix-chess';
import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { MovesGraphAsync } from '../js/chess/MovesGraphAsync';
import { MovesGraph } from '../js/chess/MovesGraph';
import { MovesGraphProps } from '../js/chess/MovesGraphProps';

class MovesGraphTestComponent extends React.Component<MovesGraphProps, {}> {
    render() {
        return (
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    12345
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <MovesGraphAsync {...this.props} />
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    12345
                </Tab>
            </Tabs>
            
        );
    }
}

export const MovesGraphTest = (container: HTMLElement, props: MovesGraphProps) => {
    ReactDOM.render(React.createElement(MovesGraphTestComponent, props), container, () => { });
};

const data1: IGameData = {
    game: {
        id: 7782247,
        load: false,
        insite: true,
        variant: {
            key: "standard",
            name: "Standard",
            shortName: "Std"
        },
        speed: "correspondence",
        perf: "maina",
        rated: true,
        initialFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -",
        fen: "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 64",
        player: "black",
        turns: 125,
        startedAtTurn: 0,
        status: {
            name: "draw",
            result: 3,
            result_name: "ничья принята"
        },
        event: "Личный чемпионат сайта по адвансу - 2018, финал",
    tournamentId: 24184,
    createdAt: 1554204125948,
    createdBy: 4,
    private: false,
    advance: true,
    lastMove: "e5g5",
    check: "h5",
    moveCentis: [
        192602477,
        1068681,
        84011568,
        6250737,
        34051340,
        741769589,
        179926605,
        83242312,
        7672019,
        249791940,
        207407681,
        54075665,
        383499997,
        299070662,
        146885838,
        721837791,
        82122390,
        613324038,
        485553529,
        2704196334,
        948548650,
        699867445,
        283675361,
        636527924,
        102507741,
        415271515,
        295777499,
        309494816,
        711305044,
        359418166,
        321281085,
        183227347,
        130574501,
        131315169,
        234063816,
        377338337,
        154001487,
        320522673,
        509138207,
        130397340,
        48950584,
        15739757,
        82941611,
        28050884,
        149505556,
        267942807,
        61011128,
        386448728,
        129283302,
        193504899,
        240755604,
        47235773,
        99706105,
        296460702,
        342222863,
        196463708,
        365752370,
        123796672,
        88499184,
        92012751,
        80334006,
        180088851,
        513092150,
        100150006,
        160326379,
        295953364,
        347543403,
        129376898,
        348035139,
        33218964,
        259127541,
        329290350,
        276558055,
        263703460,
        79924789,
        57996513,
        299327494,
        214138284,
        37536999,
        134092558,
        41277975,
        987460,
        240755134,
        19641708,
        411164023,
        194467845,
        134869570,
        42677013,
        80332563,
        43720283,
        183653247,
        516756143,
        84481415,
        38431902,
        87132784,
        5229072,
        348996339,
        75557263,
        211417929,
        172030496,
        69149332,
        14926342,
        221989458,
        86148065,
        121985444,
        9648431,
        81295767,
        2305394,
        308448618,
        3199938,
        54737697,
        20575915,
        187687530,
        41231626,
        118617908,
        967884,
        267235126,
        34912072,
        40799081,
        4487264,
        304138622,
        5196465,
        208541430,
        36614027,
        5375631
    ],
    opening: {
        code: "A05",
        name: "Reti: KIA"
    }
},
    tournament: {
        id: 24184,
        name: "Личный чемпионат сайта по адвансу - 2018, финал",
            running: false
    },
correspondence: {
    limit: "Адванс 10+2/21",
        can_pause: true,
            parts: [
                {
                    per: "game",
                    initial: 864000000,
                    increment: 172800000,
                    min: 0,
                    interval: 1,
                    max: 1814400000
                }
            ],
                white: 0,
                    black: 0,
                        totalTime: 27122872000,
                            lastMoveAt: 1581326997619,
                                serverNow: 1607550175597
},
player: {
    color: "white",
        name: "AHDPEI",
            user: {
        id: 32141,
            name: "AHDPEI",
                display: "Андрей",
                    online: "3d",
                        perfs: {
            maina: {
                games: 256,
                    rating: 1610,
                        avg: 1619
            }
        },
        language: "ru-RU",
            profile: {
            country: "UA"
        },
        patron: "bronze",
            status: "bronze",
                title: ""
    },
    rating: 1653,
        ratingDiff: -1.63
},
opponent: {
    color: "black",
        name: "Sheldon",
            user: {
        id: 82031,
            name: "Sheldon",
                display: "Станислав",
                    online: "12h",
                        perfs: {
            maina: {
                games: 410,
                    rating: 1539,
                        avg: 1557
            }
        },
        language: "ru-RU",
            profile: {
            country: "KZ"
        },
        patron: "bronze",
            status: "bronze",
                title: ""
    },
    rating: 1598,
        ratingDiff: 1.63
},
orientation: "white",
    analysis: {
    state: "ready",
        white: {
        blunder: 0,
            inaccuracy: 0,
                mistake: 0,
                    acpl: 6
    },
    black: {
        blunder: 0,
            inaccuracy: 2,
                mistake: 0,
                    acpl: 9
    }
},
treeParts: [
    {
        ply: 0,
        fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        eval: {
            cp: 13
        }
    },
    {
        ply: 1,
        fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
        id: "HNiCg/aJ",
        uci: "g1f3",
        san: "Nf3",
        eval: {
            cp: 13,
            best: "c4",
            variation: "c4 e6 Nc3 d5 d4 Nf6 Nf3 c6 cxd5 exd5 Bf4 Be7 Qc2 Nh5",
            depth: 39,
            time: 191840,
            by: "deep"
        }
    },
    {
        ply: 2,
        fen: "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
        id: "ZYdptAna",
        uci: "g8f6",
        san: "Nf6",
        eval: {
            cp: 22,
            depth: 31,
            time: 141207,
            by: "deep"
        }
    },
    {
        ply: 3,
        fen: "rnbqkb1r/pppppppp/5n2/8/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
        id: "9FBXMqzN",
        uci: "g2g3",
        san: "g3",
        eval: {
            cp: 9,
            best: "d4",
            variation: "d4 e6 c4 b6 a3 Bb7 Bf4 Be7 Nc3 O-O d5 Nh5 Be3 d6",
            depth: 29,
            time: 142141,
            by: "deep"
        }
    },
    {
        ply: 4,
        fen: "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
        id: "Fj9KB29M",
        uci: "d7d5",
        san: "d5",
        eval: {
            cp: 20,
            depth: 24,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 5,
        fen: "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq - 1 3",
        id: "thBv9UjN",
        uci: "f1g2",
        san: "Bg2",
        eval: {
            cp: -20,
            depth: 25,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 6,
        fen: "rnbqkb1r/pp2pppp/5n2/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq - 0 4",
        id: "Fwn25PJK",
        uci: "c7c5",
        san: "c5",
        eval: {
            cp: -15,
            depth: 20,
            time: 1522,
            by: "deep"
        }
    },
    {
        ply: 7,
        fen: "rnbqkb1r/pp2pppp/5n2/2pp4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq - 1 4",
        id: "UQEhj+Pa",
        uci: "e1g1",
        san: "O-O",
        eval: {
            cp: 10,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 8,
        fen: "rnbqkb1r/1p2pppp/p4n2/2pp4/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 0 5",
        id: "XbXAJMDb",
        uci: "a7a6",
        san: "a6",
        eval: {
            cp: 17,
            best: "h6",
            variation: "h6 c3 e6 d4 Be7 c4 Nc6 cxd5 exd5 dxc5 Bxc5 a3 a5 Nc3",
            depth: 21,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 9,
        fen: "rnbqkb1r/1p2pppp/p4n2/2pp4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq - 0 5",
        id: "z4LUkufj",
        uci: "c2c4",
        san: "c4",
        eval: {
            cp: 28,
            best: "d3",
            variation: "d3 e6",
            depth: 19,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 10,
        fen: "rnbqkb1r/1p2pppp/p4n2/2p5/2p5/5NP1/PP1PPPBP/RNBQ1RK1 w kq - 0 6",
        id: "chStZSbY",
        uci: "d5c4",
        san: "dxc4",
        eval: {
            cp: 33,
            depth: 22,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 11,
        fen: "rnbqkb1r/1p2pppp/p4n2/2p1N3/2p5/6P1/PP1PPPBP/RNBQ1RK1 b kq - 1 6",
        id: "ZmS0Z/8M",
        uci: "f3e5",
        san: "Ne5",
        eval: {
            cp: 42,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 12,
        fen: "1nbqkb1r/rp2pppp/p4n2/2p1N3/2p5/6P1/PP1PPPBP/RNBQ1RK1 w k - 2 7",
        id: "cihKqSaE",
        uci: "a8a7",
        san: "Ra7",
        eval: {
            best: "Qd4",
            variation: "Qd4 Nf3 Qd8 Ne5",
            depth: 23,
            time: 4001,
            by: "offline"
        },
        comments: [
            {
                name: "Inaccuracy",
                comment: "Mistake. Best mowe was Qd4"
            }
        ],
        glyphs: [
            {
                name: "Mistake",
                symbol: "?"
            }
        ]
    },
    {
        ply: 13,
        fen: "1nbqkb1r/rp2pppp/p4n2/2p1N3/P1p5/6P1/1P1PPPBP/RNBQ1RK1 b k - 0 7",
        id: "TgKoOJQr",
        uci: "a2a4",
        san: "a4",
        eval: {
            cp: 63,
            depth: 23,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 14,
        fen: "1nb1kb1r/rp2pppp/p4n2/2p1N3/P1pq4/6P1/1P1PPPBP/RNBQ1RK1 w k - 1 8",
        id: "t5yQ9ejT",
        uci: "d8d4",
        san: "Qd4",
        eval: {
            cp: 60,
            depth: 22,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 15,
        fen: "1nb1kb1r/rp2pppp/p4n2/2p5/P1pq4/5NP1/1P1PPPBP/RNBQ1RK1 b k - 2 8",
        id: "AClnjvCD",
        uci: "e5f3",
        san: "Nf3",
        eval: {
            cp: 72,
            depth: 24,
            time: 4004,
            by: "offline"
        }
    },
    {
        ply: 16,
        fen: "1nbqkb1r/rp2pppp/p4n2/2p5/P1p5/5NP1/1P1PPPBP/RNBQ1RK1 w k - 3 9",
        id: "3YrxWGOX",
        uci: "d4d8",
        san: "Qd8",
        eval: {
            cp: 66,
            best: "Qd5",
            variation: "Qd5 Nc3 Qd8 Ne5 Qd4 d3 Qxe5 Bf4 Qd4 Bxb8 Ra8 Bf4 cxd3 exd3",
            depth: 21,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 17,
        fen: "1nbqkb1r/rp2pppp/p4n2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 4 9",
        id: "Q4a9QanB",
        uci: "b1a3",
        san: "Na3",
        eval: {
            cp: 74,
            depth: 23,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 18,
        fen: "1n1qkb1r/rp2pppp/p3bn2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 5 10",
        id: "Enz0SvgB",
        uci: "c8e6",
        san: "Be6",
        eval: {
            cp: 101,
            depth: 22,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 19,
        fen: "1n1qkb1r/rp2pppp/p3bn2/2p1N3/P1p5/N5P1/1P1PPPBP/R1BQ1RK1 b k - 6 10",
        id: "fkrfrVqP",
        uci: "f3e5",
        san: "Ne5",
        eval: {
            cp: 92,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 20,
        fen: "1n2kb1r/rp2pppp/p3bn2/2p1N3/P1pq4/N5P1/1P1PPPBP/R1BQ1RK1 w k - 7 11",
        id: "cT55wAvj",
        uci: "d8d4",
        san: "Qd4",
        eval: {
            cp: 90,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 21,
        fen: "1n2kb1r/rp2pppp/p3bn2/2p5/P1pq4/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 8 11",
        id: "Ur8H+s2c",
        uci: "e5f3",
        san: "Nf3",
        eval: {
            cp: 71,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 22,
        fen: "1n1qkb1r/rp2pppp/p3bn2/2p5/P1p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 9 12",
        id: "CyTk1Wk1",
        uci: "d4d8",
        san: "Qd8",
        eval: {
            cp: 85,
            depth: 22,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 23,
        fen: "1n1qkb1r/rp2pppp/p3bn2/P1p5/2p5/N4NP1/1P1PPPBP/R1BQ1RK1 b k - 0 12",
        id: "pY/im+PN",
        uci: "a4a5",
        san: "a5",
        eval: {
            cp: 92,
            best: "Ne5",
            variation: "Ne5 Qd4 Nf3 Qd8 Qc2 b5 d3 cxd3 exd3 Rb7 axb5 axb5 Be3 Bd5",
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 24,
        fen: "1n1qkb1r/rp2pppp/p4n2/P1pb4/2p5/N4NP1/1P1PPPBP/R1BQ1RK1 w k - 1 13",
        id: "b779Qolb",
        uci: "e6d5",
        san: "Bd5",
        eval: {
            cp: 102,
            best: "Qxa5",
            variation: "Qxa5 d3 Nc6 Ng5 Bd7 Bf4 cxd3 Nc4 Qb4 exd3 h6 Bd2 Qb5 Bxc6",
            depth: 21,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 25,
        fen: "1n1qkb1r/rp2pppp/p4n2/P1pb4/Q1p5/N4NP1/1P1PPPBP/R1B2RK1 b k - 2 13",
        id: "qEOvHw0J",
        uci: "d1a4",
        san: "Qa4+",
        eval: {
            cp: 76,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 26,
        fen: "1n1qkb1r/rp2pppp/p1b2n2/P1p5/Q1p5/N4NP1/1P1PPPBP/R1B2RK1 w k - 3 14",
        id: "SY3+CyoV",
        uci: "d5c6",
        san: "Bc6",
        eval: {
            cp: 90,
            depth: 24,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 27,
        fen: "1n1qkb1r/rp2pppp/p1b2n2/P1p5/2Q5/N4NP1/1P1PPPBP/R1B2RK1 b k - 0 14",
        id: "pXCuxIl9",
        uci: "a4c4",
        san: "Qxc4",
        eval: {
            cp: 79,
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 28,
        fen: "1n1qkb1r/rp3ppp/p1b1pn2/P1p5/2Q5/N4NP1/1P1PPPBP/R1B2RK1 w k - 0 15",
        id: "nTZNxnzK",
        uci: "e7e6",
        san: "e6",
        eval: {
            cp: 98,
            depth: 24,
            time: 4012,
            by: "offline"
        }
    },
    {
        ply: 29,
        fen: "1n1qkb1r/rp3ppp/p1b1pn2/P1p5/2QP4/N4NP1/1P2PPBP/R1B2RK1 b k - 0 15",
        id: "GWzvNxXr",
        uci: "d2d4",
        san: "d4",
        eval: {
            cp: 81,
            depth: 23,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 30,
        fen: "3qkb1r/rp1n1ppp/p1b1pn2/P1p5/2QP4/N4NP1/1P2PPBP/R1B2RK1 w k - 1 16",
        id: "l9rh4CBe",
        uci: "b8d7",
        san: "Nbd7",
        eval: {
            cp: 82,
            best: "Qxa5",
            variation: "Qxa5 dxc5",
            depth: 20,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 31,
        fen: "3qkb1r/rp1n1ppp/p1b1pn2/P1p1N3/2QP4/N5P1/1P2PPBP/R1B2RK1 b k - 2 16",
        id: "i2tziaE0",
        uci: "f3e5",
        san: "Ne5",
        eval: {
            cp: 74,
            depth: 20,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 32,
        fen: "3qkb1r/rp1n1ppp/p3pn2/P1p1N3/2QP4/N5P1/1P2PPbP/R1B2RK1 w k - 0 17",
        id: "DlPB47uf",
        uci: "c6g2",
        san: "Bxg2",
        eval: {
            cp: 95,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 33,
        fen: "3qkb1r/rp1n1ppp/p3pn2/P1p1N3/2QP4/N5P1/1P2PPKP/R1B2R2 b k - 0 17",
        id: "NNkJ4i9q",
        uci: "g1g2",
        san: "Kxg2",
        eval: {
            cp: 80,
            depth: 26,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 34,
        fen: "3qkb1r/rp1n1ppp/p3pn2/P3N3/2Qp4/N5P1/1P2PPKP/R1B2R2 w k - 0 18",
        id: "cK83+Z0P",
        uci: "c5d4",
        san: "cxd4",
        eval: {
            cp: 85,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 35,
        fen: "3qkb1r/rp1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R4R2 b k - 1 18",
        id: "RTXqTwWE",
        uci: "c1f4",
        san: "Bf4",
        eval: {
            cp: 85,
            depth: 23,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 36,
        fen: "r2qkb1r/1p1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R4R2 w k - 2 19",
        id: "y9tlV4sT",
        uci: "a7a8",
        san: "Ra8",
        eval: {
            cp: 91,
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 37,
        fen: "r2qkb1r/1p1n1ppp/p3pn2/P3N3/2Qp1B2/N5P1/1P2PPKP/R2R4 b k - 3 19",
        id: "sxm64/qW",
        uci: "f1d1",
        san: "Rfd1",
        eval: {
            cp: 77,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 38,
        fen: "r2qk2r/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/N5P1/1P2PPKP/R2R4 w k - 4 20",
        id: "hhjMZYZY",
        uci: "f8c5",
        san: "Bc5",
        eval: {
            cp: 68,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 39,
        fen: "r2qk2r/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/6P1/1PN1PPKP/R2R4 b k - 5 20",
        id: "bI5AtMLA",
        uci: "a3c2",
        san: "Nc2",
        eval: {
            cp: 84,
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 40,
        fen: "r2q1rk1/1p1n1ppp/p3pn2/P1b1N3/2Qp1B2/6P1/1PN1PPKP/R2R4 w - - 6 21",
        id: "2u+XpKxX",
        uci: "e8g8",
        san: "O-O",
        eval: {
            cp: 49,
            best: "b5",
            variation: "b5",
            depth: 24,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 41,
        fen: "r2q1rk1/1p1N1ppp/p3pn2/P1b5/2Qp1B2/6P1/1PN1PPKP/R2R4 b - - 0 21",
        id: "vx/f1Jbs",
        uci: "e5d7",
        san: "Nxd7",
        eval: {
            cp: 84,
            best: "Nxd4",
            variation: "Nxd4 b5",
            depth: 25,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 42,
        fen: "r4rk1/1p1q1ppp/p3pn2/P1b5/2Qp1B2/6P1/1PN1PPKP/R2R4 w - - 0 22",
        id: "jUWb5llA",
        uci: "d8d7",
        san: "Qxd7",
        eval: {
            cp: 65,
            best: "Nxd7",
            variation: "Nxd7 Nxd4 b5 axb6 Qxb6 Nb3 Qb7+ f3 Bb6 Qb4 Nf6 e4 Rfc8 Na5",
            depth: 23,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 43,
        fen: "r4rk1/1p1q1ppp/p3pn2/P1Q5/3p1B2/6P1/1PN1PPKP/R2R4 b - - 0 22",
        id: "QqeAldZQ",
        uci: "c4c5",
        san: "Qxc5",
        eval: {
            cp: 84,
            depth: 27,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 44,
        fen: "r1r3k1/1p1q1ppp/p3pn2/P1Q5/3p1B2/6P1/1PN1PPKP/R2R4 w - - 1 23",
        id: "fobVkWvy",
        uci: "f8c8",
        san: "Rfc8",
        eval: {
            cp: 81,
            depth: 26,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 45,
        fen: "r1r3k1/1p1q1ppp/p3pn2/P7/3Q1B2/6P1/1PN1PPKP/R2R4 b - - 0 23",
        id: "ECPXcV39",
        uci: "c5d4",
        san: "Qxd4",
        eval: {
            cp: 92,
            depth: 26,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 46,
        fen: "r1r3k1/1p3ppp/p1q1pn2/P7/3Q1B2/6P1/1PN1PPKP/R2R4 w - - 1 24",
        id: "PhAISfN/",
        uci: "d7c6",
        san: "Qc6+",
        eval: {
            cp: 80,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 47,
        fen: "r1r3k1/1p3ppp/p1q1pn2/P7/3Q1B2/5PP1/1PN1P1KP/R2R4 b - - 0 24",
        id: "SWze/jp/",
        uci: "f2f3",
        san: "f3",
        eval: {
            cp: 62,
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 48,
        fen: "r1r3k1/1p3ppp/p3pn2/P7/3Q1B2/5PP1/1Pq1P1KP/R2R4 w - - 0 25",
        id: "zZpF+2Hr",
        uci: "c6c2",
        san: "Qxc2",
        eval: {
            cp: 72,
            depth: 26,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 49,
        fen: "r1r3k1/1p3ppp/p3pn2/P7/3Q1B2/5PP1/1PqRP1KP/R7 b - - 1 25",
        id: "LSNI5h/Z",
        uci: "d1d2",
        san: "Rd2",
        eval: {
            cp: 87,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 50,
        fen: "r1r3k1/1p3ppp/p3pn2/P7/2qQ1B2/5PP1/1P1RP1KP/R7 w - - 2 26",
        id: "k5XFzsVg",
        uci: "c2c4",
        san: "Qc4",
        eval: {
            cp: 75,
            best: "Qc5",
            variation: "Qc5 Be5",
            depth: 22,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 51,
        fen: "r1r3k1/1p3ppp/p3pn2/P7/2Q2B2/5PP1/1P1RP1KP/R7 b - - 0 26",
        id: "pEQ+L87A",
        uci: "d4c4",
        san: "Qxc4",
        eval: {
            cp: 82,
            best: "Be5",
            variation: "Be5 Qxd4 Bxd4 Rc7 Rad1 Rd8 Kf2 Rcd7 Ke1 Ne8 Bf2 Rxd2 Rxd2 Rxd2",
            depth: 25,
            time: 4005,
            by: "offline"
        }
    },
    {
        ply: 52,
        fen: "r5k1/1p3ppp/p3pn2/P7/2r2B2/5PP1/1P1RP1KP/R7 w - - 0 27",
        id: "1yfcWdMc",
        uci: "c8c4",
        san: "Rxc4",
        eval: {
            cp: 81,
            depth: 28,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 53,
        fen: "r5k1/1p3ppp/p3pn2/P7/2r1PB2/5PP1/1P1R2KP/R7 b - - 0 27",
        id: "r/88K7uQ",
        uci: "e2e4",
        san: "e4",
        eval: {
            cp: 64,
            depth: 27,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 54,
        fen: "2r3k1/1p3ppp/p3pn2/P7/2r1PB2/5PP1/1P1R2KP/R7 w - - 1 28",
        id: "TekWg9kO",
        uci: "a8c8",
        san: "Rac8",
        eval: {
            cp: 79,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 55,
        fen: "2r3k1/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/R7 b - - 2 28",
        id: "Ge/2mnIz",
        uci: "f4e5",
        san: "Be5",
        eval: {
            cp: 63,
            best: "Kf2",
            variation: "Kf2 Rc2 Rd1 Kf8 Ke3 Rxd2 Rxd2 Ke7 Bd6+ Ke8 Be5 Rc5 Bc3 Nd7",
            depth: 21,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 56,
        fen: "2r2k2/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/R7 w - - 3 29",
        id: "1b8v2Cc6",
        uci: "g8f8",
        san: "Kf8",
        eval: {
            cp: 63,
            depth: 24,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 57,
        fen: "2r2k2/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/3R4 b - - 4 29",
        id: "yZH4Q1fw",
        uci: "a1d1",
        san: "Rad1",
        eval: {
            cp: 77,
            best: "Bc3",
            variation: "Bc3 h5 Kf2 Ke7 Ra3 R8c5 Rb3 Rb5 Rxb5 axb5 Ke3 Ne8 Rd4 Rxd4",
            depth: 23,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 58,
        fen: "2r1k3/1p3ppp/p3pn2/P3B3/2r1P3/5PP1/1P1R2KP/3R4 w - - 5 30",
        id: "Olfnf4gp",
        uci: "f8e8",
        san: "Ke8",
        eval: {
            cp: 64,
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 59,
        fen: "2r1k3/1p3ppp/p3pn2/P7/2r1P3/2B2PP1/1P1R2KP/3R4 b - - 6 30",
        id: "+dj//EH9",
        uci: "e5c3",
        san: "Bc3",
        eval: {
            cp: 74,
            depth: 28,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 60,
        fen: "2r1k3/1p3ppp/p3pn2/P1r5/4P3/2B2PP1/1P1R2KP/3R4 w - - 7 31",
        id: "kT0l0qLZ",
        uci: "c4c5",
        san: "R4c5",
        eval: {
            cp: 60,
            depth: 28,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 61,
        fen: "2r1k3/1p3ppp/p3pn2/P1r5/4P3/2B2PP1/1P1R1K1P/3R4 b - - 8 31",
        id: "+74NNuwI",
        uci: "g2f2",
        san: "Kf2",
        eval: {
            cp: 60,
            best: "h3",
            variation: "h3 Rb5 Kf2 Ke7 Rd4 e5 Rb4 Rxb4 Bxb4+ Ke8 Bc3 Nd7 Ke3 f6",
            depth: 26,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 62,
        fen: "2r1k3/1p3ppp/p3pn2/Pr6/4P3/2B2PP1/1P1R1K1P/3R4 w - - 9 32",
        id: "2XyW5kW",
        uci: "c5b5",
        san: "Rb5",
        eval: {
            cp: 65,
            depth: 24,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 63,
        fen: "2r1k3/1p3ppp/p3pn2/Pr6/4P3/2B1KPP1/1P1R3P/3R4 b - - 10 32",
        id: "eLoq6S9g",
        uci: "f2e3",
        san: "Ke3",
        eval: {
            cp: 68,
            best: "h3",
            variation: "h3 Ke7",
            depth: 23,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 64,
        fen: "2r5/1p2kppp/p3pn2/Pr6/4P3/2B1KPP1/1P1R3P/3R4 w - - 11 33",
        id: "dvaXgpTL",
        uci: "e8e7",
        san: "Ke7",
        eval: {
            cp: 50,
            depth: 24,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 65,
        fen: "2r5/1p2kppp/p3pn2/Pr6/3RP3/2B1KPP1/1P5P/3R4 b - - 12 33",
        id: "2UJmrF/h",
        uci: "d2d4",
        san: "Rd4",
        eval: {
            cp: 61,
            best: "h4",
            variation: "h4 h5 Rd4 Ke8 R1d2 g6 Ke2 Ke7 Rd1 Ke8 R1d3 Ke7 Ke3 Ke8",
            depth: 22,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 66,
        fen: "2r5/1p2kp1p/p3pnp1/Pr6/3RP3/2B1KPP1/1P5P/3R4 w - - 0 34",
        id: "TuWtp6yK",
        uci: "g7g6",
        san: "g6",
        eval: {
            cp: 48,
            best: "e5",
            variation: "e5 Rb4 Rcc5 f4 Ng4+ Ke2 Ke8 Rxb5 Rxb5 h3 Nf6 Kf3 exf4 Kxf4",
            depth: 21,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 67,
        fen: "2r5/1p2kp1p/p3pnp1/Pr6/3RP1P1/2B1KP2/1P5P/3R4 b - - 0 34",
        id: "5hMT21uj",
        uci: "g3g4",
        san: "g4",
        eval: {
            cp: 69,
            depth: 21,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 68,
        fen: "2r5/1p2kp2/p3pnp1/Pr5p/3RP1P1/2B1KP2/1P5P/3R4 w - - 0 35",
        id: "HYKmL52F",
        uci: "h7h5",
        san: "h5",
        eval: {
            cp: 75,
            best: "e5",
            variation: "e5",
            depth: 23,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 69,
        fen: "2r5/1p2kp2/p3pnp1/Pr5P/3RP3/2B1KP2/1P5P/3R4 b - - 0 35",
        id: "AKCq3+q+",
        uci: "g4h5",
        san: "gxh5",
        eval: {
            cp: 81,
            depth: 26,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 70,
        fen: "2r5/1p2kp2/p3pnp1/P6r/3RP3/2B1KP2/1P5P/3R4 w - - 0 36",
        id: "zmOizI/D",
        uci: "b5h5",
        san: "Rxh5",
        eval: {
            cp: 65,
            depth: 27,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 71,
        fen: "2r5/1p2kp2/p3pnp1/P6r/1R2P3/2B1KP2/1P5P/3R4 b - - 1 36",
        id: "c3fFoxRX",
        uci: "d4b4",
        san: "Rb4",
        eval: {
            cp: 64,
            depth: 25,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 72,
        fen: "8/1pr1kp2/p3pnp1/P6r/1R2P3/2B1KP2/1P5P/3R4 w - - 2 37",
        id: "QCiUd4i7",
        uci: "c8c7",
        san: "Rc7",
        eval: {
            cp: 90,
            depth: 26,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 73,
        fen: "8/1pr1kp2/p3pnp1/P6r/4P3/1RB1KP2/1P5P/3R4 b - - 3 37",
        id: "Gwhn2icW",
        uci: "b4b3",
        san: "Rb3",
        eval: {
            cp: 64,
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 74,
        fen: "8/1pr1kp2/p3pnp1/P7/4P3/1RB1KP1r/1P5P/3R4 w - - 4 38",
        id: "HN3G3+1Z",
        uci: "h5h3",
        san: "Rh3",
        eval: {
            cp: 35,
            depth: 24,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 75,
        fen: "8/1pr1kp2/p3pnp1/P7/4PK2/1RB2P1r/1P5P/3R4 b - - 5 38",
        id: "FUCnzwvE",
        uci: "e3f4",
        san: "Kf4",
        eval: {
            cp: 75,
            depth: 29,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 76,
        fen: "8/1prnkp2/p3p1p1/P7/4PK2/1RB2P1r/1P5P/3R4 w - - 6 39",
        id: "iF2UgrVf",
        uci: "f6d7",
        san: "Nd7",
        eval: {
            cp: 77,
            depth: 27,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 77,
        fen: "8/1prnkp2/p3p1p1/P7/1B2PK2/1R3P1r/1P5P/3R4 b - - 7 39",
        id: "oZdalE/o",
        uci: "c3b4",
        san: "Bb4+",
        eval: {
            cp: 35,
            depth: 30,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 78,
        fen: "8/1prn1p2/p3pkp1/P7/1B2PK2/1R3P1r/1P5P/3R4 w - - 8 40",
        id: "bstw6hnY",
        uci: "e7f6",
        san: "Kf6",
        eval: {
            cp: 36,
            depth: 31,
            time: 4007,
            by: "offline"
        }
    },
    {
        ply: 79,
        fen: "8/1prn1p2/p2Bpkp1/P7/4PK2/1R3P1r/1P5P/3R4 b - - 9 40",
        id: "u+vT4wYR",
        uci: "b4d6",
        san: "Bd6",
        eval: {
            cp: 35,
            depth: 32,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 80,
        fen: "8/1prn1p2/p2Bpk2/P5p1/4PK2/1R3P1r/1P5P/3R4 w - - 0 41",
        id: "i6Kb1Ine",
        uci: "g6g5",
        san: "g5+",
        eval: {
            cp: 35,
            depth: 29,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 81,
        fen: "8/1prn1p2/p2Bpk2/P5p1/4P1K1/1R3P1r/1P5P/3R4 b - - 1 41",
        id: "fCYEkuQK",
        uci: "f4g4",
        san: "Kg4",
        eval: {
            cp: 51,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 82,
        fen: "8/1prn1p2/p2Bpk2/P5p1/4P1Kr/1R3P2/1P5P/3R4 w - - 2 42",
        id: "x9fB/Vxn",
        uci: "h3h4",
        san: "Rh4+",
        eval: {
            cp: 51,
            depth: 30,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 83,
        fen: "8/1prn1p2/p2Bpk2/P5p1/4P2r/1R3PK1/1P5P/3R4 b - - 3 42",
        id: "Dn/olPI8",
        uci: "g4g3",
        san: "Kg3",
        eval: {
            cp: 60,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 84,
        fen: "8/1p1n1p2/p2Bpk2/P5p1/4P2r/1R3PK1/1Pr4P/3R4 w - - 4 43",
        id: "Rnd3lDvw",
        uci: "c7c2",
        san: "Rc2",
        eval: {
            cp: 45,
            depth: 30,
            time: 4015,
            by: "offline"
        }
    },
    {
        ply: 85,
        fen: "8/1p1n1p2/p2Bpk2/P5p1/4P2r/1R3PKP/1Pr5/3R4 b - - 0 43",
        id: "geBkcMIt",
        uci: "h2h3",
        san: "h3",
        eval: {
            cp: 76,
            depth: 29,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 86,
        fen: "8/1p1n1p2/p2Bp1k1/P5p1/4P2r/1R3PKP/1Pr5/3R4 w - - 1 44",
        id: "jB49m84n",
        uci: "f6g6",
        san: "Kg6",
        eval: {
            cp: 32,
            depth: 32,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 87,
        fen: "8/1p1nBp2/p3p1k1/P5p1/4P2r/1R3PKP/1Pr5/3R4 b - - 2 44",
        id: "Cdq1rimi",
        uci: "d6e7",
        san: "Be7",
        eval: {
            cp: 32,
            depth: 30,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 88,
        fen: "8/1p2Bp2/p3p1k1/P3n1p1/4P2r/1R3PKP/1Pr5/3R4 w - - 3 45",
        id: "flOycexC",
        uci: "d7e5",
        san: "Ne5",
        eval: {
            cp: 30,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 89,
        fen: "3R4/1p2Bp2/p3p1k1/P3n1p1/4P2r/1R3PKP/1Pr5/8 b - - 4 45",
        id: "bnNmFVyc",
        uci: "d1d8",
        san: "Rd8",
        eval: {
            cp: 29,
            depth: 30,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 90,
        fen: "3R4/1p2B3/p3ppk1/P3n1p1/4P2r/1R3PKP/1Pr5/8 w - - 0 46",
        id: "x72FNod5",
        uci: "f7f6",
        san: "f6",
        eval: {
            cp: 35,
            depth: 29,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 91,
        fen: "3R4/1R2B3/p3ppk1/P3n1p1/4P2r/5PKP/1Pr5/8 b - - 0 46",
        id: "JdshT3tW",
        uci: "b3b7",
        san: "Rxb7",
        eval: {
            cp: 76,
            best: "Bd6",
            variation: "Bd6 Nc6 Rg8+ Kh7 Rf8 Nxa5 Rb6 Rc6 Rxc6 Nxc6 Rxf6 Kg7 Rf8 Rh7",
            depth: 25,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 92,
        fen: "3R4/1R2B3/p3ppk1/P3n1p1/4Pr2/5PKP/1Pr5/8 w - - 1 47",
        id: "MgILvU0Y",
        uci: "h4f4",
        san: "Rf4",
        eval: {
            cp: 29,
            depth: 33,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 93,
        fen: "3R4/4B3/p3ppk1/P3n1p1/4Pr2/1R3PKP/1Pr5/8 b - - 2 47",
        id: "rq+2i1h2",
        uci: "b7b3",
        san: "Rb3",
        eval: {
            cp: 29,
            depth: 35,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 94,
        fen: "3R4/4B3/p1n1ppk1/P5p1/4Pr2/1R3PKP/1Pr5/8 w - - 3 48",
        id: "LI7rkALC",
        uci: "e5c6",
        san: "Nc6",
        eval: {
            cp: 30,
            depth: 34,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 95,
        fen: "2R5/4B3/p1n1ppk1/P5p1/4Pr2/1R3PKP/1Pr5/8 b - - 4 48",
        id: "yYJAXmXJ",
        uci: "d8c8",
        san: "Rc8",
        eval: {
            cp: 30,
            depth: 34,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 96,
        fen: "2R5/4B3/p3ppk1/n5p1/4Pr2/1R3PKP/1Pr5/8 w - - 0 49",
        id: "19SAUn5h",
        uci: "c6a5",
        san: "Nxa5",
        eval: {
            cp: 30,
            depth: 35,
            time: 4029,
            by: "offline"
        }
    },
    {
        ply: 97,
        fen: "2R5/4B3/p3ppk1/n5p1/4Pr2/2R2PKP/1Pr5/8 b - - 1 49",
        id: "W3w9Vj8m",
        uci: "b3c3",
        san: "Rbc3",
        eval: {
            cp: 29,
            depth: 33,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 98,
        fen: "2R5/4B3/p3ppk1/n5p1/4Pr2/2R2PKP/1r6/8 w - - 0 50",
        id: "MC7Pe06J",
        uci: "c2b2",
        san: "Rxb2",
        eval: {
            cp: 29,
            depth: 33,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 99,
        fen: "2R5/8/p2Bppk1/n5p1/4Pr2/2R2PKP/1r6/8 b - - 1 50",
        id: "URB7F778",
        uci: "e7d6",
        san: "Bd6",
        eval: {
            cp: 29,
            depth: 31,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 100,
        fen: "2R5/8/p2B1pk1/n3p1p1/4Pr2/2R2PKP/1r6/8 w - - 0 51",
        id: "yIdORaX3",
        uci: "e6e5",
        san: "e5",
        eval: {
            cp: 29,
            depth: 31,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 101,
        fen: "2R5/2R5/p2B1pk1/n3p1p1/4Pr2/5PKP/1r6/8 b - - 1 51",
        id: "KPfUqmH4",
        uci: "c3c7",
        san: "R3c7",
        eval: {
            cp: 46,
            depth: 30,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 102,
        fen: "2R5/1rR5/p2B1pk1/n3p1p1/4Pr2/5PKP/8/8 w - - 2 52",
        id: "VPIOMU4o",
        uci: "b2b7",
        san: "Rb7",
        eval: {
            cp: 61,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 103,
        fen: "2R5/1R6/p2B1pk1/n3p1p1/4Pr2/5PKP/8/8 b - - 0 52",
        id: "KxZSBTwu",
        uci: "c7b7",
        san: "Rxb7",
        eval: {
            cp: 51,
            depth: 30,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 104,
        fen: "2R5/1n6/p2B1pk1/4p1p1/4Pr2/5PKP/8/8 w - - 0 53",
        id: "9AlnAE4v",
        uci: "a5b7",
        san: "Nxb7",
        eval: {
            cp: 63,
            depth: 34,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 105,
        fen: "2R5/1n2B3/p4pk1/4p1p1/4Pr2/5PKP/8/8 b - - 1 53",
        id: "KeiCxLnu",
        uci: "d6e7",
        san: "Be7",
        eval: {
            cp: 29,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 106,
        fen: "2R5/4B3/p4pk1/n3p1p1/4Pr2/5PKP/8/8 w - - 2 54",
        id: "l3fnHAc/",
        uci: "b7a5",
        san: "Na5",
        eval: {
            cp: 29,
            depth: 33,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 107,
        fen: "8/4B3/p4pk1/n3p1p1/4Pr2/2R2PKP/8/8 b - - 3 54",
        id: "uclL2LwS",
        uci: "c8c3",
        san: "Rc3",
        eval: {
            cp: 29,
            depth: 33,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 108,
        fen: "8/4B3/p4p2/n3p1pk/4Pr2/2R2PKP/8/8 w - - 4 55",
        id: "CcUd0J2T",
        uci: "g6h5",
        san: "Kh5",
        eval: {
            cp: 29,
            depth: 32,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 109,
        fen: "8/4B3/p4p2/n3p1pk/4Pr2/2R2P1P/6K1/8 b - - 5 55",
        id: "ZG4m+W9S",
        uci: "g3g2",
        san: "Kg2",
        eval: {
            cp: 29,
            depth: 30,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 110,
        fen: "8/4B3/p7/n3pppk/4Pr2/2R2P1P/6K1/8 w - - 0 56",
        id: "s77VErwl",
        uci: "f6f5",
        san: "f5",
        eval: {
            cp: 29,
            depth: 32,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 111,
        fen: "8/8/p7/n3pppk/1B2Pr2/2R2P1P/6K1/8 b - - 1 56",
        id: "91oxejeg",
        uci: "e7b4",
        san: "Bb4",
        eval: {
            cp: 30,
            depth: 35,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 112,
        fen: "8/1n6/p7/4pppk/1B2Pr2/2R2P1P/6K1/8 w - - 2 57",
        id: "naPoSLqb",
        uci: "a5b7",
        san: "Nb7",
        eval: {
            cp: 30,
            depth: 34,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 113,
        fen: "8/1nR5/p7/4pppk/1B2Pr2/5P1P/6K1/8 b - - 3 57",
        id: "oC7tFhyV",
        uci: "c3c7",
        san: "Rc7",
        eval: {
            cp: 30,
            depth: 34,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 114,
        fen: "3n4/2R5/p7/4pppk/1B2Pr2/5P1P/6K1/8 w - - 4 58",
        id: "Ekkmvn5q",
        uci: "b7d8",
        san: "Nd8",
        eval: {
            cp: 30,
            depth: 32,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 115,
        fen: "3n4/2R5/p7/4pppk/4Pr2/5P1P/3B2K1/8 b - - 5 58",
        id: "7we9YW3g",
        uci: "b4d2",
        san: "Bd2",
        eval: {
            cp: 30,
            depth: 31,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 116,
        fen: "8/2R5/p3n3/4pppk/4Pr2/5P1P/3B2K1/8 w - - 6 59",
        id: "TAnxFZK9",
        uci: "d8e6",
        san: "Ne6",
        eval: {
            cp: 30,
            best: "fxe4",
            variation: "fxe4 Bxf4 exf3+ Kxf3 exf4 Re7 Nc6 Rh7+ Kg6 Rc7 Ne5+ Ke4 Nf7 Rc6+",
            depth: 29,
            time: 4002,
            by: "offline"
        },
        comments: [
            {
                name: "Inaccuracy",
                comment: "Mistake. Best mowe was fxe4"
            }
        ],
        glyphs: [
            {
                name: "Mistake",
                symbol: "?"
            }
        ]
    },
    {
        ply: 117,
        fen: "8/4R3/p3n3/4pppk/4Pr2/5P1P/3B2K1/8 b - - 7 59",
        id: "H3/RfEw9",
        uci: "c7e7",
        san: "Re7",
        eval: {
            cp: 94,
            depth: 36,
            time: 4003,
            by: "offline"
        }
    },
    {
        ply: 118,
        fen: "8/4R3/p3n3/4p1pk/4pr2/5P1P/3B2K1/8 w - - 0 60",
        id: "2IXKRiSp",
        uci: "f5e4",
        san: "fxe4",
        eval: {
            cp: 92,
            depth: 40,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 119,
        fen: "8/8/p3R3/4p1pk/4pr2/5P1P/3B2K1/8 b - - 0 60",
        id: "GEygE8Dg",
        uci: "e7e6",
        san: "Rxe6",
        eval: {
            cp: 84,
            depth: 41,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 120,
        fen: "8/8/p3R3/4p1pk/5r2/5p1P/3B2K1/8 w - - 0 61",
        id: "yTsvZe9Y",
        uci: "e4f3",
        san: "exf3+",
        eval: {
            cp: 84,
            depth: 41,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 121,
        fen: "8/8/p3R3/4p1pk/5r2/5p1P/3B1K2/8 b - - 1 61",
        id: "YaX7vwd5",
        uci: "g2f2",
        san: "Kf2",
        eval: {
            cp: 84,
            depth: 39,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 122,
        fen: "8/8/p3R3/4p1pk/7r/5p1P/3B1K2/8 w - - 2 62",
        id: "oD3u1r6Z",
        uci: "f4h4",
        san: "Rh4",
        eval: {
            cp: 84,
            depth: 37,
            time: 4002,
            by: "offline"
        }
    },
    {
        ply: 123,
        fen: "8/8/p7/4R1pk/7r/5p1P/3B1K2/8 b - - 0 62",
        id: "DG/wvSZa",
        uci: "e6e5",
        san: "Rxe5",
        eval: {
            cp: 84,
            depth: 35,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 124,
        fen: "8/8/p7/4R1pk/8/5p1r/3B1K2/8 w - - 0 63",
        id: "dPZxfyfG",
        uci: "h4h3",
        san: "Rxh3",
        eval: {
            cp: 84,
            depth: 36,
            time: 4001,
            by: "offline"
        }
    },
    {
        ply: 125,
        fen: "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 63",
        id: "hkVmuwT9",
        uci: "e5g5",
        san: "Rxg5+",
        eval: {
            cp: 91,
            depth: 30,
            time: 4002,
            by: "offline"
        }
    }
],
    finalFen: "8/8/p7/6Rk/8/5p1r/3B1K2/8 b - - 0 64",
};

const data2: IGameData = {
    game: {
        id: 7827390,
        load: false,
        insite: true,
        variant: {
            key: "standard",
            name: "Standard",
            shortName: "Std"
        },
        speed: "correspondence",
        perf: "main",
        rated: true,
        initialFen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq - 0 4",
        fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq - 0 5",
        player: "black",
        turns: 0,
        startedAtTurn: 7,
        status: {
            name: "resign",
            result: 1,
            result_name: "соперник сдался"
        },
        event: "Шахматные звёзды. Котов vs Шахматные звёзды. Морфи",
        tournamentId: 25259,
        createdAt: 1600682165728,
        createdBy: 4,
        private: false,
        advance: false,
        winner: "white",
        lastMove: "e2f3",
        moveCentis: [
            0,
            11804810,
            40897491,
            35134103,
            45435386,
            85751,
            198062,
            39157036,
            1594438,
            15221382,
            35079799,
            35532669,
            4941816,
            6027038,
            24952134,
            4146568,
            48847349,
            9354859,
            20227181,
            6747857,
            6202262,
            45496398,
            45962014,
            43149386,
            44048174,
            32703630,
            3184423,
            22906398,
            23771158,
            37687675,
            2744473,
            4533730,
            21883796,
            3646669,
            118563,
            125773,
            19011496,
            35381866,
            5824473,
            5397322,
            34380950,
            478834,
            226983
        ],
        opening: {
            code: "A00",
            name: "Start position"
        }
    },
    tournament: {
        id: 25259,
        name: "Шахматные звёзды. Котов vs Шахматные звёзды. Морфи",
        running: false
    },
    correspondence: {
        limit: "24 дня/партия б/о",
        can_pause: false,
        parts: [
            {
                per: "game",
                initial: 1036800000,
                increment: 0,
                min: 0
            }
        ],
        white: 0,
        black: 0,
        totalTime: 862108000,
        lastMoveAt: 1601544273045,
        serverNow: 1607527805065
    },
    player: {
        color: "white",
        name: "ГреМ",
        user: {
            id: 6121,
            name: "ГреМ",
            display: "Грешных Михаил",
            online: "12h",
            perfs: {
                main: {
                    games: 560,
                    rating: 1904,
                    avg: 1931
                }
            },
            language: "ru-RU",
            profile: {
                country: "RU"
            },
            patron: "bronze",
            status: "bronze",
            title: ""
        },
        rating: 1952,
        ratingDiff: 3.8
    },
    opponent: {
        color: "black",
        name: "GolovkoN",
        user: {
            id: 324955,
            name: "GolovkoN",
            display: "GolovkoN",
            online: "now",
            perfs: {
                main: {
                    games: 568,
                    rating: 1760,
                    avg: 1716
                }
            },
            language: "ru-RU",
            patron: "base",
            status: "base",
            title: ""
        },
        rating: 1700,
        ratingDiff: -3.8
    },
    orientation: "white",
    analysis: {
        state: "unanalysed"
    },
    treeParts: [
        {
            ply: 7,
            fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq -"
        },
        {
            ply: 8,
            fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R w KQkq - 1 5",
            id: "dK25CLAP",
            uci: "c8b7",
            san: "Bb7"
        },
        {
            ply: 9,
            fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq - 2 5",
            id: "N1rngpeQ",
            uci: "b1c3",
            san: "Nc3"
        },
        {
            ply: 10,
            fen: "rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 6",
            id: "cnPZMH/Q",
            uci: "d7d5",
            san: "d5"
        },
        {
            ply: 11,
            fen: "rn1qkb1r/pbp2ppp/1p2pn2/3p2B1/2PP4/P1N2N2/1P2PPPP/R2QKB1R b KQkq - 1 6",
            id: "MVYXkxe",
            uci: "c1g5",
            san: "Bg5"
        },
        {
            ply: 12,
            fen: "rn1qk2r/pbp1bppp/1p2pn2/3p2B1/2PP4/P1N2N2/1P2PPPP/R2QKB1R w KQkq - 2 7",
            id: "Ge7GxMhg",
            uci: "f8e7",
            san: "Be7"
        },
        {
            ply: 13,
            fen: "rn1qk2r/pbp1bppp/1p2pn2/3p2B1/2PP4/P1N1PN2/1P3PPP/R2QKB1R b KQkq - 0 7",
            id: "uf4czFtE",
            uci: "e2e3",
            san: "e3"
        },
        {
            ply: 14,
            fen: "r2qk2r/pbpnbppp/1p2pn2/3p2B1/2PP4/P1N1PN2/1P3PPP/R2QKB1R w KQkq - 1 8",
            id: "7bMIIXjt",
            uci: "b8d7",
            san: "Nbd7"
        },
        {
            ply: 15,
            fen: "r2qk2r/pbpnbppp/1p2pn2/3p2B1/2PP4/P1N1PN2/1P3PPP/2RQKB1R b Kkq - 2 8",
            id: "jPCJY4Rc",
            uci: "a1c1",
            san: "Rc1"
        },
        {
            ply: 16,
            fen: "r2qk2r/pb1nbppp/1p2pn2/2pp2B1/2PP4/P1N1PN2/1P3PPP/2RQKB1R w Kkq - 0 9",
            id: "IkLMTw3f",
            uci: "c7c5",
            san: "c5"
        },
        {
            ply: 17,
            fen: "r2qk2r/pb1nbppp/1p2pn2/2pP2B1/3P4/P1N1PN2/1P3PPP/2RQKB1R b Kkq - 0 9",
            id: "dOhvrWMp",
            uci: "c4d5",
            san: "cxd5"
        },
        {
            ply: 18,
            fen: "r2qk2r/pb1nbppp/1p2p3/2pn2B1/3P4/P1N1PN2/1P3PPP/2RQKB1R w Kkq - 0 10",
            id: "XHfNzp8W",
            uci: "f6d5",
            san: "Nxd5"
        },
        {
            ply: 19,
            fen: "r2qk2r/pb1nBppp/1p2p3/2pn4/3P4/P1N1PN2/1P3PPP/2RQKB1R b Kkq - 0 10",
            id: "i15PLqwr",
            uci: "g5e7",
            san: "Bxe7"
        },
        {
            ply: 20,
            fen: "r3k2r/pb1nqppp/1p2p3/2pn4/3P4/P1N1PN2/1P3PPP/2RQKB1R w Kkq - 0 11",
            id: "VYnO2SFo",
            uci: "d8e7",
            san: "Qxe7"
        },
        {
            ply: 21,
            fen: "r3k2r/pb1nqppp/1p2p3/2Pn4/8/P1N1PN2/1P3PPP/2RQKB1R b Kkq - 0 11",
            id: "ZPM5N0+K",
            uci: "d4c5",
            san: "dxc5"
        },
        {
            ply: 22,
            fen: "r3k2r/pb2qppp/1p2p3/2nn4/8/P1N1PN2/1P3PPP/2RQKB1R w Kkq - 0 12",
            id: "UDlE+4Qs",
            uci: "d7c5",
            san: "Nxc5"
        },
        {
            ply: 23,
            fen: "r3k2r/pb2qppp/1p2p3/1Bnn4/8/P1N1PN2/1P3PPP/2RQK2R b Kkq - 1 12",
            id: "pPkmg8i8",
            uci: "f1b5",
            san: "Bb5+"
        },
        {
            ply: 24,
            fen: "r4k1r/pb2qppp/1p2p3/1Bnn4/8/P1N1PN2/1P3PPP/2RQK2R w K - 2 13",
            id: "omUYb7Xs",
            uci: "e8f8",
            san: "Kf8"
        },
        {
            ply: 25,
            fen: "r4k1r/pb2qppp/1p2p3/1BnN4/8/P3PN2/1P3PPP/2RQK2R b K - 0 13",
            id: "xBce7QHZ",
            uci: "c3d5",
            san: "Nxd5"
        },
        {
            ply: 26,
            fen: "r4k1r/p3qppp/1p2p3/1Bnb4/8/P3PN2/1P3PPP/2RQK2R w K - 0 14",
            id: "rSj075pj",
            uci: "b7d5",
            san: "Bxd5"
        },
        {
            ply: 27,
            fen: "r4k1r/p3qppp/1p2p3/1Bnb4/1P6/P3PN2/5PPP/2RQK2R b K - 0 14",
            id: "hvm3wiX8",
            uci: "b2b4",
            san: "b4"
        },
        {
            ply: 28,
            fen: "r4k1r/pn2qppp/1p2p3/1B1b4/1P6/P3PN2/5PPP/2RQK2R w K - 1 15",
            id: "y4tyv6w6",
            uci: "c5b7",
            san: "Nb7"
        },
        {
            ply: 29,
            fen: "r4k1r/pn2qppp/1pB1p3/3b4/1P6/P3PN2/5PPP/2RQK2R b K - 2 15",
            id: "7atkkpT1",
            uci: "b5c6",
            san: "Bc6"
        },
        {
            ply: 30,
            fen: "r4k1r/pn2qppp/1pb1p3/8/1P6/P3PN2/5PPP/2RQK2R w K - 0 16",
            id: "rT1SIX14",
            uci: "d5c6",
            san: "Bxc6"
        },
        {
            ply: 31,
            fen: "r4k1r/pn2qppp/1pR1p3/8/1P6/P3PN2/5PPP/3QK2R b K - 0 16",
            id: "i2xwMmyx",
            uci: "c1c6",
            san: "Rxc6"
        },
        {
            ply: 32,
            fen: "r2n1k1r/p3qppp/1pR1p3/8/1P6/P3PN2/5PPP/3QK2R w K - 1 17",
            id: "L5vZxc87",
            uci: "b7d8",
            san: "Nd8"
        },
        {
            ply: 33,
            fen: "r2n1k1r/p3qppp/1p2p3/8/1P6/P1R1PN2/5PPP/3QK2R b K - 2 17",
            id: "If22HfTM",
            uci: "c6c3",
            san: "Rc3"
        },
        {
            ply: 34,
            fen: "r2n1k1r/p3qpp1/1p2p3/7p/1P6/P1R1PN2/5PPP/3QK2R w K - 0 18",
            id: "OWpmrq2d",
            uci: "h7h5",
            san: "h5"
        },
        {
            ply: 35,
            fen: "r2n1k1r/p3qpp1/1p2p3/4N2p/1P6/P1R1P3/5PPP/3QK2R b K - 1 18",
            id: "I7Eqebfk",
            uci: "f3e5",
            san: "Ne5"
        },
        {
            ply: 36,
            fen: "r2n1k2/p3qpp1/1p2p2r/4N2p/1P6/P1R1P3/5PPP/3QK2R w K - 2 19",
            id: "mtZO5zjA",
            uci: "h8h6",
            san: "Rh6"
        },
        {
            ply: 37,
            fen: "r2n1k2/p3qpp1/1p2p2r/4N2p/1P6/P1R1P3/2Q2PPP/4K2R b K - 3 19",
            id: "28ruccUh",
            uci: "d1c2",
            san: "Qc2"
        },
        {
            ply: 38,
            fen: "r2n2k1/p3qpp1/1p2p2r/4N2p/1P6/P1R1P3/2Q2PPP/4K2R w K - 4 20",
            id: "RtbeofSX",
            uci: "f8g8",
            san: "Kg8"
        },
        {
            ply: 39,
            fen: "r2n2k1/p3qpp1/1p2p2r/4N2p/1P6/P1R1P3/2Q2PPP/5RK1 b - - 5 20",
            id: "Q8n1KKCa",
            uci: "e1g1",
            san: "O-O"
        },
        {
            ply: 40,
            fen: "r2n2k1/p4pp1/1p2pq1r/4N2p/1P6/P1R1P3/2Q2PPP/5RK1 w - - 6 21",
            id: "W21b/G2j",
            uci: "e7f6",
            san: "Qf6"
        },
        {
            ply: 41,
            fen: "r2n2k1/p4pp1/1p2pq1r/4N2p/1P3P2/P1R1P3/2Q3PP/5RK1 b - - 0 21",
            id: "izT0VtdZ",
            uci: "f2f4",
            san: "f4"
        },
        {
            ply: 42,
            fen: "r2n2k1/p4pp1/1p2p2r/4Nq1p/1P3P2/P1R1P3/2Q3PP/5RK1 w - - 1 22",
            id: "VP+jDJVs",
            uci: "f6f5",
            san: "Qf5"
        },
        {
            ply: 43,
            fen: "r2n2k1/p4pp1/1p2p2r/4Nq1p/1P3P2/P1R1P3/4Q1PP/5RK1 b - - 2 22",
            id: "gvWT2P+o",
            uci: "c2e2",
            san: "Qe2"
        },
        {
            ply: 44,
            fen: "r2n2k1/p4pp1/1p2p2r/4N2p/1P2qP2/P1R1P3/4Q1PP/5RK1 w - - 3 23",
            id: "k2k/gr9Z",
            uci: "f5e4",
            san: "Qe4"
        },
        {
            ply: 45,
            fen: "r2n2k1/p4pp1/1p2p2r/4N2p/1P2qP2/P1R1P3/4Q1PP/3R2K1 b - - 4 23",
            id: "BrEit2BD",
            uci: "f1d1",
            san: "Rd1"
        },
        {
            ply: 46,
            fen: "r2n2k1/p5p1/1p2pp1r/4N2p/1P2qP2/P1R1P3/4Q1PP/3R2K1 w - - 0 24",
            id: "xIdo2IfV",
            uci: "f7f6",
            san: "f6"
        },
        {
            ply: 47,
            fen: "r2n2k1/p5p1/1p2pp1r/4N2p/1PR1qP2/P3P3/4Q1PP/3R2K1 b - - 1 24",
            id: "CU5H06im",
            uci: "c3c4",
            san: "Rc4"
        },
        {
            ply: 48,
            fen: "r2n2k1/p5p1/1p2pp1r/4Nq1p/1PR2P2/P3P3/4Q1PP/3R2K1 w - - 2 25",
            id: "eguIrI5",
            uci: "e4f5",
            san: "Qf5"
        },
        {
            ply: 49,
            fen: "r2n2k1/p5p1/1p2pp1r/4Nq1p/1PR2P2/P3PQ2/6PP/3R2K1 b - - 3 25",
            id: "il0JVCmq",
            uci: "e2f3",
            san: "Qf3"
        }
    ],
    finalFen: "r2n2k1/p5p1/1p2pp1r/4Nq1p/1PR2P2/P3PQ2/6PP/3R2K1 b - - 3 26"
};

const preloadedState: GameRelatedState = {
    game: createGameState(data2)
}

const store = createStore(
    combineReducers<GameRelatedState>({
        game: gameReducer
    }), preloadedState);


var props: MovesGraphProps = {
    isLive: false,
    store: store,
    height: 400
};

MovesGraphTest(document.getElementById("boardHere")!, props);