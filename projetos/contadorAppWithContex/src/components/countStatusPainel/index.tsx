import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface CounterStatusPanelProps {
  value: number
  min: number
  max: number
}

export default function CounterStatusPanel({ value, min, max }: CounterStatusPanelProps) {
  const canIncrement = value < max
  const canDecrement = value > min

  const getStatusMessage = () => {
    if (!canIncrement) return 'Status: Valor máximo atingido!'
    if (!canDecrement) return 'Status: Valor mínimo atingido!'
    return 'Status: Dentro do intervalo'
  }

  const getStatusColor = () => {
    if (!canIncrement || !canDecrement) return '#FFA500'
    return '#2e7d32'
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.statusText, { color: getStatusColor() }]}>{getStatusMessage()}</Text>

        <Text style={styles.label}>
          Incrementar:{' '}
          <MaterialIcons
            name={canIncrement ? 'check-box' : 'cancel'}
            size={18}
            color={canIncrement ? 'green' : 'red'}
          />{' '}
          {canIncrement ? 'Permitido' : 'Bloqueado'}
        </Text>

        <Text style={styles.label}>
          Decrementar:{' '}
          <MaterialIcons
            name={canDecrement ? 'check-box' : 'cancel'}
            size={18}
            color={canDecrement ? 'green' : 'red'}
          />{' '}
          {canDecrement ? 'Permitido' : 'Bloqueado'}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFA500',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    gap: 8,
    width: '100%',
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  progressLabel: {
    fontSize: 12,
    color: '#999',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
})
