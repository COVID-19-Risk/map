var changeLang = function(lang) {
    switch(lang) {
        case 'en':
            return {
                PageTitle : 'Interactive map of propagation risk of SARS-CoV-2 in ',
                RiskHeader : 'Risk SARS-CoV-2',
                HoverMapText : 'Hover a municipality',
                NoData : 'No data',
                DateLabel : 'Date',
                HomeLabel : 'Main page',
                ReloadLabel : 'Reload',
                esName : 'Spain',
                // xxName : 'xx'
            };
            break;
        default:
            return {
                PageTitle : 'Mapa interactivo del riesgo del SARS-CoV-2 en ',
                RiskHeader : 'Riesgo SARS-CoV-2',
                HoverMapText : 'Pase el mouse sobre un municipio',
                NoData : 'Sin datos',
                DateLabel : 'Datos',
                HomeLabel : 'Pagina principal',
                ReloadLabel : 'Reload',
                esName : 'España',
                // xxName : 'xx'
            };
      };
};
