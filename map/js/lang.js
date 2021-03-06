var changeLang = function(lang) {
    switch(lang) {
        case 'en':
            return {
                PageTitle : 'Interactive map of propagation risk of SARS-CoV-2 in ',
                RiskHeader : 'Risk SARS-CoV-2',
                HoverMapText : 'Hover a municipality',
                NoData : 'No data',
                DateLabel : 'Predictions',
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
                PageTitle : 'Mapa interativo da previsão de propagação do SARS-CoV-2: ',
                RiskHeader : 'Previsão SARS-CoV-2',
                HoverMapText : 'Passe o cursor sobre uma cidade',
                NoData : 'Sem dados',
                DateLabel : 'Previsões',
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
                DateLabel : 'Predicciones',
                HomeLabel : 'Pagina principal',
                ReloadLabel : 'Reload',
                esName : 'España',
                brName : 'Brasil',
                ptName : 'Portugal',
                // xxName : 'xx'
            };
      };
};
