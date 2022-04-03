import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import Table from '../components/Table';
import { useMovie } from '../context/MovieContext';

const Home = () => {
    const {getMovies, getCharacters} = useMovie()
    const [data, setData] = useState([]);
    const [characterList, setCharacterList] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [onLoading, setOnLoading] = useState(false);
    const [selected, setSelected] = useState(null)
    const [uniqueGenders, setUniqueGenders] = useState([]);
    

    const getAllMovies = async()=>{
        setDataLoading(true)
        const response = await getMovies()
        if (response.status === 200) {
            const sorted = response.data.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
            setData(sorted)
            setDataLoading(false)
        }
    }

    const getAllCharacters = async()=>{
        setOnLoading(true)
        const response = await getCharacters(selected.characters)
        if (response) {
            const filtered = response.map(item => item.data)
            setCharacterList(filtered)
            setOnLoading(false)
            const genders = [...new Set(filtered.map(item => item.gender))]
            setUniqueGenders(genders)
        }
    }

    useEffect(() => {
        getAllMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (selected) {
            getAllCharacters()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    if (dataLoading) {
        return <div className='loader-wrapper'><Loader /></div>
    }

  return (
    <>
        {
            data.length>0?<section className='section-wrapper'>
                <Filter selected={selected} setSelected={setSelected} data={data} />
                <div>
                    {selected? 
                    <>
                        {
                            !onLoading ? <>
                                <div className='animation-wrapper'>
                                    <div className={`content ${selected? 'animated': ''}`}>
                                        <h2 className='content__title'>{selected.title}</h2>
                                        <p className='content__body'>{selected.opening_crawl}</p>
                                    </div>
                                </div>
                                <div className='table-wrapper'>
                                    <h3>Characters</h3>
                                    <Table characters={characterList} genders={uniqueGenders} />
                                </div>
                            </> : 
                            <div className='loader-wrapper'><Loader /></div>
                        }
                    </>:
                     <div className='image-wrapper'><img src='/logo.png' alt='starwars logo' /></div>
                     }
                </div>
            </section>: 
            <>No movies</>
        }
    </>
  )
}

export default Home