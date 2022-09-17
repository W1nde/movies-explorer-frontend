function MovieCardDummy({ name, image, duration }) {
  return (
    <div className="card card__list-dummy-item">
      <a href={""} target="_blank" rel="noreferrer" className="dummy-link">
        <img className="card__img card__img-dummy" src={image} alt={name}></img>
      </a>
      <div className="card__description">
        <div className="card__text dummy-text">
          <h4 className="card__heading">
            {name}
            <button className="card__saveBtn"></button>
          </h4>
          <div className="card__line"></div>
          <p className="card__duration">{duration}</p>
        </div>
      </div>
    </div>
  );
}
export default MovieCardDummy;
