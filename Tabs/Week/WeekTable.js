import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// creates and renders Week table
export default class WeekTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: [['Time', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']],
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
    
    var today = new Date();
    var currentDayOfWeek = today.getDay();

    return (
      <View style={weektablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {
                state.tableHead.map((rowData, index) => (
                    <TableWrapper key={index} style={weektablestyles.header}>
                    {
                      rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellData} style={cellIndex == ((1 + currentDayOfWeek) % 7) ? weektablestyles.headerToday : weektablestyles.headerCell} textStyle={weektablestyles.text}/>
                      ))
                    }
                  </TableWrapper>
))
              }
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
    header: { flexDirection: 'row', height: 50,},
    headerCell: {backgroundColor: '#537791', width: 85,},
    headerToday: {backgroundColor: '#ffff00', width: 85,},
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { flexDirection: 'row', height: 40, backgroundColor: '#fff' }
});
  //<Row data={state.tableHead} widthArr={state.widthArr} style={weektablestyles.header} textStyle={weektablestyles.text}/>
/*<TableWrapper key={index}>
                    {
                      rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>*/

