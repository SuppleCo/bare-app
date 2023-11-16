export function handle({ event, resolve }) {
	event.locals.user = 'TOKEN_HERE'
	return resolve(event);
}

// TODO: This only works on the server and probably not at all.
// export async function handleFetch({ event, request, fetch }) {
// 	console.log('fetch', request.url);
// 	if (request.url.startsWith('https://api-staging.supple.co/')) {
// 		request.headers.set('cookie', event.locals.user);
// 	}

// 	return fetch(request);
// }