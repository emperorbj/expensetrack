import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function Transaction({transaction}){
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'

    return(
        <li className={transaction.amount<0 ? 'minus':'plus'}>
            {transaction.text}<span>{sign}N {Math.abs(transaction.amount)}</span>
            <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}