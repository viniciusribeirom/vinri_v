document.addEventListener("DOMContentLoaded", function () {
  
//nav
  const toggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  //comparador
  const fontes = ['Eólica', 'Solar', 'Hidroelétrica', 'Biomassa', 'Geotérmica'];

  new Chart(document.getElementById('custoInicial'), {
    type: 'bar',
    data: {
      labels: fontes,
      datasets: [{
        label: 'Custo Inicial (R$)',
        data: [6500, 9000, 8000, 7000, 12000],
        backgroundColor: '#8a2be2'
      }]
    }
  });

  new Chart(document.getElementById('impacto'), {
    type: 'radar',
    data: {
      labels: fontes,
      datasets: [{
        label: 'Impacto Ambiental',
        data: [2, 1, 5, 4, 3],
        backgroundColor: 'rgba(138, 43, 226, 0.2)',
        borderColor: '#8a2be2'
      }]
    }
  });

  new Chart(document.getElementById('usabilidade'), {
    type: 'line',
    data: {
      labels: fontes,
      datasets: [
        {
          label: 'Residências',
          data: [9, 10, 6, 5, 3],
          borderColor: '#8a2be2',
          fill: false
        },
        {
          label: 'Indústrias',
          data: [7, 6, 9, 8, 7],
          borderColor: '#4b0082',
          fill: false
        }
      ]
    }
  });

  //quizz
  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    let score = 0;

    if (q1 && q1.value === "certo") score++;
    if (q2 && q2.value === "certo") score++;

    document.getElementById("quiz-resultado").textContent =
      `Você acertou ${score}/2 perguntas! 👏`;
  });

});