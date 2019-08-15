const {Paper, Table, TableHead, TableRow, TableCell, TableBody} = MaterialUI;

const imageURL =
'https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-1.2.1';
const data = [
{img: imageURL, title: 'Image 1', author:
'author 1', cols: '1'},
{img: imageURL, title: 'Image 2', author:
'author 2', cols: '2'},
{img: imageURL, title: 'Image 3', author:
'author 3', cols: '2'},
{img: imageURL, title: 'Image 4', author:
'author 4', cols: '1' }
];

const element = <Paper><Table>
<TableHead><TableRow>
  <TableCell component=''>Title</TableCell>
  <TableCell>Author</TableCell> 
  <TableCell align="right">Columns</TableCell>
</TableRow></TableHead>
<TableBody>{data.map(row => (
    <TableRow key={row.author}>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.author}</TableCell>
        <TableCell align="right">{row.cols}</TableCell>
    </TableRow>))}
</TableBody>
</Table></Paper>;

ReactDOM.render(element, document.querySelector("#root"));

