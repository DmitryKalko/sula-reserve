import React from "react";

const imgUrl = 'https://dmitrykalko.github.io/rakovich/base/images/';

class PdfToPrint extends React.Component {

    render() {
        let { lastName, flagName, imgId } = this.props.selectedItem;
        let date = this.props.date;
        
        return (

            <div className="pdf">
                <h1 className='title'>Грамота Шляхтича</h1>
                <img className="flagForPdf" src={imgUrl + +imgId + '.png'} alt="flagImage" />
                <h4 className='firstString'>Настоящая грамота удостоверяет, что</h4>
                <h2 className='fio'>{this.props.fio}</h2>
                <h4 className='secondString'>принадлежит к шляхецкому роду</h4>
                <h2 className='familyName'>«{lastName}»</h2>
                <h4 className='thirdString'>с родовым гербом</h4>
                <h2 className='familyFlag'>«{flagName}»</h2>
                <p className="datePdf">{date}</p>
            </div>
        );
    }
}

export default PdfToPrint;