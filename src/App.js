import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";
import Profile from "./components/Profile";

function App() {
  const [userSearch, setUserSearch] = useState("RMK-creative");
  const [userInfo, setUserInfo] = useState({});
  const [userTheme, setUserTheme] = useState("dark");

  const userInput = document.getElementById("user__search");

  useEffect(() => {
    getUserInfo();
  }, [userSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSearch(userInput.value);
    userInput.value = "";
  };

  const getUserInfo = () => {
    try {
      axios.get(`https://api.github.com/users/${userSearch}`).then((res) => {
        setUserInfo({
          username: res.data.login,
          name: res.data.name,
          avatar: res.data.avatar_url,
          date: res.data.created_at,
          bio: res.data.bio,
          repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,
          company: res.data.company,
          location: res.data.location,
          twitter: res.data.twitter_username,
          email: res.data.email,
          blog: res.data.blog,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(userSearch);
  // console.log(userInfo);

  return (
    <div className="App">
      <Navigation />
      <Searchbar handleSubmit={handleSubmit} />
      <Profile userInfo={userInfo} />
    </div>
  );
}

export default App;
