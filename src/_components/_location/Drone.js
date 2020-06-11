import React, { Component } from 'react';


function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const divStyle = {
    display: "inline-block",
    width: 30,
    height: 30,
    borderRadius: "10px",
    backgroundImage: 'url(https://www.freelogodesign.org/file/app/client/thumb/8c17d51d-6669-4095-be07-f1f9fcc26d66_200x200.png?1591024515687)',
    backgroundSize: '30px 30px',

};

class Drone extends Component {
    render() {
        return (
            <div>
                <AnimateKeyframes
                    style={{ display: "inline-block" }}
                    play={true}
                    iterationCount="infinite"
                    duration={45}
                    delay={0}
                    keyframes={props.drone.keyframes}
                >
                    <HtmlTooltip
                        title={
                            <LocationInfor drone={props.drone} />
                        }
                        placement="right"
                    >
                        <div style={divStyle} onClick={on_click} />
                    </HtmlTooltip>
                </AnimateKeyframes>
            </div>
        );
    }
}

export default Drone;