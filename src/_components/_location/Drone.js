import React, { Component } from 'react';
import { AnimateKeyframes } from "react-simple-animate";
import {Tooltip} from 'antd'
import DroneInfor from './DroneInfor';

const divStyle = {
    display: "inline-block",
    width: 30,
    height: 30,
    borderRadius: "10px",
    backgroundImage: 'url(https://www.freelogodesign.org/file/app/client/thumb/8c17d51d-6669-4095-be07-f1f9fcc26d66_200x200.png?1591024515687)',
    backgroundSize: '30px 30px',

};



class Drone extends Component {
    _on_click = (e) =>{
        this.props._on_drone_click(this.props.drone.id)
    }
    render() {
        return (
            <div>
                <AnimateKeyframes
                    style={{ display: "inline-block" }}
                    play={true}
                    iterationCount="infinite"
                    duration={45}
                    delay={0}
                    keyframes={this.props.drone.keyframes}
                >
                    
                    <Tooltip title={<DroneInfor drone = {this.props.drone} />} color={"white"} key={"white"}>
                        <div style={divStyle} onClick={this._on_click} /> 
                    </Tooltip>
                </AnimateKeyframes>
            </div>
        );
    }
}

export default Drone;