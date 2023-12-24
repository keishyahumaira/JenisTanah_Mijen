var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Jenis_Tanah_Mijen_1 = new ol.format.GeoJSON();
var features_Jenis_Tanah_Mijen_1 = format_Jenis_Tanah_Mijen_1.readFeatures(json_Jenis_Tanah_Mijen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jenis_Tanah_Mijen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jenis_Tanah_Mijen_1.addFeatures(features_Jenis_Tanah_Mijen_1);
var lyr_Jenis_Tanah_Mijen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jenis_Tanah_Mijen_1, 
                style: style_Jenis_Tanah_Mijen_1,
                interactive: true,
    title: 'Jenis_Tanah_Mijen<br />\
    <img src="styles/legend/Jenis_Tanah_Mijen_1_0.png" /> <br />\
    <img src="styles/legend/Jenis_Tanah_Mijen_1_1.png" /> Latosol Coklat<br />\
    <img src="styles/legend/Jenis_Tanah_Mijen_1_2.png" /> Latosol Coklat Kemerahan<br />\
    <img src="styles/legend/Jenis_Tanah_Mijen_1_3.png" /> Mediteran Coklat Tua<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Jenis_Tanah_Mijen_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Jenis_Tanah_Mijen_1];
lyr_Jenis_Tanah_Mijen_1.set('fieldAliases', {'kota': 'kota', 'jns_tanah': 'jns_tanah', });
lyr_Jenis_Tanah_Mijen_1.set('fieldImages', {'kota': 'TextEdit', 'jns_tanah': 'TextEdit', });
lyr_Jenis_Tanah_Mijen_1.set('fieldLabels', {'kota': 'no label', 'jns_tanah': 'inline label', });
lyr_Jenis_Tanah_Mijen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});