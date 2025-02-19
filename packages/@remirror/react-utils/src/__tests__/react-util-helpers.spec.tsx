import React from 'react';

import {
  getElementProps,
  isReactDOMElement,
  isReactFragment,
  isRemirrorProvider,
  oneChildOnly,
  RemirrorType,
} from '../react-utils';

test('getElementProps', () => {
  const expected = { id: 'test' };
  const Element = <div {...expected} />;

  expect(getElementProps(Element)).toEqual(expected);
});

test('isReactDOMElement', () => {
  const Custom = () => <div />;

  expect(isReactDOMElement(<div />)).toBeTrue();
  expect(isReactDOMElement(<Custom />)).toBeFalse();
});

test('isReactFragment', () => {
  const Custom = () => <div />;

  expect(isReactFragment(<></>)).toBeTrue();
  expect(
    isReactFragment(
      <>
        <Custom />
      </>,
    ),
  ).toBeTrue();
  expect(isReactFragment(<Custom />)).toBeFalse();
});

test('isRemirrorProvider', () => {
  const Custom = () => <div />;
  Custom.$$remirrorType = RemirrorType.Provider;

  expect(isRemirrorProvider(<Custom />)).toBeTrue();
});

test('oneChildOnly', () => {
  // @ts-expect-error
  expect(() => oneChildOnly()).toThrowErrorMatchingInlineSnapshot(
    `"This component requires ONE child component - Nothing was provided"`,
  );
  expect(() => oneChildOnly('string')).toThrowErrorMatchingInlineSnapshot(
    `"This component requires ONE child component - An invalid element was provided"`,
  );
  expect(() => oneChildOnly([<div key={1} />, <div key={2} />])).toThrowErrorMatchingInlineSnapshot(
    `"This component requires ONE child component - An invalid element was provided"`,
  );

  const expected = <div />;

  expect(oneChildOnly(expected)).toBe(expected);
});
