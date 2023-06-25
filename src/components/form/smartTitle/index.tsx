// vendors
import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// styles
import { styles } from './styles'

// contexts
import { ContextList } from '../../../context/list-context'

// components
import ModalOptions from '../../modal/options'

export default function SmartTitle() {
  const {
    eventList,
    eventSelected,
    handleOpenNewEvent,
    handleOpenOptions,
    openOptions,
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
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={openNewEventClick}
      >
        <Text style={styles.title}>
          {eventList.length ? eventSelected.title : ''}
        </Text>
      </TouchableOpacity>

      {eventSelected && openOptions && <ModalOptions />}
    </View>
  )
}
