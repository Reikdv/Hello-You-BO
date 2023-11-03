const readlineSync = require('readline-sync');

function startGame() {
  console.log("Je ontwaakt in een bos en ziet een groep middeleeuwse ridders naderen. Wat doe je?");
  console.log("A. Verstop je in de struiken.");
  console.log("B. Benader de ridders om hulp te vragen.");

  const answer = getUserInput();

  if (answer === 'A') {
    hideInTheBushes();
  } else if (answer === 'B') {
    approachKnightsForHelp();
  } else {
    invalidInput();
  }
}

function hideInTheBushes() {
  console.log("Je verstopt je in de struiken terwijl de ridders passeren. Ze lijken je niet op te merken en verdwijnen in de verte.");
  console.log("Wat is je volgende stap?");
  console.log("A. Verken het bos op zoek naar aanwijzingen.");
  console.log("B. Volg de ridders om te zien waar ze heengaan.");

  const answer = getUserInput();

  if (answer === 'A') {
    exploreTheForest();
  } else if (answer === 'B') {
    followTheKnights();
  } else {
    invalidInput();
  }
}

function approachKnightsForHelp() {
  console.log("Je benadert de ridders en vraagt om hun hulp. Ze negeren je echter en verdwijnen in de verte.");
  console.log("Wat is je volgende stap?");
  console.log("A. Verken het bos op zoek naar aanwijzingen.");
  console.log("B. Volg de ridders om te zien waar ze heengaan.");

  const answer = getUserInput();

  if (answer === 'A') {
    exploreTheForest();
  } else if (answer === 'B') {
    followTheKnights();
  } else {
    invalidInput();
  }
}

function exploreTheForest() {
  console.log("Terwijl je door het bos loopt, ontdek je een oud en verlaten huisje. Binnen vind je een kaart die leidt naar een nabijgelegen dorp.");
  console.log("Wat wil je doen?");
  console.log("A. Volg de kaart naar het dorp.");
  console.log("B. Ga terug naar de bosrand en volg de ridders.");

  const answer = getUserInput();

  if (answer === 'A') {
    followTheMapToVillage();
  } else if (answer === 'B') {
    followTheKnights();
  } else {
    invalidInput();
  }
}

function followTheKnights() {
  console.log("Je besluit de ridders te volgen om te zien waar ze heengaan. Je komt uiteindelijk aan in een middeleeuws dorp.");
  console.log("Hoe benader je de inwoners van het dorp?");
  console.log("A. Verberg je en observeer ze van een afstand.");
  console.log("B. Ga rechtstreeks naar het dorp en vraag om hulp.");

  const answer = getUserInput();

  if (answer === 'A') {
    observeTheVillage();
  } else if (answer === 'B') {
    enterTheVillage();
  } else {
    invalidInput();
  }
}

function followTheMapToVillage() {
  console.log("Je volgt de kaart naar het nabijgelegen dorp. De inwoners verwelkomen je vriendelijk en bieden je een maaltijd aan.");
  console.log("Accepteer je hun gastvrijheid?");
  console.log("A. Ja, ga mee naar het dorp.");
  console.log("B. Nee, bedank ze vriendelijk en ga verder.");

  const answer = getUserInput();

  if (answer === 'A') {
    enterTheVillage();
  } else if (answer === 'B') {
    continueExploring();
  } else {
    invalidInput();
  }
}

function observeTheVillage() {
  console.log("Je besluit je te verbergen en observeert de inwoners van het dorp van een afstand. Ze lijken vredig te leven in deze tijd.");
  console.log("Wat wil je nu doen?");
  console.log("A. Blijf observeren en leer meer over de middeleeuwse samenleving.");
  console.log("B. Verlaat je schuilplaats en benader de dorpelingen.");

  const answer = getUserInput();

  if (answer === 'A') {
    observeMore();
  } else if (answer === 'B') {
    enterTheVillage();
  } else {
    invalidInput();
  }
}

function enterTheVillage() {
  console.log("Je wordt opgemerkt door de dorpelingen en ze nodigen je uit voor een maaltijd. Accepteer je?");
  console.log("A. Ja, ga mee naar het dorp.");
  console.log("B. Nee, bedank ze vriendelijk en ga verder.");

  const answer = getUserInput();

  if (answer === 'A') {
    enterTheVillage();
  } else if (answer === 'B') {
    continueExploring();
  } else {
    invalidInput();
  }
}

function continueExploring() {
  console.log("Je bedankt de dorpelingen voor hun aanbod, maar besluit verder te gaan met je verkenningstocht.");
  console.log("Terwijl je door het dorp loopt, hoor je geruchten over een plaatselijke smid die misschien je tijdmachine kan repareren.");
  console.log("Ga je naar de smid?");
  console.log("A. Ja, vraag hem om hulp.");
  console.log("B. Nee, zoek naar andere oplossingen.");

  const answer = getUserInput();

  if (answer === 'A') {
    visitTheBlacksmith();
  } else if (answer === 'B') {
    lookForOtherSolutions();
  } else {
    invalidInput();
  }
}

function observeMore() {
  console.log("Je blijft observeren en leert steeds meer over het middeleeuwse leven. De mensen zijn vriendelijk en behulpzaam.");
  console.log("Wat wil je nu doen?");
  console.log("A. Blijf observeren en leren.");
  console.log("B. Benader de dorpelingen en maak contact.");

  const answer = getUserInput();

  if (answer === 'A') {
    keepObserving();
  } else if (answer === 'B') {
    enterTheVillage();
  } else {
    invalidInput();
  }
}

function keepObserving() {
  console.log("Je blijft observeren en leert veel over de middeleeuwse samenleving. Je wordt een deel van de gemeenschap en leidt een vredig leven.");
  console.log("Gefeliciteerd, je past je aan aan de tijdsperiode en leeft een gelukkig leven in de middeleeuwen.");
  endGame(3);
}

function visitTheBlacksmith() {
  console.log("Je besluit naar de smid te gaan en vraagt hem om hulp bij het repareren van je tijdmachine. Hij lijkt bereid om je te helpen, maar hij heeft zeldzame materialen nodig.");
  console.log("Ga je deze materialen voor hem zoeken?");
  console.log("A. Ja, ga op zoek naar de materialen.");
  console.log("B. Nee, probeer een andere manier te vinden om je tijdmachine te repareren.");

  const answer = getUserInput();

  if (answer === 'A') {
    gatherMaterialsForSmith();
  } else if (answer === 'B') {
    lookForOtherSolutions();
  } else {
    invalidInput();
  }
}

function lookForOtherSolutions() {
  console.log("Je besluit op zoek te gaan naar andere oplossingen om je tijdmachine te repareren.");
  console.log("Terwijl je verder zoekt, kom je een mysterieuze alchemist tegen. Hij beweert dat hij je kan helpen terug te keren naar je eigen tijd, maar hij heeft een andere tijdmachine nodig.");
  console.log("Wat beslis je?");
  console.log("A. Ga akkoord en help de alchemist met zijn tijdmachine.");
  console.log("B. Blijf bij het repareren van je eigen tijdmachine.");

  const answer = getUserInput();

  if (answer === 'A') {
    helpTheAlchemist();
  } else if (answer === 'B') {
    stayWithBlacksmith();
  } else {
    invalidInput();
  }
}

function gatherMaterialsForSmith() {
  console.log("Je hebt de materialen verzameld en de smid begint met de reparatiewerkzaamheden aan je tijdmachine.");
  console.log("Terwijl je wacht, word je benaderd door een mysterieuze alchemist. Wat doe je?");
  console.log("A. Praat met de alchemist en hoor wat hij te zeggen heeft.");
  console.log("B. Negeer de alchemist en blijf bij de smid.");

  const answer = getUserInput();

  if (answer === 'A') {
    talkToAlchemist();
  } else if (answer === 'B') {
    ignoreTheAlchemist();
  } else {
    invalidInput();
  }
}

function stayWithBlacksmith() {
  console.log("Je besluit om bij de smid te blijven terwijl hij aan je tijdmachine werkt. Na enige tijd slaagt hij erin om je tijdmachine te repareren.");
  console.log("Je activeert de tijdmachine en reist terug naar je eigen tijd. Maar er zijn problemen en je belandt in een dystopische toekomst. Wat doe je?");
  console.log("A. Probeer terug te keren naar de middeleeuwen.");
  console.log("B. Verken de dystopische toekomst om te begrijpen wat er is gebeurd.");

  const answer = getUserInput();

  if (answer === 'A') {
    tryToReturnToMedieval();
  } else if (answer === 'B') {
    exploreTheDystopianFuture();
  } else {
    invalidInput();
  }
}

function talkToAlchemist() {
  console.log("Je besluit met de alchemist te praten en hoort wat hij te zeggen heeft. Hij beweert dat hij je kan helpen terug te keren naar je eigen tijd, maar hij heeft een andere tijdmachine nodig.");
  console.log("Wat beslis je?");
  console.log("A. Ga akkoord en help de alchemist met zijn tijdmachine.");
  console.log("B. Blijf bij het repareren van je eigen tijdmachine.");

  const answer = getUserInput();

  if (answer === 'A') {
    helpTheAlchemist();
  } else if (answer === 'B') {
    stayWithBlacksmith();
  } else {
    invalidInput();
  }
}

function helpTheAlchemist() {
  console.log("Je besluit de alchemist te helpen met zijn tijdmachine. Samen werken jullie aan de tijdmachine en slagen erin om deze te activeren.");
  console.log("Nu moet je kiezen tussen de twee tijdmachines. Welke kies je?");
  console.log("A. Gebruik de tijdmachine van de smid.");
  console.log("B. Gebruik de tijdmachine van de alchemist.");

  const answer = getUserInput();

  if (answer === 'A') {
    useSmithsTimeMachine();
  } else if (answer === 'B') {
    useAlchemistsTimeMachine();
  } else {
    invalidInput();
  }
}

function useSmithsTimeMachine() {
  console.log("Je gebruikt de tijdmachine van de smid en reist terug naar je eigen tijd. Deze keer lukt het en je bent veilig terug in je eigen tijd.");
  console.log("Gefeliciteerd, je hebt je avontuur in de middeleeuwen overleefd en keert terug als een beroemde tijdreiziger.");
  endGame(1);
}

function useAlchemistsTimeMachine() {
  console.log("Je besluit de tijdmachine van de alchemist te gebruiken en activeert deze. Maar er zijn problemen en je belandt in een dystopische toekomst.");
  console.log("Wat doe je?");
  console.log("A. Probeer terug te keren naar de middeleeuwen.");
  console.log("B. Verken de dystopische toekomst om te begrijpen wat er is gebeurd.");

  const answer = getUserInput();

  if (answer === 'A') {
    tryToReturnToMedieval();
  } else if (answer === 'B') {
    exploreTheDystopianFuture();
  } else {
    invalidInput();
  }
}

function tryToReturnToMedieval() {
  console.log("Je probeert terug te keren naar de middeleeuwen en slaagt hierin. Je bevindt je weer in het middeleeuwse dorp.");
  console.log("Wat is je volgende stap?");
  console.log("A. Herstel je tijdmachine en keer terug naar je eigen tijd.");
  console.log("B. Blijf en vecht met het verzet.");

  const answer = getUserInput();

  if (answer === 'A') {
    repairYourTimeMachine();
  } else   if (answer === 'B') {
    stayAndFightWithResistance();
  } else {
    invalidInput();
  }
}

function exploreTheDystopianFuture() {
  console.log("Je besluit de dystopische toekomst te verkennen om te begrijpen wat er is gebeurd.");
  console.log("Na enige tijd kom je een groep verzetsstrijders tegen. Sluit je je bij hen aan?");
  console.log("A. Ja, sluit je aan bij het verzet.");
  console.log("B. Nee, probeer een andere manier te vinden om naar je eigen tijd terug te keren.");

  const answer = getUserInput();

  if (answer === 'A') {
    joinTheResistance();
  } else if (answer === 'B') {
    findAnotherWayBack();
  } else {
    invalidInput();
  }
}

function joinTheResistance() {
  console.log("Je sluit je aan bij het verzet en helpt hen bij hun strijd om de dystopische toekomst te verbeteren.");
  console.log("Na enige tijd ontdek je een manier om terug te reizen naar de middeleeuwen. Wat beslis je?");
  console.log("A. Keer terug naar de middeleeuwen.");
  console.log("B. Blijf en vecht met het verzet.");

  const answer = getUserInput();

  if (answer === 'A') {
    returnToMedieval();
  } else if (answer === 'B') {
    stayAndFightWithResistance();
  } else {
    invalidInput();
  }
}

function returnToMedieval() {
  console.log("Je keert terug naar de middeleeuwen en besluit je tijdmachine te herstellen en opnieuw te proberen naar je eigen tijd terug te keren.");
  console.log("Lukt het deze keer?");
  console.log("A. Ja, je keert terug naar je eigen tijd.");
  console.log("B. Nee, je tijdmachine is nog steeds defect.");

  const answer = getUserInput();

  if (answer === 'A') {
    repairYourTimeMachine();
  } else if (answer === 'B') {
    stayInMedievalEra();
  } else {
    invalidInput();
  }
}

function stayAndFightWithResistance() {
  console.log("Je besluit te blijven en te vechten met het verzet om de dystopische toekomst te verbeteren.");
  console.log("Dankzij jullie inspanningen verbetert de situatie in de dystopische toekomst langzaam maar zeker.");
  console.log("Je blijft in de toekomst om te helpen bij de wederopbouw van de samenleving.");
  endGame(2);
}

function findAnotherWayBack() {
  console.log("Je besluit een andere manier te vinden om naar je eigen tijd terug te keren.");
  console.log("Na veel onderzoek en experimenten vind je een alternatieve methode om terug te reizen naar je eigen tijd.");
  console.log("Je activeert de nieuwe tijdmachine en keert veilig terug naar je eigen tijd.");
  console.log("Gefeliciteerd, je hebt een andere manier gevonden om naar huis te gaan.");
  endGame(1);
}

function repairYourTimeMachine() {
  console.log("Je herstelt je tijdmachine en probeert opnieuw terug te keren naar je eigen tijd.");
  console.log("Deze keer lukt het en je keert veilig terug naar je eigen tijd.");
  console.log("Gefeliciteerd, je bent terug in je eigen tijd en vertelt iedereen over je avontuur in de middeleeuwen.");
  console.log("Je wordt een beroemde tijdreiziger.");
  endGame(1);
}

function stayInMedievalEra() {
  console.log("Je tijdmachine is nog steeds defect, maar je hebt nieuwe vrienden en een plek in de middeleeuwse samenleving gevonden.");
  console.log("Je besluit in de middeleeuwen te blijven en een nieuw leven op te bouwen.");
  console.log("Gefeliciteerd, je past je aan aan de tijdsperiode en leeft een gelukkig leven in de middeleeuwen.");
  endGame(3);
}

function endGame(result) {
  if (result === 1) {
    console.log("Einde 1: Je keert terug naar je eigen tijd en vertelt iedereen over je avontuur in de middeleeuwen. Je wordt een beroemde tijdreiziger.");
  } else if (result === 2) {
    console.log("Einde 2: Je sluit je aan bij het verzet in de dystopische toekomst en helpt de wereld te verbeteren.");
  } else if (result === 3) {
    console.log("Einde 3: Je blijft in de middeleeuwen en leeft een gelukkig leven, je past je aan aan de tijdsperiode.");
  } else {
    console.log("Einde 4: Ondanks herhaalde pogingen lukt het niet om je tijdmachine te repareren. Je blijft vastzitten in de middeleeuwen en leeft een avontuurlijk maar uitdagend leven.");
  }
}

function invalidInput() {
  console.log("Ongeldige invoer. Kies een geldige optie.");
  startGame();
}

function getUserInput() {
  const input = readlineSync.question("Jouw keuze: ").toUpperCase();
  return input;
}

startGame();
