// vendors
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 8,
  },

  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
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

  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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

  titleList: {
    color: '#FDFCFE',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 28,
  },

  label: {
    color: '#FDFCFE',
    fontSize: 14,
    fontWeight: '300',
  },

  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 24,
    gap: 30,
  },

  itemsList: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },

  content: {
    maxHeight: 430,
    minHeight: 300,
    paddingHorizontal: 20,
  },

  emptyContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 230,
  },

  empty: {
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FDFCFE',
    fontSize: 14,
  },

  memberCard: {
    flexDirection: 'row',
    marginVertical: 4,
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

  subTitle: {
    flexDirection: 'row',
    gap: 8,
  },
})
