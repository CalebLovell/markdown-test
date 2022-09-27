import MarkdownDisplayer from 'react-native-markdown-display';
import { useQuery } from 'react-query';
import { Asset } from 'expo-asset';

const getMarkdown = async () => {
	const requiredFile = require('./../assets/test.md');
	const asset = Asset.fromModule(requiredFile);
	const res = await fetch(asset.uri);
	const markdown = await res.text();
	return markdown;
};

export default function Markdown() {
	const { data: markdown } = useQuery(['markdown'], () => getMarkdown());
	return <MarkdownDisplayer>{markdown ? markdown : 'loading'}</MarkdownDisplayer>;
}
