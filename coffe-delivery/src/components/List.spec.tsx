import {  render,screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import {List} from './List'

describe('List Component', () =>{
  it("should render list items", async  () =>{
    const {getByText, rerender,queryByText} = render(<List initialItems={['diego','leandro','mayk']}/>)

    expect(getByText('diego')).toBeInTheDocument()
    expect(getByText('leandro')).toBeInTheDocument()
    expect(getByText('mayk')).toBeInTheDocument()

    rerender(<List initialItems={['julia']}/>)

    expect(screen.getByText('julia')).toBeInTheDocument()
    expect(screen.queryByText('mayk')).not.toBeInTheDocument()

  })


  it("should be able to add new item to the list", async () =>{
    const {getByText,getByPlaceholderText ,findByText} = render(<List initialItems={[]}/>)
    const inputElement = getByPlaceholderText("novo item")
    await useEvent.type(inputElement, 'novo')
    await useEvent.click(getByText('adicionar'))


    expect( await findByText('novo')).toBeInTheDocument()
  })

  it("should be able to remove new item to the list", async () =>{
    const {getAllByText,getByText,getByPlaceholderText ,findByText, debug, queryByText} = render(<List initialItems={['diego']}/>)

    const removeButtons = getAllByText('remover')

    await useEvent.click(removeButtons[0])

    await waitForElementToBeRemoved(() =>{
      return getByText('diego')
    })

    // await waitFor(() =>{
    //   expect(queryByText('diego')).not.toBeInTheDocument()
    // })

  })
})
