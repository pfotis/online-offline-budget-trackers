let db;
// create a new db request for a "budget" database local in the browser.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjestStore("pending", { autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;
    if(navigator.online){
      // function()
    }
};
