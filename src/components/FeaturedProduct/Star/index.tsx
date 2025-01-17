import './stars.scss';
import StarOpen from '../../../assets/starP.svg';
import StarNop from '../../../assets/starN.svg';

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;

  return (
    <>
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;

        return (
          <img
            key={index}
            style={{ width: '14px', height: '20px' }}
            src={starIndex <= rating ? StarOpen : StarNop}
            alt={starIndex <= rating ? 'Star Open' : 'Star Empty'}
          />
        );
      })}
    </>
  );
};

export default StarRating;
