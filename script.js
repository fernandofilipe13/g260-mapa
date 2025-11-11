 // Inicializar mapa
    var map = L.map('map').setView([38.6670, -9.2002], 18);

    // Camada base OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    function criarMarcadorComFundo(lat, lng, iconUrl, corFundo, popupTexto) {
      // Círculo de fundo
      L.circleMarker([lat, lng], {
        radius: 18,
        fillColor: corFundo,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map);

      // Ícone sobreposto
      L.marker([lat, lng], {
        icon: L.icon({
          iconUrl: iconUrl,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        })
      }).addTo(map).bindPopup(popupTexto);
    }

    // Estacionamento A
    var zonaEstacionamento = L.rectangle([
    [38.668306487026655, -9.199612661495365], // canto sudoeste (SW)
    [38.667994447475074, -9.199308655499648]  // canto nordeste (NE)
    ], {
        color: "#007bff",      // cor da borda
        weight: 2,             // espessura da linha
        fillColor: "#007bff",  // cor de preenchimento
        fillOpacity: 0.3        // transparência
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Interior");
    
    // Estacionamento B
    var zonaEstacionamentoB = L.polygon([
    [38.6682755467206, -9.200569460769279],
    [38.66798682314212, -9.200322566035684],
    [38.66837458987054, -9.20010813282798],
    [38.668384219905796, -9.200382271216238]
    ], {
    color: "#007bff",
    weight: 2,
    fillColor: "#007bff",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Interior");


        // Estacionamento C
    var zonaEstacionamentoC = L.polygon([
    [38.66792480808637, -9.200688545576927],
    [38.66788126796597, -9.200363827518364],
    [38.66734522934188, -9.200437739812433],
    [38.66763466965347, -9.200758988987092]
    ], {
    color: "#007bff",
    weight: 2,
    fillColor: "#007bff",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Interior");
        // Estacionamento D
    var zonaEstacionamentoD = L.polygon([
    [38.667103914693804, -9.199098766765891],
    [38.66743373735762, -9.199206306490284],
    [38.66743246889405, -9.199263780806902],
    [38.667099916878385, -9.199135904547022]
    ], {
    color: "#007bff",
    weight: 2,
    fillColor: "#007bff",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Interior");
    
    // Estacionamento Exterior
    var zonaEstacionamentoE = L.polygon([
    [38.66847775989481, -9.200201387137014],
    [38.66852819250671, -9.20018312000617],
    [38.668486206247145, -9.199319513270048],
    [38.668447630304996, -9.19932713612741]
    ], {
    color: "#ff0c61",
    weight: 2,
    fillColor: "#ff0c61",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Exterior");
    
    // Estacionamento Exterior2
    var zonaEstacionamentoE2 = L.polygon([
    [38.66708981019035, -9.19895117409531],
    [38.667103372344286, -9.198875757374914],
    [38.667607742283565, -9.199073392371272],
    [38.66760133309658, -9.199151069083177]
    ], {
    color: "#ff0c61",
    weight: 2,
    fillColor: "#ff0c61",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Exterior");

    // Estacionamento Exterior3
    var zonaEstacionamentoE2 = L.polygon([
    [38.66698330326094, -9.200432006580284],
    [38.66710025336563, -9.201036759070146],
    [38.6670542085695, -9.201051490326606],
    [38.666931483264804, -9.200456777243126]
    ], {
    color: "#ff0c61",
    weight: 2,
    fillColor: "#ff0c61",
    fillOpacity: 0.3
    }).addTo(map)
    .bindPopup("<b>Zona de Estacionamento</b><br>Exterior");

    // Função para criar um marcador com fundo colorido e ícone
function criarMarcadorComFundo(lat, lng, iconUrl, corFundo, popupTexto) {
  // Círculo de fundo
  L.circleMarker([lat, lng], {
    radius: 18, // tamanho do círculo
    fillColor: corFundo,
    color: "#fff",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.9
  }).addTo(map);

  // Ícone sobreposto
  return L.marker([lat, lng], {
    icon: L.icon({
      iconUrl: iconUrl,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -15]
    })
  }).addTo(map).bindPopup(popupTexto);
}

// Pontos de interesse destacados
var pontos = {
  entrada: criarMarcadorComFundo(
    38.666973680275646,
    -9.200171536996534,
    "https://cdn-icons-png.flaticon.com/128/2555/2555013.png",
    "#d26affff",
    `<b>Entrada Principal</b><br>Horário: 8h00 – 21h00<br><button class='btn btn-directions' onclick="abrirNavegacao('entrada')">Direções até aqui</button>`
  ),

  saida: criarMarcadorComFundo(
    38.66770701861505,
    -9.199233695314595,
    "https://cdn-icons-png.flaticon.com/128/1049/1049261.png",
    "#28a745",
    `<b>Entrada Pedonal</b><br>Horário: 21h00 – 23h00<br><button class='btn btn-directions' onclick="abrirNavegacao('saida')">Direções até aqui</button>`
  ),

  auditorio: criarMarcadorComFundo(
    38.66824089491979,
    -9.20019812495795,
    "https://cdn-icons-png.flaticon.com/128/14002/14002559.png",
    "#ff9900",
    `<b>Auditório</b><br><button class='btn btn-directions' onclick="abrirNavegacao('auditorio')">Direções até aqui</button>`
  ),

  cantina: criarMarcadorComFundo(
    38.66708941491236,
    -9.199403704976435,
    "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    "#007bff",
    `<b>Cantina</b><br>Aberta das 12h00 às 15h00.<br><button class='btn btn-directions' onclick="abrirNavegacao('cantina')">Direções até aqui</button>`
  )
};


    var rota = null;
    var posicaoAtual = null;
    var marcadorUtilizador = null;

    // Geolocalização em tempo real
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function (position) {
          posicaoAtual = [position.coords.latitude, position.coords.longitude];

          // Atualiza marcador do utilizador
          if (marcadorUtilizador) {
            marcadorUtilizador.setLatLng(posicaoAtual);
          } else {
            marcadorUtilizador = L.circleMarker(posicaoAtual, {
              radius: 8,
              fillColor: "#ff0000",
              color: "#fff",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.9
            }).addTo(map).bindPopup("Está aqui");
          }
        },
        function () {
          alert("Não foi possível obter a localização.");
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocalização não suportada neste navegador.");
    }

    // Função para criar rota
    function irPara(destino) {
      if (!posicaoAtual) {
        alert("A localização ainda não foi obtida. Aguarde alguns segundos.");
        return;
      }
      
      pontos[destino].openPopup();
      
      if (rota) {
        map.removeControl(rota);
      }
      

      rota = L.Routing.control({
        waypoints: [
          L.latLng(posicaoAtual[0], posicaoAtual[1]),
          L.latLng(pontos[destino].getLatLng())
        ],
        routeWhileDragging: false,
        show: false,
        language: 'pt',
        createMarker: function() { return null; },
        router: new L.Routing.OSRMv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1'
        })
      }).addTo(map);
    }

function abrirNavegacao(destino) {
  if (!posicaoAtual) {
    alert("A localização ainda não foi obtida. Aguarde alguns segundos.");
    return;
  }

  var latDestino = pontos[destino].getLatLng().lat;
  var lngDestino = pontos[destino].getLatLng().lng;

  var latOrigem = posicaoAtual[0];
  var lngOrigem = posicaoAtual[1];

  var linkGoogleMaps = `https://www.google.com/maps/dir/?api=1&origin=${latOrigem},${lngOrigem}&destination=${latDestino},${lngDestino}&travelmode=driving`;

  window.open(linkGoogleMaps, "_blank");
 
}
