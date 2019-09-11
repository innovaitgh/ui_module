import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateInput({ selectedDate, setSelectedDate, label, ...others }) {
  return (
    <MuiPickersUtilsProvider utils={ DateFnsUtils }>
      <KeyboardDatePicker
        disableToolbar
        label={ label }
        value={ selectedDate }
        onChange={ setSelectedDate }
        { ...others }
      />
    </MuiPickersUtilsProvider>
  );
}

DateInput.defaultProps = {
  format: "MM/dd/yyyy",
  margin: "normal"
}
