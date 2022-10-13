import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'
export function Home() {
    const [participants, setParicipants] = useState(['Rodrigo', 'Vini', 'Diego'])
    const [participantsName, setParicipantsName] = useState('')
    function handleParticipantAdd() {
        if(participants.includes(participantsName.trim())){
           return Alert.alert('Participante Existe', "Ja existe participante com esse nome")
        }

        setParicipants(prevState=> [...prevState, participantsName])
        setParicipantsName('')
    }
    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover participante ${name}?`,[
            {
                text: 'Sim',
                onPress:()=> {
                    const prevState = [...participants]
                    prevState.splice(participants.indexOf(name), 1)
                    setParicipants(prevState) 
                    Alert.alert('Deletado')
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParicipantsName}
                    value={participantsName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList data={participants} keyExtractor={item => item} renderItem={({ item }) => (
                <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
            )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpthyText}> Ninguem chegou no evento ainda, adicione os participantes a sua lista de presença</Text>
                )} />



        </View>
    )
}
