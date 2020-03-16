import epics from './epics';

it('renders without crashing', () => {
  expect(epics).toBeInstanceOf(Function);
});
