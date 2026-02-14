import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";


// const { width, height } = Dimensions.get("window");

const ACCEL = 0.01;
const SPEED = 50;
const STARTY = 0;


export function Trash() {
    const { width, height } = Dimensions.get("window");
    const buttonWidth = width / 5;
    const buttonLeft = width / 4 - buttonWidth;
    const buttonCent = width / 2 - buttonWidth / 2;
    const buttonRight = width / 4 * 3;
    const STARTX = width / 2 - 50 / 2; // 50 / 2 is the object's width / 2

    const [speedState, setSpeedState] = useState(SPEED);

    const [worldYState, setWorldYState] = useState(0);
    const [worldXState, setWorldXState] = useState(STARTX);

    const [gameOverState, setGameOverState] = useState(false);

    const garbagePadding = 5;

    const [startTimeState, setStartTimeState] = useState<number | undefined>(0);

    

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // TODO: check if the x value matches where the garbage needs to go
    // if not good, gameOver = true
    function checkCorrect(xVal: number) {
        setGameOverState(false);
        return;
    }

    async function moveDown(timestamp: number) {
        if (startTimeState === undefined) {
            setStartTimeState(timestamp);
        }
        const elapsed = timestamp - startTimeState!;
        
        const shift = Math.min(speedState * elapsed / 500, height);
        // console.log("aya -> shift ", shift);
        setWorldYState(shift);
        setSpeedState(speedState);
        // if (shift < height) {
            // await delay(1000);
            requestAnimationFrame(moveDown);
        // }

        if (worldYState >= height / 7 * 5.5) {
            checkCorrect(worldXState);
            if (gameOverState) {
                //MAKE A GAME OVER SCREEN
                return;
            } else {
                setWorldYState(0);
                setSpeedState(SPEED);
                setStartTimeState(undefined);
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

    // Returns Buttons
    return (
        <View style={{
            opacity: 100,
            width: width,
            height: height,
            position: 'absolute',
        }}>
            {/* Buttons to Move left/right and quickplace */}
            <TouchableOpacity
                // onPress={moveLeft}
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
                // onPress={quickPlace}
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
                // onPress={moveRight}
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

            </View>
        </View>
    );

}