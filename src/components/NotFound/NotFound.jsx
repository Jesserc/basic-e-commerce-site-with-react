import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Click the link below to go back</p>

      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
