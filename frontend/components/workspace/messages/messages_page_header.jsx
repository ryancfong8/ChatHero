import React from 'react';
import { getChannelName } from '../../util/utils';

const MessagesPageHeader = props => {
  const { channel, currentUser, history } = props;
  const channelName = getChannelName(channel, currentUser.id);
  const icon =
    channel.channel_type === 'direct' ? (
      '• '
    ) : channel.channel_private ? (
      <i className="fas fa-lock mr-1"></i>
    ) : (
      <i className="fas fa-hashtag mr-1"></i>
    );
  return (
    <div className="messages-page-header">
      <h6 className="name">
        {icon}
        {channelName}
      </h6>
      <div className="members d-flex flex-row align-items-center">
        <div
          className="user-icon"
          onClick={e => {
            e.preventDefault();
            history.push(`/messages/${channel.id}/details/members`);
          }}
        >
          <i className="fa fa-user-o mr-1" aria-hidden="true"></i>
          {channel.members.length}
        </div>
      </div>
    </div>
  );
};

export default MessagesPageHeader;
