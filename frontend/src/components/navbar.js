import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/"> Home</Link>
      <Link to="/create-exercise"> Create Exercise</Link>
      <Link to="/saved-exercises"> Saved Exercises</Link>
      {!cookies.access_token ? (
        <Link to="/auth"> Login / Register</Link>
      ) : (
        <button onClick={logout} id="navbutton">
          Logout
        </button>
      )}
    </div>
  );
};
