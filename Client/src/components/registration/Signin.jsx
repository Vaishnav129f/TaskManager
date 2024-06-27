import "./registration.scss";

const Signin = () => {
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
          <button type="submit" className="signup-form__button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
