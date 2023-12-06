import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      currentPage: 1
    };
  }

  handlePageChange = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  }

  handleClick = () => {
    if (this.state.currentPage < 3) {
      this.handlePageChange();
    } else if (this.state.currentPage === 3) {
      // Add additional conditions if needed before moving to the next page or showing the form
      this.handlePageChange();
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.currentPage === 1) {
      currentlyVisibleState = (
        <div>
          <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
        </div>
      );
    } else if (this.state.currentPage === 2) {
      currentlyVisibleState = (
        <div>
          <p>Have you asked another pair for help?</p>
        </div>
      );
    } else if (this.state.currentPage === 3) {
      currentlyVisibleState = (
        <div>
          <p>Have you spent 15 minutes going through the problem documenting every step?</p>
        </div>
      );
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {this.state.currentPage <= 3 && (
          <button onClick={this.handleClick}>Next</button>
        )}
        {this.state.currentPage === 4 && <button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}

export default TicketControl;