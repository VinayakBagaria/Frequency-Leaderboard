import React from 'react';
import PropTypes from 'prop-types';
import Table, {
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { TablePaginationActions } from './index';
import { TableHeaderCell } from '../containers';

class TableLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
    };
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { leaderboardData } = this.props;
    console.log(leaderboardData);
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, leaderboardData.length - page * rowsPerPage);
    return (
      <Paper>
        <div>
          <Table style={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Letter</TableHeaderCell>
                <TableHeaderCell numeric>Frequency</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => (
                <TableRow key={n.key}>
                  <TableCell>{n.key}</TableCell>
                  <TableCell numeric>{n.value}</TableCell>
                </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={leaderboardData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

TableLayout.propTypes = {
  leaderboardData: PropTypes.array,
};

export default TableLayout;
