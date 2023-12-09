import { FilterInput } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from "redux/selectors";

export function Filter() {
  const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput type="text"  value={filter} onChange={evt => dispatch(setFilter(evt.target.value))} />
    </>
  );
}