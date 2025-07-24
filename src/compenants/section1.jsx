import Card from './card'
import techhub from '/public/graphics/lasttech.jpg'
import itday  from '/public/graphics/tt.jpg'
import Speak  from '/public/graphics/ssup.jpg'
import vite  from '/public/vite.svg'
import hour from "../assets/hour1.jpg"

function Events() {

    return (
        <div className="bg-gray-900 w-full mt-10">
        <h1 className="text-white font-bold text-center text-2xl sm:text-2xl md:text-2xl">Overview About our Events</h1>
      <div className="grid lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-5 lg:content-center lg:gap-x-0 w-full h-auto  bg-gray-900 justify-center mt-10">
        <Card 
        
          src={techhub}
          caption={"Great competition for programmers and IT students"}
          title={"Tech Hub"}
          
          
        />
                <Card
          src={itday}
          caption={"Event organized for features tech talks, workshops, and innovative projects"}
          title={"IT Day"}
          
        />
                        <Card
          src={vite}
          caption={"Space for communications and sharing electronic projects between members"}
          title={"Energy Space"}
          
        />
                        <Card
          src={Speak}
          caption={"An event to boosts public speaking skills through talks and interactive discussions"}
          title={"Speak Up"}
          
        />
            <Card 
        
          src={vite}
          caption={"Workshops and an opportunity to develop club members and acquire new skills"}
          title={"Teach Me How ?"}
          
        />
            <Card 
          src={hour}
          caption={"Teaching members programming languages and problem solving"}
          title={"Hour Of Code"}
          
        />
      </div>
      </div>
    );
};

export default Events;