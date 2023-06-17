// vendors
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

// context
import ListContext from './src/context/list-context'

// components
import TittlePage from './src/components/header'
import BodyTest from './src/components/body'

// styles
import { styles } from './styles'

export default function App() {
  return (
    <ListContext>
      <View style={styles.container}>
        <TittlePage />
        <BodyTest />
        <StatusBar style='auto' />
      </View>
    </ListContext>
  )
}
