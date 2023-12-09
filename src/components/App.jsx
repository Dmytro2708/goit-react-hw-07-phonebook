import { GlobalStyle } from './GlobalStyle';
import { Container } from './GlobalStyle';

import { Contacts } from './Contacts/Contacts';
import { NameInput } from './NameInput/NameInput';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <NameInput />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
};
