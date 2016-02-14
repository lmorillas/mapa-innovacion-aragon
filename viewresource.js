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
    jQuery('div.exhibit-views-header div').append('<span class="pull-right"> <span class="glyphicon glyphicon-hand-right"></span> <strong>Recursos totales:</strong> 125</span>');
});


function lineaFormatter(elmt) {
    var link = jQuery(elmt).find('.exhibit-flowingFacet-value-link') //.prepend('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABm0lEQVQ4T63UzUvUURTG8c9vEYGiMwlFuDA3OpWzK6gWgvUHFOQiCFQIoqaZCoLATZvWLdL0V1CQ2NCyokWLIAuCXqBlxdgiatMLiCXagAQVd6ZhbMycps7y3nu+53nuPfdEfh9pbNNlh8hmfEfBK0/xDC9r06JlnA4n7bbPTi26FaUVfSulNpnW7LF5t1035/LS3F9BHW4Z1ibj8wpKy8tjks6Z8db+yrkqKEDyEnrN/xFS2byv1SGz3pRhZVCwM6x/VSW1FS5Y54zJYDOA0oaMmrBQl5LaQ4NaXHMsgIZclHPU+4ZAsXZZI5EusUt67DHXEOiepKznkW5THlq0wdeGQB+s0WdtJGXKA4s2/jsoFv8PawyKnZDxriFr49rlnA+vttWAcZN1NmJttQGt8o6UG3KTnNMOyPr0V6pGtDlrwqwr1S/S6aarkvrqVHZXQsaM1/qrX6Qio9MNp6x3fBVlQcmojxXIclBYSThsr4OlMZJS1ONLqc4LzQqaPLHgjnyws/IYqe5swXYpuygNthAF0x79HGyF2rv8Ab1raGApJNh5AAAAAElFTkSuQmCC" style="vertical-align: middle;"></img> ');
    var dest = jQuery(elmt).find(".exhibit-flowingFacet-value-checkbox img");
    switch (link[0].textContent) {
        case "TAC (Tecnologías del Aprendizaje y del Conocimiento)":
            dest.replaceWith('<img src="http://innovacion.educa.aragon.es/w/images/thumb/3/3c/TAC.svg/18px-TAC.svg.png" alt="TAC">').show();
            break;
        case "Gestión de las emociones":
            dest.replaceWith('<img src="http://innovacion.educa.aragon.es/w/images/thumb/6/6b/Gestion_de_emociones.svg/18px-Gestion_de_emociones.svg.png">');
            break;
        case "Metodologías activas":
            dest.replaceWith('<img src="http://innovacion.educa.aragon.es/w/images/thumb/7/73/Metodologias_activas.svg/18px-Metodologias_activas.svg.png">');
            break;
        case "Compromiso social":
            dest.replaceWith('<img src="http://innovacion.educa.aragon.es/w/images/thumb/6/6f/Compromiso_social.svg/18px-Compromiso_social.svg.png">');
            break;
        case "Comunicación oral":
            dest.replaceWith('<img src="http://innovacion.educa.aragon.es/w/images/thumb/8/8e/Monstruo_comunicacion_oral.svg/18px-Monstruo_comunicacion_oral.svg.png">');
            break;
            }
}

function institucionalFormatter (elmt){
    cosa = elmt;
    switch (jQuery(elmt).find('.exhibit-flowingFacet-value-link').text()){
        case "1":
            jQuery(cosa).find('.exhibit-flowingFacet-value-link').html('Institucional');
            break;
        case "0":
            jQuery(cosa).find('.exhibit-flowingFacet-value-link').html('No institucional');
            break;
    }
    switch (elmt[0].getAttribute('title')){
        case "0":
            elmt[0].setAttribute('title', 'No institucional');
            break;
        case "1":
            elmt[0].setAttribute('title', 'Institucional');
    }
}