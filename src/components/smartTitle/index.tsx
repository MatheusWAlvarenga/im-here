// vendors
import React, { useContext } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'

// styles
import { styles } from './styles'

// contexts
import { ContextList } from '../../context/list-context'

// components
import ModalOptions from '../modal/options'

export default function SmartTitle() {
  const {
    eventList,
    eventSelected,
    handleOpenNewEvent,
    handleOpenOptions,
    openOptions,
    openNewEvent,
  } = useContext(ContextList)

  function openNewEventClick() {
    if (!eventList.length) return

    if (eventList.length && openOptions === false) {
      handleOpenOptions(true)
      return
    }

    handleOpenOptions(false)
    handleOpenNewEvent(true)
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.titleContainer}
        onPress={openNewEventClick}
      >
        <Text style={styles.title}>
          {eventList.length ? eventSelected.title : ''}
        </Text>
      </TouchableHighlight>

      {eventSelected && openOptions && <ModalOptions />}
    </View>
  )
}
