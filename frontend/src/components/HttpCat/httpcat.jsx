import React, { useState } from 'react';
import Header from '../../components/Header/heder';
import Select from 'react-select';

import './styled.css';

function HttpCat() {
 const options = [
    { value: 100, label: 'Continue 100'},
    { value: 101, label: 'Switching protocols 101'},
    { value: 102, label: 'Processing 102'},
    { value: 103, label: 'Early Hints 103'},
    { value: 200, label: 'OK 200'},
    { value: 201, label: 'Created 201'},
    { value: 202, label: 'Accepted 202'},
    { value: 203, label: 'Non-Authoritative Information 203'},
    { value: 204, label: 'No Content 204'},
    { value: 205, label: 'Reset Content 205'},
    { value: 206, label: 'Partial Content 206'},
    { value: 207, label: 'Multi-Status 207'},
    { value: 208, label: 'Already Reported 208'},
    { value: 226, label: 'IM Used 226'},
    { value: 300, label: 'Multiple Choices 300'},
    { value: 301, label: 'Moved Permanently 301'},
    { value: 302, label: 'Found (Previously "Moved Temporarily") 302'},
    { value: 303, label: 'See Other 303'},
    { value: 304, label: 'Not Modified 304'},
    { value: 305, label: 'Use Proxy 305'},
    { value: 306, label: 'Switch Proxy306'},
    { value: 307, label: 'Temporary Redirect 307'},
    { value: 308, label: 'Permanent Redirect 308'},
    { value: 400, label: 'Bad Request 400'},
    { value: 401, label: 'Unauthorized 401'},
    { value: 402, label: 'Payment Required 402'},
    { value: 403, label: 'Forbidden 403'},
    { value: 404, label: 'Not Found 404'},
    { value: 405, label: 'Method Not Allowed 405'},
    { value: 406, label: 'Not Acceptable 406'},
    { value: 407, label: 'Proxy Authentication Required 407'},
    { value: 408, label: 'Request Timeout 408'},
    { value: 409, label: 'Conflict 409'},
    { value: 410, label: 'Gone 410'},
    { value: 411, label: 'Length Required 411'},
    { value: 412, label: 'Precondition Failed 412'},
    { value: 413, label: 'Payload Too Large 413'},
    { value: 414, label: 'URI Too Long 414'},
    { value: 415, label: 'Unsupported Media Type 415'},
    { value: 416, label: 'Range Not Satisfiable 416'},
    { value: 417, label: 'Expectation Failed 417'},
    { value: 418, label: 'I m a Teapot 418'},
    { value: 421, label: 'Misdirected Request 421'},
    { value: 422, label: 'Unprocessable Entity 422'},
    { value: 423, label: 'Locked 423'},
    { value: 424, label: 'Failed Dependency 424'},
    { value: 425, label: 'Too Early 425'},
    { value: 426, label: 'Upgrade Required 426'},
    { value: 428, label: 'Precondition Required 428'},
    { value: 429, label: 'Too Many Requests 429'},
    { value: 431, label: 'Request Header Fields Too Large 431'},
    { value: 451, label: 'Unavailable For Legal Reasons 451'},
    { value: 500, label: 'Internal Server Error 500'},
    { value: 501, label: 'Not Implemented 501'},
    { value: 502, label: 'Bad Gateway 502'},
    { value: 503, label: 'Service Unavailable 503'},
    { value: 504, label: 'Gateway Timeout 504'},
    { value: 505, label: 'HTTP Version Not Supported 505'},
    { value: 506, label: 'Variant Also Negotiates 506'},
    { value: 507, label: 'Insufficient Storage 507'},
    { value: 508, label: 'Loop Detected 508'},
    { value: 510, label: 'Not Extended 510'},
    { value: 511, label: 'Network Authentication Required 511'},
  ];

  const [selectedOption, setSelectedOption] = useState(200);

  return (
    <>
      <Header />
      <div className='container__cat'>
        <img src={`https://http.cat/${selectedOption.value}`} alt="Gato" width="500" height="400" />
        <div className='select'>
          <Select
            className='content__select'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </div>
    </>
  );
}

export default HttpCat;
