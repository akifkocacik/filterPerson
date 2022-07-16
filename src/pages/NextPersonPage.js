import NextPerson from "../components/NextPerson";
import { useLocation, Link } from "react-router-dom";

const NextPersonPage = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <NextPerson person={state} />
      <Link to='/' className="link">To the filter person page..</Link>
    </>
  );
};

export default NextPersonPage;
