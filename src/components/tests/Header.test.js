import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header tests', () => {

   it('Header renders without a problem', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Header />, div);
      ReactDOM.unmountComponentAtNode(div);
   })

   it('Header changes text acording to state', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('h1').text()).toBe('Black books');
      wrapper.setState({
         bookstoreName: "White books"
      })
      expect(wrapper.find('h1').text()).toBe('White books');

   })

   it('Header state changes after clicking on header div', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.state().bookstoreName).toBe('Black books');
      wrapper.find('.header').simulate('click');
      expect(wrapper.state().bookstoreName).toBe('White books');
   })

   it('Snapshot matches', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
   })
})

