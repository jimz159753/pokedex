import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Routes from './Routes';

test('render card details when clicking on a card', async () => {
    const { getByTestId, getByText } = render(<Routes />)
    let bulbasaur = null
    await waitFor(() => {
        bulbasaur = getByTestId('item-1')
        fireEvent.press(bulbasaur)
        const name = getByText('bulbasaur')
        expect(name).toBeTruthy()
    }, { timeout: 3000 })
})