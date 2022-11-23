import React from "react";
import "./covid.css"

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { CircleCase } from "./covid-circles";
import { CircleDaeth } from "./covid-circles";
import { CircleRecovery } from "./covid-circles";

import { CountryList } from "./listitme-material-Country";

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: 'cornflowerblue',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

export function CovidCards(props) {

    return (

        <Box className="box" sx={{ width: '70%' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="countrry counttt shadow" xs={12} sm={12} md={12}>
                    <Item >
                        Country : <span> {props.record.country} </span>
                    </Item>
                </Grid>
                <Grid className="cases shadow" xs={12} sm={6} md={4}>
                    <Item >
                        <div className="Totalcases  grid-rp">

                            <h4>Total Cases</h4>
                            <div className="result">

                                <CircleCase SetRecord={props.SetRecord} record={props.record} Covidrecord={props.Covidrecord} SetCovidrecord={props.SetCovidrecord} />

                            </div>
                            {/* { (!(props.record.country == "All")) &&  (
                                <div className="Rate">
                                    Cases Rate : <span>{props.record.Crate} % </span>
                                </div>
                            )} */}
                        </div>

                    </Item>
                </Grid>
                <Grid className="deaths shadow" xs={12} sm={6} md={4}>
                    <Item>
                        <div className="TotalDeaths grid-rp">

                            <h4>Total Deaths</h4>
                            <div className="result">

                                <CircleDaeth SetRecord={props.SetRecord} record={props.record} Covidrecord={props.Covidrecord} SetCovidrecord={props.SetCovidrecord} />
                            </div>
                            {/* { (!(props.record.country == "All")) &&  (
                                <div className="Rate">
                                    Cases Rate : <span>{props.record.Drate} %</span>
                                </div>
                            )} */}
                        </div>

                    </Item>
                </Grid>
                <Grid className="recovery shadow" xs={12} sm={12} md={4}>
                    <Item>
                        <div className="TotalRecoveries grid-rp">

                            <h4>Total Recoveries</h4>
                            <div className="result">
                                <CircleRecovery SetRecord={props.SetRecord} record={props.record} Covidrecord={props.Covidrecord} SetCovidrecord={props.SetCovidrecord} />
                            </div>
                            {/* { (!(props.record.country == "All")) &&  (
                                <div className="Rate">
                                    Cases Rate : <span>{props.record.Drate} %</span>
                                </div>
                            )} */}
                        </div>

                    </Item>
                </Grid>
                <Grid className="Country shadow" xs={12} sm={12} md={12}>
                    <Item>

                        <div>

                            <CountryList  record={props.record} SetRecord={props.SetRecord} Covidrecord={props.Covidrecord} SetCovidrecord={props.SetCovidrecord}  />
                           
                        </div>

                    </Item>
                </Grid>

            </Grid>
        </Box>

    );
}

export function Cover() {
    return (
        <div className="main">

                      <div className="a n"> </div>
      
           
            <div className="coverDiv">

                <h2>
                    COVID-19

                </h2>
                <div className="cover-text">
                    <h3>Preventions</h3>
                    <p>
                        <li>Hand Wash</li>
                        <li>Wear Mask</li>
                        <li>Social Distance</li>
                        <li>CLean Enivroment</li>
                    </p>
                </div>
            </div>

        </div>
    );
}

export function Home() {
    return ( <>
     <Cover></Cover>
    
    </>
    )
}


