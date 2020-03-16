import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import pick from 'lodash/pick';
import Container from 'react-bootstrap/Container';

import {
  fetch as fetchShows,
  remove as removeShow
} from '../../redux/reducers/shows';
import Panel from '../../components/lib/Panel';
import ManageShows from '../../components/shows/ManageShows';

const ManageShowsContainer = function ManageShowsContainer(props) {
  const { shows, users, location, removeShow } = props;
  const _fetchShows = props.fetchShows;
  const [pageIndex, setPageIndex] = useState(
    new URLSearchParams(location.search).get('pageIndex') || 0
  );
  const [pageSize, setPageSize] = useState(
    new URLSearchParams(location.search).get('limit') || 25
  );
  useEffect(
    () => {
      _fetchShows({
        skip: pageIndex * pageSize,
        limit: pageSize,
        filter: {},
      });
      return;
    },
    [_fetchShows, pageIndex, pageSize]
  );
  if (!users.user || !users.user.isAdmin) {
    return (
      <Panel status='error'>
        Access Denied. You must be logged in as an administrator to view this page.
      </Panel>
    );
  }
  const showsArr = (
    shows && shows.db && shows.db.entities && shows.db.entities.shows
    ? Object.values(shows.db.entities.shows)
    : []
  );
  return (
    <Container>
      {shows.fetchError ?
        <Panel status='error'>
          <span className='text-danger'>
            Error: {shows.fetchError.message}
          </span>
        </Panel>
      : <span/>
      }
      {showsArr && showsArr.length
        ? <ManageShows
          shows={showsArr}
          removeShow={removeShow}
          pagination={{
            pageSize,
            pageIndex,
            onPageSizeChange: setPageSize,
            onPageChange: setPageIndex,
          }}
        />
        : <div/>
      }
    </Container>
  );
};

ManageShowsContainer.defaultProps = {
  token: null,
  users: null,
};

ManageShowsContainer.props = {
  token: PropTypes.string,
  shows: PropTypes.object,
  users: PropTypes.object,
  fetchShows: PropTypes.func.isRequired,
  removeShow: PropTypes.func.isRequired,
};

function mapState(state) {
  return pick(state, 'users', 'shows');
}

function mapDispatch(dispatch) {
  return {
    fetchShows: params => dispatch(fetchShows(params)),
    removeShow: params => dispatch(removeShow(params)),
  };
}

export default connect(mapState, mapDispatch)(ManageShowsContainer);

