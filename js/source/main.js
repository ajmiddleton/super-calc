(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(display);
    $('.operator').click(compute);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('#push').click(push);
    $('#sign').click(sign);
  }

  function title(){
    var dis = $('#content-container').css('display');

    if(dis === 'none'){
      $('#content-container').fadeIn();
    }else{
      $('#content-container').fadeOut();
    }
  }

  function sign(){
    var num = $('#display').text();
    //$('#display').text(num*-1);

    if(num.indexOf('-') === 0){
      console.log('entered - present if statement');
      num = num.substring(1);
      console.log(num);
    }else{
      num = '-'.concat(num);
    }
    $('#display').text(num);
  }

  function push(){
    var num = $('#display').text();
    //var str = '<div class="pushedNums">' + num + '</div>';
    var $str = $('<div>').addClass('pushedNums').text(num);
    $('#box').prepend($str);
  }

  function clear(){
    var str = this.textContent;
    if(str === 'C'){
      $('#display').text(0);
    }
    else{
      $('#box').text('');
    }
  }

  function display(){
    var num = this.textContent;
    var out = $('#display').text();
    out += num;

    if(out.indexOf('.') === -1){
      out *= 1;
    }//decimal handling
    $('#display').text(out);
  }

  function decimal(){
    var text = $('#display').text();

    if(text.indexOf('.') < 0){
      $('#display').text(text += '.');
    }

  }

  function compute(){
    var type = this.textContent;
    var x = getFirst();
    var y = getSecond();
    var result;

    switch(type){
    case '+': result = add(x,y);
      break;
    case '-': result = sub(x,y);
      break;
    case 'x': result = mult(x,y);
      break;
    case '/': result = quot(x,y);
      break;
    case 'E': result = sigma();
      break;
    case 'P': result = expo(x,y);
      break;
    case 'S': result = sqr(x);
      break;
    case '!': result = fac(x);
      break;

    }

    printR(result);
  }

  function add(x,y){
    return x + y;
  }

  function sub(x,y){
    return x - y;
  }

  function mult(x,y){
    return x * y;
  }

  function quot(x,y){
    return x / y;
  }

  function sigma(){
    var sum = 0;
    $('#box .pushedNums').each(function(){
      var x = $(this).text() * 1;
      sum += x;
    });

    return sum;
  }

  function expo(x,y){
    return Math.pow(x,y);
  }

  function sqr(x){
    return Math.sqrt(x);
  }

  function fac(x){
    var f = 1;

    for(var i=2; i <= x; i++){
      f *= i;
    }

    return f;
  }

  function printR(str){
    $('#display').text(str);
  }

  function getFirst(){
    return $('#box .pushedNums').first().text() * 1;
  }

  function getSecond(){
    return $('#box .pushedNums').first().next().text() * 1;
  }
})();
