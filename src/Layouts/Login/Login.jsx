import { NavLink } from "react-router-dom";
import CustomContext from "../../CustomContext/CustomContext";


const Login = () => {
   
  const { signin } = CustomContext();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email, pass);
    
    signin(email, pass)
      .then((result) => {
        const signUser = result.user;
        console.log(signUser);
        e.target.reset();
    })
      .catch((error) => {
         console.log(error.message);
    })
  }
  
    return (
      <div>
        <div className="hero   min-h-screen bg-purple-200">
          <div className="hero-content w-full flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold mb-10">SignIn now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ">
                <form onSubmit={handleSignin}>
                  <div className="form-control font-bold">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered text-base"
                    />
                  </div>
                  <div className="form-control font-bold">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered text-base"
                    />
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt link link-hover text-base"
                      >
                        Forgot password?
                      </a>
                    </label>
                    <p>
                      Do not have account? Please
                      <NavLink
                        to="/register"
                        className="text-purple-700 underline"
                      >
                        {" "}
                        Register
                      </NavLink>
                    </p>
                  </div>
                  <div className="form-control mt-6 font-bold">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;