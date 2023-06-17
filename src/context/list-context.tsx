import { ReactNode, createContext, useState } from 'react'
import { View } from 'react-native'

interface MemberType {
  name: string
}

interface ContextType {
  membersList: MemberType[]
  member: string
  handleMemberList: (item: MemberType) => void
  handleAddMember: (item: MemberType) => void
  onPressRemove: (item: string) => void
  onPressAdd: () => void
}

interface ListContextProps {
  children: ReactNode
}

export const ContextList = createContext({} as ContextType)

export default function ListContext({ children }: ListContextProps) {
  const [membersList, setMemberList] = useState<MemberType[]>([])

  const [member, setMember] = useState('')

  const onPressAdd = () => {
    if (!member) return alert('Campo vazio.')

    const newList = [...membersList, { name: member }]
    setMemberList(newList)
    setMember('')
  }
  const onPressRemove = (item: string) => {
    let newList = [...membersList]

    const getIndex = newList.findIndex((e) => e.name === item)

    if (getIndex === -1) return alert('Item não encontrado.')

    newList.splice(getIndex, 1)

    setMemberList(newList)
  }

  const handleAddMember = (item: MemberType) => {
    setMember(item.name)
  }

  function handleMemberList(item: MemberType) {
    if (!item) return alert('error')

    const newList = [...membersList, item]

    setMemberList(newList)
  }

  return (
    <ContextList.Provider
      value={{
        membersList,
        member,
        handleMemberList,
        handleAddMember,
        onPressRemove,
        onPressAdd,
      }}
    >
      {children}
    </ContextList.Provider>
  )
}
