import React from 'react';
import { render } from '@testing-library/react-native';
import { View, Text } from 'react-native';

const App = () => (
    <View>
        <Text>Welcome to react native</Text>
    </View>
);

test('renders welcome message', () => {
    const { getByText } = render(<App />);
    const welcomeMessage = getByText(/welcome to react native/i);
    expect(welcomeMessage).toBeTruthy();
});