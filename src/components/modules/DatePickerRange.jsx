import { Controller } from "react-hook-form";
import { DatePicker } from 'zaman';

function DatePickerRange({ control }) {
    return (
        <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
                <DatePicker
                    value={value} // باید {from, to} باشد
                    onChange={(e) => onChange({ from: e.from, to: e.to })}
                    range
                    accentColor="#28A745"
                    inputClass="rr"
                />
            )}
        />
    )
}

export default DatePickerRange