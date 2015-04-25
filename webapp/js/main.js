function initialize() {
  google.maps.visualRefresh = true;
  var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
    (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
  if (isMobile) {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
  }
  var mapDiv = document.getElementById('googft-mapCanvas');
  //mapDiv.style.width = isMobile ? '100%' : '500px';
  //mapDiv.style.height = isMobile ? '100%' : '300px'; 
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.77325871926702, -122.43857799863281),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  layer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "col2",
      from: "1SudLVRp_QESyV1T2MaX3WgNLhsbB4xKbaRLQ_qeC",
      where: ""
    },
    options: {
      styleId: 2,
      templateId: 3
    }
  });

  if (isMobile) {
    var legend = document.getElementById('googft-legend');
    var legendOpenButton = document.getElementById('googft-legend-open');
    var legendCloseButton = document.getElementById('googft-legend-close');
    legend.style.display = 'none';
    legendOpenButton.style.display = 'block';
    legendCloseButton.style.display = 'block';
    legendOpenButton.onclick = function() {
      legend.style.display = 'block';
      legendOpenButton.style.display = 'none';
    }
    legendCloseButton.onclick = function() {
      legend.style.display = 'none';
      legendOpenButton.style.display = 'block';
    }
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
