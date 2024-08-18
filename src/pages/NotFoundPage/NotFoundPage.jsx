import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.boxError}>
      <h1 className={css.titleError}>Error 404 - Page not found</h1>
      <Link className={ css.linkError} to="/">Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
