importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD7nzziYoW0NNC2KbP1z4Qyuelz2rPfE3A",
  authDomain: "auth-caf27.firebaseapp.com",
  projectId: "auth-caf27",
  storageBucket: "auth-caf27.firebasestorage.app",
  messagingSenderId: "419446307195",
  appId: "1:419446307195:web:95404a4f931bcbd0f025de"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});