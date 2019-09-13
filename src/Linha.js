import React from 'react';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import {SafeAreaView, View} from 'react-native';

export default function Eixos() {
  const data = [80, -10, 40, 95, 85, 91, -35, 53, -24, 50];

  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      <YAxis
        data={data}
        style={{marginBottom: 30}}
        contentInset={{top: 10, bottom: 10}}
      />
      <View style={{flex: 1}}>
        <LineChart
          style={{height: 300}}
          data={data}
          svg={{stroke: '#7159c1'}}
          contentInset={{top: 20, bottom: 20}}>
          <Grid />
        </LineChart>
        <XAxis
          style={{marginHorizontal: -10, height: 30}}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{left: 10, right: 10}}
        />
      </View>
    </SafeAreaView>
  );
}
