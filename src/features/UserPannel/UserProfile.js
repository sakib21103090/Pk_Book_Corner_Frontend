// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
 
 
  selectCount,
} from './UserSlice';
// import styles from './Counter.module.css';

export default function User() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  


  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}
