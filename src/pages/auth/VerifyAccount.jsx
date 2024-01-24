import { Link } from "react-router-dom";
import ButtonLong from "../../components/ButtonLong";
import InputInfoComponent from "../../components/InputInfoComponent";
import Layout from "./Layout";


const VerifyAccount = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full justify-center px-16">
        <div className=" font-bold text-4xl mb-10">Verify Account</div>
        <InputInfoComponent
          message="If your email exists, a verification link has been sent to  your email. Please check your inbox and spam"
          type="info"
        />
        <div className="h-8"></div>
        <ButtonLong text="Resend" type="submit" onClick={() => {}} />
        <div className="text-sm flex font-medium items-center justify-center gap-2 mt-4">
          Back to
          <Link to="/login">
            <span className="text-primary cursor-pointer">Login</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default VerifyAccount