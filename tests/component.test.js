import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { ReduxCounter, LocalCounter, Button } from '../src/components/';
 import configureStore from 'redux-mock-store';

test('LocalCounter should render two <Button /> components', () => {
    const wrapper = shallow(<LocalCounter />)
    expect(wrapper.find(Button)).toHaveLength(2)
});

test('ReduxCounter should render two <Button /> components', () => {
    const mockStore = configureStore({reduxCount: 0}); 
    const store = mockStore({})
    const wrapper = mount(<ReduxCounter store={store} />)
    expect(wrapper.find(Button)).toHaveLength(2)
});

test('LocalCounter snapshot', ()=>{
    const tree = renderer
    .create(<LocalCounter />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

test('ReduxCounter snapshot', ()=>{
    const mockStore = configureStore({reduxCount: 0});     
    const store = mockStore({})
    const tree = renderer
    .create(<ReduxCounter store={store}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})