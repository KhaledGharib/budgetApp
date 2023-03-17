import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../actions/filters";

class ExpenseListfilters extends React.Component {
  state = {
    calenderFocuesd: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calenderFocuesd) => {
    this.setState(() => ({ calenderFocuesd }));
  };
  render() {
    return (
      <div>
        <input
          text="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value) {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    );
  }
}

/*
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocuesd}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="MyDatePickerStart"
          endDateId="MyDatePickerEnd"
        />
*/
import moment from "moment";
const mapStateToProps = (state) => ({
  filters: {
    ...state.filters,
    startDate: moment(state.filters.startDate),
    endDate: moment(state.filters.endDate),
  },
});

export default connect(mapStateToProps)(ExpenseListfilters);
