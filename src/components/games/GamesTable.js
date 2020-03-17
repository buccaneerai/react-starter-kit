import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import React from 'react';
import PropTypes from 'prop-types';
// import copy from 'copy-to-clipboard';
import truncate from 'truncate';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, {
  ColumnToggle,
  CSVExport
} from 'react-bootstrap-table2-toolkit';

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

function Actions(props) {
  const {row, remove} = props;
  return (
    <div>
      <Link to={`/games/${row._id}/edit`}><i className='fa fa-edit'/></Link>
      <Button variant='link' onClick={() => remove({gameId: row._id})}>
        <i className='fa fa-trash text-danger'/>
      </Button>
    </div>
  );
}

const columns = [
  {
    dataField: '_id',
    text: 'ID',
    formatter: (_id, row) => (
      <span>
        <Link to={`/games/${_id}`}>{_id}</Link>
        <Actions row={row} remove={row.remove} />
      </span>
    ),
    style: {
      fontWeight: 'bold',
      ...fixedColStyle,
    }
    // filter: textFilter(),
  },
  {
    dataField: 'title',
    text: 'Title',
    formatter: title => truncate(title, 50),
  },
  {
    dataField: 'url',
    text: 'URL',
    formatter: url => <a href={url}>Link</a>,
  },
  {
    dataField: 'categories',
    text: 'Categories',
    align: 'right',
    formatter: categories => (
      categories
      ? categories.map(c => (<div>{c}<br/></div>))
      : <span/>
    )
  },
];

const GamesTable = function GamesTable(props) {
  const {documents, removeById} = props;
  console.log('GamesTable.props', documents);
  const rows = documents.map(doc => ({
    ...doc,
    remove: () => removeById(doc._id)
  }));
  return (
    <ToolkitProvider
      bootstrap4
      striped
      keyField='_id'
      columnToggle
      data={rows}
      columns={columns}
      noDataIndication="None found"
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

GamesTable.defaultProps = {
  documents: [],
};

GamesTable.propTypes = {
  documents: PropTypes.array,
  removeById: PropTypes.func.isRequired,
};

export default GamesTable;

