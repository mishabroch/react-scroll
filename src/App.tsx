import React, { useEffect, useRef, useState } from "react";

import "./App.css";

const people = [
  {
    id: 1,
    name: "Luke Skywalker",
    image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    id: 2,
    name: "C-3PO",
    image: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  },
  {
    id: 3,
    name: "R2-D2",
    image: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  },
  {
    id: 4,
    name: "Darth Vader",
    image: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
  },
  {
    id: 5,
    name: "Owen Lars",
    image: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
  },
  {
    id: 6,
    name: "Beru Whitesun lars",
    image: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
  },
  {
    id: 7,
    name: "R5-D4",
    image: "https://starwars-visualguide.com/assets/img/characters/7.jpg",
  },
];

const App: React.FC = () => {
  const sectionRef = useRef<any>(null);

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    scrollToSection();
  }, [currentSection]);

  const scrollToSection = () => {
    if (!sectionRef) return;
    sectionRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {people.map((item) => {
          return (
            <button key={item.id} onClick={() => setCurrentSection(item.id)}>
              {item.name}
            </button>
          );
        })}
      </header>

      <main className="App-content">
        {people.map((item) => {
          return (
            <img
              key={item.id}
              ref={currentSection === item.id ? sectionRef : null}
              className="Image-wrapper"
              src={item.image}
              alt=""
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
