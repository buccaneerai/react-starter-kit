import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import pick from 'lodash/pick';
import Container from 'react-bootstrap/Container';

import {tokenIsValid} from '../../helpers/userHelpers';
import {
  fetch as fetchUsers,
  makeAdmin,
  remove as removeUser
} from '../../redux/reducers/users';
import Panel from '../../components/lib/Panel';
import ManageUsers from '../../components/users/ManageUsers';

const ManageUsersContainer = function ManageUsersContainer(props) {
  const { token, users, location, makeAdmin } = props;
  const _fetchUsers = props.fetchUsers;
  const [pageIndex, setPageIndex] = useState(
    new URLSearchParams(location.search).get('pageIndex') || 0
  );
  const [pageSize, setPageSize] = useState(
    new URLSearchParams(location.search).get('limit') || 25
  );
  useEffect(
    () => {
      _fetchUsers({
        skip: pageIndex * pageSize,
        limit: pageSize,
        filter: {},
      });
      return;
    },
    [_fetchUsers, pageIndex, pageSize]
  );
  if (!users.user || !users.user.isAdmin) {
    return (
      <Panel status='error'>
        Access Denied. You must be logged in as an administrator to view this page.
      </Panel>
    );
  }
  const usersArr = (
    users && users.db && users.db.entities && users.db.entities.users
    ? Object.values(users.db.entities.users)
    : []
  );
  return (
    <Container>
      {users.fetchError ?
        <Panel status='error'>
          <span className='text-danger'>
            Error: {users.fetchError.message}
          </span>
        </Panel>
      : <span/>
      }
      {usersArr && usersArr.length
        ? <ManageUsers
          users={usersArr}
          makeAdmin={makeAdmin}
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

ManageUsersContainer.defaultProps = {
  token: null,
  users: null,
};

ManageUsersContainer.props = {
  token: PropTypes.string,
  users: PropTypes.object,
  makeAdmin: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

function mapState(state) {
  return pick(state, 'users');
}

function mapDispatch(dispatch) {
  return {
    fetchUsers: params => dispatch(fetchUsers(params)),
    makeAdmin: params => dispatch(makeAdmin(params)),
    removeUser: params => dispatch(removeUser(params))
  };
}

export default connect(mapState, mapDispatch)(ManageUsersContainer);

