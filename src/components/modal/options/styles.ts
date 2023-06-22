// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    padding: 20,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFCFE',
    borderRadius: 12,
    padding: 32,
    gap: 10,
    width: '100%',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },

  removeTextItem: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
})
