import 'react-native';

import
  React
  from 'react';

import
  ApplicatinLocked
  from '../dist/src/ApplicationLocked';

import
  PinCode
  from '../dist/src/PinCode';

import
  PinCodeChoose
  from '../dist/src/PinCodeChoose';

import
  PinCodeEnter
  from '../dist/src/PinCodeEnter';

import
  renderer
  from 'react-test-renderer';

it('ApplicatinLocked renders correctly', () => {
  const tree = renderer.create(
    <ApplicatinLocked/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PinCode renders correctly', () => {
  const tree = renderer.create(
    <PinCode/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PinCodeChoose renders correctly', () => {
  const tree = renderer.create(
    <PinCodeChoose/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PinCodeEnter renders correctly', () => {
  const tree = renderer.create(
    <PinCodeEnter/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
