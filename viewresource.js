function create_yt(rec, url) {
    var _url = url.split('/').pop()
    _url = _url.split('watch?v=').pop()

    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src = "//www.youtube.com/embed/' +
        _url + '" frameborder = "0" fs="1" allowfullscreen> < /iframe></div > ');
}

function create_go(rec, url) {
    url = url.replace('edit', 'preview');
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe src="' + url + '" ></iframe></div>');
}

function create_pdf(rec, url) {
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src="' + url + '" frameborder = "0" allowfullscreen > < /iframe></div >');
}

function create_kizoa(rec, url) {
    var _url = url.split('/').pop()
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src="http://www.kizoa.com/embed-' + _url + '" frameborder = "0" fs="1" allowfullscreen> < /iframe></div > ');
}

function create_sway(rec, url) {
    var _url = url.split('/').pop();
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe  src="https://sway.com/s/' + _url + '/embed" frameborder = "0" fs="1" allowfullscreen> < /iframe></div > ');
}

function create_vimeo(rec, url) {
    var _url = url.split('/').pop()
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"> <iframe src="https://player.vimeo.com/video/' + _url + '" ></iframe></div>');
}

function create_swf(rec, url) {
    $(rec).append('<div class="embed-responsive embed-responsive-16by9"><object data="' + url + '" type="application/x-shockwave-flash" > <param value="' + url + '" name="movie"  /></object></div>');
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
    } else if (url.indexOf('kizoa') != -1) {
        create_kizoa(pos, url);
    } else if (url.indexOf('sway') != -1) {
        create_sway(pos, url);
    } else if (url.indexOf('vimeo') != -1) {
        create_vimeo(pos, url);
    } else if (url.indexOf('swf') != -1) {
        create_swf(pos, url);
    }
}

function showProjects(centro) {
    var itemID = centro.getAttribute("itemid");
    var datos = centro.getElementsByClassName('exhibit-item');
    if (datos.length > 1) {
        jQuery(datos).wrap('<li></li>');
        ds = centro.getElementsByClassName('datosproyectos')
        jQuery(ds).contents().filter(function() {
            return (this.nodeType == 3);
        }).remove();
    }
}

 jQuery(document).bind("dataload.exhibit", function() {
        jQuery('div.exhibit-views-header div').append('<span class="pull-right"> <span class="glyphicon glyphicon-hand-right"></span> <strong>Recursos totales:</strong><span id="totalRec"></span></span>');

    });

