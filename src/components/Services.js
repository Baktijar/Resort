import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
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
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
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
