import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searching } from '../../../redux/adsRedux';
import Form from 'react-bootstrap/Form';
import Button from '../Button/Button';
const Search = () => {
  const dispatch = useDispatch('');

  let defaultSearch = useSelector((state) => state.search);
  const [search, setSearch] = useState(defaultSearch);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searching(search));
    setSearch('');
  };

  useEffect(() => {
    return () => {
      dispatch(searching(''));
    };
  }, [dispatch]);

  return (
    <Form onSubmit={handleSearch}>
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter login"
        />
      </Form.Group>
      <Button>
        <span className="fa fa-search" />
      </Button>
    </Form>
  );
};

export default Search;
