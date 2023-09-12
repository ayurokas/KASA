import star from "../assets/star.svg";
import emptyStar from "../assets/emptyStar.svg";

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem, index) =>
        value >= rangeElem ? (
          <img key={`star-${index}`} src={star} alt="etoile" />
        ) : (
          <img key={`star-empty-${index}`} src={emptyStar} alt="etoile" />
        )
      )}
    </div>
  );
}

export default Rating;
