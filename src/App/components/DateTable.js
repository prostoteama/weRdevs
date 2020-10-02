import React, { Component } from "react";

import { prevDays, currDays, nextMonthDays } from "./Data";
import { Portal, PopUp } from "./";

import "./styles/DateTable.scss";

import { connect } from "react-redux";
import { isOpen } from "../Redux/selectors/dataReducerS";
import { addDate } from "../Redux/actions/actionsDate";

class DateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: ["sun", "mon", "tus", "wen", "thus", "frid", "sat"],
      date: new Date(),
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    const date = new Date();
    date.setDate(1);
    this.setState({ date });
  }

  get lastDay() {
    const { date } = this.state;
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  get prevLastDay() {
    const { date } = this.state;
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  get firstDayIndex() {
    const { date } = this.state;
    return date.getDay();
  }

  get lastDayIndex() {
    const { date } = this.state;
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  }

  get nextDays() {
    let nextRow = this.firstDayIndex < 5 ? 14 : 7;
    return nextRow - this.lastDayIndex - 1;
  }

  onHandlePrev = () => {
    const { date } = this.state;
    date.setMonth(date.getMonth() - 1);
    this.setState({ date });
  };

  onHandleNext = () => {
    const { date } = this.state;
    date.setMonth(date.getMonth() + 1);
    this.setState({ date });
  };

  onHandleClick(e) {
    const { date, days, months } = this.state;
    const { addDate, dispatch } = this.props;

    const selectedData = e.target;
    const diff = selectedData.classList.contains("prev-date")
      ? -1
      : selectedData.classList.contains("next-date")
      ? 1
      : 0;
    const monthEl =
      date.getMonth() + diff > 11
        ? 0
        : date.getMonth() + diff < 0
        ? 11
        : date.getMonth() + diff;
        
    dispatch(addDate(months[monthEl], `${selectedData.innerHTML}th, ${days[date.getDay()]}`));
  }

  render() {
    const { date, months } = this.state;
    const { isOpen } = this.props;

    return (
      <>
        <div className="calendar">
          <div className="month">
            <i
              className="fas fa-angle-left prev"
              onClick={this.onHandlePrev}
            ></i>
            <div className="date">
              <h1>{months[date.getMonth()]}</h1>
            </div>
            <i
              className="fas fa-angle-right next"
              onClick={this.onHandleNext}
            ></i>
          </div>
          <div className="days">
            {prevDays(this.firstDayIndex, this.prevLastDay).map((e) => (
              <div className="prev-date" key={e} onClick={this.onHandleClick}>
                {e}
              </div>
            ))}
            {currDays(this.lastDay).map((e) => (
              <div
                className={
                  e === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth()
                    ? "today"
                    : null
                }
                key={e}
                onClick={this.onHandleClick}
              >
                {e}
              </div>
            ))}
            {nextMonthDays(this.nextDays).map((e) => (
              <div className="next-date" key={e} onClick={this.onHandleClick}>
                {e}
              </div>
            ))}
          </div>
          <div className="weekdays">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
        </div>
        {isOpen ? (
          <Portal>
            <PopUp />
          </Portal>
        ) : null}
      </>
    );
  }
}

const mapState = (state) => ({
  isOpen: isOpen(state),
});

const mapDispatch = (dispatch) => ({
  addDate,
  dispatch
});

export default connect(mapState, mapDispatch)(DateTable);
