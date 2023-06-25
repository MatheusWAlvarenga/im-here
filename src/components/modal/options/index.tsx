// vendors
import { useContext } from 'react'
import {
  View,
  Text,
  Alert,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native'

// contexts
import { ContextList, EventType } from '../../../context/list-context'

// styles
import { styles } from './styles'

export default function ModalOptions() {
  const {
    eventList,
    eventSelected,
    handleEventSelection,
    handleOpenNewEvent,
    handleOpenOptions,
    openOptions,
    openNewEvent,
    removeEvent,
  } = useContext(ContextList)

  function handleClick(item: EventType) {
    handleEventSelection(item)
    handleOpenOptions(!openOptions)
  }

  function openNewEventClick() {
    if (eventList.length && openOptions === true) handleOpenOptions(false)

    handleOpenNewEvent(true)
  }
  function handleRemoveEvent(item: EventType) {
    let newEventList = [...eventList]

    newEventList.splice(
      newEventList.findIndex((e) => e.id === item.id),
      1,
    )

    if (!newEventList.length) handleOpenOptions(false)
    removeEvent(newEventList)
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={eventSelected && openOptions}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {eventList.map((item) => {
            return (
              <View key={item.id} style={styles.itemContainer}>
                <Button onPress={() => handleClick(item)} title={item.title} />
                <TouchableOpacity onPress={() => handleRemoveEvent(item)}>
                  <Text style={styles.removeTextItem}>Excluir</Text>
                </TouchableOpacity>
              </View>
            )
          })}
          <Button onPress={openNewEventClick} title='+ Criar Evento' />
        </View>
      </View>
    </Modal>
  )
}
