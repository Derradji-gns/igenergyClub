import "tailwindcss";
import anis from "/public/graphics/anis.jpg";
import sun from "/public/graphics/sun.jpg";
import walid from "/public/graphics/walid.jpg";
import me from "/public/graphics/me.jpg"
import ali from "/public/graphics/ali2.jpg"
import moncef from "/public/graphics/moncef.jpg"
import waheb from "/public/graphics/waheb.jpg"
import farah from "/public/graphics/farah3.jpg"
import nour from "/public/graphics/nour.jpg"
import billal from "/public/graphics/2098873.svg"
import amina from "/public/graphics/amina.jpg"
import akram from "/public/graphics/akram1.jpg"
import sara from "/public/graphics/2098873.svg"
import boubi from "/public/graphics/2098873.svg"
import yasin from "/public/graphics/yasin.jpg"
import abla from "/public/graphics/2098873.svg"
import isra from "/public/graphics/2098873.svg"
import moffouk from "/public/graphics/moffouk.jpg"
import mazouzi from "/public/graphics/mazouzi.jpg"

const people = [
  {
    name: "Bendriss Anis",
    role: "President | Premium Member",
    mark: false,
    imageUrl: anis,
  },
  {
    name: "Hadjij Chourouk",
    role: "Vice President | Designer",
    mark: false,
    imageUrl: sun,
  },

  {
    name: "Benouali Omar Walid",
    role: "Ex president | Premium Member",
    mark: false,
    imageUrl: walid,
  },
  {
    name: "Derradji Amine Abdelbasset ",

    role: "EX President of RE Department | Developer",
    mark: true,

    imageUrl: me,
  },
  {
    name: "Taleb Ali",
    role: "Secretary General",
    mark: false,
    imageUrl: ali,
  },
  {
    name: "Sibelkhir Moncef",

    role: "  President of Developemnt Department",
    mark: false,

    imageUrl: moncef,
  },
  {
    name: "Guerroudj Abdelwaheb",
    role: "Ex vice president | Social Media Manager",
    mark: false,
    imageUrl: waheb,
  },
  {
    name: "Farah Messaouden",
    role: "president of Design Department",
    mark: false,

    imageUrl: farah,
  },
  {
    name: "Bouziane Mohammed",
    role: "Ex vice President of interior relations ",
    mark: false,
    imageUrl: boubi,
  },
  {
    name: "Nour Meriem",
    role: "President of Communication Department",
    mark: false,
    imageUrl: nour,
  },
  {
    name: "Touati Billal",
    role: " President of Social Media Department",
    mark: false,
    imageUrl: billal,
  },

  {
    name: "Rouba Amina",
    role: "Designer",
    mark: false,
    imageUrl: amina,
  },

  {
    name: "Tayeb-Bey Akram",
    role: "RE Manager",
    mark: false,
    imageUrl: akram,
  },
  {
    name: "Achouri Sara",
    role: "Ex Vice President of External Relations",
    mark: false,
    imageUrl: sara,
  },
  {
    name: "Soufi Yacine",
    role: "Designer",
    mark: false,
    imageUrl: yasin,
  },
  {
    name: "Djemai Abla",
    role: "Active Membre",
    mark: false,
    imageUrl: abla,
  },
  {
    name: "Ghedir Israa",
    role: "Active Membre ",
    mark: false,
    imageUrl: isra,
  },

  {
    name: "Mohammed Mouffok",
    role: "Active Member | artist",
    mark: false,
    imageUrl: moffouk,
  },
      {
            name: 'Mazouzi Amine',
    role: 'Active Member',
    mark: false,
    imageUrl: mazouzi,
    },
];
  
  export default function Leaders() {
    return (
                  <div  className="bg-gray-900 py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl  ">
            <h2 className="text-3xl text-center font-semibold tracking-tight text-pretty text-white font-[serif] sm:text-4xl">
              Meet our Leaders
            </h2>
            <p className="mt-6 text-lg/8 text-white text-center font-[serif]">
              We  have great members who together form the Egenergy community which is the secret of our success and continuous development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 h-auto   sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" width="100px" src={person.imageUrl} className="size-16 rounded-full" />
                  <div> <div className="flex items-center gap-2  ">
                    <h3 className="text-base/7 font-semibold tracking-tight text-white font-[serif]">{person.name}</h3>
                    {person.mark ? (<svg viewBox="0 0 24 24" className="w-auto h-5 " fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#007bff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="#007bff"></path> </g></svg>) : ("")}
                    </div>
                    <p className="text-sm/6 font-semibold text-white font-[serif]">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      
    )
  };