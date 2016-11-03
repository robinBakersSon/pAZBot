// Using the Twit node package

var Twit = require('twit');

// Pulling twitter authentication info from another file
var config = require('./config.js');

// using tracery node library to create grammar and syntax rules
var tracery = require('tracery-grammar');

//my syntax created through tracery
var data = {

  // "sentence": ["#color.capitalize# #animal.s# are #often# #mood#.",
               // "#animal.a.capitalize# is #often# #mood#, unless it is #color.a# one."],
              "sentence": ["#hafiz# #transition.capitalize# #earthSeed# "],
  // "often": ["rarely","never","often","almost always","always","sometimes"],
  // "color": ["orange","blue","white","black","grey","purple","indigo","turquoise"],
  // "animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"],
  // "mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
  "transition":["remember", "we learn", "", "and"],
  "hafiz": ["Cast All Your Votes for Dancing I know the voice of depression Still calls to you.", "I know those habits that can ruin your life. Still send their invitations. But you are with the Friend now And look so much stronger.", "You can stay that way And even bloom!","Keep squeezing drops of the Sun From your prayers and work and music", "And from your companions' beautiful laughter.", "Keep squeezing drops of the Sun From the sacred hands and glance of your Beloved.","And, my dear, From the most insignificant movements Of your own holy body.", "Learn to recognize the counterfeit coins", "That may buy you just a moment of pleasure, But then drag you for days.","Like a broken man Behind a farting camel.","You are with the Friend now."," Learn what actions of yours delight Him, What actions of yours bring freedom And Love.","My ears wish my head was missing So they could finally kiss each other And applaud all your nourishing wisdom!", "O keep squeezing drops of the Sun From your prayers and work and music", "And from your companions' beautiful laughter", "And from the most insignificant movements Of your own holy body.","Now, sweet one, Be wise. Cast all your votes for Dancing!"],
   "earthSeed": ["The Destiny of Earthseed Is to take root among the stars.", "All that you touch You Change. All that you Change Changes you.","The only lasting truth Is Change. God Is Change.", "A gift of God May sear unready fingers.", "We do not worship God. We perceive and attend God. We learn from God.","With forethought and work,We shape God.", "In the end, we yield to God. We adapt and endure, For we are Earthseed, And God is Change.", "God is Power: Infinite, Irresistible, Inexorable, Indifferent."," And yet, God is Pliable:Trickster, Teacher, Chaos, Clay.", "God exists to be shaped. God is Change.", "Intelligence is ongoing, individual adaptability."," adaptations that an intelligent species may make in a single generation", "other species make over many generations of selective breeding and selective dying.", "Yet intelligence is demanding. If it is misdirected by accident or by intent","it can foster its own orgies of breeding and dying.", "A victim of God may, Through learning adaption, Become a partner of God.", "A victim of God may, Through forethought and planning, Become a shaper of God.", " Or a victim of God may, Through shortsightedness and fear, Remain God's victim, God's plaything, God's prey.", "Prodigy is, at its essence, adaptability and persistent, positive obsession.", "Prodigy is, at its essence, adaptability and persistent, positive obsession.", "Without persistence, what remains is an enthusiasm of the moment.", "Without adaptability, what remains may be channeled into destructive fanaticism.", "Without positive obsession, there is nothing at all.", "Belief Initiates and guides action-Or it does nothing.", "Drowning people Sometimes die Fighting their rescuers."],
};

var grammar = tracery.createGrammar(data);
grammar.addModifiers(tracery.baseEngModifiers);

function generate() {
  var status = grammar.flatten('#sentence#');
  return status;
}

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
// setInterval(tweeter, 60*5*100); is about once per minute (maybe a little less)
setInterval(tweeter, 60*5*100);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = generate();

  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };
}