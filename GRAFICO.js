
const meuGrafico = document.getElementById('meuGrafico');

new Chart(meuGrafico, {
  type: 'line', // tipo de gráfico
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'PERGUNTA',
      data: [0,1,2,3,4,5],
       backgroundColor: ['#00ff77ff', '#eb0a0aff', '#0d19c4ff', '#ff02afff', '#ddff01ff'],
      borderColor: '#000000ff',
      borderWidth: 2
    }]
  },

});
const meuGrafico2 = document.getElementById('meuGrafico2');

new Chart(meuGrafico2, {
  type: 'bar', // tipo de gráfico
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'PERGUNTA',
      data: [0,1,2,3,4,5],
     backgroundColor: ['#00ff77ff', '#eb0a0aff', '#0d19c4ff', '#ff02afff', '#ddff01ff'],
      
    }]
  },

});

const meuGrafico3 = document.getElementById('meuGrafico3');

new Chart(meuGrafico3, {
  type: 'doughnut', // tipo de gráfico
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'PERGUNTA',
      data: [,1,2,3,4,5],
      backgroundColor: ['#00b7ffff','#00ff77ff', '#eb0a0aff', '#0d19c4ff', '#ff02afff', '#ddff01ff'],
    
    }]
  },

});




