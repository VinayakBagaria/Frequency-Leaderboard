import { withStyles } from 'material-ui/styles';
import { TableCell } from 'material-ui/Table';

const TableHeaderCell = withStyles(() => ({
  head: {
    backgroundColor: '#000',
    color: '#fff',
  },
}))(TableCell);

export default TableHeaderCell;
