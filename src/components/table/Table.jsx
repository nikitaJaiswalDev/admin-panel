import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows= [
    {
        id: 1141235,
        product: 'Acen Nitro 5',
        img: 'https://cdn.shopify.com/s/files/1/1816/6561/products/1_da16714f-9baa-48a1-aebc-dce74f9ffb88.jpg?v=1571440370',
        customer: 'John smith',
        date: '1 march',
        amount: 785,
        method: 'Cash on Delivery',
        status: 'Approved',
    },
    {
        id: 1141235,
        product: 'Acen Nitro 5',
        img: 'https://cdn.shopify.com/s/files/1/1816/6561/products/1_da16714f-9baa-48a1-aebc-dce74f9ffb88.jpg?v=1571440370',
        customer: 'John smith',
        date: '1 march',
        amount: 785,
        method: 'Online Payment',
        status: 'Approved',
    },
    {
        id: 1141235,
        product: 'Acen Nitro 5',
        img: 'https://cdn.shopify.com/s/files/1/1816/6561/products/1_da16714f-9baa-48a1-aebc-dce74f9ffb88.jpg?v=1571440370',
        customer: 'John smith',
        date: '1 march',
        amount: 785,
        method: 'Cash on Delivery',
        status: 'Pending',
    },
]
const CustomTable = () => {
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking Id</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customers</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell className='tableCell'> {row.id}</TableCell>
                <TableCell className='tableCell'>
                    <div className="cellWrapper">
                        <img src={row.img} alt="image" className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className='tableCell'>{row.customer}</TableCell>
                <TableCell className='tableCell'>{row.date}</TableCell>
                <TableCell className='tableCell'>{row.amount}</TableCell>
                <TableCell className='tableCell'>{row.method}</TableCell>
                <TableCell className='tableCell'>
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable