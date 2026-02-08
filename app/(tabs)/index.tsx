
// import { ThemedText } from '@/components/themed-text';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;


export default function GameScreen() {
  const buttonWidth = windowWidth / 5;
  const buttonLeft = windowWidth / 4 - buttonWidth;
  const buttonCent = windowWidth / 2 - buttonWidth / 2;
  const buttonRight = windowWidth / 4 * 3;

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      {/* Background */}
      <View style={[styles.container, { flex: 1, flexDirection: 'column' }]}>
        <View style={{ flex: 6, backgroundColor: greenPale }} />
        <View style={{ flex: 1, backgroundColor: compostGreen, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Entypo name="leaf" size={56} color={greyPale} />
        </View>
      </View>
      <View style={[styles.container, { flex: 1, backgroundColor: greyPale, flexDirection: 'column' }]}>
        <View style={{ flex: 6, backgroundColor: greyPale }} />
        <View style={{ flex: 1, backgroundColor: paperGrey, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="newspaper-o" size={56} color={greyPale} />
        </View>
      </View>
      <View style={[styles.container, { flex: 1, backgroundColor: bluePale, flexDirection: 'column' }]}>
        <View style={{ flex: 6, backgroundColor: bluePale }} />
        <View style={{ flex: 1, backgroundColor: recycleBlue, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="recycle" size={56} color={greyPale} />
        </View>
      </View>
      <View style={[styles.container, { flex: 1, backgroundColor: blackPale, flexDirection: 'column' }]}>
        <View style={{ flex: 6, backgroundColor: blackPale }} />
        <View style={{ flex: 1, backgroundColor: garbageBlack, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="trash" size={56} color={greyPale} />
        </View>
      </View>
      
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

    </View >
  );
};


const recycleBlue = '#397CE4'
const compostGreen = '#3C875E';
const garbageBlack = '#282832';
const paperGrey = '#5F5F5F';

const bluePale = '#9DE0FF';
const greenPale = '#A0D7AE';
const blackPale = '#AAAAB4';
const greyPale = '#EBEBEB';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'black',
  },
});