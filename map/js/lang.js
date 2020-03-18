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
                brName : 'Brazil',
                ptName : 'Portugal',
                // xxName : 'xx'
            };
            break;
        case 'pt':
            return {
                PageTitle : 'Mapa interativo do risco do SARS-CoV-2: ',
                RiskHeader : 'Risco SARS-CoV-2',
                HoverMapText : 'Passe o mouse sobre uma cidade',
                NoData : 'Sem dados',
                DateLabel : 'Data',
                HomeLabel : 'Página principal',
                ReloadLabel : 'Atualizar',
                esName : 'Espanha',
                brName : 'Brasil',
                ptName : 'Portugal',
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
                brName : 'Brasil',
                ptName : 'Portugal',
                // xxName : 'xx'
            };
      };
};
