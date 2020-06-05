/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { setVisibilityFilter } from 'actions';
import FilterItem from 'components/filterItem';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
