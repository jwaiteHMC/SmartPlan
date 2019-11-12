import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// creates and renders Week table
export default class WeekTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: ['Time', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      widthArr: [60, 100, 100, 100, 100, 100, 100, 100]
    }
  } 
 


  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 24; i += 1) {
      const rowData = [];
      rowData.push(`${i}` + `:00`);
      tableData.push(rowData);
      rowData = [];
      rowData.push(`${i}` + `:30`);
      tableData.push(rowData);
    }

 
    return (
      <View style={weektablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={weektablestyles.header} textStyle={weektablestyles.text}/>
            </Table>
            <ScrollView style={weektablestyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      //style={[weektablestyles.row, index%2 && {backgroundColor: '#85c2ff'}]}
                      style={[weektablestyles.row]} // make all rows white 
                      textStyle={weektablestyles.text}
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

//style for Week table 
const weektablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791',},
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#fff' }
});