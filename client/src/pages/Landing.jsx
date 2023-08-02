import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span style={{ color: "#fce38fff" }}>tracking</span> app
          </h1>
          <p>Effectively track your job hunt</p>
          <Link
            to="/register"
            className="btn register-link"
            style={{ backgroundColor: "#fce38fff", color: "black" }}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="btn "
            style={{ backgroundColor: "#fce38fff", color: "black" }}
          >
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
