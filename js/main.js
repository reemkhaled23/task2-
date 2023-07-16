
var quotes = [
    " 'The only thing that is constant is change.'",
    " 'The best way to predict the future is to create it. '",
    " 'The only person you are destined to become is the person you decide to be.'",
    " 'Life is what happens when you're busy making other plans. '" ,
    " 'The greatest glory in living lies not in never falling, but in rising every time we fall. '",
    " 'It's not how much you have, but how much you enjoy that makes happiness. '",
    " 'The best way to get started is to quit talking and begin doing. '",
    " 'The journey of a thousand miles begins with a single step. '" ,
    " 'The only thing standing between you and your goal is the bullshit story you keep telling yourself. '",
  ];



  function get() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("demo").innerHTML =quotes[randomNumber]

    return quotes[randomNumber] ;
  }





























