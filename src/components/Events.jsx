import EachEvent from "./EachEvent";

const Events = ({ events }) => (
    events.map(e => <EachEvent key={e.attributes.id} event={e.attributes} />)
);

export default Events;