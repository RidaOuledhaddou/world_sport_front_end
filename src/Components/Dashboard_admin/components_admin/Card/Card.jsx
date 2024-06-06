import React, { useState } from 'react'
import {motion} from 'framer-motion'
import './Card.css'

import {UilTimes} from '@iconscout/react-unicons'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

  return (
    <>
      <motion>
            {
                expanded? (
                    <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
                ):
                <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
            }
      </motion>
    </>
  )
}

function CompactCard ({param, setExpanded}){
    const Png = param.png;
        return (
            <motion.div className="CompactCard" 
            style={{
                background : param.color.backGround,
                boxShadow :param.color.boxShadow
            }}
            onClick={setExpanded}
            >
                <div className="radialBar">
                    <CircularProgressbar 
                    value={param.barValue}
                    text={`${param.barValue}%`}
                     />
                     <span>{param.title}</span>
                </div>
                <div className="detail">
                    <Png/>
                    <span>${param.value}</span>
                    <span>Last 24 hours</span>
                </div>
            </motion.div>
        )
}
function ExpandedCard({ param, setExpanded }) {
    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto"
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35
        },
        fill: {
          colors: ["#fff"],
          type: "gradient"
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        },
        grid: {
          show: true // corrected from 'behind: true' to 'show: true'
        },
        xaxis: {
          type: "datetime", // corrected spelling
          categories: [
            "2024-09-19T00:00:000Z",
            "2024-09-19T01:30:000Z",
            "2024-09-19T02:30:000Z",
            "2024-09-19T03:30:000Z",
            "2024-09-19T04:30:000Z",
            "2024-09-19T05:30:000Z",
            "2024-09-19T06:30:000Z",
          ],
        }
      }
    }
    return (
      <motion.div className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow
        }}
        layoutId='expandableCard'
        >
        <div style={{alignSelf : 'flex-end', cursor: 'pointer',color: 'white' }}>
          <UilTimes onClick={setExpanded} 
          />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
          <Chart series={param.series} type='area' options={data.options} />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }

export default Card
