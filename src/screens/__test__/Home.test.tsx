import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Home from '../Home';

type itemChild = {
    props: { color: string }
}

test('render right cards when searching for a type', async () => {
    const { useNavigation } = jest.requireActual("@react-navigation/native")

    const { getByTestId, getAllByTestId } = render(<Home navigation={useNavigation} />)

    const dropdown = getByTestId('search')

    fireEvent.changeText(dropdown, 'grass')

    await waitFor(() => {
        const items = getAllByTestId(/item-/)
        const ok = items.map(el => el.props.children.map((child: itemChild) => child.props.color).filter(Boolean)).flat().every(color => color.includes('green'))
        expect(ok).toBeTruthy()
    }, { timeout: 3000 });
});

