// import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import { removeWishGood } from '../actions'
import './kor.css'

const LIlKorzina =() => {
const globPrice = useSelector(state => state.globalPrice)
const lilKorzina = useSelector(state => state.korzina)
let dispatch = useDispatch()

const lilKorzinaList = lilKorzina.map((el,i) => {
    return (
            <tr>
                <th scope="row">{parseInt(i) + 1}</th>
                    <td>{el.name}</td>
                    <td>{el.count + ' шт.'}</td>
                    <td>{el.price}</td>
                    <td><button className='btn btn-outline-danger' onClick={()=>{dispatch(removeWishGood(el.count,el.price,el.name,el.id))}}>Х</button></td>
            </tr>       
    )
})

    return (
        <div className='d-flex justify-content-center'> 
          <OverlayTrigger
            placement='bottom'
            trigger="click"
            overlay={
            <Popover id='popid'>
            <Popover.Title as="h3">В корзине:</Popover.Title>
            <Popover.Content>
                <table className='table'>
                        <tbody>
                            {lilKorzinaList}
                        </tbody>
                </table>
                <strong className='text-center'>{'Итого к оплате: ' + globPrice}</strong>
            </Popover.Content>
            </Popover>
      }
    >
      <Button variant="secondary">{'$ ' + globPrice + ' '}<img src='https://icons.getbootstrap.com/assets/icons/cart4.svg' alt=''/></Button>
    </OverlayTrigger>
        </div>
    )
}


export default LIlKorzina