import React, { ReactElement } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import '@fontsource-variable/onest';

export interface DateProps {
  day: number;
  month: string;
}

export const Date = (props: DateProps): ReactElement => {
  const { day, month } = props;

  const styles = StyleSheet.create({
    container: {
      width: 60,
      height: 65,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
    },
    day: {
      fontSize: 32,
      fontWeight: 'bold',
      fontFamily: "'Onest Variable', sans-serif",
      color: '#2A2A2A',
    },
    month: {
      fontFamily: "'Onest Variable', sans-serif",
      fontSize: 15,
      fontWeight: '600',
      color: '#2A2A2A',
    },
  });

  const formatNumber = (num: number): string => {
    if (num >= 1 && num <= 9) {
      return `0${num}`;
    } else {
      return num.toString();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{formatNumber(day)}</Text>
      <Text style={styles.month}>{month.slice(0, 3)}</Text>
    </View>
  );
};
