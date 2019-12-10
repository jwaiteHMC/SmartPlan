import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity, Picker} from 'react-native';
import { Table, Row,} from 'react-native-table-component';

const eventCardStyle = StyleSheet.create({
   eventCard: {padding: 4, borderWidth: 2, borderRadius: 25, borderColor: '#000000', backgroundColor: '#AFD275'},
   removeButton: {borderRadius: 25, backgroundColor: '#FA8072', padding: 10},
   titleText: {flexDirection: 'row'},
   nameText: {fontWeight: 'bold', fontSize: 25, textAlign: 'center'},
   dateText: {fontStyle: 'italic', fontSize: 25, textAlign: 'center'},
   timeDisplayText: {fontSize: 20, textAlign: 'center'}
})

export default class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventID: props.id,
            eventName: props.name,
            eventDate: props.date,
            eventStart: props.startTime,
            eventEnd: props.endTime,
            autoSchedule: props.autoSchedule,
        }

        this.returnCorrectCard = this.returnCorrectCard.bind(this);
    }

    returnCorrectCard() {
       if(this.state.autoSchedule) {
            return (<Text> Auto Scheduled Event </Text>)
        } else {
            return (
            <View>
                <View style={eventCardStyle.titleText}>
                    <Text style={eventCardStyle.nameText}> {this.state.eventName} </Text>
                    <Text style={eventCardStyle.dateText}> {this.state.eventDate} </Text>
                </View>
                <View style={eventCardStyle.titleText}>
                    <Text style={eventCardStyle.timeDisplayText}> Start Time: {this.state.eventStart} </Text>
                    <Text style={eventCardStyle.timeDisplayText}> End Time: {this.state.eventEnd} </Text>
                </View>
                <TouchableOpacity style={eventCardStyle.removeButton} title="Remove" onPress={() => {this.props.deleteMethod(this.state.eventID)}}>
                    <Text style={{textAlign: 'center', color: "#FFFFFF"}}> Remove </Text>
                </TouchableOpacity>
            </View>
        )
        } 
    } 


    render() {
        return (
            <View style={eventCardStyle.eventCard}>
                {this.returnCorrectCard()}
            </View>
        )
    }
}
