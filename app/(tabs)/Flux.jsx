import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feed from '../../components/Screens/Flux/Feed';

//Main Function
const Flux = () => {
  return (
    <SafeAreaView>
      <ThemedView>
        <Feed/>
      </ThemedView>
    </SafeAreaView>
  )
}



export default Flux