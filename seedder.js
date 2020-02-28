const admin = require("firebase-admin");
// serviceAccountKey.json can be generated in Firebase Console.
const serviceAccount = require("./serviceAccountKey.json");
const seed = require('firestore-seed');
const fs = require('fs');

// Initialize firebase-admin.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://carpincullo-22333.firebaseio.com",
    storageBucket: "carpincullo-22333.appspot.com",
});

fs.readFile('seedData.json', 'utf8', function (err, data) {
    if (err) throw err;
    try {
        obj = JSON.parse(data);
        uploadData(obj);
    } catch (e) {
        console.error(e);
    }
});

function uploadData(data) {

    // Import seeds.
    const collection = (data || []).map((d, index) => {
        return seed.doc("gallaryItem" + index, {
            ...d, created: new Date()
        });
    });


    let messagesCollection = seed.collection("gallaryGroupTest", collection);

    messagesCollection.importDocuments(admin).then(() => {
        console.log("Successfully imported documents.");
    }).catch(e => {
        console.log("Failed to import documents: " + e);
    });
}
