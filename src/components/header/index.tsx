// vendors
import { useContext } from 'react'
import { View, Text, Image } from 'react-native'

// components
import SmartTitle from '../form/SmartTitle'

// styles
import { styles } from './styles'

// contexts
import { ContextList } from '../../context/list-context'

export default function Header() {
  const { eventList, eventSelected, formatDate } = useContext(ContextList)

  return (
    <View style={styles.container}>
      {!!eventList.length && (
        <View style={styles.header}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.icon}
            resizeMode='contain'
          />
          <SmartTitle />
        </View>
      )}

      <Text style={styles.subtitle}>
        {eventList.length ? formatDate(eventSelected.date) : ''}
      </Text>
    </View>
  )
}
