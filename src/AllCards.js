import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllCards = ({ filtredData, setSlice, slice }) => {
  const navigate = useNavigate();
  const [cardId, setCardID] = useState();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // const [loading, setLoading] = useState(true);

  const handleCardClick = (id) => {
    setCardID(id);
  };
  const handelLoadMoreClick = () => {
    setSlice((pre) => pre + 6);
  };

  useEffect(() => {
    if (cardId) {
      navigate(`/devjobs-web-app/cards/${cardId}`);
    }
  }, [cardId, navigate]);

  return (
    <>
      {data ? (
        <div className="cards">
          {filtredData.map((card) => {
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
                    <img src={card.logo} alt={card.company}></img>
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
        ""
      )}

      {filtredData.length === 0 ? (
        <div className="load-more">
          <p>No results</p>
        </div>
      ) : filtredData.length >= slice ? (
        <div className="load-more">
          <p onClick={handelLoadMoreClick}>Load More</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AllCards;
