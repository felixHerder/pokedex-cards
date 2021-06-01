import './card.styles.css'
export const Card = (props) => (
  <div className={"card-border " + props.pokemon.types[0]}>
    <div className="card-container">
      <div className="title">
        <span className="name">
          {props.pokemon.name + " "}
          <span className="id">#{('00' + props.pokemon.id).slice(-3)}</span>
        </span>
        <span className="hp">
          {props.pokemon.hp} HP
        </span>
      </div>
      <div
        className={"image-container bkg" +
          parseInt(props.pokemon.types[0], 36) % 6} title={props.pokemon.name}>
        <img src={props.pokemon.img} alt={props.pokemon.name} loading="lazy" />
      </div>
      <div className="stats">
        <p><strong>
          {
            props.pokemon.types.map(type => {
              return (
                <span key={type} className={type + " types"}>{type} </span>
              );
            })
          }
        </strong></p>
        <p><strong>{(props.pokemon.height * 0.1).toFixed(2)}</strong> m</p>
        <p><strong>{(props.pokemon.weight * 0.1).toFixed(2)}</strong> kg</p>
      </div>
      <div className="abilities">
        {
          props.pokemon.abilities.map((ab, i) => (
            <div key={i} className={"ability ability" + i}>
              <p className={props.pokemon.types[0] + " types"}>{ab.name}:</p>
              <span title={ab.effect}>
                <input id={props.pokemon.id+ab.name} type="checkbox" />
                <label for={props.pokemon.id+ab.name}>{ab.effect}</label>
                <div className="tooltip">{ab.effect}</div>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

