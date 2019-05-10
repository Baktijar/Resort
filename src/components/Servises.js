import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Servises extends Component {
  state = {
    servises: [
      {
        icon: <FaCocktail />,
        title: "Cocktails",
        info:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis sint alias blanditiis adipisci! "
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis sint alias blanditiis adipisci! "
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Transport",
        info:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis sint alias blanditiis adipisci! "
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis sint alias blanditiis adipisci! "
      }
    ]
  };
  render() {
    return (
      <section className="servises">
        <Title title="servises" />
        <div className="servises-center">
          {this.state.servises.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
