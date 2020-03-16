import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
// import moment from 'moment';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button';
import ToolkitProvider, {
  ColumnToggle,
  CSVExport
} from 'react-bootstrap-table2-toolkit';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import formatDate from '../../helpers/formatDate.js';

const { ToggleList } = ColumnToggle;
const { ExportCSVButton } = CSVExport;
// const { SearchBar } = Search;

const tableOptions = {
  // page: 1,
  // sizePerPageList: [{text: '10', value: 10}],
  sizePerPage: 30,
};

const fixedColStyle = {
  maxWidth: '150px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whitespace: 'nowrap',
};

function getColumns({makeAdmin}) {
  const columns = [
    {
      dataField: '_id',
      text: 'ID',
      formatter: _id => (
        <span>
          {_id}
          <br/>
          <Button color='link' size='sm' onClick={() => copy(_id)}>
            <i className='fa fa-copy'/>
          </Button>
        </span>
      ),
      style: {...fixedColStyle, fontWeight: 'bold'}
    },
    {
      dataField: 'timeCreated',
      text: 'Date Created',
      align: 'right',
      formatter: timeCreated => formatDate(timeCreated),
    },
    {
      dataField: 'email',
      text: 'Email',
      style: {...fixedColStyle}
    },
    {
      dataField: 'isAdmin',
      text: 'Administrator',
      align: 'center',
      formatter: (isAdmin, row) => (
        isAdmin
        ? <i className='fa fa-circle text-success'/>
        : <span>
          <i className='fa fa-circle text-warning'/>
          <br/>
          <Button size='sm' color='danger' onClick={() => makeAdmin({userId: row._id})}>
            Make Admin
          </Button>
        </span>
      )
    }
  ];
  return columns;
}

let UsersTable = function UsersTable(props) {
  const { makeAdmin, users } = props;
  return (
    <ToolkitProvider
      bootstrap4
      striped
      keyField='_id'
      columnToggle
      data={users}
      columns={getColumns({makeAdmin})}
      noDataIndication="No data"
    >
      {props =>
        <div>
          <ExportCSVButton bootstrap4 {...props.csvProps}> Export CSV </ExportCSVButton>
          <ToggleList { ...props.columnToggleProps } />
          <hr/>
          <BootstrapTable {...props.baseProps} />
        </div>
      }
    </ToolkitProvider>
  );
}

UsersTable.defaultProps = {
  users: [],
};

UsersTable.propTypes = {
  makeAdmin: PropTypes.func.isRequired,
  users: PropTypes.array,
};
export default UsersTable;

