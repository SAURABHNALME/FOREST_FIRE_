ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([83.326216, 19.667074, 84.908833, 20.567194]);
var wms_layers = [];


        var lyr_Roadmap_0 = new ol.layer.Tile({
            'title': 'Roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_FF_VULNERABILITY_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "FF_VULNERABILITY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FF_VULNERABILITY_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9294099.483236, 2221587.310985, 9417556.967482, 2357113.323421]
                            })
                        });
var format_ROADS_2 = new ol.format.GeoJSON();
var features_ROADS_2 = format_ROADS_2.readFeatures(json_ROADS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ROADS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_2.addFeatures(features_ROADS_2);
var lyr_ROADS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_2, 
                style: style_ROADS_2,
                interactive: true,
                title: '<img src="styles/legend/ROADS_2.png" /> ROADS'
            });
var format_HOSPITALS_3 = new ol.format.GeoJSON();
var features_HOSPITALS_3 = format_HOSPITALS_3.readFeatures(json_HOSPITALS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HOSPITALS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALS_3.addFeatures(features_HOSPITALS_3);
var lyr_HOSPITALS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOSPITALS_3, 
                style: style_HOSPITALS_3,
                interactive: true,
                title: '<img src="styles/legend/HOSPITALS_3.png" /> HOSPITALS'
            });
var format_KHANDAMAL_TEHSILS_4 = new ol.format.GeoJSON();
var features_KHANDAMAL_TEHSILS_4 = format_KHANDAMAL_TEHSILS_4.readFeatures(json_KHANDAMAL_TEHSILS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KHANDAMAL_TEHSILS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHANDAMAL_TEHSILS_4.addFeatures(features_KHANDAMAL_TEHSILS_4);
var lyr_KHANDAMAL_TEHSILS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KHANDAMAL_TEHSILS_4, 
                style: style_KHANDAMAL_TEHSILS_4,
                interactive: true,
                title: '<img src="styles/legend/KHANDAMAL_TEHSILS_4.png" /> KHANDAMAL_TEHSILS'
            });
var format_KHANDAMAL_5 = new ol.format.GeoJSON();
var features_KHANDAMAL_5 = format_KHANDAMAL_5.readFeatures(json_KHANDAMAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KHANDAMAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHANDAMAL_5.addFeatures(features_KHANDAMAL_5);
var lyr_KHANDAMAL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KHANDAMAL_5, 
                style: style_KHANDAMAL_5,
                interactive: true,
                title: '<img src="styles/legend/KHANDAMAL_5.png" /> KHANDAMAL'
            });

lyr_Roadmap_0.setVisible(true);lyr_FF_VULNERABILITY_1.setVisible(true);lyr_ROADS_2.setVisible(true);lyr_HOSPITALS_3.setVisible(true);lyr_KHANDAMAL_TEHSILS_4.setVisible(true);lyr_KHANDAMAL_5.setVisible(true);
var layersList = [lyr_Roadmap_0,lyr_FF_VULNERABILITY_1,lyr_ROADS_2,lyr_HOSPITALS_3,lyr_KHANDAMAL_TEHSILS_4,lyr_KHANDAMAL_5];
lyr_ROADS_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'maxspeed': 'maxspeed', 'ref': 'ref', 'name': 'name', 'highway': 'highway', 'AND_import': 'AND_import', 'AND_a_nosr': 'AND_a_nosr', 'lanes': 'lanes', 'source_sur': 'source_sur', 'surface': 'surface', 'name_ar': 'name_ar', 'ref_old': 'ref_old', 'int_ref': 'int_ref', 'oneway': 'oneway', 'source_lan': 'source_lan', 'motorroad': 'motorroad', 'embankment': 'embankment', 'access': 'access', 'bridge': 'bridge', 'layer': 'layer', 'tunnel': 'tunnel', 'foot': 'foot', 'bicycle': 'bicycle', 'junction': 'junction', 'service': 'service', 'toll': 'toll', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'lit': 'lit', 'width': 'width', 'horse': 'horse', 'motor_vehi': 'motor_vehi', 'cycleway': 'cycleway', 'noname': 'noname', 'constructi': 'constructi', 'construc_1': 'construc_1', 'source_bri': 'source_bri', 'source_geo': 'source_geo', 'footway': 'footway', 'source_for': 'source_for', 'ford': 'ford', 'abandoned_': 'abandoned_', 'seasonal': 'seasonal', 'covered': 'covered', 'cutting': 'cutting', 'flood_pron': 'flood_pron', 'source_tun': 'source_tun', 'maxheight': 'maxheight', 'hgv': 'hgv', });
lyr_HOSPITALS_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'ORIG_FID': 'ORIG_FID', });
lyr_KHANDAMAL_TEHSILS_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'name': 'name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'boundary': 'boundary', 'type': 'type', 'name_ja': 'name_ja', 'name_ar': 'name_ar', 'alt_name_a': 'alt_name_a', 'name_ur': 'name_ur', 'name_or': 'name_or', });
lyr_KHANDAMAL_5.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'ST_NM': 'ST_NM', 'ST_CEN_CD': 'ST_CEN_CD', 'DT_CEN_CD': 'DT_CEN_CD', 'censuscode': 'censuscode', });
lyr_ROADS_2.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'maxspeed': 'Hidden', 'ref': 'TextEdit', 'name': 'Hidden', 'highway': 'TextEdit', 'AND_import': 'Hidden', 'AND_a_nosr': 'Hidden', 'lanes': 'Hidden', 'source_sur': 'Hidden', 'surface': 'Hidden', 'name_ar': 'Hidden', 'ref_old': 'Hidden', 'int_ref': 'Hidden', 'oneway': 'Hidden', 'source_lan': 'Hidden', 'motorroad': 'Hidden', 'embankment': 'Hidden', 'access': 'Hidden', 'bridge': 'Hidden', 'layer': 'Hidden', 'tunnel': 'Hidden', 'foot': 'Hidden', 'bicycle': 'Hidden', 'junction': 'Hidden', 'service': 'Hidden', 'toll': 'Hidden', 'addr_postc': 'Hidden', 'addr_stree': 'Hidden', 'addr_city': 'Hidden', 'lit': 'Hidden', 'width': 'Hidden', 'horse': 'Hidden', 'motor_vehi': 'Hidden', 'cycleway': 'Hidden', 'noname': 'Hidden', 'constructi': 'Hidden', 'construc_1': 'Hidden', 'source_bri': 'Hidden', 'source_geo': 'Hidden', 'footway': 'Hidden', 'source_for': 'Hidden', 'ford': 'Hidden', 'abandoned_': 'Hidden', 'seasonal': 'Hidden', 'covered': 'Hidden', 'cutting': 'Hidden', 'flood_pron': 'Hidden', 'source_tun': 'Hidden', 'maxheight': 'Hidden', 'hgv': 'Hidden', });
lyr_HOSPITALS_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'HasLabel': 'Hidden', 'LabelID': 'Hidden', 'ORIG_FID': 'Hidden', });
lyr_KHANDAMAL_TEHSILS_4.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'TextEdit', 'osm_type': 'Hidden', 'admin_leve': 'Hidden', 'name': 'TextEdit', 'wikipedia': 'Hidden', 'wikidata': 'Hidden', 'boundary': 'Hidden', 'type': 'Hidden', 'name_ja': 'Hidden', 'name_ar': 'Hidden', 'alt_name_a': 'Hidden', 'name_ur': 'Hidden', 'name_or': 'Hidden', });
lyr_KHANDAMAL_5.set('fieldImages', {'DISTRICT': 'TextEdit', 'ST_NM': 'TextEdit', 'ST_CEN_CD': 'Hidden', 'DT_CEN_CD': 'Hidden', 'censuscode': 'Hidden', });
lyr_ROADS_2.set('fieldLabels', {'ref': 'inline label', 'highway': 'inline label', });
lyr_HOSPITALS_3.set('fieldLabels', {'Name': 'inline label', });
lyr_KHANDAMAL_TEHSILS_4.set('fieldLabels', {'osm_id': 'inline label', 'name': 'inline label', });
lyr_KHANDAMAL_5.set('fieldLabels', {'DISTRICT': 'inline label', 'ST_NM': 'inline label', });
lyr_KHANDAMAL_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});