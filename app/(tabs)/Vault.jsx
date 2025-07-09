import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import VaultHeader from '../../components/Screens/Vault/VaultHeader'

const Vault = () => {
  return (
    <SafeAreaView>
      <View>
        <VaultHeader/>
      </View>
    </SafeAreaView>
  )
}

export default Vault