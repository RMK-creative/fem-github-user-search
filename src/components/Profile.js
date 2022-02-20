import React from "react";
import "./_profile.css";
import Moment from "react-moment";

import IconLocation from "../assets/icon-location.svg";
import IconBlog from "../assets/icon-website.svg";
import IconTwitter from "../assets/icon-twitter.svg";
import IconCompany from "../assets/icon-company.svg";

const Profile = (props) => {
  const { userInfo } = props;

  return (
    <div>
      <main>
        <section className="user__card">
          {userInfo.name ? (
            <>
              <header className="user__card-header">
                <div className="user__avatar-container">
                  <img
                    className="user__avatar"
                    src={userInfo.avatar}
                    alt={userInfo.name}
                  />
                </div>
                <div>
                  <h2 className="user__name">{userInfo.name}</h2>
                  <h3 className="user__handle">@{userInfo.username}</h3>
                  <h4 className="user__joined">
                    Joined{" "}
                    {<Moment format="DD MMM YYYY">{userInfo.date}</Moment>}
                  </h4>
                </div>
              </header>
              <p className="user__bio">
                {userInfo.bio === null ? (
                  <p>No bio information found</p>
                ) : (
                  userInfo.bio
                )}
              </p>
              <section>
                <ul className="user__stats">
                  <li className="user__stats-list-item">
                    <span className="user__stat-label">Repos</span>
                    <span className="user__stat-number">{userInfo.repos}</span>
                  </li>
                  <li li className="user__stats-list-item">
                    <span className="user__stat-label">Followers</span>
                    <span className="user__stat-number">
                      {" "}
                      {userInfo.followers}
                    </span>
                  </li>
                  <li li className="user__stats-list-item">
                    <span className="user__stat-label">Following</span>
                    <span className="user__stat-number">
                      {" "}
                      {userInfo.following}
                    </span>
                  </li>
                </ul>
              </section>
              <section>
                <ul className="user__contacts">
                  <li>
                    <span style={{ marginLeft: "5px" }}>
                      <img
                        className="user__contact-icon filter-white"
                        src={IconLocation}
                        alt=""
                      />
                    </span>

                    {userInfo.location ? userInfo.location : "Not available"}
                  </li>
                  <li>
                    <span>
                      <img
                        className="user__contact-icon  filter-white"
                        src={IconBlog}
                        alt=""
                      />
                    </span>
                    {userInfo.blog ? userInfo.blog : "Not available"}
                  </li>
                  <li>
                    <span>
                      <img
                        className="user__contact-icon  filter-white"
                        src={IconTwitter}
                        alt=""
                      />
                    </span>
                    {userInfo.twitter ? userInfo.twitter : "Not available"}
                  </li>
                  <li>
                    <span>
                      <img
                        className="user__contact-icon  filter-white"
                        src={IconCompany}
                        alt=""
                      />
                    </span>
                    {userInfo.company ? userInfo.company : "Not available"}
                  </li>
                </ul>
              </section>
            </>
          ) : (
            <p>Loading..</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Profile;
