// vendors
import { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

// styles
import { styles } from './styles'

// interface
interface DatePickerProps {
  value: string
  mode: 'datetime' | 'date'
  controller: (item: boolean) => void
  dateTime: (item: string) => void
}

// contexts
import { ContextList } from '../../../context/list-context'

function nowMoreOneDay() {
  return new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
}

export default function DatePicker({
  value,
  mode,
  controller,
  dateTime,
}: DatePickerProps) {
  const [dateOfEvent, setDateOfEvent] = useState(nowMoreOneDay())
  const [date, setDate] = useState(value)
  const [showPicker, setShowPicker] = useState(false)

  const { formatDate } = useContext(ContextList)

  function toggleDatePicker() {
    setShowPicker(!showPicker)
  }

  function onChange({ type }: any, selectedDate: any) {
    let currentDate: any
    if (type == 'set') {
      currentDate = selectedDate
      setDate(currentDate)

      if (Platform.OS === 'android') {
        toggleDatePicker()
        setDateOfEvent(formatDate(currentDate))
      }

      return
    }

    toggleDatePicker()
  }

  function confirmIOSDate() {
    setDateOfEvent(date)

    toggleDatePicker()
  }

  useEffect(() => {
    controller(showPicker)
    dateTime(date)
  }, [showPicker])

  return (
    <View style={styles.containerInputPicker}>
      {showPicker && (
        <DateTimePicker
          style={styles.datePicker}
          mode={mode}
          display='spinner'
          value={new Date(date)}
          onChange={onChange}
          minimumDate={new Date(new Date().setHours(new Date().getHours() + 1))}
        />
      )}
      {showPicker && Platform.OS === 'ios' && (
        <View style={styles.viewButtonPicker}>
          <TouchableOpacity onPress={toggleDatePicker}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={confirmIOSDate}>
            <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}
      {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.inputPicker}
            placeholder={formatDate(new Date())}
            value={formatDate(new Date(dateOfEvent))}
            onChangeText={setDateOfEvent}
            placeholderTextColor='#11182744'
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}
    </View>
  )
}
