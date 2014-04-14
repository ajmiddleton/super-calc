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

    switch(type){
    case '+': add();
      break;
    case '-': sub();
      break;
    case 'x': mult();
      break;
    case '/': quot();
      break;
    case 'E': sigma();
      break;
    case 'P': expo();
      break;
    case 'S': sqr();
      break;
    case '!': fac();
      break;

    }
  }

  function add(){
    var x = getFirst();
    var y = getSecond();

    var sum = x + y;
    printR(sum);
  }

  function sub(){
    var x = getFirst();
    var y = getSecond();

    var dif = x - y;
    printR(dif);
  }

  function mult(){
    var x = getFirst();
    var y = getSecond();

    var prod = x * y;
    printR(prod);
  }

  function quot(){
    var x = getFirst();
    var y = getSecond();

    var q = x / y;
    printR(q);
  }

  function sigma(){
    var sum = 0;
    $('#box .pushedNums').each(function(){
      var x = $(this).text() * 1;
      sum += x;
    });

    printR(sum);
  }

  function expo(){
    var x = getFirst();
    var y = getSecond();

    var p = Math.pow(x,y);
    printR(p);
  }

  function sqr(){
    var x = getFirst();

    var sq = Math.sqrt(x);
    printR(sq);
  }

  function fac(){
    var x = getFirst();
    var f = 1;

    for(var i=1; i <= x; i++){
      f *= i;
    }

    printR(f);
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
