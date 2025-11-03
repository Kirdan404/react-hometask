import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "../../styles/input.css";
import "../../styles/login.css";

export default function LoginPage() {
  return (
    <div className="container__LoginPage">
      <h1>Login</h1>
      <form className="loginForm">
        <label>Email</label>
        <Input className="inputBasic" type="email" placeholder="Input text" />
        <p className="inputRequiredMessage">Email is required.</p>
        <label>Password</label>
        <Input
          className="inputBasic inputRequired"
          type="password"
          placeholder="Input text"
        />
        <p className="inputRequiredMessage">Password is required.</p>
        <Button buttonText="LOGIN" onClick={() => alert("LOGIN")} />
        <p>If you don't have an account you may</p>
        <p>
          <b>Registration</b>
        </p>
      </form>
    </div>
  );
}
