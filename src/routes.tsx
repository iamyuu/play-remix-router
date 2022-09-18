import { RouterProvider, isRouteErrorResponse, createBrowserRouter, useRouteError } from 'react-router-dom';
import { Spinner } from './components/spinner';

function RootPending() {
	return (
		<div aria-busy='true' aria-label='Loading app' className='mt-12 text-center'>
			<Spinner size={16} />
		</div>
	);
}

function RootError() {
	const error = useRouteError();

	const message = error instanceof Error ? error.message : 'Unknown error';
	const reason = isRouteErrorResponse(error) ? error.statusText : message;

	return (
		<div role='alert'>
			<h1 className='font-semibold text-red-500'>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<i>{reason}</i>
		</div>
	);
}

function Root() {
	return <h1 className='text-blue-500'>Hello World!</h1>;
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <RootError />,
	},
]);

export function AppRoutes() {
	return <RouterProvider fallbackElement={<RootPending />} router={router} />;
}
