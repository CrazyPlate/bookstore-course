import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App tests', () => {

   it('App renders without a problem', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
   })

   it('Components render', () => {
      const wrapper = shallow(<App />);
      
      expect(wrapper.find('Header').exists()).toBe(true);
      expect(wrapper.find('AdminPanel').exists()).toBe(true);
      expect(wrapper.find('Order').exists()).toBe(true);
      expect(wrapper.find('Inventory').exists()).toBe(true);

   })

   it('Snapshot matches', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
   })
})

