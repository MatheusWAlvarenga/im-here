// vendors
import { useContext, useEffect, useState } from 'react'
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native'

// contexts
import { ContextList } from '../../context/list-context'

// components
import ModalAddEvent from '../modals/AddEvent'

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
  }, [eventList, eventSelected])

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
              <TouchableOpacity
                onPress={() => handleInputClick(member)}
                accessibilityLabel='Add new member at list'
                style={styles.buttonAdd}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemsList}>
            <View style={styles.subTitle}>
              <Text style={styles.titleList}>Participantes</Text>
              <Text style={styles.titleList}>
                {memberList.length ? memberList.length : ''}
              </Text>
            </View>

            {!memberList.length && (
              <Text style={styles.empty}>
                Ninguém chegou no evento ainda? Adicione participantes a sua
                lista de presença.
              </Text>
            )}

            {memberList.length > 0 && (
              <FlatList
                data={memberList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  return (
                    <View key={item.id} style={styles.memberCard}>
                      <Text style={styles.memberName}>{item.name}</Text>

                      <TouchableOpacity
                        style={styles.buttonRemove}
                        onPress={() => onPressRemove(item.id)}
                        accessibilityLabel='Remove member at list'
                      >
                        <Text style={styles.buttonText}>-</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
            )}
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../../assets/icon.png')}
            resizeMode='contain'
          />
          <Text style={styles.empty}>Nenhum evento registrado</Text>

          <TouchableOpacity
            style={styles.buttonLink}
            onPress={openNewEventClick}
            accessibilityLabel='Add new event'
          >
            <Text style={styles.buttonLinkText}>+ Adicionar Evento</Text>
          </TouchableOpacity>
        </View>
      )}
      <ModalAddEvent />
    </View>
  )
}
