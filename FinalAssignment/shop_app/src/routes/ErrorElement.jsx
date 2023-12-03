import { Link } from "react-router-dom";

const ErrorElement = ({ h1, h2 }) => {
  return (
    <div className="error-element container">
      {h1 ? <h1>{h1}</h1> : <h1>Virhe 404</h1>}
      {h2 ? <h2>{h2}</h2> : <h2>Sivua ei löydy :(</h2>}
      <p><Link to="/">Palaa etusivulle tästä</Link></p>
    </div>
  );
}

export default ErrorElement;