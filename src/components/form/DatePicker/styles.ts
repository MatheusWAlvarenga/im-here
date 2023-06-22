// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerInputPicker: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewInputPicker: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  inputPicker: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#222222',
  },

  viewButtonPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  buttonPicker: {
    borderColor: '#B2BEB5',
    borderRadius: 4,
    padding: 12,
  },

  datePicker: {
    height: 120,
    marginTop: -10,
  },
})
