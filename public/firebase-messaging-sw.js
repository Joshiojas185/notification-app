// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyD7nzziYoW0NNC2KbP1z4Qyuelz2rPfE3A",
//   authDomain: "auth-caf27.firebaseapp.com",
//   projectId: "auth-caf27",
//   storageBucket: "auth-caf27.firebasestorage.app",
//   messagingSenderId: "419446307195",
//   appId: "1:419446307195:web:95404a4f931bcbd0f025de"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });




/* === your existing code === */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

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

/* ---------- 1. Show the notification and save the link ---------- */
messaging.onBackgroundMessage((payload) => {
  console.log("[SW] BG message:", payload);

  // Grab a deep-link from either payload.data.url OR notification.click_action
  const url =
    payload.data?.deeplink ||
    payload.data?.url ||
    payload.notification?.click_action ||
    "/";                       // fallback

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
    data: { url }              // 👉 keep the link here
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

/* ---------- 2. React when the user taps the push ---------- */
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    // Re-use an open tab if we already have one with the same URL
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus();
        }
      }
      // Otherwise open a new tab/window
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
