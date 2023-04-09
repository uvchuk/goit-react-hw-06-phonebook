import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: { contacts: [] },
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
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['phoneBook'],
};

export const phoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { addContact, removeContact } = phoneBookSlice.actions;

// Selectors
// export const getContactsValue = state => state.contacts.value;
