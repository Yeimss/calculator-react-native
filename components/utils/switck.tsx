import { Feather } from '@expo/vector-icons';
import { Switch, View } from 'react-native';

interface Props {
    lightMode:boolean,
    setLightMode: (mode:boolean) => void
}
const SwitchComponent = ({ lightMode, setLightMode } : Props) => {
     return (
    <View
      style={{
        position: 'absolute',
        top: 50,
        left: 16,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 999,
        elevation: 10,
        backgroundColor: 'transparent',
        paddingVertical: 2,
        paddingHorizontal: 4,
      }}
    >
      <Feather name="sun" size={18} color={lightMode ? 'gray' : 'orange'} style={{ marginRight: 8 }} />

      <Switch
        value={lightMode}
        onValueChange={setLightMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={lightMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        style={{ transform: [{ scale: 0.8 }] }}
      />

      <Feather name="moon" size={18} color={lightMode ? 'yellow' : 'gray'} style={{ marginLeft: 8 }} />
    </View>
  );
}

export default SwitchComponent