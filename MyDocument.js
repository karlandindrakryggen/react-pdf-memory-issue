// Based on example from Quick start guide at https://react-pdf.org/ and tranformed with https://babeljs.io/repl
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = props => /*#__PURE__*/React.createElement(Document, null, /*#__PURE__*/React.createElement(Page, {
  size: "A4",
  style: styles.page
}, /*#__PURE__*/React.createElement(View, {
  style: styles.section
}, /*#__PURE__*/React.createElement(Text, null, "Section #1 counter: ", props.counter)), /*#__PURE__*/React.createElement(View, {
  style: styles.section
}, /*#__PURE__*/React.createElement(Text, null, "Section #2"))));