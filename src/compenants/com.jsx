import Cer from './cer';
import walidImg from '/public/graphics/walid.jpg';
import anisImg from '/public/graphics/anis.jpg';
import meriemImg from '/public/graphics/meriem.jpg';
import sunImg from '/public/graphics/sun.jpg';
import meImg from '/public/graphics/me.jpg';

function Community() {
    return(
        <div className="w-full h-150 bg-gray-900 mb-4 mt-12">
            <div className="w-full h-10">
                <h2 className="text-center text-2xl text-white font-bold">Join The Community</h2>
                <p className="text-center text-white mt-3">Discover what our community has to say about their IGenergy Experience</p>
            </div>
            <div className="flex flex-nowrap w-full h-auto overflow-x-auto scrollbar-custom overflow-y-hidden pb-6 mt-20 scrollbar-hide">
                <div className="flex gap-3 space-x-4 px-4 mt-5">
                    <Cer src={walidImg}  name="Benouali Omar Walid" caption="IGENERGY n'est pas seulement un club, c'est une famille où chacun trouve sa place et grandit ensemble ! ❤️🙂"/>
                    <Cer src={anisImg} name="Bendriss Anis" caption="At IGEnergy, work is driven by passion, innovation, and collaboration. Every effort contributes to a shared vision of excellence and progress. ✨️ "/>
                    <Cer src={meriemImg} name="Bouarroudj Meriem" caption="At IGEnergy, success is built on unity and collaboration. Differences in opinions and perspectives are natural, but progress comes when we set aside conflicts, work together with respect and determination."/>
                    <Cer src={sunImg} name="Hadjij Chourouk" caption="نحن دائما نسعى لتقديم أفضل ما نملك من أجل إحياء روح الفريق و المضي قُدمًا نحو فرص جديدة . هذه عائلتنا ❤️"/>
                    <Cer src={meImg} name="Derradji Amine Abdelbasset ⚜️" caption="For me IGENERGY was a great opportunity to show my abilities and practise all what I learn before . "/>
                    
                </div>
            </div>
        </div>
    )
};

export default Community;