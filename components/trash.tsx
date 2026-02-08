import { useState } from "react";
import { Dimensions, View } from "react-native";


// const { width, height } = Dimensions.get("window");

const ACCEL = 0.01;

export function Trash() {
    const { width, height } = Dimensions.get("window");

    const [speedState, setSpeedState] = useState(0);

    const [worldYState, setWorldYState] = useState(0);
    const [worldXState, setWorldXState] = useState(0);

    const [gameOverState, setGameOverState] = useState(false);

    const garbagePadding = 5;

    const [startTimeState, setStartTimeState] = useState(0);

    const buttonWidth = width / 5;
    const buttonLeft = width / 4 - buttonWidth;
    const buttonCent = width / 2 - buttonWidth / 2;
    const buttonRight = width / 4 * 3;


    // async function gameLoop() {
    //     if (worldYState >= height / 7 * 5.5) {
    //         checkCorrect(worldXState);
    //         if (gameOverState) {
    //             //MAKE A GAME OVER SCREEN
    //             return;
    //         } else {
    //             setWorldYState(0);
    //         }
    //     }
    //     moveDown(Date.now());
    // }

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // TODO: check if the x value matches where the garbage needs to go
    // if not good, gameOver = true
    function checkCorrect(xVal: number) {
        setGameOverState(true);
        return;
    }

    function moveDown(timestamp: number) {
        if (startTimeState === undefined) {
            setStartTimeState(timestamp);
        }
        const elapsed = timestamp - startTimeState;
        const shift = Math.min(speedState * elapsed, 200);
        setWorldYState(worldYState + shift);
        setSpeedState(speedState + ACCEL);
        if (shift < height) {
            requestAnimationFrame(moveDown);
        }
        if (worldYState >= height / 7 * 5.5) {
            checkCorrect(worldXState);
            if (gameOverState) {
                //MAKE A GAME OVER SCREEN
                return;
            } else {
                setWorldYState(0);
            }
        }
    }




    function moveLeft() {
        if (worldXState - garbagePadding <= 0) {
            return;
        }
        setWorldXState(worldXState - width / 4)
    }

    function moveRight() {
        if (worldXState - garbagePadding >= width / 4 * 3) {
            return;
        }
        setWorldXState(worldXState + width / 4)
    }

    function quickPlace() {
        setSpeedState(speedState + 50);
    }

    requestAnimationFrame(moveDown);

    // return(<View style={{width: 50, height: 50, backgroundColor: 'black'}}/>);

    return (
        <View>
            {/* Buttons to Move left/right and quickplace
            <TouchableOpacity
                onPress={moveLeft}
                style={{
                    zIndex: 5,
                    position: 'absolute',
                    left: buttonLeft,
                    top: '60%',
                    backgroundColor: 'black',
                    width: buttonWidth,
                    height: buttonWidth,
                    borderRadius: 25,
                    opacity: 0.67,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Entypo name="chevron-left" size={48} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={quickPlace}
                style={{
                    zIndex: 5,
                    position: 'absolute',
                    left: buttonCent,
                    top: '67%',
                    backgroundColor: 'black',
                    width: buttonWidth,
                    height: buttonWidth,
                    borderRadius: 25,
                    opacity: 0.67,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Entypo name="chevron-down" size={48} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={moveRight}
                style={{
                    zIndex: 5,
                    position: 'absolute',
                    left: buttonRight,
                    top: '60%',
                    backgroundColor: 'black',
                    width: buttonWidth,
                    height: buttonWidth,
                    borderRadius: 25,
                    opacity: 0.67,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Entypo name="chevron-right" size={48} color="white" />
            </TouchableOpacity>

            <View style={{
                zIndex: 1,
                position: 'absolute',
                width: width, height: height,
            }}>

                <View
                    id='test'
                    style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        left: worldXState,
                        top: worldYState,
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                    }}></View>

            </View> */}
        </View>
    );

}