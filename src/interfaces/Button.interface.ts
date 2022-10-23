export interface ButtonProps {
    onPress: () => void
    title: string
    type: 'primary' | 'secondary' | 'third'
  }