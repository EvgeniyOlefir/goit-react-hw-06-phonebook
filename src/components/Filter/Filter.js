import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import s from './Filter.module.css';

const ContactFilter = ({ value, onInputChange }) => {
  const id = uuidv4();
  return (
    <div className={s.filter}>
      <label className={s.filterLabel} htmlFor={id}>
        Find contact by name
      </label>
      <input
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
