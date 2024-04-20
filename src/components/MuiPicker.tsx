import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker, TimePicker } from '@mui/x-date-pickers';

export default function MuiPicker() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [selectedDateTime, setSelectedDateTime] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    console.log({ value });
    console.log({ selectedTime });
    console.log({ selectedDateTime });
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
                <DatePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
                <TimePicker
                    label="Time picker"
                    value={value}
                    onChange={(newValue) => setSelectedTime(newValue)}
                />
                <DateTimePicker
                    label="Date time picker"
                    value={value}
                    onChange={(newValue) => setSelectedTime(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}