import { MemoryRouter } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import { fireEvent } from '@testing-library/react';

// full render
it('mounts without crashing', function () {
    const { getByText } = render(
      <MemoryRouter>
        <VendingMachine />
      </MemoryRouter>
    );
  
    const title = getByText(/Pick an Item!/i);
    expect(title).toBeInTheDocument();
  });

  it('renders the snack page', function () {
    const { debug, getByText } = render(
      <MemoryRouter initialEntries={["/snack/chips"]}>
        <VendingMachine />
      </MemoryRouter>
    );
  
    const h1Text = getByText(/MMM I love chips/i);
    expect(h1Text).toBeInTheDocument();
  });
  
  it('Check if button goes back to home page on snack page', function () {
    const { debug, container } = render(
      <MemoryRouter initialEntries={["/snack/chips"]}>
        <VendingMachine />
      </MemoryRouter>
    );
  
    const goBack = container.querySelector("Button");
    fireEvent.click(goBack);

    expect(container.getByText(/Pick an Item!/i)).toBeInTheDocument();
  });