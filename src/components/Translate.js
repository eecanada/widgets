import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { use } from 'react/cjs/react.development';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  console.log(text);
  return (
    <div>
      <div className="ui form">
        <div className="field ">
          <label>Enter Text </label> 
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />
    </div>
  );
};

export default Translate;
