import React, { Component } from "react";

import "./styles/PopUp.scss";

import { connect } from "react-redux";
import { isOpen, getDay, getMonth } from "../Redux/selectors/dataReducerS";
import { addDate, closePopup } from "../Redux/actions/actionsDate";

class PopUp extends Component {
  closeHandler = (e) => {
    this.props.dispatch(closePopup());
  };

  render() {
    return (
      <>
        <div className="popup_overlay" onClick={this.closeHandler}></div>
        <div className="popup ">
          <label>
            Month
            <input type="text" value={this.props.month} />
          </label>
          <label>
            Day
            <input type="text" value={this.props.day} />
          </label>
          <i
            className="fa fa-times popup__close"
            aria-hidden="true"
            onClick={this.closeHandler}
          ></i>
        </div>
      </>
    );
  }
}

const mapState = (state) => ({
  isOpen: isOpen(state),
  day: getDay(state),
  month: getMonth(state),
});

const mapDispatch = (dispatch) => ({
  addDate,
  closePopup,
  dispatch,
});

export default connect(mapState, mapDispatch)(PopUp);
