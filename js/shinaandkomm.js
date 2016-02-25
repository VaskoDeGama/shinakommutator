var proc = 4;// Кол-во процессоров
var block = 4; // Кол-во блоков памяти 
var pn = [0.9,0.7]; // Процент данных, используемых программой
var k = 10; // Кол-во команд
var kr = [0.9,0.8,0.6]; // Процент команд не требующих обращения к памяти
var m = [2,5,10]; // Время обращение к памяти
var ye = 2; // величина условно единицы времени
var tranzit = ye/2; //время транзита
var cash = [1,2,3,4]; //память
/*console.log("Кол-во процессоров: " + proc);
console.log("Кол-во блоков памяти: " + block);
console.log("Процент данных, используемых программой: " + pn[0] * 100 + "% или " + pn[1] * 100 +"%");
console.log("Кол-во команд: " + k);
console.log("Процент команд не требующих обращения к памяти: " + kr[0] * 100 + "% или " + kr[1] * 100 +"% или "+ kr[2] * 100 +"%");
console.log("Время обращзения к памяти: " + m[0] + "с или "+ m[1] + "с или "+ m[2]+ "с");
console.log("Условная единица времени: " + ye +"c");*/
    $( document ).ready(function() {
        $('#proc').text("Кол-во процессоров: " + proc);
        $('#block').text("Кол-во блоков памяти: " + block);
        $('#k').text("Кол-во команд: " + k);
        $('#ye').text("Условная единица времени: " + ye +"c");
        $('#ye').text("Условная единица времени: " + ye +"c");
        $('#tranzit').text("Время транзита: "+ tranzit + "c");
        $('#pn1').text(pn[0] * 100 + "%");
        $('#pn2').text(pn[1] * 100 + "%");
        $('input:radio[id=pn1]').val(pn[0]);
        $('input:radio[id=pn2]').val(pn[1]);
        $('#kr1').text(kr[0] * 100 + "%");
        $('#kr2').text(kr[1] * 100 + "%");
        $('#kr3').text(kr[2] * 100 + "%");
        $('input:radio[id=kr1]').val(kr[0]);
        $('input:radio[id=kr2]').val(kr[1]);
        $('input:radio[id=kr3]').val(kr[2]);
        $('#m1').text(m[0]+"c");
        $('#m2').text(m[1]+"c");
        $('#m3').text(m[2]+"c");
        $('input:radio[id=m1]').val(m[0]);
        $('input:radio[id=m2]').val(m[1]);
        $('input:radio[id=m3]').val(m[2]);


    /*$( "input:radio[name=pn]" ).click(function() {
  			var nowPn = $('input:radio:checked[name=pn]').val();
 			alert(nowPn);		
 		});
 		$( "input:radio[name=kr]" ).click(function() {
  			var nowPn = $('input:radio:checked[name=kr]').val();
 			alert(nowPn);		
 		});
 		$( "input:radio[name=m]" ).click(function() {
  			var nowPn = $('input:radio:checked[name=m]').val();
 			alert(nowPn);		
 		})*/
 		 $( "input[name=submit]" ).click(function() {
        $("#log").empty();
  			var nowPn = $('input:radio:checked[name=pn]').val();//процент попадания в свой блок 
  			var nowKr = $('input:radio:checked[name=kr]').val();//процент команд с обращнием
  			var nowM = $('input:radio:checked[name=m]').val();//время обращения к памяти
        nowM = parseInt(nowM);
        var komandsWithPamat = k - (k * nowKr); // команды с образением к памяти кол-во
        var timeWithOutPamat = 0; // время выполения команд без памяти
        var timeWithPamat = 0; //время с памятью
        var popalBul = false;
        var alltime;
        //--------------общая шина-----------------------//
        //------------время без памяти-------------------//
        $('#log').append('<H3>Моделирование общей шины</h3>');
          for (var i = k - komandsWithPamat - 1; i >= 0; i--) {
             timeWithOutPamat += ye;     };

        for (var j = proc - 1; j >= 0; j--) {
                  //------------------время с памятью-------------//
          if (komandsWithPamat != 0) {
            for (var i = komandsWithPamat - 1; i >= 0; i--) {
                timeWithPamat = timeWithPamat + tranzit;
                popalBul = false;
                $("#log").append('<span> Команда <span class="number">' + (i + 1) + '</span> процессора <span class="number">' + (4 - j) + '</span> <span class="in">вошла</span>, время выполнения: <span class="time">' + timeWithPamat + ' </span>  </span></br>');

                while (popalBul != true) {
                  var popal = getRandomArbitary(0,100);
                  if (popal <= nowPn * 100 ) {
                    timeWithPamat = timeWithPamat + nowM + tranzit;
                    popalBul = true;
                     $("#log").append('<span> Команда <span class="number">' + (i + 1) + '</span> процессора <span class="number">' + (4 - j) + '</span> <span class="out">вышла</span>, время выполнения: <span class="time">' + timeWithPamat + ' </span> </span></br>');
                    }
                  else {
                    timeWithPamat = timeWithPamat + tranzit + nowM;
                    $("#log").append('<span> Команда <span class="number">' + (i + 1) + '</span> процессора <span class="number">' + (4 - j) + '</span> <span class="wait">ждет</span>, время выполнения: <span class="time">' + timeWithPamat + '</span> </span></br>');
                  };
                };
            };
            //alert(timeWithPamat);
          };
        };
        alltime = timeWithPamat + timeWithOutPamat;
        $('#rezultbus').text(alltime);


        //--------------коммутатор шина-----------------------//
        //------------время без памяти-------------------//
        timeWithPamat = 0;
        timeWithOutPamat = 0;
        $('#log').append('<H3>Моделирование коммутатора</h3>');
          for (var i = k - komandsWithPamat - 1; i >= 0; i--) {
             timeWithOutPamat += ye;     };

        for (var j = proc - 1; j >= 0; j--) {
                  //------------------время с памятью-------------//
          if (komandsWithPamat != 0) {
            for (var i = komandsWithPamat - 1; i >= 0; i--) {
                timeWithPamat = timeWithPamat + tranzit;
                $("#log").append('<span> Команда <span class="number">' + (i + 1) + '</span> процессора <span class="number">' + (4 - j) + '</span> <span class="in">вошла</span>, время выполнения: <span class="time">' + timeWithPamat + ' </span>  </span></br>');
                timeWithPamat = timeWithPamat + nowM + tranzit;
                $("#log").append('<span> Команда <span class="number">' + (i + 1) + '</span> процессора <span class="number">' + (4 - j) + '</span> <span class="out">вышла</span>, время выполнения: <span class="time">' + timeWithPamat + ' </span> </span></br>');
                };
              };
            };
            //alert(timeWithPamat);
        alltime = timeWithPamat + timeWithOutPamat;
        $('#rezultcom').text(alltime);
        //--------------общая шина-----------------------//  


 		 });
    });

function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}



