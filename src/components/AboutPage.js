import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutPage extends React.Component {

  componentDidMount() {}

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="p-8 bg-white rounded-2xl shadow-2xl w-[350px] text-center space-y-4">
          <h1 className="text-3xl font-extrabold text-blue-400 underline">ABOUT US</h1>

          <div className="font-medium text-gray-800 text-md">
            Logged In User:{" "}
            <span className="text-blue-600 font-semibold">
              <UserContext.Consumer>{(data) => data.loggedInUser}</UserContext.Consumer>
            </span>
          </div>

          <h2 className="text-lg text-gray-600">This is React Web Series</h2>

          <div className="mt-4">
            <UserClass />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
