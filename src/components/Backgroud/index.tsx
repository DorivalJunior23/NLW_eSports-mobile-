import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroudImg from '../../assets/background-galaxy.png';
interface Props {
    children: React.ReactNode;
}

export function Backgroud({children}: Props) {
  return (
    <ImageBackground 
    source={ backgroudImg } 
    defaultSource={backgroudImg}
    style={styles.container}
    >
        
        {children}
    </ImageBackground>
  );
}