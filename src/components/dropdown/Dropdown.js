import React, { useState } from 'react'
import Button from '../button/Button';

const Dropdown = ({selected, setSelected, data, allowAll}) => {
    const [show, setShow] = useState(false);
  return (
    <div className='drop-down'>
        <Button
            title={selected? selected.title: ''}
            onClick={()=>setShow(!show)}
            className='drop-down__btn'
            svg="drop"
        />
        {
            show? <ul className='drop-down__list'>
            {allowAll? <li
                role="button" 
                onClick={()=>{setSelected({title: 'all'}); setShow(false)}}
            >All</li>: ''}
            {data.map((item, index)=> 
                <li 
                    key={index} 
                    role="button" 
                    onClick={()=>{setSelected(item); setShow(false)}}
                >
                    {item.title}
                </li>
            )}
        </ul>: ''
        }
    </div>
  )
}

export default Dropdown