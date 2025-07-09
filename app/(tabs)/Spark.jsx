import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SparkHeader from '../../components/Screens/Spark/SparkHeader'

const Spark = () => {
  return (
    <SafeAreaView>
      <View>
        <SparkHeader/>
      </View>
    </SafeAreaView>
  )
}

export default Spark