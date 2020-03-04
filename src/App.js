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
sortEmployee = id => 
{
        // function x (a, b){
        //   const payA = a.pay;
        //   const payB = b.pay;
        //   let comparison = 0;
        //   if (payA < payB) {
        //     comparison = 1;
        //   } else if (payA > payB) {
        //     comparison = -1;
        //   }
        //   return comparison;
        // }
        friends.sort(this.name);
        this.setState({ friends });
      };
    
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        remoteEmployee={this.remoteEmployee}
        sortEmployee = {this.sortEmployee}
         />
        <Title>Employee list</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            pay={friend.pay}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;