var map = L.map('map', {
    center: [-12.112287352347481, -76.81668846186788],
    zoom: 12,
    minZoom: 10,
    maxZoom: 50,
    maxBounds: [[-12.14359160525722, -76.9685743937619], [-11.98567672553802, -76.573632556158]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'] });
googleStreets.addTo(map);



var centros_arqueologicos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:centro-arqueologico_cieneguilla", //gisweb:centros_arqueologicos_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 centros_arqueologicos.addTo(map);
 var centro_cultural = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:centro-cultural_cieneguilla", //gisweb:centro_cultural_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 centro_cultural.addTo(map);
 var clinicas_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:clinicas_cieneguilla", //gisweb:clinicas_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 clinicas_cieneguilla.addTo(map);
 var colegios_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:colegios_cieneguilla", //gisweb:colegios_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 colegios_cieneguilla.addTo(map);
 var comisarias_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:comisarias_cieneguilla", //gisweb:comisarias_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 comisarias_cieneguilla.addTo(map);
 var esculturas_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:esculturas_cieneguilla", //gisweb:esculturas_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 esculturas_cieneguilla.addTo(map);
 var hoteles_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:hoteles_cieneguilla", //gisweb:hoteles_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 hoteles_cieneguilla.addTo(map);
 var mercados_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:mercados_cieneguilla", //gisweb:mercados_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 mercados_cieneguilla.addTo(map);
 var mirador_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:mirador_cieneguilla", //gisweb:mirador_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 mirador_cieneguilla.addTo(map);
 var refugios_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:refugios_cieneguilla", //gisweb:refugios_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 refugios_cieneguilla.addTo(map);
 var restaurant_cieneguilla = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_CIENEGUILLA/wms?", {
    layers: "webgis_CIENEGUILLA:restaurant_cieneguilla", //gisweb:restaurant_cieneguilla
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 restaurant_cieneguilla.addTo(map);

 var baseMaps = {
    "OSM": basemapOSM,
    "satelite": googleSat,
    "terrain": googleTerrain,
    "streets": googleStreets,

};

var overlayMaps = {
   "centro arqueologico": centros_arqueologicos,
   "centro cultural": centro_cultural,
   "clinicas": clinicas_cieneguilla,
   "colegios": colegios_cieneguilla,
   "comisarias": comisarias_cieneguilla,
   "esculturas": esculturas_cieneguilla,
   "hoteles": hoteles_cieneguilla,
   "mercados": mercados_cieneguilla,
   "mirador": mirador_cieneguilla,
   "refugios": refugios_cieneguilla,
   "restaurant": restaurant_cieneguilla
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  