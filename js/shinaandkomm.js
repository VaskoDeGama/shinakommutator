var proc = 4;// Кол-во процессоров
var block = 4; // Кол-во блоков памяти 
var pn = [0.9,0.7]; // Процент данных, используемых программой
var k = 10; // Кол-во команд
var kr = [0.9,0.8,0.6]; // Процент команд не требующих обращения к памяти
var m = [2,5,10]; // Время обращение к памяти
var ye = 1; // величина условно единицы времени
var tranzit = ye/5; //время транзита
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
  			var nowPn = $('input:radio:checked[name=pn]').val();
  			var nowKr = $('input:radio:checked[name=kr]').val();
  			var nowM = $('input:radio:checked[name=m]').val();
 			//alert(nowPn + " " + nowKr + " " + nowM);		
      var programBezPamuyt = k * nowKr;
      var programSPamuyt = k - programBezPamuyt;
      var timeBezPamuyt = programBezPamuyt * ye;
      var timeSPamuyt = 0;
      for (var i = 0; i < 4; i++) {
          timeSPamuyt += tranzit + ye * nowM;
          
      };
      var alltime = timeSPamuyt * programSPamuyt + timeBezPamuyt * proc;
      $('#rezultbus').text(alltime+"c");
 		})

	});


