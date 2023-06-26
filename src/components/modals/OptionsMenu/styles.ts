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
    padding: 16,
    gap: 10,
    width: '100%',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#dbd9d9',
    width: '100%',
    borderRadius: 6,
    paddingLeft: 16,
  },

  removeTextItem: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 4,
    borderRadius: 4,
  },

  button: {
    borderRadius: 4,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonRemove: {
    backgroundColor: '#E23C44',
    borderRadius: 4,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 22,
  },

  buttonLink: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonLinkText: {
    color: '#0080ff',
    textDecorationLine: 'underline',
  },

  title: {
    color: '#1F1E25',
    fontSize: 16,
  },
})
