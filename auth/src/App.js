import React, { useCallback, useState } from 'react';
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = (data) => {
    console.log('Google Login:', data);
    setIsLoggedIn(true);
    setUserData(data);
  };

  const handleFacebookLogin = (data) => {
    console.log('Facebook Login:', data);
    setIsLoggedIn(true);
    setUserData(data);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {userData.name}</h2>
          <img src={userData.picture} alt="Profile" />
          <p>Email: {userData.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <LoginSocialGoogle
            // client_id="692552795977-jdobup53n4ej3m0aubbqu5f36t9uqo3m.apps.googleusercontent.com"
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ data }) => handleGoogleLogin(data)}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <LoginSocialFacebook
            appId="177847918485141"
            autoLoad={true}
            fieldsProfile="id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
            onResolve={({ data }) => handleFacebookLogin(data)}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </>
      )}
    </>
  );
};

export default App;
