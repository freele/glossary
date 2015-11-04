
import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-react';
import Dropzone from '../libs/Dropzone.js';

@Cerebral({
  files: ['files']
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

  render() {
    return (
      <Dropzone disableClick={true} className={'droppedImage' + this.props.index} ref="dropzone" onDrop={this.onDrop.bind(this)}>
      {this.props.files ? (this.props.files[this.props.index] && <img src={this.props.files[this.props.index].preview} />) : ''}
      </Dropzone>
    );
  }
}

export default ImageAndDropZone;
