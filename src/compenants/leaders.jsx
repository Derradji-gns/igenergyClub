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
    imageUrl: anis,
  },
  {
    name: "Hadjij Chourouk",
    role: "Vice President | Designer",
    imageUrl: sun,
  },

  {
    name: "Benouali Omar Walid",
    role: "Ex president | Premium Member",
    imageUrl: walid,
  },
  {
    name: "Derradji Amine Abdelbasset ",

    role: "EX President of RE Department | Developer",

    imageUrl: me,
  },
  {
    name: "Taleb Ali",
    role: "Secretary General",
    imageUrl: ali,
  },
  {
    name: "Sibelkhir Moncef",

    role: "  President of Developemnt Department",

    imageUrl: moncef,
  },
  {
    name: "Guerroudj Abdelwaheb",
    role: "Ex vice president | Social Media Manager",
    imageUrl: waheb,
  },
  {
    name: "Farah Messaouden",
    role: "president of Design Department",

    imageUrl: farah,
  },
  {
    name: "Bouziane Mohammed",
    role: "Ex vice President of interior relations ",
    imageUrl: boubi,
  },
  {
    name: "Nour Meriem",
    role: "President of Communication Department",
    imageUrl: nour,
  },
  {
    name: "Touati Billal",
    role: " President of Social Media Department",
    imageUrl: billal,
  },

  {
    name: "Rouba Amina",
    role: "Designer",
    imageUrl: amina,
  },

  {
    name: "Tayeb-Bey Akram",
    role: "RE Manager",
    imageUrl: akram,
  },
  {
    name: "Achouri Sara",
    role: "Ex Vice President of External Relations",
    imageUrl: sara,
  },
  {
    name: "Soufi Yacine",
    role: "Designer",
    imageUrl: yasin,
  },
  {
    name: "Djemai Abla",
    role: "Active Membre",
    imageUrl: abla,
  },
  {
    name: "Ghedir Israa",
    role: "Active Membre ",
    imageUrl: isra,
  },

  {
    name: "Mohamed Moffouk",
    role: "Active Membre",
    imageUrl: moffouk,
  },
      {
            name: 'Mazouzi Amine',
    role: 'Active Member',
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
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white font-[serif]">{person.name}</h3>
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