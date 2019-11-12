import React from 'react';
import {StyleSheet, View, ScrollView,} from 'react-native';
import {Table, Row,} from 'react-native-table-component';

// creates and renders Day table
export default class DayTable extends React.Component {
    constructor(props) {
      todayDay = new Date().getDate();
      super(props);
      this.state = {
        tableHead: ['Time', 'Events'],
        widthArr: [60, 355]
      }

    }
    
   
    render() {
      const tableData = [];
      for(let j = 0; j < global.tableData.length; j++){
        global.getStartTimes(global.tableData[j].timeStart, global.tableData[j].timeEnd);
        console.log(global.startTimes);
        }
      for (let i = 0; i < 48; i += 1) {

        const rowData = [];
        minutes = i % 2 ? '30' : '00' ;
        var added = `${Math.floor(i / 2)}` + `:` + minutes;
        rowData.push(added);
        if(global.startTimes.includes(i)){
          rowData.push("Event Begins");
        }
        else if(global.endTimes.includes(i)){
          rowData.push("----------------------------------------------------------")
        }
        else{
          rewData.push("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
        }
        tableData.push(rowData);
        }
        
      return (
        <View style={daytablestyles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={daytablestyles.header} textStyle={daytablestyles.text}/>
              </Table>
              <ScrollView style={daytablestyles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={this.state.widthArr}
                        style={[daytablestyles.row, index == 1 && {backgroundColor: '#85c2ff'}]}
                        //style={[daytablestyles.row]} // make all rows white 

                        textStyle={daytablestyles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )
    }
}

  const daytablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#fff' }
  });
  