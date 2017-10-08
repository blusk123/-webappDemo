import { get } from '../get.js'

export function getSearchData(page, cityName, category) {
	const result = get('api/search/' + page + '/' + encodeURIComponent(cityName) + '/' + encodeURIComponent(category) )
	return result
}