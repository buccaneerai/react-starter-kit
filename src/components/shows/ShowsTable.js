import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import roundTo from 'round-to';
import isNumber from 'lodash/isNumber';
import copy from 'copy-to-clipboard';
import truncate from 'truncate';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
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

function ShowActions(props) {
  const {row, onRemove} = props;
  return (
    <div>
      <Button variant='link'><i className='fa fa-edit'/></Button>
      <Button variant='link'><i className='fa fa-trash text-danger'/></Button>
    </div>
  );
}

const columns = [
  {
    dataField: '_id',
    text: 'ID',
    formatter: (_id, row) => (
      <span>
        <Link to={`/shows/${_id}`}>{_id}</Link>
        <ShowActions show={row} onRemote={row.remove} />
      </span>
    ),
    style: {
      fontWeight: 'bold',
      ...fixedColStyle,
    }
    // filter: textFilter(),
  },
  {
    dataField: 'youtubeVideoId',
    text: 'Youtube Id',
    formatter: youtubeVideoId => (
      <span>
        <a href={`https://youtube.com/watch?v=${youtubeVideoId}`}>
          {youtubeVideoId}
        </a>
        <Button variant='link' onClick={() => copy(youtubeVideoId)}>
          <i className='fa fa-copy'/>
        </Button>
      </span>
    )
  },
  {
    dataField: 'timeCreated',
    text: 'Date Created',
    align: 'right',
    formatter: timeCreated => formatDate(timeCreated),
  },
  {
    dataField: 'genres',
    text: 'Genres',
    align: 'right',
    formatter: genres => genres.map(g => (
      <div>{g}<br/></div>
    ))
  },
  {
    dataField: 'title',
    text: 'Title',
    formatter: title => <span> {truncate(title,100)} </span>,
    style: {
      ...fixedColStyle,
    }
  },
  {
    dataField: 'playlistId',
    text: 'Playlist',
    formatter: playlistId => (
      <Link to={`/series/${playlistId}`}>{truncate(playlistId, 12)}</Link>
    )
  },
  {
    dataField: 'playlistPosition',
    text: 'Playlist Position',
    hidden: true,
  },
];

const ShowsTable = function ShowsTable(props) {
  const {documents, onArchive} = props;
  console.log('ShowsTable.props', documents);
  const rows = documents.map(doc => ({
    ...doc,
    archive: () => onArchive(doc._id)
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

ShowsTable.defaultProps = {
  documents: [],
};

ShowsTable.propTypes = {
  documents: PropTypes.array,
};

export default ShowsTable;

