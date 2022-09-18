import { screen, waitForElementToBeRemoved } from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';
export * from '@testing-library/react';

/**
 * Utils for waiting loading to finish
 */
export function waitForLoadingToFinish() {
	return waitForElementToBeRemoved(
		() => [...screen.queryAllByLabelText(/loading/i), ...screen.queryAllByText(/loading/i)],
		{
			timeout: 4000,
		},
	);
}
