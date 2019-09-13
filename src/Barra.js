import React from 'react';
import {BarChart, XAxis, YAxis, Grid} from 'react-native-svg-charts';
import {SafeAreaView, View} from 'react-native';
import * as scale from 'd3-scale';

export default function Barra() {
  const data = [14, 80, 100, 55, 76, 82];

  return (
    <SafeAreaView style={{height: 200, padding: 20, flexDirection: 'row'}}>
      <YAxis
        data={data}
        style={{marginBottom: 30}}
        contentInset={{top: 10, bottom: 10}}
      />
      <View style={{flex: 1}}>
        <BarChart
          style={{flex: 1}}
          data={data}
          gridMin={0}
          svg={{fill: '#7159c1'}}>
          <Grid />
        </BarChart>
        <XAxis
          style={{marginTop: 10}}
          data={data}
          scale={scale.scaleBand}
          formatLabel={(value, index) => index}
          labelStyle={{color: 'black'}}
        />
      </View>
    </SafeAreaView>
  );
}
