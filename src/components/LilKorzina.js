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
            <tr className='border-bottom border-success' >
                <th scope="row" className='align-middle'>{parseInt(i) + 1}</th>
                    <td className='text-left align-middle'>{el.name}</td>
                    <td className='align-middle'>{el.count + ' шт.'}</td>
                    <td className='align-middle'>{el.price + ' $'}</td>
                    <td className='align-middle'><button className="btn btn-outline-danger btn-sm" onClick={()=>{dispatch(removeWishGood(el.count,el.price,el.name,el.id))}}>X</button></td>
            </tr>       
    )
})

    return (
        <div className='d-flex justify-content-center'> 
          <OverlayTrigger
            placement='bottom'
            trigger="click"
            overlay={
            <Popover id='popid' className='text-center'>
            <Popover.Title as="h3">В корзине:</Popover.Title>
            <Popover.Content>
                <table className='table'>
                        <tbody>
                            {lilKorzinaList}
                        </tbody>
                </table>
                <strong className='text-center'>{'Итого к оплате: ' + globPrice + ' $'}</strong>
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