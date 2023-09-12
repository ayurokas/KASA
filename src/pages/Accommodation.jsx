import { useParams, Navigate } from "react-router-dom";
import { useAccommodation } from "../utils/useAccommodation";
import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";
import Rating from "../components/Rating";

function Accommodation() {
  const { id } = useParams();
  const { data, isLoading, error } = useAccommodation();

  if (!error && !isLoading && data) {
    const accommodation = data.find((object) => object.id === id);

    if (!accommodation) {
      return <Navigate to="/404"></Navigate>;
    }

    const { pictures, title, location, host, tags, rating, description, equipments } = accommodation;

    return (
      <div className="main-container">
        <Slider pictures={pictures} />
        <header className="accommodation__info">
          <section className="accommodation__details">
            <h1>{title}</h1>
            <p>{location}</p>
            <ul className="tags">
              {tags.map((tag, index) => (
                <li className="tags__item" key={`${tag}-${index}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>
          <section className="host">
            <div className="host__details">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            <Rating value={rating} />
          </section>
        </header>

        <section className="dropdown--double">
          <Dropdown title="Description" content={description} defaultOpen={false} />
          <Dropdown title="Equipements" content={equipments} defaultOpen={false} />
        </section>
      </div>
    );
  }
}

export default Accommodation;
