import { Card, Button } from 'react-bootstrap';
import { IMG_URL } from '../../../config';
import { useParams, Link } from 'react-router-dom';
import { getAdBySearch } from '../../../redux/adsRedux';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';

const SearchPage = () => {
  const activeUser = useSelector(getUser);
  const { searchPhrase } = useParams();
  const getBySearch = useSelector((state) =>
    getAdBySearch(state, searchPhrase)
  );

  console.log(getBySearch);
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={`${IMG_URL}/${getBySearch[0].image}`} />
      <Card.Body>
        <Card.Title>Title: {getBySearch[0].title}</Card.Title>
        <Card.Text>
          <p>Loction: {getBySearch[0].location}</p>
          <p>Description: {getBySearch[0].text}</p>
          <p>Date: {getBySearch[0].date}</p>
          <p>Price: {getBySearch[0].price}</p>
          <p>User: {getBySearch[0].user.login}</p>
          {activeUser !== null &&
            activeUser._id === getBySearch[0].user._id && (
              <Link to={'/ads/edit/' + getBySearch[0]._id}>
                <Button variant="primary">Edit</Button>
              </Link>
            )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  console.log(getBySearch);
};

export default SearchPage;
