import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <lebel htmlFor="type">room type</lebel>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onchange={handleChange}
          />
        </div>
        {/* end select type */}
      </form>
    </section>
  );
}
