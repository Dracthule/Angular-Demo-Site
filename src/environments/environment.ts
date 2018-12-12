// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'DCinsites',
  stripeKey: "pk_test_zLEAXxr23Cq78X2R3maILaSf",
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyARZEP1zeV8Ci9vhcYmV4qU8xMSaszi_7w", authDomain: "dci-test-site.firebaseapp.com", databaseURL: "https://dci-test-site.firebaseio.com", projectId: "dci-test-site", storageBucket: "dci-test-site.appspot.com", messagingSenderId: "886523916646"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
