import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store";

function Redirect() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        navigate("/")
        dispatch(logout())
  },[])
}

export default Redirect