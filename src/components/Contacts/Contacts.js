import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactsList, ContactEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading ? (
        <p>Please, wait...</p>
      ) : (
        <ContactsList>
          {filteredContacts.map(e => (
            <ContactEl key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(e.id))}
              >
                Delete
              </button>
            </ContactEl>
          ))}
        </ContactsList>
      )}
    </div>
  );
};
