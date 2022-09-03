import { useEffect } from 'react'

type AppProps = {
  value: unknown;
}

const useLogger = (value: AppProps) => {
  useEffect(() => {
    console.log(value)
  }, [value])
  
}

export default useLogger