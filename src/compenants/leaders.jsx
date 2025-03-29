import "tailwindcss";

const people = [
    {
      name: 'Bendriss Anis',
      role: 'President | Premium Member',
      imageUrl:
        './graphics/anis.jpg',
    },

    {
            name: 'Hadjij Chourouk',
    role: 'Vice President | Designer',
    imageUrl:'./graphics/sun.jpg',
    },

    {
        name : "Benouali Omar Walid",
        role:'Ex president | Premium Member',
        imageUrl:'./graphics/walid.jpg'
    },
    {
      name:'Derradji Amine Abdelbasset  🛡',


      role:'EX President of RE Department | Developer',

      imageUrl:'./graphics/me.jpg'
  }, 
{
        name: 'Taleb Ali',
        role:'Secretary General',
         imageUrl:'./graphics/ali2.jpg'

    },
    {
        name:"Sibelkhir Moncef",

        role:"  President of Developemnt Department",

        imageUrl:"./graphics/nmoncef.jpg"
    },
    {
      name:"Guerroudj Abdelwaheb",
      role:"Ex vice president | Social Media Manager",
      imageUrl:"./graphics/waheb.jpg"
    },
    {
      name:"Farah Messaouden",
      role:"president of Design Department",

      imageUrl:"./graphics/farah3.jpg",
    },
    {
      name:"Nour Meriem",
      role:"President of Communication Department",
      imageUrl:"./graphics/nour.jpg",
    },
    {
      name:"Touati Billal",
      role:" President of Social Media Department",
      imageUrl:"./graphics/billal.jpg"
    },

    {
      name : "Rouba Amina",
      role:"Designer",
      imageUrl :'./graphics/amina.jpg'
    },
    {
      name:"Bouarroudj Meriem",
      role:"Ex President of Dev Department | Project Department | Premium Member",
      imageUrl:"./graphics/meriem.jpg"
    },
    {
      name:"Tayeb-Bey Akram",
      role:"RE Manager",
      imageUrl:"./graphics/akram1.jpg"
    },
    {
      name:"Dahmene Chaima",
      role:"Social Media | Sponsorship",
      imageUrl:"./graphics/2098873.svg",
    },
    {
      name:"Achouri Sara",
      role:"Ex Vice President of External Relations",
      imageUrl:"./graphics/2098873.svg",
    },
    {
      name:"Boudelal Abderrahman",
      role:"EX president of Design Department | Premium Member",
      imageUrl:"./graphics/boud.jpg"
    },
    {
      name:" Hassani Kawther",
      role:"EX Vice President | Premium Member",
      imageUrl:"./graphics/kawter.jpg"
    },
    {
      name:"Bouziane Mohammed",
      role:"Ex vice President of interior relations ",
      imageUrl:"./graphics/bouby.JPG"
    }, 
    {
      name:"Soufi Yacine",
      role:"Designer",
      imageUrl:"./graphics/yasin.jpg",
    },
    {
      name:"Djemai Abla",
      role:"Active Membre",
      imageUrl:"./graphics/2098873.svg"
    },
    {
      name:"Ghedir Israa",
      role:"Active Membre ",
      imageUrl:"./graphics/2098873.svg",
    },

    {
      name:"Grine Soundouss",
      role:"Active Membre",
      imageUrl:"./graphics/soun.jpg"
    },
    {
      name:"Dadda Amani",
      role:"Social Media Manager | Photographer",
      imageUrl:"/public/graphics/dada.jpg"
    }
  ]
  
  export default function Leaders() {
    return (
                  <div  className="bg-gray-900 py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl  ">
            <h2 className="text-3xl text-center font-semibold tracking-tight text-pretty text-white sm:text-4xl">
              Meet our Leaders
            </h2>
            <p className="mt-6 text-lg/8 text-white text-center">
              We  have great members who together form the Egenergy community which is the secret of our success and continuous development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 h-200 overflow-scroll overflow-x-hidden sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" width="100px" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-white">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      
    )
  };