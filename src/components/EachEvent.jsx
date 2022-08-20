import { useLocation } from 'react-router-dom'

const EachEvent = ({ event }) => {
    const location = useLocation();

    console.log(event)

    return (
       location.pathname === '/events' ? <div><h4>{event.name}</h4>Location: {event.location}</div> : event.thisweek && (<div>{event.name}</div>)
    )
}

export default EachEvent;