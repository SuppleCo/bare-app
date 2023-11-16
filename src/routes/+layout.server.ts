export const load = async ({ locals }) => {
	console.log('layout.server.ts');
	return {
		t: Date.now(),
		...locals,
	};
}