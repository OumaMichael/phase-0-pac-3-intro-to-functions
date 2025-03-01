// Follow along with the examples here
// Return the given string in all uppercase
function shout(string) {
    return string.toUpperCase();
  }
  
  // Return the given string in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Log the given string in all uppercase to the console
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Log the given string in all lowercase to the console
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Return different messages based on the string's case:
  // - If the string is exactly "Let's have dinner together!", return "I would love to!"
  // - If the string is all lowercase, return "I can't hear you!"
  // - If the string is all uppercase, return "YES INDEED!"
  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
  }
  
  // Export the functions so the test file can use them.
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate
  };
  