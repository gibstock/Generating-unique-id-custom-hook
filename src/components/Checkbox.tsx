import React, {ChangeEventHandler} from 'react'
import useMyCustomId from '../hooks/useMyCustomId'

type AppProps = {
  label: string;
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({label, value, onChange}: AppProps) => {

  const id = useMyCustomId()


  return (
    <div>
      <label htmlFor="check1">
        <input 
          type="checkbox" 
          id={id}
          checked={value}
          onChange={onChange} />
        {label}
      </label>
    </div>
  )
}

export default Checkbox