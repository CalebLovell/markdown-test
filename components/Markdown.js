import MarkdownDisplayer from 'react-native-markdown-display';
import { useQuery } from 'react-query';
import { Asset } from 'expo-asset';
import { Text, View } from 'react-native';

const getMarkdown = async () => {
	const requiredFile = require('./../assets/test.md');
	const asset = Asset.fromModule(requiredFile);
	const res = await fetch(asset.uri);
	const markdown = await res.text();
	return { markdown: markdown, uri: asset.uri };
};

export default function Markdown() {
	const { data, status, error } = useQuery(['markdown'], () => getMarkdown());
	return (
		<View>
			<Text>Markdown Display with EAS</Text>
			<Text>Status: {status}</Text>
			<Text>URI: {data ? data.uri : ''}</Text>
			<View style={{ backgroundColor: 'white', padding: 4, borderRadius: 4, borderColor: 'lightgrey', borderWidth: 1 }}>
				<MarkdownDisplayer>{data ? data.markdown : 'loading'}</MarkdownDisplayer>
			</View>
		</View>
	);
}
