/** @format */

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../server';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
	try {
		return await fetchRequestHandler({
			endpoint: '/api/trpc',
			router: appRouter,
			req,
			createContext: () => ({}),
		});
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
};

export { handler as GET, handler as POST };
