import React from 'react';
import { expect } from 'chai';  
import { MovesGraph } from '../dist/chess/MovesGraph';
  
describe('<MovesGraph/>', function () {
    it('create MovesGraph and test some props', function () {
        var props = { 
            "white": [0,       34710297,    613347,  2935219,   1365348, 3789028, 1673586, 136294, 2847741, 29030842, 240806, 86074, 212609, 1433812, 2824011, 30265888, 1384932, 10302775, 292495, 211107, 125259, 193248, 105744, 458497, 2114795, 1289216, 252713, 2299159, 34721590, 1036446, 4903155, 55777264, 920299, 144074, 343725, 710890], 
            "black": [23288666,18847498, 264430329, 21697494, 233028476,612832,16117,119988,104289007,24449836,33775,355369,950383,96043706,104183282,90944345,109242439,182035780,781270,108090,844473,96302,363901,45402501,31616965,47817,390776,8251120,2173275,14821502,18353805,13428756,26833576,53462,420824],
            currentPly: 10,
            startPly: 5,
        };
        
        const wrapper = mount(<MovesGraph {...props}/>);
        expect(wrapper.props().currentPly).to.be.equal(10);
        expect(wrapper.props().startPly).to.be.equal(5);
    });
});