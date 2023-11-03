const readlineSync = require('readline-sync');

function startGame() {
  console.log("Je wordt wakker en merkt dat je je in een vreemde omgeving bevindt. Alles om je heen is donker, en je hebt geen idee hoe je hier terecht bent gekomen.");
  console.log("Je hoort geluiden in de verte, en het lijkt erop dat je niet alleen bent. Wat wil je doen?");
  console.log("1. Probeer te bewegen in de richting van de geluiden.");
  console.log("2. Blijf stil liggen en probeer te begrijpen waar je bent.");

  const answer = getUserInput();

  if (answer === '1') {
    exploreEnvironment();
  } else if (answer === '2') {
    tryToUnderstand();
  } else {
    invalidInput();
  }
}

function exploreEnvironment() {
  console.log("Voorzichtig sta je op en probeert je een weg te banen door de duisternis. Na een tijdje kom je aan bij een verlichte ruimte.");
  console.log("In deze kamer zie je vreemde machines en knipperende schermen. Het lijkt wel een laboratorium.");
  console.log("Wat wil je doen?");
  console.log("1. Onderzoek de machines en schermen.");
  console.log("2. Verlaat de kamer en ga verder op verkenning.");

  const answer = getUserInput();

  if (answer === '1') {
    examineLab();
  } else if (answer === '2') {
    continueExploring();
  } else {
    invalidInput();
  }
}

function tryToUnderstand() {
  console.log("Je probeert te luisteren naar de geluiden om je heen en merkt op dat het klinkt als een druk laboratorium.");
  console.log("Misschien ben je in een experiment beland. Wat wil je doen?");
  console.log("1. Wachten om te zien of er iemand komt.");
  console.log("2. Ga op verkenning in de duisternis.");

  const answer = getUserInput();

  if (answer === '1') {
    waitForHelp();
  } else if (answer === '2') {
    exploreEnvironment();
  } else {
    invalidInput();
  }
}

function examineLab() {
  console.log("Terwijl je de machines en schermen onderzoekt, hoor je voetstappen achter je. Je draait je om en ziet een wetenschapper in een witte jas.");
  console.log("Hij lijkt verbaasd dat je hier bent en stelt zich voor als Dr. Alexander. Hij legt uit dat je deelneemt aan een experiment om tijdreizen te testen.");
  console.log("Wat wil je doen?");
  console.log("1. Geloof Dr. Alexander en stel vragen over het experiment.");
  console.log("2. Probeer te ontsnappen uit het laboratorium.");

  const answer = getUserInput();

  if (answer === '1') {
    askAboutTimeTravelExperiment();
  } else if (answer === '2') {
    escapeFromLab();
  } else {
    invalidInput();
  }
}

function continueExploring() {
  console.log("Je verlaat de verlichte kamer en gaat verder met je verkenningstocht. Terwijl je door de donkere gangen sluipt, kom je een mysterieuze deur tegen.");
  console.log("Wat wil je doen?");
  console.log("1. Probeer de deur te openen.");
  console.log("2. Keer terug naar de verlichte kamer.");

  const answer = getUserInput();

  if (answer === '1') {
    openMysteriousDoor();
  } else if (answer === '2') {
    exploreEnvironment();
  } else {
    invalidInput();
  }
}

function waitForHelp() {
  console.log("Je besluit te wachten in de hoop dat iemand je komt redden. Na enige tijd komt Dr. Alexander terug met medische apparatuur.");
  console.log("Hij zegt dat het experiment fout is gegaan en dat ze je zullen helpen terwijl ze proberen de situatie te herstellen.");
  console.log("Wat wil je doen?");
  console.log("1. Vertrouw Dr. Alexander en laat je behandelen.");
  console.log("2. Blijf argwanend en probeer te ontsnappen.");

  const answer = getUserInput();

  if (answer === '1') {
    trustDoctorAndReceiveTreatment();
  } else if (answer === '2') {
    escapeFromLab();
  } else {
    invalidInput();
  }
}

function askAboutTimeTravelExperiment() {
  console.log("Je begint Dr. Alexander vragen te stellen over het tijdreisexperiment en probeert meer te weten te komen over hoe je hier bent beland.");
  console.log("Hij legt uit dat het experiment niet helemaal is verlopen zoals gepland, en dat je nu vastzit in een andere tijdlijn.");
  console.log("Wat wil je doen?");
  console.log("1. Werk samen met Dr. Alexander om een oplossing te vinden.");
  console.log("2. Probeer op eigen kracht een manier te vinden om naar huis terug te keren.");

  const answer = getUserInput();

  if (answer === '1') {
    cooperateWithDoctor();
  } else if (answer === '2') {
    findYourOwnWay();
  } else {
    invalidInput();
  }
}

function escapeFromLab() {
  console.log("Je probeert te ontsnappen uit het laboratorium. Terwijl je door de gangen rent, kom je verschillende bewakers en camera's tegen.");
  console.log("Het lijkt erop dat ze je niet willen laten gaan. Wat wil je doen?");
  console.log("1. Ga door met je ontsnappingspoging en vecht tegen de bewakers.");
  console.log("2. Keer terug naar Dr. Alexander en vraag om hulp bij je ontsnapping.");

  const answer = getUserInput();

  if (answer === '1') {
    fightGuards();
  } else if (answer === '2') {
    seekHelpFromDoctor();
  } else {
    invalidInput();
  }
}

function openMysteriousDoor() {
  console.log("Je probeert de mysterieuze deur te openen en ontdekt een geheime kamer met allerlei technologische apparatuur.");
  console.log("Dit zou weleens de sleutel kunnen zijn tot je ontsnapping. Wat wil je doen?");
  console.log("1. Onderzoek de technologische apparatuur.");
  console.log("2. Sluit de deur en keer terug naar de verlichte kamer.");

  const answer = getUserInput();

  if (answer === '1') {
    investigateTechnology();
  } else if (answer === '2') {
    exploreEnvironment();
  } else {
    invalidInput();
  }
}

function trustDoctorAndReceiveTreatment() {
  console.log("Je besluit Dr. Alexander te vertrouwen en laat je behandelen. Hij vertelt je dat ze bezig zijn met het herstellen van het tijdreisexperiment.");
  console.log("Na verloop van tijd word je teruggebracht naar je eigen tijdlijn en bevind je je weer in je vertrouwde omgeving.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur overleefd!");

  playAgain();
}

function cooperateWithDoctor() {
  console.log("Je besluit samen te werken met Dr. Alexander om een oplossing te vinden voor het tijdreisprobleem.");
  console.log("Samen werken jullie aan het herstellen van het experiment en na verloop van tijd word je veilig teruggebracht naar je eigen tijdlijn.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur overleefd!");

  playAgain();
}

function findYourOwnWay() {
  console.log("Je gaat op zoek naar een manier om op eigen kracht terug te keren naar je eigen tijdlijn.");
  console.log("Na veel avonturen en obstakels lukt het je eindelijk om terug te keren naar je eigen tijdlijn.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur overleefd!");

  playAgain();
}

function fightGuards() {
  console.log("Je probeert te vechten tegen de bewakers, maar ze overmeesteren je en brengen je terug naar de verlichte kamer.");
  console.log("Je hebt gefaald in je ontsnappingspoging. Wat wil je nu doen?");
  console.log("1. Probeer opnieuw te ontsnappen.");
  console.log("2. Werk samen met Dr. Alexander om een oplossing te vinden.");

  const answer = getUserInput();

  if (answer === '1') {
    escapeFromLab();
  } else if (answer === '2') {
    seekHelpFromDoctor();
  } else {
    invalidInput();
  }
}

function seekHelpFromDoctor() {
  console.log("Je zoekt hulp bij Dr. Alexander en vraagt om zijn hulp bij je ontsnapping.");
  console.log("Hij stemt ermee in om je te helpen en na een moeilijke ontsnappingspoging slagen jullie erin om te ontsnappen uit het laboratorium.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur overleefd!");

  playAgain();
}

function investigateTechnology() {
  console.log("Terwijl je de technologische apparatuur onderzoekt, ontdek je dat dit de apparatuur is waarmee ze tijdreizen uitvoeren.");
  console.log("Je besluit het te activeren en terug te keren naar je eigen tijdlijn.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur overleefd!");

  playAgain();
}

function goodEnding() {
  console.log("Na al je avonturen en uitdagingen, slaag je erin om veilig terug te keren naar je eigen tijdlijn.");
  console.log("Je bent opgelucht en beseft dat je dit onvergetelijke avontuur hebt overleefd.");
  console.log("Gefeliciteerd, je hebt de tijdreisavontuur met een goed einde afgerond!");

  playAgain();
}

function badEnding() {
  console.log("Helaas is het je niet gelukt om te ontsnappen, en je blijft gevangen in deze vreemde tijdlijn.");
  console.log("Je hebt gefaald in je pogingen om terug te keren naar je eigen tijd.");
  console.log("Bedankt voor het spelen van het avontuur. Misschien kun je het de volgende keer opnieuw proberen.");

  playAgain();
}

function playAgain() {
  console.log("Wil je het avontuur opnieuw spelen?");
  console.log("1. Ja");
  console.log("2. Nee");

  const answer = getUserInput();

  if (answer === '1') {
    startGame();
  } else {
    console.log("Bedankt voor het spelen van het avontuur. Tot de volgende keer!");
  }
}

function getUserInput() {
  let answer = readlineSync.question('Welke keuze maak je? (1 / 2): ');
  return answer;
}

startGame();
