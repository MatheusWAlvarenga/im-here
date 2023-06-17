// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tittleList: {
    color: '#FDFCFE',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 28,
  },

  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 24,
    gap: 32,
  },

  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    gap: 7,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 18,
    color: '#FDFCFE',
    fontSize: 14,
  },

  button: {
    backgroundColor: '#31CF67',
    color: '#FFF',
    borderRadius: 4,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemsList: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    gap: 66,
  },

  empty: {
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FDFCFE',
    fontSize: 14,
    marginVertical: 150,
  },

  memberCard: {
    flex: 1,
    flexDirection: 'row',
  },

  memberName: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 18,
    color: '#FDFCFE',
  },

  buttonRemove: {
    backgroundColor: '#E23C44',
    color: '#FFF',
    borderRadius: 4,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
