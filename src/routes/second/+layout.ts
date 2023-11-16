export const load = async ({ parent }) => {
	const data = await parent();
	console.log('second/layout.ts', data);
	return;
}