import project from "./data/projects.json";
function Project() {
  return (
    <>
      <div className="container">
        <h1 id="projecti">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center ">
          {project.map((data) => {
            return (
              <>
                <div
                  key={data.key}
                  className= "cardii my-3 col-md-4 col-lg-3 col-xm-2 mx-4 p-2"
                >
                  <div
                    className="card text-light " 
                    style={{
                      width: "18rem",
                      backgroundColor:"rgb(5, 18, 39)",
                      boxShadow: "5px 10px 8px rgb(73, 72, 106)",
                    }}
                  >
                    <div className="img d-flex justify-content-center align-items-center p-3">
                      {" "}
                      <img
                        src={data.imageSrc}
                        className="card-img-top"
                        alt="..."
                        style={{
                          width: "250px",
                          height: "210px",
                          border: "2px solid rgb(73, 72, 106)"
                        }}
                      ></img>
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title ct">{data.title}</h5>
                      <p className="card-text" style={{color:"white"}}>{data.description}</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <a href={data.demo} className="btn btn-primary">
                          demo
                        </a>
                        <a href={data.source} className="btn btn-warning mx-3">
                          code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Project;
