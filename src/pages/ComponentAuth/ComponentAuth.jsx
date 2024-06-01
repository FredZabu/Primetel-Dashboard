import PropTypes from "prop-types";
import Redirect from "../doctors_dashboard/Redirect";

function ComponentAuth({ children,role }) {
  console.log("Checking");
    console.log(role);
    console.log("Closed");
    const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
    const user = JSON.parse(sessionStorage.getItem("user") || nullUser)

    return user.token && (user.role == role || role == "default") ? <>{children}</> : <Redirect />
}
ComponentAuth.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string
};
export default ComponentAuth