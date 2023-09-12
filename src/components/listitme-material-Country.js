import axios from 'axios';
import React, { useState } from 'react';
import "./circle.css"

import { useLayoutEffect } from 'react';
import Select from 'react-select'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';




export function CountryList(props) {
    let [options, Setoptions] = useState([])
    let [slectcountry, Setselectedcountry] = useState("All");
    let globelrecord = {}
    let myjson;
    let currentlocalobj = {}
    // const [open, setOpen] = React.useState(false);
    // function handleClose () {
    //     setOpen(false);
    // };
    // function handleToggle(){
    //     setOpen(!open);
    // };

    useLayoutEffect(() => {


        async function fetchData() {

            let temp = []
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '365d0f7c94msh64c10d765610e36p140af5jsncf49e4b2133a',
                        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                    }
                };
                let response = await fetch('https://covid-193.p.rapidapi.com/statistics', options)
                if (response.status === 100) {


                }
                else if (response.ok) {
                    // handleToggle();
                    console.log('entrering fetch')
                    myjson = await response.json();

                } else {
                    alert("HTTP-Error: " + response.status);
                }

                myjson.response.forEach((inobject) => {

                    temp.push({ value: inobject.country, label: inobject.country })
    
                    if (inobject.country === "All") {
                        globelrecord.country = inobject.country
                        globelrecord.totalcases = inobject.cases.total
                        globelrecord.totalrecovered = inobject.cases.recovered
                        globelrecord.totaldeaths = inobject.deaths.total
                    }
                });
    
                Setoptions(temp)
                props.SetCovidrecord(globelrecord)
    
                setdata();


            } catch (error) {
                console.log(error);
            }


           
        }
        fetchData();


    }, [slectcountry])
    function setdata() {
        myjson.response.find((alldata) => {

            if (alldata.country === slectcountry) {
                currentlocalobj.country = alldata.country
                currentlocalobj.totalcases = alldata.cases.total
                currentlocalobj.totalrecovered = alldata.cases.recovered
                currentlocalobj.totaldeaths = alldata.deaths.total
            }
        })
        props.SetRecord(currentlocalobj)

    }

    function handleChange(selectedOption) {
        Setselectedcountry(selectedOption.value)
        setdata()
    }


    return (
        <>
            <Select value={slectcountry} onChange={handleChange} options={options} />
            {/* <div>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div> */}
        </>

    );
}








