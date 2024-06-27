import "../registration/registration.scss";

const Signup = () => {
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form">
          <div className="form-group">
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="form-group">
            <button className="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
