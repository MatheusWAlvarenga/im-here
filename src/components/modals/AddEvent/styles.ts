// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    padding: 16,
    width: '100%',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#11182711',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    padding: 8,
    color: '#222222',
  },

  footer: {
    padding: 16,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
