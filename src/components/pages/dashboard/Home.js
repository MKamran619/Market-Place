import React, { useState, useEffect } from "react";
import DetailsCardComponent from "./DetailsCardComponent";
import TopPanelComponent from "./TopPanelComponent";

const ParentComponent = () => {
  const [data, setData] = useState([]);
  const [hoveredCard, setHoveredCard] = useState("Léa Jacquot");

  useEffect(() => {
    // Fetch the data from the JSON file in the public directory
    fetch("/detailCards.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("data = ", data);
      });
  }, []);

  const handleMouseEnter = (cardName) => {
    setHoveredCard(cardName);
  };

  const handleMouseLeave = () => {
    setHoveredCard("Léa Jacquot");
  };

  return (
    <div className="justify-center">
      <div className="w-85">
        <div className="justify-center">
          <div className="topbar activebar"></div>
          <div className="topbar"></div>
          <div className="topbar"></div>
          <div className="topbar"></div>
          <div className="topbar"></div>
        </div>
        <div className="justify-center">
          <div className="horizontal-container">
            <TopPanelComponent
              caption="Night sky collection"
              title="With the Stars"
              showBtn={true}
            />
          </div>
        </div>
        <div className="collections">
          <div className="mt-5">
            <h2>Collections</h2>
          </div>
          <div className="collections-item">
            {data.map((card) => (
              <div
                key={card.name}
                onMouseEnter={() => handleMouseEnter(card.name)}
                onMouseLeave={handleMouseLeave}
              >
                <DetailsCardComponent
                  showBtn={hoveredCard === card.name ? "" : "none"}
                  name={card.name}
                  cardImg={card.cardImg}
                  title={card.title}
                  ntf={card.ntf}
                  img={card.img}
                  priceRange={card.priceRange}
                  content={card.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
