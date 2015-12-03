
$(document).bind("dataload.exhibit", function() {
  $("input").addClass("form-control");
  $('div.exhibit-mapView-map').addClass('img-rounded');
  $('div.exhibit-facet-body').addClass('img-rounded');
  jQuery('.mypanel').addClass('panel panel-primary');
  jQuery('.exhibit-flowingFacet-header').addClass('panel-heading');
  jQuery('.exhibit-facet-header').addClass('panel-heading');
});
function create_yt(rec, url) {
  var _url = url.split('/').pop()
  $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src = "https://www.youtube.com/embed/' + _url + '" frameborder = "0" fs="1" allowfullscreen> < /iframe></div > ');
}

function create_go(rec, url) {
  url = url.replace('edit', 'preview');
  $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe src="' + url + '" ></iframe></div>');
}

function create_pdf(rec, url) {
  $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src = "' + url + '" frameborder = "0" allowfullscreen > < /iframe></div >');
}

function muestraRecurso(rec) {
  var itemID = rec.getAttribute("itemid");
  var url = rec.getAttribute("url");
  var pos = rec.getElementsByClassName('iflense');
  if (url.indexOf('docs.google') != -1) {
    create_go(pos, url);
  } else if (url.endsWith('.pdf')) {
    create_pdf(pos, url);
  } else if (url.indexOf('youtu') != -1) {
    create_yt(pos, url);
  }
}
function map_with_borders(mapDiv) {

  var map = new google.maps.Map(
    mapDiv, {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    });

  var ctaLayer = new google.maps.KmlLayer({
    url: "http://area47mil.educa.aragon.es/visual2/aragon.kmz",
    map: map
  });
  return map;
}