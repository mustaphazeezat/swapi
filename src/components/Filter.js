import Dropdown from './dropdown/Dropdown'

const Filter = ({selected, setSelected, data}) => {
    
    
  return (
    <div className='filter-wrapper'>
        <p>Select a movie: </p>
        <Dropdown selected={selected} setSelected={setSelected} data={data} />
    </div>
  )
}

export default Filter