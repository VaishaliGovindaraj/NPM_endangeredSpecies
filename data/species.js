function EndangeredSpecies(groupName, name, scientificName, lifeSpan, food, description, length, weight, place, status, threats, funFact, src, group, groupLink) {
        this.groupName = groupName;
        this.name = name;
        this.scientificName = scientificName;
        this.lifeSpan = lifeSpan;
        this.food = food;
        this.description = description;
        this.length = length;
        this.weight = weight;
        this.place = place;
        this.status = status;
        this.threats = threats;
        this.funFact = funFact;
        this.src = src;
        this.group = group;
        this.groupLink = groupLink;
    }

const endangeredSpeciesList = [
    new EndangeredSpecies(
        "Primates",
        "Mountain Gorilla",
        "Gorilla beringei beringei",
        "35-40 years",
        "Leaves, stems, fruits, bark",
        "Mountain gorillas are a subspecies of the eastern gorilla, known for their thick fur and high-altitude habitat.",
        "1.4-1.8 meters (standing)",
        "140-200 kg (males), 70-90 kg (females)",
        "Virunga Mountains, Central Africa",
        "Endangered",
        ["Poaching", "Deforestation", "Disease"],
        "Mountain gorillas share about 98% of their DNA with humans.",
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mountain_gorilla_%28Gorilla_beringei_beringei%29_silverback.jpg",
        "Primates",
        "/primates"
    ),
    new EndangeredSpecies(
        "Primates",
        "Sumatran Orangutan",
        "Pongo abelii",
        "30-40 years",
        "Fruits, leaves, bark, insects",
        "The Sumatran orangutan is a critically endangered species native to the island of Sumatra in Indonesia. They are known for their intelligence and reddish-brown fur.",
        "1.3-1.5 meters",
        "30-80 kg",
        "Sumatra, Indonesia",
        "Critically Endangered",
        ["Habitat destruction", "Poaching", "Illegal pet trade"],
        "Orangutans are known to use tools, like using sticks to extract termites from tree trunks.",
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sumatran_Orangutan_%28Pongo_abelii%29.jpg",
        "Primates",
        "/primates"
    ),
    new EndangeredSpecies(
        "Primates",
        "Javan Rhinoceros",
        "Rhinoceros sondaicus",
        "30-40 years",
        "Grasses, shrubs, fruits",
        "Native to the island of Java in Indonesia, this species of rhinoceros is extremely endangered with fewer than 100 individuals left in the wild.",
        "3.0-3.5 meters",
        "900-1,400 kg",
        "Ujung Kulon National Park, Java, Indonesia",
        "Critically Endangered",
        ["Poaching", "Habitat loss", "Human-wildlife conflict"],
        "The Javan rhinoceros is the rarest of all living rhinoceros species.",
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Javan_Rhino_in_Ujung_Kulon.jpg",
        "Primates",
        "/primates"
    ),
    new EndangeredSpecies(
        "Big Cats",
        "Amur Leopard",
        "Panthera pardus orientalis",
        "10-15 years (wild), 20 years (captivity)",
        "Deer, wild boar, hares",
        "The Amur leopard is one of the rarest big cats, found in the Russian Far East and northeastern China.",
        "1.2-1.5 meters (body) + 90 cm (tail)",
        "32-48 kg",
        "Russia, China",
        "Critically Endangered",
        ["Poaching", "Habitat destruction", "Human-wildlife conflict"],
        "Each Amur leopard has a unique pattern of spots, like a human fingerprint.",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Amur_leopard.jpg",
        "Big Cats",
        "/big-cats"
    ),
    new EndangeredSpecies(
        "Big Cats",
        "Siberian Tiger",
        "Panthera tigris altaica",
        "15-20 years",
        "Deer, boar, smaller mammals",
        "The Siberian tiger is a subspecies of tiger found in the forests of Russia and China, and it is the largest of all tiger subspecies.",
        "2.7-3.3 meters",
        "180-306 kg",
        "Russia, China",
        "Endangered",
        ["Poaching", "Habitat loss", "Human-wildlife conflict"],
        "Siberian tigers have large paws to help them move silently through the snow.",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Siberian_tiger_%28Panthera_tigris_altaica%29.jpg",
        "Big Cats",
        "/big-cats"
    ),
    new EndangeredSpecies(
        "Big Cats",
        "Cheetah",
        "Acinonyx jubatus",
        "10-12 years",
        "Antelope, gazelles, wildebeest calves",
        "Cheetahs are the fastest land animals, capable of reaching speeds of up to 75 miles per hour in short bursts.",
        "1.1-1.5 meters",
        "40-65 kg",
        "Sub-Saharan Africa, Iran",
        "Vulnerable",
        ["Habitat loss", "Poaching", "Human-wildlife conflict"],
        "Cheetahs are the fastest land mammals, able to accelerate from 0 to 60 mph in just 3.4 seconds.",
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Cheetah%2C_George.jpg",
        "Big Cats",
        "/big-cats"
    ),
    new EndangeredSpecies(
        "Marine Mammals",
        "Blue Whale",
        "Balaenoptera musculus",
        "70-90 years",
        "Krill, small fish",
        "The blue whale is the largest animal ever known to have lived on Earth, reaching up to 30 meters in length.",
        "24-30 meters",
        "100-200 tons",
        "Oceans worldwide",
        "Endangered",
        ["Ship collisions", "Climate change", "Noise pollution"],
        "A blue whale's heart can weigh as much as a small car.",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bluewhale52.jpg/1024px-Bluewhale52.jpg",
        "Marine Mammals",
        "/marine-mammals"
    ),
    new EndangeredSpecies(
        "Marine Mammals",
        "Humpback Whale",
        "Megaptera novaeangliae",
        "45-50 years",
        "Krill, plankton, small fish",
        "Humpback whales are known for their long migrations and haunting songs. They are often found in coastal waters.",
        "12-16 meters",
        "25-30 tons",
        "Oceans worldwide",
        "Least Concern",
        ["Hunting", "Ship strikes", "Climate change"],
        "Humpback whales are famous for their complex songs, which can last for up to 20 minutes.",
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Humpback_Whale_Comparison.jpg",
        "Marine Mammals",
        "/marine-mammals"
    ),
    new EndangeredSpecies(
        "Marine Mammals",
        "Vaquita",
        "Phocoena sinus",
        "20-25 years",
        "Fish, shrimp",
        "The vaquita is a critically endangered species of porpoise found in the northern part of the Gulf of California.",
        "1.5-1.6 meters",
        "50-55 kg",
        "Gulf of California, Mexico",
        "Critically Endangered",
        ["Bycatch in illegal fishing nets", "Pollution", "Habitat degradation"],
        "The vaquita is the most endangered marine mammal, with fewer than 10 individuals remaining.",
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Vaquita_marina.jpg",
        "Marine Mammals",
        "/marine-mammals"
    )
];

export const primatesArray = endangeredSpeciesList.filter(item => item.groupName.toLowerCase() === "primates");
export const bigCatsArray = endangeredSpeciesList.filter(item => item.groupName.toLowerCase() === "big cats");
export const marineMammalsArray = endangeredSpeciesList.filter(item => item.groupName.toLowerCase() === "marine mammals");

export const allAnimalsArray = [...primatesArray,...bigCatsArray,...marineMammalsArray];
