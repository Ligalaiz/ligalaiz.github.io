import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../sevices/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = selectedPersib => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAppPeople}
      >
        {i => `${i.name} (${i.bithYear})`}
      </ItemList>
    );

    const perosnDetails = (
      <ErrorBoundry>
        <itemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemLIst} rigth={personDetails} />;
  }
}
