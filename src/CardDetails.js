import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const resp = await fetch(`/devjobs-web-app/Data/data.json`);

        const results = await resp.json();
        console.log(results.cards[id - 1]);
        // console.log(results);
        setData(results.cards[id - 1]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchdata();
  }, []);

  return (
    <>
      <div className="card-details">
        <div className="banner">
          <div
            className="logo"
            style={{ backgroundColor: data.logoBackground }}
          >
            <img src={data.logo} alt={data.company}></img>
          </div>
          <div className="company-info">
            <p>{data.company}</p>
            <p>{data.company}.com</p>
            <button>Company Site</button>
          </div>
        </div>
      </div>
      <div className="job-description">
        <div className="description-header">
          <p>{data.postedAt}</p>
          <span></span>
          <p>{data.contract}</p>
          <p>{data.position}</p>
          <p>{data.location}</p>
        </div>
        <button className="apply-button">Apply Now</button>
        <p className="desc-text">{data.description}</p>
        <div className="requirments">
          <h2>Requirments</h2>
          <p className="requi-text">
            {data.requirements && data.requirements.content}
          </p>
          <div style={{ position: "relative" }}>
            <ul>
              {data.requirements &&
                data.requirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="role">
          <h2>What You Will Do</h2>
          <p>{data.role && data.role.content}</p>
          <div style={{ position: "relative" }}>
            <ul>
              {data.role &&
                data.role.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="apply">
        <h2>{data.position}</h2>
        <p>{data.company}</p>
        <button className="apply-button">Apply Now</button>
      </div>
    </>
  );
};

export default CardDetails;
