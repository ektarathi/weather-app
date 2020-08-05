import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Weather Forecast of Teraki Offices/i);
  expect(linkElement).toBeInTheDocument();
});
