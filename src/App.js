// // // // import { useEffect } from "react";
// // // // import { messaging } from "./firebase";
// // // // import { getToken } from "firebase/messaging";
// // // // // import logo from "./logo.svg";
// // // // import "./App.css";

// // // // function App() {
// // // //   async function requestPermission() {
// // // //     const permission = await Notification.requestPermission();
// // // //     if (permission === "granted") {
// // // //       // Generate Token
// // // //       const token = await getToken(messaging, {
// // // //         vapidKey:
// // // //           "BI4A0N0FAyzpaLZlmyLSAk1sHrQ1jokDeHH6h3sbrhsRM9pFv6ykOM7z2FhIvSXbHf_wJFW9qRZic4aIGczSIcI",
// // // //       });
// // // //       console.log("Token Gen", token);
// // // //       // Send this token  to server ( db)
// // // //     } else if (permission === "denied") {
// // // //       alert("You denied for the notification");
// // // //     }
// // // //   } 

// // // //   useEffect(() => {
// // // //     // Req user for notification permission
// // // //     requestPermission();
// // // //   }, []);

// // // //   return (
// // // //     <div className="App">
// // // //       <h1>Hello Everyone</h1>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;




// // // import { useEffect } from "react";
// // // import { messaging } from "./firebase";
// // // import { getToken, isSupported } from "firebase/messaging";

// // // function App() {
// // //   useEffect(() => {
// // //     async function requestPermission() {
// // //       const supported = await isSupported();
// // //       if (!supported) {
// // //         alert("Push notifications are not supported on this browser.");
// // //         return;
// // //       }

// // //       const permission = await Notification.requestPermission();
// // //       if (permission === "granted") {
// // //         const token = await getToken(messaging, {
// // //           vapidKey: "BI4A0N0FAyzpaLZlmyLSAk1sHrQ1jokDeHH6h3sbrhsRM9pFv6ykOM7z2FhIvSXbHf_wJFW9qRZic4aIGczSIcI",
// // //         });
// // //         console.log("Token Gen", token);
// // //       } else if (permission === "denied") {
// // //         alert("You denied the notification");
// // //       }
// // //     }

// // //     requestPermission();
// // //   }, []);

// // //   return (
// // //     <div className="App">
// // //       <h1>Hello Everyone</h1>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // // src/App.js
// // import React, { useEffect, useState } from "react";
// // import { messaging, getToken, onMessage } from "./firebase";

// // function App() {
// //   const [token, setToken] = useState("");

// //   useEffect(() => {
// //     // Request permission to send notifications
// //     const requestPermission = async () => {
// //       try {
// //         const currentToken = await getToken(messaging, {
// //           vapidKey: "BI4A0N0FAyzpaLZlmyLSAk1sHrQ1jokDeHH6h3sbrhsRM9pFv6ykOM7z2FhIvSXbHf_wJFW9qRZic4aIGczSIcI", // Replace with your VAPID key
// //         });
// //         if (currentToken) {
// //           setToken(currentToken);
// //           console.log("Token:", currentToken);
// //         } else {
// //           console.log("No registration token available. Request permission to generate one.");
// //         }
// //       } catch (error) {
// //         console.error("An error occurred while retrieving token. ", error);
// //       }
// //     };

// //     requestPermission();

// //     // Handle incoming messages
// //     onMessage(messaging, (payload) => {
// //       console.log("Message received. ", payload);
// //       // Customize notification handling here
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Firebase Notifications</h1>
// //       <p>Your Token: {token}</p>
// //     </div>
// //   );
// // }

// // export default App;





// import React, { useState } from "react";
// import { messaging, getToken, onMessage } from "./firebase";

// function App() {
//   const [token, setToken] = useState("");
//   const [permissionRequested, setPermissionRequested] = useState(false);

//   const requestNotificationPermission = async () => {
//     try {
//       const currentToken = await getToken(messaging, {
//         vapidKey:
//           "BI4A0N0FAyzpaLZlmyLSAk1sHrQ1jokDeHH6h3sbrhsRM9pFv6ykOM7z2FhIvSXbHf_wJFW9qRZic4aIGczSIcI", // Replace with your VAPID key
//       });
//       if (currentToken) {
//         setToken(currentToken);
//         console.log("Token:", currentToken);
//       } else {
//         console.log("No registration token available. Request permission to generate one.");
//       }
//       setPermissionRequested(true);
//     } catch (error) {
//       console.error("An error occurred while retrieving token. ", error);
//     }
//   };

//   // Handle incoming messages
//   onMessage(messaging, (payload) => {
//     console.log("Message received. ", payload);
//     // Customize notification handling here
//   });

//   return (
//     <div>
//       <h1>Firebase Notifications</h1>
//       {!permissionRequested && (
//         <button onClick={requestNotificationPermission}>
//           Allow Notifications
//         </button>
//       )}
//       {token && (
//         <div>
//           <p>Your Token:</p>
//           <textarea readOnly value={token} rows="5" cols="60" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import { messaging, getToken, onMessage } from "./firebase";

function App() {
  const [token, setToken] = useState("");
  const [permissionRequested, setPermissionRequested] = useState(false);

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if(permission === 'granted'){
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BI4A0N0FAyzpaLZlmyLSAk1sHrQ1jokDeHH6h3sbrhsRM9pFv6ykOM7z2FhIvSXbHf_wJFW9qRZic4aIGczSIcI", // Replace with your VAPID key
      });
      if (currentToken) {
        setToken(currentToken);
        console.log("Token:", currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
      setPermissionRequested(true);
    }
    else if( permission === 'denied'){
       console.log('permission denied');
    }
    else {
      console.log('This Browser does not support notification')
    }
    } catch (error) {
      console.error("An error occurred while retrieving token. ", error);
    }
  };

  // Handle incoming messages
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Customize notification handling here
  });

  return (
    <div>
      <h1>Firebase Notifications</h1>
      {!permissionRequested && (
        <button onClick={requestNotificationPermission}>
          Allow Notifications
        </button>
      )}
      {token && (
        <div>
          <p>Your Token:</p>
          <textarea readOnly value={token} rows="5" cols="60" />
        </div>
      )}
    </div>
  );
}

export default App;

