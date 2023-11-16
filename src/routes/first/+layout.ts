export const load = async ({ parent }) => {
	const data = await parent();
	console.log('first/layout.ts', data);
	return;
}