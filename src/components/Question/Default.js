import React from 'react';
import StudentForm from '../BusinessForm/StudentForm';

const Default = (props) => {
   return (
      <div>
         {props.sampleDescription ? <StudentForm StudentForm ={props.sampleDescription} /> : null}
      </div>
   );
}

export default Default;
