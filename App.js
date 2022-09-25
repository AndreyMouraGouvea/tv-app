import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Render from './src/components/Render';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent />
      <Render />
    </>
  );
}