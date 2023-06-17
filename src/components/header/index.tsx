// vendors
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

// styles
import { styles } from './styles'

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]

const months = [
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

export default function Header() {
  const [currentDate, setCurrentDate] = useState<string>('Nenhuma data')

  useEffect(() => {
    const currentDate = new Date()

    const weekDay = weekDays[currentDate.getDay()]
    const day = currentDate.getDate()
    const month = months[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    setCurrentDate(`${weekDay}, ${day} de ${month} de ${year}.`)
  }, [])

  console.log(currentDate)
  return (
    <View style={styles.header}>
      <Text style={styles.tittle}>Nome do evento</Text>
      <Text style={styles.subTittle}>{currentDate}</Text>
    </View>
  )
}
