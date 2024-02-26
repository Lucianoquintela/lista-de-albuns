import {View, Text, StyleSheet} from 'react-native'

export function Album({albumName, year, musics}) {
  return(
    <View>
      
      <View style={styles.albumEano}> 

        <View>
          <Text style={styles.albumName}>{albumName}</Text>
        </View>

        <View>
          <Text style={styles.year}> ({year})</Text>
        </View>  
      </View>  

      <Text style={styles.musics}>{musics}</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  albumEano: {
    display:'flex',
    flexDirection: 'row',
    marginLeft:10,
    marginTop:10,
  },

  albumName: {
    fontWeight: 'bold'

  },

  year: {
   
    fontWeight: 'bold'

  },

  musics: {
    display:'flex',
    flexDirection: 'column',
   
    marginLeft:10,
  
    
  }


})