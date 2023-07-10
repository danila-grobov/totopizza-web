import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';


class meniu extends Component {
    componentDidMount() {
      // Simulating file download
      const fileName = 'TOTO_MENIU.pdf';
  
      fetch(fileName)
      .then(response => response.blob())
      .then(blob => {
        // Check if the browser supports the "msSaveBlob" method
        if (window.navigator && window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, fileName);
          window.location.href = '/';
        } else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          link.click();
          URL.revokeObjectURL(url);
          window.location.href = '/';
        }
      })
        .catch(error => console.log('Error:', error));
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
  }

export default meniu;