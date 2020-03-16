import React from 'react';
import PropTypes from 'prop-types';
import roundTo from 'round-to';
import times from 'lodash/times';
import Pagination from 'react-bootstrap/Pagination';

function handlePageChange(e, pageIndex, onPageChange) {
  e.preventDefault();
  onPageChange(pageIndex);
}

const Paginator = function Paginator(props) {
  const {
    pageIndex,
    pageSize,
    documentCount,
    numPagesDisplayed,
    onPageChange,
    showDocumentCount
  } = props;
  const lastPage = roundTo.up(documentCount / pageSize, 0) - 1;
  const pageIndices = times(numPagesDisplayed)
    .map(n => n + pageIndex - 1)
    .filter(i => i <= lastPage && i >= 0);
  return (
    <div>
      <Pagination>
        <Pagination.First
          href="#"
          disabled={pageIndex === 0}
          onClick={e => handlePageChange(e, 0, onPageChange)}
        >
          {'<<'}
        </Pagination.First>
        <Pagination.Prev
          disabled={pageIndex === 0}
          href="#"
          onClick={e => handlePageChange(e, pageIndex - 1, onPageChange)}
        />
        {pageIndices.map(i =>
          <Pagination.Item
            active={i === pageIndex}
             href="#"
            onClick={e => handlePageChange(e, i, onPageChange)}
          >
            {i + 1}
          </Pagination.Item>
        )}
        <Pagination.Next
          disabled={pageIndex === lastPage}
          href="#"
          onClick={e => handlePageChange(e, pageIndex + 1, onPageChange)}
        />
        <Pagination.Last
          disabled={pageIndex === lastPage}
          href="#"
          onClick={e => handlePageChange(e, lastPage, onPageChange)}
          >
            {'>>'}
        </Pagination.Last>
      </Pagination>
      {showDocumentCount ?
        <span>{`Total: ${documentCount}`}</span>
        : <span/>
      }
    </div>
  );
};

Paginator.defaultProps = {
  pageSize: 25,
  pageIndex: 0,
  documentCount: null,
  numPagesDisplayed: 10,
  showDocumentCount: true,
};

Paginator.props = {
  onPageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number,
  pageIndex: PropTypes.number,
  documentCount: PropTypes.number,
  numPagesDisplayed: PropTypes.number,
  showDocumentCount: PropTypes.boolean,
};

export default Paginator;
