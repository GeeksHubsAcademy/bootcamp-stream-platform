import React from 'react';

const Json = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>
export default Json;