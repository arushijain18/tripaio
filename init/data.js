const sampleListings = [
{
    title: "Charming 2 BR home in Albany",
    description: "Get ready for a wonderful stay at our uniquely styled home in one of Albany's most charming neighborhoods. This cozy retreat features two comfortable bedrooms, two large TVs, and a dedicated workspace perfect for working",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1528330624684718752/original/903e1ad3-8ca4-421f-ab32-322687e0a7d2.jpeg" },
    price: 5727,
    location: "Eighth Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.79208773618511, 42.64273221597384] }
  },
  {
    title: "ParkSide Retreat - 2 BDR with Off Street Parking",
    description: "Stay steps from Washington Park in this charming 2-bedroom. Just a 4-minute walk to Albany Med and minutes from Albany Law and Pharmacy College. Enjoy bright, airy rooms, a cozy living space, and a full kitchen. Walk to ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1528281264652621033/original/04eebaa7-bc71-479c-9224-eaec158c2e4c.jpeg" },
    price: 12616,
    location: "Sixth Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.77128, 42.6542] }
  },
  {
    title: "Budget Friendly 2 BDRM with Modern Amenities WILL1",
    description: "✔ 2 Bedrooms with TVs in each room! ✔ Lie flat sofa bed (we are not responsible for extra linens) ✔ Dedicated workspace ✔ STREET PARKING ONLY ✔ Ideal for corporate housing, travel nurses, or friends/family vacations! ✔ C",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1486971933919777260/original/12cfec4a-484f-4f5f-8abd-3f38e5021d58.jpeg" },
    price: 9213,
    location: "Sixth Ward, Albany",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-73.76964, 42.65406] }
  },
  {
    title: "Cozy Home in Heart of Albany",
    description: "Enjoy this lovely neighborhood of Albany when you stay in this 2-bedroom, 2 bathroom home! Bring the whole family to this great place with lots of room for fun. This bright and cozy home includes a fully equipped kitchen",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1350831900774924999/original/ae2cb472-63f0-4028-9bd3-934c956a75c9.jpeg" },
    price: 10458,
    location: "Twelfth Ward, Albany",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-73.79764015056868, 42.68507834404223] }
  },
  {
    title: "The Sweet spot",
    description: "Your family will be close to everything when you stay at this centrally-located place. Which is 15 minutes from the city center,12 minutes from the airport, 10 minutes from Crossgate mall, and Albany Med, 7 mins from St ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1319649416178819713/original/2168959d-4e24-4548-ba4f-8f4e3d36cc6a.jpeg" },
    price: 8134,
    location: "Fifteenth Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.82525054567722, 42.67077854215789] }
  },
  {
    title: "Downtown Luxe- Steps to MVP Arena & NYS Capital",
    description: "Located in the heart of downtown Albany & steps from MVP Arena, the NYS Capitol, and Empire State- Your new home is perfect for concerts, Traveling Nurses, Short Term stays and business trips,-you can walk to events, din",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1476780998285613744/original/0ee5108d-a260-4992-885e-ddde2d22f19d.jpeg" },
    price: 5976,
    location: "Third Ward, Albany",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-73.75325649999999, 42.6498098] }
  },
  {
    title: "Dali room, private queen near AMC, UAlbany",
    description: "Hello, thanks for checking out my listing! This vintage, updated home has multiple living areas inc. living room, dining room, enclosed porch & outdoor patio with tree-lined back yard. large bedroom, shared 1.5 baths. 2 ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1209313814437527365/original/e31965d4-c130-4414-8be6-0c1d479fecde.jpeg" },
    price: 7055,
    location: "Thirteenth Ward, Albany",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-73.79345, 42.67318] }
  },
  {
    title: "Modern Carriage in the Heart of Albany",
    description: "Welcome to our updated carriage house tucked into the heart of Albany. Near it all while avoiding a lot of the city traffic. This 2 bedroom, 1.5 bath home boasts a rooftop deck, sunroom, and private garden as well as a g",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/43d738c1-2f7a-4729-8208-8eca27a977ab.jpg" },
    price: 8051,
    location: "Sixth Ward, Albany",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-73.7668, 42.65115] }
  },
  {
    title: "CHEERFULL 3 BEDROOM HOME WITH FREE PARKING.",
    description: "Forget your worries in this spacious and serene space. Located close to all major highways, hospitals, shopping and historic downtown Albany. Boast 2 decks and large front porch for relaxation or entertaining. Has large ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-658638185191740358/original/6f66604d-d9ba-4229-b830-c71abeadd3a9.jpeg" },
    price: 11620,
    location: "First Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.7716647, 42.6374547] }
  },
  {
    title: "Modern luxury one bedroom with off street parking",
    description: "Newly renovated one bedroom, loft style apartment. Centrally located in the Mansion neighborhood in albany. Huge spacious open layout with walk in closet. Big screen tvs, with super fast internet (400 mps). On-site laund",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/4f44429e-bd8d-4c68-915e-44b87de774eb.jpg" },
    price: 14442,
    location: "Second Ward, Albany",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-73.75731, 42.64489] }
  },
  {
    title: "Renovated 2br/2ba, close to Alb Med & St. Petes.",
    description: "Spacious Pine Hills flat with many recent updates including refinished hardwood floors, all new windows and a completely remodeled kitchen, including brand new appliances. This unit also has a private laundry room as wel",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-47902629/original/3e978722-223e-4248-9300-d422e4b84cbd.jpeg" },
    price: 13280,
    location: "Thirteenth Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.79216, 42.66744] }
  },
  {
    title: "Quiet 2-bedroom condo in the heart of Albany",
    description: "This stunning property will amaze you from the moment you walk in the door. This charming character apartment provides you with all the modern conveniences you would hope for. Peace and tranquility are in abundance. This",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAwODg5MzU%3D/original/bd286cd6-d297-4218-afd8-9a2f596ccc94.jpeg" },
    price: 8051,
    location: "Thirteenth Ward, Albany",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-73.79544, 42.66972] }
  },
  {
    title: "/Audubon Apartment\\ 3bed 1bath built1928 Pine Hill",
    description: "Three bedroom upstairs apartment in a 2 family home. Recently updated kitchen and fully renovated bath.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1227494196390230149/original/9faed29b-e3dc-4da2-82ac-1576168b5d7e.jpeg" },
    price: 8881,
    location: "Thirteenth Ward, Albany",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-73.78542, 42.66955] }
  },

  {
    title: "Historic Carriage House in Denver's Oldest Neighborhood",
    description: "After being shut down for 2 years, we are back and still rated Colorado's #1 best-loved Airbnb! Privately tucked in the back garden of a grand home, walking distance to breweries and restaurants. Near RiNo, with its craft breweries. One mile to Denver's 16th Street Mall.",
    image: {
      filename: "carriage_house_denver",
      url: "https://a0.muscache.com/pictures/miso/Hosting-6333040/original/962094da-8134-46bb-a278-b2a476f1b82d.jpeg"
    },
    price: 13655,
    location: "Five Points, Denver",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-104.9741, 39.76154] }
  },
  {
    title: "Private Entry Suite in Cole/RiNo Near Downtown",
    description: "Contemporary and comfortable, this historic house is a picturesque discovery in the heart of the Cole neighborhood tucked into the hip area of RiNo. Behind the Victorian architecture, this unique 1880s home is tastefully upgraded with modern amenities and vintage finishes.",
    image: {
      filename: "cole_rino_suite",
      url: "https://a0.muscache.com/pictures/airflow/Hosting-25476793/original/925852b0-e1eb-494f-b681-511a3ab865d8.jpg"
    },
    price: 10147,
    location: "Cole / RiNo, Denver",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-104.96994, 39.76362] }
  },
  {
    title: "Private Guesthouse in the Highlands / LoHi",
    description: "Cute, cozy and comfy one-bedroom apartment in LoHi, Denver's most exciting neighborhood. Central location with eclectic dining and entertainment options within easy walking distance, close to Union Station and easy access to I-25 and I-70.",
    image: {
      filename: "highlands_guesthouse",
      url: "https://a0.muscache.com/pictures/e711c068-2912-4a21-9c11-ca42cf587500.jpg"
    },
    price: 9293,
    location: "Highland / LoHi, Denver",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-105.01718, 39.76577] }
  },
  {
    title: "Brand New Guest Suite Minutes from Downtown Denver",
    description: "Enjoy a short or long stay at this guest suite in Sloan's Lake. Whether in town for work, a concert, or a quick getaway, you'll find everything you need with a kitchenette. Empower Field is a 7-minute walk and Sloan's Lake is a 15-minute walk.",
    image: {
      filename: "sloans_lake_suite",
      url: "https://a0.muscache.com/pictures/miso/Hosting-625441329227604900/original/3a1ae063-0740-432f-b095-72ab6a72f499.jpeg"
    },
    price: 9198,
    location: "West Colfax, Denver",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-105.02734, 39.7435] }
  },
  {
    title: "Modern 3-Story Sanctuary w/ Private Roof Oasis",
    description: "Listed in Condé Nast Traveler's Top 11 Best Airbnbs in Denver. A dreamy oasis in the heart of LoHi featuring a private roof deck, private outdoor shower (seasonal), and stunning city views — a true urban retreat.",
    image: {
      filename: "lohi_rooftop_sanctuary",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0OTQyMDU%3D/original/b7f767b5-c6d7-4d25-a762-58499edaf93d.jpeg"
    },
    price: 31104,
    location: "Highland / LoHi, Denver",
    country: "United States",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [-105.01606, 39.75959] }
  },

  {
    title: "Studio+ Free Parking near ETH/River (Zürich Höngg)",
    description: "A small self-contained studio on the second floor of the host's building, offering complete privacy. Features a private full bathroom and kitchen. Within 1 minute's walk you can be relaxing by the river — or floating along it with a beer!",
    image: {
      filename: "zurich_hongg_studio",
      url: "https://a0.muscache.com/pictures/miso/Hosting-1118665560754930229/original/b99cf7d7-f3f6-41a6-ba00-a570098adbd0.jpeg"
    },
    price: 10716,
    location: "Höngg, Zürich",
    country: "Switzerland",
    category: "cities",
    geometry: { type: "Point", coordinates: [8.50311, 47.39664] }
  },
  {
    title: "Zürich: Room in Studio Apartment in the Green",
    description: "A non-smoking room built in 2018, part of a 4-room studio apartment in Minergie standard. Includes a private TV, fridge, coffee maker, kettle, private shower with sink, and a separate toilet.",
    image: {
      filename: "zurich_affoltern_room",
      url: "https://a0.muscache.com/pictures/9bf9b688-2224-4277-b4f2-ac4c7d47ae77.jpg"
    },
    price: 4836,
    location: "Affoltern, Zürich",
    country: "Switzerland",
    category: "rooms",
    geometry: { type: "Point", coordinates: [8.50299, 47.4251] }
  },
  {
    title: "Relaxing Holidays in Zürich, Switzerland",
    description: "Light-flooded 4-room holiday flat with 2 balconies in a top location in Zurich-Wiedikon. Very quiet yet easily accessible by public transport. Stylishly and lovingly furnished, particularly suitable for families with a lot to discover for children.",
    image: {
      filename: "zurich_wiedikon_flat",
      url: "https://a0.muscache.com/pictures/miso/Hosting-43297164/original/ce30c31b-233f-44c8-8d36-44c5e4e95609.jpeg"
    },
    price: 20483,
    location: "Alt-Wiedikon, Zürich",
    country: "Switzerland",
    category: "trending",
    geometry: { type: "Point", coordinates: [8.51949, 47.36529] }
  },
  {
    title: "Bright and Charming, in Zürich",
    description: "A 1-bedroom flat with a fully equipped open kitchen, luxurious bathroom, separate toilet, big private terrace and balcony, and a very comfortable king size bed.",
    image: {
      filename: "zurich_altwiedikon_bright",
      url: "https://a0.muscache.com/pictures/58596982/2952168c_original.jpg"
    },
    price: 21811,
    location: "Alt-Wiedikon, Zürich",
    country: "Switzerland",
    category: "trending",
    geometry: { type: "Point", coordinates: [8.52205, 47.35998] }
  },
  {
    title: "Apartment with Spectacular Lake View",
    description: "A sunny and comfortable apartment inside a recently renovated 3-family house in Zürich. Located on a quiet street near the woods, 250m from a bus stop connecting directly to Zürich HB. Parking available on site.",
    image: {
      filename: "zurich_witikon_lakeview",
      url: "https://a0.muscache.com/pictures/miso/Hosting-47589979/original/68258680-84e6-4b08-a00b-f49d22a8a688.jpeg"
    },
    price: 29871,
    location: "Witikon, Zürich",
    country: "Switzerland",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [8.58195, 47.36123] }
  },

  {
    title: "Bright Apt in the Heart of Bergamo - 2",
    description: "Welcome to The Place to BG, an oasis in the pulsating heart of downtown Bergamo! The apartment has just been renovated and is located on the first floor with an elevator, in an elegant building on a green and peaceful residential street — just steps away from everything Bergamo has to offer.",
    image: {
      filename: "bergamo_bright_apt",
      url: "https://a0.muscache.com/pictures/miso/Hosting-983979305621996742/original/ec8d9582-bb5c-491d-9312-e0734a57da4e.jpeg"
    },
    price: 8914,
    location: "Bergamo, Italy",
    country: "Italy",
    category: "cities",
    geometry: { type: "Point", coordinates: [9.67297, 45.69791] }
  },
  {
    title: "Domus Solarii Holiday Home",
    description: "Discover the beauty of a unique and fascinating historic village. Your home, located in a 16th-century building, welcomes you with its hospitality and the convenience of having cultural, gastronomic, and natural attractions close by.",
    image: {
      filename: "bergamo_domus_solarii",
      url: "https://a0.muscache.com/pictures/miso/Hosting-53332154/original/a1e5f636-730a-4034-85ed-0b230978a21b.jpeg"
    },
    price: 8250,
    location: "Bergamo, Italy",
    country: "Italy",
    category: "castle",
    geometry: { type: "Point", coordinates: [9.66473, 45.7034] }
  },
  {
    title: "Favoloso Loft Vista Città Alta, con Garage Privato",
    description: "Elegant loft on two levels recently renovated with views of the rooftops and Bergamo Alta. Just 4 km from Caravaggio Orio al Serio Airport and 2 km from Bergamo Railway Station. Modern and cozy, taken care of in every detail.",
    image: {
      filename: "bergamo_loft_citta_alta",
      url: "https://a0.muscache.com/pictures/miso/Hosting-1022612586316991790/original/a852785a-48ac-4f29-b081-70bb08e40da1.jpeg"
    },
    price: 8724,
    location: "Bergamo, Italy",
    country: "Italy",
    category: "trending",
    geometry: { type: "Point", coordinates: [9.69287, 45.68816] }
  },
  {
    title: "Bergamo Alta Suite a Few Steps from Piazza Vecchia",
    description: "A spacious apartment with a large living room, eat-in kitchen, whirlpool bathroom, and balcony. The second floor features 3 double bedrooms, one with a large en-suite — perfectly located just steps from the iconic Piazza Vecchia in Bergamo's old town.",
    image: {
      filename: "bergamo_alta_suite",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-39886099/original/18f18183-4ad2-495e-84ce-d8a2c3678b27.jpeg"
    },
    price: 31578,
    location: "Bergamo, Italy",
    country: "Italy",
    category: "castle",
    geometry: { type: "Point", coordinates: [9.66293, 45.70383] }
  },
  {
    title: "Ampio Bilocale in Villa, con Patio e Parcheggio",
    description: "An urban oasis near the city center for those who want to visit the city but stay in the countryside. Just 10 minutes by car from the historic center and 15 minutes from the highway and airport, with free street parking and a private patio.",
    image: {
      filename: "bergamo_villa_bilocale",
      url: "https://a0.muscache.com/pictures/9265d23f-38d3-494c-a048-cf4c5ae3783d.jpg"
    },
    price: 6164,
    location: "Bergamo, Italy",
    country: "Italy",
    category: "farm",
    geometry: { type: "Point", coordinates: [9.66566, 45.72081] }
  },

  {
    title: "Sunset At Crescent – Oceanview Couples Retreat",
    description: "Welcome to Sunset At Crescent. This stunning ocean view apartment is located in the popular eastern side of the village, perfect for couples looking for a serene coastal escape with breathtaking sunset views.",
    image: {
      filename: "crescent_head_sunset",
      url: "https://a0.muscache.com/pictures/bef39f3e-e73d-4ee3-b778-9a32d68d7e35.jpg"
    },
    price: 19819,
    location: "Kempsey, New South Wales",
    country: "Australia",
    category: "trending",
    geometry: { type: "Point", coordinates: [152.97985, -31.19089] }
  },
  {
    title: "Crescent Head Luxury Hideaway",
    description: "Indulge, reconnect and relax in this luxurious, private villa with a heated magnesium pool, set in landscaped gardens on 20 acres of rural bushland — just 10 minutes from Crescent Head, one of the most famous surfing spots in Australia.",
    image: {
      filename: "crescent_head_luxury",
      url: "https://a0.muscache.com/pictures/miso/Hosting-598974184010452913/original/1a14aac7-c319-4af4-83c5-21e01f0b0fe9.jpeg"
    },
    price: 41535,
    location: "Kempsey, New South Wales",
    country: "Australia",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [152.91315, -31.17758] }
  },
  {
    title: "Birdsong @ Girralong – Secluded Forest Cabin",
    description: "Relax, unplug and unwind in nature. Birdsong is a haven for birdwatching, native wildlife spotting and bushwalking, nestled on a 100-acre property in a secluded valley surrounded by forest and an adjoining nature reserve.",
    image: {
      filename: "birdsong_forest_cabin",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDc1MTQ3NTQ=/original/43ca9793-96c8-4c52-a4ea-2960cf8e2ec1.jpeg"
    },
    price: 15931,
    location: "Nambucca Valley, New South Wales",
    country: "Australia",
    category: "camping",
    geometry: { type: "Point", coordinates: [152.669647, -30.574913] }
  },
  {
    title: "Seabirds Cottage 2 Bedroom",
    description: "A uniquely designed Coastal Hamptons Cottage in the heart of Coffs Harbour, an easy stroll to the city centre, restaurants, botanical gardens and a short drive to pristine beaches. Ideal for couples, families and business stays.",
    image: {
      filename: "coffs_seabirds_cottage",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Njg5MzEzOTM4NDQzODE0ODU2/original/4f3d1cf8-4026-4b88-841f-27439d1da6d8.jpeg"
    },
    price: 28449,
    location: "Coffs Harbour, New South Wales",
    country: "Australia",
    category: "trending",
    geometry: { type: "Point", coordinates: [153.12111, -30.30239] }
  },
  {
    title: "Baevue Cottage",
    description: "Once an oyster purging shed, now transformed into a perfect couples' getaway nestled on the waterfront of Pelican Bay in the Manning River. Just minutes from Manning Point Beach — ideal for sunrise walks and waterfront relaxation.",
    image: {
      filename: "baevue_cottage_midcoast",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-34158419/original/d698ac55-38ca-4ce2-ae71-4830234d1720.jpeg"
    },
    price: 26552,
    location: "Mid-Coast, New South Wales",
    country: "Australia",
    category: "trending",
    geometry: { type: "Point", coordinates: [152.64449, -31.89051] }
  },

  {
    title: "Sunny and Design in Berlin Mitte",
    description: "Welcome to this stylish apartment in Mitte, the very heart of Berlin! Just short walks to restaurants, bars, clubs, historical places, museums and theaters — the perfect base to enjoy everything Berlin has to offer.",
    image: {
      filename: "berlin_mitte_sunny",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-12319085/original/4d2a7fa7-0ad4-4645-bc35-06beddb0c614.jpeg"
    },
    price: 15931,
    location: "Brunnenstr. Süd, Berlin",
    country: "Germany",
    category: "cities",
    geometry: { type: "Point", coordinates: [13.39383, 52.53483] }
  },
  {
    title: "Urban Roof of Berlin-Kreuzberg",
    description: "A themed room in a penthouse in Kreuzberg with astronomical and Berlin-inspired decor, offering the best views of the Berlin sky. Fully air-conditioned with access to a balcony and private fridge — a truly unique urban experience.",
    image: {
      filename: "berlin_kreuzberg_roof",
      url: "https://a0.muscache.com/pictures/cf94a952-1dca-442b-9943-120249e5c85d.jpg"
    },
    price: 6543,
    location: "Südliche Friedrichstadt, Berlin",
    country: "Germany",
    category: "rooms",
    geometry: { type: "Point", coordinates: [13.4083, 52.49959] }
  },
  {
    title: "Well Located Attic Studio with Sauna",
    description: "A light rooftop apartment with 150-year-old wooden beams in a lovely neighbourhood. Features a stylish kitchen, luxurious bathroom with rain shower and Finnish sauna, Netflix, cable TV and very fast internet.",
    image: {
      filename: "berlin_helmholtz_sauna_studio",
      url: "https://a0.muscache.com/pictures/miso/Hosting-37412496/original/21ada929-609e-4c04-a325-ab86b4aa8853.jpeg"
    },
    price: 14509,
    location: "Helmholtzplatz, Berlin",
    country: "Germany",
    category: "trending",
    geometry: { type: "Point", coordinates: [13.42157, 52.54134] }
  },
  {
    title: "Helles Zimmer in Citynähe",
    description: "A bright room just 2 minutes walk from the S-Bahn at Julius-Leber-Brücke, with 6 bus and U-Bahn connections nearby. Shopping, restaurants and cafes are all within easy reach, and KaDeWe is just 6 bus stops away.",
    image: {
      filename: "berlin_schoneberg_room",
      url: "https://a0.muscache.com/pictures/miso/Hosting-22632636/original/a244040b-f31e-49e8-9887-66fd55449c20.jpeg"
    },
    price: 6449,
    location: "Schöneberg-Süd, Berlin",
    country: "Germany",
    category: "rooms",
    geometry: { type: "Point", coordinates: [13.36212, 52.4864] }
  },
  {
    title: "Ferienbungalow an der Müggelspree B1 – Blue Sky",
    description: "A vacation bungalow on a large, quiet property on the banks of the Müggelspree river. Above-average standards, easily accessible by car and public transport, with plenty of parking on the premises.",
    image: {
      filename: "berlin_muggelspree_bungalow",
      url: "https://a0.muscache.com/pictures/d72f1131-c0f8-41ae-ae69-2ada96d35b8d.jpg"
    },
    price: 7207,
    location: "Rahnsdorf/Hessenwinkel, Berlin",
    country: "Germany",
    category: "camping",
    geometry: { type: "Point", coordinates: [13.69566, 52.43137] }
  },

  {
    title: "Luxury Canal Studio at Street Level",
    description: "A street-level studio on one of the most beautiful and quiet canals in the heart of Amsterdam. Walking distance to the 9 Straatjes boutiques, Leidsestraat, Leidseplein cafes and the Kalverstraat shopping street — the perfect Amsterdam base.",
    image: {
      filename: "amsterdam_canal_studio",
      url: "https://a0.muscache.com/pictures/49481889-2ec9-4621-ac0f-542e28b59a57.jpg"
    },
    price: 20863,
    location: "Centrum-West, Amsterdam",
    country: "Netherlands",
    category: "trending",
    geometry: { type: "Point", coordinates: [4.88505, 52.36645] }
  },
  {
    title: "2 BR Canal View – Former Rembrandt Workshop Apt",
    description: "Located in the iconic Jordaan neighbourhood with everything Amsterdam has to offer at your doorstep. Directly opposite the Anne Frank House and the famous Westerkerk — the tallest bell-tower in the city centre.",
    image: {
      filename: "amsterdam_rembrandt_canalview",
      url: "https://a0.muscache.com/pictures/62ff608b-ba7b-4042-876a-23c8cb843992.jpg"
    },
    price: 46382,
    location: "Centrum-West, Amsterdam",
    country: "Netherlands",
    category: "castle",
    geometry: { type: "Point", coordinates: [4.88305, 52.37506] }
  },
  {
    title: "Amazing Private Studio on Houseboat",
    description: "Welcome aboard! A luxury design apartment transformed from part of a houseboat, featuring a queen size bed, en-suite walk-in rain shower, cosy living room, and a kitchenette — a truly unique Amsterdam houseboat experience.",
    image: {
      filename: "amsterdam_houseboat_studio",
      url: "https://a0.muscache.com/pictures/2cc5facd-a56e-429f-8cee-f930a5ea7621.jpg"
    },
    price: 21337,
    location: "Westerpark, Amsterdam",
    country: "Netherlands",
    category: "trending",
    geometry: { type: "Point", coordinates: [4.888, 52.3908] }
  },
  {
    title: "Ruime Comfortabele Studio aan Gracht, Rand Jordaan",
    description: "An 85 sqm bright and sunny studio in a quiet location at the heart of the city in the Jordaan. Just 15 minutes walk from Central Station, loaded with privacy and every comfort you could need.",
    image: {
      filename: "amsterdam_jordaan_studio",
      url: "https://a0.muscache.com/pictures/7832b40c-6d40-4606-9f13-c65300cf6b30.jpg"
    },
    price: 27216,
    location: "Centrum-West, Amsterdam",
    country: "Netherlands",
    category: "cities",
    geometry: { type: "Point", coordinates: [4.88487, 52.38351] }
  },
  {
    title: "M&M's Guest House (with Free Parking Space)",
    description: "A cozy private apartment in a former shipyard building in Amsterdam Noord — the up-and-coming creative northern part of the city. A perfect escape from the busy centre, with free parking included.",
    image: {
      filename: "amsterdam_noord_guesthouse",
      url: "https://a0.muscache.com/pictures/miso/Hosting-44269819/original/bf1c6b51-3d14-413c-81db-305dd9cd792e.jpeg"
    },
    price: 15362,
    location: "Oud-Noord, Amsterdam",
    country: "Netherlands",
    category: "rooms",
    geometry: { type: "Point", coordinates: [4.93578, 52.39078] }
  },

  {
    title: "Old World Converted Stables with Swimming Pool",
    description: "An elegant, old-world converted stables with a swimming pool set in a country-like atmosphere with birds and wildlife — yet close to the city. Guests rave about its charm and peaceful surroundings.",
    image: {
      filename: "dublin_converted_stables_pool",
      url: "https://a0.muscache.com/pictures/c0f316d1-c7f1-4058-8814-114c3c5c0bee.jpg"
    },
    price: 10855,
    location: "Dublin City, Dublin",
    country: "Ireland",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [-6.34889, 53.36949] }
  },
  {
    title: "Designer Apt in the Heart of Dublin",
    description: "Fantastic apartment in the heart of the city with stunning river views. Refurbished by award-winning A2 architects, this unique space offers modern, bright open-plan accommodation with amazing views of the Ha'penny Bridge.",
    image: {
      filename: "dublin_designer_apt_river_view",
      url: "https://a0.muscache.com/pictures/110793428/9771bf9b_original.jpg"
    },
    price: 17618,
    location: "Dublin City, Dublin",
    country: "Ireland",
    category: "trending",
    geometry: { type: "Point", coordinates: [-6.26393, 53.34752] }
  },
  {
    title: "Fairy House – A Little Bit of Country in the City",
    description: "A private room in a peaceful family home with a safe and secluded setting. Experience a tranquil countryside feel while still being within easy reach of Dublin city.",
    image: {
      filename: "dublin_fairy_house_country",
      url: "https://a0.muscache.com/pictures/47d3254f-01bb-4582-b63c-b789d99ab698.jpg"
    },
    price: 5427,
    location: "South Dublin, Lucan",
    country: "Ireland",
    category: "farm",
    geometry: { type: "Point", coordinates: [-6.44994, 53.35338] }
  },
  {
    title: "Extensively Modernised Georgian House near Everything",
    description: "Step through a beautifully restored 1870s Georgian Dublin exterior into a modern, light-filled interior with glazed double-height ceilings and a stunning private planted deck. A perfect blend of history and contemporary luxury.",
    image: {
      filename: "dublin_georgian_house_modern",
      url: "https://a0.muscache.com/pictures/7701dbcc-6c48-4382-8a9a-686f314f9708.jpg"
    },
    price: 30477,
    location: "Dún Laoghaire-Rathdown, Dublin",
    country: "Ireland",
    category: "castle",
    geometry: { type: "Point", coordinates: [-6.24686, 53.29448] }
  },
  {
    title: "Sunset Crag – Beautiful Apartment with Sea Views",
    description: "A beautiful apartment with panoramic views of the sea, harbour, and mountains. Features a shared decking area with outdoor table and seating — perfect for watching sunsets over the Irish coast.",
    image: {
      filename: "dublin_sunset_crag_sea_view",
      url: "https://a0.muscache.com/pictures/11722410/bdc6c452_original.jpg"
    },
    price: 13360,
    location: "Fingal, Dublin",
    country: "Ireland",
    category: "trending",
    geometry: { type: "Point", coordinates: [-6.12260, 53.58175] }
  },

  {
    title: "City Center Beautiful Loft with Terrace",
    description: "A beautiful attic in the heart of Bologna's historic centre, just minutes' walk from Piazza Maggiore. A place of great charm, intimate and cozy with two wonderful terraces overlooking the rooftops of the city.",
    image: {
      filename: "bologna_loft_terrace",
      url: "https://a0.muscache.com/pictures/2da4fcbc-fd23-400c-b70d-6e87ea6a1959.jpg"
    },
    price: 26552,
    location: "Porto - Saragozza, Bologna",
    country: "Italy",
    category: "cities",
    geometry: { type: "Point", coordinates: [11.34174, 44.49533] }
  },
  {
    title: "Medieval Tower with Modern Comforts: Timeless Charm",
    description: "A unique experience immersed in the history of Bologna. This medieval Tower of Carrari offers the charm of the ancient blended with all the comforts of a modern apartment — warmth, atmosphere, and a touch of Italian modernity.",
    image: {
      filename: "bologna_medieval_tower",
      url: "https://a0.muscache.com/pictures/miso/Hosting-53762537/original/fb663085-3bca-4ef8-a185-dabaf9850778.jpeg"
    },
    price: 32811,
    location: "Santo Stefano, Bologna",
    country: "Italy",
    category: "castle",
    geometry: { type: "Point", coordinates: [11.3448, 44.49199] }
  },
  {
    title: "Lovely Two-Room Flat with Terrace in the Centre",
    description: "Right in Bologna's historical city centre with views onto a sunny, quiet interior courtyard. Features a fully-equipped modern kitchen, cosy bedrooms, and plenty of books and tourist info — perfect for exploring the city.",
    image: {
      filename: "bologna_tworoom_terrace",
      url: "https://a0.muscache.com/pictures/miso/Hosting-46440652/original/84373e64-662c-4971-bea5-f8c6f5d5cc51.jpeg"
    },
    price: 20863,
    location: "Porto - Saragozza, Bologna",
    country: "Italy",
    category: "cities",
    geometry: { type: "Point", coordinates: [11.33605, 44.49793] }
  },
  {
    title: "Appartamento Alma",
    description: "Located in the Bolognina district, just a few dozen meters from the Ustica Memory Museum. A strategic location — 900 meters from the Fair and a 20-minute walk to the city centre, with a nearby bus stop for easy access.",
    image: {
      filename: "bologna_appartamento_alma",
      url: "https://a0.muscache.com/pictures/2c0ec463-4a7f-4d6f-864c-f2f9f0c45c43.jpg"
    },
    price: 5974,
    location: "Navile, Bologna",
    country: "Italy",
    category: "rooms",
    geometry: { type: "Point", coordinates: [11.35212, 44.51271] }
  },
  {
    title: "[Luxury] Affreschi Carracci • Piazza Maggiore",
    description: "A one-of-a-kind apartment in the historic heart of Bologna, just 200 meters from Piazza Maggiore, adorned with frescoes by the famous Carracci Brothers — celebrated Bolognese artists appreciated the world over. Elegance and history in perfect harmony.",
    image: {
      filename: "bologna_carracci_luxury",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMDU5NDk2Mjk2NzU4MTIwNw%3D%3D/original/cb84a0de-e67f-4025-a4f4-b2f9b86fd722.jpeg"
    },
    price: 57941,
    location: "Porto - Saragozza, Bologna",
    country: "Italy",
    category: "castle",
    geometry: { type: "Point", coordinates: [11.33999, 44.49444] }
  },

  {
    title: "Sunny Attic Floor in Family Home",
    description: "A characterful accommodation with a double bedroom, an additional single room, and a cozy book-lined sitting room with TV, WiFi and a kettle. Surrounded by neighbourhood cafes with a launderette nearby — a warm and homely Edinburgh retreat.",
    image: {
      filename: "edinburgh_sunny_attic",
      url: "https://a0.muscache.com/pictures/de4e6738-fca4-4f6a-9319-15a9d2d54825.jpg"
    },
    price: 7586,
    location: "Blackford, West Mains & Mayfield Road, Edinburgh",
    country: "United Kingdom",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-3.16911, 55.93013] }
  },
  {
    title: "Vida City Pad Edinburgh – Breakfast & Guest Parking",
    description: "A luxury, stylish apartment sitting on the Water of Leith, perfect for couples and individuals visiting historic Edinburgh. Great walks to The Shore with its eclectic bars, restaurants and the Royal Yacht Britannia — all from your doorstep.",
    image: {
      filename: "edinburgh_vida_city_pad",
      url: "https://a0.muscache.com/im/pictures/7bbe1db8-7a5b-49b3-ac0f-ccad16168c77.jpg"
    },
    price: 10621,
    location: "Bonnington, Edinburgh",
    country: "United Kingdom",
    category: "trending",
    geometry: { type: "Point", coordinates: [-3.18622, 55.97158] }
  },
  {
    title: "West End Gem",
    description: "A flat on a quiet and pretty street in Edinburgh's fashionable West End. Local shops, gastro bars and restaurants are all close at hand, within easy walking distance of the city's sights and both Haymarket and Waverley Stations.",
    image: {
      filename: "edinburgh_west_end_gem",
      url: "https://a0.muscache.com/pictures/954c4301-c19b-40d8-bce9-023fa139a0d9.jpg"
    },
    price: 11949,
    location: "Deans Village, Edinburgh",
    country: "United Kingdom",
    category: "cities",
    geometry: { type: "Point", coordinates: [-3.2151, 55.94981] }
  },
  {
    title: "Comfortable Double Room, Murrayfield, Edinburgh",
    description: "Located in a quiet cul-de-sac close to the city centre, just 5 minutes' walk from Murrayfield Stadium — ideal for rugby fans and concert-goers. Features a king size bed and a bathroom with a waterfall shower.",
    image: {
      filename: "edinburgh_murrayfield_room",
      url: "https://a0.muscache.com/pictures/872aeefb-db59-47f4-9f41-3755cd598fa7.jpg"
    },
    price: 5595,
    location: "Balgreen and Roseburn, Edinburgh",
    country: "United Kingdom",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-3.2498, 55.94304] }
  },
  {
    title: "Charming, Quiet, Central Apartment with Gardens",
    description: "An attractive traditional ground-floor apartment with lovely front and rear gardens on a wide, tree-lined street by a large park. Bright, spacious and nicely furnished, within walking distance to Edinburgh's historic centre.",
    image: {
      filename: "edinburgh_central_garden_apt",
      url: "https://a0.muscache.com/pictures/4137ab58-6f0b-4f07-b49b-049b96c5aa53.jpg"
    },
    price: 18492,
    location: "Marchmont East and Sciennes, Edinburgh",
    country: "United Kingdom",
    category: "cities",
    geometry: { type: "Point", coordinates: [-3.18439, 55.93894] }
  },

  {
    title: "FORT What It's WORTH Studio Apartment",
    description: "Located in the historic Fairmount neighborhood, just a 10-minute walk from Magnolia. A modern, newly built above-garage studio with vaulted ceilings, full kitchen, dining area, patio, entertainment center, queen size bed, and a walk-in shower.",
    image: {
      filename: "fortworth_fairmount_studio",
      url: "https://a0.muscache.com/pictures/821941a1-10db-4f47-82f1-0fee88bc478b.jpg"
    },
    price: 7871,
    location: "Fairmount, Fort Worth",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-97.33468, 32.72239] }
  },
  {
    title: "4th Street Home",
    description: "A newly remodeled home with a modern Texas touch, featuring large windows with plenty of natural light. Just 1 mile from the New Dickies Arena, 0.4 miles to UNTHSC and Museums, and walking distance to restaurants, nightlife and shopping.",
    image: {
      filename: "fortworth_4th_street_home",
      url: "https://a0.muscache.com/pictures/pro_photo_tool/Hosting-37687091-unapproved/original/06d63591-3105-4b22-84ed-9af37129e5c9.JPEG"
    },
    price: 14604,
    location: "Fort Worth, Texas",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-97.36945, 32.75339] }
  },
  {
    title: "The FROG (Finished Room Over Garage) – TCU Area!",
    description: "A spacious 1-bedroom apartment within walking distance of the TCU campus, located right next to the west side of Amon G. Carter Stadium. Perfect for game days, sports events, and exploring the best of Fort Worth.",
    image: {
      filename: "fortworth_frog_tcu",
      url: "https://a0.muscache.com/pictures/airflow/Hosting-11741547/original/649e23bf-c353-4c14-b7e5-c70198f168f3.jpg"
    },
    price: 12328,
    location: "TCU Area, Fort Worth",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-97.37093, 32.7059] }
  },
  {
    title: "Casa Amigos | 3BD Cozy Rustic Modern Home",
    description: "A cozy rustic-modern getaway just 20 minutes from Downtown Fort Worth. This 3BR/2BA home features an open-concept layout, fully equipped kitchen, covered patio, fire pit for s'mores, and a peaceful fenced-in garden.",
    image: {
      filename: "fortworth_casa_amigos",
      url: "https://a0.muscache.com/pictures/86773324-1e31-47e3-9d43-d5a1d0f9f501.jpg"
    },
    price: 12992,
    location: "District 4, Fort Worth",
    country: "United States",
    category: "farm",
    geometry: { type: "Point", coordinates: [-97.28589, 32.87872] }
  },
  {
    title: "Comfy Cottage – Great Location, Short and Long Stays",
    description: "A sweet 1939 cottage offering comfortable spaces and full amenities for work or pleasure. Peaceful and centrally located, just minutes from Dickies Arena, Fort Worth Convention Center, and the famous Stockyards.",
    image: {
      filename: "fortworth_comfy_cottage",
      url: "https://a0.muscache.com/pictures/miso/Hosting-50549612/original/6e7f6ab7-10bd-455b-92e6-7a3f3320bd76.jpeg"
    },
    price: 13086,
    location: "Fort Worth, Texas",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-97.30976, 32.77375] }
  },

  {
    title: "Brighton – Queen Bed, Private Bath, Free Parking",
    description: "A spacious private room with a queen bed, private bath and shower in a newly built house in Brighton. Includes a fridge, large office desk, walk-in closet, central AC and free parking — just a short walk to restaurants, bars and the T.",
    image: {
      filename: "boston_brighton_private_room",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk5NDUzMjg%3D/original/240d01d0-e629-46cd-a744-20831978afa3.jpeg"
    },
    price: 11095,
    location: "Brighton, Boston",
    country: "United States",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-71.1602, 42.34629] }
  },
  {
    title: "Extraordinary 1-Bedroom Apartment in South Boston!",
    description: "A cozy, comfortable and centrally located one-bedroom unit in Southie, steps from Carson Beach, BCEC, and Sail Boston. Private entrance, unbeatable location, and endless possibilities for the perfect Boston getaway.",
    image: {
      filename: "boston_southie_1br_apt",
      url: "https://a0.muscache.com/pictures/1de84e54-875e-491b-93e7-50a2f3f45f0b.jpg"
    },
    price: 19535,
    location: "South Boston, Boston",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-71.0371873, 42.3308789] }
  },
  {
    title: "Top of the Hill Townhouse",
    description: "A fully renovated 3-bedroom, 2.5-bathroom townhouse with two en-suite bedrooms, private entry, open living area for entertaining and a small deck overlooking a fenced-in backyard — a true home-away-from-home in West Roxbury.",
    image: {
      filename: "boston_west_roxbury_townhouse",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjUxMzIxNTM2MTYxMzgzMzI1/original/bcf88b0a-0758-4909-af67-39772246ceb0.jpeg"
    },
    price: 28449,
    location: "West Roxbury, Boston",
    country: "United States",
    category: "cities",
    geometry: { type: "Point", coordinates: [-71.17007, 42.27376] }
  },
  {
    title: "Travelers Choice –Best of Boston: Green Turtle II Yacht",
    description: "Stay aboard the Green Turtle II, a 45-foot yacht in the historic Navy Yard in Boston Harbor. Like taking two vacations in one — explore the city by day and unwind on the water by night. A truly unforgettable Boston experience.",
    image: {
      filename: "boston_green_turtle_yacht",
      url: "https://a0.muscache.com/pictures/4c5807da-daa3-4738-9838-e2c645021652.jpg"
    },
    price: 42484,
    location: "Charlestown, Boston",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-71.05034, 42.37603] }
  },
  {
    title: "Beacon Hill Townhouse – 4 Bedroom Gem",
    description: "An antique-filled 2,800 sq ft Beacon Hill townhouse from 1850 — gracious yet functional. Features a well-equipped kitchen, outdoor patio with gas grill, 2 gas fireplaces, Sonos sound system, and views over a beautiful city park. Walk to everywhere in central Boston.",
    image: {
      filename: "boston_beacon_hill_townhouse",
      url: "https://a0.muscache.com/pictures/7189dc88-8e20-4fda-94bf-d36e5d1595bf.jpg"
    },
    price: 94830,
    location: "Beacon Hill, Boston",
    country: "United States",
    category: "castle",
    geometry: { type: "Point", coordinates: [-71.063461, 42.359943] }
  },

  {
    title: "Günstiges Privatzimmer",
    description: "A centrally located private room with easy access to public transport and a private balcony. Features a comfortable electronically adjustable air bed — great value for exploring everything Munich has to offer.",
    image: {
      filename: "munich_private_room_schwabing",
      url: "https://a0.muscache.com/pictures/miso/Hosting-40421213/original/f4195dcb-e299-47ec-88fd-aa92077457b3.jpeg"
    },
    price: 6164,
    location: "Schwabing-West, Munich",
    country: "Germany",
    category: "rooms",
    geometry: { type: "Point", coordinates: [11.56652, 48.1676] }
  },
  {
    title: "Wohnung (Küche & Bad) Messenähe",
    description: "A self-contained 1-bedroom apartment in the green Trudering district in east Munich. Nearby is the Buga Park and Riem Exhibition Center, with public transport connections for easy access to the city.",
    image: {
      filename: "munich_trudering_apartment",
      url: "https://a0.muscache.com/pictures/miso/Hosting-958425580323245496/original/a2b458b1-3e56-44a6-bb07-2be0c88fe474.jpeg"
    },
    price: 13655,
    location: "Tudering-Riem, Munich",
    country: "Germany",
    category: "cities",
    geometry: { type: "Point", coordinates: [11.68144, 48.11790] }
  },
  {
    title: "Bright Loft in a Central Location",
    description: "A unique and beautifully located 2-bedroom loft in Munich — centrally situated yet quiet. Enjoy a homely family flair, lots of space, beautiful days on the balcony, and a fully equipped kitchen for a perfect temporary home.",
    image: {
      filename: "munich_bogenhausen_loft",
      url: "https://a0.muscache.com/pictures/f09007d3-f93e-49a2-8446-72de18b45055.jpg"
    },
    price: 22759,
    location: "Bogenhausen, Munich",
    country: "Germany",
    category: "trending",
    geometry: { type: "Point", coordinates: [11.60952, 48.14308] }
  },
  {
    title: "Penthouse with Kitchen, Roof Garden and Parking",
    description: "A beautifully furnished penthouse loft in Munich Moosach, between the Olympic Park and Olympic Shopping Center. Sleeps 6 guests with 2 king-size bedrooms, a full kitchen, rooftop garden and parking included.",
    image: {
      filename: "munich_moosach_penthouse",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-1285000118559019966/original/d30fc5ee-0dfa-41bd-a826-45ecde1310d5.jpeg"
    },
    price: 63442,
    location: "Moosach, Munich",
    country: "Germany",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [11.53181, 48.17860] }
  },
  {
    title: "Stylish Penthouse near Center",
    description: "A renovated 3-bedroom penthouse just 2 minutes from the S-Bahn and 13 minutes to the main train station. Features 3 balconies, a fireplace, 2 bathrooms, a kitchen island with induction hob, large smart TV, and 2 parking spaces — surrounded by greenery.",
    image: {
      filename: "munich_untermenzing_penthouse",
      url: "https://a0.muscache.com/pictures/710efa96-02a8-49a2-a580-9313eccb1ef1.jpg"
    },
    price: 81933,
    location: "Allach-Untermenzing, Munich",
    country: "Germany",
    category: "trending",
    geometry: { type: "Point", coordinates: [11.47218, 48.18137] }
  },

  {
    title: "Wentworth Condo",
    description: "A freshly decorated 2-bedroom condo with a king bed, full bed, dedicated workspace, washer & dryer and full kitchen. Downstairs you'll find 2 restaurants, a casino and a coffee shop — plus a rooftop patio just upstairs.",
    image: {
      filename: "bozeman_wentworth_condo",
      url: "https://a0.muscache.com/pictures/miso/Hosting-994328687289367772/original/c0a339c5-b6f4-4604-bf54-4810ceef8ed2.jpeg"
    },
    price: 10811,
    location: "Bozeman, Montana",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-111.04418, 45.68638] }
  },
  {
    title: "Downtown Cowboy Condo on Main",
    description: "A beautifully appointed 2-bedroom condo on East Main Street, within walking distance of the Sweet Pea Festival, Music on Main, and the Christmas Stroll. Surrounded by Bozeman's finest coffee shops, restaurants and art galleries.",
    image: {
      filename: "bozeman_cowboy_condo",
      url: "https://a0.muscache.com/pictures/miso/Hosting-53493470/original/59a76e5c-3504-4a0a-90a3-a2333f6d3460.jpeg"
    },
    price: 15931,
    location: "Bozeman, Montana",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-111.022896, 45.678993] }
  },
  {
    title: "Bozeman Bison Bunker – Near Montana State MSU",
    description: "A designer guest suite with mountain views, just 5 minutes from Montana State University. Features a 9-foot kitchen island, 65-inch Samsung smart TV — a stylish and modern home base for exploring all of Bozeman.",
    image: {
      filename: "bozeman_bison_bunker_suite",
      url: "https://a0.muscache.com/pictures/miso/Hosting-640809261320548067/original/86b80306-f123-422a-96d4-3cb1cbd10964.jpeg"
    },
    price: 20483,
    location: "Bozeman, Montana",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-111.07762, 45.65155] }
  },
  {
    title: "BozemanAir – Cottage Near Montana State University",
    description: "Modern meets rustic in this brand new 1-bedroom cottage with all the amenities for a comfortable Montana stay. Perfect for Cat Griz games, visiting MSU, or heading out to climb, ski or hike at Big Sky or Bridger Bowl.",
    image: {
      filename: "bozeman_air_cottage",
      url: "https://a0.muscache.com/pictures/miso/Hosting-39642791/original/f5596adf-8b85-4821-b7b9-337f5c7f3f53.jpeg"
    },
    price: 25035,
    location: "Bozeman, Montana",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-111.06422, 45.64474] }
  },
  {
    title: "Historic 4 Bdrm w/ Hot Tub – Between MSU & Main St.",
    description: "A beautiful, centrally-located 4-bedroom historic home in the heart of Cooper Park neighborhood. Just 1 block from the park, 6 blocks from MSU campus, and steps from Downtown Bozeman's shops, restaurants and the Main St. Co-op — complete with a private hot tub.",
    image: {
      filename: "bozeman_historic_4br_hottub",
      url: "https://a0.muscache.com/pictures/miso/Hosting-588475152538336095/original/f939b51c-5563-450f-b980-e523e1c0b69a.jpeg"
    },
    price: 53389,
    location: "Bozeman, Montana",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-111.04925, 45.67448] }
  },

  {
    title: "Private One Bedroom with a View",
    description: "A private room on a separate floor from the main living area, next to a conservation park with a big window and balcony facing the greenery. Includes air-conditioning, a small fridge and a microwave — a peaceful budget retreat in Brisbane.",
    image: {
      filename: "brisbane_chapel_hill_private_room",
      url: "https://a0.muscache.com/pictures/9acc458d-18ea-44b2-bc92-b4e31aac672f.jpg"
    },
    price: 3509,
    location: "Chapel Hill, Brisbane",
    country: "Australia",
    category: "rooms",
    geometry: { type: "Point", coordinates: [152.96036, -27.50345] }
  },
  {
    title: "'Nurture' by Olli & Flo – Dog Friendly B&B Studio",
    description: "An airconditioned B&B studio with breakfast provisions included, just minutes from the airport, 3 mins by train to the Entertainment Centre, and a 4-minute walk to a train station. Pet-friendly and perfectly located off the Gateway Motorway.",
    image: {
      filename: "brisbane_nurture_bb_studio",
      url: "https://a0.muscache.com/pictures/94eff20b-137e-4933-9e93-2b4f6e783e72.jpg"
    },
    price: 16026,
    location: "Nudgee - Banyo, Brisbane",
    country: "Australia",
    category: "farm",
    geometry: { type: "Point", coordinates: [153.08538, -27.36272] }
  },
  {
    title: "Haven Retreat – Cozy Bush Cabin",
    description: "An adults-only log cabin with a hot tub set on 16 acres of protected bushland, just 35 minutes from Brisbane CBD. Includes a complimentary bottle of bubbles, mountain views, and a romantic semi-rural atmosphere perfect for unwinding.",
    image: {
      filename: "brisbane_haven_bush_cabin",
      url: "https://a0.muscache.com/pictures/hosting/Hosting-1011626883414014708/original/1dec57ec-c2a9-448a-9c7b-01a6a3d4839e.jpeg"
    },
    price: 18966,
    location: "Pinjarra Hills - Pullenvale, Brisbane",
    country: "Australia",
    category: "camping",
    geometry: { type: "Point", coordinates: [152.85962, -27.49770] }
  },
  {
    title: "Zen Townhouse in the Heart of Bulimba",
    description: "A 3-bedroom townhouse less than 300 meters from Oxford Street's fantastic cafes and restaurants, with a short walk to the Bulimba ferry terminal for easy access across Brisbane. A serene and well-connected base to explore the city.",
    image: {
      filename: "brisbane_bulimba_zen_townhouse",
      url: "https://a0.muscache.com/pictures/airflow/Hosting-41300424/original/e728df3d-b08e-464b-bdc3-8692e4db252c.jpg"
    },
    price: 25604,
    location: "Bulimba, Brisbane",
    country: "Australia",
    category: "cities",
    geometry: { type: "Point", coordinates: [153.05838, -27.44862] }
  },
  {
    title: "Riverview 29th Floor Apt. with King Bed & Parking",
    description: "A stunning high-rise 1-bedroom apartment on the 29th floor in the heart of cultural South Brisbane. Just steps from the Brisbane Convention Centre, South Bank Parklands, QPAC and the Museum — with access to an award-winning recreational area including a pool.",
    image: {
      filename: "brisbane_southbank_riverview_apt",
      url: "https://a0.muscache.com/pictures/miso/Hosting-1145331286158231115/original/b189fe0a-394d-4b53-9c21-4bd028c3ef5c.jpeg"
    },
    price: 23043,
    location: "South Brisbane, Brisbane",
    country: "Australia",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [153.015949, -27.47443] }
  },

  {
    title: "Para River Cottage",
    description: "Built in 1920 and overlooking the gum-studded cliff face of the North Para River, this quaint and cosy 2-bedroom cottage has been elegantly restored. Embrace the quiet rural feel of native birdsong and scattered sheep — all whilst being close to the heart of the Barossa.",
    image: {
      filename: "barossa_para_river_cottage",
      url: "https://a0.muscache.com/pictures/miso/Hosting-763963393371961799/original/2de43240-2fe6-4456-91ab-fde548b96767.jpeg"
    },
    price: 33380,
    location: "Tanunda, Barossa Valley",
    country: "Australia",
    category: "farm",
    geometry: { type: "Point", coordinates: [138.95353, -34.52160] }
  },
  {
    title: "Barossa Bed and Breakfast",
    description: "An advanced self-contained 3-bedroom private cottage with no hosts or other guests, located in the centre of the magnificent Barossa Valley. Complete privacy with all the comforts of home in one of Australia's most celebrated wine regions.",
    image: {
      filename: "barossa_bb_tanunda",
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-9714178/original/828a0290-62cd-4871-9429-b5a1e2f136d8.jpeg"
    },
    price: 56424,
    location: "Tanunda, Barossa Valley",
    country: "Australia",
    category: "farm",
    geometry: { type: "Point", coordinates: [138.96239, -34.52206] }
  },
  {
    title: "Seppeltsfield Vineyard Retreat – Barossa Getaway",
    description: "A 3-bedroom house set in the vineyards and gardens of Seize the Day wine estate, offering premium accommodation for up to 6 adults in modern country style. Walking distance to Hentley Farm and a stone's throw from Seppeltsfield Winery.",
    image: {
      filename: "barossa_seppeltsfield_vineyard",
      url: "https://a0.muscache.com/pictures/b3fe391b-56c0-4842-8782-e44c9691598b.jpg"
    },
    price: 55476,
    location: "Marananga, Barossa Valley",
    country: "Australia",
    category: "farm",
    geometry: { type: "Point", coordinates: [138.90777, -34.48787] }
  },
  {
    title: "1858 Barossa Accommodation – Entire Farmhouse",
    description: "A refurbished 4-bedroom 1850s historic farmhouse on acreage, nestled amongst a rural landscape with surrounding vineyards. A private and tranquil setting to escape, relax and unwind in true Barossa style.",
    image: {
      filename: "barossa_1858_farmhouse",
      url: "https://a0.muscache.com/pictures/miso/Hosting-53068838/original/2f46c6ad-5c39-407e-9b24-d7eab8795934.jpeg"
    },
    price: 63841,
    location: "Moculta, Barossa Valley",
    country: "Australia",
    category: "farm",
    geometry: { type: "Point", coordinates: [139.11025, -34.45917] }
  },
  {
    title: "Lyndoch Grand Villa in Barossa Village – Sleeps 14",
    description: "A c1855 heritage-listed 7-bedroom grand villa at the gateway to the Barossa Valley, perfectly suited for large groups. Fully self-contained with 5 living rooms and 3.5 bathrooms — exclusive use of the entire property in the heart of Lyndoch village.",
    image: {
      filename: "barossa_lyndoch_grand_villa",
      url: "https://a0.muscache.com/pictures/a16b6fdf-ea96-44a0-bb6f-86f50fa5c74f.jpg"
    },
    price: 76433,
    location: "Lyndoch, Barossa Valley",
    country: "Australia",
    category: "castle",
    geometry: { type: "Point", coordinates: [138.88778, -34.60082] }
  },

  {
    title: "Beachfront Villa with Private Pool",
    description: "A luxurious 3-bedroom villa sitting directly on the white sands of Seminyak Beach. Enjoy a private infinity pool, open-air living pavilion, and daily breakfast served by your dedicated butler. Perfect for families or groups seeking a premium Bali experience.",
    image: {
      filename: "bali_seminyak_beachfront_villa",
      url: "https://a0.muscache.com/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg"
    },
    price: 37260,
    location: "Seminyak, Bali",
    country: "Indonesia",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [115.1614, -8.6906] }
  },

  {
    title: "Cosy Studio in the Heart of Marais",
    description: "Charming studio apartment tucked in the historic Le Marais district of Paris. Exposed stone walls, original hardwood floors, and steps away from the best cafés, galleries, and the Seine. Ideal for a romantic city escape.",
    image: {
      filename: "paris_marais_studio",
      url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1019387048221258812/original/195d6399-81b1-4aa6-b227-fe1e013970bb.jpeg?im_w=720"
    },
    price: 10188,
    location: "Le Marais, Paris",
    country: "France",
    category: "cities",
    geometry: { type: "Point", coordinates: [2.3572, 48.8566] }
  },

  {
    title: "Desert Glamping Tent under the Stars",
    description: "A fully-equipped luxury safari tent in the Sonoran Desert. Wake up to panoramic mountain views, soak in your private outdoor tub, and fall asleep to total silence. Breakfast provisions and stargazing kit included.",
    image: {
      filename: "arizona_sonoran_glamping",
      url: "https://media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_62249_listing_image_0f-glamping-51c62924-24c3-4731-9794-bfba19d096f1/9b31cd26368b245065ccb4646d6edee1.jpg"
    },
    price: 16980,
    location: "Tucson, Arizona",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-110.9747, 32.2226] }
  },

  {
    title: "Traditional Riad with Rooftop Terrace",
    description: "An authentic restored riad within the ancient medina of Marrakech. Intricate tile work, a central courtyard fountain, and a rooftop terrace perfect for mint tea at sunset. All four rooms are individually decorated by local artisans.",
    image: {
      filename: "marrakech_medina_riad",
      url: "https://www.tripsavvy.com/thmb/2MAf6ItFBzFbNrsVFhPyyN1XypU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-924270410-0be7bc102353426288da4ce0ed3314a5.jpg"
    },
    price: 8490,
    location: "Medina, Marrakech",
    country: "Morocco",
    category: "castle",
    geometry: { type: "Point", coordinates: [-7.9897, 31.6343] }
  },

  {
    title: "Ski-in/Ski-out Chalet near Whistler Blackcomb",
    description: "A stunning timber-frame chalet with direct slope access at Whistler. Features a hot tub on the deck, a stone fireplace, a games room, and accommodation for up to 10 guests. Ski gear storage and boot dryers included — the ultimate winter retreat.",
    image: {
      filename: "whistler_skiinout_chalet",
      url: "https://www.luxurychaletbook.com/app/uploads/2023/03/chalet-solitude-51-exterior-day-60580.jpg"},
    price: 127350,
    location: "Whistler, British Columbia",
    country: "Canada",
    category: "arctic",
    geometry: { type: "Point", coordinates: [-122.9574, 50.1163] }
  },

  {
    title: "Paashaan Cliff Abode with Infinity Pool – Netflix Featured",
    description: "An unparalleled architectural marvel perched on a cliff in Khopoli, featured on Netflix's 'The World's Most Extraordinary Homes'. This horizontally designed cliff house overlooks serene landscapes and verdant Western Ghats hills. Features an open-to-sky courtyard, heated infinity pool, luxurious modern interiors, and spa-like bathrooms.",
    image: {
      filename: "khopoli_paashaan_cliff_villa",
      url: "https://img.vistarooms.com/gallery/1-room-at-paashaan-villa-a1338d.jpg"
    },
    price: 42450,
    location: "Khopoli, Maharashtra",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.3418, 18.7862] }
  },
  {
    title: "IKSHAA – Secluded Luxury Villa with Private Pool in South Goa",
    description: "A standalone luxury villa epitomising exclusivity and complete privacy in Loutolim, South Goa. Mediterranean-inspired architecture with a private pool, lush tropical garden, traditional Goan roof tiles, and stone flooring. Just 20 minutes from Goa airport and nearest south Goa beaches. Perfect for couples and families seeking total seclusion.",
    image: {
      filename: "south_goa_ikshaa_luxury_villa",
      url: "https://a0.muscache.com/im/pictures/6c4f0013-6650-4184-9b6d-083cc254d45f.jpg"
    },
    price: 25470,
    location: "Loutolim, South Goa",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.9862, 15.3490] }
  },
  {
    title: "Heritage Hauz Khas Apartment with Fort View",
    description: "A beautifully designed 480 sq ft apartment in Delhi's iconic Hauz Khas Village, blending history with contemporary vibrancy. White walls with warm wooden accents, a full modern kitchen, spacious balcony, and stunning views of the ancient Hauz Khas Complex and deer park. Steps away from Delhi's best cafés, galleries and boutiques.",
    image: {
      filename: "delhi_hauz_khas_heritage_apt",
      url: "https://curlytales.com/wp-content/uploads/2022/01/a6d23076-bc68-4025-b8c9-d8414a1083ae-1.jpg"
    },
    price: 8490,
    location: "Hauz Khas, New Delhi",
    country: "India",
    category: "castle",
    geometry: { type: "Point", coordinates: [77.2090, 28.5494] }
  },
  {
    title: "Kathkuni Wooden Villa with Himalayan Views in Naggar",
    description: "A stunning wooden villa built in traditional Kathkuni architecture perched on a hilltop in Naggar, Himachal Pradesh. Elegantly carved wooden pillars and frescos blend seamlessly with 270° panoramic views of the Dhauladhar mountain range. Apple orchards surround the property with trails leading from the doorstep. Sleeps 4 guests across 2 bedrooms.",
    image: {
      filename: "naggar_himachal_kathkuni_villa",
      url: "https://assets.cntraveller.in/photos/69a93f85fc2c221504dcd53c/master/w_960,c_limit/Screenshot%202026-03-05%20at%202.00.18%E2%80%AFPM.png"
    },
    price: 16980,
    location: "Naggar, Himachal Pradesh",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.1650, 32.0998] }
  },
  {
    title: "Vintage Kashmir Haveli with Pool and Carved Pillars",
    description: "A rare traditional haveli-style home in Srinagar built with old bricks, aged wood, and exquisitely carved pillars. One of the few properties in the valley with a private swimming pool. Features exposed brick arches, meticulously decorated rooms, firepits, and warm ambient lighting. Accommodates up to 6 guests across 3 bedrooms. A true slice of vintage Kashmir.",
    image: {
      filename: "srinagar_kashmir_haveli_pool",
      url: "https://villagesquare.in/wp-content/uploads/2023/09/02-Image-5.jpg"
    },
    price: 21225,
    location: "Rangreth, Srinagar, Kashmir",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [74.7333, 34.0837] }
  },
  {
    title: "Birdsong Portuguese Heritage Villa with Pool – Moira, Goa",
    description: "A lovingly restored Portuguese heritage villa in the quiet village of Moira, between Mapusa and Aldona in North Goa. Six elegant suites, a large swimming pool, and a curated library make this a refined retreat away from the tourist bustle. Surrounded by birdsong, centuries-old cashew trees, and the unhurried charm of Goa's heritage countryside.",
    image: {
      filename: "goa_moira_birdsong_portuguese_villa",
      url: "https://www.luxuryvillasingoa.co.in/wp-content/uploads/2018/06/img11-1-1.jpg"
    },
    price: 33960,
    location: "Moira, North Goa",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.8371, 15.5657] }
  },
  {
    title: "Glamo Dome on Private Terrace – Apple Orchard Stay, Spiti",
    description: "A one-of-a-kind dome stay on a private terrace surrounded by apple orchards in remote Spiti Valley, Himachal Pradesh. Fall asleep under breathtaking Milky Way skies and wake to magical mountain sunrises. Features an open wooden hot tub and home-cooked meals. A forest with hidden trails lies nearby, and the entire valley turns magical under a blanket of snow in winter.",
    image: {
      filename: "spiti_glamo_dome_apple_orchard",
      url: "https://images.trvl-media.com/lodging/120000000/119050000/119045100/119045087/a7da11c9.jpg?impolicy=resizecrop&rw=1200&ra=fit"
    },
    price: 12735,
    location: "Spiti Valley, Himachal Pradesh",
    country: "India",
    category: "arctic",
    geometry: { type: "Point", coordinates: [78.0322, 32.2464] }
  },
  {
    title: "Eldora Lakeside Villa near Morbe Dam – Karjat",
    description: "A serene 5-bedroom pet-friendly villa tucked beside Morbe Dam in Karjat, Maharashtra. Wake up to peaceful lake views, bright airy rooms in minimalist design, and the sounds of nature. Features a private pool, spacious lawn, and contemporary interiors. Perfect for large families or groups seeking an escape from Mumbai, just 2 hours away.",
    image: {
      filename: "karjat_eldora_lakeside_villa",
      url: "https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1440"
    },
    price: 29715,
    location: "Karjat, Maharashtra",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.3201, 18.9093] }
  },
  {
    title: "FARMCabin – Eco Cabin in a Coffee Plantation, Wayanad",
    description: "A charming eco-cabin tucked inside a lush coffee plantation in Wayanad, Kerala. Wake up to tea garden views on one side and a seasonal waterfall stream on the other. Built with sustainable materials and surrounded by spices, tropical trees, and wildflowers. Just 5 km from Meppadi town — ideal for couples and solo travellers seeking nature immersion.",
    image: {
      filename: "wayanad_farmcabin_coffee_plantation",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/04/0a/87/twin-cottage.jpg?w=1400&h=800&s=1"
    },
    price: 6792,
    location: "Meppadi, Wayanad, Kerala",
    country: "India",
    category: "farm",
    geometry: { type: "Point", coordinates: [76.1320, 11.5854] }
  },
  {
    title: "Quaint Chalet with Valley Views – Kodaikanal",
    description: "A beautifully designed chalet in the misty hills of Kodaikanal, Tamil Nadu, blending rugged country charm with modern comforts. Breathtaking views of the valley, fine personalised service, and tailor-made packages for romantic getaways, wellness retreats, and adventure holidays. Features a cosy fireplace, wrap-around veranda, and curated experiences in one of South India's finest hill stations.",
    image: {
      filename: "kodaikanal_quaint_chalet_valley",
      url: "https://r1imghtlak.ibcdn.com/c56b6010-384d-499c-b77d-c7497788ad28.jpg"
    },
    price: 10188,
    location: "Kodaikanal, Tamil Nadu",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.4892, 10.2381] }
  },
  {
    title: "Kailash Himalayan Village Retreat – Stone Cottage with Mountain Views",
    description: "A rustic yet soulful stone cottage nestled in the remote Himalayan village of Kailash near Pithoragarh, Uttarakhand — the sacred gateway to Mount Kailash. Surrounded by ancient deodar forests, glacial streams, and towering snow-capped peaks. The cottage features thick stone walls, hand-woven woollen blankets, a traditional chulha kitchen, and a fire-warmed common room. Wake up to uninterrupted views of the Himalayan range and spend your days on pilgrimage trails, birding walks, and stargazing sessions with zero light pollution. A deeply meditative escape at 7,200 ft altitude.",
    image: {
      filename: "pithoragarh_kailash_himalayan_village_cottage",
      url: "https://lh3.googleusercontent.com/p/AF1QipNPsp4FNT6j6ctDr98gxY52Gc1dfgZHUgRqXwWj=s1360-w1360-h1020"
    },
    price: 9339,
    location: "Kailash Village, Pithoragarh, Uttarakhand",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [80.2150, 29.5830] }
  },

  // new data 
   {
    title: "The Nest Luxury Stay- bath on deck, luxury",
    description: "Luxury adults only accommodation- Disability suitable, easy access Reconnect and spoil your loved one with a romantic getaway or even a girls weekend! Luxury self contained pod accommodation, with King bed, luxury linens, coffee pod machine and private bath tub on the deck Breakfast included with a ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1237291887789863849/original/0d2bfa27-7fa4-41cc-b07d-72a55fc44591.jpeg" },
    price: 39312,
    location: "Greater Geelong, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.59622, -38.25644] },
    category: "trending"
  },
  {
    title: "A nostalgic outpost at the foot of the Grampians",
    description: "A nostalgic outpost at the southern gateway to Victoria's glorious Grampians mountain wilderness, Salt Creek Cottage is nestled in the heart of the historic township of Dunkeld, a gentle walk from the main street, shops, cafe's and the iconic Royal Mail Hotel. Our charismatic colonial-style cottage ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/d7bd7ab2-6acf-4191-9db2-b406860bf193.jpg" },
    price: 24192,
    location: "Southern Grampians, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [142.345, -37.64588] },
    category: "mountains"
  },
  {
    title: "Cozy Otways Homestead - Entire property!",
    description: "Escape to Nature – A Peaceful Haven for Families & Friends! Nestled in Otway National Park, this private escape is ideal for families or groups, featuring three cabins for the perfect mix of togetherness & privacy. 5 Bedrooms | 3 Bathrooms Main Cabin: 3 beds, full kitchen, dining, & large verandah. ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1375808841922402123/original/6c826eae-ee23-4bcd-ae36-f560e3e1b5f0.jpeg" },
    price: 75180,
    location: "Colac Otway, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [143.5666577103143, -38.63255610453575] },
    category: "arctic"
  },
  {
    title: "Historic Soho Estate, Resort Facilities- Bellarine",
    description: "Soho Estate is a unique opportunity to experience a slice of Bellarine \"manor house\" history, as one of Victoria's oldest station properties. This magnificent country estate with spectacular resort facilities, panoramic views, historic gardens, ornamental lakes, tennis court & pool, offers a warm, &",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-895252114733921256/original/72da956a-0dcc-45ac-b3cd-a29723e3f712.jpeg" },
    price: 30240,
    location: "Greater Geelong, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.61995, -38.17983] },
    category: "castle"
  },
  {
    title: "Sunny Days, Bay Views & Splash in Your Heated Pool",
    description: "Wake up to sparkling Corio Bay views and golden summer sunshine at Little Sandpiper House—a bright, stylish coastal retreat steps from Curlewis Beach and surrounded by award-winning wineries. Dive into your private, fully fenced heated pool nestled within lush, landscaped gardens, enjoy multiple ind",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4Mjc3MDQ2NDQ4OTQwNzk3NA%3D%3D/original/a1c68542-5593-4288-9580-5bc03578d550.jpeg" },
    price: 30072,
    location: "Greater Geelong, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.54844, -38.15881] },
    category: "amazing pools"
  },
  {
    title: "Glamping in the Grove",
    description: "Glamping in the Yard is fully furnished with linen and towels provided, raised bed with innerspring mattress and pillow topper for comfort, 240vlt power provided in tent and a Engel 38L fridge/freezer, styled lighting for ambiance a comfortable chair to relax or read in, a powerful fan for those hot",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/6bdb881f-5a20-4ed7-9a38-d660b14a5ed6.jpg" },
    price: 10248,
    location: "Greater Geelong, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.52822, -38.2579] },
    category: "camping"
  },
  {
    title: "'Esk Farm’ - rural setting close to the coast",
    description: "The divine newly renovated Esk Farm Cottage in Freshwater Creek on the Surf Coast, Victoria. The ideal rural location yet just minutes off Anglesea Road (Freshwater Creek Cakes!!!) or close to Mt Duneed Estate, the Great Ocean Road, the beaches of Torquay, Anglesea, Barwon Heads and Geelong. A quain",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTY5MDk2MzI4NzQ4ODI2MTU5/original/827cde81-1ad8-41ba-ac74-9044f3aba4b6.jpeg" },
    price: 20580,
    location: "Surf Coast, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.26122, -38.24916] },
    category: "farm"
  },
  {
    title: "Single Private Room in Sow and Piglets Guesthouse",
    description: "Sow and Piglets Guesthouse, formerly known as Port Campbell Hostel, is not just a perfect stopover when you travelling along the Great Ocean road, its a destination in its own right. We are a guesthouse, we are a brewpub, we are a microbrewery, all under one roof. Check in, buy yourself a schooner o",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-50232946/original/a1f4520b-793c-4c59-aec1-c82efe7d5894.jpeg" },
    price: 8736,
    location: "Corangamite, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [142.99458, -38.61949] },
    category: "rooms"
  },
  {
    title: "Pier View Apartment (Geelong City)",
    description: "My apartment in the Pier Point building is centrally located in Geelong city. The apartment is next door to Deakin University Geelong City campus, close to Costa Hall where a lot of Geelong's premier shows are held. It is also walking distance to many Geelong attractions including Eastern Beach, Kar",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1318676122440712323/original/1d7ed4fd-6f7e-4669-baff-ec307ce60a81.jpeg" },
    price: 18396,
    location: "Greater Geelong, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.36202, -38.14446] },
    category: "cities"
  },
  {
    title: "Torquay central; spectacular views",
    description: "STUNNING SEA VIEWS In CENTRAL TORQUAY. Surfcoast beach retreat. Walk to cafes, bars, restaurants, shops surf beaches & huge children’s playground. Salty Dog cafe & beach bar only 5 min away. Private, 2-bedrooms, equipped kitchenette, no stairs, washing machine & dryer. Cool in summer. You'll think i",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-16278667/original/804eb207-23ce-40c1-9afd-4b3c395a39a8.jpeg" },
    price: 12096,
    location: "Surf Coast, Victoria",
    country: "Australia",
    geometry: { type: "Point", coordinates: [144.32805, -38.32417] },
    category: "beachfront"
  },
  {
  title: "Studio near center with rooftop terrace | REMS",
    description: " Please note: the private rooftop terrace is located on the building's rooftop and accessed via an external staircase. ☀️ Your urban escape with a rooftop twist! This stylish studio is perfect for couples, solo travelers, or friends. Just a short walk from Málaga’s historic center, it offers easy ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/miso/Hosting-1026821138574481857/original/12d2fa93-8e29-48f0-8db8-dc03dcbd833f.jpeg" },
    price: 8568,
    location: "Centro",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.4237944, 36.7289843] },
    category: "trending"
  },
  {
    title: "La Mihilla",
    description: "In Malaga, the holiday apartment La Mihilla offers an excellent view of the mountain. The 32 m² property consists of a living room, a well-equipped kitchen, 1 bedroom and 1 bathroom and can therefore accommodate 2 people. Additional amenities include Wi-Fi, a TV, air conditioning as well as beach/po",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-1447204313007729957/original/3890890e-d9f2-4728-94b3-c205649c434f.jpeg" },
    price: 756000,
    location: "Campanillas",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.56486, 36.73871] },
    category: "mountains"
  },
  {
    title: "Malaga Cozy House - Nature",
    description: "Málaga Cozy House - Nature, located in Malaga capital. It offers a comfortable and cozy stay. It has 3 bedrooms, 2 bathrooms, 2 fully equipped kitchens, a fireplace, a community pool, and a terrace with ocean views. Its location is ideal to enjoy the beach, just 600 m from Baños del Carmen, 1 km fro",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1344839666800602598/original/dda8896f-c63a-40fc-bd48-7c165fbd9308.jpeg" },
    price: 27468,
    location: "Este",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.381476440853431, 36.724530461266085] },
    category: "arctic"
  },
  {
    title: "El Marques - Calle Cister - Historic Center",
    description: "El Marques amazing and beautifully designed 2 bedroom apartment right in the Historic Center Malaga. 50 meters from the Cathedral Picasso museum pimpi restauran, el marques apart/ is finished to very high standards, probably one of the most stunning luxury apto around. perfect location in the pedest",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/18b6ca36-2932-444f-887e-69e2e7eeb903.jpg" },
    price: 26376,
    location: "Centro",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.41882, 36.71977] },
    category: "castle"
  },
  {
    title: "5 bd+5 bth+heated pool+sea view+hot tub+Privacy",
    description: "Villa Buenavista Malaga is perfect for the family holidays and romantic getaways for couples! Surrounded by a big garden with AMAZING PANORAMIC VIEW of the sea, mountains, and Malaga city, located in a picturesque countryside neighborhood. Easy to reach the nearby Playamar beach, restaurants, attrac",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNTQ1NzU%3D/original/fffc27fd-874b-49c1-b5b3-8e05f8f6511a.jpeg" },
    price: 34860,
    location: "Churriana",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.50839, 36.65349] },
    category: "amazing pools"
  },
  {
    title: "Malaga City Caravan Touring and Tent Pitches",
    description: "Peaceful, secure touring pitches/caravan parking and tent pitches at Castillo AlMálaga just 3.5 km's to the city centre and beaches. Scenic views across the city to the sea; dogs and kids welcome. Pitches are nicely sized and family friendly, with plenty of space for awnings, bikes and any other bit",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1140387759365741854/original/b1ac5430-2d99-4991-b70d-37df918e5a4a.jpeg" },
    price: 2268,
    location: "Este",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.4074, 36.7463] },
    category: "camping"
  },
  {
    title: "Los Corrales",
    description: "This rural complex stands on an old winery completely renovated. Its stone and mud walls, and its wooden ceilings give it a rustic and cozy atmosphere. The four accommodations that make up the El Mirador Rural Complex are completely independent and all of them have outdoor areas and private barbecue",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-22659291/original/27bda95a-ab4d-4195-a561-ea9dae7133b1.jpeg" },
    price: 15288,
    location: "Palma-Palmilla",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.44553, 36.80877] },
    category: "farm"
  },
  {
    title: "PRIVATE ROOM IN HOSTEL - HISTORIC CENTER - ROOM #6",
    description: "Private room in a hostel the historic center of Malaga next to a traditional Andalusian patio from the 18th century. The area is one of the most beautiful in the entire city. The Alcazaba ( the Roman Theater) is just 5 minutes away. Enjoy the theaters, museums, typical markets and excellent gastrono",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/8295d2d6-74fc-487b-8cdf-ea7311846b4b.jpg" },
    price: 3780,
    location: "Centro",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.41934, 36.7241] },
    category: "rooms"
  },
  {
    title: "Urban Penthouse Terrace by Living4malaga",
    description: "Spacious apartment for 6 people located in the historic centre of Malaga. The location of the apartment allows you to enjoy the main points of interest of the city. The apartment has two bedrooms with a double bed, one bedroom with a single bed, a living room with a sofa bed, two bathrooms with show",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-955022900703654879/original/5a167a70-f15d-4814-aec0-6767c839b359.jpeg" },
    price: 15708,
    location: "Centro",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.42539, 36.7189] },
    category: "cities"
  },
  {
    title: "La Malagueta Sea Views",
    description: "This stunning apartment overlooks La Malagueta beach. This allows you to enjoy wonderful and uninterrupted sea views and direct access to the beach. The beach is bordered by a beautiful promenade that invites you to become active – it has several playgrounds and fitness and cycle trails. Perfect for",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/e4123963-2a53-4e24-851c-6ba7efffc21b.jpg" },
    price: 33600,
    location: "Centro",
    country: "Spain",
    geometry: { type: "Point", coordinates: [-4.411412, 36.716976] },
    category: "beachfront"
  },
{
    title: "Deluxe Estate - Two in One Downtown Québec City",
    description: "Deluxe Estate represents two of the nicest condos you can find in Quebec city. This venue is perfectly located on St-Joseph street, making it the perfect spot for a gathering with familly and friends. The two units are seperated one on top of the other and accessible individualy. This makes it the b",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-562184601712209635/original/3fd35633-1571-4914-9c2e-0e3a4d5b6709.png" },
    price: 82992,
    location: "Saint-Roch",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.22051239013672, 46.81560897827149] },
    category: "trending"
  },
  {
    title: "superbe 4 1/2 haut de maison.  prêt de tout.",
    description: "Located in a beautiful duplex in Charlesbourg! Close to all services, in a new and warm area! You will find parks and games, hiking trails and 15 minutes from 2 ski resorts Mountain bike and snowmobile trail about 100 m away, Quebec City center is a 15-minute drive away as well as shops or shopping ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/db402908-80b2-4acc-8f9e-a5773e8f2c10.jpg" },
    price: 10836,
    location: "Quartier 4-3",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.2578023225069, 46.88997380496641] },
    category: "mountains"
  },
  {
    title: "Condo with view , parking & fireplace",
    description: "Enjoy this contemporary and warm condo, located near everything. Located on the top floor, you will appreciate the exceptional view of Quebec City from every room in the condo. In the winter, you will appreciate having an aperitif in front of a fireplace after walking in the snow to discover the enc",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-52731589/original/25ae2037-48f7-4924-8c7b-37f4842a602e.jpeg" },
    price: 21588,
    location: "Saint-Roch",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.221916, 46.815403] },
    category: "arctic"
  },
  {
    title: "Old Quebec Historic heritage home of 2700 sq ft",
    description: "Historic heritage residence of 2700 square feet in the Old-Port of Quebec City. Built in 1827 and was once owned by a prime minister of Quebec, the property has retained most of its original features with exposed beams on the ceiling and stone walls. With a fully-equipped kitchen, newly furnished, f",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-40734167/original/3423b5dc-6fb7-40a0-a384-8dc914cf8acc.jpeg" },
    price: 83160,
    location: "Vieux-Québec/Cap-Blanc/Colline parlementaire",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.21239, 46.81617] },
    category: "castle"
  },
  {
    title: "Cozy Retreat | Spacious Home with Hot Tub & Wine",
    description: " Cozy Home with Hot Tub – 10-15 min from Old Quebec Relax in this spacious and stylish home with a private year-round hot tub and a free bottle of wine at check-in. Perfect for families, groups & business travelers. ✔ 3 Bedrooms (Sleeps 9) – 1 King, 3 Queens, 1 Sofa Bed ✔ 2 Bathrooms, Full Kitchen,",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-5442064/original/8a670942-f1e1-47dd-ae48-9a6a3df32c1f.jpeg" },
    price: 24780,
    location: "Pointe-de-Sainte-Foy",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.32557, 46.76435] },
    category: "amazing pools"
  },
  {
    title: "Camping de ville sous les arbres",
    description: "End of season 2025, back in spring 2026. Experience camping nights in the middle of the city! Access to salt pool, bromine spa, campfire stove, 2 BBQs, swing on wheel, tanning area & more. If needed, it is possible to have access to the bathroom of the house. The tent is new and positioned under 2 l",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1184225468740177185/original/2536e362-ed5d-427e-88e0-a8e6c6f073ce.jpeg" },
    price: 5712,
    location: "Duberger-Les Saules",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.33659, 46.8032] },
    category: "camping"
  },
  {
    title: "Ruralité au Cœur de la Ville",
    description: "Discover the charm of Limoilou in a beautiful rustic home that captures the essence of Quebec City. Nestled just 3 minutes from dynamic 3rd Avenue, this property puts you in the heart of the action while offering you privacy and comfort. Less than 15 minutes from Old Quebec, Île d 'Orléans and the P",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1259743014413674605/original/7114f8fe-b2c4-4349-91d7-d4262a4bd2d1.jpeg" },
    price: 19656,
    location: "Vieux-Limoilou",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.23222733568076, 46.83229335873749] },
    category: "farm"
  },
  {
    title: "QBEDS Hostel - Amazing location! Private Queen",
    description: "THE BEST HOSTEL IN TOWN! QBEDS Hostel is ideally located on Grande-Allée street, which is undoubtedly the most popular street in Quebec City! You can find various bars, cafes and restaurants on Grande-Allee street, in the heart of downtown Quebec City. Its unique funky design and vibe will definitel",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/e91a037a-7c34-45bb-9420-a56497bcea19.jpg" },
    price: 8652,
    location: "Vieux-Québec/Cap-Blanc/Colline parlementaire",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.2153, 46.80526] },
    category: "rooms"
  },
  {
    title: "B04 | Beautiful studio | Downtown Quebec City",
    description: "Beautiful and spacious apartment ideally located in a mixed area of Quebec City, just steps away from the historic downtown area. The apartment is equipped to accommodate 2 people (one queen-size bed). WIFI, TV, Nespresso machine, dishwasher and microwave. Linens and towels will also be provided. Ar",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0MjAxMzgyNDkzMzM0NDM3OQ%3D%3D/original/cc9d0a29-493c-4a64-8528-5fd84b65218e.jpeg" },
    price: 20076,
    location: "Saint-Roch",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.2292585, 46.8111764] },
    category: "cities"
  },
  {
    title: "Marina Port de Québec 2 - Maison flottante",
    description: "STUDIO HÉBERGEMENTS FLOTTANTS offers you a unique experience of high-end urban accommodation in floating houses on the Port of Quebec Marina site. Anchored in the heart of the historic and tourist district of Quebec, in the Louise Basin, the Port of Quebec marina enjoys an ideal location. From the P",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-42623668/original/76da9126-3e05-4a42-a3d7-01d6bad46d9d.jpeg" },
    price: 36876,
    location: "Vieux-Québec/Cap-Blanc/Colline parlementaire",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-71.20458, 46.82111] },
    category: "beachfront"
  },
  {
    title: "Hilltop - Coastal Getaway near beaches and Newport",
    description: "Welcome to \"Hilltop\", our beautiful 3 room guest house is tastefully decorated with the seashore in mind. Hilltop is the perfect place for your short or extended stay on Aquidneck Island. Situated only a mile from the area's best beaches, and 2 miles to downtown Newport, Hilltop is close to everythi",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/e7f3f853-39e1-4898-9b8c-c265859d89a3.jpg" },
    price: 26124,
    location: "Middletown",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.27923, 41.50085] },
    category: "trending"
  },
  {
    title: "Crown Jewel Watch Hill Village",
    description: "Luxury 2 bedroom 2nd floor Apt. overlooking Watch Hill Harbor. Fully renovated 1500 sq ft. luxury living in the heart of Watch Hill. Brand new furnishings, hardwood floors & central air/heat. Master bedroom w/ king size bed & master bathroom w/ plenty of closet space. Balcony the full length of the ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-31331261/original/2dcc2f70-2855-4e70-8cc9-517ad9b9312a.jpeg" },
    price: 81900,
    location: "Westerly",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.85795, 41.3097] },
    category: "mountains"
  },
  {
    title: "Cozy Beach Cabin w/ Beach Access & Outdoor Showers",
    description: "Cozy beach-inspired log cabin in Bonnet Shores, 12 min walk to private beach. 4 bedrooms, 1.5 baths and 2 large outdoor showers make this the perfect place for your group. Great location in a desirable beach community, and just a 5 min drive to Narragansett Pier & Town Beach, 25 min drive to Newport",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/ab5424c7-5b2c-4507-8470-684706b4e752.jpg" },
    price: 33012,
    location: "Narragansett",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.43064, 41.48051] },
    category: "arctic"
  },
  {
    title: "The Emerson Room",
    description: "Rooms located in a restored Historic house listed on the 'National Register of Historic Places'... located in an quiet Historic neighborhood but within walking distance to town.. Emerson Room Top floor, named for the architect Wm Ralph Emerson -designer of the house - two beds, ( queen and single), ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-593327356833598792/original/56547aa2-87a0-4dcc-a8a3-7a6d72cda904.jpeg" },
    price: 33180,
    location: "Newport",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.32028, 41.49378] },
    category: "castle"
  },
  {
    title: "Coastal  retreat: 6 beds, seasonal pool & spa",
    description: "Relax and recharge in our calm, stylish space. Enjoy peaceful charm in this 6 bedroom, 5.5 bath, 4,000 sq ft home set on 2 acres and within an easy walk to Sakonnet Harbor and beaches. Inside are 6 well designed bedrooms, 5.5 baths, two living rooms and 2 kitchens with all the entertaining necessiti",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-722537670510056365/original/1abcd9fb-31fb-41f3-88f9-6f772c7c257b.jpeg" },
    price: 92400,
    location: "Little Compton",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.18865, 41.46854] },
    category: "amazing pools"
  },
  {
    title: "The Pines at Glamp Frogmore",
    description: "Named one of the top ten glampsites in New England by USA Today. Glamp Frogmore features a beautiful tent with king bed and futon, a smaller canvas tent with 2 camping cots, fresh water supply, firewood, pots and pans, utensils, plates, and drink ware. Spend time unplugging and playing cards, horses",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-50291731/original/38448d2c-a36c-469f-a1c4-0a7f9fa43ad5.jpeg" },
    price: 17304,
    location: "Coventry",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.68698, 41.66527] },
    category: "camping"
  },
  {
    title: "Vineyard Cottage at Spar Point Farm Block Island",
    description: "Spar Point Farm on Block Island is a 6-acre working family farm including a vineyard, orchard, apiary, gardens, and greenhouse. It offers a winning combination of being well off the main road for privacy and quiet, but less than 10 minutes by car from the main port town and 5 minutes from the airpor",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-823139552295027672/original/a0e8b7cc-50ec-4f73-aa95-aa73165b87c2.jpeg" },
    price: 33600,
    location: "New Shoreham",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.58256588584442, 41.15425840564072] },
    category: "farm"
  },
  {
    title: "Chic City Guesthouse Getaway",
    description: "Welcome to our chic and comforatable guesthouse getaway! Nestled in a serene neighborhood, near the Providence River, our stylish retreat offers the perfect blend of modern amenities and cozy charm. The space features a living area, a fully equipped kitchen, and two bedrooms designed for ultimate re",
    image: { filename: "listingimage", url: "https://www.sgiaddict.net/wp-content/uploads/2025/08/Chic-City-Escapes-Urban-Hideaways-and-Rustic-Retreats-for-a-Perfect-Getaway.webp" },
    price: 10836,
    location: "East Providence",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.36345829999999, 41.7786515] },
    category: "rooms"
  },
  {
    title: "Renovated private apartment in Armory district",
    description: "This first floor private apartment was recently renovated and has everything you need for a shorter or longer stay. It is in a Victorian home built in 1887 in the Armory historic district. In addition to the bedroom and bath, the apartment has a den, a full kitchen and a small butler's pantry. The b",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/airflow/Hosting-27855558/original/fa4549f1-0226-4072-b2f2-7b0f0c77d578.jpg" },
    price: 7644,
    location: "Providence",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.43448, 41.81231] },
    category: "cities"
  },
  {
    title: "Seascape: Waterfront Beach Home",
    description: "Waterfront Beach house with DIRECT beach access to Private Kelly Beach. Walk right onto the white sand beach and enjoy the view and sounds of the open Ocean from Bonnet Shores in Narragansett. Natural sunlight fills every room in the open floor plan that offers mesmerizing, panoramic ocean views fro",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI0MjcwODY4MDUxODk3Nzk0Ng%3D%3D/original/6d1878b0-2100-4029-ac86-f6a347a9f6f9.png" },
    price: 178752,
    location: "Narragansett",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.4238259, 41.4736299] },
    category: "beachfront"
  },
  {
    title: "Modern Luxury 3BR near Golden Gate Park & Presidio",
    description: "SAN FRANCISCO COMFORT & STYLE Brand-new 3-bed, 2-bath luxury flat with top rated Avocado Green mattresses, radiant underfloor heating, full gourmet kitchen & 4K smart TVs. Ultra-fast ~1 Gbps WiFi & luxurious EO bath products. Steps from Golden Gate Park, world-class restaurants & beaches + quick acc",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-779864432573379846/original/2c1e1f4f-37cc-449e-8cad-aa219c0a511e.jpeg" },
    price: 12600,
    location: "Inner Richmond",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.4723984117458, 37.78336612231625] },
    category: "trending"
  },
  {
    title: "San Francisco Views * Spacious Flat for Fun & Work",
    description: "Enjoy your fully furnished flat atop sunny POTRERO HILL. Satisfy all your travel needs here--an exceptional fully remodeled sun-lit Victorian. WOW! Panoramic sunset view of Twin Peaks, the Golden Gate Bridge, Mt. Tam, & Mission. Mesmerizing famous SF fog boils over TwinPeaks--an experience UNIQUE to",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-1520929/original/35d8dd5c-a8f2-413c-9828-dc873c7c395d.jpeg" },
    price: 12600,
    location: "Potrero Hill",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.404805, 37.759933] },
    category: "mountains"
  },
  {
    title: "Cozy, inviting nob hill gem",
    description: "Our Deluxe King Room with Fireplace comes complete with a king-sized bed with a pillow-top mattress, newly renovated bathrooms outfitted with relaxing soaking tubs (enjoy a fragrant soak, thanks to the in-room bath salts), gas fireplaces, 32-inch flat-panel televisions, iPod docking stations, and sl",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/prohost-api/Hosting-1242761865146585422/original/55532620-d3d3-4a03-ae5b-32be3b442472.jpeg" },
    price: 12600,
    location: "Downtown/Civic Center",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.411234, 37.789717] },
    category: "arctic"
  },
  {
    title: "Spacious Luxury Historic Loft in Downtown SF",
    description: "Need to stay in the city for a year or so? You just found a prime location in South Beach to experience San Francisco lifestyle at it's best! Behold, the coveted architecture of a historic conversion loft while enjoying all the conveniences of condo living in SF. Situated in the Historic Harbor Loft",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/4f5ec63c-24d9-4063-811b-5c63ad7f9c62.jpg" },
    price: 12600,
    location: "South of Market",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.38947, 37.78838] },
    category: "castle"
  },
  {
    title: "Luxury 1 Bed Apt-Pool Gym @ Caltrain & Oracle Park",
    description: "Enjoy a luxury, spacious & stylish experience at this centrally-located 1 bedroom apartment with premium amenities- pool & gym & conference rooms & hot tub — only 1-4 blocks from SF Caltrain (4th& King) & Oracle Park, UCSF Medical Center, Moscone Conference Center, Warriors Chase Center, Gus& Safewa",
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/a4re/p:UDR_t:Property_id:95137/original/6181ab09-0df0-4562-b83b-1a6cb9f15768?im_w=1200" },
    price: 12600,
    location: "South of Market",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.3912134, 37.7741557] },
    category: "amazing pools"
  },
  {
    title: "Mission Dolores Guesthouse with Attentive Details",
    description: "Recline on a plush extended sectional sofa in the living room of this lovely modern renovated guesthouse. Contemporary art and combined modern and mid-century furnishings—from B&B Italia and Hans Wegner—are arranged with attention to detail. Separate entry door, dedicated washer/dryer, standalone he",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-15776727/original/d4b37896-8195-41c4-bef6-d8f85dc0abd2.jpeg" },
    price: 12600,
    location: "Castro/Upper Market",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.42657, 37.76271] },
    category: "camping"
  },
  {
    title: "In-laws near China & Ocean Beach",
    description: "Location is paramount! The home with indoor and outdoor living is an urban entertainer's dream with this in-law (ground floor unit, one level up from the backyard). It has a beautiful backyard and patio, Convenient proximity to the Legion of Honor, Golden Gate Park, Lands End lookouts, Ocean Beach t",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1364877436101897148/original/5023c60f-4059-4503-a3c5-1a9d0adb9c56.jpeg" },
    price: 12600,
    location: "Outer Richmond",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.4909883, 37.7805744] },
    category: "farm"
  },
  {
    title: "Triple Private Room @ Fun & Social Hostel#1",
    description: "Our social and vibrant hostel in downtown SF is the place to stay! We invite travelers and adventurers of all ages, from all corners of the globe, to rest their heads at this historic hostel in the heart of San Francisco. We pride ourselves on creating a community vibe and a space that encourages gu",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTI3Mjc1MA%3D%3D/original/8f30abd8-93a2-4dec-acdc-705003f9c739.jpeg" },
    price: 12600,
    location: "North Beach",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.40594, 37.79933] },
    category: "rooms"
  },
  {
    title: "Airy Modern & Central SF Apartment w/ Free Parking",
    description: "Experience San Francisco at this centrally-located spacious Hayes Valley Apartment! Walking distant of a ton of restaurants, local shops, great coffee spots, and famous attractions like the Painted Ladies, City Hall, the Asian Art Museum, and SF Symphony Hall. Because Hayes Valley is so central in t",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-40006970/original/b254d91f-af3c-47a6-816f-03e62e83eec3.jpeg" },
    price: 12600,
    location: "Western Addition",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.43008, 37.77713] },
    category: "cities"
  },
  {
    title: "Modern Surf Shack steps from Ocean Beach",
    description: "Spend the summer steps from San Francisco's Ocean Beach - famous for world class surf - in the laid back artistic community of the Outer Sunset. Our home is a clean, modern 3BD/2BA with an incredible view. Spot whales over breakfast, enjoy long weekend walks along the Great Highway, or have a fire i",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/02687382-f69f-4ef0-a318-12de1e84ce52.jpg" },
    price: 12600,
    location: "Outer Sunset",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.50967, 37.75151] },
    category: "beachfront"
  },
  {
    title: "Ridge Top Get-A-Way and Quiet Dedicated work space",
    description: "Permit 231319 A quiet, private suite in a stunning ridgetop setting—perfect for relaxation and renewal! This spacious guest suite features two bedrooms, a private spa bathroom, and a secluded deck, private, occupying the entire lower floor of our hilltop home. Enjoy breathtaking forest views and pea",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-350780/original/efa534a4-f5d7-48bb-ad46-b760e1c638e9.jpeg" },
    price: 14784,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.94476, 37.10408] },
    category: "trending"
  },
  {
    title: "Ridgeline Mountain Tree House",
    description: "Located in the Santa Cruz Mountains, just 32 miles from San Jose, next to Roaring Camp Railroad. Easy 6 miles to Santa Cruz Beach, Boardwalk & Pier, UCSC. Visit Monterey Bay Aquarium, Santa Cruz Mystery Spot, many State Parks & Zipline. You’ll love the mountain views, high ceilings. open space and g",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/80f190d0-21f3-4fbe-8e93-7553f9d3dba9.jpg" },
    price: 39816,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.06153, 37.04944] },
    category: "mountains"
  },
  {
    title: "Coastal Redwood Cabin | Hot tub | Private Creek",
    description: "Welcome to our cozy cabin nestled in the serene beauty of the Santa Cruz Mountains! Escape the hustle and bustle of everyday life and immerse yourself in the tranquility of towering redwoods surrounding our charming studio-style cabin. Whether you're seeking a peaceful getaway or craving an adventur",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1103668302884009248/original/07a3e2ef-e189-4d8d-802c-545ab2aebd2a.jpeg" },
    price: 15456,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.94083, 37.056] },
    category: "arctic"
  },
  {
    title: "Historic Lawnway Cottage",
    description: "Historic Lawnway Cottage in the center of Capitola Village steps away from the beach, restaurants, and shops. Relax in front of our cabin on lawn way or take a short walk to the beach. A perfect relaxing getaway. Our beach cottage is listed on the National Historic Register as the Six Sisters-Lawn W",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-834009641498307586/original/461d6ed5-ea6d-45e8-8a36-aad006cd74df.jpeg" },
    price: 19236,
    location: "City of Capitola",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.95127207785843, 36.972372093307925] },
    category: "castle"
  },
  {
    title: "Luxury garden villa w/ hot tub and game room",
    description: "Welcome to our Luxury Villa in the Santa Cruz mountains, a paradise where you can relax and make unforgettable memories. Our villa boasts a spacious patio where you can enjoy your meals surrounded by enchanting gardens. Unwind in our pool, relax in the hot tub, or challenge your friends to a game of",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-655296215858939942/original/16d8249b-f936-4fe7-a391-77aa7f1d21c6.jpeg" },
    price: 45276,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.14583, 37.0387] },
    category:"amazing pools"
  },
  {
    title: "Soquel Glamping Nestled in the Woods",
    description: "Nestled in the soquel valley woods with a 10-minute drive to the beach! Our glamping tents offer a relaxing, comfortable, and upgraded experience in the wilderness. We are a premier glamping location that is perfectly located near the beach, hiking, wineries, and incredible dining. Our glamping expe",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/891f37da-cffe-46cc-9950-d75673429846.jpg" },
    price: 10500,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.94336, 37.04016] },
    category: "camping"
  },
  {
    title: "Vineyard Retreat with Expansive Mountain View",
    description: "Vineyard retreat in Santa Cruz Mountains with expansive hilltop views. Situated off the beaten path between Los Gatos & Felton. The perfect place to disconnect, unwind & relax in a rural mountain setting. Our vineyard is 100% natural, no chemicals, pesticides or additives, from the soil to your cup.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-994199861401198127/original/8528d99e-6e1b-47aa-8d34-2838b6fdea28.jpeg" },
    price: 15792,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.02935, 37.13794] },
    category: "farm"
  },
  {
    title: "Private Room: Sleeps 5, Private Bath, Walk 2 Beach",
    description: "4-Bed Private Room w/Private Bathroom has a twin over twin bunk bed, a twin bed and a full bed. Your reservation has exclusive access to this room (it is not shared with other guests). All bed linens and towels are provided, as well as access to hostel community spaces, kitchen, free WiFi. This spac",
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA5MjY5MjYwOTk5OTY2MzQ4Nw==/original/2f9d144b-9354-461f-bd3c-c63d61564e49.jpeg" },
    price: 16212,
    location: "City of Santa Cruz",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.02240695914264, 36.966580397088286] },
    category: "rooms"
  },
  {
    title: "Classic Central Apartment",
    description: "Beautiful historic, 1920’s apartment in Santa Cruz. Walking distance to excellent bakeries, shops, restaurants, parks, downtown, beaches, and the Boardwalk. Come and relax in this classically styled apartment, spacious and comfortable, with all the benefits of a central location.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-49887811/original/729e85c8-45f3-4b75-a773-8c1d20ddb6d7.jpeg" },
    price: 21000,
    location: "City of Santa Cruz",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.016327, 36.9744] },
    category: "cities"
  },
  {
    title: "La Selva Beach Oceanfront - Steps to Beach & Ocean",
    description: "The beach and ocean is your backyard at this 3 bedroom, 2 bath townhome (sleeps 8). Relax and enjoy the ocean, beach, and breathtaking sunset's. Watch the dolphins play in the waves and whales swim by one of Santa Cruz Counties longest semi private beaches. An ideal location to enjoy surfing, walkin",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/ecfd5a65-d900-4d8c-bb54-179d4dd3dc1b.jpg" },
    price: 50652,
    location: "Unincorporated Areas",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.85912, 36.92784] },
    category: "beachfront"
  },
  {
    title: "International Service Apartments @ Raeburn Park",
    description: "Service apartment located at Raeburn Park, Outram.  Free Shuttle bus to Outram Park MRT ( Monday to Friday)  Nearest bus stop just 5 mins walking distance  To Outram Park MRT station : 2 stops by Bus 121,124,147,122,143 and 61  To Chinatown MRT station : 4 stops by Bus 124,147,143,61 and 2  To ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/52327303-ba97-4e4a-9d6d-58c9a22e252e.jpg" },
    price: 12516,
    location: "Bukit Merah",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.83432, 1.27368] },
    category: "trending"
  },
  {
    title: "2 Bedder Condo Unit @ Hillview",
    description: "- Well-maintained condition - Bright & Windy - No west sun - Fully furnished unit - Full Condo facilities ⭑ Nearby Amenities - HillV2 Shopping mall - Hillview market place ⭑ Nearby Accessibility - Buses 67, 75, 170, 176, 178, 184, 961, 963, 970 - Hillview MRT ⭑ Nearby Schools - CHIJ Our Lady Queen o",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-945118954811453086/original/78980f09-516d-4a7a-a5ad-c59471d5564e.png" },
    price: 12180,
    location: "Bukit Batok",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.7655369, 1.3618278] },
    category: "mountains"
  },
  {
    title: "Queen Cabin Pod w Shared Bathroom (Cloudbeds)",
    description: "We are co-living hostel located conveniently in Lavender/Kallang area. Room-like Cabin Pod (4.5 square meter) for 2 pax. Strong air-conditioning are available inside the cabin pod. Bathrooms, lounge and pantry area are shared and located outside your room. Cabin pod are private & accessible with key",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1417166590585085067/original/4cd611b9-be2a-4674-a2aa-80dac4adb9fb.jpeg" },
    price: 11256,
    location: "Kallang",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.8602, 1.31176] },
    category: "arctic"
  },
  {
    title: "Charming 1 BR Apartment in a Heritage Property",
    description: "Stay in this property which is a heritage in more than it's name. This residence was built in 1900 and it's walls have many stories to tell. It has hosted dignitaries, high-ranking Japanese officials in WW2 and well known personalities. Even now its iconic heritage continues to attract many who wish",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-829369314741369503/original/daeca80f-0afd-4b42-9cfa-c85de00a4e33.jpeg" },
    price: 36540,
    location: "Orchard",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.83494, 1.30708] },
    category: "castle"
  },
  {
    title: "Condo studio in CBD, Tanjong Pagar MRT, Min 3 mths",
    description: "Fully-furnished condo studio in Central Business District. The condo is new with many facilities - gym, swimming pools, tennis court, jacuzzis, hot tubs, hammocks, BBQ pits, and pool table. There are countless restaurants, cafes, bars, food courts in the area. All other amenities are just a few mins",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/b0339913-980c-42cc-a5a9-601681b1e633.jpg" },
    price: 10500,
    location: "Downtown Core",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.84421, 1.27361] },
    category: "amazing pools"
  },
  {
    title: "Standard 2 Bed-Room Near CBD",
    description: "Discover a budget-friendly gem in the city center at 383 Jalan Besar! Your cozy hotel guest room with a king or twin bed and private bathroom awaits. Great Renovation discount—great value, modern amenities. Experience the city without breaking the bank! Important: Hotel Under renovation Status, comm",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1076009520742021280/original/54d02b80-048a-490f-8319-8b6bccec8c1b.jpeg" },
    price: 16548,
    location: "Kallang",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.8596966, 1.3131906] },
    category: "camping"
  },
  {
    title: "Comfy 2BR Apartment in the Heart of Orchard Road",
    description: "My serviced apartment is located right in the heart of Orchard Road next to popular shopping malls like ION Orchard, Wisma Atria and Ngee Ann City. Aside from the unparalleled convenience of being right behind Singapore’s biggest shopping belt, Orchard MRT Station is at your doorstep and you’re just",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/9c05043d-0961-4a1f-8f1d-96b6ee18015f.jpg" },
    price: 100128,
    location: "Orchard",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.83382, 1.30435] },
    category: "farm"
  },
  {
    title: "8 person Family Private Room(2 Double & 4 Single)",
    description: "Welcome to the Meadows Hostel. A newly opened hostel superbly located in the heart of Singapore (nearest metro station is just a walk away), we offer affordable ,clean and cosy accommodation for backpackers and international travellers.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/airflow/Hosting-16213115/original/c8c91a3b-2798-4c50-8035-10aba3a4121b.jpg" },
    price: 25788,
    location: "Kallang",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.86054, 1.31114] },
    category: "rooms"
  },
  {
    title: "宁静 干净  CBD Central Studio Apartment | 免费WiFi 服务式公寓",
    description: "Enjoy city life and unbeatable convenience in a serviced apartment in Young Mansion. Located in the heart of Singapore, our serviced condo is perfect for both short and long stays. Shopping malls, supermarkets, and Singapore's best attractions are within walking distance. Yum and Bugis and Governmen",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-23045739/original/7a3cf7bb-96ad-4400-b8e0-c0b54f927a23.jpeg" },
    price: 35700,
    location: "Rochor",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.85196, 1.29706] },
    category: "cities"
  },
  {
    title: "2 Storey Loft @ Attractions Packed Beach Resort",
    description: "Two-storey Beach Loft Crash in the class you deserve! Enjoy a thrilling, entertaining, delightful, and leisurely time on the grounds, and a chilled beach experience when you stay at this one of a kind, attractions, beach resort! 3 Adults / 2 Adults + 1 Child Located on the 3rd floor, this two-storey",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MjI1NjE5MDYzMDc5NzEwNA%3D%3D/original/7d0cbb5c-0f79-4c57-ad0e-eace52c059d7.jpeg" },
    price: 39144,
    location: "Pasir Ris",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.9547437621521, 1.3797322276535784] },
    category: "beachfront"
  },
  {
    title: "Mysig lägenhet i Stockholm stad",
    description: "Beautiful apartment for 4-5 people in a lovely area, that's both peaceful an also centric 2 min walk to nearest subway Gardet and supermarket 2 subway stops to Ostermalmstorg 3 stops from Central Station 4 stops to Gamla Stan 5 stops to Södermalm 4 restaurants on my street, 2 pizza places, a sushi p",
    image: { filename: "listingimage", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-951949333755771564/original/79e4c9bb-c8f2-4855-bdad-c781b0b53240.jpeg" },
    price: 66024,
    location: "Östermalms",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.0991903, 59.3484672] },
    category: "trending"
  },
  {
    title: "Båt med dj ljud ljus event utrustning Spillersboda",
    description: "In addition to having the extremely strong sound system with eight speakers in the boat, there is also a party package with DJ equipment and candles and smoke Stereo in the boat is powerful four speakers up four speakers down of which two sub bass Double end steps One more bazaar A four channel to t",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1388479109257889739/original/03fb849a-e6e5-48c9-8ec7-4d964f2ee238.jpeg" },
    price: 470064,
    location: "Bromma",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [17.9745304, 59.34022170000001] },
    category: "mountains"
  },
  {
    title: "Flatenstugan lägergård vid sjön, 26 sängplatser",
    description: "Experience the tranquility of nature – Rent our cabins in Flatens Nature Reserve! Disconnect everyday life and enjoy the tranquility of our charming camp farm, located on Lake Drevviken, just a short drive from Stockholm. Here you have the opportunity to stay in cozy cabins that accommodate up to 26",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1138157394562332729/original/9e401372-0829-4ace-bdc6-f45d62aa31ba.jpeg" },
    price: 396060,
    location: "Skarpnäcks",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.16112527141112, 59.25166749992427] },
    category: "arctic"
  },
  {
    title: "Enjoy the historical surroundings in Gamla Stan!",
    description: "Enjoy the historical surroundings in the middle of everything! Stay in this welcoming aesthetic and tasteful renovated apartment in a building from 1859 in old town, the center of Stockholm. Right next to the subway, walking distance to the Central Station and yet so quite and peaceful along the wat",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/93ef2b67-bcd9-431e-b166-62f216dc9f2b.jpg" },
    price: 438480,
    location: "Södermalms",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.06819, 59.32428] },
    category: "castle"
  },
  {
    title: "Villa Nobel - Stor villa med pool",
    description: "Large and luxurious house in Bromma with nearby beaches, bathing areas, parks, squares and activities. The villa has plenty of space, representative rooms and a lovely secluded large terrace and garden. 6 bedrooms and spacious kitchen. Private heated pool.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/9fb6cc93-c126-4c01-9534-4480dbd531ae.jpg" },
    price: 348684,
    location: "Bromma",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [17.92965, 59.3253] },
    category: "amazing pools"
  },
  {
    title: "Small courtyard Studio in central Old Town",
    description: "Welcome to our small studio apartment located in the heart of historic Old Town Stockholm. This is the perfect location for exploring the city. You can easily walk from the Central Station and to several major local attractions. We kindly ask you to read through the entire listing and the detailed d",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/33f715bd-1c84-4877-a7c3-eea464b7bc81.jpg" },
    price: 73752,
    location: "Södermalms",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.06853, 59.32457] },
    category: "camping"
  },
  {
    title: "Etagelägenhet med vacker trädgård",
    description: "In popular Gamla Enskede, near Södermalm, is this apartment with a beautiful lush farm. In each bedroom there is a large double bed (160-180 cm) and in one of the bedrooms there is the possibility to set up an extra bed. On the property there are barbecues and seating as well as playground and possi",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1410244483771945001/original/b202467d-f3b2-4b14-8f20-a5362e8a6582.jpeg" },
    price: 226800,
    location: "Enskede-Årsta-Vantörs",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.0904462, 59.2865684] },
    category: "farm"
  },
  {
    title: "Private 4 Capsule Room",
    description: "Nomad City Hostel is in the immediate city center, just a five minutes’ walk across the bridge from the central station, close to everything. The hostel reception is in the Nomad City Bar, right next to the hostel. The bar is open only for the guests of the Nomad Hostels and hosts pub nights, karaok",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-1396388652460286530/original/53bf2b9c-3b32-42b5-9510-49d3376ddd91.jpeg" },
    price: 112224,
    location: "Kungsholmens",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.0473026809702, 59.32967171224354] },
    category: "rooms"
  },
  {
    title: "Apartment with Modern Amenities",
    description: "Welcome to my cozy and minimalist Spartan apartment, perfectly situated in the heart of the city. Designed with simplicity and comfort in mind, this apartment offers a tranquil retreat amidst the bustling urban environment, ideal for both short and extended stays. Book your stay at our Spartan apart",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-1199080881799648632/original/b09fa570-f22f-4169-a4fe-d5286d8e22fc.jpeg" },
    price: 43680,
    location: "Hässelby-Vällingby",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [17.88234, 59.36225] },
    category: "cities"
  },
  {
    title: "Villa vid badstrand i Stockholm, 15 min från City",
    description: "Charming villa 15 minutes to Stockholm, 15 seconds to the beach! Large garden with flat surfaces for play, hammocks, many apple trees to climb and raspberry and currant bushes to munch on. From the patio view of the water, charcoal grill is available for the barbecue evening. 50 meters away is a pub",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/bd8533dd-a4d3-4821-a71a-421ac650799d.jpg" },
    price: 280896,
    location: "Farsta",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [18.12725, 59.24226] },
    category: "beachfront"
  },
  {
    title: "Venice Luxury rooftop Grand Canal",
    description: "Luxury rooftop that allows to host a large group with four indipendent accomodations with exclusive entrances, that, if needed, can be connected with the others. The first three units have a dining area with equipped kitchen, one or two bedrooms, two with ensuite bathroom with shower, double full ba",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/81a5f262-4e51-437d-b361-c335ac717f5a.jpg" },
    price: 134232,
    location: "San Polo",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3266, 45.43607] },
    category: "trending"
  },
  {
    title: "Foresta - Rooftop apartment in historic Palazzo",
    description: "Located on the top floor of the historic XIV-century Palazzo Contarini della Porta di Ferro, just a short 10-minute walk from Piazza San Marco, this charming apartment offers breathtaking views of the Venetian skyline. The apartment features a spacious living room with an integrated kitchen, two coz",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTYzNDUxOTE4NzY1MzExNDk2/original/268f1e75-4d25-4c25-af39-cd3e929f4afe.jpeg" },
    price: 23520,
    location: "Castello",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.34773, 45.43654] },
    category: "mountains"
  },
  {
    title: "Ve.N.I.Ce. Cera Ca' Corte Sconta",
    description: "Venice Cera Ca' Corte Sconta is a charming flat named after the nearby \"osteria\", a popular eatery among Venetians. Located near the Arsenale, the flat features modern and functional furnishings enhanced by a stylish fireplace that creates a pleasant and welcoming atmosphere during winter evenings. ",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/9f9550ad-25b7-4622-8f6a-055a43d4ae4f.jpg" },
    price: 18564,
    location: "Castello",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.34928, 45.43446] },
    category: "arctic"
  },
  {
    title: "Comfort in historical palace, special offer",
    description: "In historic Venetian building, entire apartment of 65 sq meters net surface , on the second floor, recently restored, fully furnished, is available for rental , for periods over 30 days and up to 18 months, for professionals . Two bedrooms, possibility of sleeping up to 4, two bathrooms, living room",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-631735479790897703/original/74514a39-ac7a-452b-adf4-2352c1fc6c73.jpeg" },
    price: 14700,
    location: "Cannaregio",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.333747288360613, 45.4423361713035] },
    category: "castle"
  },
  {
    title: "Luxury home with terraces, jacuzzi, Venice",
    description: "Luxurious 200 sqm apartment near the Rialto Bridge, Venice. The apartment features an entrance hall, a spacious living room with leather sofas, and four large double bedrooms—three with queen-size beds and one with twin beds. The kitchen is modern and fully equipped with all appliances, and a French",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/02f17ae3-5a4a-46af-a5b8-7013e7dd9290.jpg" },
    price: 34272,
    location: "Cannaregio",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.337145917117596, 45.44009200442217] },
    category: "amazing pools"
  },
  {
    title: "Rooftop Terrace Penthouse & 360° Views | Venice5th",
    description: "Experience the height of Venetian living in an exclusive penthouse with Venice's 5th highest private terrace.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-29171426/original/be733c72-4c17-4d04-83d5-6ab3d2860498.jpeg" },
    price: 51240,
    location: "Castello",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.33966, 45.43689] },
    category: "camping"
  },
  {
    title: "Adorable flat close to St. Barnaba, Venezia",
    description: "Recently renovated, is situated to the 2' floor of a house close to Campo San Barnaba and Campo Santa Margherita. All its windows overlooking the calle lunga San Barnaba. Consisting of a bedroom with a double bed, a bathroom with shower/bathtube, living room/kitchen with sofa bed, two fans and wifi.",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/eca5541c-9165-4a14-8e9d-c162b46ca7ca.jpg" },
    price: 12348,
    location: "Dorsoduro",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.32435, 45.43275] },
    category: "farm"
  },
  {
    title: "[Bed and Breakfast] Emily Boutique room",
    description: "Bed and Breakfast Colombo is located in the most exclusive and central area of ​​the Venetian mainland and a few steps from the terminal that connects with Venice Island. B&B Colombo was created inside a prestigious building in complete Art Nouveau style. The recent renovation has allowed us to crea",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-42489396/original/9a6b26e8-36e2-4beb-b620-07b4106ccb22.jpeg" },
    price: 12684,
    location: "San Lorenzo XXV Aprile",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.24693, 45.49439] },
    category: "rooms"
  },
  {
    title: "Apartment Sisila - Palazzo Raspi",
    description: "An entire apartment of 70 mq² with a Venetian style decor, in a private Palazzo from 1500 with beautiful high ceilings . Situated on the 1st floor, the apartment has one bedroom with a king size bed. The bathroom has a shower. The kitchen has a dishwasher, Nespresso machine, toaster, microwave, frid",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-50910650/original/0a340b76-8f1f-4bed-860a-65ce82c574d0.jpeg" },
    price: 24444,
    location: "San Polo",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.332633018493652, 45.43886947631836] },
    category: "cities"
  },
  {
  title: "Vagator Cosy & Modern 3 Bedroom Villa for 8",
  description: "A stunning modern 3-bedroom villa nestled in the vibrant neighbourhood of Vagator, North Goa. Perfect for groups of up to 8, featuring spacious living areas, a fully equipped kitchen, and easy access to Vagator Beach, local shacks, and Goa's famous nightlife.",
  image: {
    filename: "goa_vagator_modern_villa",
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-638704701415274171/original/1555e8c9-190f-4952-9a0a-401038e91221.jpeg"
  },
  price: 16268,
  location: "Vagator, Goa",
  country: "India",
  category: "trending",
  geometry: { type: "Point", coordinates: [73.75698, 15.5987] }
},
  {
    title: "Elegante appartamento sul mare",
    description: "Explore Venice and then relax at Lido in the tranquility of our private beach! Three-bed apartment, terrace facing the sea, beach accessible only to the owners of the residence. Equipped with all the comforts: kitchen, air conditioning, dishwasher and located in a very quiet and comfortable area for",
    image: { filename: "listingimage", url: "https://a0.muscache.com/pictures/miso/Hosting-886211734867170509/original/47e5bc89-536e-4045-9bac-f7185d5e34dd.jpeg" },
    price: 9828,
    location: "Lido",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.360682068786607, 45.39705921302566] },
    category: "beachfront"
  },

  // ========== DUBAI (3 listings) ==========
  {
    title: "FIVE Palm Beachfront Villa – Private Pool & Jacuzzi",
    description: "A stunning 12,000 sq ft luxury beach villa set in the heart of Five Palm Jumeirah. Features a climate-controlled private pool, rooftop jacuzzi with panoramic Marina views, direct beach access, and full 5-star hotel amenities including spa, gym and restaurants. Daily housekeeping and concierge included.",
    image: { filename: "dubai_five_palm_villa", url: "https://media.vrbo.com/lodging/90000000/89190000/89184600/89184505/89a59877.jpg?" },
    price: 415000,
    location: "Palm Jumeirah, Dubai",
    country: "United Arab Emirates",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [55.1390, 25.1124] }
  },
 
  {
    title: "Modern Studio with Burj Khalifa View – Downtown Dubai",
    description: "A sleek modern studio in the heart of Downtown Dubai with breathtaking Burj Khalifa and Dubai Fountain views. Walking distance to Dubai Mall, top restaurants, and the metro. Perfect for couples and solo travelers exploring the city in style.",
    image: { filename: "dubai_downtown_burj_studio", url: "https://images.trvl-media.com/lodging/121000000/120480000/120475500/120475483/50bf313c.jpg?" },
    price: 12450,
    location: "Downtown Dubai, Dubai",
    country: "United Arab Emirates",
    category: "cities",
    geometry: { type: "Point", coordinates: [55.2744, 25.1972] }
  },

  // ========== BANGKOK (3 listings) ==========
  {
    title: "Sukhumvit Luxury Pool Villa – Bangkok City Centre",
    description: "A unique art-filled villa with private pool, gym and tropical garden in Bangkok's Sukhumvit district. Steps from EmQuartier Mall, top restaurants, and BTS Skytrain. Features 5-star resort bath amenities and a dedicated concierge service.",
    image: { filename: "bangkok_sukhumvit_pool_villa", url: "https://images.trvl-media.com/lodging/67000000/66970000/66963800/66963785/f9cecda5.jpg?" },
    price: 28490,
    location: "Sukhumvit, Bangkok",
    country: "Thailand",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [100.5648, 13.7200] }
  },
  {
    title: "Heritage Pool Villa – Sathorn Bangkok",
    description: "A unique Thai heritage luxury pool villa in the upscale Sathorn district of Bangkok. 400 sq m of beautifully preserved Thai architecture blended with modern comforts. Private pool, lush gardens, and walking distance to Bangkok's best rooftop bars and fine dining.",
    image: { filename: "bangkok_sathorn_heritage_villa", url: "https://a0.muscache.com/im/pictures/47ab1237-d587-4a1a-bee4-6988c528cbb4.jpg?" },
    price: 38500,
    location: "Sathorn, Bangkok",
    country: "Thailand",
    category: "trending",
    geometry: { type: "Point", coordinates: [100.5339, 13.7200] }
  },
  {
    title: "4BR Oceanview Villa – Infinity Pool, Koh Samui",
    description: "A breathtaking 4-bedroom villa perched on the hills of Koh Samui with an infinity pool and stunning ocean views. Features spacious outdoor living, tropical gardens, and a short walk to the beach. Perfect for groups seeking a luxury island escape in Thailand.",
    image: { filename: "kohsamui_oceanview_infinity_villa", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1660659790969827422/original/1cf26f81-2756-46bd-ab3c-86ea57421457.jpeg?" },
    price: 38595,
    location: "Koh Samui, Surat Thani",
    country: "Thailand",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [100.0136, 9.5120] }
  },

  // ========== BALI – UBUD / CANGGU (4 listings) ==========
  {
    title: "Ubud Jungle Escape – Infinity Pool, Hidden in Nature",
    description: "A rare jungle villa with a private infinity pool and breathtaking views in the rice fields of Penestanan, Ubud. Car-free sanctuary with open-concept living, two king bedrooms, outdoor shower, luxury bathtub with jungle view. Daily housekeeping and luggage assistance included.",
    image: { filename: "bali_ubud_jungle_escape", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-45791861/original/3ffcb80b-d338-460a-91fa-c356d819c9ae.jpeg" },
    price: 11869,
    location: "Penestanan, Ubud, Bali",
    country: "Indonesia",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [115.2494, 8.5069] }
  },
  
  {
    title: "Seminyak Beachfront Villa – Steps from the Ocean",
    description: "An elegant 3-bedroom villa sitting directly on Seminyak Beach, Bali. Wake up to ocean sounds, dip in your private pool, and watch spectacular sunsets from your terrace. Walking distance to Seminyak's best beach clubs, restaurants, and boutique shops.",
    image: { filename: "bali_seminyak_beachfront", url: "https://media.villagetaways.com/villas-src/bali/372/ce8756f12d1b0df1163383191d40163b_full.jpg"},
    price: 24900,
    location: "Seminyak, Bali",
    country: "Indonesia",
    category: "beachfront",
    geometry: { type: "Point", coordinates: [115.1614, 8.6906] }
  },
  {
    title: "Ubud Jungle View – 1BR Villa with Private Pool",
    description: "A charming 1-bedroom villa nestled in the jungle of Ubud with a private pool and stunning valley views. Perfect for couples seeking a romantic retreat surrounded by nature. Close to Ubud's Sacred Monkey Forest, Tegalalang Rice Terraces, and top wellness centres.",
    image: { filename: "bali_ubud_jungle_1br_villa", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1655443754150291936/original/d6696b50-4a2c-482c-9825-a02741947a3c.jpeg?" },
    price: 9960,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "mountains",
    geometry: { type: "Point", coordinates: [115.2624, 8.5069] }
  },

  // ========== LONDON (3 listings) ==========
  {
    title: "Stunning Notting Hill Apartment – Heart of London",
    description: "A beautifully designed apartment in the iconic Notting Hill neighbourhood of London. Bright interiors, stylish furnishings, and steps from Portobello Road Market, top restaurants, and the tube. The perfect London base for couples and families.",
    image: { filename: "london_notting_hill_apt", url: "https://a0.muscache.com/im/pictures/miso/Hosting-750393249719542033/original/571e5bfd-1b08-4c47-bff5-2750c000648b.jpeg?" },
    price: 18200,
    location: "Notting Hill, London",
    country: "United Kingdom",
    category: "cities",
    geometry: { type: "Point", coordinates: [-0.2000, 51.5150] }
  },
  {
    title: "Luxury Chelsea Townhouse with Garden",
    description: "An exquisite 3-bedroom townhouse in the prestigious Chelsea neighbourhood of London. Features a private garden, designer interiors, and walking distance to King's Road, the Thames, and London's finest restaurants and museums.",
    image: { filename: "london_chelsea_townhouse", url: "https://media.houseandgarden.co.uk/photos/65c4a47784b54db20ce094db/master/w_1600,c_limit/HGUK_ESloane_Garden_464_HR-production_digital.jpg" },
    price: 45000,
    location: "Chelsea, London",
    country: "United Kingdom",
    category: "trending",
    geometry: { type: "Point", coordinates: [-0.1676, 51.4875] }
  },
  {
    title: "Cosy Studio in Shoreditch – Trendy East London",
    description: "A stylish studio apartment in the heart of Shoreditch, London's coolest creative neighbourhood. Surrounded by street art, rooftop bars, artisan coffee shops, and vintage markets. Perfect for solo travellers and couples exploring vibrant East London.",
    image: { filename: "london_shoreditch_studio", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM5NjUwMTU%3D/original/61b2ae47-b8be-49f6-ae01-f35a2513c0ba.jpeg?" },
    price: 10800,
    location: "Shoreditch, London",
    country: "United Kingdom",
    category: "cities",
    geometry: { type: "Point", coordinates: [-0.0777, 51.5229] }
  },

  
  
  {
    title: "Modern Shibuya Apartment – Tokyo City Views",
    description: "A sleek modern apartment in the buzzing Shibuya district of Tokyo with stunning city views. Walking distance to Shibuya Crossing, Harajuku, Yoyogi Park, and Tokyo's best shopping streets. Ideal for first-time visitors wanting to experience the best of Tokyo.",
    image: { filename: "tokyo_shibuya_modern_apt", url: "https://www.realestate-tokyo.com/media/21965/hyatt_house_tokyo_shibuya_1.jpg" },
    price: 12450,
    location: "Shibuya, Tokyo",
    country: "Japan",
    category: "cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6598] }
  },
  {
    title: "Cosy Kyoto Guesthouse near Fushimi Inari",
    description: "A charming traditional guesthouse in Kyoto, just minutes from the famous Fushimi Inari Shrine and its iconic torii gates. Features Japanese-style rooms, a shared garden, and warm hospitality. The perfect base for exploring Kyoto's temples, geisha districts, and bamboo groves.",
    image: { filename: "kyoto_fushimi_guesthouse", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-10948654/original/f88d6d55-1251-405b-8a7f-57e10fa589a2.jpeg?" },
    price: 8300,
    location: "Fushimi, Kyoto",
    country: "Japan",
    category: "rooms",
    geometry: { type: "Point", coordinates: [135.7681, 34.9671] }
  },

 
  {
    title: "Stunning Manhattan Loft – SoHo New York",
    description: "A gorgeous industrial-chic loft in the heart of SoHo, Manhattan. Exposed brick walls, high ceilings, and designer furnishings. Steps from world-class galleries, boutiques, and the best restaurants New York has to offer. A true New York City experience.",
    image: { filename: "newyork_soho_manhattan_loft", url: "https://www.zillowstatic.com/bedrock/app/uploads/sites/26/379076903-4358ae.jpg" },
    price: 33200,
    location: "SoHo, New York",
    country: "United States",
    category: "trending",
    geometry: { type: "Point", coordinates: [-74.0021, 40.7233] }
  },
  
 

 
  {
    title: "Overwater Bungalow with Glass Floor – North Malé Atoll",
    description: "A dreamy overwater bungalow in the North Malé Atoll with a glass floor revealing the crystal-clear lagoon beneath. Features a private deck, direct ocean access, and panoramic views of the Indian Ocean. Breakfast included with daily housekeeping.",
    image: { filename: "maldives_overwater_bungalow", url: "https://www.journeyera.com/wp-content/uploads/2022/01/BEST-OVERWATER-BUNGALOWS-MALDIVES-36.jpg" },
    price: 83000,
    location: "North Malé Atoll, Maldives",
    country: "Maldives",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] }
  },
  {
    title: "Beachfront Villa – Maafushi Island, Maldives",
    description: "A stunning beachfront villa on the local island of Maafushi, one of the Maldives' most popular budget-friendly destinations. Steps from the beach, crystal-clear snorkelling spots, and vibrant local cafes. Perfect for couples seeking an affordable Maldives escape.",
    image: { filename: "maldives_maafushi_beachfront", url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/36100599.jpg?" },
    price: 16600,
    location: "Maafushi, Kaafu Atoll, Maldives",
    country: "Maldives",
    category: "beachfront",
    geometry: { type: "Point", coordinates: [73.4701, 3.9407] }
  },
  

  
  {
    title: "Cliffside Cave House with Caldera Views – Oia Santorini",
    description: "A magical whitewashed cave house perched on the cliffs of Oia, Santorini, with breathtaking caldera and volcano views. Features a private plunge pool, vaulted ceilings, and the most spectacular sunsets in the world. Ideal for romantic couples.",
    image: { filename: "santorini_oia_cave_house", url: "https://media.vrbo.com/lodging/35000000/34330000/34328400/34328360/229a10dd.jpg?" },
    price: 37350,
    location: "Oia, Santorini",
    country: "Greece",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [25.3654, 36.4619] }
  },
  {
    title: "Luxury Fira Suite with Infinity Pool – Santorini",
    description: "An elegant suite in Fira, the capital of Santorini, with a private infinity pool and stunning views of the Aegean Sea. Beautifully decorated with local Cycladic art, this suite offers the perfect base for exploring Santorini's famous beaches and wineries.",
    image: { filename: "santorini_fira_infinity_suite", url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/422967069.jpg?" },
    price: 49800,
    location: "Fira, Santorini",
    country: "Greece",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [25.4319, 36.4162] }
  },
  {
    title: "Traditional Athens Apartment near Acropolis",
    description: "A charming apartment in the heart of Athens with rooftop views of the iconic Acropolis. Located in the vibrant Monastiraki neighbourhood, steps from ancient ruins, flea markets, and Athens' best tavernas. Perfect for history lovers and culture seekers.",
    image: { filename: "athens_acropolis_view_apt", url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/412086570.jpg?" },
    price: 8300,
    location: "Monastiraki, Athens",
    country: "Greece",
    category: "cities",
    geometry: { type: "Point", coordinates: [23.7275, 37.9755] }
  },


  {
    title: "Stunning Eixample Apartment near Sagrada Familia",
    description: "A beautifully designed apartment in Barcelona's prestigious Eixample district, just a short walk from Gaudí's iconic Sagrada Família. Features high ceilings, modern interiors, and a private balcony. Perfect for exploring Barcelona's architecture, beaches, and nightlife.",
    image: { filename: "barcelona_eixample_sagrada_apt", url: "https://media.vrbo.com/lodging/113000000/112860000/112855800/112855715/7f847d87.jpg?" },
    price: 12450,
    location: "Eixample, Barcelona",
    country: "Spain",
    category: "cities",
    geometry: { type: "Point", coordinates: [2.1734, 41.3979] }
  },

  {
    title: "Barceloneta Beachfront Apartment with Sea Views",
    description: "A stunning apartment right on Barceloneta Beach with direct sea views and the sound of the Mediterranean at your doorstep. Features a bright open-plan layout, modern amenities, and easy access to Barcelona's best beach clubs, seafood restaurants and city attractions.",
    image: { filename: "barcelona_barceloneta_beach_apt", url: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/177719491.jpg?" },
    price: 16600,
    location: "Barceloneta, Barcelona",
    country: "Spain",
    category: "beachfront",
    geometry: { type: "Point", coordinates: [2.1927, 41.3784] }
  },

  {
    title: "Alfama Townhouse with Tagus River Views – Lisbon",
    description: "A charming renovated townhouse in Lisbon's historic Alfama district with stunning views of the Tagus River. Features traditional azulejo tiles, exposed stone walls, a private terrace, and is steps from São Jorge Castle, fado music venues, and local tascas.",
    image: { filename: "lisbon_alfama_townhouse", url: "https://a0.muscache.com/im/pictures/84183975/64294433_original.jpg?" },
    price: 10800,
    location: "Alfama, Lisbon",
    country: "Portugal",
    category: "castle",
    geometry: { type: "Point", coordinates: [-9.1282, 38.7139] }
  },
  {
    title: "Modern Chiado Apartment – Best Location in Lisbon",
    description: "A stylish apartment in Lisbon's vibrant Chiado neighbourhood, known for its literary cafes, boutique shops, and legendary pastéis de nata. Features contemporary interiors, a private balcony, and is walking distance to Baixa, Bairro Alto, and the waterfront.",
    image: { filename: "lisbon_chiado_modern_apt", url: "https://q-xx.bstatic.com/xdata/images/hotel/608x352/632175066.webp?k=0a522525b7c43a5788dc90ee59647b11886316f949c50a96576d3829f5f96c98&o=" },
    price: 12450,
    location: "Chiado, Lisbon",
    country: "Portugal",
    category: "cities",
    geometry: { type: "Point", coordinates: [-9.1427, 38.7108] }
  },
  {
    title: "Surf Villa near Cascais – Lisbon Riviera",
    description: "A beautiful villa in Cascais, the jewel of the Lisbon Riviera, just 30 minutes from Lisbon city centre. Features a private pool, lush garden, and is steps from Cascais' stunning beaches, world-class surf spots, and charming harbour town.",
    image: { filename: "lisbon_cascais_surf_villa", url: "https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/Surf%20Cascais_D.jpg?itok=f4Nn99ef" },
    price: 24900,
    location: "Cascais, Lisbon",
    country: "Portugal",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [-9.4215, 38.6979] }
  },


 
  {
    title: "Trendy Beyoglu Loft – Vibrant Istanbul",
    description: "A hip and stylish loft apartment in Istanbul's vibrant Beyoglu district, the city's cultural heartbeat. Surrounded by rooftop bars, art galleries, the famous Istiklal Street, and the best meyhanes in the city. Perfect for exploring Istanbul's modern side.",
    image: { filename: "istanbul_beyoglu_loft", url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1342742162755077558/original/04aa48df-9606-4c27-9014-2973ba0510b5.jpeg" },
    price: 6640,
    location: "Beyoglu, Istanbul",
    country: "Turkey",
    category: "trending",
    geometry: { type: "Point", coordinates: [28.9784, 41.0369] }
  },
  


  {
    title: "Luxury Lakefront Chalet – Queenstown NZ",
    description: "A breathtaking lakefront chalet in Queenstown with panoramic views of Lake Wakatipu and the Remarkables mountain range. Features a private hot tub on the deck, a cosy fireplace, and easy access to Queenstown's world-class skiing, bungee jumping, and fine dining.",
    image: { filename: "queenstown_lakefront_chalet", url: "https://images.prod.homhero.com.au/750x500/b970c6bb-cced-41de-b6d3-4a4d4c865c4c/listing/192/ba5464ea-1fa1-ef55-8aa7-20add29f2b22.jpg" },
    price: 37350,
    location: "Queenstown, Otago",
    country: "New Zealand",
    category: "mountains",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },
  
  {
    title: "Modern Apartment with Remarkables Views – Queenstown",
    description: "A stylish modern apartment in central Queenstown with floor-to-ceiling windows framing the iconic Remarkables mountain range. Steps from Queenstown's vibrant waterfront, restaurants, and the gondola. Perfect for couples and adventure seekers year-round.",
    image: { filename: "queenstown_remarkables_view_apt", url: "https://images.holidayhouses.co.nz/full/73/5412973.jpg" },
    price: 20700,
    location: "Central Queenstown, New Zealand",
    country: "New Zealand",
    category: "cities",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
  },


  {
    title: "Beachfront Villa on Cancun Hotel Zone",
    description: "A stunning beachfront villa right on the famous Cancun Hotel Zone with direct access to the Caribbean Sea. Features a private pool, lush tropical garden, and panoramic ocean views. Steps from Cancun's best beach clubs, restaurants, and water sports.",
    image: { filename: "cancun_hotel_zone_beachfront", url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/611484180.jpg?k=77b93568bd562b6ba46285e4998519694d83aacc357227f0d65526fe01ce0d19&o=" },
    price: 41500,
    location: "Zona Hotelera, Cancun",
    country: "Mexico",
    category: "beachfront",
    geometry: { type: "Point", coordinates: [-86.7400, 21.1619] }
  },
  
  {
    title: "Colonial Casita in Coyoacan – Mexico City",
    description: "A beautifully restored colonial casita in the charming Coyoacan neighbourhood of Mexico City, close to Frida Kahlo's Blue House. Features a private courtyard, colourful Mexican decor, and easy access to Mexico City's world-class museums, markets, and cuisine.",
    image: { filename: "mexicocity_coyoacan_casita", url: "https://a0.muscache.com/im/pictures/miso/Hosting-52881818/original/ea7bc5ea-3354-4d6a-8422-15b5c5320069.jpeg?" },
    price: 8300,
    location: "Coyoacan, Mexico City",
    country: "Mexico",
    category: "cities",
    geometry: { type: "Point", coordinates: [-99.1617, 19.3467] }
  },

  
  {
    title: "Himalayan View Lodge – Nagarkot, Nepal",
    description: "A serene mountain lodge in Nagarkot perched at 2175m altitude with breathtaking panoramic views of the Himalayan range including Mount Everest on clear days. Features cosy rooms, a log fire, home-cooked Nepali meals, and easy trekking trails from the doorstep.",
    image: { filename: "nepal_nagarkot_himalayan_lodge", url: "https://pix8.agoda.net/property/69585747/0/0884dd3ac03b6805155f74c0f8c40f92.jpeg?" },
    price: 4980,
    location: "Nagarkot, Bhaktapur",
    country: "Nepal",
    category: "mountains",
    geometry: { type: "Point", coordinates: [85.5209, 27.7168] }
  },
 
  

 
  {
    title: "Colonial Tea Estate Bungalow – Ella, Sri Lanka",
    description: "A stunning colonial-era tea estate bungalow perched in the misty hills of Ella, Sri Lanka. Surrounded by lush tea plantations, with panoramic views of Ella Rock and Little Adam's Peak. Features a private garden, home-cooked Sri Lankan meals, and guided tea walks.",
    image: { filename: "srilanka_ella_tea_bungalow", url: "https://assets.architecturaldigest.in/photos/65ba28dec3a573dec421ae50/2:3/w_720,h_1080,c_limit/Featured%20-%201620%20x%201080.png" },
    price: 8300,
    location: "Ella, Badulla District",
    country: "Sri Lanka",
    category: "farm",
    geometry: { type: "Point", coordinates: [81.0466, 6.8667] }
  },
  {
    title: "Beachfront Cabana – Mirissa, Sri Lanka",
    description: "A beautiful beachfront cabana on the golden sands of Mirissa, Sri Lanka's most beloved beach. Wake up to the sound of waves, spot blue whales on morning boat trips, and enjoy fresh seafood at your doorstep. Perfect for couples seeking a tropical paradise.",
    image: { filename: "srilanka_mirissa_beachfront_cabana", url: "https://www.ministryofvillas.com/wp-content/uploads/2020/02/sri-lanka-thebeachhousemirissa-15.jpg" },
    price: 6640,
    location: "Mirissa, Matara District",
    country: "Sri Lanka",
    category: "beachfront",
    geometry: { type: "Point", coordinates: [80.4549, 5.9483] }
  },
  

{
  title: "Beachside Villa – North Goa",
  description: "Sun-drenched villa steps from the legendary Anjuna and Vagator beaches. Enjoy a private plunge pool, tropical gardens, and easy access to Goa's famed beach shacks, flea markets, and nightlife. The perfect base for both beach lounging and cultural exploration of Old Goa's Portuguese heritage.",
  image: { filename: "goa_north_beachside_villa", url: "https://luxurystays.in/villas/villa-oceandeck/oceandeck-1.jpg" },
  price: 9500,
  location: "Anjuna, North Goa",
  country: "India",
  category: "beachfront",
  geometry: { type: "Point", coordinates: [73.7395, 15.5752] }
},

{
  title: "Himalayan Pine Cottage – Manali",
  description: "A cosy cedar-wood cottage nestled in an old-growth pine forest above Manali town. Wake up to snow-dusted Rohtang peaks framed in your window, warm yourself by the fireplace, and set out on trails to Solang Valley or the ancient Hadimba Temple. Ideal for adventure seekers and mountain romantics alike.",
  image: { filename: "manali_pine_cottage_himalaya", url: "https://pix8.agoda.net/hotelImages/963555/0/8e401f153b9859f2cfb4f478a721d266.jpg?" },
  price: 4800,
  location: "Old Manali, Himachal Pradesh",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [77.1892, 32.2396] }
},

{
  title: "Colonial Heritage Homestay – Shimla",
  description: "A lovingly restored British-era bungalow perched on a ridge above Shimla's famous Mall Road, with sweeping views of forested Himalayan ridgelines. Teak floors, arched verandas, and an open fireplace create an atmosphere of old-world charm. Stroll to Christ Church at sunset and return to homemade Himachali meals.",
  image: { filename: "shimla_colonial_heritage_homestay", url: "https://assets.cntraveller.in/photos/6129df599fd022fa9f74f1a2/master/w_1600,c_limit/Ballyhack%20Deodar%20view.jpg" },
  price: 5500,
  location: "Shimla, Himachal Pradesh",
  country: "India",
  category: "castle",
  geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
},

{
  title: "Haveli Suite – Jaipur Old City",
  description: "A beautifully restored 18th-century haveli in the heart of the Pink City, just minutes from the City Palace and Hawa Mahal. Ornate jharokha windows, handpainted frescoes, and a rooftop terrace overlooking a sea of terracotta rooftops make this an authentic Rajasthani experience. Camel safaris and bazaar walks arranged on request.",
  image: { filename: "jaipur_haveli_suite_old_city", url: "https://thenodmag.com/_next/image?url=https%3A%2F%2Fassets.thenodmag.com%2Fwebsite-assets%2FAMP_PH_CNT_17_11zon_68206227e9-omgxghomltodncw-16x9.jpg&w=3840&q=95" },
  price: 7200,
  location: "Old City, Jaipur",
  country: "India",
  category: "castle",
  geometry: { type: "Point", coordinates: [75.8235, 26.9124] }
},

{
  title: "VILEEN Rishikesh – A Wellness Resort by Ganga Kinare",
  description: "A serene wellness resort nestled on the banks of the Ganga in Rishikesh, India. Accommodates guests in luxurious rooms with valley views. Features yoga, meditation, spa, pool, and authentic Pahadi cuisine — a complete mind-body retreat in the Himalayan foothills.",
  image: { filename: "listingimage", url: "https://images.trvl-media.com/lodging/109000000/108910000/108907700/108907608/928abf0e.jpg?" },
  price: 12000,
  location: "Rishikesh, Uttarakhand",
  country: "India",
  category: "trending",
  geometry: { type: "Point", coordinates: [78.48114, 30.0642] }
},

{
  title: "Lake Palace Houseboat – Udaipur",
  description: "A private motor-launch houseboat moored on the shimmering waters of Lake Pichola, with the floodlit Lake Palace gleaming across the water. Silk furnishings, brass lanterns, and a sunset deck create an atmosphere of pure Rajput romance. Sunrise boat rides, palace tours, and rooftop dinners in the City included.",
  image: { filename: "udaipur_lake_palace_houseboat", url: "https://gos3.ibcdn.com/2d612250745a11ed823c0a58a9feac02.jpeg" },
  price: 11000,
  location: "Lake Pichola, Udaipur",
  country: "India",
  category: "trending",
  geometry: { type: "Point", coordinates: [73.6833, 24.5754] }
},

{
  title: "Nilgiri Planter's Bungalow – Ooty",
  description: "A sprawling 1920s colonial planter's bungalow set within a working tea estate at 7,000 ft in the Nilgiris. Rose gardens, a snooker room, and misty valley views straight from a period novel. Take guided tea factory tours, trek to Doddabetta Peak, and enjoy evenings by a roaring fireplace with fresh-brewed estate tea.",
  image: { filename: "ooty_planters_bungalow_nilgiri", url: "https://www.selfroadiez.com/wp-content/uploads/2015/10/Estate-Bungalow2-Devala2.jpg" },
  price: 6800,
  location: "Kotagiri Road, Ooty",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [76.6950, 11.4102] }
},

{
  title: "Coffee Estate Cabin – Coorg",
  description: "A rustic timber cabin hidden among fragrant Arabica coffee and pepper vines in the Scotland of India. Wake to birdsong, explore 500 acres of estate trails, and cool off in a natural rock pool fed by a jungle stream. Evening bonfires, traditional Kodava pork curry dinners, and star-gazing from the hilltop clearing included.",
  image: { filename: "coorg_coffee_estate_cabin", url: "https://www.coorgstays.in/wp-content/uploads/2016/08/Coffee-Estate-Homestay-1.jpg" },
  price: 5200,
  location: "Madikeri, Coorg",
  country: "India",
  category: "camping",
  geometry: { type: "Point", coordinates: [75.7382, 12.4244] }
},

{
  title: "Tea Garden Bungalow – Munnar",
  description: "A secluded colonial bungalow perched at 5,500 ft, with emerald tea terraces cascading in every direction and Anamudi — South India's highest peak — on the horizon. Naturalist-guided treks to spot Nilgiri tahr and shola forest, followed by high tea on the lawn. Fresh estate-grown tea and homemade jam every morning.",
  image: { filename: "munnar_tea_garden_bungalow", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/67/fe/01/view-from-garden.jpg?" },
  price: 6200,
  location: "Devikulam, Munnar",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
},

{
  title: "Monsoon Valley Glamping – Lonavala",
  description: "Luxury safari tents pitched on a lush cliff edge in the Western Ghats, with views straight down a spectacular valley. Three hours from Mumbai and Pune, this is the perfect weekend escape during the monsoon when waterfalls erupt from every hillside. Bonfires, starlit dinners, and guided treks to Tiger's Leap included.",
  image: { filename: "lonavala_monsoon_valley_glamping", url: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1719556419120_88gyk_1000x667.jpg?" },
  price: 4500,
  location: "Lonavala, Pune District",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [73.4077, 18.7481] }
},


{
  title: "Lakeside Kumaon Retreat – Nainital",
  description: "A charming stone cottage perched above Naini Lake, with a private terrace offering sunrise views over the water and the emerald bowl of hills beyond. Boating at dawn, guided birding in Kilbury Forest, and the bustling Mall Road evening promenade are all at your doorstep. An idyllic base for Kumaon hill exploration.",
  image: { filename: "nainital_lakeside_kumaon_retreat", url: "https://pix8.agoda.net/hotelImages/58685094/0/73999fe301063e7872651737a87548af.jpg?" },
  price: 4200,
  location: "Mallital, Nainital",
  country: "India",
  category: "trending",
  geometry: { type: "Point", coordinates: [79.4616, 29.3803] }
},

{
  title: "Mussoorie Ridge Cottage – Queen of Hills",
  description: "A beautifully restored Victorian cottage on the ridge above Mussoorie's Camel's Back Road, with unobstructed views of the Doon Valley below and the eternal snows of Bandarpunch across the valley. Misty morning walks on the promenade, cable car rides, and Landour bazaar explorations await. A true Raj-era hill station escape.",
  image: { filename: "mussoorie_ridge_cottage_doon", url: "https://www.chardhamhotel.in/include/img/hotel-queen-of-hills-mussoorie1.webp" },
  price: 4800,
  location: "Landour, Mussoorie",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [78.0824, 30.4598] }
},

{
  title: "Backwater Houseboat – Alleppey",
  description: "A traditional hand-crafted kettuvallam houseboat drifting through the palm-fringed backwaters of Kerala's Alleppey district. Coir-matted interiors, an onboard chef cooking authentic Kerala seafood, and the hypnotic rhythm of village life on the water's edge. Sunrise canoe trips through narrow canals and overnight anchoring under open skies.",
  image: { filename: "alleppey_backwater_houseboat_kerala", url: "https://www.sreestours.com/wp-content/uploads/2023/05/houseboat-backwaters-kerala-sreestours-870x442-1.jpg" },
  price: 8500,
  location: "Alleppey Backwaters, Kerala",
  country: "India",
  category: "trending",
  geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
},

{
  title: "Desert Camp under Stars – Jaisalmer",
  description: "A luxury Swiss-tent camp pitched among the golden sand dunes of Sam, outside the Golden City. Sunsets that turn the Thar Desert into molten copper, camel safaris, folk music performances around the campfire, and a sky so thick with stars you'll struggle to sleep. A front-row seat to a landscape unchanged for centuries.",
  image: { filename: "jaisalmer_desert_camp_sam_dunes", url: "https://gos3.ibcdn.com/fa6e01da5f3a11edbdb10a58a9feac02.jpg" },
  price: 7800,
  location: "Sam Sand Dunes, Jaisalmer",
  country: "India",
  category: "camping",
  geometry: { type: "Point", coordinates: [70.5500, 26.8900] }
},

{
  title: "Himalayan Mud House – Leh, Ladakh",
  description: "An authentic Ladakhi stone-and-mud homestay in a traditional village in the Indus Valley, surrounded by barley fields and whitewashed chortens at 11,500 ft. Experience apricot-orchard life, visit Thiksey and Hemis monasteries, and gaze at the night sky unobscured by any light pollution. A rare, grounding encounter with Himalayan culture.",
  image: { filename: "leh_ladakh_himalayan_mud_house", url: "https://assets.architecturaldigest.in/photos/64ef1fb91e0de64ea323f615/master/w_1600%2Cc_limit/FrontGardens.jpg" },
  price: 3500,
  location: "Stakna Village, Leh",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
},

{
  title: "Dharamkot Forest Cabin – McLeod Ganj",
  description: "A secluded wooden cabin above Dharamshala in the Dhauladhar foothills, just minutes from the Dalai Lama's temple complex and McLeod Ganj's Tibetan quarter. Himalayan sunrises from the deck, meditation sessions at local monasteries, and trekking to Triund meadow are daily rituals here. Tibetan thukpa served by a log fire.",
  image: { filename: "dharamshala_forest_cabin_mcleodganj", url: "https://images-luxe.outlookindia.com/2026/05/02151336/McLeodGanj_luxe_3_20260502.jpg" },
  price: 3200,
  location: "Dharamkot, Dharamshala",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [76.3234, 32.2460] }
},

{
  title: "French Quarter Villa – Pondicherry",
  description: "A beautifully restored Indo-French villa in Pondicherry's UNESCO-nominated French Quarter, just blocks from the seafront promenade. Yellow-washed walls, bougainvillea-draped courtyards, and an alfresco breakfast table under a neem tree. Cycling the grid of colonial streets, sunrise yoga at the Sri Aurobindo Ashram, and exceptional French-Tamil cuisine on the doorstep.",
  image: { filename: "pondicherry_french_quarter_villa", url: "https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/p1160492_orig.jpg" },
  price: 6500,
  location: "White Town, Pondicherry",
  country: "India",
  category: "castle",
  geometry: { type: "Point", coordinates: [79.8300, 11.9340] }
},

{
  title: "Strawberry Farm Cottage – Mahabaleshwar",
  description: "A cheerful hilltop cottage nestled within a working strawberry and mulberry farm in the Western Ghats. Crisp highland air, panoramic valley views from Wilson's Point, horse rides through dense forests, and evening hot chocolate with fresh-picked strawberries. An ideal family retreat during the Maharashtra summer months.",
  image: { filename: "mahabaleshwar_strawberry_farm_cottage", url: "https://r1imghtlak.ibcdn.com/65c5df0d-0f37-4ec8-aea6-0aef6a938c5b.jpeg" },
  price: 4600,
  location: "Panchgani Road, Mahabaleshwar",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [73.6574, 17.9240] }
},

{
  title: "Riverside Hippie Hut – Kasol",
  description: "A cedar-wood chalet on the banks of the turquoise Parvati River, in Himachal Pradesh's beloved backpacker valley. Surrounded by deodar forests, this is a base for trekking to Kheerganga hot springs, Tosh, and Malana — one of the world's oldest democracies. Firelit evenings, Israeli breakfasts at the local cafes, and some of the Himalayas' cleanest air.",
  image: { filename: "kasol_riverside_chalet_parvati", url: "https://r1imghtlak.ibcdn.com/9e08a4e6-dab4-441f-9468-8c31c8419082.jpg" },
  price: 2800,
  location: "Kasol, Kullu District",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [77.3140, 32.0100] }
},

{
  title: "Tea Planter's Villa – Darjeeling",
  description: "A grand Victorian-era tea planter's villa set within a working Darjeeling first-flush estate, with a picture-perfect view of Kanchenjunga when the clouds part at dawn. Join the morning plucking rounds, visit the estate factory, and sip a perfect cup with freshly-baked chhurpi crackers on the wrap-around veranda. The iconic Toy Train station is a short walk.",
  image: { filename: "darjeeling_tea_planters_villa", url: "https://eastindiatour.com/wp-content/uploads/2024/03/Glenburn-Tea-Estate-darjeeling.jpg" },
  price: 7500,
  location: "Happy Valley Estate, Darjeeling",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [88.2636, 27.0360] }
},



{
  title: "Ghats Heritage Guesthouse – Varanasi",
  description: "A centuries-old haveli right on the sacred Assi Ghat, where Brahmin priests conduct evening Ganga Aarti below your balcony. Narrow stone corridors, terracotta floors, and a rooftop overlooking the river's eternal procession of pilgrims and rowing boats. Sunrise boat rides through the ghats, Banarasi silk workshops, and evening classical music sessions arranged.",
  image: { filename: "varanasi_ghats_heritage_guesthouse", url: "https://www.varanasihotels.org/data/Imgs/OriginalPhoto/16496/1649634/1649634557/img-palette-heritage-scindia-ghat-varanasi-3.JPEG" },
  price: 4000,
  location: "Assi Ghat, Varanasi",
  country: "India",
  category: "castle",
  geometry: { type: "Point", coordinates: [83.0104, 25.2677] }
},

{
  title: "Island Jungle Cottage – Havelock, Andaman",
  description: "A stilted beach cottage fringed by sacred forest on Havelock Island, two minutes' walk from Radhanagar Beach — Asia's finest. Snorkel through coral gardens bursting with colour, kayak to deserted shores, and watch bioluminescent plankton light up the shallows after dark. Completely off-grid, solar-powered, and gloriously isolated.",
  image: { filename: "andaman_havelock_island_jungle_cottage", url: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_133,w_1000,h_562,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/barefoot-at-havelock/resort-wooden-villa" },
  price: 8800,
  location: "Radhanagar, Havelock Island",
  country: "India",
  category: "beachfront",
  geometry: { type: "Point", coordinates: [92.9432, 11.9813] }
},

{
  title: "Misty Hilltop Estate – Chikmagalur",
  description: "A secluded planter's bungalow on a single-estate coffee farm deep in the Western Ghats, where the mornings smell of Arabica and dew-soaked cardamom. Trek to Mullayanagiri — Karnataka's highest peak — spot wild elephants at Bhadra Wildlife Sanctuary, and end each day with a pour-over of beans picked that very morning. Pure Western Ghats magic.",
  image: { filename: "chikmagalur_coffee_estate_hilltop", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/fd/bc/30/misty-heights-homestay.jpg?" },
  price: 5800,
  location: "Aldur, Chikmagalur",
  country: "India",
  category: "mountains",
  geometry: { type: "Point", coordinates: [75.7720, 13.3161] }
}
  ];
module.exports = { data: sampleListings };