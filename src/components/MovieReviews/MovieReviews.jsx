import { useEffect, useState } from 'react';
import { movieReviews } from '../../service/api';

const MovieReviews = ({ movieId }) => {
  const [reviews, setreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await movieReviews(movieId);
        setreviews(response.data.results);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  isLoading && <p>Loading...</p>;

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.key}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We dont have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default MovieReviews;
