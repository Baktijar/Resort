import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { Loading, sortedRooms, rooms } = value;
        if (Loading) {
          return <Loading />;
        }

        return (
          <div>
            hello from RoomContainer
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
