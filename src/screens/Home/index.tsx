import { useEffect, useState } from 'react';
import { Image, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation} from '@react-navigation/native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { styles } from './styles';
import { Backgroud } from '../../components/Backgroud';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({id, nome , bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, nome , bannerUrl});
  }
  useEffect(()=>{
    fetch('http://192.168.0.100:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  },[])
  return (
    <Backgroud>
    <SafeAreaView style={styles.container}>

    <Image
    source={logoImg}
    style={styles.logo}
    />

    <Heading
    title="Encontre seu duo!"
    subtitle="Selecione o game que deseja jogar..."
    />

    <FlatList
    data={games}
    keyExtractor={item => item.id}
    renderItem={({item})=>(
      <GameCard
        data={item}
        onPress={()=>handleOpenGame(item)}
      />
    )}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
    
    
    </SafeAreaView>
    </Backgroud>
  );
}