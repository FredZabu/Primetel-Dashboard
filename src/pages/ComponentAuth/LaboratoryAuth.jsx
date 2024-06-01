import PropTypes from "prop-types";
import Redirect from "../doctors_dashboard/Redirect";

function LaboratoryAuth({children}) {
    
    const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
    const user = JSON.parse(sessionStorage.getItem("user") || nullUser)

    return user.token && user.role == "laboratory" ? <>{children}</> : <Redirect />
}
LaboratoryAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LaboratoryAuth