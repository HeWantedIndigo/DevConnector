import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addExperience } from '../../store/actions/profile';

const AddExperience = (props) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const dispatch = useDispatch();

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(formData, props.history));
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            value={title}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='* Job Title'
            name='title'
            required
          />
        </div>
        <div className='form-group'>
          <input
            value={company}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='* Company'
            name='company'
            required
          />
        </div>
        <div className='form-group'>
          <input
            value={location}
            onChange={(e) => onChange(e)}
            type='text'
            placeholder='Location'
            name='location'
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            value={from}
            onChange={(e) => onChange(e)}
            type='date'
            name='from'
          />
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            value={to}
            onChange={(e) => onChange(e)}
            type='date'
            name='to'
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              name='current'
            />{' '}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <textarea
            value={description}
            onChange={(e) => onChange(e)}
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default withRouter(AddExperience);
