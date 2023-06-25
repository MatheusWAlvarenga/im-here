// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  select: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderRadius: 4,
    color: '#FDFCFE',
    fontSize: 14,
    gap: 4,
  },

  list: {
    zIndex: 30,
    backgroundColor: '#B2BEB5',
  },

  title: {
    height: 54,
    width: '100%',
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    height: 75,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#FFF',
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFCFE',
    borderRadius: 12,
    padding: 32,
    gap: 10,
    maxHeight: '80%',
  },
})
