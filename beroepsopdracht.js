const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const story = [
  "Daniel heeft eindelijk de financiering en de uitrusting bij elkaar om zijn zoektocht te beginnen. Moet hij zijn reis alleen maken of iemand meenemen voor hulp en gezelschap?",
  "Alleen gaan.\nIemand meenemen.",
  "Daniel heeft besloten om zijn beste vriend Mark mee te nemen op zijn reis. Ze staan aan het begin van de jungle. Moet Daniel de gemakkelijke, bekende route nemen of de avontuurlijke, onbekende route?",
  "De gemakkelijke, bekende route.\nDe avontuurlijke, onbekende route.",
  "Tijdens hun reis merken Daniel en Mark dat ze een rivier moeten oversteken. Moeten ze een stevige brug proberen te vinden of de rivier met een zelfgemaakt vlot oversteken?",
  "Een brug vinden.\nEen vlot maken.",
  "Terwijl ze diep in de jungle zijn, horen ze vreemde geluiden van dieren in de verte. Moeten ze het geluid volgen om te ontdekken wat het is of zich stilhouden en hun koers vervolgen?",
  "Het geluid volgen.\nHun koers vervolgen.",
  "De geluiden blijken afkomstig van een zeldzame diersoort te zijn. Moeten ze proberen het dier te vangen voor onderzoek of het met rust laten?",
  "Het dier vangen voor onderzoek.\nHet dier met rust laten.",
  "Na enkele weken in de jungle te hebben doorgebracht, ontmoeten ze een lokale stam. Moeten ze de stam nader benaderen en proberen met hen te communiceren of hun afstand bewaren?",
  "Benaderen en proberen te communiceren.\nAfstand bewaren.",
  "De stam accepteert Daniel en Mark als gasten. Ze worden uitgenodigd voor een ceremonie. Moeten ze deelnemen aan de ceremonie of beleefd weigeren?",
  "Deelnemen aan de ceremonie.\nBeleefd weigeren.",
  "Tijdens de ceremonie krijgen Daniel en Mark een drankje aangeboden dat ze nog nooit eerder hebben gezien. Moeten ze het drinken of weigeren?",
  "Het drankje drinken.\nHet drankje weigeren.",
  "Het drankje blijkt veilig en verkwikkend te zijn. Daniel en Mark voelen zich op hun gemak in de stam. Moeten ze langer bij de stam blijven om meer te leren over hun cultuur of doorgaan met hun zoektocht?",
  "Langer bij de stam blijven.\nDoorgaan met de zoektocht.",
  "Na enkele maanden bij de stam te hebben doorgebracht, hoort Daniel een gerucht dat zijn biologische familie in de buurt zou kunnen zijn. Moeten ze het gerucht onderzoeken of blijven ze bij de stam?",
  "Het gerucht onderzoeken.\nBij de stam blijven.",
  "Het gerucht blijkt waar te zijn. Daniel vindt aanwijzingen die hem dichter bij zijn familie brengen. Moet hij zijn zoektocht voortzetten, ondanks het verdriet van het afscheid van de stam, of blijven en zijn nieuwe familie koesteren?",
  "De zoektocht voortzetten.\nBij de stam blijven.",
  "Terwijl Daniel zijn zoektocht voortzet, komt hij gevaarlijke dieren en natuurlijke obstakels tegen. Moet hij deze uitdagingen alleen aangaan of hulp vragen aan de lokale stamleden die hij heeft ontmoet?",
  "Alleen de uitdagingen aangaan.\nHulp vragen aan de lokale stamleden.",
  "Na een lange zoektocht komt Daniel eindelijk oog in oog te staan met zijn biologische familie. Moet hij zichzelf meteen bekendmaken of eerst observeren en afwachten?",
  "Zichzelf meteen bekendmaken.\nObserveren en afwachten.",
  "Als Daniel zichzelf bekendmaakt, blijken zijn biologische familieleden overweldigd en gelukkig te zijn. Ze willen dat hij blijft. Moet hij bij hen blijven of teruggaan naar de stam?",
  "Bij zijn biologische familie blijven.\nTeruggaan naar de stam.",
  "Als Daniel terugkeert naar de stam, verwelkomen ze hem met open armen en zijn blij dat hij zijn familie heeft gevonden. Moet hij bij de stam blijven of met zijn biologische familie zijn?",
  "Bij de stam blijven.\nMet zijn biologische familie zijn.",
  "Als Daniel bij zijn biologische familie blijft, leren ze hem hun manier van leven en tradities. Moet hij zijn werk als bioloog opgeven en zich volledig aanpassen aan hun cultuur of proberen een balans te vinden tussen beide?",
  "Zijn werk als bioloog opgeven en zich volledig aanpassen aan hun cultuur.\nEen balans vinden tussen zijn werk als bioloog en hun cultuur.",
  "Als Daniel een balans probeert te vinden, komt hij in conflict tussen zijn twee werelden. Moet hij zijn biologische familie vertellen over zijn werk als bioloog of het geheim houden om hun relatie te beschermen?",
  "Zijn biologische familie vertellen over zijn werk.\nHet geheim houden.",
  "Als Daniel besluit om zijn werk te onthullen, ontstaat er begrip tussen hem en zijn biologische familie. Ze respecteren zijn keuzes. Moet hij nu proberen om zijn werk te combineren met het helpen van zijn familie of zijn werk opgeven om hen te ondersteunen",
  "Zijn werk proberen te combineren met het helpen van zijn familie.\nZijn werk opgeven om hen te ondersteunen.",
  "Nu Daniel begrijpt dat hij zijn werk kan combineren met het helpen van zijn familie, moet hij de lokale overheid inlichten over hun behoeften en zijn onderzoeksexpertise aanbieden om hun levensomstandigheden te verbeteren. Moet hij de overheid benaderen en samenwerken met hen, of moet hij het familieleven buiten de overheid houden?",
  "De overheid benaderen en samenwerken.\nHet familieleven buiten de overheid houden.",
  "De situatie in de jungle wordt gecompliceerder door ongeoorloofde houtkap en milieuvernietiging. Moet Daniel de lokale overheid en internationale organisaties inlichten om actie te ondernemen of de zaak zelf proberen op te lossen?",
  "De lokale overheid en internationale organisaties inlichten.\nDe zaak zelf proberen op te lossen.",
  "Na vele jaren in de jungle, heeft Daniel een succesvolle balans gevonden tussen zijn werk als bioloog, het helpen van zijn familie en het behoud van de jungle. Moet hij de rest van zijn leven in de jungle doorbrengen of terugkeren naar de buitenwereld en zijn verhaal delen met de wereld?",
  "De rest van zijn leven in de jungle doorbrengen.\nTerugkeren naar de buitenwereld en zijn verhaal delen met de wereld."
];

let currentQuestion = 0;
let storyProgress = [];

function startGame() {
  console.log(story[currentQuestion]);
  rl.question('> ', (answer) => {
    storyProgress.push(answer);
    currentQuestion++;
    if (currentQuestion < story.length) {
      startGame();
    } else {
      displayEnding();
      rl.close();
    }
  });
}

function displayEnding() {
  console.log('Einde van het verhaal');
  const ending = calculateEnding();
  console.log(`Einde: ${ending}`);
}

function calculateEnding() {
    if (
      storyProgress[0] === 'Alleen gaan' &&
      storyProgress[1] === 'De avontuurlijke, onbekende route' &&
      storyProgress[2] === 'Een vlot maken' &&
      storyProgress[3] === 'Het geluid volgen' &&
      storyProgress[4] === 'Het dier met rust laten' &&
      storyProgress[5] === 'Afstand bewaren' &&
      storyProgress[6] === 'Beleefd weigeren' &&
      storyProgress[7] === 'Het drankje drinken' &&
      storyProgress[8] === 'Langer bij de stam blijven' &&
      storyProgress[9] === 'Het gerucht onderzoeken' &&
      storyProgress[10] === 'De zoektocht voortzetten' &&
      storyProgress[11] === 'Hulp vragen aan de lokale stamleden' &&
      storyProgress[12] === 'Zichzelf meteen bekendmaken' &&
      storyProgress[13] === 'Bij zijn biologische familie blijven' &&
      storyProgress[14] === 'Met zijn biologische familie zijn' &&
      storyProgress[15] === 'Een balans vinden tussen zijn werk als bioloog en hun cultuur' &&
      storyProgress[16] === 'Zijn biologische familie vertellen over zijn werk' &&
      storyProgress[17] === 'Zijn werk proberen te combineren met het helpen van zijn familie' &&
      storyProgress[18] === 'De overheid benaderen en samenwerken' &&
      storyProgress[19] === 'De lokale overheid en internationale organisaties inlichten' &&
      storyProgress[20] === 'Terugkeren naar de buitenwereld en zijn verhaal delen met de wereld'
    ) {
      return 'Einde 1: Daniel leidt een succesvolle expeditie en deelt zijn ervaringen met de wereld.';
    } else {
      return 'Einde 2: Daniel blijft in de jungle en vindt geluk bij zijn nieuwe familie.';
    }
  }

startGame();
