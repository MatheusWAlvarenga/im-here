// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 62,
    width: '100%',
    padding: 6,
    marginVertical: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#131016',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 16,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#6B6B6B',
    fontSize: 16,
    textAlign: 'center',
  },

  icon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 150,
    marginBottom: -40,
  },
})
