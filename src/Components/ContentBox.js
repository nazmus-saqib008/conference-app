import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ContentBox= (props)=>{

    // let {country, timestamp}= props;

    const [contents, setContents]= useState([]);

    const sortAscending = (contents_uf)=>{
        let contents_sorted= contents_uf.sort((a,b)=>{
            return a.date_time.substring(0,10) > b.date_time.substring(0,10) ? 1:-1;
        })
        return contents_sorted;
    }
    const sortDescending = (contents_uf)=>{
        let contents_sorted= contents_uf.sort((a,b)=>{
            return a.date_time.substring(0,10) < b.date_time.substring(0,10) ? 1:-1;
        })

        return contents_sorted;
    }

    const fetchData = async () => {
        const url = `https://gdscdev.vercel.app/api`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // setContents(parsedData.content.data);

        var {country, timestamp, sort}= props;

        let contents_uf= parsedData.content.data;
        if(country==="All" && timestamp==="All" && sort==="None"){
            setContents(contents_uf);
        }
        else if(sort==="Asc"){
            let contents_sorted= sortAscending(contents_uf);
            setContents(contents_sorted);
        }
        else if(sort==="Desc"){
            let contents_sorted= sortDescending(contents_uf);
            setContents(contents_sorted);
        }
        else if(country==="All"){
            setContents(contents_uf.filter((item)=>{
                return timestamp===item.date_time.substring(0,7)
            }))
        }
        else if(timestamp==="All"){
            setContents(contents_uf.filter((item)=>{
                return country===item.venue_country
            }))
        }
    }

    useEffect(() => {
            fetchData();
    }, [props])

    return (
        <>
            <div className="container my-3">

                <h3>Conferences</h3>
                    <div className="row">
                        {contents.map((element, i) => {
                            return <div className="col-md-4" key={element.id}>
                                <Item title={element.title} description={element.description} imgsrc={element.banner_image} date_time= {element.date_time} og_name={element.organiser_name} og_icon={element.organiser_icon} venue={element.venue_name} city={element.venue_city} country={element.venue_country}/>
                            </div>
                        })}
                    </div>
                {/* </div> */}
            </div >
        </>
    )
}

ContentBox.defaultProps = {
    country: 'All',
    timestamp: 'All'
}

ContentBox.propTypes = {
    country: PropTypes.string,
    timestamp: PropTypes.string
}

export default ContentBox;