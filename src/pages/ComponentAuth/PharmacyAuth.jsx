import PropTypes from "prop-types";
import Redirect from "../doctors_dashboard/Redirect";

function PharmacyAuth({children}) {
    
    const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
    const user = JSON.parse(sessionStorage.getItem("user") || nullUser)

    return user.token && user.role == "pharmacy" ? <>{children}</> : <Redirect />
}
PharmacyAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PharmacyAuth