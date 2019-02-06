import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainComponent/MainContainer';
import Login from './Login/Login';

class App extends Component {
  state = {
    logged: false,
    username: "",
    news: []
  }
  getNews = async (e) => {
    // HAVE A BUTTON TO GET THE NEWS!
    // const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    // const cors_api_host = 'cors-anywhere.herokuapp.com';
    // const cors_api_url = 'https://' + cors_api_host + '/';
    const api_call = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-06&sortBy=publishedAt&apiKey=4c994c380764471082b8842f35f9b3d2')
    const data = await api_call.json();
    // SET STATE TO API DATA
    
    this.setState({ news: data.articles });
    
  }
  handleLogin = (username) => {
    console.log('Handle login is working.');
    this.setState({
      logged: true,
      username: username
    });
  }
  render() {
    const news = this.state.news.map( (article,i) => {
      return (
        <div key={i} style={{float:"left"}}>
          <p><strong>Author:</strong>{article.author}</p>
          <p><strong>Title:</strong>{article.title}</p>
          <p><strong>Description:</strong>{article.description}</p>
          <hr/>
        </div>
      )
    })
    return (
      <div className="App">
        {this.state.logged ? <MainContainer news={this.state.news} getNews={this.getNews} username={this.state.username}/> : <Login handleLogin={this.handleLogin}/>}
        <div>
          {news}
        </div>
      </div>
    );
  }
}

export default App;
