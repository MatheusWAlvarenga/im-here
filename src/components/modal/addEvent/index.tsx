// vendors
import React, { useContext, useState } from 'react'
import {
  View,
  Modal,
  Alert,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native'

// styles
import { styles } from './styles'

// contexts
import { ContextList } from '../../../context/list-context'

// form components
import DatePicker from '../../form/DatePicker'

// interface
import { EventType } from '../../../context/list-context'

export default function ModalAddEvent() {
  const [eventDate, setEventDate] = useState('2023-06-22T19:58:10.564Z')
  const [eventName, setEventName] = useState('')
  const [datePickerActive, setDatePickerActive] = useState(false)

  const {
    openNewEvent,
    handleOpenNewEvent,
    eventList,
    addEventList,
    handleEventSelection,
  } = useContext(ContextList)

  function onChangeName(event: any) {
    setEventName(event)
  }

  function showModalControl() {
    handleOpenNewEvent(!openNewEvent)
  }

  function handleAddEvent() {
    if (!eventName.length) return alert('O nome do evento não foi preenchido.')

    const lastEvent: EventType | undefined = eventList.length
      ? eventList.findLast((e) => e.id > -1)
      : undefined

    const nextId = lastEvent ? lastEvent.id + 1 : 0

    let newEvent: EventType = {
      id: nextId,
      title: eventName,
      date: eventDate ? new Date(eventDate) : new Date(),
      names: [],
    }

    handleOpenNewEvent(false)
    addEventList(newEvent)
    handleEventSelection(newEvent)
    setEventName('')
  }

  function datePickerOpen(item: boolean) {
    setDatePickerActive(item)
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={openNewEvent}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
      }}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Adicionar Evento</Text>
          </View>
          <View style={styles.body}>
            {!datePickerActive && (
              <TextInput
                style={styles.input}
                placeholder='Nome do Evento'
                placeholderTextColor='#6B6B6B'
                onChangeText={onChangeName}
                keyboardType='default'
                value={eventName}
                maxLength={26}
              />
            )}

            <Text style={styles.subtitle}>Data e hora do evento</Text>

            <DatePicker
              controller={(item) => datePickerOpen(item)}
              mode='datetime'
              value={eventDate}
              dateTime={(e) => setEventDate(e)}
            />
          </View>
          {!datePickerActive && (
            <View style={styles.footer}>
              <TouchableHighlight onPress={showModalControl}>
                <Text>Fechar</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={handleAddEvent}>
                <Text>Salvar</Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}
