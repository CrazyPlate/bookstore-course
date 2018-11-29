import React from 'react';
import BookView from '../BookView';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('BookView tests', () => {

   it('Snapshot matches', () => {
      const book = {
         name: "Book title"
      };
      const wrapper = shallow(<BookView book={book} />);
      expect(wrapper).toMatchSnapshot();
   })

   it('Title of the book and author are displayed as in props', () => {
      const book = {
         name: "Book title",
         author: "Author",
         image: "images/mort.jpg"
      };
      const wrapper = shallow(<BookView book={book} />);
      expect(wrapper.find('span').find('b').text()).toBe(book.name);
      expect(wrapper.find('span').find('i').text()).toBe(book.author);
   })
})