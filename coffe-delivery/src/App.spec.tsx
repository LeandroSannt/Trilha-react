import { render,screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import App from './App'

describe('App Componente', () =>{
  it("should render list items",  () =>{
    const {getByText} = render(<App/>)

    expect(getByText('diego')).toBeInTheDocument()
    expect(getByText('leandro')).toBeInTheDocument()
    expect(getByText('mayk')).toBeInTheDocument()
  })


  it("should be able to add new item to the list", async () =>{
    const {getByText,getByPlaceholderText ,findByText} = render(<App/>)
    const inputElement = getByPlaceholderText("novo item")
    await useEvent.type(inputElement, 'novo')
    await useEvent.click(getByText('adicionar'))


    expect( await findByText('novo')).toBeInTheDocument()
  })

  it("should be able to remove new item to the list", async () =>{
    const {getAllByText,getByText,getByPlaceholderText ,findByText, debug, queryByText} = render(<App/>)

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
