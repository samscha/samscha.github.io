import { within } from '@testing-library/react';
import { expect } from 'vitest';

export const getElementWithin = (element: HTMLElement) => {
  expect(element).toBeInTheDocument();

  const container = element.parentElement;
  expect(container).toBeInTheDocument();

  return within(container!);
};

export const getIncludedText = (text: string) => {
  // TODO: update type
  return (content: string, _element: Element | null) => content.includes(text);
};
