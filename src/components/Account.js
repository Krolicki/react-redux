import { useSelector } from 'react-redux'

const Account = () => {
    const account = useSelector((state) => state.account)

    return(
        <div>
            Account balance: {account.balance}
        </div>
    )
}

export default Account