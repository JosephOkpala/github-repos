import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import "../styles/home.css";
import profile from "../assets/working.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const goToRepos = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
      <div className="home">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Landing page to my second semester assignment"
        />
        <link rel="canonical" href="/" />
      </Helmet>
        <div className="home-text">
          <h1 data-aos="fade-up" data-aos-once="true">
            Hello my name is Joseph
          </h1>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
            This is a project for the third semester exam in AltSchool Africa.
            In this project I am going to be making a request from the GitHub
            API to be able to display a list of all my repositories and other
            information. I would also implement a wildcard route for error
            pages.
          </p>
          <Link to="/repos" data-aos="fade-up" data-aos-once="true" data-aos-delay="150">Go to Repositories</Link>
        </div>
        <div class="working-man">
          <img
            src={profile}
            alt="man working on laptop"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          />
        </div>
      </div>

      // <div>
      //   <button
      //     onClick={() => goToRepos("/repos")}
      //     data-aos="fade-up"
      //     data-aos-once="true"
      //     data-aos-delay="150"
      //   >
      //     Repos
      //   </button>
      // </div>
  );
};

export default Home;
