import React from 'react';
import { connect } from 'react-redux';
import ChannelList from './channel_list';
import {
  createChannel,
  getDirectChannels,
  getCurrentChannel,
  joinChannel,
  createNewNotification,
} from '../../../../actions/channel_actions';
import { receiveMessage } from '../../../../actions/message_actions';
import { getUsers } from '../../../../actions/users_actions';

const mapStateToProps = (state) => ({
  channels: state.channels.direct_channels.filter((channel) =>
    channel.members.find((member) => member.id === state.session.currentUser.id)
  ),
  channelType: 'direct',
  currentUserId: state.session.currentUser && state.session.currentUser.id,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel, member_ids) => dispatch(createChannel(channel, member_ids)),
  getChannels: () => dispatch(getDirectChannels()),
  getCurrentChannel: (id) => dispatch(getCurrentChannel(id)),
  getUsers: () => dispatch(getUsers()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  joinChannel: (membership) => dispatch(joinChannel(membership)),
  createNewNotification: (channel_id) => dispatch(createNewNotification(channel_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
