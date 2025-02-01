import React from "react";
import Dashboard from "./dashboard/Dashboard.tsx"; // ✅ Import Dashboard component
import SingIn from "./sign-in/SignIn.tsx"; // ✅ Import SignIn component
import SingUp from "./sign-up/SignUp.tsx"; // ✅ Import SignIn component

const App: React.FC = () => {
  return <SingUp />;
  //return <SingIn />;
  //return <Dashboard />;
};

export default App;

// import * as React from "react";
// import TestFirebaseAuth from "./sign-up/TestFirebaseAuth.tsx";

// const App: React.FC = () => {
//   return (
//     <div>
//       <TestFirebaseAuth />
//     </div>
//   );
// };

// export default App;
