const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

let users = [process.argv[2], process.argv[3]];

users = users.sort((a, b) => a.localeCompare(b));

let messages = db.collection('chats').doc(users[0] + '.' + users[1]).collection('messages');

let observer = messages.orderBy('timestamp').onSnapshot(docSnapshot => {
	docSnapshot.docChanges().forEach((change) => {
		if (change.type === 'added') {
			console.log(change.doc.data().from, ':', change.doc.data().message);
		}
		if (change.type === 'removed') {
			console.log('removed', ':', change.doc.data().message);
		}
	})
}, err => {
	console.log(`Encountered error: ${err}`);
});

process.stdin.on('data', input => {
	let text = input.toString();

	messages.add({
		from: process.argv[2],
		timestamp: new Date().getTime(),
		message: text
	}).then().catch(console.log);
});

