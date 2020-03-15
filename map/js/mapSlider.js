// Author: Wesley Cota <http://wesleycota.com/>
// Based on https://leafletjs.com/examples/choropleth/

document.addEventListener('DOMContentLoaded', function() {

    // https://stackoverflow.com/a/31374433
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        var items = location.search.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

    var countryFile = '';
    var countryName = '';
    var lang = '';
    var scriptRiskTag = '';
    var scriptMapTag = '';

    var loadJS = function(risk, country, location, callback){

        lang = changeLang(findGetParameter('lang'));

        scriptRiskTag = document.createElement('script');
        scriptRiskTag.type = "text/javascript";
        scriptMapTag = document.createElement('script');
        scriptMapTag.type = "text/javascript";

        // determine country
        switch(country) {
            // case 'xx':
            //     countryFile = 'xx';
            //     countryName = lang.xxName;
            //     break;
            default:
                countryFile = 'es';
                countryName = lang.esName;
        };
        scriptMapTag.src = 'js/'+countryFile+'.js?v=1583237885';
        // determine risk file
        // if (risk == null) {
            var versionUpdate = (new Date()).getTime();
            scriptRiskTag.src = 'js/risk'+countryFile+'v2.js?v='+versionUpdate;
        // }
        // else {
        //     scriptRiskTag.src = 'js/risk'+countryFile+'-'+risk+'.js';
        // }
        // scriptRiskTag.src = 'js/riskesv2.js';
        scriptMapTag.onreadystatechange = callback;
        scriptMapTag.onload = callback;

        location.appendChild(scriptMapTag);
    };

    var createMapWaitRisk = function() {
        document.head.appendChild(scriptRiskTag);
        scriptRiskTag.onreadystatechange = createMap;
        scriptRiskTag.onload = createMap;
    };

    var createMap = function() {

        // Language definition
        document.title = lang.PageTitle+countryName;
        document.getElementById("langDateLabel").textContent = lang.DateLabel;
        document.getElementById("langHomeLabel").textContent = lang.HomeLabel;
        document.getElementById("langReloadLabel").textContent = lang.ReloadLabel;

        // Remove loading page
        document.getElementById("loader").style="display:none!important";

        // Create map
        var map = L.map('map',
        {
            zoomSnap: 0.2,
            zoomDelta: 0.4
        });
        map.createPane('labels');
        map.getPane('labels').style.zIndex = 650;
        map.getPane('labels').style.pointerEvents = 'none';

        map.fitBounds([gps1, gps2]);

        var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Adapted by <a href="http://wesleycota.com/" ref="author">Wesley Cota</a>',
        }).addTo(map);
        var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
                maxNativeZoom: 12,
                pane: 'labels'
        }).addTo(map);

        // control that shows state info on hover
        var info = L.control();
        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };
        info.update = function (props) {
            if (props) {
                var a = getRisk(props.CODIGOINE);
                msg = (isNaN(a) ? 'Sin datos' : (a*100.0).toFixed(5) + "%");
                this._div.innerHTML = '<h4>'+lang.RiskHeader+'</h4>' +  '<b>' + props.NAMEUNIT + '</b><br />' + msg; // + props.CODIGOINE;
            }
            else {
                this._div.innerHTML = '<h4>'+lang.RiskHeader+'</h4>' + lang.HoverMapText;
            }
        };
        info.addTo(map);

        function highlightFeature(e) {
            var layer = e.target;
            layer.setStyle({
                weight: 2,
                opacity: 1,
                color: '#333',
                dashArray: '',
                fillOpacity: 1.0
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
            info.update(layer.feature.properties);
        }
        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        // zoomToFeature variables and function
        var zmd = false;
        var zmdlast = null;
        var prvzmd;
        function zoomToFeature(e) {
            if (zmd && zmdlast == e.target.feature.properties.CODIGOINE) {
                map.fitBounds(prvzmd);
                zmd = false;
                zmdlast = null;
            }
            else {
                zmd = true;
                zmdlast = e.target.feature.properties.CODIGOINE;
                prvzmd = map.getBounds();
                map.fitBounds(e.target.getBounds());
            }		
        }

        function resetZoom() {
            map.setView([40,-4], 6);
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        // Load RiskData before drawing
        // if (!Array.prototype.last){
        //     Array.prototype.last = function(){
        //         return this[this.length - 1];
        //     };
        // };
        var riskd;
        function loadRisk(pos = riskDatas.length - 1) {
            riskd = riskDatas[pos];
            document.getElementById("mapdate").textContent=riskd.riskDate;
        }
        loadRisk();
        function getRisk(d) {
        if (Number(d) in riskd.riskData) {
                return riskd.riskData[Number(d)];
            } else {
                return lang.NoData;
            }
        }

        // Map drawing functions
        // get color depending on population density value
        function getBaseLog(x, y) {
            return Math.log(y) / Math.log(x);
        }
        var colorSinDatos = '#f1f1f1';
        var rmin = 255.0;
        var gmin = 153.0;
        var bmin = 51.0;
        function getColor(e, hmax=getBaseLog(riskd.baseColor, riskd.phmax), hmin=getBaseLog(riskd.baseColor, riskd.phmin)) { // e = fraction
            if (isNaN(e)) return colorSinDatos;
            ir = (255.0 - rmin) * (hmax - (getBaseLog(riskd.baseColor, e*100.0))) / (hmax - hmin) + rmin;
            ig = (255.0 - gmin) * (hmax - (getBaseLog(riskd.baseColor, e*100.0))) / (hmax - hmin) + gmin;
            ib = (255.0 - bmin) * (hmax - (getBaseLog(riskd.baseColor, e*100.0))) / (hmax - hmin) + bmin;
            if (ir > 255) ir = 255;
            if (ig > 255) ig = 255;
            if (ib > 255) ib = 255;
            if (ir < rmin ) ir = rmin;
            if (ig < gmin ) ig = gmin;
            if (ib < bmin ) ib = bmin;
            return 'rgb('+ ir + ', ' + ig + ', ' + ib + ')';
        }

        // Poly style
        function style(feature) {
            return {
                weight: 0.5,
                opacity: 0.3,
                color: '#333',
                dashArray: '3',
                fillOpacity: 1.0,
                fillColor: getColor(getRisk(feature.properties.CODIGOINE))
            };
        }

        // TEST!
        function style2(feature) {
            return {
                weight: 0.5,
                opacity: 0.3,
                color: '#333',
                dashArray: '3',
                fillOpacity: 1.0,
                fillColor: '#ccc'
            };
        }
        // /TEST!

        // Legend control
        var legend = L.control({position: 'bottomright'});
        function buildLegend(map) {
                var div = L.DomUtil.create('div', 'info legend'),
                grades = riskd.legendGrades,
                labels = [],
                from, to;
            for (var i = 0; i < grades.length ; i++) {
                from = grades[i];
                labels.push(
                    '<i style="background:' + getColor((from+from*1e-7)/100.0) + '"></i> ' +from+'%');
            }
            labels.push(
                '<i style="background: '+ colorSinDatos +'"></i> '+lang.NoData);

            div.innerHTML = labels.join('<br>');
            return div;
        }
        legend.onAdd = buildLegend;

        // Finally draw the polygons
        var geojson = L.geoJson(statesData, {
            style: style,
            onEachFeature: onEachFeature
        });
        map.addLayer(geojson);
        map.attributionControl.addAttribution(atribMap);

        // Add extra plugins
        map.addControl(new L.Control.Fullscreen({position : 'bottomleft'})); // Fullscreen

        // Search box
        var searchControl = new L.Control.Search({
            layer: geojson,
            propertyName: 'NAMEUNIT',
            marker: false,
            position : 'bottomleft',
            moveToLocation: function(latlng, title, map) {
                //map.fitBounds( latlng.layer.getBounds() );
                var zoom = map.getBoundsZoom(latlng.layer.getBounds());
                  map.setView(latlng, zoom); // access the zoom
            }
        });
        map.addControl(searchControl);
        
        // Timeline control
        function updateMap({label, value, map}) {
            loadRisk(value - 1);
            legend.remove;
            legend.addTo(map);
            //alert(label + value + map); // value = position
            geojson.setStyle(style);
        }
        var timelineItems = new Array();
        riskDatas.forEach(function (item, index) {
            timelineItems.push(item.riskDateLabel);
        });
        var timeline = L.control.timelineSlider({
            timelineItems: timelineItems,
            labelFontSize: '10px',
            labelWidth : '40px',
            rightBgPadding: '12px',
            topBgPadding: '12px',
            leftBgPadding: '22px',
            bottomBgPadding : '10px',
            defaultSelection: 1, //timelineItems.length,
            position: 'topleft',
            //initializeChange: false,
            changeMap: updateMap
        }).addTo(map);

    };

    loadJS(findGetParameter('hash'), findGetParameter('country'), document.head, createMapWaitRisk);
    
}, false);
