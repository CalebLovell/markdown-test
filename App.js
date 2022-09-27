import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import Markdown from './components/Markdown';

export default function App() {
	return (
		<QueryClientProvider client={queryClientConfig}>
			<View style={styles.container}>
				<StatusBar style='auto' />
				<Markdown />
			</View>
		</QueryClientProvider>
	);
}

const queryClientConfig = new QueryClient();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
