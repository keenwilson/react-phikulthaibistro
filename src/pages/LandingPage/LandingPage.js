import withRoot from "../../modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { Link } from "react-router-dom";
import AppAppBar from "../../modules/views/AppAppBar";
import AppFooter from "../../modules/views/AppFooter";
import ProductHero from "../../modules/views/ProductHero";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      {/* <AppFooter /> */}

      <div>
        <Link to="/home">Home</Link>
      </div>
    </React.Fragment>
  );
}

export default withRoot(Index);
