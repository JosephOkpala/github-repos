import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/repos.css";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  console.log(repos);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/JosephOkpala/repos"
        );
        const data = await response.json();
        setRepos(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const reposPerPage = 6;
  const totalRepos = repos.length;
  const pages = Math.ceil(totalRepos / reposPerPage);
  const skip = page * reposPerPage - reposPerPage;

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="repositories">
      <Helmet>
        <title>Repositories</title>
        <meta
          name="description"
          content="Api fetch of my Github Portfolio. With pagination and nested routes"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>
      <h1 className="repo-header" style={{ color: "#7D8590" }}>
        Repositories
      </h1>
      <div className="cont">
        <div className="cont">
          {repos.slice(skip, skip + reposPerPage).map((repo) => (
            <div className="repo-container" key={repo.id}>
              <div>
                <div className="repo">
                  <h2>{repo.name}</h2>
                  <button>{repo.visibility}</button>
                </div>
                <p style={{ color: "#7D8590" }}>{repo.description}</p>
                {repo.topics && (
                  <p className="topics" style={{ color: "#7D8590" }}>
                    {repo.topics.map((topic, index) => (
                      <span key={index}>
                        {index > 0 && ""}
                        {topic}
                      </span>
                    ))}
                  </p>
                )}
              </div>
              <div className="time">
                {repo.language && (
                  <p style={{ color: "#7D8590", marginRight: "1rem" }}>
                    {repo.language}
                  </p>
                )}
                <p style={{ color: "#7D8590" }}>
                  Updated on {formatDate(repo.updated_at)}
                </p>
              </div>
            </div>
          ))}
          <div className="paginate-btn">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              className="prev"
              disabled={page <= 1}
              aria-disabled={page <= 1}
            >
              Prev
            </button>
            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (each) => (
                <button
                  key={each}
                  className="paginate-numbers"
                  onClick={() => setPage(each)}
                >
                  {each}
                </button>
              )
            )}
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="next"
              disabled={page >= pages}
              aria-disabled={page >= pages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
