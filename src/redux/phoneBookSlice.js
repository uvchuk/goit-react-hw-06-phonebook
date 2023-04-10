import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: { contacts: [], filtered: null },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const contactIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(contactIndex, 1);

      if (state.filtered) {
        const filteredIndex = state.filtered.findIndex(
          contact => contact.id === action.payload
        );
        state.filtered.splice(filteredIndex, 1);
      }
    },
    filterContact(state, action) {
      if (action.payload.trim() === '') state.filtered = null;
      else
        state.filtered = state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};

export const phoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { addContact, removeContact, filterContact } =
  phoneBookSlice.actions;

export const useContacts = state => state.phoneBook.contacts;
export const useFiltered = state => state.phoneBook.filtered;
