import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

remoteEmployee = id => {
        const friends = this.state.friends.filter(friend => friend.location === "Beverly Hills");
        this.setState({ friends });
      };

sortBy = id => {
        let sorting = this.state.friends.sort(friend => friend.name);
        this.setState({ sorting });
      }
//  this.sortBy.bind(this);    

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        remoteEmployee={this.remoteEmployee}
        sortEmployee = {this.sortEmployee}
         />
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  };
}
export default App;