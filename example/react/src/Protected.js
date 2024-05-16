import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
export default function Protected() {
<button onclick="myFunction()">Replace document</button>
  const user = netlifyIdentity.currentUser();
  console.log({ user });
  return (
    <div>
      <h3>Protected Page</h3>
      You are logged in as <b>{user.email}</b>
      <function></function> myFunction() {
      location.replace("https://www.w3schools.com")
      }
    </div>
  );
}
