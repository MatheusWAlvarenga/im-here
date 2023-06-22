import { ReactNode, createContext, useState } from 'react'

interface MemberType {
  name: string
}

interface ContextType {
  member: string
  eventList: EventType[]
  eventSelected: EventType
  openNewEvent: boolean
  openOptions: boolean
  handleAddMember: (item: MemberType) => void
  onPressRemove: (id: number) => void
  onPressAdd: (name: string) => void
  handleEventSelection: (item: EventType) => void
  handleOpenNewEvent: (item: boolean) => void
  handleOpenOptions: (item: boolean) => void
  addEventList: (item: EventType) => void
  removeEvent: (item: EventType[]) => void
  formatDate: (item: Date) => string
}

interface ListContextProps {
  children: ReactNode
}

// interfaces
export interface EventType {
  id: number
  title: string
  date: Date
  names: NameType[]
}

export interface NameType {
  id: number
  name: string
}

const events: EventType[] = []

export const ContextList = createContext({} as ContextType)

export default function ListContext({ children }: ListContextProps) {
  const [eventList, setEventList] = useState<EventType[]>(events)
  const [eventSelected, setEventSelected] = useState<EventType>(
    events.length
      ? events[0]
      : {
          id: 0,
          title: '',
          date: new Date(),
          names: [],
        },
  )

  const [member, setMember] = useState('')
  const [openOptions, setOpenOptions] = useState(false)
  const [openNewEvent, setOpenNewEvent] = useState(false)

  const onPressRemove = (id: number) => {
    let newEventList = [...eventList]

    const newList = newEventList.map((event) => {
      if (event.id == eventSelected.id) {
        const indexItem = event.names.findIndex((e) => e.id === id)

        event.names.splice(indexItem, 1)
      }

      return event
    })

    setEventList(newList)
  }

  const handleAddMember = (item: MemberType) => {
    setMember(item.name)
  }

  function onPressAdd(name: string) {
    const newEventList = [...eventList]
    const currentEvent = eventSelected

    const nextNameId = eventSelected.names.length
      ? eventSelected.names[eventSelected.names.length - 1].id + 1
      : 1

    const newName: NameType = {
      id: nextNameId,
      name,
    }

    const newEvent = [...currentEvent.names, newName]

    const EventList = newEventList.map((e) => {
      if (e.id === eventSelected.id) {
        e.names = newEvent
      }

      return e
    })

    setEventList(EventList)
    setMember('')
  }

  function formatDate(rawDate: Date) {
    const monthNames = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]
    const weekDays = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ]

    let date = new Date(rawDate)

    let year = date.getFullYear()
    let month = monthNames[date.getMonth()]
    let day = ('00' + date.getDate()).slice(-2)
    let hour = ('00' + date.getHours()).slice(-2)
    let minute = ('00' + date.getMinutes()).slice(-2)
    let weekDay = weekDays[date.getDay()]

    return `${weekDay}, ${day} de ${month} de ${year} às ${hour}:${minute}`
  }

  function handleEventSelection(item: EventType) {
    setEventSelected(item)
  }
  function handleOpenOptions(item: boolean) {
    setOpenOptions(item)
  }
  function handleOpenNewEvent(item: boolean) {
    setOpenNewEvent(item)
  }
  function addEventList(item: EventType) {
    setEventList([...eventList, item])
  }
  function removeEvent(item: EventType[]) {
    setEventList(item)
  }

  return (
    <ContextList.Provider
      value={{
        member,
        handleAddMember,
        onPressAdd,
        eventList,
        eventSelected,
        onPressRemove,
        handleEventSelection,
        openNewEvent,
        handleOpenNewEvent,
        openOptions,
        handleOpenOptions,
        addEventList,
        formatDate,
        removeEvent,
      }}
    >
      {children}
    </ContextList.Provider>
  )
}
