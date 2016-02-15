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
    var link = jQuery(elmt).find('.exhibit-flowingFacet-value-link');
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
    switch (jQuery(elmt).find('.exhibit-flowingFacet-value-link').text()){
        case "1":
            jQuery(elmt).find('.exhibit-flowingFacet-value-link').html('Institucional');
            break;
        case "0":
            jQuery(elmt).find('.exhibit-flowingFacet-value-link').html('No institucional');
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


jQuery(document).bind("dataload.exhibit", function() {
        var leyenda = '<div class="exhibit-color-legend"><span class="exhibit-legendWidget-entry"><img src="http://innovacion.educa.aragon.es/w/images/thumb/6/6f/Compromiso_social.svg/18px-Compromiso_social.svg.png" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Comprometido</span>&nbsp; </span>&nbsp; <span class="exhibit-legendWidget-entry"><img src="http://innovacion.educa.aragon.es/w/images/thumb/8/8e/Monstruo_comunicacion_oral.svg/18px-Monstruo_comunicacion_oral.svg.png" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Comunicador</span>&nbsp; </span>&nbsp; <span class="exhibit-legendWidget-entry"><img src="http://innovacion.educa.aragon.es/w/images/thumb/6/6b/Gestion_de_emociones.svg/18px-Gestion_de_emociones.svg.png" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Emotivo</span>&nbsp; </span>&nbsp; <span class="exhibit-legendWidget-entry"><img src="http://innovacion.educa.aragon.es/w/images/thumb/7/73/Metodologias_activas.svg/18px-Metodologias_activas.svg.png" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Activo</span>&nbsp; </span>&nbsp; <span class="exhibit-legendWidget-entry"><img src="http://innovacion.educa.aragon.es/w/images/thumb/3/3c/TAC.svg/18px-TAC.svg.png" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Digital</span>&nbsp; </span>&nbsp; <span class="exhibit-legendWidget-entry"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACA0lEQVQ4T2NkwA50gMLGqrLy5oz/GTSA7P8MjAw3bj1+eBLIPgPE19C1MaILyIlL5jsaGPlbaOvxqsnKfdNRVPr27x9Q58N7XDcfPeA+fuXS500njiz7+PnzbGS9KAYBDdlQERkvlBkQ/AGHS8HCU9atFuhZufDNw5cvg2Dq4AbJiYlvWFLTwm+rZ/AZnyEwuf3nzvEldTe8e/D8OdgwsEEg7wBdEkzIJegWTF63UrB2/sxFIG+CDNKJ9/CdtKCi7gsxLkFXE9dex7t45/YskEHx04sqczL8gp6TY9C0jWuksvs7JzICo3jajKIKbSdDk4/kGLT37GmB7AmdVxjVZOT3HZ4y66eYgNBvcgx68e4dq0NBGjujupz8vgMTZv2UEKLUIKDXplHDa0DvxE0rLM/L9A95Ro7Xpq5fLZUzsWsCKNa0Yl29py6qbiAqIaJbFttax7dk9/Z0cIKUl5DKKQ2PCc8ODH1Piqsmrl0u1LRg9oJ3nz/PgWcRBXHJ9fMr6wUcDIyJctmu0yf5M/va39x7/jQYnkVgrlCQlFxXFBYtmhsYjtdlIJdMWrPyJcwQDINAAvy8vKl+VnZRFlo6vOoy8t+0FZW/gsSv3r/LfePRA64T1y5/2XbiyBKQd5CDAaM8gkpqAmkTdVl5S2C2BhVsoKLtxs3HD48BWaCC7QZ6WAIAOPHIUk6vzg0AAAAASUVORK5CYII=" style="vertical-align: middle;">&nbsp;<span class="exhibit-legendWidget-entry-title">Varias&nbsp;líneas</span>&nbsp; </span> &nbsp; </div>';
        jQuery('.exhibit-color-legend').replaceWith(leyenda);
        jQuery('.exhibit-color-legend').show();
});
