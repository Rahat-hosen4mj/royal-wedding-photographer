import React from "react";

const Blog = () => {
  return (
    <div className="container p-5">
      <div className="py-3 px-5">
        <h3 className="">
          Difference between authorization and authentication{" "}
        </h3>
        <p>
          <b>Answer : </b>In simple terms, authentication is the process of
          verifying who a user is, while authorization is the process of
          verifying what they have access to. Comparing these processes to a
          real-world example, when you go through security in an airport, you
          show your ID to authenticate your identity.
        </p>
      </div>
      <div className="py-3 px-5">
        <h3 className=""> Why are you using firebase? </h3>
        <p>
          <b>Answer : </b>Google Firebase offers many features that pitch it as
          the go-to backend development tool for web and mobile apps. It reduces
          development workload and time. And it's a perfect prototyping tool.
          Firebase is simple, lightweight, friendly, and industrially
          recognized.
        </p>
        <h4>What other options do you have to implement authentication ?</h4>
        <p>
          <b>Answer : </b> Yes, 12 User Authentication Platforms Like <br />
          Okta. PingIdentity. Keycloak. Frontegg. Authress.
        </p>
      </div>
      <div className="py-3 px-5">
        <h3 className="">
          What other services does firebase provide other than authentication
        </h3>
        <p>
          <b>Answer : </b>There are many services which Firebase provides, Most
          useful of them are: Cloud Firestore Cloud Functions Authentication
          Hosting Cloud Storage Google Analytics Predictions Cloud Messaging
          Dynamic Links Remote Config. <br />
          Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.
        </p>
      </div>
    </div>
  );
};

export default Blog;
