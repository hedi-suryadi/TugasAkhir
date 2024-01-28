//  Peta BaseMap
var mbAttrOpenStreetMap_Mapnik = '&copy; <a href="https://www.openstreetmap.orgcopyright">OpenStreetMap<a>contributors'
	   mbUrlOpenStreetMap_Mapnik = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
var mbAttrEsri_WorldImagery = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      mburlEsri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
//Settingan Ukuran Peta Basemap
var OpenStreetMap_Mapnik = L.tileLayer(mbUrlOpenStreetMap_Mapnik, {maxZoom: 22,attribution:mbAttrOpenStreetMap_Mapnik});
var Esri_WorldImagery = L.tileLayer(mburlEsri_WorldImagery, {maxZoom: 25, attribution: mbAttrEsri_WorldImagery}); 

//  <!-- Area Halaman Web Auto Panning adalah AREA GUNUNG KERINCI -->
var southWest = L.latLng(-1.459646, 101.600876),
    northEast = L.latLng(-1.870215, 100.92041),
    bounds = L.latLngBounds(southWest, northEast);

//   <!-- Titik tengah Halaman Web adalah GUNUNG API KERINCI -->
var map = L.map('map', {
   zoomsliderControl: true,
   zoomControl: false,
   maxBounds: bounds,
   maxZoom: 23,
   minZoom: 8,
   layers: [OpenStreetMap_Mapnik]
 }).setView([-1.6942343305078313, 101.26384885851492], 12);

// <=========Batas Awal Custommarker =================================================================================================================================================>
// <!-- Lokasi GUNUNG API KERINCI -->
// Marker Data Section
var custommarker = L.layerGroup();
var Icon1 = L.icon({
      iconUrl:'danau.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popup.setLatLng([-1.737307, 101.2397]);
      popup.setContent('<p><img src="1.jpg" width="100" height="100" style="vertical-align:middle"/> <b>Danau Belibis</b> Disini!</p>');
var marker = L.marker([-1.737307, 101.2397], {icon:Icon1}).addTo(custommarker).bindPopup(popup).closePopup();
// ======================== Batas Custommarker 1 Danau Belibis====================================================================================================================================
var Icon2 = L.icon({
      iconUrl: 'vila.webp',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popup.setLatLng([-1.7658687809376736, 101.26312526164331]);
      popup.setContent('<p><img src="2.PNG" width="135" height="135" style="vertical-align:middle"/> <b>PELANGI Guest House </b> Disini!</p>');
var marker = L.marker([-1.7658687809376736, 101.26312526164331], {icon:Icon2}).addTo(custommarker).bindPopup(popup).closePopup();
// =========================Batas Custommarker 2 PELANGI Guest House==========================================================================================================================================================
var Icon3 = L.icon({
	   iconUrl: 'kantordesa.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
	   popup.setLatLng([-1.7730751206755504, 101.22467311277336]);
	   popup.setContent('<p><img src="3.PNG" width="135" height="135" style="vertical-align:middle"/> <b>Kantor Kepala Desa Kebun Baru</b> Disini!</p>');
var marker = L.marker([-1.7730751206755504, 101.22467311277336], {icon:Icon3}).addTo(custommarker).bindPopup(popup).closePopup();
// =============================Batas Custommarker 3 Kantor Kepala Desa Kebun Baru================================================================================================================================================================================   
var Icon4 = L.icon({
      iconUrl: 'pinturimba.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 155, closeOnClick: false, autoClose: true});
      popup.setLatLng([-1.7462528790704497, 101.25869365324806]);
      popup.setContent('<p><img src="4.jpg" width="155" height="155" style="vertical-align:middle"/> <b>Pintu Rimba Kerinci</b> Disini!</p>');
var marker = L.marker([-1.7462528790704497, 101.25869365324806], {icon:Icon4}).addTo(custommarker).bindPopup(popup).closePopup();
// ===============================Batas Custommerker 4 Pintu Rimba Kerinci=======================================================================================================================================================================================================================
var Icon5 = L.icon({
      iconUrl:'taman.png',
      iconSize: [30,30],
      iconAnchor: [15,30],
      popupAnchor: [0,-30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popup.setLatLng([-1.7022671027281284, 101.26838109147123]);
      popup.setContent('<p><img src="5.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Taman Nasional Kerinci Seblat </b> Disini!</p>');
var  marker = L.marker([-1.7022671027281284, 101.26838109147123], {icon:Icon5}).addTo(custommarker).bindPopup(popup).closePopup();
// ================================Batas Custommerker 5 Taman Nasional Kerinci Seblat==================================================================================================================================================================================================================================
var Icon6 = L.icon({
	   iconUrl:'sehaltergunung.png',
   	iconSize: [30, 40],
	   iconAnchor: [15, 30],
   	popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popup.setLatLng([-1.7202941828278753, 101.26343431443856]);
      popup.setContent('<p><img src="6.webp" width="135" height="135" style="vertical-align:middle"/> <b>Shelter 1 Gunung Kerinci</b> Disini!</p>');
var  marker = L.marker([-1.7202941828278753, 101.26343431443856], {icon:Icon6}).addTo(custommarker).bindPopup(popup).closePopup();
// ====================================Batas Custommerker 6 Shelter 1 Gunung Kerinci====================================================================================================================================================================================================================================================================================
var  Icon7 = L.icon({
      iconUrl: 'icon.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popup.setLatLng([-1.7361646545608287, 101.27770358727939]);
      popup.setContent('<p><img src="7.PNG" width="135" height="135" style="vertical-align:middle"/> <b> SDN 213 Sangir </b> <br/> Disini!</p>');
var  marker = L.marker([-1.7361646545608287, 101.27770358727939], {icon:Icon7}).addTo(custommarker).bindPopup(popup).closePopup();
// =====================================Batas Custommerker 7 SDN 213 Sangir================================================================================================================================================================================================================
var  Icon8 = L.icon({
	   iconUrl: 'airjerjun.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});	
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popup.setLatLng([-1.7009584244837797, 101.322132190704]);
		popup.setContent('<p><img src="8.PNG" width="130" height="120" style="vertical-align:middle"/></p><p><b>Air terjun, desa air tenang </b> Disini! </p>');
var  marker = L.marker([-1.7009584244837797, 101.322132190704], {icon:Icon8}).addTo(custommarker).bindPopup(popup).closePopup();
// ======================================Batas Custommerker 8 Air terjun, desa air tenang=============================================================================================================================================================================================
var  Icon9 = L.icon({
	   iconUrl: 'masjid.png',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var  popup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popup.setLatLng([-1.7535617464768605, 101.30254560199562]);
	   popup.setContent('<p><img src="9.PNG" width="135" height="135" style="vertical-align:middle"/> <b>Majelis Talim Istiqomah</b> Disini!</p>');
var marker = L.marker([-1.7535617464768605, 101.30254560199562], {icon:Icon9}).addTo(custommarker).bindPopup(popup).closePopup();
// <================Batas Akhir CastomMarker 9 Majelis Ta'lim Istiqomah=========================================================================================================================================================>
var Icon10 = L.icon({
      iconUrl:'caffe.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popup1 = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popup1.setLatLng([-1.7067720630555194, 101.33603886920453]);
      popup1.setContent('<p><img src="10.jpg" width="135" height="135" style="vertical-align:middle"/> <b>HT ARABICA COFFEE,INTERNATIONAL CAFE</b> Disini!</p>');
var marker = L.marker([-1.7067720630555194, 101.33603886920453], {icon:Icon10}).addTo(custommarker).bindPopup(popup1).closePopup();
// <================Batas Akhir CastomMarker 10 HT ARABICA COFFEE,INTERNATIONAL CAFE=========================================================================================================================================================>
// <==============layer ====================================================================================================================================================================>
  // scale bar botton 
var options=null;
var scale = L.control.betterscale({
      position: "bottomcenter",
      metric: true, 
      imperial: false
}).addTo(map);

// <!-- Scale Factor / Skala Angka -->
L.control.scalefactor({position:'bottomcenter'}).addTo(map);

//  <!-- Cursor Mouse Position -->
var ctrlCurMosPos=L.control.mousePosition({position: 'bottomcenter'}).addTo(map);
 // <!-- Utara Peta / Utara Geografis -->
var comp = new L.Control.Compass ({
      position: "bottomcenter",
      autoActive: false, 
      showDigit:false
});  
map.addControl(comp);
//  <!-- Credits -->
var credctrl = L.controlCredits({
      position: 'bottomright',
      image: "images/gis.png",
      link: "https://hedi-suryadi.github.io/BioHediSuryadi/",
      text: "Interactive mapping<br/>by HEDI SURYADI"
}).addTo(map);


// event draw
map.on(L.Draw.Event.CREATED, function (event) {
var layer = event.layer;
      drawnItems.addLayer(layer);});
      map.on('draw:created', function (e) {
      console.log('===================');
      drawnItems.eachLayer(function (layer) {
var vector_geojson = layer.toGeoJSON();
//console.log(vector_geojson);
var vector_string = JSON.stringify(vector_geojson);
      console.log(vector_string);});});map.on('draw:edited', function (e) {
      console.log('===================');
      drawnItems.eachLayer(function (layer) {
var vector_geojson = layer.toGeoJSON();
//console.log(vector_geojson);
var vector_string = JSON.stringify(vector_geojson);
      console.log(vector_string);});});

// <!-- World Mini Map PLugin -->>
// create WorldMiniMap with some options and add to map
var worldMiniMap = L.control.worldMiniMap({position: 'bottomright', lineColor: 'red', circleColor: 'red', style: {opacity: 0.9, borderRadius: '0px', backgroundColor: 'lightblue'}}).addTo(map);
var tpoUrl='https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png';
var tpoAttrib='<a href="https://www.bkg.bund.de/" target="_blank">Bundesamt für Kartographie und Geodäsie</a>';
var tpo = new L.TileLayer(tpoUrl, {minZoom: 0, maxZoom: 19, attribution: tpoAttrib});
//  <!-- Minimap -->
var ThunderForestOpenCycleMap2 = new L.TileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b',{
      minZoom: 0, 
      maxZoom: 13, 
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}); 
var MiniMap = new L.Control.MiniMap(ThunderForestOpenCycleMap2, {  
      toggleDisplay: true,
      minimized: true
}).addTo(map);

 // Mouse di klik Keluar koordinat
var popup = L.popup(); function onMapClick(e) {
      popup.setLatLng(e.latlng).setContent("Lokasi Klik -> " + e.latlng.toString())
.openOn(map);}map.on('click', onMapClick);

// ========================Vektor Titik GA=============================================================================================================
// b) Vektor Titik GA yang ditugaskan format SHP dengan Attributnya bisa di-klik dan yang “hanya” ditampilkan
//  Load shapefiles Plugin 
var geo1 = L.geoJson({features:[]},{onEachFeature:function popUp(f,l){
var out = [];if (f.properties){for(var key in f.properties){
      out.push(key+" ══► "+f.properties[key]);}l.bindPopup(out.join("<br />"));}
}});
var wfunc = function(base,cb){
      importScripts('shp.js');
      shp(base).then(cb);
      }
var worker = cw({data:wfunc},2);
      worker.data(cw.makeUrl('shp/kerinci.zip')).then(function(data){
geo1.addData(data);},function(a){console.log(a)});
//============================================Buffer 5 km dari Titik GA Jenis polyline=========================================================================================
// c) Buffer 5 km dari Titik GA, Jenis polyline Area Rawan Letusan Gunung Api Format GEOJSON
var kt_buffer = L.layerGroup();
var Geojsonbuffer= 
{
   "type": "FeatureCollection",
   "name": "C:\\inetpub\\wwwroot\\uas\\Geojeson\\kt_buffer.geojson",
   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
   "features": [
   { "type": "Feature", "properties": { "LEFT_FID": -1, "RIGHT_FID": 0, "ket": "Area Rawan Letusan Gunung" }, "geometry": { "type": "LineString", "coordinates": [ [ 101.264, -1.651781913840578 ], [ 101.265786431451517, -1.65181766257051 ], [ 101.267570038380697, -1.651924852238052 ], [ 101.269348000730403, -1.652103313365439 ], [ 101.2711175073661, -1.652352763787624 ], [ 101.272875760520108, -1.652672809098144 ], [ 101.274619980213856, -1.65306294327271 ], [ 101.276347408653166, -1.6535225494691 ], [ 101.278055314586823, -1.654050901002025 ], [ 101.279740997625311, -1.654647162492251 ], [ 101.281401792508703, -1.655310391187237 ], [ 101.283035073320733, -1.656039538450782 ], [ 101.284638257639543, -1.656833451421525 ], [ 101.286208810620536, -1.657690874835039 ], [ 101.287744249003637, -1.658610453008203 ], [ 101.289242145039026, -1.659590731982463 ], [ 101.290700130325661, -1.660630161822263 ], [ 101.292115899555156, -1.661727099065169 ], [ 101.293487214157125, -1.662879809320062 ], [ 101.294811905838003, -1.66408647000903 ], [ 101.29608788000948, -1.665345173248534 ], [ 101.297313119100551, -1.666653928865925 ], [ 101.298485685747352, -1.668010667545195 ], [ 101.299603725856556, -1.669413244098583 ], [ 101.300665471537442, -1.670859440858352 ], [ 101.301669243897337, -1.672346971182159 ], [ 101.302613455696672, -1.673873483068567 ], [ 101.303496613859181, -1.675436562875488 ], [ 101.304317321833111, -1.677033739135803 ], [ 101.305074281800174, -1.678662486464722 ], [ 101.305766296728564, -1.680320229553123 ], [ 101.30639227226574, -1.682004347238075 ], [ 101.306951218470445, -1.683712176647878 ], [ 101.307442251378461, -1.685441017411849 ], [ 101.307864594401508, -1.687188135929796 ], [ 101.308217579555858, -1.688950769694076 ], [ 101.308500648520223, -1.690726131657383 ], [ 101.308713353518982, -1.692511414639364 ], [ 101.308855358032019, -1.694303795765195 ], [ 101.308926437327457, -1.696100440929038 ], [ 101.30892647881879, -1.697898509274898 ], [ 101.308855482243686, -1.699695157688941 ], [ 101.308713559665733, -1.701487545294744 ], [ 101.308500935298639, -1.703272837945347 ], [ 101.308217945152919, -1.705048212704819 ], [ 101.307865036505731, -1.706810862311892 ], [ 101.307442767194743, -1.708557999619254 ], [ 101.30695180473765, -1.710286862000332 ], [ 101.306392925277251, -1.711994715718335 ], [ 101.305767012355858, -1.713678860248746 ], [ 101.305075055518955, -1.715336632550224 ], [ 101.304318148751477, -1.716965411275362 ], [ 101.303497488749201, -1.718562620916176 ], [ 101.302614373026969, -1.720125735877021 ], [ 101.30167019786829, -1.721652284468556 ], [ 101.300666456117767, -1.723139852816613 ], [ 101.299604734821386, -1.724586088679237 ], [ 101.29848671271769, -1.725988705167081 ], [ 101.297314157583628, -1.727345484359633 ], [ 101.296088923439527, -1.728654280813158 ], [ 101.294812947618169, -1.729913024953633 ], [ 101.29348824770095, -1.731119726349595 ], [ 101.292116918328318, -1.732272476860197 ], [ 101.290701127887075, -1.733369453652978 ], [ 101.289243115081831, -1.734408922086794 ], [ 101.287745185394783, -1.735389238455321 ], [ 101.286209707440051, -1.736308852586566 ], [ 101.284639109217281, -1.737166310294425 ], [ 101.283035874272827, -1.73796025567915 ], [ 101.281402537771314, -1.738689433271323 ], [ 101.279741682486545, -1.739352690017737 ], [ 101.278055934716818, -1.739948977105088 ], [ 101.276347960131147, -1.74047735161883 ], [ 101.274620459553361, -1.740936978034424 ], [ 101.272876164690501, -1.741327129538861 ], [ 101.271117833812085, -1.741647189180229 ], [ 101.269348247388109, -1.741896650843733 ], [ 101.267570203690681, -1.742075120051767 ], [ 101.265786514368571, -1.742182314588126 ], [ 101.264, -1.74221806494449 ], [ 101.26221348563142, -1.742182314588126 ], [ 101.26042979630931, -1.742075120051767 ], [ 101.258651752611883, -1.741896650843733 ], [ 101.256882166187822, -1.741647189180229 ], [ 101.255123835309504, -1.741327129538861 ], [ 101.253379540446645, -1.740936978034424 ], [ 101.251652039868858, -1.74047735161883 ], [ 101.249944065283188, -1.739948977105088 ], [ 101.248258317513447, -1.739352690017737 ], [ 101.246597462228678, -1.738689433271323 ], [ 101.244964125727165, -1.73796025567915 ], [ 101.243360890782725, -1.737166310294425 ], [ 101.24179029256004, -1.736308852586566 ], [ 101.240254814605208, -1.735389238455321 ], [ 101.238756884918175, -1.734408922086794 ], [ 101.23729887211293, -1.733369453652978 ], [ 101.235883081671687, -1.732272476860197 ], [ 101.234511752299056, -1.731119726349595 ], [ 101.233187052381822, -1.729913024953633 ], [ 101.231911076560465, -1.728654280813158 ], [ 101.230685842416364, -1.727345484359633 ], [ 101.229513287282316, -1.725988705167081 ], [ 101.228395265178619, -1.724586088679237 ], [ 101.227333543882224, -1.723139852816613 ], [ 101.226329802131715, -1.721652284468556 ], [ 101.225385626973036, -1.720125735877021 ], [ 101.22450251125079, -1.718562620916176 ], [ 101.223681851248529, -1.716965411275362 ], [ 101.222924944481036, -1.715336632550224 ], [ 101.222232987644148, -1.713678860248746 ], [ 101.221607074722741, -1.711994715718335 ], [ 101.221048195262341, -1.710286862000332 ], [ 101.220557232805248, -1.708557999619254 ], [ 101.220134963494274, -1.706810862311892 ], [ 101.219782054847073, -1.705048212704819 ], [ 101.219499064701353, -1.703272837945347 ], [ 101.219286440334272, -1.701487545294744 ], [ 101.219144517756305, -1.699695157688941 ], [ 101.219073521181201, -1.697898509274898 ], [ 101.219073562672548, -1.696100440929038 ], [ 101.219144641967972, -1.694303795765195 ], [ 101.219286646481009, -1.692511414639364 ], [ 101.219499351479783, -1.690726131657383 ], [ 101.219782420444048, -1.688950769694076 ], [ 101.220135405598484, -1.687188135929796 ], [ 101.22055774862153, -1.685441017411849 ], [ 101.221048781529561, -1.683712176647878 ], [ 101.221607727734252, -1.682004347238075 ], [ 101.222233703271527, -1.680320229553123 ], [ 101.222925718199818, -1.678662486464722 ], [ 101.223682678166881, -1.677033739135803 ], [ 101.224503386140825, -1.675436562875488 ], [ 101.225386544303333, -1.673873483068567 ], [ 101.226330756102655, -1.672346971182159 ], [ 101.227334528462549, -1.670859440858352 ], [ 101.228396274143435, -1.669413244098583 ], [ 101.22951431425264, -1.668010667545195 ], [ 101.230686880899356, -1.666653928865925 ], [ 101.231912119990525, -1.665345173248534 ], [ 101.233188094162003, -1.66408647000903 ], [ 101.234512785842881, -1.662879809320062 ], [ 101.235884100444835, -1.661727099065169 ], [ 101.237299869674331, -1.660630161822263 ], [ 101.238757854960966, -1.659590731982463 ], [ 101.240255750996354, -1.658610453008203 ], [ 101.241791189379455, -1.657690874835039 ], [ 101.243361742360463, -1.656833451421525 ], [ 101.244964926679273, -1.656039538450782 ], [ 101.246598207491289, -1.655310391187237 ], [ 101.248259002374681, -1.654647162492251 ], [ 101.249944685413084, -1.654050901002025 ], [ 101.251652591346826, -1.6535225494691 ], [ 101.25338001978615, -1.65306294327271 ], [ 101.255124239479883, -1.652672809098144 ], [ 101.256882492633892, -1.652352763787624 ], [ 101.258651999269603, -1.652103313365439 ], [ 101.260429961619309, -1.651924852238052 ], [ 101.262213568548475, -1.65181766257051 ], [ 101.264, -1.651781913840578 ] ] } }
   ]
   }

   
// Meload geojson polyline
var Ktbufferstyle = {
   "color": "red", 
   "weight": 3,
   "opacity": 0.75
};
L.geoJSON(Geojsonbuffer, {
   style: Ktbufferstyle,
   onEachFeature: function (Feature, layer) {
      layer.bindPopup(' '+Feature.properties.ket);
   }
}).addTo(kt_buffer);
//==========================================Batas-Batas Kabupaten (jenis polygon)kabupaten kerinci===========================================================================================
// d)Batas-Batas Kabupaten (jenis polygon) yang lengkap sesuai ukuran kotak AOI dan berformat GEOJSON dengan Attributnya bisa diklik dan ditampilkan dengan benar dan berikan warna yang berbeda untuk masing-masing kabupaten.Data Attribut yang ditampilkan adalah Nama Kabupaten & Nama Provinsi
var kbkerinci = L.layerGroup();
var Geojsonktkerinci = {
   "type": "FeatureCollection",
   "name": "kabupaten_kerinci",
   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
   "features": [
   { "type": "Feature", "properties": { "KAB_KOTA": "KERINCI", "PROVINSI": "JAMBI" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 101.342479156561012, -1.689761242836259 ], [ 101.342479156561012, -1.776328116434307 ], [ 101.18527398184014, -1.776328116434307 ], [ 101.18527398184014, -1.684103392506593 ], [ 101.186344854332603, -1.682303996131669 ], [ 101.187728356079816, -1.6792224052889 ], [ 101.188190729019922, -1.677652061292818 ], [ 101.189170873138323, -1.677244911222893 ], [ 101.190384883256797, -1.67765033999034 ], [ 101.192448604320617, -1.680468461849234 ], [ 101.192527782432236, -1.680652894814401 ], [ 101.192708616310597, -1.681090140696568 ], [ 101.193205326265812, -1.682323844169282 ], [ 101.193641634155099, -1.683551712840465 ], [ 101.194218741702542, -1.685140502831146 ], [ 101.194359964941412, -1.685594645175854 ], [ 101.19458018912546, -1.686356271124119 ], [ 101.194847259894161, -1.687686918815352 ], [ 101.194915656033757, -1.689024753888475 ], [ 101.194946248271748, -1.690010934256421 ], [ 101.194969315882233, -1.691223361568035 ], [ 101.194995379134411, -1.691839043736039 ], [ 101.194967222260516, -1.692870915059803 ], [ 101.194392344132396, -1.695544791957744 ], [ 101.195030905053244, -1.698101058216412 ], [ 101.19642237209581, -1.702109296106276 ], [ 101.196276508355169, -1.705995426746671 ], [ 101.197148562057478, -1.71058538570616 ], [ 101.199175026007637, -1.713953623759874 ], [ 101.202067142285841, -1.716274808135072 ], [ 101.205594610703727, -1.718304676019162 ], [ 101.205730852597767, -1.718469639561366 ], [ 101.206298886885108, -1.719251317693367 ], [ 101.206986394307648, -1.719989856245991 ], [ 101.2089510568468, -1.722368679070492 ], [ 101.212015620825198, -1.723876032751832 ], [ 101.212777885292212, -1.723931916623762 ], [ 101.215136489558333, -1.724104832870861 ], [ 101.218429918406997, -1.723636072945585 ], [ 101.219342268931541, -1.723046445935879 ], [ 101.22293406765408, -1.720725167131949 ], [ 101.22442286382514, -1.719655902896751 ], [ 101.225348589966487, -1.718991680720645 ], [ 101.22638857767177, -1.71933893324427 ], [ 101.227719628259209, -1.720318105195524 ], [ 101.228123708943059, -1.720615361708795 ], [ 101.22899262760869, -1.72241581613612 ], [ 101.230669497200495, -1.723285524406588 ], [ 101.231537334881153, -1.724156183260401 ], [ 101.232268671662865, -1.72411445921405 ], [ 101.232577460182597, -1.724096840595841 ], [ 101.233500811214498, -1.722933336403472 ], [ 101.236037974074307, -1.71828156703981 ], [ 101.239442047413604, -1.713628614168368 ], [ 101.240458950421271, -1.712759941017623 ], [ 101.242848135234283, -1.710719018666946 ], [ 101.244504455317411, -1.709757433857657 ], [ 101.246659528615353, -1.708506296127794 ], [ 101.249888363658073, -1.706765328256505 ], [ 101.250844136148999, -1.706249980751124 ], [ 101.254653764160892, -1.703939708749687 ], [ 101.255279555607999, -1.703560210134754 ], [ 101.25881494885185, -1.7014156310257 ], [ 101.261240295404335, -1.699146674778369 ], [ 101.263663286632351, -1.697843486087187 ], [ 101.264702497323356, -1.697284553838259 ], [ 101.266839067070265, -1.69620712016167 ], [ 101.267188905144863, -1.696112300141746 ], [ 101.26727027040765, -1.696072187680482 ], [ 101.267626222073574, -1.696006672069412 ], [ 101.270812307842746, -1.695420243948238 ], [ 101.271461151611859, -1.695300820275776 ], [ 101.275716402690819, -1.695900820065894 ], [ 101.276295864663453, -1.695982526171775 ], [ 101.277182886681857, -1.696107596687408 ], [ 101.284059559901792, -1.696273773415076 ], [ 101.287861608427491, -1.696903162150427 ], [ 101.288834206334585, -1.697333942806374 ], [ 101.29034767000995, -1.698004283070382 ], [ 101.294334770234514, -1.697941415962774 ], [ 101.296762419950781, -1.698519608991962 ], [ 101.299247512064028, -1.698807179806678 ], [ 101.302137505042822, -1.69944291865491 ], [ 101.302729223875602, -1.699624296623199 ], [ 101.304969987276124, -1.700311152936536 ], [ 101.308842584019047, -1.701178130865184 ], [ 101.31121112489447, -1.700652293667577 ], [ 101.311917310336597, -1.700251714943875 ], [ 101.313982899292384, -1.699080017927663 ], [ 101.319239798179169, -1.697853393018818 ], [ 101.320541732316102, -1.697445349922084 ], [ 101.320920896383271, -1.697326516204907 ], [ 101.322590010221788, -1.696803393161179 ], [ 101.324901427959531, -1.696858707762257 ], [ 101.327594911876687, -1.697320312681434 ], [ 101.329966403427818, -1.697141056213987 ], [ 101.331166811300307, -1.696181288934469 ], [ 101.331637946335192, -1.695804599801605 ], [ 101.332343692008834, -1.694238235305452 ], [ 101.332502401665536, -1.693885989745798 ], [ 101.33232384666924, -1.689528106236278 ], [ 101.332386955694446, -1.688928984184397 ], [ 101.332767725051468, -1.68816034442349 ], [ 101.334364156581643, -1.686989040411042 ], [ 101.335480413990894, -1.68677584712686 ], [ 101.337370439095494, -1.687181014191648 ], [ 101.337520262551095, -1.687260377563522 ], [ 101.338617808665973, -1.68891275411946 ], [ 101.339519137099472, -1.688461717133745 ], [ 101.340405172561717, -1.689128750590569 ], [ 101.340999780016901, -1.689057287762825 ], [ 101.341684542708506, -1.689400558088501 ], [ 101.342479156561012, -1.689761242836259 ] ], [ [ 101.321515409409642, -1.770473742668273 ], [ 101.321563612171957, -1.770477882247619 ], [ 101.319971516273455, -1.767176247984654 ], [ 101.321515409409642, -1.770473742668273 ] ] ] ] } }
   ]
   }
   
   function getColor(d){
      return d=='KERINCI'? '#73cbe0':
               d=='KERINCI'? '#6C22A6': 
               '#59FD02';
   
   }
   // Meload geojson polygon kabuoaten kerinci
   function Ktkerincistyle (Feature) {
      return{
    color: '#6C22A6',
    opacity: 1,
    weight: 1,
    fillOpacity: 0.5,
    fillColor: getColor(Feature.properties.KAB_KOTA)
   };
   }
   L.geoJSON(Geojsonktkerinci, {
    style: Ktkerincistyle,
    onEachFeature: function (Feature, layer) {
       layer.bindPopup('<h3>KAB. '+Feature.properties.KAB_KOTA+
                        '</h3> Provinsi: '+Feature.properties.PROVINSI);
    }
   }).addTo(kbkerinci)
//==========================================Batas-Batas Kabupaten (jenis polygon) kabupaten solok Selatan===========================================================================================
// kabupaten solok Selatan
var kbsolok = L.layerGroup();
var Geojsonktsolokselatan = {
   "type": "FeatureCollection",
   "name": "kabupaten_solok",
   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
   "features": [
   { "type": "Feature", "properties": { "KAB_KOTA": "SOLOK SELATAN", "PROVINSI": "SUMATERA BARAT" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 101.342479156561012, -1.689761242836259 ], [ 101.341684542708506, -1.689400558088501 ], [ 101.340999780016901, -1.689057287762825 ], [ 101.340405172561717, -1.689128750590569 ], [ 101.339519137099472, -1.688461717133745 ], [ 101.338617808665973, -1.68891275411946 ], [ 101.337520262551095, -1.687260377563522 ], [ 101.337370439095494, -1.687181014191648 ], [ 101.335480413990894, -1.68677584712686 ], [ 101.334364156581643, -1.686989040411042 ], [ 101.332767725051468, -1.68816034442349 ], [ 101.332386955694446, -1.688928984184397 ], [ 101.33232384666924, -1.689528106236278 ], [ 101.332502401665536, -1.693885989745798 ], [ 101.332343692008834, -1.694238235305452 ], [ 101.331637946335192, -1.695804599801605 ], [ 101.331166811300307, -1.696181288934469 ], [ 101.329966403427818, -1.697141056213987 ], [ 101.327594911876687, -1.697320312681434 ], [ 101.324901427959531, -1.696858707762257 ], [ 101.322590010221788, -1.696803393161179 ], [ 101.320920896383271, -1.697326516204907 ], [ 101.320541732316102, -1.697445349922084 ], [ 101.319239798179169, -1.697853393018818 ], [ 101.313982899292384, -1.699080017927663 ], [ 101.311917310336597, -1.700251714943875 ], [ 101.31121112489447, -1.700652293667577 ], [ 101.308842584019047, -1.701178130865184 ], [ 101.304969987276124, -1.700311152936536 ], [ 101.302729223875602, -1.699624296623199 ], [ 101.302137505042822, -1.69944291865491 ], [ 101.299247512064028, -1.698807179806678 ], [ 101.296762419950781, -1.698519608991962 ], [ 101.294334770234514, -1.697941415962774 ], [ 101.29034767000995, -1.698004283070382 ], [ 101.288834206334585, -1.697333942806374 ], [ 101.287861608427491, -1.696903162150427 ], [ 101.284059559901792, -1.696273773415076 ], [ 101.277182886681857, -1.696107596687408 ], [ 101.276295864663453, -1.695982526171775 ], [ 101.275716402690819, -1.695900820065894 ], [ 101.271461151611859, -1.695300820275776 ], [ 101.270812307842746, -1.695420243948238 ], [ 101.267626222073574, -1.696006672069412 ], [ 101.26727027040765, -1.696072187680482 ], [ 101.267188905144863, -1.696112300141746 ], [ 101.266839067070265, -1.69620712016167 ], [ 101.264702497323356, -1.697284553838259 ], [ 101.263663286632351, -1.697843486087187 ], [ 101.261240295404335, -1.699146674778369 ], [ 101.25881494885185, -1.7014156310257 ], [ 101.255279555607999, -1.703560210134754 ], [ 101.254653764160892, -1.703939708749687 ], [ 101.250844136148999, -1.706249980751124 ], [ 101.249888363658073, -1.706765328256505 ], [ 101.246659528615353, -1.708506296127794 ], [ 101.244504455317411, -1.709757433857657 ], [ 101.242848135234283, -1.710719018666946 ], [ 101.240458950421271, -1.712759941017623 ], [ 101.239442047413604, -1.713628614168368 ], [ 101.236037974074307, -1.71828156703981 ], [ 101.233500811214498, -1.722933336403472 ], [ 101.232577460182597, -1.724096840595841 ], [ 101.232268671662865, -1.72411445921405 ], [ 101.231537334881153, -1.724156183260401 ], [ 101.230669497200495, -1.723285524406588 ], [ 101.22899262760869, -1.72241581613612 ], [ 101.228123708943059, -1.720615361708795 ], [ 101.227719628259209, -1.720318105195524 ], [ 101.22638857767177, -1.71933893324427 ], [ 101.225348589966487, -1.718991680720645 ], [ 101.22442286382514, -1.719655902896751 ], [ 101.22293406765408, -1.720725167131949 ], [ 101.219342268931541, -1.723046445935879 ], [ 101.218429918406997, -1.723636072945585 ], [ 101.215136489558333, -1.724104832870861 ], [ 101.212777885292212, -1.723931916623762 ], [ 101.212015620825198, -1.723876032751832 ], [ 101.2089510568468, -1.722368679070492 ], [ 101.206986394307648, -1.719989856245991 ], [ 101.206298886885108, -1.719251317693367 ], [ 101.205730852597767, -1.718469639561366 ], [ 101.205594610703727, -1.718304676019162 ], [ 101.202067142285841, -1.716274808135072 ], [ 101.199175026007637, -1.713953623759874 ], [ 101.197148562057478, -1.71058538570616 ], [ 101.196276508355169, -1.705995426746671 ], [ 101.19642237209581, -1.702109296106276 ], [ 101.195030905053244, -1.698101058216412 ], [ 101.194392344132396, -1.695544791957744 ], [ 101.194967222260516, -1.692870915059803 ], [ 101.194995379134411, -1.691839043736039 ], [ 101.194969315882233, -1.691223361568035 ], [ 101.194946248271748, -1.690010934256421 ], [ 101.194915656033757, -1.689024753888475 ], [ 101.194847259894161, -1.687686918815352 ], [ 101.19458018912546, -1.686356271124119 ], [ 101.194359964941412, -1.685594645175854 ], [ 101.194218741702542, -1.685140502831146 ], [ 101.193641634155099, -1.683551712840465 ], [ 101.193205326265812, -1.682323844169282 ], [ 101.192708616310597, -1.681090140696568 ], [ 101.192527782432236, -1.680652894814401 ], [ 101.192448604320617, -1.680468461849234 ], [ 101.190384883256797, -1.67765033999034 ], [ 101.189170873138323, -1.677244911222893 ], [ 101.188190729019922, -1.677652061292818 ], [ 101.187728356079816, -1.6792224052889 ], [ 101.186344854332603, -1.682303996131669 ], [ 101.18527398184014, -1.684103392506593 ], [ 101.18527398184014, -1.619192001109155 ], [ 101.342479156561012, -1.619192001109155 ], [ 101.342479156561012, -1.689761242836259 ] ] ] ] } }
   ]
   }
   
   function getColor(d){
      return d=='KERINCI'? '#73cbe0':
               d=='KERINCI'? '#B80000': 
               '#59FD02';
   
   }
   // Meload geojson polygon kabupaten solok selatan
   function KtCirebonstyle (Feature) {
      return{
    color: '#40A2D8',
    opacity: 1,
    weight: 1,
    fillOpacity: 0.5,
    fillColor: getColor(Feature.properties.KAB_KOTA)
   };
   }
   L.geoJSON(Geojsonktsolokselatan, {
    style: KtCirebonstyle,
    onEachFeature: function (Feature, layer) {
       layer.bindPopup('<h3>KAB. '+Feature.properties.KAB_KOTA+
                  '</h3>Provinsi: '+Feature.properties.PROVINSI);
    }
   }).addTo(kbsolok)
// ==================================Batas Akhor Geojson==============================================================================================================================
// ==================================Load Geotiff Ketinggian kerinci==============================================================================================================================
//e) Tampilkan data Ketinggian (Sumber Demnas) sesuai ukuran kotak AOI dengan tipe warna : “Viridis”, beserta legenda
// <!-- Load Geotiff Ketinggian -->
      var tinggi = L.layerGroup();
      var url_to_geotiff_file = "ketinggian.tif";
      fetch(url_to_geotiff_file)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
          parseGeoraster(arrayBuffer).then(georaster => {
            const min = georaster.mins[0];
            const max = georaster.maxs[0];
            const range = georaster.ranges[0];
    
            // available color scales can be found by running console.log(chroma.brewer);
            console.log(chroma.brewer);
            var scale = chroma.scale("Viridis");
            // "Spectral" = Merah ke Kuning Ke Biru,
            // "RdYlGn" = Merah Ke Kuning ke Hijau
            // "RdYlBu" = Merah Ke Kuning ke Biru
            // "Viridis" = Biru Laut ke hijau ke Kuning
            // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"
    
            var layer = new GeoRasterLayer({
                georaster: georaster,
                opacity: 1.0,
                pixelValuesToColorFn: function(pixelValues) {
                  var pixelValue = pixelValues[0]; // there's just one band in this raster
    
                  // if there's zero wind, don't return a color
                  if (pixelValue === 0) return null;
    
                  // scale to 0 - 1 used by chroma
                  var scaledPixelValue = (pixelValue - min) / range;
    
                  var color = scale(scaledPixelValue).hex();
    
                  return color;
                },
                resolution: 256
            })
            console.log("layer:", layer);
            layer.addTo(tinggi);
    
            map.fitBounds(layer.getBounds());
          });
        });	
         //  pupop ketinggian
 var ketinggian = new L.Popup({maxWidth: 100, closeOnClick: false, autoClose: false});
 ketinggian.setContent('<p> <img src="ketinggian_kerinci.PNG" width = "100" height = "70" style = "vertical-align:middle"/>');
 var kotak2 = [[-1.622319, 101.338921],[-1.775699, 101.189232]];
 L.rectangle(kotak2,{
 fillOpacity: 0.0,
 weight: 0,
 }).addTo(tinggi).bindPopup(ketinggian).closePopup();
// ================================================Load Geotiff Kelerengan kerinci================================================================================================================
//f) Tampilkan data Kelerengan (Diolah dari Demnas) sesuai ukuran kotak AOI dengan tipe warna : “RdYlGn”, beserta legenda
// <!-- Load Geotiff Kelerengan -->
       var kelerengan = L.layerGroup();
       var url_to_geotiff_file = "slope_kerinci.tif";
       fetch(url_to_geotiff_file)
         .then(response => response.arrayBuffer())
         .then(arrayBuffer => {
           parseGeoraster(arrayBuffer).then(georaster => {
             const min = georaster.mins[0];
             const max = georaster.maxs[0];
             const range = georaster.ranges[0];
     
             // available color scales can be found by running console.log(chroma.brewer);
             console.log(chroma.brewer);
             var scale = chroma.scale("RdYlBu");
             // "Spectral" = Merah ke Kuning Ke Biru,
             // "RdYlGn" = Merah Ke Kuning ke Hijau
             // "RdYlBu" = Merah Ke Kuning ke Biru
             // "Viridis" = Biru Laut ke hijau ke Kuning
             // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"
     
             var layer = new GeoRasterLayer({
                 georaster: georaster,
                 opacity: 1.0,
                 pixelValuesToColorFn: function(pixelValues) {
                   var pixelValue = pixelValues[0]; // there's just one band in this raster
     
                   // if there's zero wind, don't return a color
                   if (pixelValue === 0) return null;
     
                   // scale to 0 - 1 used by chroma
                   var scaledPixelValue = (pixelValue - min) / range;
     
                   var color = scale(scaledPixelValue).hex();
     
                   return color;
                 },
                 resolution: 256
             })
             console.log("layer:", layer);
             layer.addTo(kelerengan);map.fitBounds(layer.getBounds());
           });
         });	
   //  pupop kelerengan
   var kelerengan1 = new L.Popup({maxWidth: 160, closeOnClick: false, autoClose: false});
   kelerengan1.setContent('<p> <img src="kelerengan.PNG" width = "150" height = "110" style = "vertical-align:middle"/>');
   var kotak2 = [[-1.621989, 101.338921],[-1.775758, 101.188202]];
   L.rectangle(kotak2,{
   fillOpacity: 0.0,
   weight: 0,
   }).addTo(kelerengan).bindPopup(kelerengan1).closePopup();
// ============================Load Geotiff NDVI====================================================================================================================================
//g) Tampilkan data NDVI : Normalized Difference Vegetation Index sesuai ukuran kotak AOI dengan tipe warna : “Viridis”, beserta legenda
// <!-- Load Geotiff NDVI -->
var NDVI = L.layerGroup();
var url_to_geotiff_file = "NDVI.tif";
fetch(url_to_geotiff_file)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    parseGeoraster(arrayBuffer).then(georaster => {
      const min = georaster.mins[0];
      const max = georaster.maxs[0];
      const range = georaster.ranges[0];

      // available color scales can be found by running console.log(chroma.brewer);
      console.log(chroma.brewer);
      var scale = chroma.scale("Viridis");
      // "Spectral" = Merah ke Kuning Ke Biru,
      // "RdYlGn" = Merah Ke Kuning ke Hijau
      // "RdYlBu" = Merah Ke Kuning ke Biru
      // "Viridis" = Biru Laut ke hijau ke Kuning
      // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"

      var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 1.0,
          pixelValuesToColorFn: function(pixelValues) {
            var pixelValue = pixelValues[0]; // there's just one band in this raster

            // if there's zero wind, don't return a color
            if (pixelValue === 0) return null;

            // scale to 0 - 1 used by chroma
            var scaledPixelValue = (pixelValue - min) / range;

            var color = scale(scaledPixelValue).hex();

            return color;
          },
          resolution: 256
      })
      console.log("layer:", layer);
      layer.addTo(NDVI); map.fitBounds(layer.getBounds());
    });
  });	

//  pupop NDVI
var NDVI1 = new L.Popup({maxWidth: 120, closeOnClick: false, autoClose: false});
NDVI1.setContent('<p> <img src="ndvi.PNG" width = "120" height = "90" style = "vertical-align:middle"/>')
var kotak3 = [[-1.624038, 101.338234],[-1.773641, 101.190262]];
L.rectangle(kotak3,{
fillOpacity: 0.0,
weight: 0,
}).addTo(NDVI).bindPopup(NDVI1).closePopup();
// ==========================Load Geotiff NDMI======================================================================================================================================
//h) Tampilkan data NDMI : Normalized Difference Moisture Index sesuai ukuran kotak AOI dengan tipe warna : “Viridis”, beserta legenda
// <!-- Load Geotiff NDMI -->
var NDMI = L.layerGroup();
var url_to_geotiff_file = "NDMI.tif";
fetch(url_to_geotiff_file)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    parseGeoraster(arrayBuffer).then(georaster => {
      const min = georaster.mins[0];
      const max = georaster.maxs[0];
      const range = georaster.ranges[0];

      // available color scales can be found by running console.log(chroma.brewer);
      console.log(chroma.brewer);
      var scale = chroma.scale("Viridis");
      // "Spectral" = Merah ke Kuning Ke Biru,
      // "RdYlGn" = Merah Ke Kuning ke Hijau
      // "RdYlBu" = Merah Ke Kuning ke Biru
      // "Viridis" = Biru Laut ke hijau ke Kuning
      // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"

      var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 1.0,
          pixelValuesToColorFn: function(pixelValues) {
            var pixelValue = pixelValues[0]; // there's just one band in this raster

            // if there's zero wind, don't return a color
            if (pixelValue === 0) return null;

            // scale to 0 - 1 used by chroma
            var scaledPixelValue = (pixelValue - min) / range;

            var color = scale(scaledPixelValue).hex();

            return color;
          },
          resolution: 256
      })
      console.log("layer:", layer);
      layer.addTo(NDMI); map.fitBounds(layer.getBounds());
    });
  });	

//  pupop NDMI
var NDMI1 = new L.Popup({maxWidth: 100, closeOnClick: false, autoClose: false});
NDMI1.setContent('<p> <img src="ndmi.PNG" width = "100" height = "70" style = "vertical-align:middle"/>');

var kotak4 = [[-1.621976, 101.339951],[-1.773298, 101.189575]];
L.rectangle(kotak4,{
fillOpacity: 0.0,
weight: 0,
}).addTo(NDMI).bindPopup(NDMI1).closePopup();
// ========================Load Geotiff NDWI========================================================================================================================================
//i) Tampilkan data NDWI : Normalized Difference Water Index sesuai ukuran kotak AOI dengan tipe warna : “Viridis”, beserta legenda
// <!-- Load Geotiff NDWI -->
var NDWI = L.layerGroup();
var url_to_geotiff_file = "NDWI.tif";
fetch(url_to_geotiff_file)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    parseGeoraster(arrayBuffer).then(georaster => {
      const min = georaster.mins[0];
      const max = georaster.maxs[0];
      const range = georaster.ranges[0];

      // available color scales can be found by running console.log(chroma.brewer);
      console.log(chroma.brewer);
      var scale = chroma.scale("Viridis");
      // "Spectral" = Merah ke Kuning Ke Biru,
      // "RdYlGn" = Merah Ke Kuning ke Hijau
      // "RdYlBu" = Merah Ke Kuning ke Biru
      // "Viridis" = Biru Laut ke hijau ke Kuning
      // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"

      var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 1.0,
          pixelValuesToColorFn: function(pixelValues) {
            var pixelValue = pixelValues[0]; // there's just one band in this raster

            // if there's zero wind, don't return a color
            if (pixelValue === 0) return null;

            // scale to 0 - 1 used by chroma
            var scaledPixelValue = (pixelValue - min) / range;

            var color = scale(scaledPixelValue).hex();

            return color;
          },
          resolution: 256
      })
      console.log("layer:", layer);
      layer.addTo(NDWI); map.fitBounds(layer.getBounds());
    });
  });	

//  pupop NDWI
var NDWI1 = new L.Popup({maxWidth: 100, closeOnClick: false, autoClose: false});
NDWI1.setContent('<p> <img src="ndwi.PNG" width = "100" height = "70" style = "vertical-align:middle"/>');
var kotak5 = [[-1.621976, 101.339951],[-1.773298, 101.189575]];
L.rectangle(kotak5,{
fillOpacity: 0.0,
weight: 0,
}).addTo(NDWI).bindPopup(NDWI1).closePopup();
// ==============================Load Geotiff NDBI==================================================================================================================================
//j) Tampilkan data NDBI : Normalized Difference Built-up Index sesuai ukuran kotak AOI dengan tipe warna : “Viridis”, beserta legenda
// <!-- Load Geotiff NDBI -->
var NDBI = L.layerGroup();
var url_to_geotiff_file = "NDBI.tif";
fetch(url_to_geotiff_file)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    parseGeoraster(arrayBuffer).then(georaster => {
      const min = georaster.mins[0];
      const max = georaster.maxs[0];
      const range = georaster.ranges[0];

      // available color scales can be found by running console.log(chroma.brewer);
      console.log(chroma.brewer);
      var scale = chroma.scale("Viridis");
      // "Spectral" = Merah ke Kuning Ke Biru,
      // "RdYlGn" = Merah Ke Kuning ke Hijau
      // "RdYlBu" = Merah Ke Kuning ke Biru
      // "Viridis" = Biru Laut ke hijau ke Kuning
      // "BrBg", "RdGy", "PuOr", "RdPu", "YlGnBu", "YlOrRd", "YlOrBr"

      var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 1.0,
          pixelValuesToColorFn: function(pixelValues) {
            var pixelValue = pixelValues[0]; // there's just one band in this raster

            // if there's zero wind, don't return a color
            if (pixelValue === 0) return null;

            // scale to 0 - 1 used by chroma
            var scaledPixelValue = (pixelValue - min) / range;

            var color = scale(scaledPixelValue).hex();

            return color;
          },
          resolution: 256
      })
      console.log("layer:", layer);
      layer.addTo(NDBI); map.fitBounds(layer.getBounds());
    });
  });	

//  pupop NDBI
var NDBI1 = new L.Popup({maxWidth: 100, closeOnClick: false, autoClose: false});
NDBI1.setContent('<p> <img src="ndbi.PNG" width = "100" height = "70" style = "vertical-align:middle"/>');
var kotak6 = [[-1.773298, 101.189575],[-1.621976, 101.339951]];
L.rectangle(kotak6,{
fillOpacity: 0.0,
weight: 0,
}).addTo(NDBI).bindPopup(NDBI1).closePopup();
// ===============================Batas Akhir Load Geotiff=================================================================================================================================
// ===================================================Layer yang akan di-load ke Peta WEBGIS===================================================================================
 //Layer yang akan di-load ke Peta WEBGIS
 var baseLayers = {
   "Open Street Map Mapnik" : OpenStreetMap_Mapnik,
   "Esri World Imagery" : Esri_WorldImagery,

   
   };
// =====================================================// overlayGroup=================================================================================   
   // overlayGroup
   var overlay = {
      "GA_kerinci": geo1,
      "Buffer": kt_buffer,
      "Kabupaten Kerinci": kbkerinci,
      "Kabupaten Solok": kbsolok,
      "Marker" : custommarker,
      "Ketinggian": tinggi,
      "Kelerengan": kelerengan,
      "NDVI": NDVI,
      "NDMI": NDMI,
      "NDWI": NDWI,
      "NDBI": NDBI,
      
   }
// ======================================================================================================================================
// <!-- Layer Control Peta WEBGIS -->
   L.control.layers(baseLayers, overlay,{
    position: 'topright',
    minimized: true,
    collapsed: true
   }).addTo(map);

   var data = [
      {"loc":[-1.737307, 101.2397], "title":"Danau Belibis"},
      {"loc":[-1.7658687809376736, 101.26312526164331], "title":"PELANGI Guest House"},
      {"loc":[-1.7730751206755504, 101.22467311277336], "title":"Kantor Kepala Desa Kebun Baru"},
      {"loc":[-1.7462528790704497, 101.25869365324806], "title":"Pintu Rimba Kerinci"},
      {"loc":[-1.7022671027281284, 101.26838109147123], "title":"Taman Nasional Kerinci Seblat"},
      {"loc":[-1.7202941828278753, 101.26343431443856], "title":"Shelter 1 Gunung Kerinci"},
      {"loc":[-1.7361646545608287, 101.27770358727939], "title":"SDN 213 Sangir"},
      {"loc":[-1.7009584244837797, 101.322132190704], "title":"Air terjun, desa air tenang"},
      {"loc":[-1.7535617464768605, 101.30254560199562], "title":"Majelis Ta'lim Istiqomah"},
      {"loc":[-1.7067720630555194, 101.33603886920453], "title":"HT ARABICA COFFEE,INTERNATIONAL CAFE"},
   ];
   
// Measure Plugin Button 
var ctlMeasure = L.control.polylineMeasure({
	position: "topright",
	measureConrolTitle: "Ukur Panjang",
	showClearControl: true,
	showUnitControl: true
}).addTo(map);
// <!-- Layer yang mengandung element yang dicari -->
var markersLayer = new L.LayerGroup();
   map.addLayer(markersLayer);
var controlSearch = new L.Control.Search({
   position:'topcenter',
   layer: markersLayer,
   initial: false,
   zoom: 17,
   marker: false,
   collapsed: false
   });
   
   map.addControl( controlSearch );
// <!-- Populasikan peta dengan marker dari data pencaharian -->
   for(i in data) {
var title = data[i].title, //value searched
   loc = data[i].loc, //position found
   marker = new L.circle(new L.latLng(loc), {
   title: title,
   fillOpacity: 0,
   weight: 0,
   radius: 1
   });
   marker.bindPopup('title: '+ title );
   markersLayer.addLayer(marker);
   }
// <!-- Pan Control -->
var ctrlPan=L.control.pan().addTo(map);

// !-- Draw Editor -->
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var customIcon3 = L.Icon.extend({

options: {

iconSize: [35, 35],

iconAnchor: [15, 25],

shadowSize: [65, 35],

iconUrl: 'map-marker.png',

shadowUrl: 'marker-shadow.png',

}

});

var drawControl = new L.Control.Draw({

position: 'topleft',

draw: {

marker: {

icon: new customIcon3()

},

polyline: {

hapeOptions: {

color: '#f357a1',

weight: 10

}

},

polygon: {

   allowIntersection: false,
   
   drawError: {
   
   color: '#e1e100',
   
   message: '<strong>Tidak boleh saling tumpang tindih</strong>'
   
   },
   
   shapeOptions: {
   
   color: '#bada55'
   
   }
   
   },
   
   circlemarker: false,
   
   rectangle: {
   
   shapeOptions: {
   
   clickable: false
   
   }
   
   },
   
   },edit: {featureGroup: drawnItems} });map.addControl(drawControl);
  // <!-- Sidebar Content -->
  var ctSidebar=L.control.sidebar('sidebar_div', {
   autopan: false,
   closeButton: true,
   position: 'left'
   }).addTo(map);
   var ctBtnSidebar=L.easyButton('<img src="info.svg"style="width:14px"><span >&start;</span>',
   function() {ctSidebar.toggle();
   }).setPosition('topcenter').addTo(map);
   // load GPX, KML and geojson to map leaflet plugin
   var mystyle ={
      color:'red',
      opacity: 0.8
   };
   L.Control.fileLayerLoad({
      fitBounds: true,
      layerOptions:{
         style: mystyle
      }
   }).setPosition('bottomright').addTo(map);
