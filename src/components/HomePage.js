import React from "react";
import { NavLink } from "react-router-dom";
import LatestRecipes from '../components/LatestRecipes';
import "../scss/HomePage.scss";

const HomePage = () => {
  return (
    <>

      <section className="section section-btnlinks">
        <div className="row">
          <div className="col-md">
            <NavLink to="/recipes" className="btnlink btnlink-1">
              <span className="title">List of planed routes</span>
              <span className="desc"> See all the current planed routes</span>
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/homemade-recipes" className="btnlink btnlink-2">
              <span className="title">Add route</span>
            </NavLink>
          </div>
          <div className="col-md">
            <NavLink to="/search" className="btnlink btnlink-3">
              <span className="title">Add new data</span>
              <span className="desc">add all the new employees and items to the database</span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
