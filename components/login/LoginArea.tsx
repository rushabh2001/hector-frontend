import Image from "next/image";
import LoginForm from "../forms/LoginForm";
import Logo from "../../public/assets/img/hector/hector-logo.svg";


const LoginArea = () => {
    return (
        <>
            <div className="login-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            {/* <div className="d-flex justify-content-center">
                                <Image className="mb-30 text-center" src={Logo} alt="hectorai" /> 
                            </div> */}
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Login From Here</h3>
                                <LoginForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginArea;