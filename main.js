(function(){
  var actualizarHora = function(){
    var fecha = new Date(),
      hora = fecha.getHours(),
      ampm,
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear();


      var pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDia = document.getElementById('dia'),
        pDiaSemana = document.getElementById('diaSemana'),
        pAmpm = document.getElementById('ampm'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');

        var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;
        var meses = ["Enero","Febrero","Marzo","Abri","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (hora >= 12) {
          hora = hora - 12;
          ampm = "PM";
        }else {
          ampm = "AM";
        }

        if(hora == 0) {
          hora = 12;
        };

        pHoras.textContent = hora;
        pAmpm.textContent = ampm;
        if (minutos<10) {
          minutos = "0"+minutos;
        }
        pMinutos.textContent = minutos;
        if (segundos<10) {
          segundos = "0"+segundos;
        }
        pSegundos.textContent = segundos;
  };


  actualizarHora();
  var intervalo = setInterval(actualizarHora,1000);
}());
