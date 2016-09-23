import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../../app/components/App';

describe('<App /> component', () => {
    let wrapper;
    before(function() {
        wrapper = shallow(<App/>);
    });

    it('Should render App', () => {
        expect(wrapper.hasClass('appContainer')).equal(true)
    });
});
