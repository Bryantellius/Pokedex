import * as React from "react";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <main className="my-2">
      <h2 className="text-center text-dark-secondary p-2 border-bottom border-dark-primary">
        Filter Pokedex
      </h2>
      <div className="row my-4">
        <div className="col-8 mx-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <div className="col-8 mx-auto d-flex justify-content-center my-2">
          <div className="btn-group-vertical">
            <button className="btn btn-dark-primary">Type</button>
            <button className="btn btn-dark-primary">Weaknesses</button>
          </div>
        </div>
      </div>
    </main>
  );
};

interface INavbarProps {}

export default Navbar;
