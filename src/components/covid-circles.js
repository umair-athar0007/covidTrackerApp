import React, { useState } from "react";
// import { useState } from "react";
import "./circle.css"
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import CountUp from 'react-countup';

export function CircleCase(props) {
    let [circase, SetCircase] = useState();
   
    //    console.log( props);



    useLayoutEffect(() => {
        let allcase;
        allcase = ((+(props.record.totalcases) / +(props.Covidrecord.totalcases)))
        SetCircase(allcase * 100)

        // props.SetRecord(props.record.Crate = circase)
        var m1 = (472 - (472 * (circase / 100)));
        document.getElementsByClassName('p1')[0].style.setProperty('--d', m1);
    }, [props.record, props.Covidrecord])



    return (

        <div className="circle">
            <div className="outer">
                <div className="inner">
                    <div id="Number">
                    <CountUp start={(+(props.record.totalcase) / 12) * 10} duration={1.25} end={props.record.totalcases} />
                       
                    </div>
                </div>
            </div>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor1">
                        <stop offset="0%" stopColor="#2a5cb5" />
                        <stop offset="100%" stopColor="#8141d0" />
                    </linearGradient>
                </defs>
                <circle className="p1" cx="80" cy="80" r="75" strokeLinecap="round" />
            </svg>
        </div>
        

    );
}
export function CircleDaeth(props) {
  
    let [cirdeath, SetDeath] = useState();


    useLayoutEffect(() => {

        let allcase;
        allcase = ((+(props.record.totaldeaths) / +(props.Covidrecord.totaldeaths)))
        SetDeath(allcase * 1000)

        // props.SetRecord(props.record.Drate = cirdeath)
        var m2 = (472 - (472 * (cirdeath / 100)));
        document.getElementsByClassName('p2')[0].style.setProperty('--e', m2);
    }, [props.record])

    return (

        <div className="circle">
            <div className="outer">
                <div className="inner">
                    <div id="Number">
                    <CountUp start={(+(props.record.totaldeaths) / 12) * 10} duration={1.25} end={props.record.totaldeaths} />
                       
                    </div>
                </div>
            </div>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor2">
                        <stop offset="0%" stopColor="#ed8464" />
                        <stop offset="100%" stopColor="#ff3434" />
                    </linearGradient>
                </defs>
                <circle className="p2" cx="80" cy="80" r="75" strokeLinecap="round" />
            </svg>
        </div>

    );
}
export function CircleRecovery(props) {
    let [cirecover, SetRecover] = useState();


    useLayoutEffect(() => {
        let allcase;
        allcase = ((+(props.record.totalrecovered) / +(props.Covidrecord.totalrecovered)))
        SetRecover(allcase * 1000)

        // props.SetRecord(props.record.Rrate = cirecover)
        var m3 = (472 - (472 * (cirecover / 100)));
        document.getElementsByClassName('p3')[0].style.setProperty('--f', m3);
    }, [props.record])

    return (

        <div className="circle">
            <div className="outer">
                <div className="inner">
                    <div id="Number">
                    <CountUp start={(+(props.record.totalrecovered) / 12) * 10} duration={1.25} end={props.record.totalrecovered} />

                    </div>
                </div>
            </div>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor3">
                        <stop offset="0%" stopColor="#64edc3" />
                        <stop offset="100%" stopColor="#94ed64" />
                    </linearGradient>
                </defs>
                <circle className="p3" cx="80" cy="80" r="75" strokeLinecap="round" />
            </svg>
        </div>

    );
}








 // let count = 0;
    // let Range = 350;
    // let key = setInterval(() => {

    //     count += 1;
    //     console.log(count);

    //     if (count == Range) {
    //         clearInterval(key)
    //     }
    // }, 500);