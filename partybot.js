// COPIED AND UNEDITED. WILL CLEAN LATER.
const urlstub = "https://cultofthepartyparrot.com";
/**
* Returns a random integer in [a, b]
*/
function randomNumber(a, b) {
 return Math.floor((Math.random() * (b-a))) + a;
}

/**
* Get image card format.
*/
function sendImage(imageUrl) {
 // Below copied from https://developers.google.com/hangouts/chat/reference/message-formats/cards#image_widget
 imageWidget = {
 "cards": [
   {
     "sections": [
       {
         "widgets": [
           {
             "image": {
               "imageUrl": imageUrl, 
               "onClick" : {
                 "openLink" : {
                   "url": imageUrl
                 }
               }
             }
           }
         ]
       }
     ]
   }
 ]
 }
 return imageWidget;
}

/**
* Get a random parrot from allParrots
*/
function getRandomParrot() {
 var keys = Object.keys(allParrots);
 return allParrots[keys[ keys.length * Math.random() << 0]];
}

/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onMessage(event) {
  var name = "";

  // TODO: use event.message.text to get text and serve a specific requested parrot.
  const nospaces = (event.message.text).replace(/^(.*?)\@Party Bot/g, '').replace(/ /g, '');
  if (nospaces in allParrots) {
    return sendImage(urlstub + allParrots[nospaces]);
  }

  // Randomly select and prepare a parrot
  let randomParrot = getRandomParrot();
  parrotLink = urlstub + randomParrot;

  return sendImage(parrotLink);
}

/**
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onAddToSpace(event) {
  var message = "";

  if (event.space.type == "DM") {
    message = "Hey " + event.user.displayName + ", let's party!";
  } else {
    message = "Hey everyone, let's party!" ;
  }

  return { "text": message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onRemoveFromSpace(event) {
  console.info("Bot removed from ", event.space.name);
}

// ALL THE PARROTS
const allParrots = {"ananya": "/parrots/hd/jumpingparrotjr.gif",
                    "mardigras": "/parrots/hd/mardigrasparrot.gif",
                    "donut": "/parrots/hd/donutparrot.gif", 
                    "stub": "/guests/hd/stubparrot.gif",
                    "hello": "/parrots/hd/partyparrot.gif",
                    "hi": "/parrots/hd/partyparrot.gif",
                    "bunny": "/parrots/hd/bunnyparrot.gif",
                    "parrot": "/parrots/hd/parrot.gif",
                    "partykeanu": "/guests/hd/partykeanu.gif",
                    "twins": "/parrots/hd/twinsparrot.gif",
                    "caps": "/guests/hd/capsparrot.gif",
                    "mustache": "/parrots/hd/mustacheparrot.gif",
                    "nyan": "/guests/hd/nyanparrot.gif",
                    "partyfieri": "/guests/hd/partyfieri.gif",
                    "redhat": "/parrots/hd/redhatparrot.gif",
                    "hypnolight": "/parrots/hd/hypnoparrotlight.gif",
                    "flyingmoney": "/parrots/hd/flyingmoneyparrot.gif",
                    "stayhomecloser": "/parrots/hd/stayhomeparrotcloser.gif",
                    "opensource": "/parrots/hd/opensourceparrot.gif",
                    "partysloth": "/guests/hd/partysloth.gif",
                    "christmas": "/parrots/hd/christmasparrot.gif",
                    "popcorn": "/parrots/hd/popcornparrot.gif",
                    "vertical": "/parrots/hd/verticalparrot.gif",
                    "sad": "/parrots/hd/sadparrot.gif",
                    "football": "/parrots/hd/footballparrot.gif",
                    "backwards": "/parrots/hd/backwardsparrot.gif",
                    "innersource": "/parrots/hd/innersourceparrot.gif",
                    "partygopher": "/guests/hd/partygopher.gif",
                    "sassy": "/parrots/hd/sassyparrot.gif",
                    "burkinafaso": "/flags/hd/burkinafasoparrot.gif",
                    "disco": "/parrots/hd/discoparrot.gif",
                    "pumpkin": "/parrots/hd/pumpkinparrot.gif",
                    "witnessprotection": "/guests/hd/witnessprotectionparrot.gif",
                    "revolution": "/parrots/hd/revolutionparrot.gif",
                    "jumpingjr": "/parrots/hd/jumpingparrotjr.gif",
                    "viking": "/parrots/hd/vikingparrot.gif",
                    "illuminati": "/parrots/hd/illuminatiparrot.gif",
                    "whitewalker": "/parrots/hd/whitewalkerparrot.gif",
                    "partycage": "/guests/hd/partycage.gif",
                    "angry": "/parrots/hd/angryparrot.gif",
                    "angery": "/parrots/hd/angryparrot.gif",
                    "staytfhome": "/parrots/hd/staytfhomeparrot.gif",
                    "doge": "/guests/hd/dogeparrot.gif",
                    "sleeping": "/parrots/hd/sleepingparrot.gif",
                    "aussieconga": "/parrots/hd/aussiecongaparrot.gif",
                    "poop": "/guests/hd/parrotpoop.gif",
                    "sith": "/parrots/hd/sithparrot.gif",
                    "jedi": "/parrots/hd/jediparrot.gif",
                    "original": "/parrots/hd/originalparrot.gif",
                    "gentleman": "/parrots/hd/gentlemanparrot.gif",
                    "ultrafast": "/parrots/hd/ultrafastparrot.gif",
                    "portalblue": "/parrots/hd/portalblueparrot.gif",
                    "shuffle": "/parrots/hd/shuffleparrot.gif",
                    "stayhome": "/parrots/hd/stayhomeparrot.gif",
                    "hmm": "/parrots/hd/hmmparrot.gif",
                    "evil": "/parrots/hd/evilparrot.gif",
                    "redenvelope": "/parrots/hd/redenvelopeparrot.gif",
                    "quad": "/parrots/hd/quadparrot.gif",
                    "tennis": "/parrots/hd/tennisparrot.gif",
                    "sint": "/parrots/hd/sintparrot.gif",
                    "bat": "/guests/hd/batparrot.gif",
                    "angel": "/parrots/hd/angelparrot.gif",
                    "zouk": "/parrots/hd/zoukparrot.gif",
                    "moon": "/parrots/hd/moonparrot.gif",
                    "github": "/parrots/hd/githubparrot.gif",
                    "partyblob": "/guests/hd/partyblob.gif",
                    "hanami": "/parrots/hd/hanamiparrot.gif",
                    "preetjustice": "/guests/hd/preetjusticeparrot.gif",
                    "blunt": "/parrots/hd/bluntparrot.gif",
                    "boba": "/parrots/hd/bobaparrot.gif",
                    "hypno": "/parrots/hd/hypnoparrot.gif",
                    "tiedye": "/parrots/hd/tiedyeparrot.gif",
                    "groucho": "/parrots/hd/grouchoparrot.gif",
                    "spinning": "/parrots/hd/spinningparrot.gif",
                    "wfh": "/parrots/hd/wfhparrot.gif",
                    "beret": "/parrots/hd/beretparrot.gif",
                    "slow": "/parrots/hd/slowparrot.gif",
                    "notfound": "/parrots/hd/parrotnotfound.gif",
                    "wine": "/parrots/hd/wineparrot.gif",
                    "ph": "/parrots/hd/phparrot.gif",
                    "heading": "/parrots/hd/headingparrot.gif",
                    "gabon": "/flags/hd/gabonparrot.gif",
                    "invisible": "/parrots/hd/invisibleparrot.gif",
                    "glimpse": "/parrots/hd/glimpseparrot.gif",
                    "biker": "/parrots/hd/bikerparrot.gif",
                    "pirate": "/parrots/hd/pirateparrot.gif",
                    "bug": "/guests/hd/bugparrot.gif",
                    "birthdayparty": "/parrots/hd/birthdaypartyparrot.gif",
                    "bootleg": "/parrots/hd/bootlegparrot.gif",
                    "chico": "/parrots/hd/chicoparrot.gif",
                    "pingpong": "/parrots/hd/pingpongparrot.gif",
                    "goth": "/parrots/hd/gothparrot.gif",
                    "dealwithit": "/parrots/hd/dealwithitparrot.gif",
                    "partyblobcat": "/guests/hd/partyblobcat.gif",
                    "reverse": "/parrots/hd/reverseparrot.gif",
                    "bhutan": "/flags/hd/bhutanparrot.gif",
                    "dad": "/parrots/hd/dadparrot.gif",
                    "aussie": "/parrots/hd/aussieparrot.gif",
                    "doc": "/parrots/hd/docparrot.gif",
                    "beer": "/parrots/hd/beerparrot.gif",
                    "jumping": "/parrots/hd/jumpingparrot.gif",
                    "kiribati": "/flags/hd/kiribatiparrot.gif",
                    "headbanging": "/parrots/hd/headbangingparrot.gif",
                    "portalorange": "/parrots/hd/portalorangeparrot.gif",
                    "inverse": "/parrots/hd/inverseparrot.gif",
                    "michaeljackson": "/parrots/hd/michaeljacksonparrot.gif",
                    "ruby": "/parrots/hd/rubyparrot.gif",
                    "meld": "/parrots/hd/meldparrot.gif",
                    "flower": "/parrots/hd/flowerparrot.gif",
                    "bored": "/parrots/hd/boredparrot.gif",
                    "thumbsup": "/parrots/hd/thumbsupparrot.gif",
                    "partyannoyedbird": "/guests/hd/partyannoyedbird.gif",
                    "everythingsfine": "/parrots/hd/everythingsfineparrot.gif",
                    "headset": "/parrots/hd/headsetparrot.gif",
                    "spy": "/parrots/hd/spyparrot.gif",
                    "bouncing": "/parrots/hd/bouncingparrot.gif",
                    "hardhat": "/parrots/hd/hardhatparrot.gif",
                    "levitation": "/parrots/hd/levitationparrot.gif",
                    "reverseconga": "/parrots/hd/reversecongaparrot.gif",
                    "maracas": "/parrots/hd/maracasparrot.gif",
                    "stable": "/parrots/hd/stableparrot.gif",
                    "science": "/parrots/hd/scienceparrot.gif",
                    "reverseportalblue": "/parrots/hd/reverseportalblueparrot.gif",
                    "wendy": "/parrots/hd/wendyparrot.gif",
                    "sherlockholmes": "/parrots/hd/sherlockholmesparrot.gif",
                    "fast": "/parrots/hd/fastparrot.gif",
                    "parrot": "/parrots/hd/parrot.gif",
                    "rythmical": "/parrots/hd/rythmicalparrot.gif",
                    "australia": "/flags/hd/australiaparrot.gif",
                    "horizontal": "/parrots/hd/horizontalparrot.gif",
                    "middle": "/parrots/hd/middleparrot.gif",
                    "troll": "/guests/hd/trollparrot.gif",
                    "harpo": "/parrots/hd/harpoparrot.gif",
                    "moonwalking": "/parrots/hd/moonwalkingparrot.gif",
                    "marshmallow": "/parrots/hd/marshmallowparrot.gif",
                    "cop": "/parrots/hd/copparrot.gif",
                    "hypnodark": "/parrots/hd/hypnoparrotdark.gif",
                    "darkmode": "/parrots/hd/darkmodeparrot.gif",
                    "party": "/parrots/hd/partyparrot.gif",
                    "reverseportalorange": "/parrots/hd/reverseportalorangeparrot.gif",
                    "french": "/parrots/hd/frenchparrot.gif",
                    "brazilianfan": "/parrots/hd/brazilianfanparrot.gif",
                    "sushi": "/parrots/hd/sushiparrot.gif",
                    "transparront": "/parrots/hd/transparront.gif",
                    "cryingjordan": "/guests/hd/cryingjordanparrot.gif",
                    "picasso": "/parrots/hd/picassoparrot.gif",
                    "aussiereverseconga": "/parrots/hd/aussiereversecongaparrot.gif",
                    "jamaica": "/flags/hd/jamaicaparrot.gif",
                    "conga": "/parrots/hd/congaparrot.gif",
                    "partygritty": "/guests/hd/partygritty.gif",
                    "partygeeko": "/guests/hd/partygeeko.gif",
                    "yosemitesam": "/parrots/hd/yosemitesamparrot.gif",
                    "norwegianblue": "/parrots/hd/norwegianblueparrot.gif",
                    "stayhomewindow": "/parrots/hd/stayhomeparrotwindow.gif",
                    "congaparty": "/parrots/hd/congapartyparrot.gif",
                    "node": "/parrots/hd/nodeparrot.gif",
                    "ceiling": "/parrots/hd/ceilingparrot.gif",
                    "confused": "/parrots/hd/confusedparrot.gif",
                    "dealwithitnow": "/parrots/hd/dealwithitnowparrot.gif",
                    "daftpunk": "/parrots/hd/daftpunkparrot.gif",
                    "tp": "/parrots/hd/tpparrot.gif",
                    "short": "/parrots/hd/shortparrot.gif",
                    "brazilianplayer": "/parrots/hd/brazilianplayerparrot.gif" }
