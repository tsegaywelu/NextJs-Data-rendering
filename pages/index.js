import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
//this function will run at build time on the server side
//this function will never run on the client side
//this function will be used to fetch data from an API or database
//this function will be used to pre-render the page with the fetched data
//this function will be used to revalidate the page every 30 minutes

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
