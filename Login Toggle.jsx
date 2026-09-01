import React, { useState } from "react";

const LoginToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      ) : (
        <>
          <h2>Welcome User!</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default LoginToggle;