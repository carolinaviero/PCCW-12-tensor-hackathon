import EachEvent from "./EachEvent";

const ThisWeeksEvents = ({ events }) => {
    return (
        <>
            <h3>This weeks events</h3>
            {events.map(e => <EachEvent key={e.attributes.id} event={e.attributes} />)}
        </>
    );
}

export default ThisWeeksEvents;