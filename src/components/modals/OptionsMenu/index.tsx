// vendors
import { useContext } from 'react'
import {
  View,
  Text,
  Alert,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native'

// contexts
import { ContextList, EventType } from '../../../context/list-context'

// styles
import { styles } from './styles'

export default function ModalOptionsMenu() {
  const {
    eventList,
    eventSelected,
    handleEventSelection,
    handleOpenNewEvent,
    handleOpenOptions,
    openOptions,
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
          <Text style={styles.title}>Eventos</Text>
          {eventList.map((item) => {
            return (
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleClick(item)}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonRemove}
                  onPress={() => handleRemoveEvent(item)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              </View>
            )
          })}
          <TouchableOpacity
            style={styles.buttonLink}
            onPress={openNewEventClick}
          >
            <Text style={styles.buttonLinkText}>+ Criar Evento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
