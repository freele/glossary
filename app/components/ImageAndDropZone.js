
import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-react';
import Dropzone from '../libs/Dropzone.js';

@Cerebral({
  files: ['files'],
  images: ['images']
}, {})
class ImageAndDropZone extends React.Component {

  componentDidMount() {
    // this.props.signals.centralStatementUpdated();
  }

  onStatementClick(word) {
    // console.log('Click info', word);
    // this.props.signals.centralStatementUpdated({search: word});
  }

  onDrop(file) {
    this.props.signals.newFileWasDropped({file: file, index: this.props.index});
  }

  getStyle(img){
    // console.log('getStyle IMG', img);
    var style = {
      backgroundImage: 'url(' + img + ')',
    };
    return style;
  }

  renderImage(){
    if (this.props.files && this.props.files[this.props.index]){
      // console.log('this.props.files[this.props.index].url: ', this.props.files[this.props.index].url);
      return <img className="droppedImage-img" style={this.getStyle(this.props.files[this.props.index].url)} />
    }
  }

  render() {
    return (
      <Dropzone disableClick={true} className={'droppedImage' + this.props.index} ref="dropzone" onDrop={this.onDrop.bind(this)}>
      {
        this.renderImage()
        // this.props.files ? (this.props.files[this.props.index] && <img className="droppedImage-img" style={this.getStyle(this.props.files[this.props.index].preview)} />) : ''
        // (this.props.images ? <img className="droppedImage-img" style={this.getStyle(this.props.images[0].filename)} /> : '')
      }
      </Dropzone>
    );
  }
}

export default ImageAndDropZone;
