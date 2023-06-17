// vendors
import { useContext } from 'react'
import { Button, TextInput, View, Text } from 'react-native'

// contexts
import { ContextList } from '../../context/list-context'

// styles
import { styles } from './styles'

export default function Body() {
  const {
    member,
    handleAddMember,
    handleMemberList,
    membersList,
    onPressAdd,
    onPressRemove,
  } = useContext(ContextList)

  return (
    <View style={styles.body}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={(text) => handleAddMember({ name: text })}
          value={member}
        />
        <View style={styles.button}>
          <Button
            onPress={onPressAdd}
            title='+'
            color='#FFF'
            accessibilityLabel='Add new member at list'
          />
        </View>
      </View>
      <View style={styles.itemsList}>
        <Text style={styles.tittleList}>Participantes</Text>
        <View style={styles.content}>
          {!membersList.length && (
            <Text style={styles.empty}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}

          {membersList.length > 0 &&
            membersList.map((member) => {
              return (
                <View key={member.name} style={styles.memberCard}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <View style={styles.buttonRemove}>
                    <Button
                      onPress={() => onPressRemove(member.name)}
                      title='-'
                      color='#FFF'
                      accessibilityLabel='Add new member at list'
                    />
                  </View>
                </View>
              )
            })}
        </View>
      </View>
    </View>
  )
}
