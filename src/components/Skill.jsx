import skill from "../components/data/skills.json";

function Skill() {
  return (
    <>
    
      <div className="container skills">
      <h1 id="skilli">SKILLS</h1> 
      
        <div className="sk items">
          {skill.map((data) => {
            return (
              <>
                {" "}
               
                  {" "}
                  <div className="item">
                    <img src={`/assets/${data.imageSrc}`}></img>
                  
                    <h3>{data.title} </h3>{" "}
            </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skill;
