import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllCards = () => {
  const navigate = useNavigate();
  const [cardId, setCardID] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState({});

  const handleCardClick = (id) => {
    setCardID(id);
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        const resp = await fetch("/devjobs-web-app/Data/data.json");
        const results = await resp.json();
        setData(results.cards);
        console.log(results.cards);
      } catch {}
    }
    fetchdata();
  }, []);

  useEffect(() => {
    if (cardId) {
      navigate(`/devjobs-web-app/cards/${cardId}`);
    }
  }, [cardId, navigate]);

  if (!loading) return <div>...loading</div>;

  return (
    <>
      {data ? (
        <div className="cards">
          {data.map((card) => {
            return (
              <div
                className="card"
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="info">
                  <div className="sec1">
                    <p className="post-date">{card.postedAt}</p>
                    <span className="circle"></span>
                    <p className="contract">{card.contract}</p>
                  </div>
                  <div
                    className="logo"
                    style={{ backgroundColor: card.logoBackground }}
                  >
                    <img src={card.logo} alt="scott"></img>
                  </div>
                  <p className="position">{card.position}</p>

                  <p className="company-name">{card.company}</p>

                  <p className="location">{card.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>loading ...</p>
      )}
      <div className="load-more">
        <p>Load More</p>
      </div>
    </>
  );
};

export default AllCards;
