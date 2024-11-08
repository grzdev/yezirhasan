import { error } from '@sveltejs/kit';
import articles from '../../../components/article.json';

export async function load({ params }) {
	// Convert the id parameter to a number since URL parameters are always strings
	const itemId = parseInt(params.id);

	if (isNaN(itemId)) {
		throw error(400, 'Invalid ID format');
	}

	const item = articles.article.find((item) => item.id === itemId);

	if (!item) {
		throw error(404, 'Item not found');
	}

	return {
		item
	};
}
