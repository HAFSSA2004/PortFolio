import React from "react";
import "./card.css";
import { Link, useLocation } from "react-router-dom";

export default function Cards() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return null;
  }

  const cardData = [
    {
      link: "/TodoApp",
      imgSrc: "todp.png",
      alt: "ToDo List App",
      title: "ToDo List",
      description: "Manage your tasks effectively with our ToDo List app.",
    },
    {
      link: "/calculator",
      imgSrc: "calc.png",
      alt: "Smart Calculator",
      title: "Calculator",
      description: "Perform calculations easily with our smart calculator.",
    },
    {
      link: "/api",
      imgSrc: "api.png",
      alt: "API Data Exploration",
      title: "API Data",
      description: "Explore APIs and fetch dynamic data effortlessly.",
    },
    {
      link: "/cart",
      imgSrc: "profile.jpg",
      alt: "User Profile Management",
      title: "Profile",
      description: "View and manage user profiles with our card feature.",
    },
  ];

  return (
    <section className="cards-container">
      {cardData.map((card, index) => (
        <article key={index} className="card">
          <Link to={card.link}>
            <img src={card.imgSrc} alt={card.alt} className="card-img" />
          </Link>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </article>
      ))}
    </section>
  );
}
