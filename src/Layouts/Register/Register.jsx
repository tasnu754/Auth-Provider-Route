
// import { useContext } from "react";
// import { AuthContext } from "../../ContextElement/ContextElement";
import CustomContext from "../../CustomContext/CustomContext";


const Register = () => {

  const { signin } = CustomContext();



  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(name , email , password);

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }



  return (
    <div>
      <div className="hero   min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-10">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <form onSubmit={handleRegister}>
                <div className="form-control font-bold">
                  <label className="label ">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control font-bold">
                  <label className="label ">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control font-bold">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="pass"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
