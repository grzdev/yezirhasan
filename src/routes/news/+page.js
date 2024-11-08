// import { json } from '@sveltejs/kit';
import article from '../../components/article.json';

export async function load() {
	return {
		article: article.article
	};
}
