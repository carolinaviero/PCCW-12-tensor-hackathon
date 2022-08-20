import CheckIn from './CheckIn'
import EventsNearYou from './EventsNearYou'
import ThisWeeksEvents from './ThisWeeksEvents'

const Home = ({ events }) => {

    return (
        <div>
            <ThisWeeksEvents events={events} />
            <CheckIn />
            <EventsNearYou />
        </div>
)};

export default Home;