var twit = "https://twitter.com/intent/tweet?text=";
$("#twitbutton").click(function() {
  window.open(twit, '_blank')
});
$("#button").click(function() {
  var i = Math.floor(Math.random()*lotQuotes.length);
  $("#quotespace").html(lotQuotes[i]);
  $(twit = "https://twitter.com/intent/tweet?text="+lotQuotes[i]);
});
var lotQuotes = 
  [
    ["\"To be the man, you\'ve got to beat the man. Whooooo!\"-Ric Flair"],
    ["\"I am the king of all media!\"-Howard Stern"],
    ["\"I have come here to chew bubblegum and kick ass. And I'm all out of bubblegum.\"-John Nada in 'They Live'"],
    ["\"Change is coming to America.\"-President Barack Obama"],
    ["\"I don't care if you're black, white, straight, bisexual, gay, lesbian, short, tall, fat, skinny, rich or poor. If you're nice to me, I'll be nice to you. Simple as that!\"-Eminem"],
    ["\"Somehow we've brought our sins back physically. And they're pissed.\"-Nelson Wright in 'Flatliners'"],
    ["\"And that's the bottom line, 'cause Stone Cold said so!\"-'Stone Cold' Steve Austin"],
    ["\"I believe when we stand together, when we share the vision that government should work for all of us, there is nothing we can’t accomplish.\"-Senator Bernie Sanders"],
    ["\"I would rather be hated for who I am, than loved for who I am not.\"-Kurt Cobain"],
    ["\"I'd rather hurt a man than love a woman.\"-Cactus Jack"],
    ["\"Comedy is the blues for people who can’t sing.\"-Chris Rock"],
    ["\"Oh myyyyy!\"-George Takei"]
    
  ]

  