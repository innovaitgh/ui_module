import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';

export default function TimeInput({ selectedDate, setSelectedDate, label, ...others }) {
  return (
    <MuiPickersUtilsProvider utils={ DateFnsUtils }>
      <KeyboardTimePicker
          label={ label }
          value={ selectedDate }
          onChange={ setSelectedDate }
          {
            ...others
          }
        />
    </MuiPickersUtilsProvider>
  );
}

TimeInput.defaultProps = {
  margin: "normal"
}
