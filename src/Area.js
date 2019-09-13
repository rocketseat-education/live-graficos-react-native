import React from 'react';
import {AreaChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {StyleSheet, View} from 'react-native';

export default function Area() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50];
  const data2 = [...data].reverse();

  return (
    <View style={{height: 200, flexDirection: 'row'}}>
      <YAxis
        data={data}
        style={{marginLeft: 50}}
        contentInset={{top: 10, bottom: 10}}
      />
      <View style={{flex: 1}}>
        <AreaChart
          style={{...StyleSheet.absoluteFill, left: 50, right: 50}}
          data={data}
          svg={{fill: '#7159c1'}}
          contentInset={{top: 20, bottom: 20}}
          curve={shape.curveNatural}>
          <Grid />
        </AreaChart>
        <AreaChart
          style={{...StyleSheet.absoluteFill, left: 50, right: 50}}
          data={data2}
          svg={{fill: '#c759e0'}}
          contentInset={{top: 20, bottom: 20}}
          curve={shape.curveNatural}
        />

        <XAxis
          style={{
            ...StyleSheet.absoluteFill,
            left: 50,
            right: 50,
            top: 190,
          }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{left: 10, right: 10}}
        />
      </View>
    </View>
  );
}
