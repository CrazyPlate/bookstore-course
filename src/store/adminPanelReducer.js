import { UPDATE_BOOK, SEND_BOOK_TO_EDIT } from './actions';

const initialState = {
   book: {
      name: "",
      author: "",
      description: "",
      onStock: true,
      image: "",
      genre: "",
      price: ""
   },
   editMode: false,
   titleOfBookForRemoval: ""
}

const adminPanelReducer = (state = initialState, action) => {

   console.log("Action recived " + action.type);

   switch (action.type) {
      case SEND_BOOK_TO_EDIT:
         const bookToEdit = action.payload;
         return {
            ...state,
            book: {...bookToEdit},
            editMode: true,
            titleOfBookForRemoval: bookToEdit.name
         }
      case UPDATE_BOOK:
         const book = action.payload;
         return {...state, book};
      default:
         return state;
   }
} 

export default adminPanelReducer;