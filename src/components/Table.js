import React, { useEffect, useState } from 'react'
import { CmToFeets, CmToInches, getTotalHeight } from '../helpers'
import Dropdown from './dropdown/Dropdown';
import Icon from './Icon';

const Table = ({ characters, genders }) => {
    const [list, setList] = useState(characters);
    const [sortOrder, setSortOrder] = useState('desc');
    const [selected, setSelected] = useState({ title: 'all' });
    function heightArray(character) {
      return character
        .filter((item) => !isNaN(parseInt(item?.height, 10)))
        .map((item) => Number(item?.height));
    }
    
    const updatedHeightArray = heightArray(list);
  
    useEffect(() => {
      if (selected.title !== 'all') {
        const newList = characters.filter(
          (item) => item.gender === selected.title
        );
  
        setList(newList);
      } else {
        setList(characters);
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);
    function customSort(selector, order = 'desc') {
      return (a, b) => {
        const aItem = selector(a);
        const bItem = selector(b);
    
        if (order === "asc")
          return aItem?.localeCompare(bItem, undefined, {
            numeric: true,
            sensitivity: "base"
          });
    
        return -aItem?.localeCompare(bItem, undefined, {
          numeric: true,
          sensitivity: "base"
        });
      };
    }
  
    const handleSort = (sortValue) => {
      const updatedSortOrder = sortOrder === 'desc' ? 'desc' : 'desc';
  
      const currentList = list;
      const updatedList = currentList.sort(
        customSort((a) => a?.[`${sortValue}`], updatedSortOrder)
      );
      setList(updatedList);
      setSortOrder(updatedSortOrder);
    };
  
    return (
      <>
        <div className="filter-wrapper table-filter">
          <p>Filter by Gender:</p>
          <Dropdown
            allowAll={true}
            selected={selected}
            setSelected={setSelected}
            data={genders.map((v) => {
              return { title: v };
            })}
          />
        </div>
  
        <table className="character-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("name")} role='button'><span>Name</span>  <Icon svg='sort' /></th>
              <th onClick={() => handleSort("gender")} role='button'><span>Gender</span>  <Icon svg='sort' /></th>
              <th onClick={() => handleSort("height")} role='button'><span>Height(cm)</span>  <Icon svg='sort' /></th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={`${item.name}_${i}`}>
                <td>{item.name} </td>
                <td>{item.gender} </td>
                <td>{item.height} </td>
              </tr>
            ))}
            <tr>
              <td>
                {" "}
                <span>Total Characters:</span> {list.length}
              </td>
              <td colSpan='2'>
                <span>Total Height:</span> {getTotalHeight(updatedHeightArray, 0)}
                cm ({CmToFeets(getTotalHeight(updatedHeightArray, 0))}/
                {CmToInches(getTotalHeight(updatedHeightArray, 0))})
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

export default Table