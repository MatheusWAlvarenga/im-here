// vendors
import { useContext, useEffect, useState } from 'react'
import { Button, TextInput, View, Text, ScrollView, Image } from 'react-native'

// contexts
import { ContextList } from '../../context/list-context'

// components
import ModalAddEvent from '../modal/addEvent'

// styles
import { styles } from './styles'

// interfaces
import { NameType } from '../../context/list-context'

export default function Body() {
  const [memberList, setMemberList] = useState<NameType[]>([])

  const {
    onPressRemove,
    eventList,
    eventSelected,
    handleAddMember,
    member,
    onPressAdd,
    openOptions,
    handleOpenOptions,
    handleOpenNewEvent,
  } = useContext(ContextList)

  useEffect(() => {
    const newList = [...eventSelected.names]
    setMemberList(newList.reverse())
  }, [eventList])

  function handleInputClick(item: string) {
    if (!member.length) return alert('Digite um nome')
    onPressAdd(member)
  }

  function openNewEventClick() {
    if (eventList.length && openOptions === true) handleOpenOptions(false)

    handleOpenNewEvent(true)
  }

  return (
    <View style={styles.body}>
      {eventList.length ? (
        <>
          <View style={styles.container}>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor='#6B6B6B'
                onChangeText={(text) => handleAddMember({ name: text })}
                value={member}
                maxLength={30}
              />
              <View style={styles.button}>
                <Button
                  onPress={() => handleInputClick(member)}
                  title='+'
                  color='#FFF'
                  accessibilityLabel='Add new member at list'
                />
              </View>
            </View>
          </View>
          <View style={styles.itemsList}>
            <View style={styles.subTitle}>
              <Text style={styles.titleList}>Participantes</Text>
              <Text style={styles.titleList}>
                {memberList.length ? memberList.length : ''}
              </Text>
            </View>
            <ScrollView style={styles.content}>
              {!memberList.length && (
                <Text style={styles.empty}>
                  Ninguém chegou no evento ainda? Adicione participantes a sua
                  lista de presença.
                </Text>
              )}

              {memberList.length > 0 &&
                memberList.map((member) => {
                  return (
                    <View key={member.id} style={styles.memberCard}>
                      <Text style={styles.memberName}>{member.name}</Text>
                      <View style={styles.buttonRemove}>
                        <Button
                          onPress={() => onPressRemove(member.id)}
                          title='-'
                          color='#FFF'
                          accessibilityLabel='Add new member at list'
                        />
                      </View>
                    </View>
                  )
                })}
            </ScrollView>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../../assets/icon.png')}
            resizeMode='contain'
          />
          <Text style={styles.empty}>Nenhum evento registrado</Text>
          <Button onPress={openNewEventClick} title='+ Adicionar Evento' />
        </View>
      )}
      <ModalAddEvent />
    </View>
  )
}
