import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import RenderBubble from '../components/chatScreenComponents/RenderBubble';
import RenderInputToolbar from '../components/chatScreenComponents/RenderInputToolBar';
import RenderComposer from '../components/chatScreenComponents/RenderComposer';
import RenderSend from '../components/chatScreenComponents/RenderSend';
import HeaderComponent from '../components/chatScreenComponents/HeaderComponent';
import uuid from 'react-native-uuid';

const ChatScreen = () => {

    const [messages, setMessages] = useState([]);

    const onSend = (newMessages = []) => {
        newMessages = newMessages.map(message => ({
          ...message,
          _id: uuid.v4(), // Generate a unique ID using uuid
        }));
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    return (
        <>
            <HeaderComponent/>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{ _id: 1 }}
                renderBubble={RenderBubble}
                renderInputToolbar={RenderInputToolbar}
                renderSend={RenderSend}
                renderComposer={RenderComposer}
            />
        </>
    );
};
export default ChatScreen;