import React from "react";
import { PageSelection } from "../../types/pages";
import { Page } from "../layout/page";

import "./home.css";

interface HomePageProps {}

export function Home(params: HomePageProps) {
  return (
    <Page selection={PageSelection.HOME}>
      <div className="pageContent">
        <header className="pageHeader">
          <h1>Aid Packages</h1>
        </header>
        <div className="packageTableSearch">
          <div className="searchContainer">
            <img src="/assets/svg/search_icon.svg" />
            <input placeholder="Search" className="textField" />
          </div>
        </div>
        <div className="packageTableContainer">
          <table>
            <tr>
              <th>Aid Package</th>
              <th>Status</th>
              <th>Pledges</th>
              <th>Supplier</th>
              <th></th>
            </tr>
            <tr>
              <td>Aid Package 1</td>
              <td>Partially Funded</td>
              <td>75%</td>
              <td>Brolin Pharmaceutical Suppliers</td>
              <td>
                <div className="tableButtonLayer">
                  <button> Details </button>
                  <button> Pledges </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Aid Package 2</td>
              <td>Closed</td>
              <td>100%</td>
              <td>Maclin Pharmaceutical Suppliers</td>
              <td>
                <div className="tableButtonLayer">
                  <button> Details </button>
                  <button> Pledges </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Page>
  );
}
