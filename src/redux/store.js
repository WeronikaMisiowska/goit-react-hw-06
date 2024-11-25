import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { createTransform } from 'redux-persist';


const nonSerializableTransform = createTransform(
  
  (inboundState) => {
    const { register, ...rest } = inboundState; 
    return rest;
  },
 
  (outboundState) => outboundState,
  { whitelist: ['contacts', 'filters'] } 
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts', 'filters'],
  transforms: [nonSerializableTransform] 
};


const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
        ignoredPaths: ['register'], 
      },
    }),
});

export const persistor = persistStore(store);
