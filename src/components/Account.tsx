import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Account = () => {
    const account = useSelector((state : RootState) => state.account)

    return(
        <div>
            <p>Account balance: {account.balance}</p>
        </div>
    )
}

export default Account