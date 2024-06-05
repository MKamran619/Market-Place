import React, { useState, useEffect } from "react";
import TopPanelComponent from "../dashboard/TopPanelComponent";
import CollectionCards from "./CollectionCards";

const CollectionContainer = () => {
  const [hoveredCard, setHoveredCard] = useState("stars");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/cardCollection.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard("stars");
  };

  return (
    <div className="collection-container justify-center">
      <div className="w-85 mt-5">
        <div>
          <TopPanelComponent
            caption="Night sky collection"
            title="With the Stars"
            content="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo"
          />
        </div>
        <div style={{ marginTop: "70px", marginBottom: "30px" }}>
          <h1>NFTs</h1>
        </div>
        <div className="collection-container-cards ">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CollectionCards
                showBtn={hoveredCard === card.id ? "" : "none"}
                title={card.title}
                btc={card.btc}
                img={card.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;
