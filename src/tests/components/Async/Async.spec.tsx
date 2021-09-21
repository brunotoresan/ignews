import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '../../../components/Async'

describe('Async component', () => {

  it('waits for button to appear', async () => {
    render(<Async />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()

    await waitFor(() => {
      return expect(screen.getByText('Button')).toBeInTheDocument()
    }, 
    {
      interval: 1000
    })
  })

  it('waits for Invisible button to disappear', async () => {
    render(<Async />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()

    await waitForElementToBeRemoved(() => {
      screen.queryByText('Invisible')
    }, 
    {
      interval: 1000
    })
  })  

})