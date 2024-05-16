import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
export default function Protected() {
  const user = netlifyIdentity.currentUser();
  console.log({ user });
  return (
    <div>
      <h3>Protected Page</h3>
      You are logged in as <b>{user.email}</b>
      window.location.replace("https://los-8b.netlify.app")
    </div>
  );
}
