import Dropdown from '../Dropdown';
import { render } from '@testing-library/react-native';
import { mockData } from './mockData';


test('render Dropdown component', () => {
    const filterByTypeMock = jest.fn();
    const tree = render(<Dropdown filterByType={filterByTypeMock} types={mockData} />)
    expect(tree).toBeTruthy()
});

