import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <Link to="/">Return Home</Link>
      <img src="" alt="" />
    </div>
  );
};

export default NotFoundPage;
