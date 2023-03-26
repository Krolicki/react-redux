import { useSelector } from 'react-redux'

const Account = () => {
    const account = useSelector((state) => state.account)

    return(
        <div>
            <p>Account balance: {account.balance}</p>
        </div>
    )
}

export default Account