import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class meniu extends Component {
    componentDidMount(){
        document.title = "TotoPizza | Šilutė"
        var link=document.createElement('a');
        link.href = "Meniu.pdf";
        link.download = "Meniu.pdf".substr("Meniu.pdf".lastIndexOf('/') + 1);
        link.click();
    }
    
    render() {
        return (
           <div>
           </div>
        );
    }
}

export default meniu;