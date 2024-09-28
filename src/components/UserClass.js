import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  render() {
    const { name, location, company } = this.state.userInfo;
    return (
      <div className="">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Company : {company}</h4>
        <h4>This is a Class Based Component</h4>
      </div>
    );
  }
}
export default UserClass;
