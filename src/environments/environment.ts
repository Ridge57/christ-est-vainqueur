// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const firebase = {
  apiKey: 'AIzaSyDq8b_fkAa6yiYhxt3m1lsEH9R-6ioVIzE',
  authDomain: 'zondimo-c553e.firebaseapp.com',
  databaseURL: 'https://zondimo-c553e.firebaseio.com',
  projectId: 'zondimo-c553e',
  storageBucket: 'zondimo-c553e.appspot.com',
  messagingSenderId: '93694676731'
};

// set this to true to use static data from "data" folder
export const staticData = false;
