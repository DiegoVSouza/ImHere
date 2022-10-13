import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'
export function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Mayk', 'Joao', 'Joao1', 'Joao2']
    function handleParticipantAdd() {
        console.log('wow')
    }
    function handleParticipantRemove(name: string) {
        console.log('wow')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
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
