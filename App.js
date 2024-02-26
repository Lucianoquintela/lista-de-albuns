

import {SafeAreaView,Text,StyleSheet} from 'react-native' 
import {Album} from './components/Album'

export default function App(){
  return(
    <SafeAreaView>
      
      <Text style={styles.titulo}>Álbuns da Banda Oficina G3</Text> 

      <Album
        albumName={'Indiferença'}
        year={1996}
        musics={['1. Davi'  ,  '\n2. Fé', '\n3. Magia Alguma', '\n4. Glória', '\n5. Profecias']}
      />

      <Album
        albumName={'Além do que os olhos podem ver'}
        year={2004}
        musics={[ '1. Intro','\n2. Mais Alto','\n3. Réu ou Juiz','\n4. Meu Legado','\n5 .Através da Porta']}
      />
      <Album
        albumName={'Depois de guerra'}
        year={2008}
        musics={[ '1. D.A.G','\n2. Meus Próprios Meios','\n3. Eu Sou', '\n4. Meus Passos','\n5. Continuar']}
      />
    
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    margin: 10,
  }
})

 //  {'\n'} quebra de limnha


