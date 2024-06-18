import { render } from '@testing-library/react-native';
import { View, Text } from 'react-native';

const App = () => (
    <View>
    <Text>Welcome to React Native</Text>
        </View>
);

test('renders correctly', () => {
    const { getByText } = render(<App />);
    const element = getByText(/welcome to react native/i);
    expect(element).toBeTruthy();
});