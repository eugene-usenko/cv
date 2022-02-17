import { createRenderer, ShallowRenderer } from 'react-test-renderer/shallow'
import { Education } from '../Education'

describe('Education', () => {
    const shallow: ShallowRenderer = createRenderer()

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('render', () => {
        const a = shallow.render(<Education />)
        expect(a).toMatchSnapshot()
    })
})
