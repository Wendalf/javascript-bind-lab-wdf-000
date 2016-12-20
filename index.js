var digitalClock = {
  time: Math.floor(Date.now()/1000),
  startTicking: function() {
    // setInterval(function() {this.time += 1;}.bind(this), 1000)
    setInterval(() => this.time ++, 1000);
  }
}

function censor(word, string) {
  let regexify = new RegExp(word, 'gi');
  return string.replace(regexify, "BLEEP");
}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');

