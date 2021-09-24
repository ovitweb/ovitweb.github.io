const k="'";

var arrLang = {
  'en': {
    'ht1': 'Fast and Easy Way To Rent A Car',
    'hp1': 'Looking for good rates and a trusted car hire company in Italy? At Budget, you can find great rates and special deals on all car rentals',
    's1t1':'What we offer',
    's1t2':'Featured Vehicles',
    's1i1t1':'Range Rover',
    's1i1t2':'Land Rover',
    's1i2t1':'Tourneo',
    's1i2t2':'Ford',
    's1i3t1':'Ducato',
    's1i3t2':'Fiat',
    's1i4t1':'Vivaro',
    's1i4t2':'Opel',
    's2t1':'Minus Rental Up To 9 Seats',
    's2p1':'Top solution among our offers, the 9-seater minibus rental boasts state-of-the-art safety systems and all the comforts you could wish for: they are suitable to accommodate up to nine people and up to eight medium-sized luggage, but thanks to the folding seats you will be able to gain even more space. Each minivan is checked and maintained in perfect efficiency thanks to our staff, fast practices with practicality, certainty of costs, vehicles in perfect efficiency and absolutely competitive rates.',
    's2p2':'If you need to organize a business trip with your team, with our 9-seater van rental service, you can easily reach every road of your business. You will avoid the hassle of organizing yourself with multiple cars and you will not feel limited by the limited space that five-seater cars can offer, moving easily even in the traffic of big cities. We will guide you in the best choice.',
    's3t1':'Services',
    's3t2':'Our Latest Services',
    's3i1':'Wedding Ceremony',
    's3i2':'City Transfer',
    's3i3':'Airport Transfer',
    's3i4':'Whole City Tour',
    's4t1':'Do You Want To Rent a Vehicle ? So Don'+k+'t Be Late.',
    's4b1':'Contact us',
    's5t1':'Contact us',
    's5t2':'Let'+k+'s get in touch',
    's5s1':'Address:',
    's5s2':'Pramoda Asian Rental, Travels & transport Messina, Car Rental',
    's5s3':'Phone:',
    's5s4':'Email:',
    's5fi1':'Your Name',
    's5fi2':'Your Email',
    's5fi3':'Phone Number',
    's5fi4':'Message',
    's5fb':'Submit',
    'fp1':'Our commitment to ensuring a stress-free car rental experience. Travel Safely. Rent a Car With Us!',
    'ft1':'Have a Questions?'
  },
  'itali': {
    'ht1': 'Un Modo Facile e Veloce Per Noleggiare Un'+k+'auto',
    'hp1': 'Cerchi buone tariffe e una compagnia di noleggio auto di fiducia in Italia? Su Budget puoi trovare ottime tariffe e offerte speciali su tutti i noleggi auto',
    's1t1':'Cosa Offriamo',
    's1t2':'Veicoli In Primo Piano',
    's1i1t1':'Range Rover',
    's1i1t2':'Land Rover',
    's1i2t1':'Tourneo',
    's1i2t2':'Ford',
    's1i3t1':'Ducato',
    's1i3t2':'Fiat',
    's1i4t1':'Vivaro',
    's1i4t2':'Opel',
    's2t1':'Noleggio Pulmini Fino A 9 Posti',
    's2p1':'Soluzione di punta tra le nostre offerte il noleggio pulmino 9 posti vanta sistemi di sicurezza di ultima generazione e di tutti i comfort che puoi desiderare: sono adatti a ospitare fino a nove persone e fino a otto bagagli di dimensioni medie, ma grazie ai sedili ribaltabili riuscirai a ricavare ancora più spazio. Ogni minivan è controllato e mantenuto in perfetta efficienza grazie al nostro personale,  pratiche veloci con praticità, certezza dei costi, mezzi in perfetta efficienza e tariffe assolutamente competitive.',
    's2p2':'Se devi organizzare una trasferta di lavoro con il tuo team, con il nostro servizio di noleggio furgoni 9 posti, potrai raggiungere facilmente ogni strada del tuo business. Potrai evitare la scocciatura di organizzarti con più macchine e non ti sentirai limitato dal poco spazio che possono offrire gli autoveicoli a cinque posti, muovendoti con facilità anche nel traffico delle grandi città.Noi ti guideremo nella scelta migliore.',
    's3t1':'Servizi',
    's3t2':'I Nostri Ultimi Servizi',
    's3i1':'Cerimonia Matrimoniale',
    's3i2':'Trasferimento In Città',
    's3i3':'Trasferimento Aeroportuale',
    's3i4':'Tour Dell'+k+'intera Città',
    's4t1':'Vuoi Noleggiare Un Veicolo? Quindi Non Essere in Ritardo.',
    's4b1':'Contattaci',
    's5t1':'Contattaci',
    's5t2':'Mettiamoci In Contatto',
    's5s1':'Indirizzo:',
    's5s2':'Pramoda Asian Noleggio , Travels & transport Messina, Autonoleggio',
    's5s3':'Telefono:',
    's5s4':'E-mail:',
    's5fi1':'Il Tuo Nome',
    's5fi2':'La Tua Email',
    's5fi3':'Numero Di Telefono',
    's5fi4':'Messaggio',
    's5fb':'Sottoporre',
    'fp1':'Il nostro impegno per garantire un'+k+'esperienza di noleggio auto senza stress. Viaggia in sicurezza. Noleggia un'+k+'auto con noi!',
    'ft1':'Hai Delle Domande?',
  }
};

// Process translation
$(function() {
  var defaultLang  = 'itali';
  $('.lang').each(function(index, item) {
    $(this).text(arrLang[defaultLang][$(this).attr('key')]);
  });
  $('.langP').each(function(index, item) {
    $(this).attr("placeholder", arrLang[defaultLang][$(this).attr('key')]);
  });

  $('#languages').on('change', function() {
    var lang = this.value;
    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
      $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
    });

    $('.langP').each(function(index, item) {
      $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
    });
  });
});


