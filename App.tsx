// vendors
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

// context
import ListContext from './src/context/list-context'

// components
import Header from './src/components/header'
import Body from './src/components/body'

// styles
import { styles } from './styles'

export default function App() {
  return (
    <ListContext>
      <View style={styles.container}>
        <Header />
        <Body />
        <StatusBar style='light' />
      </View>
    </ListContext>
  )
}
