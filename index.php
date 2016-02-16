<!DOCTYPE html>
<html lang="ru">
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script src="js/shinaandkomm.js"></script>
	<link rel="stylesheet" href="../css/style.css">
	<meta charset="UTF-8">
	<title>Каменюк В.А.| Шина и Коммутатор</title>
</head>
<body>
	<div class='content shadow bordered '>
	<span id="proc"></span></br>
	<span id="block"></span></br>
	<span id="k"></span></br>
	<span id="ye"></span></br>
	<span id='tranzit'></span></br>
	<span>Процент данных в одном блоке, используемых программой: </span>
	<p>
		<label id="pn1"><span></span></label><INPUT type="radio" checked="checked" value='0' name='pn' id='pn1'>
		<label id="pn2"><span></span></label><INPUT type="radio" value='0' name='pn' id='pn2'>
	</p>
		<span>Процент команд не требующих обращения к памяти: </span>
	<p>
		<label id="kr1"></label><INPUT type="radio" checked="checked" value='0' name='kr' id='kr1'>
		<label id="kr2"></label><INPUT type="radio" value='0' name='kr' id='kr2'>
		<label id="kr3"></label><INPUT type="radio" value='0' name='kr' id='kr3'>
	</p>
	<span>Время обращзения к памяти: </span>
	<p>
		<label id="m1"></label><INPUT type="radio" checked="checked" value='0' name='m' id='m1'>
		<label id="m2"></label><INPUT type="radio" value='0' name='m' id='m2'>
		<label id="m3"></label><INPUT type="radio" value='0' name='m' id='m3'>
	</p>
	<INPUT type="submit" name="submit" value="Просчитать">
	</div>

	<div class='content shadow bordered'>
		<div class="bus">
			<span>Время выполнения на базе общей шины</span></br>
			<span class="result" id="rezultbus"></span></br>
		</div>
		<div class="bus">
			<span>Время выполнения на базе коммутатора</span></br>
			<span class="result" id="rezultcom"></span></br>
		</div>
		
	</div>
</body>
</html>