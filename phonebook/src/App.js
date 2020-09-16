import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/search-component/search.component';
import PeopleContainer from './Components/people-container-component/people-container.component';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortType:  "phone_number",
      contacts: []
    }
  }

  async getData(url) {
    const data = await fetch(url);
    const dataJson = await data.json();
    const newContacts = dataJson.contacts.map(contact => {
      contact.ruid = Math.floor((Math.random() * 100) + 1);
      contact.gender = "women";
      let address = contact.address.split(",");
      let cityAdd = address.length >= 4 ? address[2] : address[1];
      let postalCode = cityAdd.split(" ");
      contact.postalCode = `${postalCode[2]} ${postalCode[3]}`
      return contact
    })
    this.setState({
      contacts: newContacts
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    this.getData("http://www.mocky.io/v2/581335f71000004204abaf83")
  }
  
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${logo})`}}>
        <h1>Search Contacts</h1>
        <SearchComponent searchText={this.state.search} handleChange={this.handleChange}/>
        <PeopleContainer contacts={this.state.contacts} searchText={this.state.search} sortType={this.state.sortType}/>
      </div>
    );
  }
}

export default App;
