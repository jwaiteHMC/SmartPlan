import React from 'react';
import { StyleSheet, View, ScrollView,} from 'react-native';
import { Table, Row,} from 'react-native-table-component';

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
      const state = this.state;
      const tableData = [];
      for (let i = 0; i < 24; i += 1) {
        const rowData = [];
        rowData.push(`${i}` + `:00`);
        tableData.push(rowData);
        rowData = [];
        rowData.push(`${i}` + `:30`);
        // for (let j = 0; j < 9; j += 1) {
        //   rowData.push(`${i}${j}`);
        // }
        tableData.push(rowData);
      }
   
      return (
        <View style={daytablestyles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={daytablestyles.header} textStyle={daytablestyles.text}/>
              </Table>
              <ScrollView style={daytablestyles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state.widthArr}
                        style={[daytablestyles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                        //style={[weektablestyles.row]} // make all rows white 

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
  