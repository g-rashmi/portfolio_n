import experience from "../components/data/experience.json";

function Experience() {
  return (
    <div>
    
   
      <div className="container expe">
      <h1 className="HE" id="experiencei">EXPERIENCES</h1>
        <div className="center ex ">
          {experience.map((data) => {
            return (
              <>
                {" "}
                <div key={data.id} className="ex-items {data.id}">
                  {" "}
                  <div className="left">
                    <img src={`../src/assets/${data.imageSrc}`}></img>
                  </div>{" "}
                  <div className="right">
                    <h2>{data.role} </h2>{" "}
                    <h4>
                      {" "}
                      {data.startDate} {data.endDate} {data.location}
                    </h4>
                    <h5> {data.experiences[0]}</h5>{" "}
                    <h5> {data.experiences[1]}</h5>{" "}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
