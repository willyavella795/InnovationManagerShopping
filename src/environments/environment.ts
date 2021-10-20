// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://100.123.248.218:8080/API_Facturador_Web',
  ApiLogin: '/api/Logging/GetLogging',
  ApiCabecera: '/api/User/CABECERA_VIEW',
  ApiPerfile: '/api/User/FACT_PERFILBYALL',
  ApiOrgVentas: '/api/User/FACT_REGIOBYALL_WEB',
  ApiCentros: '/api/User/FACT_CENTROSBYDIVISION_WEB',
  ApiBuscarConsultor: '/api/User/FACT_CONSULTBYCODBYALL_WEB',
  ApiEliminarConsultor: '/api/User/FACT_DELETE_CONSULTOR_WEB',
  ApiActualizarConsultor:'/api/User/FACT_UPDATE_CONSULTOR_WEB',
  ApiInsertarConsultor:'/api/User/FACT_INSERT_CONSULTOR_WEB',
  ApiDealer:'/api/User/Z02OTCMF_0697_DEALER',
  ApiCodigoCentro: '/api/Sap/FACT_OFICINABYCODIGO',
  ApiCentrosOficinas: '/api/Sap/FACT_OFICINASBYALL',
  ApiProcesoXPerfil: '/api/Perfiles/GetPerfiles',
  ApiGuardarProcesoXperfil: '/api/Perfiles/SavePerfiles'  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
