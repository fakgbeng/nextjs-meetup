import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      description="some description"
      address="Some Street 5, Some City"
    />
  );
}

export default MeetupDetails;
