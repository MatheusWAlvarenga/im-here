// vendors
import { View, StatusBar } from 'react-native'

// context
import ListContext from './src/context/list-context'

// components
import Header from './src/components/Header'
import Body from './src/components/Body'

// styles
import { styles } from './styles'

export default function App() {
  return (
    <ListContext>
      <View style={styles.container}>
        <Header />
        <Body />
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
      </View>
    </ListContext>
  )
}
