

const Login = () => {
    return (
      <div>
        <div className="hero   min-h-screen bg-base-200">
          <div className="hero-content w-full flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold mb-10">SignIn now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ">
                <form className="">
                  <div className="form-control font-bold">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control font-bold">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
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