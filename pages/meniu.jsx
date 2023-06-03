import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class meniu extends Component {
    componentDidMount() {
      // Simulating file download
      const fileName = 'TOTO_MENIU.pdf';
  
      fetch(fileName)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          link.click();
          URL.revokeObjectURL(url);
        })
        .catch(error => console.log('Error:', error));
        window.location.href = '/';
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
  }

export default meniu;