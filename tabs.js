const data = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: "./assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: "./assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
// Destination Page navigation
const navContainer = document.getElementById("planet-container");
const planetName = document.getElementById("planet-name");
const activeTab = document.getElementById("nav-tab");
const planetData = document.getElementById("planet-info");
const planetDistance = document.getElementById("distance");
const travelTime = document.getElementById("travel-time");
const pictureSource = document.getElementById("pictureSource");
const imageSource = document.getElementById("imageSource");
// For Looping through all the buttons
const buttons = document.querySelectorAll("#nav-tab > button");
activeTab.addEventListener("click", (e) => {
  updateContent(e);
});

function updateContent(e) {
  const planet = e.target.getAttribute("data-planet");
  for (let button of buttons) {
    button.classList.remove("active");
    button.setAttribute("aria-selected", "false");
  }
  e.target.classList.add("active");
  e.target.setAttribute("aria-selected", "true");

  const destinations = data.destinations;
  switch (planet) {
    case "moon":
      planetName.textContent = destinations[0].name;
      planetData.textContent = destinations[0].description;
      planetDistance.textContent = destinations[0].distance;
      travelTime.textContent = destinations[0].travel;
      pictureSource.setAttribute("srcset", destinations[0].images.webp);
      imageSource.src = destinations[0].images.png;

      break;
    case "mars":
      planetName.textContent = destinations[1].name;
      planetData.textContent = destinations[1].description;
      planetDistance.textContent = destinations[1].distance;
      travelTime.textContent = destinations[1].travel;
      pictureSource.setAttribute("srcset", destinations[1].images.webp);
      imageSource.src = destinations[1].images.png;

      break;
    case "europa":
      planetName.textContent = destinations[2].name;
      planetData.textContent = destinations[2].description;
      planetDistance.textContent = destinations[2].distance;
      travelTime.textContent = destinations[2].travel;
      pictureSource.setAttribute("srcset", destinations[2].images.webp);
      imageSource.src = destinations[2].images.png;
      break;
    case "titan":
      planetName.textContent = destinations[3].name;
      planetData.textContent = destinations[3].description;
      planetDistance.textContent = destinations[3].distance;
      travelTime.textContent = destinations[3].travel;
      pictureSource.setAttribute("srcset", destinations[3].images.webp);
      imageSource.src = destinations[3].images.png;
      break;
    default:
      planetName.textContent = destinations[0].name;
      planetData.textContent = destinations[0].description;
      planetDistance.textContent = destinations[0].distance;
      travelTime.textContent = destinations[0].travel;
      pictureSource.setAttribute("srcset", destinations[0].images.webp);
      imageSource.src = destinations[0].images.png;
      break;
  }
}
