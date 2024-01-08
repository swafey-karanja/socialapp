import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Swafsocial</h3>
                <span className="loginDesc">
                    Connect with nakama and meet new people from around the world.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Let's Go</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
