import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Launch from '../../components/Screens/Spark/Launch'

const Spark = () => {
  return (
    <SafeAreaView>
      <View>
        <Launch/>
      </View>
    </SafeAreaView>
  )
}

export default Spark