import * as React from "react";
import { Button, Typography } from "@mui/material";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

const TestFirebaseAuth: React.FC = () => {
  const [user, setUser] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setError(null); // Clear previous errors
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User Info:", result.user);
    } catch (error: any) {
      let errorMessage = "An error occurred during sign-in. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage =
          "The sign-in popup was closed before completing the sign-in process.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage =
          "Network error occurred. Please check your internet connection and try again.";
      } else if (error.code === "auth/operation-not-allowed") {
        errorMessage =
          "Operation not allowed. Please enable Google sign-in in your Firebase console.";
      } else if (
        error.code === "auth/operation-not-supported-in-this-environment"
      ) {
        errorMessage =
          "Popup sign-in is not supported in this environment. Please try a different browser.";
      }
      setError(errorMessage);
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4">Test Firebase Authentication</Typography>
      {user ? (
        <div>
          <Typography variant="h6">Signed in as {user.displayName}</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </div>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      )}
      {error && (
        <Typography color="error" style={{ marginTop: "20px" }}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default TestFirebaseAuth;
