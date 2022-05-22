import { useState } from 'react'

export const useAdmin = () => {
  const [admin, setAdmin] = useState(true)
  return [admin, setAdmin];
}
