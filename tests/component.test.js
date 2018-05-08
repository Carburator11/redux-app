import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ReduxCounter, LocalCounter, Button } from '../src/components/';
import configureStore from 'redux-mock-store';
const mockStore = configureStore(middlewares);

test('LocalCounter should render two <Button /> components', () => {
    const wrapper = shallow(<LocalCounter />)
    console.log(wrapper);
    expect(wrapper.find(Button)).toHaveLength(2)
});



test('ReduxCounter should render two <Button /> components', () => {
    store = mockStore({})
    const wrapper = shallow(<ReduxCounter />)
    console.log(wrapper);
    expect(wrapper.find(Button)).toHaveLength(2)
});



