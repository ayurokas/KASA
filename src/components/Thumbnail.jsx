import { NavLink } from "react-router-dom";

function Thumbnail({ data }) {
  return (
    <ul className="thumbnail">
      {data.map((object) => (
        <NavLink to={"/logement/" + object.id} key={object.id}>
          <li className="thumbnail__item">
            <img className="thumbnail__cover" src={object.cover} alt={object.title} />
            <div className="thumbnail__title">
              <h2>{object.title}</h2>
            </div>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default Thumbnail;
