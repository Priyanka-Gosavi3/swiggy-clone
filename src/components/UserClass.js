import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
  }


  async componentDidMount() {
  const response = await fetch(
    "https://api.github.com/users/Priyanka-Gosavi3",
    {
      // Only add Authorization if token is defined
      headers: process.env.REACT_APP_GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` }
        : {},
    }
  );
  const data = await response.json();

  if (response.ok) {
    this.setState({ userInfo: data });
  } else {
    // API error, show message or empty state
    console.error("GitHub API error:", data.message);
    this.setState({ userInfo: {} });
  }
}


  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const imgUrl = this.state.userInfo.avatar_url;
    const { name, location, company } = this.state.userInfo;

    return (
      <div className="flex justify-center mt-6">
        <div className="bg-gray-100 rounded-xl p-6 shadow-lg w-full max-w-sm text-center space-y-4">
          <img
            src={imgUrl}
            alt="GitHub Avatar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h2 className="text-xl font-bold text-blue-400">Name: {name}</h2>
          <h3 className="text-md text-gray-700">Location: {location}</h3>
          <h3 className="text-md text-gray-700">Company: {company || "N/A"}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
