import { render, screen } from '@/tests/test-utils';

import { Example2 } from '.';

describe('Example2', () => {
  it('should render the heading', () => {
    render(<Example2>Example2</Example2>);

    // Assert
    screen.getByRole('heading', { name: /Example2/i });
  });
})
