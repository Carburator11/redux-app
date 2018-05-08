import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ReduxCounter, LocalCounter, Button } from '../src/components/';
 import configureStore from 'redux-mock-store';
const mockStore = configureStore({reduxCount: 0}); 

test('LocalCounter should render two <Button /> components', () => {
    const wrapper = shallow(<LocalCounter />)
    expect(wrapper.find(Button)).toHaveLength(2)
});

 test('ReduxCounter should render two <Button /> components', () => {
    const store = mockStore({})
    const wrapper = mount(<ReduxCounter store={store} />)
    expect(wrapper.find(Button)).toHaveLength(2)
});