export const openDb = () => {
  if (!window.indexedDB) {
    console.log(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
    return;
  }
  const request = window.indexedDB.open("MyTestDatabase", 1);
  request.onerror = function () {
    console.log("Could not use IndexedDB");
  };
  request.onsuccess = (event: any) => {
    const db = event.target.result;
    db.onerror = (event: any) => {
      console.error("Database error: " + event.target.errorCode);
    };
  };
  request.onupgradeneeded = function (event: any) {
    const db = event.target.result;
    
    var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
  };
};
