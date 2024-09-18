import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Aman Rai"} /> */}
        <UserClass name={"Aman Rai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Aman Rai"} /> */}
//       <UserClass name={"Aman Rai"} />
//     </div>
//   );
// };
export default About;
