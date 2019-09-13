import React from 'react';
import {Text} from 'react-native-svg';

import {PieChart} from 'react-native-svg-charts';

export default function Pizza() {
  const data = [80, 10, 40, 95, 85, 91, 35, 53, 24, 50];

  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: (
        '#' +
        ((Math.random() * 0xffffff) << 0).toString(16) +
        '000000'
      ).slice(0, 7),
    },
  }));

  const Labels = ({slices}) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          strokeWidth={0.2}>
          {data.label}
        </Text>
      );
    });
  };

  return (
    <PieChart style={{height: 500}} data={pieData}>
      <Labels />
    </PieChart>
  );
}
