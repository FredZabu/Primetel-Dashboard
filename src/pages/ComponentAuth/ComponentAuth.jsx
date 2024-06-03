import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
function ComponentAuth({ children,role }) {

  const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
  const user = JSON.parse(sessionStorage.getItem("user") || nullUser)
  
  if (user.token && (user.role == role || role == "default" || role == "profile")) {
    return <>{children}</>
  } else if (user.token && user.role) {
    return <Navigate to="/dashboard" />
  } else {   
    return <Navigate to="/" />
  }
  
}
ComponentAuth.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string
};
export default ComponentAuth