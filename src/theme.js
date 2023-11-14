// JS
function importAll(r) {
  r.keys().forEach(r);
}

// this will import all .js files from the scripts folder and any of its subfolders
importAll(require.context('../components', true, /\.js$/));