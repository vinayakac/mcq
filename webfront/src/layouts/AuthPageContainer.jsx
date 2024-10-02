import { useEffect, useState } from "react";
import { getToken } from "../lib/token";
import { useNavigate } from "react-router-dom";

function AuthPageContainer({ children }) {
  const [token, setToken] = useState(null);
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setState(1);
    loadToken();
    // eslint-disable-next-line
  }, []);

  async function loadToken() {
    const token = await getToken();
    setState(2);
    if (token) setToken(token);
    else navigate("/login");
    setState(3);
  }
  if (state < 3) return <div>Loading</div>;
  if (state === 3)
    if (token) return <div>{children}</div>;
    else return <div>Invalid login</div>;
}
export default AuthPageContainer;
