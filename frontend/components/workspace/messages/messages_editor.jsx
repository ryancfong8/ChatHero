import React, { Component } from 'react';
import { EditorState, convertToRaw, getDefaultKeyBinding } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const MESSAGE__CREATE = 'Message.create';
const MESSAGE__UPDATE = 'Message.update';

class MessagesEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      hasError: false,
      disabled: false
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.keyBindingFn = this.keyBindingFn.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  //   componentDidMount() {
  //     document.addEventListener('keydown', this.keyBindingFn);
  //   }

  //   componentWillUnmount() {
  //     document.removeEventListener('keydown', this.keyBindingFn);
  //   }

  // detect keyCodes and send to handleKeyCommand
  keyBindingFn(e) {
    const { disabled, hasError } = this.state;
    // prevent line breaks if enter key is pressed and text is empty
    // if (e.keyCode === 13 && !e.shiftKey && !disabled && !hasError) {
    //   return this.handleKeyCommand('edit');
    // }
    if (e.keyCode === 13 && !e.shiftKey && !disabled) {
      return this.handleKeyCommand('submit');
    }
    // prevent hitting enter key to create line breaks if there is an error
    if (e.keyCode === 13 && !e.shiftKey) {
      return;
    }
    return getDefaultKeyBinding(e);
  }

  // handle command from keyBindingFn
  handleKeyCommand(command) {
    let result;
    switch (command) {
      case 'submit':
        this.messageAction(MESSAGE__CREATE);
        result = 'handled';
        break;
      case 'edit':
        this.messageAction(MESSAGE__UPDATE);
        result = 'handled';
        break;
    }
    return result;
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  async messageAction(action) {
    const { editorState } = this.state;
    const { createMessage, updateMessage, currentUser, currentChannel } = this.props;
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    let htmlString = draftToHtml(rawContentState);
    // remove the extra paragraph from the enter
    if (htmlString.slice(htmlString.length - 7, htmlString.length) === '<p></p>') {
      htmlString = htmlString.slice(0, htmlString.length - 7);
    }
    const message = {
      body: htmlString,
      user_id: currentUser.id,
      channel_id: currentChannel.id
    };
    if (action === MESSAGE__UPDATE) {
      await updateMessage(message);
    } else {
      await createMessage(message);
    }
    this.setState({
      editorState: EditorState.moveFocusToEnd(EditorState.createEmpty()),
      hasError: false,
      disabled: false
    });
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        toolbarClassName="editor-toolbar"
        onEditorStateChange={this.onEditorStateChange}
        keyBindingFn={this.keyBindingFn}
        handleKeyCommand={this.handleKeyCommand}
        toolbar={toolbarOptions}
      />
    );
  }
}

export default MessagesEditor;

const toolbarOptions = {
  options: [
    'inline',
    'list',
    // 'link',
    'emoji'
    // 'image',
  ],
  inline: {
    // inDropdown: false,
    // className: undefined,
    // component: undefined,
    // dropdownClassName: undefined,
    options: ['bold', 'italic', 'strikethrough', 'monospace']
    //   bold: { icon: bold, className: undefined },
    //   italic: { icon: italic, className: undefined },
    //   strikethrough: { icon: strikethrough, className: undefined }
  },
  list: {
    // inDropdown: false,
    // className: undefined,
    // component: undefined,
    // dropdownClassName: undefined,
    options: ['unordered', 'ordered']
    //   unordered: { icon: unordered, className: undefined },
    //   ordered: { icon: ordered, className: undefined }
  }
  //   link: {
  //     inDropdown: false,
  //     className: undefined,
  //     component: undefined,
  //     popupClassName: undefined,
  //     dropdownClassName: undefined,
  //     showOpenOptionOnHover: true,
  //     defaultTargetOption: '_self',
  //     options: ['link', 'unlink'],
  //     link: { icon: link, className: undefined },
  //     unlink: { icon: unlink, className: undefined },
  //     linkCallback: undefined
  //   },
  //   emoji: {
  //     icon: emoji,
  //     className: undefined,
  //     component: undefined,
  //     popupClassName: undefined,
  //     emojis: [
  //       '😀',
  //       '😁',
  //       '😂',
  //       '😃',
  //       '😉',
  //       '😋',
  //       '😎',
  //       '😍',
  //       '😗',
  //       '🤗',
  //       '🤔',
  //       '😣',
  //       '😫',
  //       '😴',
  //       '😌',
  //       '🤓',
  //       '😛',
  //       '😜',
  //       '😠',
  //       '😇',
  //       '😷',
  //       '😈',
  //       '👻',
  //       '😺',
  //       '😸',
  //       '😹',
  //       '😻',
  //       '😼',
  //       '😽',
  //       '🙀',
  //       '🙈',
  //       '🙉',
  //       '🙊',
  //       '👼',
  //       '👮',
  //       '🕵',
  //       '💂',
  //       '👳',
  //       '🎅',
  //       '👸',
  //       '👰',
  //       '👲',
  //       '🙍',
  //       '🙇',
  //       '🚶',
  //       '🏃',
  //       '💃',
  //       '⛷',
  //       '🏂',
  //       '🏌',
  //       '🏄',
  //       '🚣',
  //       '🏊',
  //       '⛹',
  //       '🏋',
  //       '🚴',
  //       '👫',
  //       '💪',
  //       '👈',
  //       '👉',
  //       '👉',
  //       '👆',
  //       '🖕',
  //       '👇',
  //       '🖖',
  //       '🤘',
  //       '🖐',
  //       '👌',
  //       '👍',
  //       '👎',
  //       '✊',
  //       '👊',
  //       '👏',
  //       '🙌',
  //       '🙏',
  //       '🐵',
  //       '🐶',
  //       '🐇',
  //       '🐥',
  //       '🐸',
  //       '🐌',
  //       '🐛',
  //       '🐜',
  //       '🐝',
  //       '🍉',
  //       '🍄',
  //       '🍔',
  //       '🍤',
  //       '🍨',
  //       '🍪',
  //       '🎂',
  //       '🍰',
  //       '🍾',
  //       '🍷',
  //       '🍸',
  //       '🍺',
  //       '🌍',
  //       '🚑',
  //       '⏰',
  //       '🌙',
  //       '🌝',
  //       '🌞',
  //       '⭐',
  //       '🌟',
  //       '🌠',
  //       '🌨',
  //       '🌩',
  //       '⛄',
  //       '🔥',
  //       '🎄',
  //       '🎈',
  //       '🎉',
  //       '🎊',
  //       '🎁',
  //       '🎗',
  //       '🏀',
  //       '🏈',
  //       '🎲',
  //       '🔇',
  //       '🔈',
  //       '📣',
  //       '🔔',
  //       '🎵',
  //       '🎷',
  //       '💰',
  //       '🖊',
  //       '📅',
  //       '✅',
  //       '❎',
  //       '💯'
  //     ]
  //   },
  //   embedded: {
  //     icon: embedded,
  //     className: undefined,
  //     component: undefined,
  //     popupClassName: undefined,
  //     embedCallback: undefined,
  //     defaultSize: {
  //       height: 'auto',
  //       width: 'auto'
  //     }
  //   }
  //   image: {
  //     icon: image,
  //     className: undefined,
  //     component: undefined,
  //     popupClassName: undefined,
  //     urlEnabled: true,
  //     uploadEnabled: true,
  //     alignmentEnabled: true,
  //     uploadCallback: undefined,
  //     previewImage: false,
  //     inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
  //     alt: { present: false, mandatory: false },
  //     defaultSize: {
  //       height: 'auto',
  //       width: 'auto'
  //     }
  //   }
};
