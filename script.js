document.getElementById('modoEscuro').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

const traduzir = document.getElementById('traduzir');
let traduzido = false;

traduzir.addEventListener('click', () => {
  if (!traduzido) {
    document.querySelector('h1').innerText = 'From Farm to Market';
    document.querySelector('header p').innerText = 'How organic food reaches you';
    traduzir.innerText = 'PT';
    
    const secoes = document.querySelectorAll('section');

    secoes[0].querySelector('h2').innerText = 'The Importance of Organic Food';
    secoes[0].querySelector('p').innerText = 'Organic food is grown without pesticides and respects nature, bringing more flavor, health and sustainability.';

    secoes[1].querySelector('h2').innerText = 'The Organic Cultivation Cycle';
    secoes[1].querySelector('p').innerText = 'Organic farming involves caring for the soil, using composting and respecting the seasons. No chemicals are used.';

    secoes[2].querySelector('h2').innerText = 'The Food at the Market';
    secoes[2].querySelector('p').innerText = 'At fairs, local producers offer fresh food directly to consumers, strengthening the economy and local culture.';

    secoes[3].querySelector('h2').innerText = 'Organic Markets in Curitiba';
    secoes[3].querySelector('p').innerText = 'Check the map for some known spots with organic food markets in Curitiba:';

    secoes[4].querySelector('h2').innerText = 'Organic Producers of Paraná';
    secoes[4].querySelector('p').innerText = 'Small farmers and agroecological cooperatives are part of this network that connects countryside and city in a healthy way.';

    document.querySelector('footer p').innerText = '© 2025 Agrinho - Countryside and City Connection';
    traduzido = true;
  } else {
    location.reload();
  }
});
