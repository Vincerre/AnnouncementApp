import Ads from '../../layout/Ads/Ads';
import { Button, Alert } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

import { getAllAds, getRequest } from '../../../redux/adsRedux';
import { getUser } from '../../../redux/usersRedux';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const user = useSelector(getUser);
  const ads = useSelector(getAllAds);
  const request = useSelector(getRequest);

  if (request.pending)
    return (
      <Spinner animation="border" role="status" className="block mx-auto" />
    );
  else if (request.error)
    return (
      <Alert variant="danger">
        <Alert.Heading>Something went wrong...</Alert.Heading>
        <p>Unexpected error... Try again!</p>
      </Alert>
    );
  else if (!request.success || !ads.length)
    return <Alert color="info">No Ads</Alert>;
  else if (request.success)
    return (
      <div>
        {user !== null && (
          <Link to="/ads/add">
            <Button color="secondary">Add</Button>
          </Link>
        )}
        <Ads ads={ads} />
      </div>
    );
};

export default Homepage;
