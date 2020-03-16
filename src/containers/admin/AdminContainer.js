import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import pick from 'lodash/pick';

import {tokenIsValid} from '../../helpers/userHelpers';
import Panel from '../../components/lib/Panel';
import AdminScreen from '../../components/admin/AdminScreen';

const AdminContainer = function AdminContainer(props) {
  const { token, user } = props;
  if (!tokenIsValid({token})) return <Redirect to='/login' />;
  if (!user || !user.isAdmin) {
    return (
      <Panel status='error'>
        Access Denied. You must be logged in as an administrator to view this page.
      </Panel>
    );
  }
  return <AdminScreen />;
};

AdminContainer.defaultProps = {
  token: null,
  user: null
};

AdminContainer.props = {
  token: PropTypes.string,
  user: PropTypes.object,
};

function mapState(state) {
  return pick(state.users, ['token', 'user']);
}

function mapDispatch(dispatch) {
  return {
  };
}

export default connect(mapState, mapDispatch)(AdminContainer);

