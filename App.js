import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import {spacing} from './src/utils/sizes';
import {Platform} from 'react-native';


// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  const [focusSubject, setFocusSubject] = useState('gardening');

  return (
    <View style={styles.container}>
      {focusSubject ? (
         <Timer focusSubject = {focusSubject} />
       ) : ( 
         <Focus addSubject={setFocusSubject} />
       )}
       <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
});
