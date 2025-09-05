import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Fragment } from "react";

const headdata = (
  <head>
    <title>NextJS Events</title>
    <meta
      name="description"
      content="Find a lot of great events that allow you to evolve..."
    />
  </head>
);

function HomePage(props) {
  return (
    <>
      {headdata}

      <div>
        <EventList items={props.events} />
      </div>
    </>
  );
}
//let's solve this very importnat issue of fetching data from an external API
//we will use getStaticProps to fetch data at build time
//this function runs only on the server side and never on the client side

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
