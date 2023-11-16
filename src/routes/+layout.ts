export const load = async ({ data, fetch }) => {
	console.log('routes/layout.ts', data);

	const stars = await fetch('http://localhost:3001/api/stars', {
		headers: {Authorization: `Bearer ${data.user}`}
	});

	const me = await fetch('http://localhost:3001/api/users/me', {
		headers: {Authorization: `Bearer ${data.user}`}
	});

	return {
		stars: stars.json(),
		me: me.json(),
		mo: Date.now(),
		...data,
	};
}