interface RatingProps {
  rating: number;
}
// const Rating = (props: RatingProps) => {
//   return <div className="text-blue-700 font-bold">{props.rating}</div>;
// };

// ctrl+spacja i nam podpowiada jaki parametr wziac z destruktyryzacji
export const Rating = ({ rating }: RatingProps) => {
  return <div className="text-blue-700 font-bold">{rating}</div>;
};
